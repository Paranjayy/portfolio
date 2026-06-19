import type { Metadata } from "next"

import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import { X_HANDLE } from "@/config/site"
import { cn } from "@/lib/utils"

const title = "Uses"
const description =
  "My hardware, software, and tools setup — what I actually use day to day."

const ogImage = `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/uses",
  },
  openGraph: {
    url: "/uses",
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

type UsesItem = {
  name: string
  description: string
  href?: string
}

type UsesCategory = {
  title: string
  emoji: string
  items: UsesItem[]
}

const USES_DATA: UsesCategory[] = [
  {
    title: "Hardware",
    emoji: "💻",
    items: [
      {
        name: "MacBook Air M2 (2022)",
        description:
          "Primary machine. 16GB RAM, 512GB SSD. Runs everything I throw at it — Next.js dev servers, Manim renders, ML training loops.",
        href: "https://www.apple.com/macbook-air-m2/",
      },
      {
        name: "iPhone 13",
        description: "Daily driver. Used to test mobile PWA builds of my apps.",
      },
      {
        name: "Sony WH-1000XM4",
        description:
          "ANC headphones for deep work sessions. Paired with lo-fi or Spotify for focus.",
        href: "https://www.sony.co.in/en/headphones/products/wh-1000xm4",
      },
    ],
  },
  {
    title: "Editor & Terminal",
    emoji: "🖥️",
    items: [
      {
        name: "VS Code",
        description:
          "Primary editor. Heavily extended with GitHub Copilot, Prettier, and ESLint. Theme: One Dark Pro.",
        href: "https://code.visualstudio.com/",
      },
      {
        name: "Cursor",
        description:
          "AI-native editor for prototyping and AI-assisted coding sessions.",
        href: "https://cursor.sh/",
      },
      {
        name: "WezTerm",
        description:
          "GPU-accelerated terminal with Lua config. Replaced iTerm2 for performance.",
        href: "https://wezfurlong.org/wezterm/",
      },
      {
        name: "Zsh + Oh-My-Zsh",
        description:
          "Shell setup with Starship prompt, zsh-autosuggestions, and custom aliases.",
      },
    ],
  },
  {
    title: "Dev Tools",
    emoji: "🔧",
    items: [
      {
        name: "pnpm",
        description:
          "Faster, disk-efficient npm alternative. Default package manager for all my Next.js projects.",
        href: "https://pnpm.io/",
      },
      {
        name: "Bun",
        description:
          "Used for registry generation scripts and fast one-off tooling.",
        href: "https://bun.sh/",
      },
      {
        name: "Raycast",
        description:
          "Replaces Spotlight. Custom extensions, snippets, and window management.",
        href: "https://raycast.com/",
      },
      {
        name: "TablePlus",
        description:
          "Database GUI for PostgreSQL and SQLite. Clean UI, keyboard-first.",
        href: "https://tableplus.com/",
      },
      {
        name: "Insomnia",
        description: "REST and GraphQL API client for testing endpoints.",
        href: "https://insomnia.rest/",
      },
      {
        name: "OrbStack",
        description:
          "Lightweight Docker alternative for Mac. Significantly faster than Docker Desktop.",
        href: "https://orbstack.dev/",
      },
    ],
  },
  {
    title: "Tech Stack",
    emoji: "⚡",
    items: [
      {
        name: "Next.js 15 (App Router)",
        description: "Primary framework for everything web-facing.",
        href: "https://nextjs.org/",
      },
      {
        name: "TypeScript",
        description: "Strict mode, always. Non-negotiable.",
        href: "https://www.typescriptlang.org/",
      },
      {
        name: "Tailwind CSS v4",
        description:
          "Utility-first CSS. v4 with the new @theme system is a game-changer.",
        href: "https://tailwindcss.com/",
      },
      {
        name: "shadcn/ui",
        description:
          "Component primitives. I've forked and customized extensively.",
        href: "https://ui.shadcn.com/",
      },
      {
        name: "Vercel",
        description: "Hosting + Edge functions + Analytics. Zero-config deploys.",
        href: "https://vercel.com/",
      },
      {
        name: "Supabase",
        description:
          "Postgres + Auth + Realtime for projects needing a backend.",
        href: "https://supabase.com/",
      },
    ],
  },
  {
    title: "Apps & Productivity",
    emoji: "🗂️",
    items: [
      {
        name: "Notion",
        description:
          "Project planning, notes, and roadmaps. This portfolio's roadmap lives here.",
        href: "https://notion.so/",
      },
      {
        name: "Obsidian",
        description:
          "Second brain for deep notes, linked thinking, and IIT Madras study notes.",
        href: "https://obsidian.md/",
      },
      {
        name: "Arc Browser",
        description:
          "Replaced Chrome. Spaces, boosts, and command bar make it genuinely better.",
        href: "https://arc.net/",
      },
      {
        name: "1Password",
        description: "Password manager. Every device, every account.",
        href: "https://1password.com/",
      },
      {
        name: "Codeshot",
        description: "Beautiful code screenshots for sharing on X / LinkedIn.",
        href: "https://codeshot.app/",
      },
    ],
  },
  {
    title: "Learning",
    emoji: "📚",
    items: [
      {
        name: "IIT Madras SEEK Portal",
        description:
          "Primary source for BS Data Science coursework, graded assignments, and exams.",
        href: "https://seek.onlinedegree.iitm.ac.in/",
      },
      {
        name: "Learning OSS (my app)",
        description:
          "My own academic workstation — Manim visualizers, spaced repetition, Zenith focus engine.",
        href: "https://learning-os.paranjay.dev",
      },
      {
        name: "fast.ai",
        description:
          "Practical deep learning courses. Bottom-up approach to ML.",
        href: "https://fast.ai/",
      },
      {
        name: "Andrej Karpathy's lectures",
        description:
          "Neural networks from scratch on YouTube. Mandatory viewing.",
        href: "https://karpathy.ai/",
      },
    ],
  },
]

export default function UsesPage() {
  return (
    <div className="min-h-svh">
      <PageHeading>
        <PageHeadingTagline>Setup</PageHeadingTagline>
        <PageHeadingTitle>
          Hardware, software, and tools I actually use.
        </PageHeadingTitle>
      </PageHeading>

      <div className="h-4" />

      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="space-y-12">
          {USES_DATA.map((category) => (
            <section key={category.title}>
              <div className="mb-6 flex items-center gap-3 border-b border-line pb-3">
                <span className="text-2xl" aria-hidden="true">
                  {category.emoji}
                </span>
                <h2 className="text-lg font-semibold tracking-tight">
                  {category.title}
                </h2>
              </div>

              <div className="grid gap-px border border-line bg-line">
                {category.items.map((item) => (
                  <UsesItemCard key={item.name} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 border border-line bg-accent-muted/30 px-6 py-5 text-sm text-muted-foreground">
          <p>
            Last updated: May 2026. This list reflects what I actually use, not
            what I&apos;m sponsored to promote. I have no affiliates.
          </p>
        </div>
      </div>

      <div className="h-8" />
      <SiteFooterInteractiveLogotype />
      <div className="h-8" />
    </div>
  )
}

function UsesItemCard({ item }: { item: UsesItem }) {
  const content = (
    <div
      className={cn(
        "group flex flex-col gap-1 bg-background px-5 py-4 transition-colors",
        item.href && "hover:bg-accent-muted/50"
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-medium text-foreground group-hover:text-foreground">
          {item.name}
        </span>
        {item.href && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 opacity-0 transition-opacity group-hover:opacity-50"
            aria-hidden="true"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17L17 7" />
          </svg>
        )}
      </div>
      <p className="text-sm text-muted-foreground">{item.description}</p>
    </div>
  )

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`${item.name} (opens in new tab)`}
      >
        {content}
      </a>
    )
  }

  return content
}
