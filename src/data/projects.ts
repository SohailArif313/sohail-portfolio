import { validateProjects, type Project } from "@/lib/validation/project";

// To add a project: copy an entry, change the fields, save.
// Images go in public/images/projects/<slug>/ and are referenced like
// coverImage: "/images/projects/<slug>/cover.webp".
// Only publish details that are verified. Remove `placeholder: true`
// once an entry holds real information.
const rawProjects: Project[] = [
  {
    id: "portfolio-website",
    slug: "portfolio-website",
    title: "Portfolio Website with AI Assistant",
    summary:
      "This website: a data-driven portfolio built with Next.js, with an AI assistant being added to answer questions about my work.",
    category: "AI Chatbot",
    status: "in-progress",
    featured: true,
    date: "2026-09",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Groq API"],
    githubUrl: "https://github.com/SohailArif313/sohail-portfolio",
    liveUrl: "https://sohail-portfolio-zeta.vercel.app",
  },
  {
    id: "customer-support-agent",
    slug: "customer-support-agent",
    title: "Customer Support Agent",
    summary:
      "Sample entry. Replace this with a one or two sentence description of the real project.",
    category: "AI Agent",
    status: "in-progress",
    featured: true,
    placeholder: true,
    technologies: [],
  },
  {
    id: "pdf-chatbot",
    slug: "pdf-chatbot",
    title: "PDF Chatbot",
    summary:
      "Sample entry. Replace this with a one or two sentence description of the real project.",
    category: "RAG",
    status: "in-progress",
    featured: true,
    placeholder: true,
    technologies: [],
  },
];

export const projects = validateProjects(rawProjects);