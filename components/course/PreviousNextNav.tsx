import Link from "next/link";
import { getLessonNeighbors } from "../../lib/course/data";

type PreviousNextNavProps = {
  lessonSlug: string;
  moduleSlug: string;
};

export function PreviousNextNav({ lessonSlug, moduleSlug }: PreviousNextNavProps) {
  const { next, previous } = getLessonNeighbors(moduleSlug, lessonSlug);

  return (
    <nav className="previous-next" aria-label="Previous and next lessons">
      {previous ? (
        <Link href={`/course/${previous.module.slug}/${previous.lesson.slug}`}>
          ← {previous.lesson.title}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={`/course/${next.module.slug}/${next.lesson.slug}`}>{next.lesson.title} →</Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
