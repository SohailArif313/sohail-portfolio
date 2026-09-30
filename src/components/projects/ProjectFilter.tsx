"use client";

import { cn } from "@/lib/utils";

type ProjectFilterProps = {
  options: string[];
  active: string;
  onChange: (option: string) => void;
};

// aria-pressed tells screen readers which filter is currently selected.
export function ProjectFilter({ options, active, onChange }: ProjectFilterProps) {
  return (
    <div
      role="group"
      aria-label="Filter projects by category"
      className="flex flex-wrap gap-2"
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={option === active}
          onClick={() => onChange(option)}
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm transition-colors",
            option === active
              ? "border-primary/50 bg-primary/10 text-foreground"
              : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}