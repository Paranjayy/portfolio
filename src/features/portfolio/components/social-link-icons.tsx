import {
  ChartNoAxesCombinedIcon,
  CloudIcon,
  Gamepad2Icon,
  LanguagesIcon,
  Music2Icon,
  PinIcon,
  RadioIcon,
  SendIcon,
  TvIcon,
  WavesIcon,
} from "lucide-react"

import {
  DiscordIcon,
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/icons"
import type { SocialName } from "@/features/portfolio/data/social-links"

/**
 * Presentation binding for social profiles. Kept separate from the social
 * data so the data layer stays JSX-free. These use bundled glyphs rather than
 * a third-party icon CDN: every profile remains legible if that CDN is slow,
 * blocked, or changes its response.
 */
export const SOCIAL_ICONS: Record<SocialName, React.JSX.Element> = {
  x: <XIcon />,
  github: <GitHubIcon />,
  linkedin: <LinkedInIcon />,
  discord: <DiscordIcon />,
  spotify: <Music2Icon className="text-[#1ed760]" />,
  telegram: <SendIcon className="text-[#229ed9]" />,
  twitch: <TvIcon className="text-[#9146ff]" />,
  pinterest: <PinIcon className="text-[#e60023]" />,
  youtube: <YouTubeIcon />,
  bluesky: <CloudIcon className="text-[#1185fe]" />,
  gravatar: <WavesIcon className="text-[#1e8cbe]" />,
  steam: <Gamepad2Icon />,
  duolingo: <LanguagesIcon className="text-[#58cc02]" />,
  volt: <WavesIcon className="text-[#ff5d9e]" />,
  statsfm: <ChartNoAxesCombinedIcon className="text-[#1ed760]" />,
  lastfm: <RadioIcon className="text-[#d51007]" />,
}
