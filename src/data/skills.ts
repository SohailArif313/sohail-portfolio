import type { SkillGroup } from "@/types/content";

// To add a skill: add its name to the right group's items array.
// To add a group: add a new object to this array. Only list what you can back up.
export const skillGroups: SkillGroup[] = [
  {
    id: "ai-llm",
    title: "AI & LLM Engineering",
    items: [
      "LLM Applications",
      "AI Agents",
      "RAG",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
      "Tool Calling",
      "MCP",
      "OpenAI API",
      "Claude API",
      "Gemini API",
      "Groq API",

    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    items: [
      "Python",
      "FastAPI",
      "REST APIs",
      "API Integration",
      "SQLModel",
      "PostgreSQL",
    ],
  },
  {
    id: "data-infra",
    title: "Data & AI Infrastructure",
    items: [
      "Document Processing",
      "Vector Search",
      "Embeddings",
      "Conversational Memory",
      "PostgreSQL-based Storage",
    ],
  },
  {
    id: "deployment",
    title: "Deployment & Development",
    items: [
      "Docker",
      "Git",
      "GitHub",
      "Vercel",
      "Render",
      "Environment Configuration",
    ],
  },
  {
    id: "exploring",
    title: "Currently Exploring",
    status: "exploring",
    items: [
      "Advanced Agentic Workflows",
      "Production AI Systems",
      "AI Infrastructure",
      "Scalable AI Applications",
    ],
  },
];