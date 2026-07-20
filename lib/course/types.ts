export type Lesson = {
  slug: string;
  title: string;
  order: number;
  summary: string;
  concept: string;
  filePath: string;
  windowsCommands: string[];
  code: string;
  functionExplanations: string[];
  expectedOutput: string[];
  commonErrors: string[];
  verificationChecklist: string[];
};
