import { unstable_cache } from "next/cache"

import { SOURCE_CODE_GITHUB_REPO } from "@/config/site"
import { GitHubStars } from "@/components/github-stars"

export const getStargazerCount = unstable_cache(
  async (repo: string = SOURCE_CODE_GITHUB_REPO) => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${repo}`,
        {
          headers: {
            Accept: "application/vnd.github+json",
            ...(process.env.GITHUB_API_TOKEN
              ? { Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}` }
              : {}),
            "X-GitHub-Api-Version": "2022-11-28",
          },
          next: { revalidate: 3600 },
        }
      )

      if (!response.ok) {
        return 0
      }

      const json = (await response.json()) as { stargazers_count?: number }
      return Number(json?.stargazers_count) || 0
    } catch {
      return 0
    }
  },
  ["github-stargazer-count-v2"],
  { revalidate: 3600 } // Cache for 1 hour
)

export async function NavItemGitHub() {
  const stargazersCount = await getStargazerCount()

  return (
    <GitHubStars
      repo={SOURCE_CODE_GITHUB_REPO}
      stargazersCount={stargazersCount}
    />
  )
}
