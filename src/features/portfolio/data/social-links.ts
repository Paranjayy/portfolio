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
  duolingo: {
    title: "Duolingo",
    handle: "Paranjaydotdev",
    href: "https://www.duolingo.com/profile/Paranjaydotdev",
    category: "play",
  },
  volt: {
    title: "Volt.fm",
    handle: "paranjay",
    href: "https://volt.fm/paranjay",
    category: "play",
  },
  statsfm: {
    title: "stats.fm",
    handle: "paranjay",
    href: "https://stats.fm/paranjay",
    category: "play",
  },
  lastfm: {
    title: "Last.fm",
    handle: "paranjay",
    href: "https://www.last.fm/user/paranjay",
    category: "play",
  },
  leetcode: {
    title: "LeetCode",
    handle: "Paranjayy",
    href: "https://leetcode.com/u/Paranjayy/",
    category: "work",
  },
  hackerrank: {
    title: "HackerRank",
    handle: "kparanjay245",
    href: "https://www.hackerrank.com/profile/kparanjay245",
    category: "work",
  },
  codewars: {
    title: "Codewars",
    handle: "Paranjayy",
    href: "https://www.codewars.com/users/Paranjayy",
    category: "work",
  },
  kaggle: {
    title: "Kaggle",
    handle: "paranjayy",
    href: "https://www.kaggle.com/paranjayy",
    category: "work",
  },
  stackoverflow: {
    title: "Stack Overflow",
    handle: "Khachar Paranjay",
    href: "https://stackoverflow.com/users/22587473/khachar-paranjay",
    category: "work",
  },
  hashnode: {
    title: "Hashnode",
    handle: "paranjayy",
    href: "https://hashnode.com/@paranjayy",
    category: "work",
  },
  docker: {
    title: "Docker Hub",
    handle: "paranjay245",
    href: "https://hub.docker.com/u/paranjay245",
    category: "work",
  },
  monkeytype: {
    title: "Monkeytype",
    handle: "Paranjayy",
    href: "https://monkeytype.com/profile/Paranjayy",
    category: "play",
  },
  huggingface: {
    title: "Hugging Face",
    handle: "paranjay",
    href: "https://huggingface.co/paranjay",
    category: "work",
  },
  codepen: {
    title: "CodePen",
    handle: "paranjayy",
    href: "https://codepen.io/paranjayy",
    category: "work",
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
