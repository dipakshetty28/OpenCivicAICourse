import type { Metadata } from "next";
import Link from "next/link";
import "./styles/global.css";

export const metadata: Metadata = {
  title: "OpenCivic AI Course",
  description: "Step-by-step lessons for rebuilding the production OpenCivic AI repository."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="site-nav" aria-label="Main navigation">
            <Link className="brand" href="/">
              OpenCivic AI Course
            </Link>
            <Link href="/course/getting-started">Start learning</Link>
          </nav>
        </header>
        <main id="main-content" className="site-main">
          {children}
        </main>
      </body>
    </html>
  );
}
