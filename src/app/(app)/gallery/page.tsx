import type { Metadata } from "next"
import Image from "next/image"
import { ArrowUpRightIcon, CameraIcon, SparklesIcon } from "lucide-react"

import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"

const title = "Gallery"
const description = "A collection of moments and captures."

export const metadata: Metadata = {
  title,
  description,
}

export default function GalleryPage() {
  return (
    <div className="container mx-auto max-w-5xl">
      <header className="screen-line-bottom px-4 py-10 sm:px-8">
        <p className="font-mono text-xs tracking-[0.24em] text-muted-foreground uppercase">
          Visual field notes / 001
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          A gallery in progress.
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          A home for illustrations, interface captures, and tiny artifacts from
          the things I am making. It starts with the public profile imagery I
          have actually chosen, not stock filler.
        </p>
      </header>

      <section className="grid border-x border-line sm:grid-cols-[1.2fr_0.8fr]">
        <figure className="relative min-h-96 overflow-hidden border-b border-line bg-[radial-gradient(circle_at_30%_25%,color-mix(in_oklab,var(--muted)_80%,transparent),transparent_38%),linear-gradient(135deg,var(--background),var(--muted))] p-6 sm:border-r sm:border-b-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] bg-size-[3rem_3rem] opacity-35" />
          <Image
            src="https://0.gravatar.com/avatar/6d6a08142ab46a2743fd132dd21906e1?s=512"
            alt="Paranjay Khachar’s public Gravatar avatar"
            width={512}
            height={512}
            priority
            className="relative mx-auto aspect-square w-full max-w-75 border border-line object-cover shadow-2xl shadow-background/30"
          />
          <figcaption className="relative mt-5 flex items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
            <span>PUBLIC PROFILE IMAGE / GRAVATAR</span>
            <CameraIcon className="size-4" aria-hidden="true" />
          </figcaption>
        </figure>

        <div className="divide-y divide-line">
          <div className="p-6">
            <SparklesIcon
              className="size-5 text-muted-foreground"
              aria-hidden="true"
            />
            <h2 className="mt-8 text-xl font-medium">
              The archive is deliberate.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              New work will appear here with a caption and a source—not as a
              decorative wall of unknown images.
            </p>
          </div>
          <a
            href="https://gravatar.com/sweetly00638681c8"
            target="_blank"
            rel="noopener"
            className="group flex items-center justify-between gap-4 p-6 font-mono text-sm transition-colors hover:bg-accent-muted"
          >
            <span>
              Browse the public profile
              <span className="mt-1 block text-xs text-muted-foreground">
                Gravatar / Paranjay Khachar
              </span>
            </span>
            <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>

      <section className="screen-line-top grid border-x border-line sm:grid-cols-3">
        {[
          [
            "01",
            "Interface captures",
            "Products while they are becoming real.",
          ],
          ["02", "Illustrations", "Personal visuals and experiments."],
          ["03", "Small artifacts", "The details worth keeping."],
        ].map(([number, label, copy]) => (
          <div
            key={number}
            className="border-b border-line p-5 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0"
          >
            <span className="font-mono text-xs text-muted-foreground">
              {number}
            </span>
            <h2 className="mt-8 font-medium">{label}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
          </div>
        ))}
      </section>

      <p className="border-x border-b border-line px-4 py-4 font-mono text-xs text-muted-foreground sm:px-8">
        Capturing more moments, with context, soon.
      </p>

      <SiteFooterInteractiveLogotype />
    </div>
  )
}
