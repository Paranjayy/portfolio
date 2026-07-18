import { Suspense } from "react"

import {
  getGitHubContributions,
  getGitHubContributionsStats,
} from "@/features/portfolio/data/github-contributions"

import { Panel } from "../panel"
import { GitHubContributionFallback, GitHubContributionGraph } from "./graph"
import { GitHubContributionStats } from "./stats"

export async function GitHubContributions() {
  const contributions = getGitHubContributions()
  const stats = await getGitHubContributionsStats()

  return (
    <Panel className="screen-line-top-none">
      <h2 className="sr-only">GitHub Contributions</h2>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph contributions={contributions} />
      </Suspense>

      <div className="border-t border-line px-4 py-3">
        <Suspense fallback={null}>
          <GitHubContributionStats stats={stats} />
        </Suspense>
      </div>
    </Panel>
  )
}
