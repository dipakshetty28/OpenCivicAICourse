import { notFound } from "next/navigation";
import { LessonCard } from "../../../components/course/LessonCard";
import { AppShell } from "../../../components/layout/AppShell";
import { Breadcrumb } from "../../../components/layout/Breadcrumb";
import { getModule, getModules } from "../../../lib/course/data";

type ModulePageProps = {
  params: Promise<{ module: string }>;
};

export function generateStaticParams() {
  return getModules().map((courseModule) => ({ module: courseModule.slug }));
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { module: moduleSlug } = await params;
  const courseModule = getModule(moduleSlug);

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
