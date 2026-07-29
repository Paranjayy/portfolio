export type NoteStatus = "draft" | "evolving" | "complete"

export type FieldNoteRevision = {
  id: string
  publishedAt: string
  summary: string
  snapshotHref?: string
}

export type FieldNote = {
  slug: string
  title: string
  summary: string
  publishedAt: string
  updatedAt: string
  status: NoteStatus
  tags: string[]
  body: string[]
  revisions: FieldNoteRevision[]
  isDemo?: boolean
}
