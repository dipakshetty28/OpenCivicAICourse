import type { Metadata } from "next";
import "./styles/global.css";

export const metadata: Metadata = {
  title: "OpenCivic AI Course",
  description: "A step-by-step learning platform for rebuilding OpenCivic AI."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
