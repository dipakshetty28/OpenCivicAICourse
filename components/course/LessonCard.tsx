import Link from "next/link";
import type { CourseModule, Lesson } from "../../lib/course/types";

type LessonCardProps = {
  courseModule: CourseModule;
  lesson: Lesson;
};

export function LessonCard({ courseModule, lesson }: LessonCardProps) {
  return (
    <article className="lesson-card">
      <div>
        <p className="eyebrow">{lesson.durationMinutes} min</p>
        <h3>
          <Link href={`/course/${courseModule.slug}/${lesson.slug}`}>{lesson.title}</Link>
        </h3>
        <p>{lesson.summary}</p>
      </div>
      <span className={`status-pill status-${lesson.status}`}>
        {lesson.status.replace("-", " ")}
      </span>
    </article>
  );
}
