import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { AgentTrace } from "./AgentTrace";
import { ProfileAvatar } from "./ProfileAvatar";

// Small helper: staggered entrance delay for each block of text.
const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  return (
    <section className="container-page section-y">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Photo first on mobile, on the right on desktop */}
        <div className="relative order-first flex justify-center lg:order-last">
          <ProfileAvatar />
          <div className="absolute -bottom-6 left-0 hidden lg:block xl:-left-10">
            <AgentTrace />
          </div>
        </div>

        <div className="space-y-6">
          {siteConfig.availability.open && (
            <p
              className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm"
              style={delay(0)}
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              {siteConfig.availability.label}
            </p>
          )}

          <div className="animate-fade-up space-y-3" style={delay(80)}>
            <p className="eyebrow">{siteConfig.role}</p>
            <h1 className="text-display">{siteConfig.name}</h1>
          </div>

          <p
            className="animate-fade-up max-w-[52ch] text-lg text-muted-foreground sm:text-xl"
            style={delay(160)}
          >
            {siteConfig.headline}
          </p>

          <div
            className="animate-fade-up flex flex-wrap gap-3"
            style={delay(240)}
          >
            <Link
              href="/projects"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Explore My Work
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/#contact"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Contact Me
            </Link>
          </div>

          <div className="animate-fade-up" style={delay(320)}>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}