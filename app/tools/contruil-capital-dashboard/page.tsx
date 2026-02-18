import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contruil Capital Dashboard | CCD-PUBLIC",
  description:
    "Personal capital tracking schema — Guardian / Orchestration / Surface layers. Spreadsheet-first. Legal/IP budget. No PII.",
};

const SCHEMA_RAW =
  "https://raw.githubusercontent.com/Contruil-LLC/cyw-os-governance/main/tools/contruil-capital-dashboard/CCD-PUBLIC-v1.0.0.schema.md";

export default function ContruilCapitalDashboardPage() {
  return (
    <div className="ccd-page min-h-screen bg-[#0f1729] text-[#f8f6f1] font-mono text-[15px] leading-[1.65] max-w-[720px] mx-auto px-6 py-8 pb-16 antialiased [&_h1]:font-[Syne,sans-serif] [&_h2]:font-[Syne,sans-serif] [&_h3]:font-[Syne,sans-serif]">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Syne:wght@400;600;700&display=swap"
      />

      <header className="mb-10">
        <h1 className="text-2xl text-[#f8f6f1] mb-2">Contruil Capital Dashboard</h1>
        <p className="text-[#e8e4dc] text-[0.95rem]">
          Personal capital tracking — spreadsheet-first. Guardian / Orchestration / Surface layers. Legal / IP budget. No PII.
        </p>
        <div className="bg-[#1e293b] border border-blue-500/20 rounded-md p-5 my-6 text-[0.85rem] overflow-x-auto">
          <code className="text-[#e8e4dc]">
            schema_id: <span className="text-blue-400">&quot;CCD-PUBLIC&quot;</span>
            <br />
            layer_model: <span className="text-blue-400">&quot;Guardian / Orchestration / Surface&quot;</span>
            <br />
            version: 1.0.0
          </code>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-[1.35rem] text-[#e8e4dc] border-b border-[#1e293b] pb-1.5 mb-4">What It Is</h2>
        <p className="mb-4">
          A column-level schema for tracking income, fixed/variable necessities, savings, discretionary spend, and runway. Designed for spreadsheet (XLSX) first, with optional Notion and static HTML views.
        </p>
        <h2 className="text-[1.35rem] text-[#e8e4dc] border-b border-[#1e293b] pb-1.5 mb-4 mt-8">What It Isn&apos;t</h2>
        <p>Not a product. Not a SaaS. No account numbers, balances, or PII. Safe for public distribution and version control.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[1.35rem] text-[#e8e4dc] border-b border-[#1e293b] pb-1.5 mb-4">Three Layers</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="font-mono text-xs py-1 px-2 rounded bg-blue-500/15 text-blue-400 border border-blue-500/30">
            Guardian
          </span>
          <span className="font-mono text-xs py-1 px-2 rounded bg-blue-500/15 text-blue-400 border border-blue-500/30">
            Orchestration
          </span>
          <span className="font-mono text-xs py-1 px-2 rounded bg-blue-500/15 text-blue-400 border border-blue-500/30">
            Surface
          </span>
        </div>
        <h3 className="text-[1.1rem] text-blue-400 mt-5 mb-2">Layer 0 · Guardian Capital</h3>
        <p className="mb-2">Risk containment. Reserved funds — not available for operations until thresholds are met.</p>
        <p className="mb-4">
          <span className="text-[0.7rem] py-0.5 px-1.5 rounded bg-green-500/12 text-green-500 mr-1">emergency_reserve</span>
          <span className="text-[0.7rem] py-0.5 px-1.5 rounded bg-green-500/12 text-green-500 mr-1">legal_ip</span>
          <span className="text-[0.7rem] py-0.5 px-1.5 rounded bg-green-500/12 text-green-500 mr-1">tax_allocation</span>
          <span className="text-[0.7rem] py-0.5 px-1.5 rounded bg-green-500/12 text-green-500">career_mobility_fund</span>
        </p>
        <h3 className="text-[1.1rem] text-blue-400 mt-5 mb-2">Layer 1 · Orchestration Capital</h3>
        <p className="mb-4">Operations: income, fixed necessities, variable necessities, savings, discretionary.</p>
        <h3 className="text-[1.1rem] text-blue-400 mt-5 mb-2">Layer 2 · Surface Metrics</h3>
        <p>Calculated only. Runway, allocation %, variance. No user input.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-[1.35rem] text-[#e8e4dc] border-b border-[#1e293b] pb-1.5 mb-4">Three Artifacts</h2>
        <div className="space-y-4">
          <div className="py-3 border-b border-[#1e293b]">
            <strong className="text-[#f8f6f1]">1. XLSX template</strong> — Primary. Blue cells = user input; black cells = formulas.
            <br />
            <Link href="/downloads/CCD-PUBLIC-v1.0.0.xlsx" className="text-blue-500 border-b border-transparent hover:border-blue-400">
              Download XLSX
            </Link>
          </div>
          <div className="py-3 border-b border-[#1e293b]">
            <strong className="text-[#f8f6f1]">2. Notion template</strong> — Secondary. Duplicate and adapt.
            <br />
            <span className="text-[#8a8a8a]">Coming soon</span>
          </div>
          <div className="py-3">
            <strong className="text-[#f8f6f1]">3. HTML static view</strong> — Reference. This page + schema.
            <br />
            <Link href={SCHEMA_RAW} target="_blank" rel="noopener noreferrer" className="text-blue-500 border-b border-transparent hover:border-blue-400">
              CCD-PUBLIC-v1.0.0.schema.md
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-[1.35rem] text-[#e8e4dc] border-b border-[#1e293b] pb-1.5 mb-4">Governance</h2>
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-md p-4 text-[0.9rem]">
          <p>CCD-PUBLIC v1.0.0 · Contruil LLC · Free to use and adapt with attribution.</p>
          <p className="mt-2">
            OriginStamp hash anchoring recommended before publication. Tag: <code>CCD-PUBLIC-v1.0.0</code>
          </p>
        </div>
      </section>

      <footer className="mt-10 pt-8 border-t border-[#1e293b] text-center">
        <Link
          href={SCHEMA_RAW}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-2.5 px-5 bg-blue-500 text-[#0f1729] rounded-md font-semibold border-none hover:bg-blue-400"
        >
          View full schema
        </Link>
      </footer>
    </div>
  );
}
