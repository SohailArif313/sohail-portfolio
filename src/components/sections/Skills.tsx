import { skillGroups } from "@/data/skills";
import { SkillIcon } from "@/lib/skill-icons";
import { cn } from "@/lib/utils";
import type { SkillGroup } from "@/types/content";
import { SectionHeading } from "./SectionHeading";

// One card per skill group, with an icon badge for each skill.
function SkillGroupCard({ group }: { group: SkillGroup }) {
  const exploring = group.status === "exploring";

  return (
    <div
      className={cn(
        "surface p-6",
        // Learning areas get a dashed, quieter card so they read differently.
        exploring ? "border-dashed md:col-span-2" : "glow-hover"
      )}
    >
      <h3 className="eyebrow mb-4">{group.title}</h3>
      <ul className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item}
            className={cn(
              "group inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm",
              exploring
                ? "border-dashed border-border text-muted-foreground"
                : "glow-hover border-border bg-secondary/40 hover:-translate-y-0.5 hover:bg-primary/10"
            )}
          >
            {!exploring && (
              <SkillIcon
                name={item}
                className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
              />
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="container-page section-y">
      <SectionHeading
        eyebrow="Skills"
        title="Tools and technologies I work with"
        description="Grouped by what they are used for."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillGroupCard key={group.id} group={group} />
        ))}
      </div>
    </section>
  );
}