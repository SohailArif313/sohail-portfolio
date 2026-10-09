import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

// Shown for any unknown URL, including unknown project slugs.
export default function NotFound() {
  return (
    <section className="container-page section-y space-y-6">
      <p className="eyebrow">404</p>
      <h1 className="text-display text-gradient">Page not found</h1>
      <p className="max-w-[52ch] text-lg text-muted-foreground">
        The page you are looking for does not exist or has moved.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/" className={buttonVariants({ size: "lg" })}>
          Back to home
        </Link>
        <Link
          href="/projects"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          View projects
        </Link>
      </div>
    </section>
  );
}