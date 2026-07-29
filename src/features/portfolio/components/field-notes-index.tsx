"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { LayoutGridIcon, ListIcon, TagsIcon } from "lucide-react"

import { Button } from "@/components/base/ui/button"
import type { FieldNote } from "@/features/portfolio/types/field-note"

type FieldNotesIndexProps = {
  notes: FieldNote[]
  tags: string[]
}

export function FieldNotesIndex({ notes, tags }: FieldNotesIndexProps) {
  const [view, setView] = useState<"cards" | "list">("cards")
  const [selectedTag, setSelectedTag] = useState("all")
  const visibleNotes = useMemo(
    () =>
      selectedTag === "all"
        ? notes
        : notes.filter((note) => note.tags.includes(selectedTag)),
    [notes, selectedTag]
  )

  return (
    <section aria-label="Field Notes archive">
      <div className="flex flex-col gap-4 border-x border-b border-line p-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          className="flex flex-wrap items-center gap-2"
          aria-label="Filter notes by tag"
        >
          <TagsIcon
            className="mr-1 size-4 text-muted-foreground"
            aria-hidden="true"
          />
          <TagButton
            active={selectedTag === "all"}
            onClick={() => setSelectedTag("all")}
          >
            All notes
          </TagButton>
          {tags.map((tag) => (
            <TagButton
              key={tag}
              active={selectedTag === tag}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </TagButton>
          ))}
        </div>
        <div className="flex w-fit rounded-md border border-line p-0.5">
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

      {visibleNotes.length === 0 ? (
        <div className="border-x border-b border-line p-8 text-sm text-muted-foreground">
          No notes use this tag yet.
        </div>
      ) : view === "cards" ? (
        <ol className="grid gap-px border-x border-b border-line bg-line sm:grid-cols-2">
          {visibleNotes.map((note) => (
            <li key={note.slug} className="bg-background">
              <FieldNoteCard note={note} />
            </li>
          ))}
        </ol>
      ) : (
        <ol className="border-x border-b border-line">
          {visibleNotes.map((note, index) => (
            <li
              key={note.slug}
              className="border-b border-line last:border-b-0"
            >
              <FieldNoteListItem note={note} index={index} />
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}

function FieldNoteCard({ note }: { note: FieldNote }) {
  return (
    <Link
      href={`/notes/${note.slug}`}
      className="group flex min-h-64 flex-col p-5 transition-colors hover:bg-accent-muted"
    >
      <NoteMeta note={note} />
      <h2 className="mt-auto max-w-md text-xl font-medium tracking-tight group-hover:underline group-hover:underline-offset-4">
        {note.title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {note.summary}
      </p>
      <NoteTags tags={note.tags} />
    </Link>
  )
}

function FieldNoteListItem({
  note,
  index,
}: {
  note: FieldNote
  index: number
}) {
  return (
    <Link
      href={`/notes/${note.slug}`}
      className="group grid gap-4 p-5 transition-colors hover:bg-accent-muted sm:grid-cols-[3rem_1fr_auto] sm:items-center"
    >
      <span className="font-mono text-xs text-muted-foreground">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span>
        <span className="font-medium group-hover:underline group-hover:underline-offset-4">
          {note.title}
        </span>
        <span className="mt-1 block text-sm text-muted-foreground">
          {note.summary}
        </span>
      </span>
      <NoteMeta note={note} compact />
    </Link>
  )
}

function NoteMeta({
  note,
  compact = false,
}: {
  note: FieldNote
  compact?: boolean
}) {
  return (
    <span
      className={
        compact
          ? "font-mono text-[11px] tracking-widest text-muted-foreground uppercase"
          : "flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] tracking-widest text-muted-foreground uppercase"
      }
    >
      {note.isDemo ? <span>Demo / replace me</span> : null}
      <span>{formatDate(note.updatedAt)}</span>
      <span>
        {note.revisions.length} revision{note.revisions.length === 1 ? "" : "s"}
      </span>
    </span>
  )
}

function NoteTags({ tags }: { tags: string[] }) {
  return (
    <span className="mt-5 flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="border border-line px-2 py-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase"
        >
          {tag}
        </span>
      ))}
    </span>
  )
}

function TagButton({
  active,
  children,
  onClick,
}: {
  active: boolean
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Button
      className="h-7 rounded-sm px-2.5 font-mono text-[11px] tracking-wider uppercase"
      variant={active ? "secondary" : "ghost"}
      onClick={onClick}
      aria-pressed={active}
    >
      {children}
    </Button>
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

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`))
}
