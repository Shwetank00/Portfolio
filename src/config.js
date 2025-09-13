const config = {
  name: "Shwetank Jain",
  email: "shwetankjain00@gmail.com",
  socials: {
    github: "https://github.com/Shwetank00",
    linkedin: "https://www.linkedin.com/in/shwetank00/",
    codolio: "https://www.codolio.com/profile/shwetank00",
  },
  projects: [
    // config.projects = [...]
    {
      title: "Welth: AI Finance Platform",
      description:
        "A finance platform designed for clarity and automation. Budgets and transactions stream into real-time dashboards, receipts are parsed via the Gemini OCR pipeline, and scheduled reports keep teams aligned. Background jobs reconcile accounts, catch anomalies, and notify users, while role-based access and audit trails keep data safe.",
      tags: [
        "Next.js",
        "Prisma",
        "Supabase",
        "Gemini API",
        "Inngest",
        "Clerk",
        "Resend",
      ],
      link: "https://github.com/Shwetank00/welth",
      liveLink: "https://welth-shwetank.vercel.app/",
      bgImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Keeper: Notes Management App",
      description:
        "A notes platform focused on speed, reliability, and security. It features JWT authentication with refresh tokens, optimistic UI updates for near-instant interactions. CI/CD via GitHub Actions automates testing and deployments, while database indexes and query tuning keep reads/writes fast under load.",
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "JWT",
        "RBAC",
        "GitHub Actions",
        "OpenAPI",
      ],
      link: "https://github.com/Shwetank00/keeper",
      liveLink: "https://keeper-shwetank.vercel.app/",
      bgImage:
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop",
    },
  ],
  skills: [
    "React",
    "Next.js",
    "Node.js / Express",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Git & GitHub",
  ],
};

export default config;
