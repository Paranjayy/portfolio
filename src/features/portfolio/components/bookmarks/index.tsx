import { compareDesc } from "date-fns"

import { CollapsibleList } from "@/components/collapsible-list"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { BOOKMARKS } from "@/features/portfolio/data/bookmarks"

import { BookmarkItem } from "./bookmark-item"

const SORTED_BOOKMARKS = [...BOOKMARKS].sort((a, b) => {
  const dateA = a.bookmarkedAt ? new Date(a.bookmarkedAt).getTime() : 0
  const dateB = b.bookmarkedAt ? new Date(b.bookmarkedAt).getTime() : 0
  return dateB - dateA
})

const ID = "bookmarks"

export function Bookmarks() {
  if (BOOKMARKS.length === 0) return null

  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Bookmarks</a>
          <PanelTitleSup>({SORTED_BOOKMARKS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={SORTED_BOOKMARKS}
        max={6}
        renderItem={(item) => <BookmarkItem bookmark={item} />}
      />
    </Panel>
  )
}
