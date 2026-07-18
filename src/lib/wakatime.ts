const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY

type WakaTimeResponse = {
  data?: {
    total_seconds?: number
    human_readable_total?: string
    daily_average?: number
    human_readable_daily_average?: string
    languages?: unknown[]
  }
}

export const getWakaTimeStats = async () => {
  if (!WAKATIME_API_KEY) {
    return {
      available: false,
      total_seconds: 0,
      human_readable_total: "Unavailable",
      daily_average: 0,
      human_readable_daily_average: "Unavailable",
    }
  }

  const response = await fetch(
    `https://wakatime.com/api/v1/users/current/stats/last_7_days`,
    {
      headers: {
        Authorization: `Basic ${btoa(WAKATIME_API_KEY)}`,
      },
      next: { revalidate: 86400 }, // Cache for 24 hours
    }
  )

  if (!response.ok) {
    return {
      available: false,
      total_seconds: 0,
      human_readable_total: "Unavailable",
      daily_average: 0,
      human_readable_daily_average: "Unavailable",
    }
  }

  const data = (await response.json()) as WakaTimeResponse

  return {
    available: true,
    total_seconds: data?.data?.total_seconds || 0,
    human_readable_total: data?.data?.human_readable_total || "0h 0m",
    daily_average: data?.data?.daily_average || 0,
    human_readable_daily_average:
      data?.data?.human_readable_daily_average || "0h 0m",
    languages: data?.data?.languages || [],
  }
}
