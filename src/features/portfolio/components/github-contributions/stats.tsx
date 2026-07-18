import type { GitHubContributionsStats } from "@/features/portfolio/data/github-contributions"

export function GitHubContributionStats({
  stats,
}: {
  stats: GitHubContributionsStats
}) {
  if (stats.total === 0) return null

  return (
    <dl className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono">
      <Stat label="Current Streak" value={`${stats.currentStreak}d`} />
      <Stat label="Best Streak" value={`${stats.bestStreak}d`} />
      <Stat label="Peak" value={stats.peak.toString()} />
      <Stat label="Average" value={stats.average.toFixed(2)} />
    </dl>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-1.5">
      <dt className="text-muted-foreground text-[10px] uppercase tracking-wider">
        {label}
      </dt>
      <dd className="text-sm font-semibold text-foreground tabular-nums">
        {value}
      </dd>
    </div>
  )
}
