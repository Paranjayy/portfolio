import type { Metadata } from "next"

import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import { BlogNotes } from "@/features/portfolio/components/blog-notes"

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes in progress from Paranjay Khachar.",
}

export default function BlogPage() {
  return (
    <div className="min-h-svh">
      <PageHeading>
        <PageHeadingTagline>Blog / notes queue</PageHeadingTagline>
        <PageHeadingTitle>Writing starts before publishing.</PageHeadingTitle>
      </PageHeading>

      <div className="container mx-auto max-w-5xl px-4 py-8">
        <p className="mb-6 max-w-2xl text-sm leading-6 text-muted-foreground">
          These are real topics connected to shipped or active work. They are
          labelled as notes until there is an actual article to publish.
        </p>
        <BlogNotes />
      </div>

      <SiteFooterInteractiveLogotype />
    </div>
  )
}
