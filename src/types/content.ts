import type { LucideIcon } from "lucide-react";

// Types for the About and Skills content.

export type FocusArea = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  // Words or phrases that are shown bold and bright inside the paragraphs.
  highlights: string[];
  focusAreas: FocusArea[];
  principle: { title: string; text: string };
};

export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
  // "exploring" groups are things being learned, not claimed as strengths.
  status?: "core" | "exploring";
};