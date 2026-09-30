import { aboutContent } from "@/data/about";
import { highlightKeywords } from "@/lib/highlight";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="container-page section-y">
      <SectionHeading
        eyebrow={aboutContent.eyebrow}
        title={aboutContent.title}
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="max-w-[65ch] space-y-6 text-lg leading-8 text-muted-foreground">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              {highlightKeywords(paragraph, aboutContent.highlights)}
            </p>
          ))}
        </div>

        <div className="space-y-4">
          {aboutContent.focusAreas.map((area) => (
            <div key={area.title} className="surface glow-hover flex gap-4 p-5">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <area.icon className="size-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold tracking-tight">{area.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {area.description}
                </p>
              </div>
            </div>
          ))}

          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
            <p className="eyebrow text-primary">
              {aboutContent.principle.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              {aboutContent.principle.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}