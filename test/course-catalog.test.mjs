import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const lessonFile = new URL("../content/lessons/getting-started.ts", import.meta.url);

test("getting started lesson includes required teaching sections", async () => {
  const source = await readFile(lessonFile, "utf8");

  for (const requiredField of [
    "windowsCommands",
    "functionExplanations",
    "expectedOutput",
    "commonErrors",
    "verificationChecklist"
  ]) {
    assert.match(source, new RegExp(`${requiredField}:`));
  }
});
