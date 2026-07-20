import type { Lesson } from "../../lib/course/types";

export const gettingStartedLesson: Lesson = {
  slug: "getting-started",
  title: "Create the Next.js App Router foundation",
  order: 1,
  summary:
    "Start the modular monolith with strict TypeScript, semantic pages, and Git-stored course content.",
  concept:
    "A modular monolith keeps one deployable Next.js application while organizing features into clear folders. In this lesson, the course shell, homepage, and lesson route live in the app directory so learners can see the smallest production-ready shape before AWS is added.",
  filePath: "app/page.tsx, app/course/[slug]/page.tsx, lib/course/catalog.ts",
  windowsCommands: [
    "npm install",
    "npm run dev",
    "npm run typecheck",
    "npm run lint",
    "npm run build"
  ],
  code: `export default function HomePage() {
  const lessons = getAllLessons();

  return (
    <section className="hero">
      <p className="eyebrow">Production path, simple steps</p>
      <h1>Rebuild OpenCivic AI one lesson at a time.</h1>
      <p className="lede">
        Learn the exact files, commands, and checks used to recreate the reference repository.
      </p>
    </section>
  );
}`,
  functionExplanations: [
    "HomePage renders the public landing page and links to Git-backed lessons.",
    "getAllLessons returns lessons sorted by order so navigation stays predictable.",
    "LessonPage reads the slug from the URL and renders one complete lesson."
  ],
  expectedOutput: [
    "The homepage loads at http://localhost:3000 with a hero section and lesson cards.",
    "The first lesson loads at http://localhost:3000/course/getting-started.",
    "The build command finishes with a static homepage and a generated lesson page."
  ],
  commonErrors: [
    "If npm is not recognized, install Node.js LTS and reopen VS Code Command Prompt.",
    "If a route shows 404, confirm the slug in content/lessons/getting-started.ts matches the URL.",
    "If TypeScript fails, confirm every Lesson field is present and spelled correctly."
  ],
  verificationChecklist: [
    "The project uses the Next.js App Router app directory.",
    "TypeScript strict mode is enabled in tsconfig.json.",
    "Lesson content is committed as source files in Git, not stored in a CMS.",
    "The page uses semantic headings, lists, sections, and links."
  ]
};
