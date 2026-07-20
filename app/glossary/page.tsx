import { AppShell } from "../../components/layout/AppShell";
import { Breadcrumb } from "../../components/layout/Breadcrumb";

const terms = [
  {
    term: "App Router",
    definition: "The Next.js routing system that uses the app directory for layouts and pages."
  },
  {
    term: "Module",
    definition: "A grouped set of lessons that teaches one area of the platform."
  },
  {
    term: "Visual system",
    definition: "Reusable UI patterns that make course pages consistent and readable."
  }
];

export default function GlossaryPage() {
  return (
    <AppShell>
      <Breadcrumb items={[{ label: "Glossary" }]} />
      <header className="page-header">
        <p className="eyebrow">Reference</p>
        <h1>Glossary</h1>
        <p>Plain-language definitions for terms used across the course.</p>
      </header>
      <dl className="glossary-list">
        {terms.map((item) => (
          <div key={item.term}>
            <dt>{item.term}</dt>
            <dd>{item.definition}</dd>
          </div>
        ))}
      </dl>
    </AppShell>
  );
}
