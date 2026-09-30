import { MessagesSquare, Server, Workflow } from "lucide-react";
import type { AboutContent } from "@/types/content";

// Edit the About section text here. No React changes needed.
export const aboutContent: AboutContent = {
  eyebrow: "About",
  title: "Turning ideas into practical AI products",
  paragraphs: [
    "I'm Sohail, an AI Engineer and builder focused on turning ideas into practical AI-powered products. I work with Python, LLMs, AI agents, RAG, APIs, and modern AI frameworks to build applications that can understand information, use tools, and solve real-world problems.",
    "I'm currently focused on building real, deployable systems — from AI chatbots and document-based applications to agentic workflows and backend APIs.",
    "Every project I build is an opportunity to solve a real problem, improve my engineering skills, and create something useful.",
    "My goal is simple: keep building, keep improving, and become an engineer capable of turning complex AI ideas into reliable products.",
  ],
  highlights: [
    "Python",
    "LLMs",
    "AI agents",
    "RAG",
    "APIs",
    "backend APIs",
    "AI chatbots",
    "agentic workflows",
    "real, deployable systems",
    "reliable products",
  ],
  focusAreas: [
    {
      title: "AI chatbots & document apps",
      description:
        "Applications that understand information and work with your documents.",
      icon: MessagesSquare,
    },
    {
      title: "Agentic workflows",
      description:
        "Systems that use tools and APIs to complete multi-step tasks.",
      icon: Workflow,
    },
    {
      title: "Backend APIs",
      description: "Python and FastAPI services that power AI applications.",
      icon: Server,
    },
  ],
  principle: {
    title: "How I work",
    text: "I care about writing clean, maintainable code and understanding how things work under the hood.",
  },
};