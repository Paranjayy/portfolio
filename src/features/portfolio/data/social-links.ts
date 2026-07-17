import type { SocialProfile } from "@/features/portfolio/types/social-links"

/**
 * Keyed registry of social profiles — the single source of truth. Icons are
 * bound separately in `social-link-icons.tsx` (keyed by the same `SocialName`),
 * so adding a profile here forces the icon map to stay in sync at compile time.
 */
export const SOCIAL = {
  x: {
    title: "X",
    handle: "paranjay245",
    href: "https://x.com/paranjay245",
    sameAs: true,
  },
  github: {
    title: "GitHub",
    handle: "Paranjayy",
    href: "https://github.com/Paranjayy",
    sameAs: true,
  },
  linkedin: {
    title: "LinkedIn",
    handle: "paranjayy",
    href: "https://linkedin.com/in/paranjayy",
    sameAs: true,
  },
  discord: {
    title: "Discord",
    handle: "paranjayy",
    href: "https://discord.com/users/999432437740347486",
  },
  spotify: {
    title: "Spotify",
    handle: "paranjay",
    href: "https://open.spotify.com/user/31rwgyebwncfeffpaavx6o5ygvaq",
  },
  telegram: {
    title: "Telegram",
    handle: "Paranjayy",
    href: "https://t.me/Paranjayy",
  },
  twitch: {
    title: "Twitch",
    handle: "michaelscott245",
    href: "https://twitch.tv/michaelscott245",
  },
  pinterest: {
    title: "Pinterest",
    handle: "kparanjay",
    href: "https://pinterest.com/kparanjay",
  },
  youtube: {
    title: "YouTube",
    handle: "paranjayy",
    href: "https://www.youtube.com/@paranjayy",
    sameAs: true,
  },
  instagram: {
    title: "Instagram",
    handle: "paranjayy",
    href: "https://instagram.com/paranjayy",
  },
  bluesky: {
    title: "Bluesky",
    handle: "paranjayy.bsky.social",
    href: "https://bsky.app/profile/paranjayy.bsky.social",
  },
  gravatar: {
    title: "Gravatar",
    handle: "paranjay",
    href: "https://gravatar.com/sweetly00638681c8",
  },
  steam: {
    title: "Steam",
    handle: "kparanjay245",
    href: "https://steamcommunity.com/id/kparanjay245",
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
