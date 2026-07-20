import Link from "next/link";
import { ModuleCard } from "../components/course/ModuleCard";
import { AppShell } from "../components/layout/AppShell";
import { getModules } from "../lib/course/data";

export default function HomePage() {
  const modules = getModules();

  return (
    <AppShell>
      <section className="hero" aria-labelledby="home-heading">
        <p className="eyebrow">Course platform</p>
        <h1 id="home-heading">Build OpenCivic AI step by step.</h1>
        <p>
          Navigate focused modules, review sample lessons, and use the visual system that future
          lesson content will share.
        </p>
        <Link className="button-link" href="/course">
          Browse course
        </Link>
      </section>
      <section aria-labelledby="featured-modules">
        <h2 id="featured-modules">Featured module</h2>
        <div className="card-grid">
          {modules.map((courseModule) => (
            <ModuleCard key={courseModule.slug} courseModule={courseModule} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}
