"use client"

import { cn } from "@/lib/utils"

export type WakaTimeStatsProps = {
  data: {
    name: string
    percent: number
    color: string
  }[]
  className?: string
}

export function WakaTimeStats({ data, className }: WakaTimeStatsProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex h-3 w-full overflow-hidden rounded-full bg-muted">
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              width: `${item.percent}%`,
              backgroundColor: item.color,
            }}
            className="h-full transition-all duration-500"
            title={`${item.name}: ${item.percent}%`}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 md:grid-cols-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="size-2 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="font-mono text-[10px] font-medium tracking-tight text-muted-foreground uppercase">
              {item.name}
            </span>
            <span className="font-mono text-[10px] font-bold text-foreground">
              {item.percent}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
