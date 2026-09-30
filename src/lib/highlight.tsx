import type { ReactNode } from "react";

// Escape characters that have a special meaning inside a regular expression.
function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Wraps every keyword found in the text with a bold, bright <strong>.
export function highlightKeywords(
  text: string,
  keywords: string[]
): ReactNode[] {
  if (keywords.length === 0) return [text];

  // Longest first, so "backend APIs" wins over "APIs".
  const pattern = [...keywords]
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join("|");

  // split() with a capture group puts every match at an odd index.
  const parts = text.split(new RegExp(`\\b(${pattern})\\b`, "gi"));

  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      part
    )
  );
}