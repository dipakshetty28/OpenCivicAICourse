import { notFound } from "next/navigation";
import { LessonDetail } from "../../../../components/course/LessonDetail";
import { AppShell } from "../../../../components/layout/AppShell";
import { getLesson, getModule, getModules } from "../../../../lib/course/data";

type LessonPageProps = {
  params: Promise<{ lesson: string; module: string }>;
};

export function generateStaticParams() {
  return getModules().flatMap((courseModule) =>
    courseModule.lessons.map((lesson) => ({ module: courseModule.slug, lesson: lesson.slug }))
  );
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { lesson: lessonSlug, module: moduleSlug } = await params;
  const courseModule = getModule(moduleSlug);
  const lesson = getLesson(moduleSlug, lessonSlug);

  if (!courseModule || !lesson) {
    notFound();
  }

  return (
    <AppShell>
      <LessonDetail courseModule={courseModule} lesson={lesson} />
    </AppShell>
  );
}
