import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CYW OS — Control Your World",
  description:
    "Sovereign AI orchestration architecture. Five entities. Three production zones. One synchronized network. Patent Pending (U.S. 63/980,310).",
  keywords: [
    "CYW",
    "Control Your World",
    "AI orchestration",
    "sovereign AI",
    "Virgil",
    "Contruil",
    "multi-model routing",
    "cognitive architecture",
  ],
  openGraph: {
    title: "CYW OS — Control Your World",
    description:
      "Sovereign AI orchestration layer. Infrastructure that adapts, intelligence that evolves. Patent Pending (U.S. 63/980,310).",
    url: "https://cyw-os.com",
    siteName: "CYW OS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
