import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { getProjectCategories, getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | Sohail Arif",
  description: "AI applications, agents and APIs built by Sohail Arif.",
};

export default function ProjectsPage() {
  const projects = getProjects();
  const categories = getProjectCategories();

  return (
    <section className="container-page section-y">
      <SectionHeading
        eyebrow="Projects"
        title="Things I have built"
        description="Filter by category to explore."
      />

      <div className="mt-10">
        {projects.length === 0 ? (
          <p className="text-muted-foreground">Projects are coming soon.</p>
        ) : (
          <ProjectGrid projects={projects} categories={categories} />
        )}
      </div>
    </section>
  );
}