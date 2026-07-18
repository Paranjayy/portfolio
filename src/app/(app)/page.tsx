import type { Metadata } from "next"
import type { ProfilePage, WithContext } from "schema-dts"

import { JSON_LD_ID } from "@/config/json-ld"
import { JsonLdScript } from "@/lib/json-ld"
import { absoluteUrl, cn } from "@/lib/utils"
import { Awards } from "@/features/portfolio/components/awards"
import { Bookmarks } from "@/features/portfolio/components/bookmarks"
import { Certifications } from "@/features/portfolio/components/certifications"
import { Dashboard } from "@/features/portfolio/components/dashboard"
import { Education } from "@/features/portfolio/components/education"
import { Experiences } from "@/features/portfolio/components/experiences"
import { GitHubContributions } from "@/features/portfolio/components/github-contributions"
import { Hello } from "@/features/portfolio/components/hello"
import { Overview } from "@/features/portfolio/components/overview"
import { PortfolioLab } from "@/features/portfolio/components/portfolio-lab"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { Projects } from "@/features/portfolio/components/projects"
import { SocialLinks } from "@/features/portfolio/components/social-links"
import { TechStack } from "@/features/portfolio/components/tech-stack"
import { Testimonials } from "@/features/portfolio/components/testimonials"
import { USER } from "@/features/portfolio/data/user"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLdScript data={getProfilePageJsonLd()} />

      <div className="[--separator-height:--spacing(8)] **:data-[slot=panel]:scroll-mt-[calc(var(--header-height)+var(--separator-height))]">
        <div className="mx-auto md:max-w-5xl">
          <div className="mx-4 mb-4 rounded-lg border border-dashed border-muted-foreground/30 bg-muted/30 px-4 py-3 text-center text-sm text-muted-foreground">
            This portfolio is a work in progress. Some sections may be
            incomplete or contain placeholder content.
          </div>
          <ProfileHeader />
          <Separator />

          <Overview />
          <SocialLinks />
          <GitHubContributions />
          <Dashboard />
          <Separator />

          <Hello />
          <Separator />

          <Testimonials />
          <Separator />

          <TechStack />
          <Separator />

          <Experiences />
          <Separator />

          <Education />
          <Separator />

          <Projects />
          <Separator />

          <PortfolioLab />
          <Separator />

          <Awards />
          <Separator />

          <Certifications />
          <Separator />

          <Bookmarks />
        </div>
      </div>
    </>
  )
}

function getProfilePageJsonLd(): WithContext<ProfilePage> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": absoluteUrl("/"),
    dateCreated: new Date(USER.dateCreated).toISOString(),
    dateModified: new Date().toISOString(),
    // Reference the Person defined in the WebSite node (rendered globally in
    // the root layout) so both blocks resolve to the same entity.
    mainEntity: { "@id": JSON_LD_ID.person },
  }
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "stripe-divider h-(--separator-height) w-full border-x border-line",
        className
      )}
    >
      {/* <div
        className="absolute -top-1.25 -left-1.25 z-2 flex size-2.25 border bg-background"
        aria-hidden
      />
      <div
        className="absolute -top-1.25 -right-1.25 z-2 flex size-2.25 border bg-background"
        aria-hidden
      /> */}
    </div>
  )
}
