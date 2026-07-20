type FilePathBlockProps = {
  paths: string[];
};

export function FilePathBlock({ paths }: FilePathBlockProps) {
  return (
    <div className="file-path-block" aria-label="File paths">
      {paths.map((path) => (
        <code key={path}>{path}</code>
      ))}
    </div>
  );
}
