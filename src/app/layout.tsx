import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Fonts are loaded at build time by next/font, so there is no layout shift.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Temporary metadata. Real SEO metadata comes from src/data/site.ts later.
export const metadata: Metadata = {
  title: "Sohail Arif | AI Engineer",
  description:
    "I build AI-powered applications, agentic workflows, RAG systems, and APIs that turn ideas into working products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}