import Link from "next/link";
import { getAllLessons } from "../lib/course/catalog";

export default function HomePage() {
  const lessons = getAllLessons();

  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <p className="eyebrow">Production path, simple steps</p>
        <h1 id="home-title">Rebuild OpenCivic AI one lesson at a time.</h1>
        <p className="lede">
          Follow Git-stored lessons that explain the exact files, Windows commands, expected output,
          common errors, and verification checks for the production OpenCivic AI platform.
        </p>
      </section>

      <section aria-labelledby="lessons-title">
        <h2 id="lessons-title">Course lessons</h2>
        <div className="lesson-grid">
          {lessons.map((lesson) => (
            <article className="lesson-card" key={lesson.slug}>
              <p className="eyebrow">Lesson {lesson.order}</p>
              <h3>{lesson.title}</h3>
              <p>{lesson.summary}</p>
              <Link href={`/course/${lesson.slug}`}>Open lesson</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
