# AGENTS.md - Portfolio Project Guidelines

Last updated: 2026-07-17

## Project Overview

Personal portfolio website forked from [ncdai/chanhdai.com](https://github.com/ncdai/chanhdai.com) and customized for Paranjay Khachar.

**Live URL**: https://paranjay.dev (Vercel auto-deploy)
**Repository**: https://github.com/Paranjayy/portfolio
**Status**: WIP / Early beta

## Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **UI**: React 19, Tailwind CSS v4, shadcn/ui
- **Content**: MDX
- **Testing**: Vitest
- **Package Manager**: pnpm (Bun for scripts)
- **Deployment**: Vercel
- **AI Context**: Entire.io (auto-records agent sessions)

## Project Structure

```
src/
├── app/                    # App Router pages, layouts, API routes
│   ├── (app)/             # Main app shell
│   ├── (llms)/            # LLM-friendly routes (llms.txt)
│   ├── (preview)/         # Block preview system
│   └── api/               # API routes (wakatime, spotify)
├── components/            # Shared UI components
├── registry/              # Component registry (shadcn style)
│   ├── components/        # Reusable components
│   ├── blocks/            # Page blocks
│   ├── examples/          # Component examples
│   └── styles/            # Theme styles
├── features/              # Feature modules
│   ├── doc/               # Blog/docs data layer
│   ├── portfolio/         # Portfolio-specific components & data
│   └── sponsor/           # Sponsors feature
├── config/                # Site, registry, JSON-LD config
├── scripts/               # Build scripts (Bun)
├── hooks/                 # Custom React hooks
├── lib/                   # Libraries (wakatime, spotify, etc.)
└── utils/                 # Utility functions
```

## Key Data Files

All portfolio content is in `src/features/portfolio/data/`:

| File | Purpose | Edit for |
|------|---------|----------|
| `user.ts` | Name, bio, avatar, email | Personal info |
| `social-links.ts` | Social media profiles | Add/remove platforms |
| `experiences.tsx` | Work/education experience | Add jobs/internships |
| `education.ts` | Education history | Add schools |
| `projects.ts` | Portfolio projects | Add projects |
| `tech-stack.tsx` | Tech skills | Add skills |
| `testimonials.tsx` | Testimonials | Add reviews |
| `awards.tsx` | Awards | Add achievements |
| `certifications.ts` | Certifications | Add certs |
| `bookmarks.tsx` | Bookmarks | Add links |
| `github-contributions.ts` | GitHub API | Usually no edit |
| `media-stats.ts` | Media stats | Usually no edit |

## Component Files

| File | Purpose |
|------|---------|
| `src/components/chanhdai-mark.tsx` | KP logo (uses `currentColor`) |
| `src/components/site-header.tsx` | Top navigation bar |
| `src/components/site-footer.tsx` | Footer with credits |
| `src/components/github-stars.tsx` | GitHub star count button |
| `src/components/nav-item-github.tsx` | GitHub nav item |
| `src/app/(app)/page.tsx` | Homepage layout |
| `src/app/(app)/layout.tsx` | App layout with header/footer |
| `src/config/site.ts` | Site config (URLs, nav, env) |

## Conditional Rendering

These sections automatically hide when their data array is empty:

- `Awards` (`src/features/portfolio/components/awards/index.tsx`)
- `Certifications` (`src/features/portfolio/components/certifications/index.tsx`)
- `Bookmarks` (`src/features/portfolio/components/bookmarks/index.tsx`)
- `Sponsors` (`src/features/portfolio/components/sponsors.tsx`)

To add a section back, populate the corresponding data file.

## Environment Variables

Required in `.env.local` (gitignored):

```bash
NEXT_PUBLIC_APP_URL=https://paranjay.dev
WAKATIME_API_KEY=your_key          # For coding stats dashboard
GITHUB_API_TOKEN=your_token        # For GitHub stars (optional)
SPOTIFY_CLIENT_ID=your_id          # For now-playing widget
SPOTIFY_CLIENT_SECRET=your_secret  # For now-playing widget
SPOTIFY_REFRESH_TOKEN=your_token   # For now-playing widget
NEXT_PUBLIC_REGISTRY_NAMESPACE=@paranjayy
NEXT_PUBLIC_REGISTRY_NAMESPACE_URL=https://paranjay.dev/r/{name}.json
```

## Commands

```bash
pnpm dev                # Dev server
pnpm build              # Production build (runs registry:build first)
pnpm test               # Vitest (watch)
pnpm test:run           # Vitest (single run)
pnpm lint               # ESLint
pnpm lint:fix           # ESLint with --fix
pnpm format:write       # Prettier
pnpm check-types        # Type checking (tsc --noEmit)
pnpm registry:build     # Build shadcn registry
pnpm registry:validate  # Validate generated registry.json
pnpm icons:build        # Build registry icons
```

## Upstream Sync

When ncdai pushes updates to `ncdai/chanhdai.com`:

```bash
git fetch upstream
git checkout feat/paranjay-customization
git merge upstream/main
# Resolve conflicts in data files (keep Paranjay's data, accept upstream's code)
pnpm install
pnpm check-types
git push origin feat/paranjay-customization
# After testing, merge to main
```

## Design Tokens

- **Primary color**: Foreground/text
- **Background**: Background
- **Borders**: `border-line`
- **Muted text**: `text-muted-foreground`
- **Accent**: `bg-accent-muted`

Uses CSS custom properties via Tailwind v4. Light/dark mode via `prefers-color-scheme` or manual toggle.

## Favicon

- `public/favicon.svg` - Light mode (black KP on white)
- `public/favicon-dark.svg` - Dark mode (white KP on #09090b)
- Uses `prefers-color-scheme` media query

## KP Logo

The pixel logo is at `src/components/chanhdai-mark.tsx`. Uses `currentColor` so it inherits CSS color automatically.

## Deployment

Vercel auto-deploys on push to `main` branch. Preview deployments on PRs.

Project ID: `prj_KSYddJF97Zv8ph2LiNdGxHWH00hI`

## Common Tasks

### Add a new social platform

1. Add entry to `SOCIAL` object in `src/features/portfolio/data/social-links.ts`
2. Add icon binding in `src/features/portfolio/components/social-link-icons.tsx`
3. TypeScript will enforce icon exists (keyed registry pattern)

### Update personal info

Edit `src/features/portfolio/data/user.ts`:
- `displayName` - Full name
- `username` - GitHub username
- `bio` - Short bio
- `about` - Long about text (Markdown)
- `avatar` - Profile image URL
- `flipSentences` - Rotating phrases under name

### Change site URL

Edit `src/config/site.ts`:
- `SITE_INFO.url` - Main site URL
- `SOURCE_CODE_GITHUB_REPO` - GitHub repo (affects star count)
- `SOURCE_CODE_GITHUB_URL` - Full GitHub URL
- `SPONSORSHIP_URL` - GitHub Sponsors URL

## Known Issues / TODOs

- [ ] Add contribution graph stats (streak, peak, average)
- [ ] Verify WakaTime dashboard works on production
- [ ] Verify Spotify now-playing works (needs API keys)
- [ ] Add custom logotype (full "Paranjay Khachar" wordmark)
- [ ] Implement multiple social views (Notion-style)
- [ ] Add analytics/insights
- [ ] Fix KP logo P letter recognition at small sizes

## Code Style

- TypeScript strict mode
- kebab-case file naming
- Descriptive names, comments only for "why"
- No emojis in code, comments, or commit messages
- Tailwind CSS v4 syntax
- Support dark/light modes
- Follow SOLID principles
- Sentence-case headings in Markdown

## Testing

```bash
pnpm test:run           # Run all tests
```

## Linting

```bash
pnpm lint               # Check
pnpm lint:fix           # Auto-fix
```

## DO NOT

- Edit auto-generated files: `registry.json`, `src/registry/__index__.tsx`, `src/registry/transformed/`, `public/r/*.json`
- Commit `.env*` files (gitignored)
- Edit upstream components without checking if customizations exist
- Revert the KP logo to CD mark

## See Also

- `ROADMAP.md` - High-level roadmap and awareness
- `README.md` - General project info
- `DEVELOPMENT.md` - Development setup
- `USER_GUIDE.md` - User guide for the template
