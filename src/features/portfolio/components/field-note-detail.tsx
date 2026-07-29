import { ArrowUpRightIcon, HistoryIcon } from "lucide-react"

import type { FieldNote } from "@/features/portfolio/types/field-note"

export function FieldNoteDetail({ note }: { note: FieldNote }) {
  return (
    <article className="border-x border-b border-line">
      <div className="border-b border-line p-5 sm:p-8">
        <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
          {note.isDemo ? <span>Demo / replace me</span> : null}
          <span>{formatDate(note.publishedAt)}</span>
          <span>{note.status}</span>
        </div>
        <h1 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight text-balance">
          {note.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          {note.summary}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="border border-line px-2 py-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-px bg-line lg:grid-cols-[minmax(0,1fr)_19rem]">
        <div className="bg-background p-5 sm:p-8">
          <div className="max-w-2xl space-y-5 text-[1.05rem] leading-8 text-foreground/90">
            {note.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside className="bg-background p-5">
          <h2 className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
            <HistoryIcon className="size-4 text-muted-foreground" />
            Revision trail
          </h2>
          <ol className="mt-5 space-y-5 border-l border-line pl-4">
            {note.revisions.map((revision) => (
              <li key={revision.id} className="relative">
                <span className="absolute top-1.5 -left-[1.3rem] size-2 border border-line bg-background" />
                <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                  {formatDate(revision.publishedAt)} / {revision.id}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {revision.summary}
                </p>
                {revision.snapshotHref ? (
                  <a
                    className="mt-2 inline-block text-sm underline underline-offset-4"
                    href={revision.snapshotHref}
                  >
                    Read this revision{" "}
                    <ArrowUpRightIcon className="inline size-3.5" />
                  </a>
                ) : null}
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </article>
  )
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`))
}
