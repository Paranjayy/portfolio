import { CodepenIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { ChartNoAxesCombinedIcon, WavesIcon } from "lucide-react"
import type { SimpleIcon } from "simple-icons"
import {
  siBluesky,
  siCodewars,
  siDocker,
  siDuolingo,
  siGithub,
  siGravatar,
  siHackerrank,
  siHashnode,
  siHuggingface,
  siKaggle,
  siLastdotfm,
  siLeetcode,
  siMonkeytype,
  siPinterest,
  siSpotify,
  siStackoverflow,
  siSteam,
  siTelegram,
  siTwitch,
  siX,
  siYoutube,
} from "simple-icons"

import { DiscordIcon, LinkedInIcon } from "@/components/icons"
import type { SocialName } from "@/features/portfolio/data/social-links"

/**
 * Exact brand marks are bundled with the app rather than fetched from an icon
 * CDN, keeping the social directory both recognisable and reliable.
 */
export const SOCIAL_ICONS: Record<SocialName, React.JSX.Element> = {
  x: <BrandIcon icon={siX} />,
  github: <BrandIcon icon={siGithub} />,
  linkedin: <LinkedInIcon />,
  discord: <DiscordIcon />,
  spotify: <BrandIcon icon={siSpotify} />,
  telegram: <BrandIcon icon={siTelegram} />,
  twitch: <BrandIcon icon={siTwitch} />,
  pinterest: <BrandIcon icon={siPinterest} />,
  youtube: <BrandIcon icon={siYoutube} />,
  bluesky: <BrandIcon icon={siBluesky} />,
  gravatar: <BrandIcon icon={siGravatar} />,
  steam: <BrandIcon icon={siSteam} />,
  duolingo: <BrandIcon icon={siDuolingo} />,
  volt: <WavesIcon className="text-[#ff5d9e]" />,
  statsfm: <ChartNoAxesCombinedIcon className="text-[#1ed760]" />,
  lastfm: <BrandIcon icon={siLastdotfm} />,
  leetcode: <BrandIcon icon={siLeetcode} />,
  hackerrank: <BrandIcon icon={siHackerrank} />,
  codewars: <BrandIcon icon={siCodewars} />,
  kaggle: <BrandIcon icon={siKaggle} />,
  stackoverflow: <BrandIcon icon={siStackoverflow} />,
  hashnode: <BrandIcon icon={siHashnode} />,
  docker: <BrandIcon icon={siDocker} />,
  monkeytype: <BrandIcon icon={siMonkeytype} />,
  huggingface: <BrandIcon icon={siHuggingface} />,
  codepen: <CodePenIcon />,
}

function BrandIcon({ icon }: { icon: SimpleIcon }) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      fill={`#${icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  )
}

function CodePenIcon() {
  return <HugeiconsIcon icon={CodepenIcon} strokeWidth={2} />
}
