import type { Metadata } from "next"
import { ArrowUpRightIcon, FilePenLineIcon } from "lucide-react"

import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes in progress from Paranjay Khachar.",
}

const NOTES = [
  {
    title: "Building a personal media hub",
    detail:
      "Notes from an all-in-one tracker for movies, shows, anime, manga, and books.",
    href: "https://www.glaze.app/app/media-hub-jItiRx",
  },
  {
    title: "What a profile README can reveal",
    detail:
      "A living collection of coding, social, and media signals—without making the portfolio pretend they are live APIs.",
    href: "https://github.com/Paranjayy",
  },
  {
    title: "7TV Search for Raycast",
    detail: "A tiny desktop tool for finding and dropping chat emotes quickly.",
    href: "https://www.raycast.com/Paranjayy/seventv-search",
  },
]

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
        <ol className="border-t border-line">
          {NOTES.map((note, index) => (
            <li key={note.title} className="border-x border-b border-line">
              <a
                href={note.href}
                target="_blank"
                rel="noopener"
                className="group grid gap-4 p-5 transition-colors hover:bg-accent-muted sm:grid-cols-[4rem_1fr_auto] sm:items-center"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="flex items-center gap-2 font-medium">
                    <FilePenLineIcon className="size-4 text-muted-foreground" />
                    {note.title}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-muted-foreground">
                    {note.detail}
                  </span>
                </span>
                <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Note / WIP{" "}
                  <ArrowUpRightIcon className="ml-1 inline size-3.5" />
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>

      <SiteFooterInteractiveLogotype />
    </div>
  )
}
