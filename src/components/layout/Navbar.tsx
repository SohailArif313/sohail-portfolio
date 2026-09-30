import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

// Server component: renders once on the server, no client JavaScript needed here.
export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          {siteConfig.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}

          {siteConfig.cv.available && (
            <a
              href={siteConfig.cv.href}
              download
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "ml-2"
              )}
            >
              CV
            </a>
          )}
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}