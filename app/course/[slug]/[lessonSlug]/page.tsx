import { notFound } from "next/navigation";
import { LessonDetail } from "../../../../components/course/LessonDetail";
import { AppShell } from "../../../../components/layout/AppShell";
import { getLesson, getModule, getModules } from "../../../../lib/course/data";

type LessonPageProps = {
  params: Promise<{ lessonSlug: string; slug: string }>;
};

export function generateStaticParams() {
  return getModules().flatMap((courseModule) =>
    courseModule.lessons.map((lesson) => ({ slug: courseModule.slug, lessonSlug: lesson.slug }))
  );
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { lessonSlug, slug } = await params;
  const courseModule = getModule(slug);
  const lesson = getLesson(slug, lessonSlug);

  if (!courseModule || !lesson) {
    notFound();
  }

  return (
    <AppShell>
      <LessonDetail courseModule={courseModule} lesson={lesson} />
    </AppShell>
  );
}
