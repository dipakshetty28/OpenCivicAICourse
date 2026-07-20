import { CodeBlock } from "./CodeBlock";

type CommandBlockProps = {
  commands: string[];
};

export function CommandBlock({ commands }: CommandBlockProps) {
  return <CodeBlock code={commands.join("\n")} label="Windows CMD" />;
}
