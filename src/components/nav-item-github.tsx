import { unstable_cache } from "next/cache"

import { SOURCE_CODE_GITHUB_REPO } from "@/config/site"
import { GitHubStars } from "@/components/github-stars"

export async function getStargazerCount(
  repo: string = SOURCE_CODE_GITHUB_REPO
) {
  return unstable_cache(
    async () => {
      const fetchWithToken = async (token?: string) => {
        try {
          const headers: HeadersInit = {
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
          }

          if (token) {
            headers["Authorization"] = `Bearer ${token}`
          }

          const response = await fetch(`https://api.github.com/repos/${repo}`, {
            headers,
            next: { revalidate: 3600 }, // Shorter revalidate for internal fetch
          })

          if (!response.ok) return null

          const json = (await response.json()) as { stargazers_count?: number }
          return Number(json?.stargazers_count) ?? 0
        } catch {
          return null
        }
      }

      // Try with token if available
      if (process.env.GITHUB_API_TOKEN) {
        const count = await fetchWithToken(process.env.GITHUB_API_TOKEN)
        if (count !== null) return count
      }

      // Fallback to without token
      const countWithoutToken = await fetchWithToken()
      return countWithoutToken ?? 0
    },
    ["github-stargazer-count", repo],
    { revalidate: 3600 } // Cache for 1 hour
  )()
}

export async function NavItemGitHub() {
  const stargazersCount = await getStargazerCount()

  return (
    <GitHubStars
      repo={SOURCE_CODE_GITHUB_REPO}
      stargazersCount={stargazersCount}
    />
  )
}
