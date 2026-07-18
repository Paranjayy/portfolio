"use client"

import { useState } from "react"
import { BoxIcon, LayoutGridIcon, ListIcon } from "lucide-react"

import { Button } from "@/components/base/ui/button"
import { LabSignalBlock } from "@/features/portfolio/components/lab-signal-block"

const INVENTORY = [
  {
    title: "Signal switch",
    detail: "A small stateful status block for a personal site.",
    state: "Interactive",
  },
  {
    title: "Contribution graph",
    detail: "A data-backed activity calendar with daily and weekly detail.",
    state: "In use",
  },
  {
    title: "Social directory",
    detail:
      "Compact icons on home, grouped directory when someone asks for more.",
    state: "In use",
  },
] as const

export function ComponentsWorkbench() {
  const [view, setView] = useState<"preview" | "list">("preview")

  return (
    <section aria-label="Component experiments">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Original experiments
        </p>
        <div className="flex rounded-md border border-line p-0.5">
          <ViewButton
            active={view === "preview"}
            label="Preview view"
            onClick={() => setView("preview")}
          >
            <LayoutGridIcon className="size-3.5" />
          </ViewButton>
          <ViewButton
            active={view === "list"}
            label="List view"
            onClick={() => setView("list")}
          >
            <ListIcon className="size-3.5" />
          </ViewButton>
        </div>
      </div>

      {view === "preview" ? (
        <LabSignalBlock />
      ) : (
        <ul className="border-t border-line">
          {INVENTORY.map((item, index) => (
            <li
              key={item.title}
              className="grid gap-3 border-x border-b border-line p-4 sm:grid-cols-[3rem_1fr_auto] sm:items-center"
            >
              <span className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="flex items-center gap-2 font-medium">
                  <BoxIcon className="size-4 text-muted-foreground" />
                  {item.title}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {item.detail}
                </span>
              </span>
              <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                {item.state}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
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
