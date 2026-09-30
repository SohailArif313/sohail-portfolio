import {
  Bot,
  Boxes,
  Database,
  FileSearch,
  FileText,
  GitBranch,
  MessageSquareText,
  MessagesSquare,
  Package,
  Plug,
  ScanSearch,
  Server,
  Settings2,
  Sparkles,
  Terminal,
  Triangle,
  Webhook,
  Workflow,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import * as simpleIcons from "simple-icons";
import type { SimpleIcon } from "simple-icons";

// Look brand logos up by key, so a missing logo falls back instead of crashing.
const brandIcons = simpleIcons as unknown as Record<
  string,
  SimpleIcon | undefined
>;

type IconSpec = {
  // Key of the official brand logo in simple-icons, if one exists.
  brand?: string;
  // Generic icon used when there is no brand logo.
  icon: LucideIcon;
};

// Keys are lowercase skill names. Add one line to give a new skill an icon.
const iconMap: Record<string, IconSpec> = {
  "llm applications": { icon: Sparkles },
  "ai agents": { icon: Bot },
  rag: { icon: FileSearch },
  langchain: { brand: "siLangchain", icon: Workflow },
  langgraph: { brand: "siLanggraph", icon: Workflow },
  "prompt engineering": { icon: MessageSquareText },
  "tool calling": { icon: Wrench },
  mcp: { brand: "siModelcontextprotocol", icon: Plug },
  "openai api": { brand: "siOpenai", icon: Sparkles },
  "claude api": { brand: "siClaude", icon: Sparkles },
  "gemini api": { brand: "siGooglegemini", icon: Sparkles },
  "groq api": { brand: "siGroq", icon: Zap },
  python: { brand: "siPython", icon: Terminal },
  fastapi: { brand: "siFastapi", icon: Zap },
  "rest apis": { icon: Webhook },
  "api integration": { icon: Plug },
  sqlmodel: { icon: Database },
  postgresql: { brand: "siPostgresql", icon: Database },
  "document processing": { icon: FileText },
  "vector search": { icon: ScanSearch },
  embeddings: { icon: Boxes },
  "conversational memory": { icon: MessagesSquare },
  "postgresql-based storage": { brand: "siPostgresql", icon: Database },
  docker: { brand: "siDocker", icon: Package },
  git: { brand: "siGit", icon: GitBranch },
  github: { brand: "siGithub", icon: GitBranch },
  vercel: { brand: "siVercel", icon: Triangle },
  render: { brand: "siRender", icon: Server },
  "environment configuration": { icon: Settings2 },
};

export function SkillIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const spec = iconMap[name.toLowerCase()];
  if (!spec) return null;

  const brand = spec.brand ? brandIcons[spec.brand] : undefined;

  // Decorative only: the skill name is always written next to the icon.
  if (brand) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={className}
      >
        <path d={brand.path} />
      </svg>
    );
  }

  const Fallback = spec.icon;
  return <Fallback aria-hidden="true" className={className} />;
}