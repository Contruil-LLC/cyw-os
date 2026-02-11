import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CYW OS — Control Your World",
  description:
    "Sovereign AI orchestration architecture. Route work across multiple models with VLAN-style isolation, human governance, and verifiable audit trails.",
  keywords: [
    "CYW",
    "Control Your World",
    "AI orchestration",
    "sovereign AI",
    "multi-model routing",
    "VLAN",
  ],
  openGraph: {
    title: "CYW OS — Control Your World",
    description:
      "Sovereign AI orchestration layer with human-governed multi-model routing. Patent Pending (U.S. 63/980,310).",
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
