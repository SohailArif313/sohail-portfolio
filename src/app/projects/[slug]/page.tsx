import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import {
  getProjectBySlug,
  getProjects,
  getRelatedProjects,
} from "@/lib/projects";

// Pre-builds one static page per project at build time.
export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} | Sohail Arif`,
    description: project.summary,
    // Sample entries must not appear in search results.
    robots: project.placeholder ? { index: false, follow: false } : undefined,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return <ProjectDetail project={project} related={getRelatedProjects(slug)} />;
}