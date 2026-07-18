"use client"

import { useState } from "react"
import {
  ArrowUpRightIcon,
  FilePenLineIcon,
  LayoutGridIcon,
  ListIcon,
} from "lucide-react"

import { Button } from "@/components/base/ui/button"

const NOTES = [
  {
    title: "Building a personal media hub",
    detail:
      "Notes from an all-in-one tracker for movies, shows, anime, manga, and books.",
    href: "https://www.glaze.app/app/media-hub-jItiRx",
  },
  {
    title: "What a profile README can reveal",
    detail:
      "A living collection of coding, social, and media signals—without making the portfolio pretend they are live APIs.",
    href: "https://github.com/Paranjayy",
  },
  {
    title: "7TV Search for Raycast",
    detail: "A tiny desktop tool for finding and dropping chat emotes quickly.",
    href: "https://www.raycast.com/Paranjayy/seventv-search",
  },
] as const

export function BlogNotes() {
  const [view, setView] = useState<"cards" | "list">("cards")

  return (
    <section aria-label="Publishing queue">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Publishing queue
        </p>
        <div className="flex rounded-md border border-line p-0.5">
          <ViewButton
            active={view === "cards"}
            label="Card view"
            onClick={() => setView("cards")}
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

      <ol
        className={
          view === "cards"
            ? "grid gap-px bg-line sm:grid-cols-2"
            : "border-t border-line"
        }
      >
        {NOTES.map((note, index) => (
          <li
            key={note.title}
            className={
              view === "cards"
                ? "bg-background"
                : "border-x border-b border-line"
            }
          >
            <a
              href={note.href}
              target="_blank"
              rel="noopener"
              className={
                view === "cards"
                  ? "group flex h-full min-h-48 flex-col p-5 transition-colors hover:bg-accent-muted"
                  : "group grid gap-4 p-5 transition-colors hover:bg-accent-muted sm:grid-cols-[4rem_1fr_auto] sm:items-center"
              }
            >
              <span className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={view === "cards" ? "mt-auto" : ""}>
                <span className="flex items-center gap-2 font-medium">
                  <FilePenLineIcon className="size-4 text-muted-foreground" />
                  {note.title}
                </span>
                <span className="mt-2 block text-sm leading-6 text-muted-foreground">
                  {note.detail}
                </span>
              </span>
              <span
                className={
                  view === "cards"
                    ? "mt-5 font-mono text-xs tracking-widest text-muted-foreground uppercase"
                    : "font-mono text-xs tracking-widest text-muted-foreground uppercase"
                }
              >
                Note / WIP <ArrowUpRightIcon className="ml-1 inline size-3.5" />
              </span>
            </a>
          </li>
        ))}
      </ol>
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
