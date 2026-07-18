import { BookmarkCategory, type Bookmark } from "../types/bookmarks"

export const BOOKMARKS: Bookmark[] = [
  {
    title: "Making Software",
    href: "https://www.makingsoftware.com/",
    author: "Dan Hollick",
    category: BookmarkCategory.BOOK,
    bookmarkedAt: "2026-07-18",
  },
  {
    title: "Devouring Details",
    href: "https://www.devouringdetails.com/",
    category: BookmarkCategory.REFERENCE,
    bookmarkedAt: "2026-07-18",
  },
  {
    title: "animations.dev",
    href: "https://animations.dev/",
    category: BookmarkCategory.COURSE,
    bookmarkedAt: "2026-07-18",
  },
]
