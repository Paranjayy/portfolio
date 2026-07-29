import type { Metadata } from "next"

import {
  PageHeading,
  PageHeadingDescription,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import { FieldNotesIndex } from "@/features/portfolio/components/field-notes-index"
import {
  FIELD_NOTES,
  getFieldNoteTags,
} from "@/features/portfolio/data/field-notes"

export const metadata: Metadata = {
  title: "Field Notes",
  description: "Small, evolving notes from Paranjay Khachar.",
  alternates: {
    canonical: "/notes",
  },
}

export default function FieldNotesPage() {
  return (
    <div className="min-h-svh">
      <PageHeading>
        <PageHeadingTagline>Field Notes / public brain</PageHeadingTagline>
        <PageHeadingTitle>Small ideas, kept in motion.</PageHeadingTitle>
        <PageHeadingDescription>
          Dated notes on projects, systems, references, and unfinished thinking.
          They evolve in public without pretending to be polished essays.
        </PageHeadingDescription>
      </PageHeading>

      <div className="container mx-auto max-w-5xl px-4 py-8">
        <FieldNotesIndex notes={FIELD_NOTES} tags={getFieldNoteTags()} />
      </div>

      <SiteFooterInteractiveLogotype />
    </div>
  )
}
