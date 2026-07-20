import { ModuleCard } from "../../components/course/ModuleCard";
import { AppShell } from "../../components/layout/AppShell";
import { Breadcrumb } from "../../components/layout/Breadcrumb";
import { getModules } from "../../lib/course/data";

export default function CoursePage() {
  return (
    <AppShell>
      <Breadcrumb items={[{ label: "Course" }]} />
      <header className="page-header">
        <p className="eyebrow">Information architecture</p>
        <h1>Course modules</h1>
        <p>Start with the foundation module and move through lessons in order.</p>
      </header>
      <div className="card-grid">
        {getModules().map((courseModule) => (
          <ModuleCard key={courseModule.slug} courseModule={courseModule} />
        ))}
      </div>
    </AppShell>
  );
}
