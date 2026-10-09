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
    title: "Portfolio Website",
    summary:
      "This website: a data-driven portfolio built with Next.js, TypeScript and Tailwind CSS, deployed on Vercel.",
    category: "Web App",
    status: "in-progress",
    featured: true,
    date: "2026-09",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/SohailArif313/sohail-portfolio",
    liveUrl: "https://sohail-portfolio-zeta.vercel.app",
    features: [
      "All content lives in typed data files, so adding a project or skill needs no component edits",
      "Project pages are generated automatically from the project data",
      "Project data is validated at build time, so mistakes fail the build instead of reaching production",
    ],
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