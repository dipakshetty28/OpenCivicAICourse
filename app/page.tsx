export default function HomePage() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="OpenCivic AI Course home">
          OpenCivic AI Course
        </a>
        <nav className="top-nav" aria-label="Primary navigation">
          <a href="/api/health">Health</a>
        </nav>
      </header>

      <aside className="sidebar" aria-label="Course navigation">
        <h2>Course</h2>
        <p>Lesson navigation will appear here in a later chunk.</p>
      </aside>

      <main className="main-content" id="main-content">
        <section className="hero" aria-labelledby="home-heading">
          <p className="eyebrow">Chunk 1</p>
          <h1 id="home-heading">Build OpenCivic AI step by step.</h1>
          <p>
            This minimal course shell is ready for local development, testing, production builds,
            and future Git-backed lessons.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>OpenCivic AI Course Platform</p>
      </footer>
    </div>
  );
}
