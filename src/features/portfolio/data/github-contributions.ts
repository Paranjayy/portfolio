import "server-only"

import { unstable_cache } from "next/cache"

import { GITHUB_USERNAME } from "@/config/site"
import type { Activity } from "@/registry/components/contribution-graph"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

export type GitHubContributionsStats = {
  total: number
  currentStreak: number
  bestStreak: number
  peak: number
  average: number
  dailyAverage: number
}

export const getGitHubContributions = unstable_cache(
  async () => {
    const res = await fetch(
      `${process.env.GITHUB_CONTRIBUTIONS_API_URL || "https://github-contributions-api.jogruber.de"}/v4/${GITHUB_USERNAME}?y=last`
    )
    if (!res.ok) {
      return [] as Activity[]
    }
    const data = (await res.json()) as GitHubContributionsResponse
    return data.contributions ?? []
  },
  ["github-contributions"],
  { revalidate: 86400 }
)

export async function getGitHubContributionsStats(): Promise<GitHubContributionsStats> {
  const contributions = await getGitHubContributions()
  return computeStats(contributions)
}

function computeStats(contributions: Activity[]): GitHubContributionsStats {
  if (contributions.length === 0) {
    return {
      total: 0,
      currentStreak: 0,
      bestStreak: 0,
      peak: 0,
      average: 0,
      dailyAverage: 0,
    }
  }

  const total = contributions.reduce((sum, c) => sum + (c.count || 0), 0)
  const peak = contributions.reduce((max, c) => Math.max(max, c.count || 0), 0)
  const activeDays = contributions.filter((c) => (c.count || 0) > 0).length
  const average = activeDays > 0 ? total / activeDays : 0
  const dailyAverage = total / contributions.length

  let bestStreak = 0
  let currentStreak = 0
  let run = 0
  const sorted = [...contributions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )
  for (const c of sorted) {
    if ((c.count || 0) > 0) {
      run += 1
      bestStreak = Math.max(bestStreak, run)
    } else {
      run = 0
    }
  }
  for (let i = sorted.length - 1; i >= 0; i--) {
    if ((sorted[i].count || 0) > 0) {
      currentStreak += 1
    } else {
      break
    }
  }

  return { total, currentStreak, bestStreak, peak, average, dailyAverage }
}
