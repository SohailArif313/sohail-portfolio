"use client";

import { useState } from "react";
import type { Project } from "@/lib/validation/project";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";

const ALL = "All";

type ProjectGridProps = {
  projects: Project[];
  categories: string[];
};

export function ProjectGrid({ projects, categories }: ProjectGridProps) {
  const [active, setActive] = useState(ALL);

  const visible =
    active === ALL
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <div className="space-y-8">
      {/* A filter with a single category would be pointless, so hide it. */}
      {categories.length > 1 && (
        <ProjectFilter
          options={[ALL, ...categories]}
          active={active}
          onChange={setActive}
        />
      )}

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>

      {/* Announces the result count to screen readers after filtering. */}
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>
    </div>
  );
}