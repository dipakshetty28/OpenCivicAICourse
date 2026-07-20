import type { CourseModule, Lesson } from "./types";

export const courseModules: CourseModule[] = [
  {
    slug: "foundation",
    title: "Foundation",
    summary:
      "Set up the application shell, routes, and quality checks before adding cloud services.",
    order: 1,
    lessons: [
      {
        slug: "app-shell",
        title: "Build the course app shell",
        summary:
          "Create a readable layout with navigation, content regions, and development scripts.",
        durationMinutes: 20,
        status: "complete",
        path: "app/page.tsx",
        windowsCommands: ["npm install", "npm run dev", "npm run lint"],
        filePaths: ["app/layout.tsx", "app/page.tsx", "app/styles/global.css"],
        code: `export default function HomePage() {
  return <main>OpenCivic AI Course</main>;
}`,
        diagram: {
          title: "Course shell structure",
          source: "graph TD; Header-->Main; Sidebar-->Main; Main-->Footer;",
          fallback:
            "Header and sidebar guide the learner into the main lesson content, followed by a footer."
        },
        callouts: [
          {
            kind: "concept",
            title: "Concept",
            body: "The app shell is the shared frame around every course page."
          },
          {
            kind: "why",
            title: "Why it matters",
            body: "Learners need predictable navigation before lesson content grows."
          },
          {
            kind: "expected",
            title: "Expected result",
            body: "The page shows a header, sidebar, main content area, and footer."
          }
        ]
      },
      {
        slug: "quality-checks",
        title: "Run quality checks",
        summary: "Verify formatting, linting, typechecking, tests, and builds after each chunk.",
        durationMinutes: 15,
        status: "in-progress",
        path: "package.json",
        windowsCommands: ["npm run lint", "npm run typecheck", "npm test", "npm run build"],
        filePaths: ["package.json", "tsconfig.json", "vitest.config.ts"],
        code: `{
  "scripts": {
    "lint": "eslint .",
    "typecheck": "tsc --noEmit"
  }
}`,
        diagram: {
          title: "Quality gate flow",
          source: "graph LR; Lint-->Typecheck; Typecheck-->Test; Test-->Build;",
          fallback: "Run lint first, then typecheck, then tests, then the production build."
        },
        callouts: [
          {
            kind: "warning",
            title: "Warning",
            body: "Do not continue to the next chunk when a check fails because of your changes."
          },
          {
            kind: "error",
            title: "Common error",
            body: "Missing dependencies usually means npm install did not complete."
          },
          {
            kind: "expected",
            title: "Expected result",
            body: "Every check exits successfully before a pull request is opened."
          }
        ]
      }
    ]
  }
];

export function getModules(): CourseModule[] {
  return [...courseModules].sort((first, second) => first.order - second.order);
}

export function getModule(moduleSlug: string): CourseModule | undefined {
  return courseModules.find((courseModule) => courseModule.slug === moduleSlug);
}

export function getLesson(moduleSlug: string, lessonSlug: string): Lesson | undefined {
  return getModule(moduleSlug)?.lessons.find((lesson) => lesson.slug === lessonSlug);
}

export function getAllLessons() {
  return getModules().flatMap((courseModule) =>
    courseModule.lessons.map((lesson, lessonIndex) => ({
      lesson,
      lessonIndex,
      module: courseModule
    }))
  );
}

export function getLessonNeighbors(moduleSlug: string, lessonSlug: string) {
  const lessons = getAllLessons();
  const index = lessons.findIndex(
    (entry) => entry.module.slug === moduleSlug && entry.lesson.slug === lessonSlug
  );

  return {
    previous: index > 0 ? lessons[index - 1] : undefined,
    next: index >= 0 && index < lessons.length - 1 ? lessons[index + 1] : undefined
  };
}

export function getCourseProgress(): number {
  const lessons = getAllLessons();
  const completed = lessons.filter((entry) => entry.lesson.status === "complete").length;
  return Math.round((completed / lessons.length) * 100);
}
