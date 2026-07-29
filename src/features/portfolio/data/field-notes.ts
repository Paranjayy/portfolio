import type { FieldNote } from "@/features/portfolio/types/field-note"

/**
 * The public Field Notes source of truth. Each addition is an intentional,
 * hand-written entry; Git records the author-side history behind it.
 */
export const FIELD_NOTES = [
  {
    slug: "field-notes-demo",
    title: "A note can be small and still be worth keeping",
    summary:
      "Demo content for the Field Notes system. Replace this with a real observation, project log, or reference when ready.",
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
    status: "evolving",
    tags: ["portfolio", "publishing", "systems"],
    isDemo: true,
    body: [
      "This is a demo note for testing the writing surface, not a published essay or a claim about Paranjay's work.",
      "The point is simple: a useful thought does not need to wait until it becomes a long article. Field Notes can hold a project decision, a setup discovery, an annotated link, or the first clear sentence of a bigger idea.",
      "When this changes, the note can record what changed and why. The repository preserves the author-side history; the revision line gives readers just enough context without turning the page into a changelog.",
    ],
    revisions: [
      {
        id: "r1",
        publishedAt: "2026-07-29",
        summary: "Created as a replaceable production demo for Field Notes v0.",
      },
    ],
  },
] satisfies FieldNote[]

export function getFieldNote(slug: string) {
  return FIELD_NOTES.find((note) => note.slug === slug)
}

export function getFieldNoteTags() {
  return [...new Set(FIELD_NOTES.flatMap((note) => note.tags))].sort()
}
