# Field Notes v0 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a personal Field Notes archive with a demo note, revision metadata, tag filtering, card/list views, and three verified directory-only social profiles.

**Architecture:** Typed local data is the writer-side source of truth. A client index owns filtering and view state; server routes own metadata and detail rendering. Git is the authoring history, while explicit revision metadata gives readers a stable, honest timeline.

**Tech Stack:** Next.js App Router, TypeScript, React 19, Tailwind CSS v4, lucide-react, Vitest.

---

## File structure

- Create `src/features/portfolio/types/field-note.ts` for Field Note contracts.
- Create `src/features/portfolio/data/field-notes.ts` for manual note data and queries.
- Create `src/features/portfolio/data/field-notes.test.ts` for data-unit tests.
- Create `src/features/portfolio/components/field-notes-index.tsx` for filters and views.
- Create `src/features/portfolio/components/field-note-detail.tsx` for body and revision timeline.
- Create `src/app/(app)/(pages)/notes/page.tsx` and `notes/[slug]/page.tsx` for public routes.
- Modify social types, data, icon bindings, directory grouping, navigation, and roadmap.

### Task 1: Define the Field Notes data boundary

**Files:**

- Create: `src/features/portfolio/types/field-note.ts`
- Create: `src/features/portfolio/data/field-notes.ts`
- Create: `src/features/portfolio/data/field-notes.test.ts`

- [ ] Write a failing Vitest case asserting `getFieldNote("field-notes-demo")` returns `{ status: "evolving", isDemo: true }` and `getFieldNoteTags()` returns `["portfolio", "publishing", "systems"]`.
- [ ] Run `pnpm vitest run src/features/portfolio/data/field-notes.test.ts`; expect failure because the data module does not exist.
- [ ] Define `NoteStatus`, `FieldNoteRevision`, and `FieldNote`; add one visibly labelled demo note and no invented claims.
- [ ] Implement exact helpers: `getFieldNote(slug)` via `FIELD_NOTES.find`, and sorted unique `getFieldNoteTags()` using `Set`.
- [ ] Re-run the focused test; expect pass.
- [ ] Commit the data boundary.

### Task 2: Build the interaction and detail components

**Files:**

- Create: `src/features/portfolio/components/field-notes-index.tsx`
- Create: `src/features/portfolio/components/field-note-detail.tsx`

- [ ] Build a client `FieldNotesIndex` with `view: "cards" | "list"` and `selectedTag`, then filter notes with `selectedTag === "all" ? notes : notes.filter((note) => note.tags.includes(selectedTag))`.
- [ ] Render card and compact list views using existing panel, mono metadata, and view-button conventions. Cards show demo status, date, revision count, summary, and tags.
- [ ] Build `FieldNoteDetail` with body, tags, and an ordered revision timeline; render a snapshot link only when `snapshotHref` exists.
- [ ] Run `pnpm check-types`; expect pass.
- [ ] Commit the component layer.

### Task 3: Add routes and navigation

**Files:**

- Create: `src/app/(app)/(pages)/notes/page.tsx`
- Create: `src/app/(app)/(pages)/notes/[slug]/page.tsx`
- Modify: `src/config/site.ts`

- [ ] Add `/notes` canonical metadata, a clear Field Notes heading, and `FieldNotesIndex`.
- [ ] Add the detail route with `generateStaticParams()` returning `FIELD_NOTES.map(({ slug }) => ({ slug }))`, page metadata, and `notFound()` for unknown slugs.
- [ ] Add `Notes` after Blog in `MAIN_NAV`.
- [ ] Run `pnpm check-types` and `pnpm lint`; expect pass.
- [ ] Commit the route layer.

### Task 4: Add verified maker and design profiles

**Files:**

- Modify: `src/features/portfolio/types/social-links.ts`
- Modify: `src/features/portfolio/data/social-links.ts`
- Modify: `src/features/portfolio/components/social-link-icons.tsx`
- Modify: `src/features/portfolio/components/social-links.tsx`

- [ ] Extend social categories with `design` and add the directory label.
- [ ] Add MakerWorld, Figma, and Behance using the exact supplied profile URLs and `showOnHome: false`; do not add DeviantArt or `sameAs` claims.
- [ ] Bind exact Simple Icons and keep the compact homepage strip unchanged.
- [ ] Run `pnpm check-types` and `pnpm lint`; expect pass.
- [ ] Commit the social pass.

### Task 5: Record and verify the complete pass

**Files:**

- Modify: `PORTFOLIO_NEXT_STEPS.md`

- [ ] Record Field Notes v0 and defer Git-derived diffs, immutable snapshots, RSS, and manual integrations.
- [ ] Run `pnpm test:run`, `pnpm check-types`, `pnpm lint`, and `git diff --check`; expect all to succeed.
- [ ] Commit and push `main`; do not run a local production build.
- [ ] Verify deployed `/notes`, the demo detail route, and `/socials`.
