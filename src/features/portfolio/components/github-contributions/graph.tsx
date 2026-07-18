"use client"

import { use } from "react"
import { format, getISOWeek, startOfWeek } from "date-fns"
import { LoaderIcon } from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import type { Activity } from "@/registry/components/contribution-graph"
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/registry/components/contribution-graph"

export function GitHubContributionGraph({
  contributions,
}: {
  contributions: Promise<Activity[]>
}) {
  const data = use(contributions)

  return (
    <ContributionGraph
      className="mx-auto gap-4 py-4 [--contribution-level-0:var(--muted)] [--contribution-level-1:color-mix(in_oklab,var(--foreground)_32%,var(--background))] [--contribution-level-2:color-mix(in_oklab,var(--foreground)_52%,var(--background))] [--contribution-level-3:color-mix(in_oklab,var(--foreground)_72%,var(--background))] [--contribution-level-4:var(--foreground)]"
      data={data}
      blockSize={12}
      blockMargin={2}
      blockRadius={0}
      aria-label="GitHub Contributions Graph"
    >
      <ContributionGraphCalendar
        className="px-4 **:data-[slot=month-labels]:text-muted-foreground"
        title="GitHub Contributions"
        aria-hidden
      >
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip>
            <TooltipTrigger
              render={
                <g>
                  <ContributionGraphBlock
                    activity={activity}
                    dayIndex={dayIndex}
                    weekIndex={weekIndex}
                  />
                </g>
              }
            />
            <TooltipContent className="font-sans">
              <p>
                {activity.count} contribution{activity.count > 1 ? "s" : null}{" "}
                on {format(new Date(activity.date), "dd.MM.yyyy")}
              </p>
            </TooltipContent>
          </Tooltip>
        )}
      </ContributionGraphCalendar>

      <WeeklyContributionAxis contributions={data} />

      <ContributionGraphFooter className="gap-4 px-4 leading-none">
        <ContributionGraphTotalCount>
          {({ totalCount }) => (
            <div className="text-muted-foreground">
              {totalCount.toLocaleString("en")} contributions in the past 365
              days.
            </div>
          )}
        </ContributionGraphTotalCount>

        <ContributionGraphLegend aria-hidden />
      </ContributionGraphFooter>
    </ContributionGraph>
  )
}

type WeekSummary = {
  key: string
  label: string
  start: Date
  total: number
  days: number
}

function WeeklyContributionAxis({
  contributions,
}: {
  contributions: Activity[]
}) {
  const weeks = [...contributions]
    .sort((a, b) => a.date.localeCompare(b.date))
    .reduce<WeekSummary[]>((summaries, activity) => {
      const date = new Date(`${activity.date}T12:00:00`)
      const start = startOfWeek(date, { weekStartsOn: 0 })
      const key = format(start, "yyyy-MM-dd")
      const last = summaries.at(-1)

      if (last?.key === key) {
        last.total += activity.count
        last.days += 1
        return summaries
      }

      summaries.push({
        key,
        label: `W${String(getISOWeek(date)).padStart(2, "0")}`,
        start,
        total: activity.count,
        days: 1,
      })
      return summaries
    }, [])

  if (weeks.length === 0) return null

  return (
    <div className="-mt-3 no-scrollbar overflow-x-auto px-4 pb-0">
      <div
        className="ml-7.5 flex w-max gap-0.5"
        aria-label="Weekly contribution averages"
      >
        {weeks.map((week, index) => {
          const average = week.total / week.days
          const range = `${format(week.start, "dd MMM")}–${format(
            new Date(week.start.getTime() + 6 * 86_400_000),
            "dd MMM"
          )}`

          return (
            <Tooltip key={week.key}>
              <TooltipTrigger
                render={
                  <button
                    type="button"
                    className="w-3.5 shrink-0 text-left font-mono text-[8px] leading-none text-muted-foreground/55 transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
                    aria-label={`${week.label}: ${average.toFixed(1)} average contributions per day`}
                  >
                    {index % 4 === 0 ? week.label : ""}
                  </button>
                }
              />
              <TooltipContent className="font-sans">
                <p className="font-medium">
                  {week.label} · {range}
                </p>
                <p className="text-muted-foreground">
                  {week.total} contributions · {average.toFixed(1)} avg/day
                </p>
              </TooltipContent>
            </Tooltip>
          )
        })}
      </div>
    </div>
  )
}

export function GitHubContributionFallback() {
  return (
    <div className="flex h-45 w-full items-center justify-center">
      <LoaderIcon className="animate-spin text-muted-foreground" />
    </div>
  )
}
