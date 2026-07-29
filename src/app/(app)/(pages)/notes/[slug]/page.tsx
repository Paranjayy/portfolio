import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon } from "lucide-react"

import { X_HANDLE } from "@/config/site"
import { Button } from "@/components/base/ui/button"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import { FieldNoteDetail } from "@/features/portfolio/components/field-note-detail"
import {
  FIELD_NOTES,
  getFieldNote,
} from "@/features/portfolio/data/field-notes"

export const dynamicParams = false

export function generateStaticParams() {
  return FIELD_NOTES.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageProps<"/notes/[slug]">): Promise<Metadata> {
  const note = getFieldNote((await params).slug)

  if (!note) notFound()

  const url = `/notes/${note.slug}`
  const ogImage = `/og/simple?title=${encodeURIComponent(note.title)}&description=${encodeURIComponent(note.summary)}`

  return {
    title: note.title,
    description: note.summary,
    alternates: { canonical: url },
    openGraph: {
      url,
      type: "article",
      publishedTime: new Date(note.publishedAt).toISOString(),
      modifiedTime: new Date(note.updatedAt).toISOString(),
      images: { url: ogImage, width: 1200, height: 630, alt: note.title },
    },
    twitter: {
      card: "summary_large_image",
      site: X_HANDLE,
      creator: X_HANDLE,
      images: [ogImage],
    },
  }
}

export default async function FieldNotePage({
  params,
}: PageProps<"/notes/[slug]">) {
  const note = getFieldNote((await params).slug)

  if (!note) notFound()

  return (
    <div className="min-h-svh">
      <div className="border-b border-line p-2">
        <Button
          className="h-7 gap-2 border-none px-2 text-muted-foreground hover:text-foreground"
          variant="ghost"
          size="sm"
          nativeButton={false}
          render={
            <Link href="/notes">
              <ArrowLeftIcon className="size-3.5" />
              Field Notes
            </Link>
          }
        />
      </div>
      <FieldNoteDetail note={note} />
      <SiteFooterInteractiveLogotype />
    </div>
  )
}
