import type { SocialProfile } from "@/features/portfolio/types/social-links"

/**
 * Keyed registry of social profiles — the single source of truth. Icons are
 * bound separately in `social-link-icons.tsx` (keyed by the same `SocialName`),
 * so adding a profile here forces the icon map to stay in sync at compile time.
 */
export const SOCIAL = {
  x: {
    title: "X",
    handle: "paranjaydotdev",
    href: "https://x.com/paranjaydotdev",
    category: "work",
    sameAs: true,
  },
  github: {
    title: "GitHub",
    handle: "Paranjayy",
    href: "https://github.com/Paranjayy",
    category: "work",
    sameAs: true,
  },
  linkedin: {
    title: "LinkedIn",
    handle: "paranjayy",
    href: "https://linkedin.com/in/paranjayy",
    category: "work",
    sameAs: true,
  },
  discord: {
    title: "Discord",
    handle: "paranjaydotdev",
    href: "https://discord.com/users/999432437740347486",
    category: "community",
  },
  duolingo: {
    title: "Duolingo",
    handle: "Paranjaydotdev",
    href: "https://www.duolingo.com/profile/Paranjaydotdev",
    category: "play",
  },
  spotify: {
    title: "Spotify",
    handle: "paranjay",
    href: "https://open.spotify.com/user/31rwgyebwncfeffpaavx6o5ygvaq",
    category: "play",
  },
  telegram: {
    title: "Telegram",
    handle: "Paranjayy",
    href: "https://t.me/Paranjayy",
    category: "community",
  },
  twitch: {
    title: "Twitch",
    handle: "michaelscott245",
    href: "https://twitch.tv/michaelscott245",
    category: "play",
  },
  pinterest: {
    title: "Pinterest",
    handle: "kparanjay",
    href: "https://pinterest.com/kparanjay",
    category: "play",
  },
  youtube: {
    title: "YouTube",
    handle: "MichealScott24",
    href: "https://www.youtube.com/@MichealScott24",
    category: "play",
    sameAs: true,
  },
  bluesky: {
    title: "Bluesky",
    handle: "paranjayy.bsky.social",
    href: "https://bsky.app/profile/paranjayy.bsky.social",
    category: "community",
  },
  gravatar: {
    title: "Gravatar",
    handle: "paranjay",
    href: "https://gravatar.com/sweetly00638681c8",
    category: "community",
  },
  steam: {
    title: "Steam",
    handle: "kparanjay245",
    href: "https://steamcommunity.com/id/kparanjay245",
    category: "play",
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
