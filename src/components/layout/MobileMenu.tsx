"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "md:hidden"
        )}
      >
        <Menu className="size-5" aria-hidden="true" />
      </SheetTrigger>

      <SheetContent side="right">
        <SheetTitle className="px-6 pt-6">Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Site navigation links
        </SheetDescription>

        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 pb-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              // Close the menu after navigating.
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-lg text-foreground transition-colors hover:bg-secondary"
            >
              {item.label}
            </Link>
          ))}

          {siteConfig.cv.available && (
            <a
              href={siteConfig.cv.href}
              download
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-4 justify-center"
              )}
            >
              Download CV
            </a>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}