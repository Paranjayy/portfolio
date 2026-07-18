import type { Metadata } from "next"
import { ArrowUpRightIcon, ComponentIcon } from "lucide-react"

import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import { ComponentsWorkbench } from "@/features/portfolio/components/components-workbench"

export const metadata: Metadata = {
  title: "Components",
  description: "Original, personal UI experiments by Paranjay Khachar.",
}

export default function ComponentsPage() {
  return (
    <div className="min-h-svh">
      <PageHeading>
        <PageHeadingTagline>Components / personal WIP</PageHeadingTagline>
        <PageHeadingTitle>Small interactions worth keeping.</PageHeadingTitle>
      </PageHeading>

      <div className="container mx-auto max-w-5xl px-4 py-8">
        <p className="mb-6 max-w-2xl text-sm leading-6 text-muted-foreground">
          This library starts with original portfolio experiments. It does not
          present inherited examples as Paranjay&apos;s work.
        </p>
        <ComponentsWorkbench />

        <a
          href="/lab"
          className="mt-6 flex items-center justify-between border border-line p-5 transition-colors hover:bg-accent-muted"
        >
          <span className="flex items-center gap-3">
            <ComponentIcon className="size-5 text-muted-foreground" />
            <span>
              <span className="block font-medium">
                Browse the experiment lab
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">
                More building blocks will land here as they become real.
              </span>
            </span>
          </span>
          <ArrowUpRightIcon className="size-4" />
        </a>
      </div>

      <SiteFooterInteractiveLogotype />
    </div>
  )
}
