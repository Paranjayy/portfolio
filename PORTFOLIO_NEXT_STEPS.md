# Portfolio direction and next decisions

Updated: 2026-07-18

## Current direction

This is Paranjay's personal portfolio first: a quiet, pixel-grid lab for projects, experiments, and a growing public footprint. It remains visibly WIP until the content is complete. The long-term template should be extracted from the personal site only after the personal workflow is pleasant and proven.

## Done in this pass

- Kept the compact social icon view as the default; the grouped directory is an optional alternate view.
- Corrected the IIT Madras entry to describe student status, updated the Discord handle, and restored the Night Owl bio.
- Removed placeholder WakaTime data and hard-coded Discord/Steam presence claims.
- Removed inherited components, blocks, blog, and sponsor surfaces from the homepage/navigation.
- Restored the original structured attribution footer and its interactive bottom wordmark.
- Hid analytics insights until they are connected to Paranjay's own analytics source.
- Made the GitHub graph contrast readable and stopped hard-coding contribution claims in the profile copy.
- Adjusted the pixel P opening to improve its legibility at small sizes.

## Needs Paranjay's input

- Name pronunciation: provide an audio file URL or a confirmed phonetic spelling before enabling the button again.
- Live integrations: provide/confirm WakaTime and Spotify credentials in `.env.local`; Steam presence needs a chosen provider or Steam API key. Discord presence requires an explicit Discord/Lanyard integration decision.
- Project audit: approve which public GitHub repositories and local projects are genuinely portfolio-ready, plus final descriptions, URLs, dates, and visuals.
- Social audit: confirm each current profile, especially older Twitch, YouTube, Pinterest, Gravatar, and Steam links; remove inactive accounts rather than presenting them as current.
- Removed Duolingo after the visual/README mismatch. Review LeetCode, HackerRank, Codewars, Kaggle, Stack Overflow, Hashnode, Docker Hub, Monkeytype, Hugging Face, and CodePen before adding any of them to the site.
- Gallery: provide images/captions or decide whether it should become a build log instead.
- Testimonials: replace the current fictional/sample data with real testimonials, or hide the section until there are any. Never present examples as real endorsements.
- Awards and certifications: send the source details (issuer, date, credential URL, title, and image/logo where available).

## Next build sequence

1. Audit projects from GitHub and local work; replace generic Unsplash images and missing logos with real project assets. The project data currently points to logo files that do not exist, so this is the first visual-content task.
2. Add project metadata (`status`, `role`, `year`, `featured`, `case study`) and support grid/list/filter views.
3. Add a concise `/now` or build-log page for current work, instead of inherited blog/component content.
4. Make integrations explicit: show live data only when configured, otherwise show a useful setup/empty state.
5. Add a pronunciation button only after choosing a source: a recorded audio clip is best; browser TTS can be a temporary fallback but needs a confirmed pronunciation and voice quality check.
6. Once the data model has survived personal use, create a `portfolio.config.ts` plus a setup script that asks for identity, links, projects, and integrations. That becomes the fork-friendly template layer.
7. Keep the Lab as one clearly labelled component/block experimentation surface and expand it only with original work. The homepage now includes real bookmarks plus honest WIP states for Experience, Awards, and Certifications.
8. Design a bespoke hero mark from scratch. The current KP attempt is a temporary experiment; it should be evaluated against the original cover for geometry, negative space, and small-screen legibility before it becomes the permanent identity.

## Template principles

- One clear data directory for all editable identity and content.
- No fake metrics, dummy activity, or assumed employment status.
- Optional sections should disappear cleanly when no data exists.
- Integrations must fail gracefully and explain how to enable them.
- Personal branding stays replaceable: mark, colors, footer, and navigation are configuration, not scattered edits.
