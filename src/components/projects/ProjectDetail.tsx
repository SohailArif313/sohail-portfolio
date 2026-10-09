import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import type { Project } from "@/lib/validation/project";
import { ProjectCard } from "./ProjectCard";

const statusLabels: Record<Project["status"], string> = {
  completed: "Completed",
  "in-progress": "In progress",
};

// "2026-09" becomes "Sep 2026". Falls back to the raw text if it can't be parsed.
function formatDate(value: string): string {
  const date = new Date(value.length === 7 ? `${value}-01T00:00:00Z` : value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

function TextBlock({ text }: { text: string }) {
  // whitespace-pre-line keeps line breaks written in the data file.
  return (
    <p className="whitespace-pre-line leading-8 text-muted-foreground">
      {text}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
          />
          <span className="leading-7">{item}</span>
        </li>
      ))}
    </ul>
  );
}

type ProjectDetailProps = {
  project: Project;
  related: Project[];
};

export function ProjectDetail({ project, related }: ProjectDetailProps) {
  const meta = [
    project.category,
    statusLabels[project.status],
    project.date ? formatDate(project.date) : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className="container-page section-y">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to projects
      </Link>

      <header className="mt-8 max-w-3xl space-y-5">
        <p className="eyebrow">{meta}</p>
        <h1 className="text-display text-gradient">{project.title}</h1>
        <p className="text-lg text-muted-foreground sm:text-xl">
          {project.summary}
        </p>

        {project.technologies.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        {(project.githubUrl || project.liveUrl) && (
          <div className="flex flex-wrap gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg" })}
              >
                Live demo
                <ArrowUpRight className="size-4" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                View code
                <ArrowUpRight className="size-4" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </div>
        )}
      </header>

      {project.placeholder && (
        <p className="mt-10 max-w-3xl rounded-lg border border-dashed border-border p-4 text-sm text-muted-foreground">
          This is a sample entry. Real project details will be added once they
          are verified.
        </p>
      )}

      {project.coverImage && (
        <div className="surface relative mt-12 aspect-video overflow-hidden">
          <Image
            src={project.coverImage}
            alt={`Screenshot of ${project.title}`}
            fill
            priority
            sizes="(min-width: 1120px) 1120px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      {/* Each section renders only when the project has data for it. */}
      <div className="mt-12 max-w-3xl space-y-10">
        {project.description && (
          <Section title="Overview">
            <TextBlock text={project.description} />
          </Section>
        )}
        {project.problem && (
          <Section title="The problem">
            <TextBlock text={project.problem} />
          </Section>
        )}
        {project.solution && (
          <Section title="The solution">
            <TextBlock text={project.solution} />
          </Section>
        )}
        {project.architecture && (
          <Section title="Technical architecture">
            <TextBlock text={project.architecture} />
          </Section>
        )}
        {project.features && project.features.length > 0 && (
          <Section title="Key features">
            <BulletList items={project.features} />
          </Section>
        )}
        {project.challenges && project.challenges.length > 0 && (
          <Section title="Challenges">
            <BulletList items={project.challenges} />
          </Section>
        )}
        {project.outcomes && project.outcomes.length > 0 && (
          <Section title="Results">
            <BulletList items={project.outcomes} />
          </Section>
        )}
        {project.learnings && project.learnings.length > 0 && (
          <Section title="What I learned">
            <BulletList items={project.learnings} />
          </Section>
        )}
      </div>

      {project.screenshots && project.screenshots.length > 0 && (
        <section className="mt-16 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Screenshots</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {project.screenshots.map((shot) => (
              <li
                key={shot.src}
                className="surface relative aspect-[16/10] overflow-hidden"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-contain"
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-20 space-y-6">
          <h2 className="text-title text-gradient">More projects</h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <li key={item.id}>
                <ProjectCard project={item} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}