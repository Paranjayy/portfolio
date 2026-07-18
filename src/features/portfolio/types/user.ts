export type User = {
  firstName: string
  lastName: string
  /** Preferred public-facing name */
  displayName: string
  /** Handle/username used in links or mentions */
  username: string
  gender: "male" | "female" | "non-binary"
  /** e.g. "he/him", "she/her", "they/them" */
  pronouns: string
  bio: string
  /** Short phrases rotated in UI (e.g., homepage flip effect) */
  flipSentences: string[]
  /** General location for display */
  address: string
  /** base64 encoded (https://t.io.vn/base64-string-converter) */
  email: string
  /** secondary/domain email, base64 encoded */
  secondaryEmail?: string
  /** student email, base64 encoded */
  studentEmail?: string
  /** Personal/homepage URL */
  website: string
  /** Primary/current role shown on profile */
  jobTitle: string
  /** Current profile affiliations (employment or education). */
  jobs: {
    title: string
    company: string
    website: string
    educationId?: string
    logo?: string
  }[]
  /** Rich about section; supports Markdown */
  about: string
  /** Date of birth in YYYY-MM-DD */
  dob?: string
  /** Public URL to avatar image */
  avatar: string
  /** Avatar variant image URLs for light/dark modes */
  avatarVariants?: {
    lightOff: string
    lightOn: string
    darkOff: string
    darkOn: string
  }
  /** Open Graph image URL for social sharing */
  ogImage: string
  /** Audio URL for name pronunciation */
  namePronunciationUrl?: string
  /** SEO keywords list for metadata */
  keywords: string[]
  /** Time zone in IANA format (e.g., "Asia/Ho_Chi_Minh") */
  timeZone: string
  /** Profile/site start date in YYYY-MM-DD */
  dateCreated: string
}
