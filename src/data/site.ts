import type { SiteConfig } from "@/types/site";

// Single source of truth for identity and navigation.
export const siteConfig: SiteConfig = {
  name: "Sohail Arif",
  role: "AI Engineer",
  headline:
    "I build AI-powered applications, agentic workflows, RAG systems, and APIs that turn ideas into working products.",
  description:
    "I build AI-powered applications, agentic workflows, RAG systems, and APIs that turn ideas into working products.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "muhammadsohail3542@gmail.com",
  cv: { href: "/cv.pdf", available: false },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
  ],
};