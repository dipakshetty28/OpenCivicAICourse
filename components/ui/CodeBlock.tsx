"use client";

import { useState } from "react";

type CodeBlockProps = {
  code: string;
  label?: string;
};

export function CodeBlock({ code, label = "Code" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <figure className="code-block">
      <figcaption>
        <span>{label}</span>
        <button type="button" onClick={copyCode}>
          {copied ? "Copied" : "Copy"}
        </button>
      </figcaption>
      <pre>
        <code>{code}</code>
      </pre>
    </figure>
  );
}
