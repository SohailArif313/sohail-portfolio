// Shared types for site-wide configuration.

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  id: "github" | "linkedin" | "x" | "fiverr" | "upwork";
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  role: string;
  headline: string;
  description: string;
  url: string;
  email: string;
  // Set available to true only after a real file exists at public/cv.pdf.
    // Set available to true only after a real file exists at public/cv.pdf.
  cv: { href: string; available: boolean };

  // Show the "Open to work" badge only when this is actually true.
  availability: { open: boolean; label: string };

  nav: NavItem[];
};