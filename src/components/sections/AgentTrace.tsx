const steps = [
  { label: "query", detail: "visitor question" },
  { label: "retrieve", detail: "relevant context" },
  { label: "generate", detail: "grounded answer" },
];

export function AgentTrace() {
  return (
    <div
      aria-hidden="true"
      className="surface w-60 p-4 font-mono text-xs shadow-lg shadow-black/30"
    >
      <p className="eyebrow mb-3">Illustration: RAG flow</p>
      <ol className="space-y-2">
        {steps.map((step) => (
          <li key={step.label} className="flex items-center gap-2">
            <span className="size-1.5 shrink-0 rounded-full bg-primary" />
            <span className="text-foreground">{step.label}</span>
            <span className="text-muted-foreground">{step.detail}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}