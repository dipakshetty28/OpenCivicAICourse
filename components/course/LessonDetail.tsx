import type { CourseModule, Lesson } from "../../lib/course/types";
import { Breadcrumb } from "../layout/Breadcrumb";
import { Callout } from "../ui/Callout";
import { CodeBlock } from "../ui/CodeBlock";
import { CommandBlock } from "../ui/CommandBlock";
import { FilePathBlock } from "../ui/FilePathBlock";
import { MermaidDiagram } from "../ui/MermaidDiagram";
import { PreviousNextNav } from "./PreviousNextNav";

type LessonDetailProps = {
  courseModule: CourseModule;
  lesson: Lesson;
};

export function LessonDetail({ courseModule, lesson }: LessonDetailProps) {
  return (
    <article className="lesson-detail">
      <Breadcrumb
        items={[
          { href: "/course", label: "Course" },
          { href: `/course/${courseModule.slug}`, label: courseModule.title },
          { label: lesson.title }
        ]}
      />
      <p className="eyebrow">{courseModule.title}</p>
      <h1>{lesson.title}</h1>
      <p className="lede">{lesson.summary}</p>
      <div className="callout-grid">
        {lesson.callouts.map((callout) => (
          <Callout
            key={`${callout.kind}-${callout.title}`}
            kind={callout.kind}
            title={callout.title}
          >
            {callout.body}
          </Callout>
        ))}
      </div>
      <section aria-labelledby="files-heading">
        <h2 id="files-heading">Files</h2>
        <FilePathBlock paths={lesson.filePaths} />
      </section>
      <section aria-labelledby="commands-heading">
        <h2 id="commands-heading">Commands</h2>
        <CommandBlock commands={lesson.windowsCommands} />
      </section>
      <section aria-labelledby="code-heading">
        <h2 id="code-heading">Code</h2>
        <CodeBlock code={lesson.code} />
      </section>
      <section aria-labelledby="diagram-heading">
        <h2 id="diagram-heading">Diagram</h2>
        <MermaidDiagram {...lesson.diagram} />
      </section>
      <PreviousNextNav moduleSlug={courseModule.slug} lessonSlug={lesson.slug} />
    </article>
  );
}
