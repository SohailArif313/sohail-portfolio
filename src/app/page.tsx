import { siteConfig } from "@/data/site";

// Placeholder home page. The real Hero is built in Phase 5.
export default function HomePage() {
  return (
    <section className="container-page section-y space-y-6">
      <p className="eyebrow">{siteConfig.role}</p>
      <h1 className="text-display max-w-3xl">{siteConfig.name}</h1>
      <p className="max-w-[65ch] text-lg text-muted-foreground">
        {siteConfig.headline}
      </p>
      <p className="eyebrow">Placeholder: the real hero comes in Phase 5.</p>
    </section>
  );
}