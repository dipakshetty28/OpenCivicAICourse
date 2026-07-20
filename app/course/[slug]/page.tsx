import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonView } from "../../../components/course/LessonView";
import { getAllLessons, getLessonBySlug } from "../../../lib/course/catalog";

type LessonPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllLessons().map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  return {
    title: lesson ? `${lesson.title} | OpenCivic AI Course` : "Lesson not found"
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    notFound();
  }

  return <LessonView lesson={lesson} />;
}
