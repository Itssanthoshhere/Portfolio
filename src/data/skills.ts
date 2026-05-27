import { Code, Database, Wrench, Brain, Globe } from "lucide-react";

export const skillCategories = [
  {
    title: "Frontend & Mobile",
    icon: Code,
    description: "Building responsive, interactive, and mobile-first applications",
    skills: [
      "React", "React Native", "Expo", "TypeScript", "JavaScript",
      "HTML5", "CSS3", "Tailwind CSS", "NativeWind", "Framer Motion", "GSAP"
    ],
    color: "violet"
  },
  {
    title: "Backend Development",
    icon: Database,
    description: "Developing scalable server-side applications and APIs",
    skills: [
      "Node.js", "Express", "Appwrite", "PostgreSQL", "MongoDB", "PHP",
      "Prisma ORM", "REST APIs", "Clerk Auth"
    ],
    color: "cyan"
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    description: "Development, collaboration, and deployment tools",
    skills: [
      "Git", "GitHub", "Figma", "Stripe", "Vercel", "Netlify",
      "Vite", "Sentry", "Postman"
    ],
    color: "purple"
  },
  {
    title: "AI/ML & Core",
    icon: Brain,
    description: "Artificial Intelligence concepts and core programming skills",
    skills: [
      "Machine Learning", "NLP (Basic)", "Computer Vision",
      "Python", "Java", "C++"
    ],
    color: "violet" // reusing violet for consistency
  }
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Fluent" },
  { name: "Tamil", level: "Native" },
  { name: "Telugu", level: "Conversational" }
];
