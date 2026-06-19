import { Icons } from "@/components/icons"

import type { Bookmark } from "../types/bookmarks"

export const BOOKMARKS: Bookmark[] = [
  {
    title: "The Pragmatic Programmer",
    description: "Your journey to mastery. Essential reading for every software engineer.",
    href: "https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052",
    icon: <Icons.google />,
  },
  {
    title: "Clean Code",
    description: "A Handbook of Agile Software Craftsmanship.",
    href: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
    icon: <Icons.google />,
  },
  {
    title: "Component Architecture for React Server Components",
    url: "https://aurorascharff.no/posts/component-architecture-for-react-server-components",
    author: "Aurora Scharff",
    bookmarkedAt: "2026-05-30",
  },
  {
    title: "Details that make interfaces feel better",
    url: "https://interfaces.dev/magazine/issues/details-that-make-interfaces-feel-better",
    author: "Jakub Krehel",
    bookmarkedAt: "2026-06-05",
  },
  {
    title: "A Clock That Doesn’t Snap",
    url: "https://ethanniser.dev/blog/a-clock-that-doesnt-snap/",
    author: "Ethan Niser",
    bookmarkedAt: "2026-06-07",
  },
  {
    title: "Making Software",
    url: "https://www.makingsoftware.com",
    author: "Dan Hollick",
    bookmarkedAt: "2026-06-08",
  },
]
