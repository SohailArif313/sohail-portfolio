import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

// Temporary internal page: keep it out of search engines.
export const metadata: Metadata = {
  title: "Design tokens",
  robots: { index: false, follow: false },
};

const swatches = [
  { name: "background", className: "bg-background" },
  { name: "card", className: "bg-card" },
  { name: "secondary", className: "bg-secondary" },
  { name: "primary (mint)", className: "bg-primary" },
  { name: "highlight (amber)", className: "bg-highlight" },
  { name: "muted-foreground", className: "bg-muted-foreground" },
];

export default function DesignPage() {
  return (
    <main className="container-page section-y space-y-16">
      <header className="space-y-4">
        <p className="eyebrow">Design system / temporary page</p>
        <h1 className="text-display">Sohail Arif</h1>
        <p className="max-w-[65ch] text-lg text-muted-foreground">
          I build AI-powered applications, agentic workflows, RAG systems, and
          APIs that turn ideas into working products.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-title">Colors</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {swatches.map((swatch) => (
            <div key={swatch.name} className="surface overflow-hidden">
              <div className={`h-16 ${swatch.className}`} />
              <p className="eyebrow p-3">{swatch.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-title">Buttons</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button>Explore My Work</Button>
          <Button variant="outline">Contact Me</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Press Tab to check the keyboard focus ring on each button.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-title">Card and tags</h2>
        <div className="surface max-w-md space-y-3 p-6">
          <div className="flex items-center gap-2">
            <span className="eyebrow rounded-md border px-2 py-1">RAG</span>
            <span className="eyebrow rounded-md border px-2 py-1">Python</span>
            <span className="rounded-md bg-highlight/15 px-2 py-1 font-mono text-xs uppercase tracking-wider text-highlight">
              Featured
            </span>
          </div>
          <h3 className="text-xl font-semibold tracking-tight">
            Project card title
          </h3>
          <p className="text-muted-foreground">
            Placeholder text for a project summary. Real projects will come
            from src/data/projects.ts.
          </p>
        </div>
      </section>
    </main>
  );
}