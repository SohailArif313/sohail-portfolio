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
  cv: { href: string; available: boolean };
  nav: NavItem[];
};