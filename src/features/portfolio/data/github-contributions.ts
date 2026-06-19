import "server-only"

import { unstable_cache } from "next/cache"

import { GITHUB_USERNAME } from "@/config/site"
import type { Activity } from "@/registry/components/contribution-graph"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

export const getGitHubContributions = unstable_cache(
  async () => {
    try {
      const res = await fetch(
        `${process.env.GITHUB_CONTRIBUTIONS_API_URL || "https://github-contributions-api.jogruber.de"}/v4/${GITHUB_USERNAME}?y=last`,
        { next: { revalidate: 86400 } }
      )
      
      if (!res.ok) {
        throw new Error(`GitHub API returned ${res.status}`)
      }

      const data = (await res.json()) as GitHubContributionsResponse
      
      if (!data || !Array.isArray(data.contributions)) {
        throw new Error("Invalid GitHub contributions data format")
      }

      return data.contributions
    } catch (e) {
      console.error("Failed to fetch GitHub contributions:", e)
      return [] // Return empty array instead of crashing
    }
  },
  ["github-contributions"],
  { revalidate: 86400 }
)
