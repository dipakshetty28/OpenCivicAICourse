import Link from "next/link";
import { AppShell } from "../../components/layout/AppShell";
import { Breadcrumb } from "../../components/layout/Breadcrumb";
import { getAllLessons } from "../../lib/course/data";

export default function SearchPage() {
  return (
    <AppShell>
      <Breadcrumb items={[{ label: "Search" }]} />
      <header className="page-header">
        <p className="eyebrow">Search</p>
        <h1>Find course material</h1>
        <p>Search UI wiring will arrive later; this page previews indexed sample lessons.</p>
      </header>
      <form className="search-form" role="search">
        <label htmlFor="search-query">Search lessons</label>
        <input id="search-query" name="q" type="search" placeholder="Try app shell" />
        <button type="submit">Search</button>
      </form>
      <ul className="result-list">
        {getAllLessons().map(({ lesson, module }) => (
          <li key={`${module.slug}-${lesson.slug}`}>
            <Link href={`/course/${module.slug}/${lesson.slug}`}>{lesson.title}</Link>
            <p>{lesson.summary}</p>
          </li>
        ))}
      </ul>
    </AppShell>
  );
}
