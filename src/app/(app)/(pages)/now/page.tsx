import type { Metadata } from "next"

import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import { X_HANDLE } from "@/config/site"

const title = "Now"
const description =
  "What I'm currently focused on — inspired by Derek Sivers' /now page movement."

const ogImage = `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/now",
  },
  openGraph: {
    url: "/now",
    type: "website",
    images: {
      url: ogImage,
      width: 1200,
      height: 630,
      alt: title,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE,
    creator: X_HANDLE,
    images: [ogImage],
  },
}

// Updated: May 2026
const LAST_UPDATED = "May 2026"
const LOCATION = "Gujarat, India"

type NowSection = {
  title: string
  items: string[]
}

const NOW_SECTIONS: NowSection[] = [
  {
    title: "🎓 Academics",
    items: [
      "Completing Term 4 of IIT Madras BS Data Science & Applications — currently enrolled in Machine Learning Practice, Modern Application Development I, and Business Data Management.",
      "Grinding OPPE (Online Proctored Programming Exams) prep, specifically data structures and SQL edge cases.",
      "Building my Learning OSS platform to replace Anki for spaced repetition — Manim visualizers + Ebbinghaus curves.",
    ],
  },
  {
    title: "🔨 Building",
    items: [
      "Saturating this portfolio (paranjay.dev) — new pages like /uses, /now, better mobile responsiveness, and a live Spotify widget.",
      "IPL 2026 Engine — real-time cricket analytics with forensic roster integrity and live match telemetry.",
      "Workout Buddy v2.5 — heatmaps, progression graphs, and PWA offline support.",
    ],
  },
  {
    title: "📚 Learning",
    items: [
      "Andrej Karpathy's Neural Networks Zero to Hero series — building a transformer from scratch.",
      "Fast.ai Part 2 — model internals and diffusion models.",
      "Reading: The Pragmatic Programmer (ongoing), Clean Architecture (just started).",
    ],
  },
  {
    title: "🎵 Listening",
    items: [
      "Coding: Nujabes, Tame Impala, Hovvdy.",
      "Deep work: Wim Hof breathing exercises + binaural beats.",
      "Podcast: Lex Fridman, Dwarkesh Patel, and the Huberman Lab.",
    ],
  },
  {
    title: "🎯 Goals for this quarter",
    items: [
      "Finish Term 4 with 8+ CGPA.",
      "Ship Learning OSS v1 to public — open source it.",
      "Get my first freelance client for a Next.js project.",
      "Hit 1,000 GitHub contributions in 2026 (currently tracking above pace).",
    ],
  },
]

export default function NowPage() {
  return (
    <div className="min-h-svh">
      <PageHeading>
        <PageHeadingTagline>Present</PageHeadingTagline>
        <PageHeadingTitle>What I&apos;m focused on right now.</PageHeadingTitle>
      </PageHeading>

      <div className="h-4" />

      <div className="mx-auto max-w-5xl px-4 py-8">
        {/* Meta bar */}
        <div className="mb-10 flex flex-wrap items-center gap-4 border border-line bg-accent-muted/30 px-5 py-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span aria-hidden="true">📍</span>
            <span>{LOCATION}</span>
          </div>
          <div className="h-3 w-px bg-line" aria-hidden="true" />
          <div className="flex items-center gap-2">
            <span
              className="inline-block size-2 rounded-full bg-emerald-500"
              aria-hidden="true"
            />
            <span>Updated {LAST_UPDATED}</span>
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-10">
          {NOW_SECTIONS.map((section) => (
            <section key={section.title} className="border-b border-line pb-10 last:border-0">
              <h2 className="mb-4 text-base font-semibold tracking-tight">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-foreground/30"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* /now movement attribution */}
        <div className="mt-10 text-xs text-muted-foreground/60">
          <p>
            Inspired by{" "}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-muted-foreground"
            >
              Derek Sivers&apos; /now page movement
            </a>
            . This page reflects what I&apos;d tell a friend if they asked what I was
            up to.
          </p>
        </div>
      </div>

      <div className="h-8" />
      <SiteFooterInteractiveLogotype />
      <div className="h-8" />
    </div>
  )
}
