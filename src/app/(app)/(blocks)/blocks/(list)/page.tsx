import type { Metadata } from "next"
import { BlocksIcon, CodeXmlIcon } from "lucide-react"

import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import { LabSignalBlock } from "@/features/portfolio/components/lab-signal-block"

export const metadata: Metadata = {
  title: "Blocks",
  description: "Personal page-level interface experiments by Paranjay Khachar.",
}

export default function BlocksPage() {
  return (
    <div className="min-h-svh">
      <PageHeading>
        <PageHeadingTagline>Blocks / personal WIP</PageHeadingTagline>
        <PageHeadingTitle>Page ideas, tested in public.</PageHeadingTitle>
      </PageHeading>

      <div className="container mx-auto max-w-5xl px-4 py-8">
        <div className="mb-6 grid border border-line sm:grid-cols-[12rem_1fr]">
          <div className="flex items-center gap-3 border-b border-line p-4 font-mono text-xs tracking-widest text-muted-foreground uppercase sm:border-r sm:border-b-0">
            <BlocksIcon className="size-4" />
            Original block
          </div>
          <p className="p-4 text-sm leading-6 text-muted-foreground">
            A CodePen-like preview surface for portfolio ideas. This one is
            intentionally small, interactive, and owned by this site.
          </p>
        </div>

        <LabSignalBlock />

        <div className="mt-6 flex gap-3 border border-dashed border-line p-4 text-sm text-muted-foreground">
          <CodeXmlIcon className="mt-0.5 size-4 shrink-0" />
          <p>
            Next candidates: a project status board, media pulse, and a
            contribution-story block—each gets a source before it ships.
          </p>
        </div>
      </div>

      <SiteFooterInteractiveLogotype />
    </div>
  )
}
