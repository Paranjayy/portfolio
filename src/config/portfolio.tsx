import type { Award } from "@/features/portfolio/types/awards";
import type { Bookmark } from "@/features/portfolio/types/bookmarks";
import type { Certification } from "@/features/portfolio/types/certifications";
import type { Experience } from "@/features/portfolio/types/experiences";
import type { Project } from "@/features/portfolio/types/projects";
import type { SocialLink } from "@/features/portfolio/types/social-links";
import type { TechStack } from "@/features/portfolio/types/tech-stack";
import type { Testimonial } from "@/features/portfolio/types/testimonials";
import type { User } from "@/features/portfolio/types/user";
import type { Sponsor } from "@/features/sponsors/types";

export const PORTFOLIO_DATA = {
  user: {
    firstName: "Your",
    lastName: "Name",
    displayName: "Your Name",
    username: "yourusername",
    gender: "male", // 'male' | 'female' | 'non-binary'
    pronouns: "he/him",
    bio: "Building amazing web experiences.",
    flipSentences: [
      "Building amazing web experiences.",
      "Open Source Enthusiast",
      "Full Stack Developer",
    ],
    address: "San Francisco, CA",
    // Can be base64 encoded or plain text.
    phoneNumber: "+1234567890",
    email: "your@email.com",
    website: "https://example.com",
    jobTitle: "Software Engineer",
    jobs: [
      {
        title: "Software Engineer",
        company: "Tech Corp",
        website: "https://example.com",
      },
      {
        title: "Freelancer",
        company: "Self-employed",
        website: "https://example.com",
      },
    ],
    about: `
- **Software Engineer** with passion for building scalable web applications.
- Experienced in **React**, **Next.js**, and **TypeScript**.
- Always learning and exploring new technologies.
`,
    avatar: "https://assets.chanhdai.com/images/chanhdai-avatar-ghibli.webp", // Replace with your avatar URL
    ogImage: "https://assets.chanhdai.com/images/screenshot-og-image-dark.png?v=5", // Replace with your OG image
    namePronunciationUrl: "/audio/chanhdai.mp3", // Replace or remove
    timeZone: "America/Los_Angeles",
    keywords: [
      "developer",
      "software engineer",
      "react",
      "next.js",
      "portfolio",
    ],
    dateCreated: "2024-01-01",
  } satisfies User,

  socialLinks: [
    {
      title: "GitHub",
      description: "yourusername",
      href: "https://github.com/yourusername",
      icon: "https://assets.chanhdai.com/images/link-icons/github.webp?t=1759581475", // Replace icons as needed
    },
    {
      title: "LinkedIn",
      description: "yourusername",
      href: "https://linkedin.com/in/yourusername",
      icon: "https://assets.chanhdai.com/images/link-icons/linkedin.webp?t=1759581475",
    },
    {
      title: "X (Twitter)",
      description: "@yourhandle",
      href: "https://x.com/yourhandle",
      icon: "https://assets.chanhdai.com/images/link-icons/x.webp?t=1759581475",
    },
  ] satisfies SocialLink[],

  techStack: [
    {
      key: "typescript",
      title: "TypeScript",
      href: "https://www.typescriptlang.org/",
      categories: ["Language"],
    },
    {
      key: "react",
      title: "React",
      href: "https://react.dev/",
      categories: ["Library", "UI Library"],
    },
    {
      key: "nextjs",
      title: "Next.js",
      href: "https://nextjs.org/",
      categories: ["Framework"],
      theme: true,
    },
    {
      key: "tailwindcss",
      title: "Tailwind CSS",
      href: "https://tailwindcss.com/",
      categories: ["Framework"],
    },
  ] satisfies TechStack[],

  experiences: [
    {
      id: "tech-corp",
      companyName: "Tech Corp",
      companyWebsite: "https://example.com",
      companyLogo: "https://assets.chanhdai.com/images/companies/shadcraft.svg?v=2", // Replace
      positions: [
        {
          id: "pos-1",
          title: "Senior Software Engineer",
          employmentPeriod: {
            start: "01.2022",
            end: "Present", // Omit end for present
          },
          employmentType: "Full-time",
          icon: "code",
          description: `- Led the development of the core product.
- Mentored junior developers and improved code quality.
- Implemented CI/CD pipelines to streamline deployment.`,
          skills: ["React", "Node.js", "AWS"],
          isExpanded: true,
        },
      ],
      isCurrentEmployer: true,
    },
  ] satisfies Experience[],

  projects: [
    {
      id: "project-1",
      title: "Awesome Project",
      link: "https://example.com/project",
      description: "A revolutionary app that solves big problems.",
      skills: ["React", "TypeScript", "Vite"],
      logo: "https://assets.chanhdai.com/images/projects/zadark.webp", // Replace
      period: {
        start: "2024",
      }
    },
  ] satisfies Project[],

  testimonials: [
    {
      authorName: "Jane Doe",
      authorTagline: "CEO @ Tech Startup",
      authorAvatar: "https://assets.chanhdai.com/images/testimonials/jane.jpg", // Replace
      quote: "This developer is amazing! Highly recommended.",
      url: "https://linkedin.com/in/janedoe",
    },
  ] satisfies Testimonial[],

  awards: [
    {
      id: "award-1",
      title: "Best Developer Award",
      prize: "Winner",
      date: "2023",
      grade: "Tech Conference 2023", // Used as context/organizer
      description: "Recognized for outstanding contribution to open source.",
      referenceLink: "https://example.com/award",
    },
  ] satisfies Award[],

  certifications: [
    {
      title: "Certified Cloud Architect",
      issuer: "Cloud Provider",
      issueDate: "2022-01-01",
      credentialURL: "https://example.com/cert",
      credentialID: "CRED-12345",
    },
  ] satisfies Certification[],

  bookmarks: [
    {
      url: "https://react.dev",
      title: "React Documentation",
      bookmarkedAt: "2024-01-01",
    },
  ] satisfies Bookmark[],

  sponsors: [
    {
      type: "organization",
      name: "Sponsor Inc.",
      url: "https://example.com",
      tier: "silver",
      logo: (props) => (
        <svg viewBox="0 0 100 30" fill="currentColor" {...props}>
          <text x="10" y="20" fontSize="16" fontWeight="bold">Sponsor</text>
        </svg>
      ),
    },
  ] satisfies Sponsor[],
};
