import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";
import { SectionHeading } from "./SectionHeading";

export function FeaturedProjects() {
  const featured = getFeaturedProjects(3);

  // No featured projects means no section at all.
  if (featured.length === 0) return null;

  return (
    <section className="container-page section-y">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Featured projects. The full list with filters is on the projects page."
        />
        <Link href="/projects" className={buttonVariants({ variant: "outline" })}>
          View all projects
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}