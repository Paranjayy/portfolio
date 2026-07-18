import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "learning-oss",
    title: "Learning OSS",
    period: {
      start: "2024",
    },
    link: "https://learning-os.paranjay.dev",
    githubRepo: "Paranjayy/Learning-OSS",
    skills: ["Next.js 15", "Manim", "Three.js", "Framer Motion", "KaTeX"],
    description:
      "A sovereign academic workstation designed to reach 100% mastery saturation. Features high-fidelity Manim math visualizers, Ebbinghaus retention forecasting, and the 'Zenith' focus engine.",
    previewImage:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop",
    isExpanded: true,
  },
  {
    id: "workout-buddy",
    title: "Workout Buddy",
    period: {
      start: "2024",
    },
    link: "https://workout-buddy.paranjay.dev",
    githubRepo: "Paranjayy/Workout-buddy",
    skills: ["Next.js", "PWA", "Tailwind CSS", "TypeScript", "Lucide"],
    description:
      "A high-fidelity life-orchestration OS and fitness platform with real-time habit tracking and 3D hologram workout visualizers.",
    previewImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    isExpanded: true,
  },
  {
    id: "inbox-zero",
    title: "Inbox Zero",
    period: {
      start: "2024",
    },
    link: "https://github.com/Paranjayy/inbox-zero",
    githubRepo: "Paranjayy/inbox-zero",
    skills: ["TypeScript", "Gmail", "Automation"],
    description:
      "A safe, review-first Gmail backlog cockpit for bringing an inbox back under control.",
  },
  {
    id: "ipl-2026-engine",
    title: "IPL 2026 Engine",
    period: {
      start: "2024",
    },
    link: "https://github.com/Paranjayy/ipl-2026-engine",
    githubRepo: "Paranjayy/ipl-2026-engine",
    skills: ["Next.js", "Real-time Data", "Analytics", "Tailwind CSS"],
    description:
      "An in-progress cricket analytics experiment for exploring IPL 2026 data.",
  },
  {
    id: "media-hub",
    title: "Media Hub",
    period: {
      start: "2024",
    },
    link: "https://github.com/Paranjayy/media-hub",
    githubRepo: "Paranjayy/media-hub",
    skills: ["React", "Trakt API", "Letterboxd", "Tailwind CSS"],
    description:
      "A personal media dashboard experiment for bringing watch, listen, and reading data together.",
  },
]
