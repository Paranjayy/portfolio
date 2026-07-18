import {
  DiscordIcon,
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/icons"
import type { SocialName } from "@/features/portfolio/data/social-links"

function CdnIcon({
  slug,
  alt,
  color,
}: {
  slug: string
  alt: string
  color?: string
}) {
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ""}`}
      alt={alt}
      className="size-4.5"
      loading="lazy"
    />
  )
}

/**
 * Presentation binding for social profiles. Kept separate from the social
 * data so the data layer stays JSX-free. Keyed by `SocialName` so it stays
 * exhaustive with the registry.
 */
export const SOCIAL_ICONS: Record<SocialName, React.JSX.Element> = {
  x: <XIcon />,
  github: <GitHubIcon />,
  linkedin: <LinkedInIcon />,
  discord: <DiscordIcon />,
  duolingo: <CdnIcon slug="duolingo" alt="Duolingo" />,
  spotify: <CdnIcon slug="spotify" alt="Spotify" />,
  telegram: <CdnIcon slug="telegram" alt="Telegram" />,
  twitch: <CdnIcon slug="twitch" alt="Twitch" />,
  pinterest: <CdnIcon slug="pinterest" alt="Pinterest" />,
  youtube: <YouTubeIcon />,
  bluesky: <CdnIcon slug="bluesky" alt="Bluesky" />,
  gravatar: <CdnIcon slug="gravatar" alt="Gravatar" />,
  steam: <CdnIcon slug="steam" color="ffffff" alt="Steam" />,
}
