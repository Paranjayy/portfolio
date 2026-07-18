import { compareDesc } from "date-fns"

import { CollapsibleList } from "@/components/collapsible-list"
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { AWARDS } from "@/features/portfolio/data/awards"

import { AwardItem } from "./award-item"

const SORTED_AWARDS = [...AWARDS].sort((a, b) => {
  return compareDesc(new Date(a.date), new Date(b.date))
})

const ID = "awards"

export function Awards() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Awards</a>
          <PanelTitleSup>({AWARDS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      {AWARDS.length > 0 ? (
        <CollapsibleList
          items={SORTED_AWARDS}
          max={6}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <AwardItem award={item} />}
        />
      ) : (
        <PanelContent className="font-mono text-sm text-muted-foreground">
          Awards will appear here once they are ready to share.
        </PanelContent>
      )}
    </Panel>
  )
}
