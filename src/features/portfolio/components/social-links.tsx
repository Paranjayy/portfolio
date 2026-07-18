"use client"

import { useMemo, useState } from "react"
import { addQueryParams } from "@/utils/url"
import { LayoutGridIcon, ListIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import { Button } from "@/components/base/ui/button"
import { Panel, PanelContent } from "@/features/portfolio/components/panel"
import { SOCIAL_ICONS } from "@/features/portfolio/components/social-link-icons"
import {
  SOCIAL_LINKS,
  type SocialLink,
} from "@/features/portfolio/data/social-links"

type View = "directory" | "icons"

const CATEGORY_LABELS = {
  work: "Work",
  community: "Community",
  play: "Off the clock",
} as const

export function SocialLinks() {
  const [view, setView] = useState<View>("directory")
  const groups = useMemo(
    () =>
      (Object.keys(CATEGORY_LABELS) as Array<keyof typeof CATEGORY_LABELS>).map(
        (category) => ({
          category,
          links: SOCIAL_LINKS.filter((link) => link.category === category),
        })
      ),
    []
  )

  return (
    <Panel>
      <div className="flex items-center justify-between border-b border-line px-4 py-2">
        <div>
          <h2 className="font-mono text-xs font-semibold tracking-widest uppercase">
            Find me elsewhere
          </h2>
          <p className="mt-0.5 text-xs text-muted-foreground">
            A small directory, not a wall of icons.
          </p>
        </div>
        <div
          className="flex rounded-md border border-line p-0.5"
          aria-label="Social link view"
        >
          <ViewButton
            active={view === "directory"}
            label="Directory view"
            onClick={() => setView("directory")}
          >
            <LayoutGridIcon className="size-3.5" />
          </ViewButton>
          <ViewButton
            active={view === "icons"}
            label="Icon view"
            onClick={() => setView("icons")}
          >
            <ListIcon className="size-3.5" />
          </ViewButton>
        </div>
      </div>

      <PanelContent className="p-0">
        {view === "directory" ? (
          <div className="divide-y divide-line">
            {groups.map(({ category, links }) => (
              <section key={category} className="grid sm:grid-cols-[9rem_1fr]">
                <h3 className="border-b border-line px-4 py-3 font-mono text-[11px] tracking-widest text-muted-foreground uppercase sm:border-r sm:border-b-0">
                  {CATEGORY_LABELS[category]}
                </h3>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
                  {links.map((item) => (
                    <SocialDirectoryItem key={item.name} item={item} />
                  ))}
                </ul>
              </section>
            ))}
          </div>
        ) : (
          <ul className="flex flex-wrap gap-px bg-line">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.name} className="bg-background">
                <a
                  className="flex size-11 items-center justify-center text-muted-foreground transition-colors hover:bg-accent-muted hover:text-foreground"
                  href={addQueryParams(item.href, UTM_PARAMS)}
                  target="_blank"
                  rel="noopener"
                  aria-label={`${item.title}: ${item.handle}`}
                >
                  {SOCIAL_ICONS[item.name]}
                </a>
              </li>
            ))}
          </ul>
        )}
      </PanelContent>
    </Panel>
  )
}

function SocialDirectoryItem({ item }: { item: SocialLink }) {
  return (
    <li className="border-b border-line last:border-b-0 sm:border-r sm:last:border-r-0 lg:nth-[3n]:border-r-0">
      <a
        className="group flex min-h-16 items-center gap-3 px-4 py-3 transition-colors hover:bg-accent-muted"
        href={addQueryParams(item.href, UTM_PARAMS)}
        target="_blank"
        rel="noopener"
      >
        <span className="grid size-7 shrink-0 place-items-center border border-line text-muted-foreground transition-colors group-hover:text-foreground">
          {SOCIAL_ICONS[item.name]}
        </span>
        <span className="min-w-0">
          <span className="block text-sm leading-none font-medium">
            {item.title}
          </span>
          <span className="mt-1 block truncate font-mono text-[11px] text-muted-foreground">
            @{item.handle}
          </span>
        </span>
      </a>
    </li>
  )
}

function ViewButton({
  active,
  label,
  children,
  onClick,
}: {
  active: boolean
  label: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Button
      className="size-7 rounded-sm"
      variant={active ? "secondary" : "ghost"}
      size="icon-sm"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
    >
      {children}
    </Button>
  )
}
