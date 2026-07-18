import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "iit-madras",
    companyName: "Indian Institute of Technology Madras",
    companyLogo: "https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg",
    companyWebsite: "https://study.iitm.ac.in/ds/",
    positions: [
      {
        id: "1",
        title: "BS Student (Data Science & Applications)",
        employmentPeriod: {
          start: "2024",
        },
        description: "Pursuing Bachelor of Science in Data Science and Applications. [Academics](https://study.iitm.ac.in/ds/academics.html) · [Wikipedia](https://en.wikipedia.org/wiki/IIT_Madras)",
        skills: ["Data Science", "Python", "Mathematics", "Statistics"],
      },
    ],
    isCurrentEmployer: true,
  },
]
