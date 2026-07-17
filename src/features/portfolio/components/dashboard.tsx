"use client"

import { useEffect, useState } from "react"

import { CountUp } from "@/components/count-up"
import { DiscordIcon } from "@/components/icons"
import { cn } from "@/lib/utils"
import { LaptopIcon, MusicIcon, Gamepad2Icon } from "lucide-react"

import { Panel } from "./panel"

type SpotifyData = {
  isPlaying: boolean
  title?: string
  artist?: string
  songUrl?: string
}

type WakaTimeData = {
  total_seconds: number
  human_readable_total: string
  daily_average: number
}

export function Dashboard() {
  const [spotify, setSpotify] = useState<SpotifyData>({ isPlaying: false })
  const [wakatime, setWakatime] = useState<WakaTimeData | null>(null)

  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const res = await fetch("/api/spotify/now-playing")
        const data = (await res.json()) as SpotifyData
        setSpotify(data)
      } catch (e: any) {
        console.error("Failed to fetch Spotify", e)
      }
    }

    const fetchWakaTime = async () => {
      try {
        const res = await fetch("/api/stats/wakatime")
        const data = (await res.json()) as WakaTimeData
        setWakatime(data)
      } catch (e: any) {
        console.error("Failed to fetch WakaTime", e)
      }
    }

    fetchSpotify()
    fetchWakaTime()
    const interval = setInterval(() => {
      fetchSpotify()
      fetchWakaTime()
    }, 60000) // Update every 1m
    return () => clearInterval(interval)
  }, [])

  return (
    <Panel className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
      <DashboardItem
        title="Coding Activity"
        value={
          wakatime ? (
            <div className="flex items-baseline gap-1">
              <CountUp value={Math.floor(wakatime.total_seconds / 3600)} />
              <span className="text-sm font-medium opacity-40">h</span>
              <CountUp
                value={Math.floor((wakatime.total_seconds % 3600) / 60)}
              />
              <span className="text-sm font-medium opacity-40">m</span>
            </div>
          ) : (
            "---"
          )
        }
        subtitle={wakatime ? "Last 7 days" : "Loading..."}
        icon={<LaptopIcon className="size-4" />}
      />
      <DashboardItem
        title="Spotify"
        value={spotify.isPlaying ? spotify.title! : "Not Playing"}
        subtitle={spotify.isPlaying ? `by ${spotify.artist}` : "Resting"}
        icon={
          <MusicIcon
            className={cn(
              "size-4",
              spotify.isPlaying && "animate-pulse text-emerald-500"
            )}
          />
        }
        href={spotify.songUrl}
      />
      <DashboardItem
        title="Discord"
        value="Online"
        subtitle="Idle"
        icon={<DiscordIcon className="size-4" />}
      />
      <DashboardItem
        title="Steam"
        value="Offline"
        subtitle="Last: Elden Ring"
        icon={<Gamepad2Icon className="size-4" />}
      />
    </Panel>
  )
}

function DashboardItem({
  title,
  value,
  subtitle,
  icon,
  href,
}: {
  title: string
  value: React.ReactNode
  subtitle: string
  icon: React.ReactNode
  href?: string
}) {
  const Content = (
    <div className="group flex h-full flex-col gap-2 bg-background p-4 transition-colors hover:bg-accent-muted/50">
      <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground">
        {icon}
        <span className="font-mono text-[10px] font-bold tracking-widest uppercase">
          {title}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="line-clamp-1 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {value}
        </span>
        <span className="text-xs text-muted-foreground group-hover:text-foreground/70">
          {subtitle}
        </span>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener" className="block">
        {Content}
      </a>
    )
  }

  return Content
}
