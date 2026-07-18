import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { SITE_INFO } from "@/config/site"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/features/portfolio/components/social-links"

export const metadata: Metadata = {
  title: "Socials | " + SITE_INFO.name,
  description: "Connect with me on various platforms.",
}

export default function SocialsPage() {
  return (
    <main className="container mx-auto min-h-screen max-w-5xl border-x border-line px-0">
      <div className="screen-line-bottom flex h-16 items-center px-4">
        <Button variant="ghost" size="sm" asChild className="-ml-2 gap-2">
          <Link href="/">
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="p-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Socials</h1>
          <p className="mt-2 text-muted-foreground">
            A central place for all my digital presence.
          </p>
        </div>

        <div className="rounded-xl border border-line bg-background/50 p-6 backdrop-blur-sm">
          <SocialLinks initialView="directory" />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-line p-6">
            <h2 className="text-xl font-semibold">Primary Channels</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              For professional inquiries and tech discussions.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <span className="size-1.5 rounded-full bg-primary" />
                LinkedIn (Professional)
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="size-1.5 rounded-full bg-primary" />
                GitHub (Code)
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="size-1.5 rounded-full bg-primary" />X / Twitter
                (Thoughts)
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-line p-6">
            <h2 className="text-xl font-semibold">Lifestyle & Hobbies</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Follow my interests outside of coding.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <span className="size-1.5 rounded-full bg-muted-foreground" />
                Spotify (Music)
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="size-1.5 rounded-full bg-muted-foreground" />
                Duolingo (Languages)
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="size-1.5 rounded-full bg-muted-foreground" />
                Twitch (Streaming)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
