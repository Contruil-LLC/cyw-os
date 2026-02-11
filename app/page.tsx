export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-semibold tracking-tight">
            CYW<span className="text-brand-accent"> OS</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-brand-muted">
            <a href="#architecture" className="hover:text-brand-light transition-colors">
              Architecture
            </a>
            <a href="#components" className="hover:text-brand-light transition-colors">
              Components
            </a>
            <a href="#ip" className="hover:text-brand-light transition-colors">
              IP
            </a>
            <a
              href="https://contruil.com"
              className="px-4 py-2 bg-brand-accent/10 text-brand-accent border border-brand-accent/20 rounded-md hover:bg-brand-accent/20 transition-colors"
            >
              Contruil.com
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-green text-sm font-mono mb-4 tracking-wider">
            PATENT PENDING · U.S. 63/980,310
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-brand-light">
            Control Your World
          </h1>
          <p className="text-xl text-brand-muted max-w-2xl leading-relaxed">
            A sovereign AI orchestration layer that sits above your existing
            cloud and model providers. It does not replace your infrastructure
            — it governs how data and decisions move through it.
          </p>
        </div>
      </section>

      {/* Architecture Overview */}
      <section id="architecture" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-brand-light">
            Architecture Overview
          </h2>
          <p className="text-brand-muted mb-6 max-w-2xl leading-relaxed">
            CYW is designed as a sovereign AI orchestration layer. At a high
            level, the architecture classifies incoming requests, routes them
            through isolated model environments, and enforces human governance
            at every critical boundary.
          </p>

          {/* Conceptual Flow */}
          <div className="my-12 p-8 rounded-lg border border-white/5 bg-brand-surface font-mono text-sm overflow-x-auto">
            <div className="flex flex-col items-center gap-3 text-brand-muted">
              <span className="text-brand-light">User Request</span>
              <span className="text-brand-accent">↓</span>
              <span className="px-4 py-2 border border-brand-accent/30 rounded text-brand-accent">
                Intent Classifier
              </span>
              <span className="text-brand-accent">↓</span>
              <span className="px-4 py-2 border border-brand-green/30 rounded text-brand-green">
                Orchestration Core
              </span>
              <span className="text-brand-accent">↓</span>
              <div className="flex gap-4">
                <span className="px-3 py-1 border border-white/10 rounded text-xs">
                  VLAN A
                </span>
                <span className="px-3 py-1 border border-white/10 rounded text-xs">
                  VLAN B
                </span>
                <span className="px-3 py-1 border border-white/10 rounded text-xs">
                  VLAN C
                </span>
              </div>
              <span className="text-brand-muted text-xs mt-2">
                Four-Gate Validation + Guardian wrapping all paths
              </span>
              <span className="text-brand-accent mt-2">↓</span>
              <span className="px-4 py-2 border border-brand-muted/30 rounded text-brand-muted">
                Audit Chain (tamper-evident ledger)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section id="components" className="py-20 px-6 bg-brand-surface">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center text-brand-light">
            Core Components
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ComponentCard
              label="Intent Classifier"
              description="Incoming requests are classified by purpose and sensitivity so they can be routed to the right models and environments."
              color="accent"
            />
            <ComponentCard
              label="Model Pool &amp; VLAN Zones"
              description="Multiple specialized models (internal and external) run in segmented virtual network zones, allowing separation of low-risk and high-risk workloads."
              color="green"
            />
            <ComponentCard
              label="Four-Gate Validation Layer"
              description="Every critical interaction passes through a four-stage human-governed validation model that can pause, escalate, or block traffic before it reaches production systems."
              color="accent"
            />
            <ComponentCard
              label="Guardian Gate"
              description="A supervisory control point watches for drift, policy violations, and anomalous behavior across the entire orchestration flow."
              color="green"
            />
            <ComponentCard
              label="Tamper-Evident Audit Chain"
              description="All significant AI interactions are logged into a cryptographically linked audit trail so you can see who approved what, when, and under which conditions."
              color="muted"
              className="md:col-span-2 md:max-w-xl md:mx-auto"
            />
          </div>
          <p className="text-center text-brand-muted text-sm mt-12 max-w-2xl mx-auto leading-relaxed">
            This design lets enterprises adopt multi-model AI while preserving
            human authority, regulatory alignment, and a verifiable record of
            how decisions were made.
          </p>
        </div>
      </section>

      {/* IP Section */}
      <section id="ip" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-brand-light">
            Intellectual Property
          </h2>
          <p className="text-brand-muted text-sm leading-relaxed mb-4">
            Certain orchestration and governance mechanisms in the CYW
            architecture are the subject of a pending U.S. patent application.
          </p>
          <div className="p-4 rounded-lg border border-white/5 bg-brand-surface">
            <p className="text-brand-light font-medium text-sm">
              U.S. Provisional Patent Application No. 63/980,310
            </p>
            <p className="text-brand-muted text-xs mt-1 italic">
              Multi-Model AI Orchestration System with Intent-Based Routing,
              Cost-Constrained VLAN Selection, Four-Gate Validation, and
              Tamper-Evident Audit Chains
            </p>
            <p className="text-brand-muted text-xs mt-2">
              Filed February 11, 2026 —{" "}
              <span className="text-brand-green font-medium">Patent Pending</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-muted">
          <p>
            &copy; 2026 Contruil LLC. U.S. Provisional Patent Application No.
            63/980,310 (Patent Pending).
          </p>
          <div className="flex gap-6">
            <a
              href="https://contruil.com"
              className="hover:text-brand-light transition-colors"
            >
              Contruil.com
            </a>
            <a
              href="https://github.com/Contruil-LLC"
              className="hover:text-brand-light transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ComponentCard({
  label,
  description,
  color,
  className = "",
}: {
  label: string;
  description: string;
  color: "accent" | "green" | "muted";
  className?: string;
}) {
  const borderColors = {
    accent: "border-brand-accent/20",
    green: "border-brand-green/20",
    muted: "border-brand-muted/20",
  };

  const labelColors = {
    accent: "text-brand-accent",
    green: "text-brand-green",
    muted: "text-brand-muted",
  };

  return (
    <div
      className={`p-6 rounded-lg border ${borderColors[color]} bg-brand-dark/50 ${className}`}
    >
      <h3 className={`text-lg font-semibold mb-3 ${labelColors[color]}`}>
        {label}
      </h3>
      <p className="text-brand-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
