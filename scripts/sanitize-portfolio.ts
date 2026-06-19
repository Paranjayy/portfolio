import fs from "fs"
import path from "path"

const DATA_DIR = "src/features/portfolio/data"
const SPONSOR_DIR = "src/features/sponsor"
const CONTENT_DIR = "src/features/doc/content"

interface FileConfig {
  filename: string
  emptyContent: string
}

const FILES_TO_EMPTY: FileConfig[] = [
  {
    filename: "awards.ts",
    emptyContent: `import type { Award } from "../types/awards"\n\nexport const AWARDS: Award[] = []\n`,
  },
  {
    filename: "bookmarks.tsx",
    emptyContent: `import type { Bookmark } from "../types/bookmarks"\n\nexport const BOOKMARKS: Bookmark[] = []\n`,
  },
  {
    filename: "certifications.ts",
    emptyContent: `import type { Certification } from "../types/certifications"\n\nexport const CERTIFICATIONS: Certification[] = []\n`,
  },
  {
    filename: "education.ts",
    emptyContent: `import type { Education } from "../types/education"\n\nexport const EDUCATION: Education[] = []\n`,
  },
  {
    filename: "experiences.tsx",
    emptyContent: `import type { Experience } from "../types/experiences"\n\nexport const EXPERIENCES: Experience[] = []\n`,
  },
  {
    filename: "projects.ts",
    emptyContent: `import type { Project } from "../types/projects"\n\nexport const PROJECTS: Project[] = []\n`,
  },
  {
    filename: "social-links.tsx",
    emptyContent: `import type { SocialLink } from "../types/social-links"\n\nexport const SOCIAL_LINKS: SocialLink[] = []\n`,
  },
  {
    filename: "testimonials.ts",
    emptyContent: `import type { Testimonial } from "../types/testimonials"\n\nexport const TESTIMONIALS_PINNED: Testimonial[] = []\nexport const TESTIMONIALS_1: Testimonial[] = []\nexport const TESTIMONIALS_2: Testimonial[] = []\n`,
  },
  {
    filename: "tech-stack.ts",
    emptyContent: `import type { TechStack } from "../types/tech-stack"\n\nexport const TECH_STACK: TechStack[] = []\n`,
  },
  {
    filename: "media-stats.ts",
    emptyContent: `// Media stats - populate with your own Trakt, Letterboxd, Goodreads, Volt.fm data\nexport const MEDIA_STATS: any[] = []\n`,
  },
]

function sanitize() {
  console.log("🚀 Initializing Portfolio Sanitization (Blank Template Mode)...")

  // 1. Empty data files
  FILES_TO_EMPTY.forEach(({ filename, emptyContent }) => {
    const filePath = path.join(DATA_DIR, filename)
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  ${filename} not found, skipping`)
      return
    }
    fs.writeFileSync(filePath, emptyContent)
    console.log(`✅ Emptied ${filename}`)
  })

  // 2. Empty sponsors data
  const sponsorPath = path.join(SPONSOR_DIR, "data.tsx")
  if (fs.existsSync(sponsorPath)) {
    fs.writeFileSync(
      sponsorPath,
      `import type { Sponsor } from "./types"\n\nexport const SPONSORS: Sponsor[] = []\n`
    )
    console.log("✅ Emptied sponsors/data.tsx")
  }

  // 3. Reset USER data to generic template
  const userPath = path.join(DATA_DIR, "user.ts")
  const userTemplate = `import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Jane",
  lastName: "Doe",
  displayName: "Jane Doe",
  username: "janedoe",
  gender: "female",
  pronouns: "she/her",
  bio: "Software Engineer & Designer based in San Francisco.",
  flipSentences: ["Building modern web apps", "Designing pixel-perfect UIs", "Open source enthusiast"],
  address: "San Francisco, CA",
  email: "aGVsbG9AZXhhbXBsZS5jb20=",
  website: "https://example.com",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Senior Developer",
      company: "Tech Corp",
      website: "https://techcorp.com",
      experienceId: "tech-corp",
    }
  ],
  about: "This is a brief introduction about yourself and your journey in tech.",
  avatar: "https://github.com/shadcn.png",
  ogImage: "https://example.com/og.png",
  namePronunciationUrl: "",
  keywords: ["developer", "portfolio", "nextjs"],
  timeZone: "America/Los_Angeles",
  dateCreated: "${new Date().toISOString().split("T")[0]}",
  dob: "1995-01-01",
};
`
  fs.writeFileSync(userPath, userTemplate)
  console.log("✅ Reset user.ts to template")

  // 4. Reset site config
  const sitePath = "src/config/site.ts"
  if (fs.existsSync(sitePath)) {
    let siteContent = fs.readFileSync(sitePath, "utf-8")
    siteContent = siteContent.replace(
      /X_HANDLE = ".*"/,
      'X_HANDLE = "@yourhandle"'
    )
    siteContent = siteContent.replace(
      /GITHUB_USERNAME = ".*"/,
      'GITHUB_USERNAME = "yourusername"'
    )
    siteContent = siteContent.replace(
      /SOURCE_CODE_GITHUB_REPO = ".*"/,
      'SOURCE_CODE_GITHUB_REPO = "yourusername/yourrepo"'
    )
    siteContent = siteContent.replace(
      /SOURCE_CODE_GITHUB_URL = ".*"/,
      'SOURCE_CODE_GITHUB_URL = "https://github.com/yourusername/yourrepo"'
    )
    siteContent = siteContent.replace(
      /SPONSORSHIP_URL = ".*"/,
      'SPONSORSHIP_URL = "https://github.com/sponsors/yourusername"'
    )
    fs.writeFileSync(sitePath, siteContent)
    console.log("✅ Reset site.ts handles")
  }

  // 5. Purge Blog Content
  if (fs.existsSync(CONTENT_DIR)) {
    const files = fs.readdirSync(CONTENT_DIR)
    files.forEach((file) => {
      if (file !== ".gitkeep") {
        fs.unlinkSync(path.join(CONTENT_DIR, file))
      }
    })

    const welcomeTemplate = `---
title: Hello World
description: Welcome to my new portfolio.
category: blog
createdAt: ${new Date().toISOString().split("T")[0]}
updatedAt: ${new Date().toISOString().split("T")[0]}
---

This is your first blog post. You can edit this file in \`src/features/doc/content/welcome.mdx\`.
`
    fs.writeFileSync(path.join(CONTENT_DIR, "welcome.mdx"), welcomeTemplate)
    console.log("✅ Purged blog posts and created Welcome post")
  }

  console.log(
    "\n✨ Sanitization Complete! The portfolio is now a blank template ready for use."
  )
  console.log("\n📋 Next steps:")
  console.log("   1. Edit src/features/portfolio/data/user.ts with your info")
  console.log(
    "   2. Edit src/features/portfolio/data/social-links.tsx with your links"
  )
  console.log("   3. Edit src/config/site.ts with your handles")
  console.log("   4. Add your favicon to public/favicon.svg")
  console.log("   5. Run: pnpm dev")
}

sanitize()
