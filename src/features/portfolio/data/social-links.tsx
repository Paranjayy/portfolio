import * as Icons from "../components/social-links/icons"
import type { SocialLink } from "../types/social-links"

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: <Icons.XIcon />,
    title: "X",
    subtitle: "paranjaydotdev",
    href: "https://x.com/paranjaydotdev",
  },
  {
    icon: <Icons.GitHubIcon />,
    title: "GitHub",
    subtitle: "paranjaydotdev",
    href: "https://github.com/Paranjayy",
  },
  {
    icon: <Icons.LinkedInIcon />,
    title: "LinkedIn",
    subtitle: "paranjaydotdev",
    href: "https://www.linkedin.com/in/paranjayy/",
  },
  {
    icon: "https://cdn.simpleicons.org/discord",
    title: "Discord",
    subtitle: "paranjaydotdev",
    href: "https://discord.com/users/999432437740347486",
  },
  {
    icon: "https://cdn.simpleicons.org/spotify",
    title: "Spotify",
    subtitle: "paranjaydotdev",
    href: "https://open.spotify.com/user/31rwgyebwncfeffpaavx6o5ygvaq",
  },
  {
    icon: "https://cdn.simpleicons.org/telegram",
    title: "Telegram",
    subtitle: "paranjaydotdev",
    href: "https://t.me/Paranjayy",
  },
  {
    icon: "https://cdn.simpleicons.org/twitch",
    title: "Twitch",
    subtitle: "paranjaydotdev",
    href: "https://www.twitch.tv/michaelscott245",
  },
  {
    icon: "https://cdn.simpleicons.org/pinterest",
    title: "Pinterest",
    subtitle: "paranjaydotdev",
    href: "https://www.pinterest.com/kparanjay/",
  },
  {
    icon: "https://cdn.simpleicons.org/youtube",
    title: "YouTube",
    subtitle: "paranjaydotdev",
    href: "https://www.youtube.com/channel/UCSy5SX23Xrdxbxp0sh8i-hw",
  },
  {
    icon: <Icons.DuolingoIcon />,
    title: "Duolingo",
    subtitle: "paranjaydotdev",
    href: "https://www.duolingo.com/profile/Paranjayy",
  },
  {
    icon: <Icons.GravatarIcon />,
    title: "Gravatar",
    subtitle: "paranjaydotdev",
    href: "https://gravatar.com/sweetly00638681c8",
  },
  {
    icon: <Icons.VoltIcon />,
    title: "Volt.fm",
    subtitle: "paranjaydotdev",
    href: "https://volt.fm/paranjay",
  },
  {
    icon: "https://www.boot.dev/blog/img/800/boots_face_logo_full.png",
    title: "Boot.dev",
    subtitle: "paranjaydotdev",
    href: "https://www.boot.dev/u/paranjay",
  },
  {
    icon: <Icons.ChessMonitorIcon />,
    title: "ChessMonitor",
    subtitle: "paranjaydotdev",
    href: "https://www.chessmonitor.com/u/CVGtzOa4szU1fVg3IHif",
  },
]

export function getSocialLinkByName(name: string) {
  return SOCIAL_LINKS.find(
    (link) => link.title.toLowerCase() === name.toLowerCase()
  )
}
