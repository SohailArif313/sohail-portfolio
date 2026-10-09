import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  FileSearch,
  Globe,
  MessagesSquare,
  Server,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { Project } from "@/lib/validation/project";

// Record<...> makes TypeScript complain if a new category has no icon.
const categoryIcons: Record<Project["category"], LucideIcon> = {
  "AI Agent": Bot,
  "AI Chatbot": MessagesSquare,
  RAG: FileSearch,
  "Backend API": Server,
  Automation: Workflow,
  "Web App": Globe,
};

const badgeBase =
  "rounded-md px-2 py-1 font-mono text-xs uppercase tracking-wider backdrop-blur";

export function ProjectCard({ project }: { project: Project }) {
  const CategoryIcon = categoryIcons[project.category];
  const hasLinks = project.githubUrl || project.liveUrl;

  return (
    <article className="surface glow-hover group relative flex h-full flex-col overflow-hidden">
      <div className="relative aspect-video overflow-hidden border-b border-border bg-secondary/40">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(min-width: 1024px) 352px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // No screenshot yet: show a neutral panel instead of a fake image.
          <div
            aria-hidden="true"
            className="flex size-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,oklch(0.86_0.12_180/18%),transparent_60%)]"
          >
            <CategoryIcon className="size-10 text-primary/70" />
          </div>
        )}

        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {project.placeholder ? (
            <span
              className={`${badgeBase} border border-border bg-background/70 text-muted-foreground`}
            >
              Sample entry
            </span>
          ) : (
            <>
              {project.featured && (
                <span className={`${badgeBase} bg-highlight/15 text-highlight`}>
                  Featured
                </span>
              )}
              {project.status === "in-progress" && (
                <span className={`${badgeBase} bg-primary/15 text-primary`}>
                  In progress
                </span>
              )}
            </>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="eyebrow">{project.category}</p>

        <h3 className="text-lg font-semibold tracking-tight">
          {/* The ::after covers the whole card, so the entire card is clickable. */}
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0"
          >
            {project.title}
          </Link>
        </h3>

        <p className="text-sm text-muted-foreground">{project.summary}</p>

        <div className="mt-auto space-y-4 pt-2">
          {project.technologies.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}

          {hasLinks && (
            // relative z-10 keeps these links clickable above the card overlay.
            <div className="relative z-10 flex gap-4 text-sm">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  Code
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  <span className="sr-only">
                    {" "}
                    for {project.title} (opens in a new tab)
                  </span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  Live demo
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  <span className="sr-only">
                    {" "}
                    of {project.title} (opens in a new tab)
                  </span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}