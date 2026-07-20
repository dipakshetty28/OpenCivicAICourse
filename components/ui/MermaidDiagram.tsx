type MermaidDiagramProps = {
  title: string;
  source: string;
  fallback: string;
};

export function MermaidDiagram({ fallback, source, title }: MermaidDiagramProps) {
  return (
    <figure className="mermaid-card" aria-labelledby="mermaid-title">
      <figcaption id="mermaid-title">{title}</figcaption>
      <pre className="mermaid" aria-hidden="true">
        {source}
      </pre>
      <p className="sr-only">Diagram summary: {fallback}</p>
      <noscript>{fallback}</noscript>
    </figure>
  );
}
