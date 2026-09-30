import { projects } from "@/data/projects";
import type { Project } from "@/lib/validation/project";

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


