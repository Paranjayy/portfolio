import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_APP_URL || "https://paranjay.dev",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const LICENSE = {
  name: "MIT License",
  url: "https://github.com/Paranjayy/chanhdai.com/blob/main/LICENSE",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem<Route>[] = [
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Lab",
    href: "/lab",
  },
  {
    title: "Socials",
    href: "/socials",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
]

export const MOBILE_NAV: NavItem<Route>[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const X_HANDLE = SOCIAL.x.handle
export const GITHUB_USERNAME = SOCIAL.github.handle
export const SOURCE_CODE_GITHUB_REPO = "Paranjayy/portfolio"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/Paranjayy/portfolio"

export const SPONSORSHIP_URL = "https://github.com/sponsors/Paranjayy"

export const UTM_PARAMS = {
  utm_source: "paranjay.dev",
}
