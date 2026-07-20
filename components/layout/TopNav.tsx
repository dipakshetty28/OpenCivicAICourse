import Link from "next/link";

const links = [
  { href: "/course", label: "Course" },
  { href: "/search", label: "Search" },
  { href: "/glossary", label: "Glossary" },
  { href: "/progress", label: "Progress" }
];

export function TopNav() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        OpenCivic AI Course
      </Link>
      <nav className="top-nav" aria-label="Primary navigation">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
