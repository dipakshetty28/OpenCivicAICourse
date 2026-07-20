import { getCourseProgress } from "../../lib/course/data";
import { Sidebar } from "./Sidebar";
import { TopNav } from "./TopNav";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <TopNav />
      <Sidebar progress={getCourseProgress()} />
      <main className="main-content" id="main-content">
        {children}
      </main>
      <footer className="site-footer">
        <p>OpenCivic AI Course Platform</p>
      </footer>
    </div>
  );
}
