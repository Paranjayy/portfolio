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
    sameAs: true,
  },
  github: {
    title: "GitHub",
    handle: "paranjaydotdev",
    href: "https://github.com/Paranjayy",
    sameAs: true,
  },
  linkedin: {
    title: "LinkedIn",
    handle: "paranjaydotdev",
    href: "https://www.linkedin.com/in/paranjayy/",
    sameAs: true,
  },
  discord: {
    title: "Discord",
    handle: "paranjaydotdev",
    href: "https://discord.com/users/999432437740347486",
  },
  spotify: {
    title: "Spotify",
    handle: "paranjaydotdev",
    href: "https://open.spotify.com/user/31kn4nlswdme2nrb34m6hkjwkrma",
  },
  telegram: {
    title: "Telegram",
    handle: "paranjaydotdev",
    href: "https://t.me/paranjaydotdev",
  },
  twitch: {
    title: "Twitch",
    handle: "paranjaydotdev",
    href: "https://www.twitch.tv/paranjaydotdev",
  },
  pinterest: {
    title: "Pinterest",
    handle: "paranjaydotdev",
    href: "https://pinterest.com/paranjaydotdev/",
  },
  youtube: {
    title: "YouTube",
    handle: "paranjaydotdev",
    href: "https://www.youtube.com/@paranjaydotdev",
    sameAs: true,
  },
  duolingo: {
    title: "Duolingo",
    handle: "paranjaydotdev",
    href: "https://www.duolingo.com/profile/paranjaydotdev",
  },
  gravatar: {
    title: "Gravatar",
    handle: "paranjaydotdev",
    href: "https://gravatar.com/paranjaydotdev",
  },
  bootdev: {
    title: "Boot.dev",
    handle: "paranjaydotdev",
    href: "https://boot.dev/paranjaydotdev",
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
