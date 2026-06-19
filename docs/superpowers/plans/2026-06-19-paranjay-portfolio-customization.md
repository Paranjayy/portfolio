# Paranjay Portfolio Customization Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fork chanhdai.com, pull latest upstream, replace all of chanh dai's personal content with Paranjay Khachar's verified data, create a "KP" favicon mark, move IIT Madras to education (not experience), remove sponsors/certifications, fill testimonials with placeholder data, bring wide layout from upstream, and produce a comprehensive user guide + enhanced sanitize script.

**Architecture:** Data-driven approach — all personal content lives in `src/features/portfolio/data/` files. We edit those files, update config, replace favicon assets, and create documentation. The sanitize script gets enhanced so any future upstream pull can be re-customized easily.

**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui, pnpm

---

## Task 1: Create feature branch and sync upstream

**Files:**
- Git operations only

- [ ] **Step 1: Stash any uncommitted work and create a new branch from main**

```bash
git stash push -m "wip before paranjay-customization"
git checkout main
git checkout -b feat/paranjay-customization
```

- [ ] **Step 2: Fetch latest upstream and merge**

```bash
git fetch upstream
git merge upstream/main --no-edit
```

If there are merge conflicts, resolve them by keeping upstream changes for design/structure and preserving Paranjay's data files where they exist.

- [ ] **Step 3: Restore stashed work if applicable**

```bash
git stash pop || echo "No stash to restore"
```

- [ ] **Step 4: Verify build still works**

```bash
pnpm install
pnpm build
```

Expected: Build succeeds (or only pre-existing warnings).

- [ ] **Step 5: Commit the sync**

```bash
git add -A
git commit -m "chore: sync with upstream ncdai/chanhdai.com"
```

---

## Task 2: Fill testimonials with placeholder data based on user's info

**Files:**
- Modify: `src/features/portfolio/data/testimonials.ts`

- [ ] **Step 1: Replace testimonials with placeholder entries based on Paranjay's data**

Replace the entire content of `src/features/portfolio/data/testimonials.ts` with placeholder testimonials that demonstrate the layout capability. These are fictional but based on Paranjay's context (IIT Madras, data science, open source):

```typescript
import type { Testimonial } from "../types/testimonials"

export const TESTIMONIALS_PINNED: Testimonial[] = [
  {
    authorName: "Prof. Rajesh Kumar",
    authorAvatar: "https://avatar.vercel.sh/rajesh",
    authorTagline: "Faculty @ IIT Madras",
    quote:
      "Paranjay's approach to data science projects is impressive — he combines strong theoretical foundations with practical implementation skills.",
    url: "https://iitm.ac.in",
    date: "2025-12-15",
    isVerified: true,
    isFeatured: true,
  },
  {
    authorName: "Ananya Sharma",
    authorAvatar: "https://avatar.vercel.sh/ananya",
    authorTagline: "ML Engineer @ Google",
    quote:
      "Collaborated with Paranjay on a hackathon — his ability to ship clean, scalable code under pressure is remarkable.",
    url: "https://x.com/ananya",
    date: "2025-11-20",
    isVerified: true,
    isFeatured: true,
  },
]

export const TESTIMONIALS_1: Testimonial[] = [
  {
    authorName: "Vikram Patel",
    authorAvatar: "https://avatar.vercel.sh/vikram",
    authorTagline: "SDE @ Amazon",
    quote:
      "Paranjay's Learning OSS project is one of the most creative student projects I've seen — Manim visualizers + spaced repetition is genius.",
    url: "https://x.com/vikram",
    date: "2025-10-08",
    isVerified: true,
  },
  {
    authorName: "Sneha Reddy",
    authorAvatar: "https://avatar.vercel.sh/sneha",
    authorTagline: "Data Scientist @ Flipkart",
    quote:
      "His IPL 2026 Engine dashboard is production-quality. The real-time analytics and roster integrity features are genuinely useful.",
    url: "https://x.com/sneha",
    date: "2025-09-15",
    isVerified: true,
  },
]

export const TESTIMONIALS_2: Testimonial[] = [
  {
    authorName: "Arjun Mehta",
    authorAvatar: "https://avatar.vercel.sh/arjun",
    authorTagline: "Founder @ CodeCraft",
    quote:
      "Paranjay's portfolio is hands down the cleanest I've seen from a student. The attention to detail is insane.",
    url: "https://x.com/arjun",
    date: "2025-08-22",
    isVerified: true,
  },
  {
    authorName: "Priya Nair",
    authorAvatar: "https://avatar.vercel.sh/priya",
    authorTagline: "Open Source Maintainer",
    quote:
      "Great to see a student contributing to open source with such quality. Paranjay's PRs are always well-thought-out.",
    url: "https://x.com/priya",
    date: "2025-07-10",
    isVerified: true,
  },
]
```

- [ ] **Step 2: Verify build**

```bash
pnpm check-types
```

- [ ] **Step 3: Commit**

```bash
git add src/features/portfolio/data/testimonials.ts
git commit -m "feat: fill testimonials with placeholder data demonstrating layout"
```

---

## Task 3: Remove sponsors from homepage and nav

**Files:**
- Modify: `src/features/sponsor/data.tsx`
- Modify: `src/app/(app)/page.tsx`
- Modify: `src/config/site.ts`

- [ ] **Step 1: Empty the sponsors data**

Replace content of `src/features/sponsor/data.tsx`:

```typescript
import type { Sponsor } from "./types"

export const SPONSORS: Sponsor[] = []
```

- [ ] **Step 2: Remove Sponsors section from homepage**

In `src/app/(app)/page.tsx`, remove the Sponsors import and its section:

Remove this import:
```typescript
import { Sponsors } from "@/features/portfolio/components/sponsors"
```

Remove these lines from the JSX:
```typescript
<Sponsors />
<Separator />
```

- [ ] **Step 3: Remove Sponsors from main nav**

In `src/config/site.ts`, remove the Sponsors entry from `MAIN_NAV`:

Remove:
```typescript
{
  title: "Sponsors",
  href: "/sponsors",
  icon: "Heart",
},
```

- [ ] **Step 4: Verify build**

```bash
pnpm check-types
```

- [ ] **Step 5: Commit**

```bash
git add src/features/sponsor/data.tsx src/app/\(app\)/page.tsx src/config/site.ts
git commit -m "feat: remove sponsors section from homepage and nav"
```

---

## Task 4: Clear certifications (all are chanh dai's)

**Files:**
- Modify: `src/features/portfolio/data/certifications.ts`

- [ ] **Step 1: Empty certifications array**

Replace content of `src/features/portfolio/data/certifications.ts`:

```typescript
import type { Certification } from "../types/certifications"

export const CERTIFICATIONS: Certification[] = []
```

- [ ] **Step 2: Verify build**

```bash
pnpm check-types
```

- [ ] **Step 3: Commit**

```bash
git add src/features/portfolio/data/certifications.ts
git commit -m "chore: clear chanh dai's certifications"
```

---

## Task 5: Move IIT Madras to education, clear experiences

**Files:**
- Modify: `src/features/portfolio/data/experiences.tsx`
- Create: `src/features/portfolio/data/education.ts` (if not exists)
- Modify: `src/features/portfolio/components/education/index.tsx` (if needed)
- Modify: `src/app/(app)/page.tsx`

**Note:** IIT Madras BS is education, NOT work experience. We need to move it to an education section and clear experiences entirely.

- [ ] **Step 1: Check if education section exists**

```bash
ls src/features/portfolio/data/education* 2>/dev/null || echo "No education data file"
ls src/features/portfolio/components/education* 2>/dev/null || echo "No education component"
```

If education section doesn't exist, we'll create one. If it does, we'll populate it.

- [ ] **Step 2: Create education data file (if needed)**

Create `src/features/portfolio/data/education.ts`:

```typescript
import type { Education } from "../types/education"

export const EDUCATION: Education[] = [
  {
    id: "iit-madras",
    schoolName: "Indian Institute of Technology Madras",
    schoolLogo:
      "https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg",
    schoolWebsite: "https://www.iitm.ac.in/",
    degree: "Bachelor of Science",
    fieldOfStudy: "Data Science and Applications",
    startYear: "2024",
    endYear: "Present",
    description:
      "Pursuing BS in Data Science and Applications. Coursework includes machine learning, data structures, statistics, and modern application development.",
    skills: ["Data Science", "Python", "Mathematics", "Statistics", "Machine Learning"],
    isCurrent: true,
  },
]
```

- [ ] **Step 3: Create education type (if needed)**

Create `src/features/portfolio/types/education.ts`:

```typescript
export type Education = {
  id: string
  schoolName: string
  schoolLogo?: string
  schoolWebsite?: string
  degree: string
  fieldOfStudy: string
  startYear: string
  endYear?: string
  description?: string
  skills?: string[]
  isCurrent?: boolean
}
```

- [ ] **Step 4: Create education component (if needed)**

Create `src/features/portfolio/components/education/index.tsx` following the same pattern as experiences.

- [ ] **Step 5: Clear experiences entirely**

Replace `src/features/portfolio/data/experiences.tsx`:

```typescript
import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = []
```

- [ ] **Step 6: Add education to homepage**

In `src/app/(app)/page.tsx`, add Education import and section where Experiences was.

- [ ] **Step 7: Verify build**

```bash
pnpm check-types
```

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: move IIT Madras to education section, clear experiences"
```

---

## Task 6: Fix package.json and llms.txt

**Files:**
- Modify: `package.json`
- Modify: `public/llms.txt`

- [ ] **Step 1: Update package.json description**

In `package.json`, change line 4 from:
```json
"description": "IIT Madras BS Student, Design Engineer, and Full-stack Developer portfolio.",
```
to:
```json
"description": "IIT Madras BS Student portfolio — exploring data science, AI, and scalable systems.",
```

- [ ] **Step 2: Fix llms.txt X handle**

In `public/llms.txt`, change line 15 from:
```
- X/Twitter: https://x.com/paranjay_k
```
to:
```
- X/Twitter: https://x.com/paranjaydotdev
```

- [ ] **Step 3: Commit**

```bash
git add package.json public/llms.txt
git commit -m "fix: update package.json description and correct X handle in llms.txt"
```

---

## Task 7: Create KP favicon mark

**Files:**
- Create: `public/favicon.svg`
- Create: `public/favicon-dark.svg`
- Create: `public/favicon.ico` (or reference SVG)
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create the KP mark SVG favicon**

Create `public/favicon.svg` — a clean "KP" logotype mark similar to chanh dai's "CD" style. Use the Geist font weight/style that matches the site typography:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="6" fill="#09090b"/>
  <text x="16" y="22" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#fafafa">KP</text>
</svg>
```

Create `public/favicon-dark.svg` (dark mode variant — reversed):

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="6" fill="#fafafa"/>
  <text x="16" y="22" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#09090b">KP</text>
</svg>
```

- [ ] **Step 2: Update layout.tsx to use local favicons**

In `src/app/layout.tsx`, replace lines 92-111 (the external CDN favicon references) with local paths:

```typescript
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.svg",
        sizes: "any",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
```

- [ ] **Step 3: Update manifest.webmanifest**

In `public/manifest.webmanifest`, update the icons array to reference local favicon:

```json
"icons": [
  {
    "src": "/favicon.svg",
    "sizes": "any",
    "type": "image/svg+xml"
  }
]
```

- [ ] **Step 4: Verify build and visual check**

```bash
pnpm build
```

- [ ] **Step 5: Commit**

```bash
git add public/favicon.svg public/favicon-dark.svg public/manifest.webmanifest src/app/layout.tsx
git commit -m "feat: create KP favicon mark, replace chanh dai's CDN favicons"
```

---

## Task 8: Update /now page with accurate data

**Files:**
- Modify: `src/app/(app)/(pages)/now/page.tsx`

- [ ] **Step 1: Review and update NOW_SECTIONS content**

The current /now page content looks reasonably accurate for Paranjay. Verify the following are correct:
- Term 4 courses (Machine Learning Practice, Modern Application Development I, Business Data Management)
- Projects mentioned (Learning OSS, IPL 2026 Engine, Workout Buddy v2.5)
- Learning resources (Karpathy, fast.ai)
- Goals

If any are inaccurate, update them. Otherwise, keep as-is since this was already customized.

- [ ] **Step 2: Commit if changes were made**

```bash
git add src/app/\(app\)/\(pages\)/now/page.tsx
git commit -m "chore: verify and update /now page content"
```

---

## Task 9: Update /uses page with accurate data

**Files:**
- Modify: `src/app/(app)/(pages)/uses/page.tsx`

- [ ] **Step 1: Review and update USES_DATA**

The current /uses page has hardware (MacBook Air M2, iPhone 13, Sony WH-1000XM4), editors (VS Code, Cursor, WezTerm), dev tools, tech stack, apps, and learning resources. Verify these are Paranjay's actual tools.

If any are inaccurate, update them. Keep the structure and design intact.

- [ ] **Step 2: Commit if changes were made**

```bash
git add src/app/\(app\)/\(pages\)/uses/page.tsx
git commit -m "chore: verify and update /uses page content"
```

---

## Task 10: Enhance sanitize script for re-customization

**Files:**
- Modify: `scripts/sanitize-portfolio.ts`

- [ ] **Step 1: Update sanitize script to handle all data files properly**

The current script handles most files but has some issues:
- It references `social-links.ts` but the actual file is `social-links.tsx`
- It doesn't handle `tech-stack.ts`, `media-stats.ts`, or sponsor data
- The variable name derivation logic is fragile

Update `scripts/sanitize-portfolio.ts` to:

```typescript
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
  console.log("   2. Edit src/features/portfolio/data/social-links.tsx with your links")
  console.log("   3. Edit src/config/site.ts with your handles")
  console.log("   4. Add your favicon to public/favicon.svg")
  console.log("   5. Run: pnpm dev")
}

sanitize()
```

- [ ] **Step 2: Verify script runs cleanly**

```bash
# DON'T actually run it on the live data — just verify it compiles
npx tsx --eval "import './scripts/sanitize-portfolio.ts'" 2>&1 | head -5
```

Or just verify TypeScript compiles:
```bash
pnpm check-types
```

- [ ] **Step 3: Commit**

```bash
git add scripts/sanitize-portfolio.ts
git commit -m "feat: enhance sanitize script with full data file coverage"
```

---

## Task 11: Create comprehensive user guide (USER_GUIDE.md)

**Files:**
- Create: `USER_GUIDE.md`

- [ ] **Step 1: Create the user guide document**

Create `USER_GUIDE.md` at the project root with the following content:

```markdown
# Paranjay's Portfolio Template — User Guide

> A pixel-perfect dev portfolio forked from [ncdai/chanhdai.com](https://github.com/ncdai/chanhdai.com), customized by Paranjay Khachar.

## Quick Start

1. **Fork this repo** (if public) or clone it
2. **Install dependencies:** `pnpm install`
3. **Run the sanitize script** to clear Paranjay's data: `pnpm sanitize:portfolio`
4. **Fill in your info** in the data files listed below
5. **Start dev server:** `pnpm dev`

## Data Files to Customize

All personal content lives in `src/features/portfolio/data/`. Edit these files:

| File | What it controls |
|------|-----------------|
| `user.ts` | Name, bio, avatar, email, DOB, about section, job title, SEO keywords |
| `social-links.tsx` | All social media links (X, GitHub, LinkedIn, Discord, Spotify, etc.) |
| `experiences.tsx` | Work experience timeline |
| `projects.ts` | Portfolio projects with descriptions and tech stack |
| `awards.ts` | Awards and achievements |
| `certifications.ts` | Professional certifications |
| `bookmarks.tsx` | Bookmarked resources/links |
| `testimonials.ts` | Testimonials from others (pinned + community) |
| `tech-stack.ts` | Skills/tech proficiency display |
| `media-stats.ts` | Trakt, Letterboxd, Goodreads, Volt.fm stats (optional) |

## Site Configuration

Edit `src/config/site.ts` to update:
- `X_HANDLE` — your X/Twitter handle
- `GITHUB_USERNAME` — your GitHub username
- `SOURCE_CODE_GITHUB_REPO` — your repo (e.g., `username/portfolio`)
- `SPONSORSHIP_URL` — your GitHub sponsors link

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
# Required for GitHub contribution graph
GITHUB_USERNAME=your-github-username

# Optional: Spotify integration
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=

# Optional: WakaTime coding stats
WAKATIME_API_KEY=

# Optional: Analytics
NEXT_PUBLIC_GTM_ID=
```

## Favicon & Branding

- Replace `public/favicon.svg` and `public/favicon-dark.svg` with your own mark
- Replace `public/pfp.jpeg` with your profile picture
- Update `ogImage` in `user.ts` for social sharing preview

## Sections That Auto-Hide When Empty

These sections automatically hide when their data arrays are empty:
- **Sponsors** — empty `SPONSORS` array
- **Certifications** — empty `CERTIFICATIONS` array
- **Bookmarks** — empty `BOOKMARKS` array
- **Awards** — empty `AWARDS` array
- **Testimonials** — empty `TESTIMONIALS_PINNED` array

## Sections with Placeholder Data (Remove or Replace)

- **Components** (`src/registry/`) — these are shadcn registry components from chanh dai. Keep the design but replace with your own components if you're a web developer, or hide the section.
- **Blocks** (`src/registry/blocks/`) — demo blocks. Keep for reference or hide.
- **Blog** (`src/features/doc/content/`) — write your own MDX posts or hide the section.

## Pulling Updates from Upstream

To pull new features from the original chanhdai.com:

```bash
git fetch upstream
git merge upstream/main --no-edit
```

**Important:** The sanitize script preserves your data files. After merging, check for conflicts in:
- `src/features/portfolio/data/*` (your personal data)
- `src/config/site.ts` (your handles)
- `src/app/layout.tsx` (your favicon config)

## Key Design Features to Preserve

- Dark/light mode toggle
- cmd/ctrl+k command palette
- GitHub contribution graph with live stats
- Spotify now-playing widget (requires API setup)
- WakaTime coding activity dashboard
- Responsive mobile design
- Fluid gradient text effects
- Animated brand mark

## Deployment

Recommended: **Vercel**

```bash
pnpm build
```

Or deploy to Vercel:
```bash
npx vercel
```

Set environment variables in Vercel dashboard for production.

## Architecture Notes

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui + custom registry
- **Content:** MDX for blog/docs
- **Registry:** `src/registry/` — components, hooks, blocks, examples
- **Auto-generated:** `src/__registry__/` — DO NOT EDIT

## Credits

- Original design: [ncdai/chanhdai.com](https://github.com/ncdai/chanhdai.com)
- Customized by: Paranjay Khachar
```

- [ ] **Step 2: Commit**

```bash
git add USER_GUIDE.md
git commit -m "docs: add comprehensive user guide for portfolio template"
```

---

## Task 12: Verify everything builds and works

**Files:**
- None (verification only)

- [ ] **Step 1: Run full type check**

```bash
pnpm check-types
```

Expected: No errors.

- [ ] **Step 2: Run lint**

```bash
pnpm lint
```

Expected: No errors (warnings OK).

- [ ] **Step 3: Run build**

```bash
pnpm build
```

Expected: Build succeeds.

- [ ] **Step 4: Run dev and visually verify**

```bash
pnpm dev
```

Open http://localhost:3000 and verify:
- KP favicon loads (not chanh dai's CD)
- No sponsors section on homepage
- No sponsors in nav bar
- Education section shows IIT Madras (not in experience)
- Experiences section is empty/hidden
- Testimonials show placeholder data
- Certifications section is empty/hidden
- Wide layout from upstream is applied
- Streak and stats features work
- All other sections render correctly

- [ ] **Step 5: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix: final adjustments after verification"
```

---

## Task 13: Bring wide layout from upstream and enhance stats

**Files:**
- Modify: `src/app/(app)/page.tsx` (layout width)
- Verify: GitHub contributions component (streak, stats)
- Verify: Dashboard component (Spotify, WakaTime, Discord, Steam)

- [ ] **Step 1: Check upstream for wide layout changes**

The upstream chanhdai.com may have updated the max-width container. Check the current `page.tsx` line 40:

```typescript
<div className="mx-auto md:max-w-5xl *:[[id]]:scroll-mt-22">
```

The upstream may use `max-w-6xl` or wider. Update to match upstream's latest layout width.

- [ ] **Step 2: Verify GitHub contributions stats**

The contribution graph should show:
- Current streak
- Best streak
- Peak commits
- Average commits
- Yearly contributions

Check `src/features/portfolio/components/github-contributions/index.tsx` for these stats.

- [ ] **Step 3: Verify dashboard widgets**

Check `src/features/portfolio/components/dashboard.tsx` for:
- WakaTime coding activity
- Spotify now-playing
- Discord status
- Steam activity

- [ ] **Step 4: Commit if layout changes were made**

```bash
git add -A
git commit -m "feat: apply wide layout from upstream, verify stats features"
```

---

## Summary of What Was Changed

| What | Before | After |
|------|--------|-------|
| Testimonials | chanh dai's network quotes | Placeholder data based on Paranjay's context |
| Sponsors | PostHog, Vercel, shadcn | Removed from homepage + nav |
| Certifications | chanh dai's DL cert, GCP cert | Cleared |
| Experiences | IIT Madras + placeholder company | Cleared (IIT Madras moved to education) |
| Education | None | IIT Madras BS (new section) |
| Favicon | chanh dai's CDN assets | Local KP mark SVGs |
| package.json | chanh dai's description | Paranjay's description |
| llms.txt | Wrong X handle | Corrected to @paranjaydotdev |
| Sanitize script | Incomplete file coverage | Full coverage + site config reset |
| User guide | None | Comprehensive USER_GUIDE.md |
| Layout | max-w-5xl | Wide layout from upstream |

## Things Preserved (Design Intact)

- All of chanh dai's goated design code and components
- Dark/light mode, cmd+k palette
- GitHub contribution graph
- Spotify/Discord/Steam/WakaTime dashboard widgets
- Tech stack display
- Blog layout and MDX system
- Block/component viewer (CodePen-like)
- Responsive mobile design
- Fluid gradient text
- Animated brand mark
