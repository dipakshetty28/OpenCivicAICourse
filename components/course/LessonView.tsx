import type { Lesson } from "../../lib/course/types";

type LessonViewProps = {
  lesson: Lesson;
};

export function LessonView({ lesson }: LessonViewProps) {
  return (
    <article className="lesson-shell">
      <p className="eyebrow">Lesson {lesson.order}</p>
      <h1>{lesson.title}</h1>
      <p className="lede">{lesson.summary}</p>
      <dl className="lesson-meta">
        <div>
          <dt>Exact file path</dt>
          <dd>{lesson.filePath}</dd>
        </div>
      </dl>

      <LessonSection title="Concept in simple words">
        <p>{lesson.concept}</p>
      </LessonSection>

      <LessonSection title="Windows VS Code Command Prompt commands">
        <pre>
          <code>{lesson.windowsCommands.join("\n")}</code>
        </pre>
      </LessonSection>

      <LessonSection title="Focused code">
        <pre>
          <code>{lesson.code}</code>
        </pre>
      </LessonSection>

      <LessonSection title="Important functions">
        <ul>
          {lesson.functionExplanations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LessonSection>

      <LessonSection title="Expected output">
        <ul>
          {lesson.expectedOutput.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LessonSection>

      <LessonSection title="Common errors">
        <ul className="error-list">
          {lesson.commonErrors.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LessonSection>

      <LessonSection title="Verification checklist">
        <ul className="checklist">
          {lesson.verificationChecklist.map((item) => (
            <li key={item}>□ {item}</li>
          ))}
        </ul>
      </LessonSection>
    </article>
  );
}

function LessonSection({
  children,
  title
}: Readonly<{ children: React.ReactNode; title: string }>) {
  return (
    <section className="lesson-section" aria-labelledby={sectionId(title)}>
      <h2 id={sectionId(title)}>{title}</h2>
      {children}
    </section>
  );
}

function sectionId(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
