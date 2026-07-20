import Link from "next/link";
import { getModules } from "../../lib/course/data";
import { ProgressBar } from "../ui/ProgressBar";

type SidebarProps = {
  progress: number;
};

export function Sidebar({ progress }: SidebarProps) {
  const modules = getModules();

  return (
    <aside className="sidebar" aria-label="Course sidebar">
      <ProgressBar label="Course progress" value={progress} />
      <nav aria-label="Module navigation">
        {modules.map((courseModule) => (
          <section key={courseModule.slug} className="sidebar-module">
            <Link href={`/course/${courseModule.slug}`}>{courseModule.title}</Link>
            <ol>
              {courseModule.lessons.map((lesson) => (
                <li key={lesson.slug}>
                  <Link href={`/course/${courseModule.slug}/${lesson.slug}`}>{lesson.title}</Link>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </nav>
    </aside>
  );
}
