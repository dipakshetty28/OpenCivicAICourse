import type { CalloutKind } from "../../lib/course/types";

const labels: Record<CalloutKind, string> = {
  concept: "Concept",
  why: "Why it matters",
  warning: "Warning",
  expected: "Expected result",
  error: "Common error"
};

type CalloutProps = {
  kind: CalloutKind;
  title?: string;
  children: React.ReactNode;
};

export function Callout({ children, kind, title }: CalloutProps) {
  return (
    <aside className={`callout callout-${kind}`} aria-label={labels[kind]}>
      <h3>{title ?? labels[kind]}</h3>
      <p>{children}</p>
    </aside>
  );
}
