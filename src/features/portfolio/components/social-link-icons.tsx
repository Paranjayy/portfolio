import Image from "next/image"
import { CodepenIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { BoxIcon, ChartNoAxesCombinedIcon, WavesIcon } from "lucide-react"
import type { SimpleIcon } from "simple-icons"
import {
  siBehance,
  siBluesky,
  siCodewars,
  siDocker,
  siFigma,
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
  siYoutube,
} from "simple-icons"

import {
  DiscordIcon,
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons"
import type { SocialName } from "@/features/portfolio/data/social-links"

/**
 * Exact brand marks are bundled with the app rather than fetched from an icon
 * CDN, keeping the social directory both recognisable and reliable.
 */
export const SOCIAL_ICONS: Record<SocialName, React.JSX.Element> = {
  x: <XIcon />,
  github: <GitHubIcon />,
  linkedin: <LinkedInIcon />,
  discord: <DiscordIcon />,
  spotify: <BrandIcon icon={siSpotify} />,
  telegram: <BrandIcon icon={siTelegram} />,
  twitch: <BrandIcon icon={siTwitch} />,
  pinterest: <BrandIcon icon={siPinterest} />,
  youtube: <BrandIcon icon={siYoutube} />,
  bluesky: <BrandIcon icon={siBluesky} />,
  gravatar: <BrandIcon icon={siGravatar} />,
  steam: <BrandIcon icon={siSteam} monochrome />,
  duolingo: <DuolingoIcon />,
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
  makerworld: <BoxIcon className="text-[#ff6b00]" />,
  figma: <BrandIcon icon={siFigma} />,
  behance: <BrandIcon icon={siBehance} />,
}

function BrandIcon({
  icon,
  monochrome = false,
}: {
  icon: SimpleIcon
  monochrome?: boolean
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      fill={monochrome ? "currentColor" : `#${icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  )
}

function DuolingoIcon() {
  return (
    <Image
      src="https://play-lh.googleusercontent.com/Q-wEiKezZQEspFNNrWfKjcEgAqdWy_b98_tXTAZaXGgm9y1HZ1zi-JSZXA7Tmur9MjcM0xoIA0BdXEN0Bt54=w240-h480-rw"
      width={48}
      height={48}
      className="rounded-[3px] object-cover"
      alt=""
      aria-hidden="true"
    />
  )
}

function CodePenIcon() {
  return <HugeiconsIcon icon={CodepenIcon} strokeWidth={2} />
}
