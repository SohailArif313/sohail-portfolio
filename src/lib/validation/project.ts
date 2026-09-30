import { z } from "zod";

// Allowed values. Adding a new category here makes it available everywhere.
export const projectCategories = [
  "AI Agent",
  "AI Chatbot",
  "RAG",
  "Backend API",
  "Automation",
] as const;

export const projectStatuses = ["completed", "in-progress"] as const;

const text = z.string().min(1);
const httpsUrl = z.string().startsWith("https://");
const publicPath = z.string().startsWith("/");

// Only a few fields are required. Optional sections stay hidden when empty.
export const projectSchema = z.object({
  id: text,
  slug: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase-with-dashes"),
  title: text,
  summary: text,
  category: z.enum(projectCategories),
  status: z.enum(projectStatuses),
  technologies: z.array(text),

  // Marks a sample entry that must be replaced with verified details.
  placeholder: z.boolean().optional(),
  featured: z.boolean().optional(),
  date: z.string().optional(),
  description: z.string().optional(),

  coverImage: publicPath.optional(),
  screenshots: z.array(z.object({ src: publicPath, alt: text })).optional(),
  githubUrl: httpsUrl.optional(),
  liveUrl: httpsUrl.optional(),

  problem: z.string().optional(),
  solution: z.string().optional(),
  architecture: z.string().optional(),
  features: z.array(text).optional(),
  challenges: z.array(text).optional(),
  outcomes: z.array(text).optional(),
  learnings: z.array(text).optional(),
});

export type Project = z.infer<typeof projectSchema>;

import { projects } from "@/data/projects";

export function getProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(limit = 3): Project[] {
  return projects.filter((project) => project.featured).slice(0, limit);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

// Only categories that actually have projects, in first-seen order.
export function getProjectCategories(): string[] {
  return Array.from(new Set(projects.map((project) => project.category)));
}


// Validates the whole list once when the app builds or starts.
export function validateProjects(input: Project[]): Project[] {
  const projects = z.array(projectSchema).parse(input);

  // Ids and slugs are checked separately: one project may use the same
  // text for both, but two different projects may not share an id or a slug.
  const ids = new Set<string>();
  const slugs = new Set<string>();

  for (const project of projects) {
    if (ids.has(project.id)) {
      throw new Error(`Duplicate project id: "${project.id}"`);
    }
    if (slugs.has(project.slug)) {
      throw new Error(`Duplicate project slug: "${project.slug}"`);
    }
    ids.add(project.id);
    slugs.add(project.slug);
  }

  return projects;
}