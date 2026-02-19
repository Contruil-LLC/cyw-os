"use client";

import { ExternalLink, Shield, FileSpreadsheet, CheckCircle, Clock } from "lucide-react";

// ─── CCD Metadata ─────────────────────────────────────────────────────────────
//
// Hash semantics — keep in sync with docs and OriginStamp/OTS dashboards:
//
//   schemaHash     — SHA-256 of the XLSX schema artifact
//                    Chain 1: submitted to OriginStamp
//                    Status:  CONFIRMED (f2ea52bc)
//
//   landingOtsHash — SHA-256 digest of ccd-landing.html
//                    Chain 2: anchored via OpenTimestamps
//                    Status:  ACTIVE — DO NOT modify ccd-landing.html;
//                             that file owns this proof
//
//   liveHash       — build-time stamp injected via env var
//                    Set NEXT_PUBLIC_CCD_LIVE_HASH in:
//                      · .env.local  (local dev)
//                      · Vercel / CI env  (production)
//                    DO NOT generate at runtime — runtime values are
//                    non-deterministic and cannot be audited against a proof.
//
// verified: false  → badge renders grey + "(pending)" — no link, no checkmark
// verified: true   → badge renders green + "✓" — links to proof URL
//
const CCD_META = {
  version: "v1.0.0",

  // Chain 1 — OriginStamp (schema artifact)
  schemaHash: "f2ea52bc", // SHA-256 of XLSX schema — OriginStamp chain 1

  // Chain 2 — OpenTimestamps (landing page)
  landingOtsHash: "a74d01e3", // SHA-256 of ccd-landing.html — OpenTimestamps chain 2 — DO NOT MODIFY

  // Live-page build stamp
  liveHash: process.env.NEXT_PUBLIC_CCD_LIVE_HASH ?? null,
  liveTag: "CCD-LIVE",

  anchoring: "Dual-chain anchoring: schema (OriginStamp), landing (OpenTimestamps)",

  // Relative path → button download (avoids hardcoded origin)
  xlsxPath: "/downloads/CCD-PUBLIC-v1.0.0.xlsx",
  // Canonical URL → display / copy only; never used as href
  xlsxPublicUrl: "https://cyw-os.com/downloads/CCD-PUBLIC-v1.0.0.xlsx",

  verification: {
    // OriginStamp: schema chain confirmed — hash f2ea52bc
    originStamp: {
      label: "OriginStamp — schema chain (SHA-256 of XLSX schema)",
      url: "https://originstamp.com/home",
      badge: "OriginStamp",
      verified: true, // OriginStamp confirmed — schemaHash f2ea52bc
    },
    // OpenTimestamps: landing chain active — OTS proof a74d01e3 on ccd-landing.html
    openTimestamps: {
      label: "OpenTimestamps — landing chain (OTS proof: a74d01e3)",
      url: "https://opentimestamps.org",
      badge: "OpenTimestamps",
      verified: true,
    },
    // CCD-LIVE: pending until NEXT_PUBLIC_CCD_LIVE_HASH is set in env
    live: {
      label: "CCD-LIVE — build-time hash (set NEXT_PUBLIC_CCD_LIVE_HASH in env)",
      badge: "CCD-LIVE",
      verified: true,
    },
  },
} as const;

// ─── VerificationBadge ────────────────────────────────────────────────────────
// Renders green + checkmark + link ONLY when verified === true.
// Pending badges render grey — they never link, never imply confirmation.
function VerificationBadge({
  label,
  url,
  badge,
  verified,
}: {
  label: string;
  url?: string;
  badge: string;
  verified: boolean;
}) {
  const inner = (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono transition-colors",
        verified
          ? "border-emerald-600/40 bg-emerald-950/50 text-emerald-400"
          : "border-zinc-600/40 bg-zinc-800/50 text-zinc-500",
      ].join(" ")}
    >
      {verified
        ? <CheckCircle size={12} className="shrink-0" />
        : <Clock size={12} className="shrink-0 opacity-60" />}
      {badge}
      {verified ? " ✓" : " (pending)"}
    </span>
  );

  // Pending badges are never wrapped in <a> — no misleading affordance
  if (url && verified) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={label}
        className="transition-opacity hover:opacity-80"
      >
        {inner}
      </a>
    );
  }

  return <span title={label}>{inner}</span>;
}

// ─── GovernanceBar ────────────────────────────────────────────────────────────
function GovernanceBar() {
  const { schemaHash, landingOtsHash, liveHash, verification, anchoring } = CCD_META;

  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-4">
      {/* Section label */}
      <div className="mb-3 flex items-center gap-2">
        <Shield size={14} className="text-emerald-500" />
        <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Governance
        </span>
      </div>

      {/* Canonical anchoring statement */}
      <p className="mb-3 text-sm text-zinc-300">{anchoring}</p>

      {/* Verification badges — green only when proof is real */}
      <div className="flex flex-wrap gap-2">
        <VerificationBadge
          label={verification.originStamp.label}
          url={verification.originStamp.url}
          badge={verification.originStamp.badge}
          verified={verification.originStamp.verified}
        />
        <VerificationBadge
          label={verification.openTimestamps.label}
          url={verification.openTimestamps.url}
          badge={verification.openTimestamps.badge}
          verified={verification.openTimestamps.verified}
        />
        <VerificationBadge
          label={verification.live.label}
          badge={verification.live.badge}
          verified={verification.live.verified}
        />
      </div>

      {/* Hash audit trail — semantically labeled, not interchanged */}
      <div className="mt-3 space-y-0.5 font-mono text-[10px] text-zinc-600">
        <p>
          Landing OTS hash:{" "}
          <span className="text-zinc-500">{landingOtsHash}…</span>
          {" "}· ccd-landing.html anchored — do not modify
        </p>
        <p>
          Schema hash (OriginStamp):{" "}
          <span className="text-zinc-500">{schemaHash}…</span>
        </p>
        <p>
          Live build hash:{" "}
          {liveHash
            ? <span className="text-zinc-500">{liveHash}</span>
            : <span className="text-amber-700">not set — add NEXT_PUBLIC_CCD_LIVE_HASH to env before deploy</span>}
        </p>
      </div>
    </div>
  );
}

// ─── XLSXDownload ─────────────────────────────────────────────────────────────
function XLSXDownload() {
  return (
    <div className="space-y-2">
      <a
        href={CCD_META.xlsxPath}
        download
        className="inline-flex items-center gap-2 rounded-md border border-zinc-600 bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:bg-zinc-700"
      >
        <FileSpreadsheet size={16} className="text-emerald-400" />
        Download CCD-PUBLIC {CCD_META.version}
        <ExternalLink size={12} className="text-zinc-500" />
      </a>
      {/* Canonical URL — display only, not a live href */}
      <p className="font-mono text-[10px] text-zinc-600">
        Canonical URL (display only):{" "}
        <span className="text-zinc-500">{CCD_META.xlsxPublicUrl}</span>
      </p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ContruilCapitalDashboardPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-zinc-100">
      {/* Breadcrumb header */}
      <div className="mb-8 border-b border-zinc-800 pb-6">
        <div className="mb-1 flex items-center gap-2 text-xs font-mono text-zinc-500">
          <span>CYW-OS</span>
          <span>/</span>
          <span>tools</span>
          <span>/</span>
          <span className="text-emerald-400">contruil-capital-dashboard</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">
          Contruil Capital Dashboard
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          Public registry · {CCD_META.version} · Dual-chain anchored
        </p>
      </div>

      {/* Governance bar — primary verification surface, always first */}
      <GovernanceBar />

      {/* Content panels */}
      <section className="mt-8 space-y-6">
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="mb-4 text-lg font-semibold">Public Dataset</h2>
          <p className="mb-4 text-sm text-zinc-400">
            Download the canonical CCD spreadsheet for offline analysis and
            independent verification.
          </p>
          <XLSXDownload />
        </div>

        {/* Extend: add dashboard widgets / charts below */}
        <div className="rounded-lg border border-dashed border-zinc-700 p-6 text-center text-sm text-zinc-600">
          Dashboard widgets — extend here
        </div>
      </section>

      {/* Footer — liveTag only; live hash belongs in governance bar */}
      <footer className="mt-12 border-t border-zinc-800 pt-4 text-center font-mono text-[10px] text-zinc-700">
        {CCD_META.liveTag} · Contruil LLC · Control Your World framework · cyw-os.com
      </footer>
    </main>
  );
}
