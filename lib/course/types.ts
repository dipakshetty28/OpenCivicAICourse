export type CalloutKind = "concept" | "why" | "warning" | "expected" | "error";

export type Lesson = {
  slug: string;
  title: string;
  summary: string;
  durationMinutes: number;
  status: "not-started" | "in-progress" | "complete";
  path: string;
  windowsCommands: string[];
  filePaths: string[];
  code: string;
  diagram: {
    title: string;
    source: string;
    fallback: string;
  };
  callouts: Array<{
    kind: CalloutKind;
    title: string;
    body: string;
  }>;
};

export type CourseModule = {
  slug: string;
  title: string;
  summary: string;
  order: number;
  lessons: Lesson[];
};
