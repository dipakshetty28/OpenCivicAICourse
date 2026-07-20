import Link from "next/link";
import { AppShell } from "../../components/layout/AppShell";
import { Breadcrumb } from "../../components/layout/Breadcrumb";
import { getAllLessons, getCourseProgress } from "../../lib/course/data";
import { ProgressBar } from "../../components/ui/ProgressBar";

export default function ProgressPage() {
  return (
    <AppShell>
      <Breadcrumb items={[{ label: "Progress" }]} />
      <header className="page-header">
        <p className="eyebrow">Progress</p>
        <h1>Your course progress</h1>
        <p>Sample progress is local representative data for reviewing the course shell.</p>
      </header>
      <ProgressBar label="Overall progress" value={getCourseProgress()} />
      <ol className="result-list">
        {getAllLessons().map(({ lesson, module }) => (
          <li key={`${module.slug}-${lesson.slug}`}>
            <Link href={`/course/${module.slug}/${lesson.slug}`}>{lesson.title}</Link>
            <p>Status: {lesson.status.replace("-", " ")}</p>
          </li>
        ))}
      </ol>
    </AppShell>
  );
}
