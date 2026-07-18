# Portfolio direction and next decisions

Updated: 2026-07-18

## Current direction

This is Paranjay's personal portfolio first: a quiet, pixel-grid lab for projects, experiments, and a growing public footprint. It remains visibly WIP until the content is complete. The long-term template should be extracted from the personal site only after the personal workflow is pleasant and proven.

## Done in this pass

- Replaced the social icon wall with a grouped social directory and an icon-only alternate view.
- Corrected the IIT Madras entry to describe student status, updated the Discord handle, and restored the Night Owl bio.
- Removed placeholder WakaTime data and hard-coded Discord/Steam presence claims.
- Removed inherited components, blocks, blog, testimonial, and sponsor surfaces from the homepage/navigation.
- Simplified the footer and removed the oversized repeated-name treatment.
- Made the GitHub graph contrast readable and stopped hard-coding contribution claims in the profile copy.
- Adjusted the pixel P opening to improve its legibility at small sizes.

## Needs Paranjay's input

- Name pronunciation: provide an audio file URL or a confirmed phonetic spelling before enabling the button again.
- Live integrations: provide/confirm WakaTime and Spotify credentials in `.env.local`; Steam presence needs a chosen provider or Steam API key. Discord presence requires an explicit Discord/Lanyard integration decision.
- Project audit: approve which public GitHub repositories and local projects are genuinely portfolio-ready, plus final descriptions, URLs, dates, and visuals.
- Social audit: confirm each current profile, especially older Twitch, YouTube, Pinterest, Gravatar, and Steam links; remove inactive accounts rather than presenting them as current.
- Gallery: provide images/captions or decide whether it should become a build log instead.

## Next build sequence

1. Audit projects from GitHub and local work; replace generic Unsplash images and missing logos with real project assets.
2. Add project metadata (`status`, `role`, `year`, `featured`, `case study`) and support grid/list/filter views.
3. Add a concise `/now` or build-log page for current work, instead of inherited blog/component content.
4. Make integrations explicit: show live data only when configured, otherwise show a useful setup/empty state.
5. Once the data model has survived personal use, create a `portfolio.config.ts` plus a setup script that asks for identity, links, projects, and integrations. That becomes the fork-friendly template layer.

## Template principles

- One clear data directory for all editable identity and content.
- No fake metrics, dummy activity, or assumed employment status.
- Optional sections should disappear cleanly when no data exists.
- Integrations must fail gracefully and explain how to enable them.
- Personal branding stays replaceable: mark, colors, footer, and navigation are configuration, not scattered edits.
