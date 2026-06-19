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
| `education.ts` | Education entries (school, degree, field of study, dates) |
| `experiences.ts` | Work experience timeline (empty by default) |
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
- **Education** — empty `EDUCATION` array
- **Experiences** — empty `EXPERIENCES` array

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
