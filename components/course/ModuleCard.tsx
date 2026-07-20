import Link from "next/link";
import type { CourseModule } from "../../lib/course/types";
import { ProgressBar } from "../ui/ProgressBar";

type ModuleCardProps = {
  courseModule: CourseModule;
};

export function ModuleCard({ courseModule }: ModuleCardProps) {
  const completed = courseModule.lessons.filter((lesson) => lesson.status === "complete").length;
  const progress = Math.round((completed / courseModule.lessons.length) * 100);

  return (
    <article className="module-card">
      <p className="eyebrow">Module {courseModule.order}</p>
      <h2>
        <Link href={`/course/${courseModule.slug}`}>{courseModule.title}</Link>
      </h2>
      <p>{courseModule.summary}</p>
      <ProgressBar label={`${courseModule.title} progress`} value={progress} />
    </article>
  );
}
