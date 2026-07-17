import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "iit-madras",
    companyName: "Indian Institute of Technology Madras",
    companyLogo: "https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg",
    companyWebsite: "https://www.iitm.ac.in/",
    location: "Chennai, India",
    locationType: "On-site",
    positions: [
      {
        id: "1",
        title: "BS Student",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "Full-time",
        description: "Pursuing Bachelor of Science in Data Science and Applications. Learning foundations of data science, programming, and mathematics.",
        skills: ["Data Science", "Python", "Mathematics", "Statistics"],
      },
    ],
    isCurrentEmployer: true,
  },
]
