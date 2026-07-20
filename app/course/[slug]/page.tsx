import { notFound } from "next/navigation";
import { LessonCard } from "../../../components/course/LessonCard";
import { AppShell } from "../../../components/layout/AppShell";
import { Breadcrumb } from "../../../components/layout/Breadcrumb";
import { getModule, getModules } from "../../../lib/course/data";

type ModulePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getModules().map((courseModule) => ({ slug: courseModule.slug }));
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { slug } = await params;
  const courseModule = getModule(slug);

  if (!courseModule) {
    notFound();
  }

  return (
    <AppShell>
      <Breadcrumb items={[{ href: "/course", label: "Course" }, { label: courseModule.title }]} />
      <header className="page-header">
        <p className="eyebrow">Module {courseModule.order}</p>
        <h1>{courseModule.title}</h1>
        <p>{courseModule.summary}</p>
      </header>
      <div className="lesson-list">
        {courseModule.lessons.map((lesson) => (
          <LessonCard key={lesson.slug} courseModule={courseModule} lesson={lesson} />
        ))}
      </div>
    </AppShell>
  );
}
