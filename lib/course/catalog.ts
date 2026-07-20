import { gettingStartedLesson } from "../../content/lessons/getting-started";
import type { Lesson } from "./types";

const lessons = [gettingStartedLesson] satisfies Lesson[];

export function getAllLessons(): Lesson[] {
  return [...lessons].sort((first, second) => first.order - second.order);
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug);
}
