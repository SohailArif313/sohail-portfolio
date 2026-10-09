import { validateProjects, type Project } from "@/lib/validation/project";

// To add a project: copy an entry, change the fields, save.
// Images go in public/images/projects/<slug>/ and are referenced like
// coverImage: "/images/projects/<slug>/cover.webp".
// Only publish details that are verified. Remove `placeholder: true`
// once an entry holds real information.
const rawProjects: Project[] = [
  {
    id: "agentic-rag-service",
    slug: "agentic-rag-service",
    title: "Agentic RAG Service",
    summary:
      "An agentic RAG API built with LangGraph, FastAPI and Chroma that routes each question, retrieves relevant documents, checks its own work, and answers with sources.",
    category: "RAG",
    status: "in-progress",
    featured: true,
    coverImage: "/images/projects/agentic-rag-service/cover.webp",
    technologies: ["Python", "FastAPI", "LangGraph", "Chroma"],
    githubUrl: "https://github.com/SohailArif313/agentic-rag-service",
    architecture:
      "The service is a LangGraph workflow served through a FastAPI API. Each question is routed, relevant chunks are retrieved from a Chroma vector store, the result is checked, and the final answer is returned together with its sources.",
    features: [
      "Question routing, retrieval and self-check steps built as a LangGraph workflow",
      "Answers come with their sources",
      "Documents stored and searched in a Chroma vector store",
    ],
  },
  {
    id: "medibot-patient-records",
    slug: "medibot-patient-records",
    title: "MediBot: Patient Records App",
    summary:
      "A patient records app with a FastAPI backend and a chat-style assistant that answers patient lookups and filter questions straight from the database, and sends general health questions to an LLM.",
    category: "Backend API",
    status: "completed",
    featured: true,
    coverImage: "/images/projects/medibot-patient-records/cover.webp",
    technologies: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Pydantic",
      "SQLite",
      "LangChain",
      "OpenAI API",
      "HTML/CSS/JS",
    ],
    githubUrl: "https://github.com/SohailArif313/patient-management-ai",
    description:
      "Built as a learning project with sample data, not for real patient records.",
    architecture:
      "A FastAPI backend with Pydantic schemas and SQLAlchemy models on an SQLite database, and a plain HTML, CSS and JavaScript frontend that calls the API.\n\nThe Ask MediBot endpoint first tries to answer from the database: a patient ID, a patient name, or a filter request such as \"patients above age 50\" is parsed and answered without any AI call. Only questions that match none of these go to an LLM through LangChain, with a limit of 5 requests per minute per IP address.",
    features: [
      "Add, edit and soft-delete patients, with undo for deletes",
      "Search, sort and paginate the patient table",
      "BMI and weight verdict calculated automatically from height and weight",
      "Assistant answers lookups and filters from the database without calling an LLM",
      "Rate-limited LLM fallback for general health questions",
      "Dark mode",
    ],
  },
];
export const projects = validateProjects(rawProjects);