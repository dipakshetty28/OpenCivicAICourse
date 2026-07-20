import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CodeBlock } from "../components/ui/CodeBlock";
import { MermaidDiagram } from "../components/ui/MermaidDiagram";
import { ProgressBar } from "../components/ui/ProgressBar";

describe("visual system components", () => {
  it("copies code block content", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });

    render(<CodeBlock code="npm run lint" label="Windows CMD" />);
    fireEvent.click(screen.getByRole("button", { name: "Copy" }));

    await waitFor(() => expect(writeText).toHaveBeenCalledWith("npm run lint"));
    expect(await screen.findByRole("button", { name: "Copied" })).toBeInTheDocument();
  });

  it("renders mermaid source with accessible fallback text", () => {
    render(
      <MermaidDiagram title="Example diagram" source="graph TD; A-->B;" fallback="A points to B." />
    );

    expect(screen.getByText("Example diagram")).toBeInTheDocument();
    expect(screen.getByText("graph TD; A-->B;")).toBeInTheDocument();
    expect(screen.getByText("Diagram summary: A points to B.")).toBeInTheDocument();
  });

  it("keeps progress values within accessible limits", () => {
    render(<ProgressBar label="Course progress" value={120} />);

    expect(screen.getByRole("progressbar", { name: "Course progress" })).toHaveAttribute(
      "aria-valuenow",
      "100"
    );
  });
});
