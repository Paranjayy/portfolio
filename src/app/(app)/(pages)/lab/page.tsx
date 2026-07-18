import type { Metadata } from "next"
import {
  ArrowUpRightIcon,
  CommandIcon,
  DatabaseIcon,
  SparklesIcon,
} from "lucide-react"

import { X_HANDLE } from "@/config/site"
import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"

const title = "Lab"
const description =
  "Small experiments, tools, and interface studies by Paranjay Khachar."
const ogImage = `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/lab" },
  openGraph: {
    url: "/lab",
    type: "website",
    images: { url: ogImage, width: 1200, height: 630, alt: title },
  },
  twitter: {
    card: "summary_large_image",
    site: X_HANDLE,
    creator: X_HANDLE,
    images: [ogImage],
  },
}

const ACTIVE_EXPERIMENTS = [
  {
    title: "7TV Search",
    detail: "A Raycast extension for fast emote search and drop actions.",
    href: "https://www.raycast.com/Paranjayy/seventv-search",
    icon: CommandIcon,
    state: "Shipped",
  },
  {
    title: "Glaze: Media Hub",
    detail:
      "A desktop-first media tracker spanning five personal media domains.",
    href: "https://www.glaze.app/app/media-hub-jItiRx",
    icon: DatabaseIcon,
    state: "In progress",
  },
  {
    title: "Portfolio signals",
    detail:
      "A small test bed for data-backed profile details and restrained motion.",
    href: "/",
    icon: SparklesIcon,
    state: "Ongoing",
  },
]

export default function LabPage() {
  return (
    <div className="min-h-svh">
      <PageHeading>
        <PageHeadingTagline>Lab / rough cuts</PageHeadingTagline>
        <PageHeadingTitle>
          Original experiments before they become products.
        </PageHeadingTitle>
      </PageHeading>

      <div className="container mx-auto max-w-5xl px-4 py-8">
        <section className="border border-line">
          <div className="flex items-center justify-between border-b border-line px-4 py-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            <span>Active experiments</span>
            <span>{String(ACTIVE_EXPERIMENTS.length).padStart(2, "0")}</span>
          </div>

          <div className="grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
            {ACTIVE_EXPERIMENTS.map(
              ({ title, detail, href, icon: Icon, state }) => (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener" : undefined}
                  className="group relative min-h-56 p-5 transition-colors hover:bg-accent-muted"
                >
                  <div className="flex items-start justify-between">
                    <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                    <ArrowUpRightIcon className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                  </div>
                  <div className="absolute right-0 bottom-0 left-0 border-t border-dashed border-line p-5">
                    <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                      {state}
                    </p>
                    <h2 className="mt-2 font-medium">{title}</h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {detail}
                    </p>
                  </div>
                </a>
              )
            )}
          </div>
        </section>

        <section className="mt-8 grid border-x border-t border-line sm:grid-cols-[11rem_1fr]">
          <h2 className="border-b border-line px-4 py-5 font-mono text-xs tracking-widest text-muted-foreground uppercase sm:border-r sm:border-b-0">
            How this works
          </h2>
          <p className="px-4 py-5 text-sm leading-6 text-muted-foreground">
            This is not a catalogue of inherited components. Each entry is
            either built by Paranjay or an explicitly labelled work-in-progress;
            completed pieces can graduate into Projects when they have a stable
            public home.
          </p>
        </section>
      </div>

      <SiteFooterInteractiveLogotype />
    </div>
  )
}
