/** A profile's identity is its key in the `SOCIAL` registry, not a field here. */
export type SocialProfile = {
  title: string
  handle: string
  href: string
  /** Used to group profiles in the directory view. */
  category: "work" | "community" | "play" | "design"
  /** Opt-in: include this profile in JSON-LD `sameAs` (public profile page). */
  sameAs?: boolean
  /** Keep secondary profiles on the full social directory, not the home strip. */
  showOnHome?: boolean
}
