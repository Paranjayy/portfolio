# Field Notes v0 design

## Goal

Create a personal, durable publishing surface for Paranjay's unfinished ideas,
project notes, setup discoveries, and links. It borrows the discipline of a
dated, tagged weblog without copying another site's visual identity.

Field Notes is deliberately different from the existing Blog route: a note can
be small, incomplete, and revised over time. It must never manufacture activity
or make automated signals look like authored writing.

## Scope

### Routes

- `/notes`: the public Field Notes index.
- `/notes/<slug>`: an individual note with its current body and revision trail.

### Initial content

- Ship one clearly labelled demo note so the interaction and states can be
  reviewed in production.
- The demo is visibly marked `Demo / replace me`; it is not presented as an
  authored essay or external endorsement.
- Notes have title, summary, date, tags, status (`draft`, `evolving`, or
  `complete`), body, and revision metadata.

### Writing model

- Notes live in a local TypeScript data module for v0. This keeps the feature
  easy to edit and avoids adding a CMS or authentication system.
- The repository is the writer-side source of truth. Every meaningful update is
  committed, creating an actual edit history.
- Reader-facing revisions are explicit metadata. A later version can derive
  these from Git history, but v0 will not scrape Git or create unstable build
  dependencies.

### Reader experience

- The index opens in a modern card/timeline view and offers a compact list view.
- Tag chips filter the displayed notes client-side.
- Note cards show status, date, tags, and revision count.
- Detail pages show the current note body and a small revision timeline; prior
  revisions link to an immutable snapshot only when a snapshot is supplied.
- Design uses the existing monochrome grid, panel, stripe divider, and mono
  metadata language. It does not copy Simon Willison's colours or layout.

## Data model

```ts
type NoteStatus = "draft" | "evolving" | "complete"

type NoteRevision = {
  id: string
  publishedAt: string
  summary: string
  snapshotHref?: string
}

type FieldNote = {
  slug: string
  title: string
  summary: string
  publishedAt: string
  updatedAt: string
  status: NoteStatus
  tags: string[]
  body: string[]
  revisions: NoteRevision[]
}
```

## Social profiles

Add these confirmed links to the social registry and directory:

- MakerWorld: `https://makerworld.com/en/@paranjay`
- Figma: `https://www.figma.com/@paranjay`
- Behance: `https://www.behance.net/paranjay`

They are directory profiles only at first, so the homepage remains a compact,
recognisable set of core links. DeviantArt is intentionally not added.

## Error handling and truthfulness

- Missing optional snapshot links render as metadata only; they do not produce a
  disabled link.
- An empty note collection renders an honest WIP state rather than a fake feed.
- No background fetches, activity imports, or social metrics are part of v0.
- Demo content remains visibly labelled until replaced with a real note.

## Validation

- `pnpm check-types`
- `pnpm lint`
- Verify `/notes`, `/notes/<demo-slug>`, social directory, and navigation after
  Vercel deploy. Do not run a local production build on this machine.

## Deferred upgrades

- Git-derived revision diffs and immutable reader snapshots.
- Full-text search and URL-addressable tag filters.
- Notes linked to projects, media, and gallery entries.
- RSS/Atom feed and email digest.
- Import pipeline for bookmarks, reading notes, and manually approved activity.
- A writer dashboard or private CMS only if Git editing stops being pleasant.
