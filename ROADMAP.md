# Portfolio Roadmap & Awareness

Last updated: 2026-07-17

## Current Status

- **Branch**: `main` (latest merge from `feat/paranjay-customization`)
- **Status**: WIP / Early beta - placeholder content in many sections
- **Deployment**: Vercel auto-deploy on push to main
- **Upstream**: Synced with ncdai/chanhdai.com (as of 2026-07-17)

## What's Done

- [x] Fork ncdai/chanhdai.com and set up locally
- [x] Merge latest upstream changes
- [x] Clear all of ncdai's personal data (awards, certs, bookmarks, sponsors, experiences)
- [x] Update social links to Paranjay's profiles (12 platforms)
- [x] Fix site config (URLs, GitHub repo, UTM source)
- [x] Update user.ts with Paranjay's info
- [x] Add WIP banner to homepage
- [x] Conditional rendering for empty sections (awards, certs, bookmarks, sponsors)
- [x] Setup WakaTime extension in Zed
- [x] Setup Entire.io CLI (already enabled)
- [x] Archive pre-cleanup branch (`archive/paranjay-pre-cleanup-20260717`)
- [x] Fix merge conflicts (nav-item-github, dashboard icons, social-links architecture)
- [x] Type check passes clean (0 errors)

## What Needs Your Input

### High Priority
- [ ] **Fill in actual project details** - descriptions, links, tech stacks for Workout Buddy, Media Tracker, IPL 2026 Engine, Gravity Archive
- [ ] **Update testimonials** - replace placeholder testimonials with real ones (or keep some generic ones)
- [ ] **Add real experience entries** - beyond IIT Madras if applicable
- [ ] **Gravatar setup** - create account at gravatar.com for profile picture
- [ ] **Custom favicon/logo** - replace KP mark with your own branding
- [ ] **Verify social media handles** - some may be incorrect, check each platform

### Medium Priority
- [ ] **WakaTime API key** - set `WAKATIME_API_KEY` env var for dashboard stats
- [ ] **Spotify API** - set up API route for now-playing widget
- [ ] **Blog posts** - write or import from other platforms
- [ ] **Bookmarks** - add your actual bookmarks
- [ ] **Custom about section** - write your actual bio/about text

### Low Priority / Future
- [ ] **Social links multiple views** (Notion-style)
- [ ] **Analytics/insights** - unique visitors tracking
- [ ] **Components section** - build and add your own components
- [ ] **Blocks section** - create custom blocks
- [ ] **Dark mode improvements** - if needed
- [ ] **Mobile responsiveness** - test and polish
- [ ] **Performance optimization** - Lighthouse audit
- [ ] **SEO improvements** - meta tags, structured data
- [ ] **Accessibility audit** - WCAG compliance

## Technical Awareness

### Key Files to Know

| File | Purpose |
|------|---------|
| `src/features/portfolio/data/user.ts` | Your personal info (name, bio, avatar, etc.) |
| `src/features/portfolio/data/social-links.ts` | Social media profiles |
| `src/features/portfolio/data/experiences.tsx` | Work experience |
| `src/features/portfolio/data/projects.ts` | Your projects |
| `src/features/portfolio/data/awards.tsx` | Awards (currently empty) |
| `src/features/portfolio/data/certifications.ts` | Certifications (currently empty) |
| `src/features/portfolio/data/bookmarks.tsx` | Bookmarks (currently empty) |
| `src/features/portfolio/data/testimonials.tsx` | Testimonials |
| `src/features/portfolio/data/tech-stack.tsx` | Tech skills |
| `src/features/portfolio/components/sponsors.tsx` | Sponsors (hidden when empty) |
| `src/config/site.ts` | Site config (URLs, nav, etc.) |
| `src/app/(app)/page.tsx` | Homepage layout |

### Architecture Notes

- **Social links**: Uses keyed registry pattern (`SOCIAL` object) with separate icon binding (`SOCIAL_ICONS`)
- **Empty sections**: Components return `null` when data array is empty
- **Upstream sync**: Run `git fetch upstream && git merge upstream/main` to pull latest
- **Registry build**: Run `pnpm registry:build` after component changes

### Known Issues

1. **Dashboard component** (`dashboard.tsx`) - uses placeholder data for Discord/Steam, needs API integration
2. **GitHub contributions** - fetches from external API, may fail if API is down
3. **Social link icons** - some use CDN URLs (cdn.simpleicons.org), may be slow or unavailable
4. **WakaTime integration** - needs API key to show real data

### Secrets/Env Vars Needed

```
WAKATIME_API_KEY=your_key          # For coding stats dashboard
GITHUB_API_TOKEN=your_token        # For GitHub stars (optional, works without)
SPOTIFY_CLIENT_ID=your_id          # For now-playing widget
SPOTIFY_CLIENT_SECRET=your_secret  # For now-playing widget
```

## Merge Strategy

When pulling upstream changes:
1. `git fetch upstream`
2. `git merge upstream/main` (expect conflicts in data files)
3. Resolve conflicts by keeping Paranjay's data, accepting upstream's code changes
4. Run `pnpm check-types` to verify
5. Commit and push

## Social Media Username Notes

From screenshots and URLs, the actual handles appear to be:
- **X**: @paranjaydotdev
- **GitHub**: Paranjayy
- **LinkedIn**: /in/paranjayy/
- **Discord**: paranjaydotdev
- **Spotify**: paranjaydotdev
- **Telegram**: @paranjaydotdev
- **Twitch**: paranjaydotdev
- **Pinterest**: paranjaydotdev
- **YouTube**: @paranjaydotdev
- **Duolingo**: paranjaydotdev
- **Gravatar**: paranjaydotdev
- **Boot.dev**: paranjaydotdev

Note: Username is NOT ubiquitous across platforms. GitHub is `Paranjayy`, LinkedIn is `paranjayy`, others are `paranjaydotdev`.
