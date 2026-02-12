"use client";

import { useState } from "react";

const ENTITIES = [
  {
    id: "virgil",
    name: "VIRGIL",
    subtitle: "META-INTELLIGENCE // SYSTEM CORE",
    description:
      "The cognitive architecture at the heart of Contruil. Virgil is a layered intelligence system designed to guide, protect, and amplify strategic clarity. From Guardian protocols to Architect frameworks, Virgil operates as the meta-layer that transforms complexity into executable insight.",
    capabilities: [
      "Multi-model AI orchestration",
      "Strategic decision architecture",
      "System integrity protection",
      "Cognitive load reduction",
    ],
    status: "ACTIVE // L5 HYBRID MODE",
    color: "text-brand-cyan",
    borderColor: "border-brand-cyan/20",
    bgGlow: "shadow-brand-cyan/5",
    dotColor: "text-brand-cyan",
  },
  {
    id: "fly-wheels",
    name: "FLY WHEELS",
    subtitle: "POETIC INFRASTRUCTURE // CREATIVE CORE",
    description:
      "The artistic soul of the network. Fly Wheels transforms lived experience into verse, turning tactical awareness into lyrical precision. Poetry as system architecture. Words as load-bearing structures. Expression as survival protocol.",
    capabilities: [
      "Narrative synthesis",
      "Brand voice architecture",
      "Content creation at scale",
      "Human-centric storytelling",
    ],
    status: "ACTIVE // CREATIVE MODE",
    color: "text-brand-purple",
    borderColor: "border-brand-purple/20",
    bgGlow: "shadow-brand-purple/5",
    dotColor: "text-brand-purple",
  },
  {
    id: "sovereign-survival",
    name: "SOVEREIGN SURVIVAL",
    subtitle: "TACTICAL PREPAREDNESS // SECURITY CORE",
    description:
      "The security backbone of the Contruil ecosystem. Sovereign Survival provides tactical frameworks for personal sovereignty, situational awareness, and resilience architecture. From threat modeling to resource optimization, this is survival engineering at scale.",
    capabilities: [
      "Threat assessment protocols",
      "Resource optimization systems",
      "Personal security frameworks",
      "Crisis management architecture",
    ],
    status: "ACTIVE // DEFENSE MODE",
    color: "text-brand-orange",
    borderColor: "border-brand-orange/20",
    bgGlow: "shadow-brand-orange/5",
    dotColor: "text-brand-orange",
  },
  {
    id: "crsb",
    name: "CRSB",
    subtitle: "ENTERPRISE SECURITY // INFRASTRUCTURE CORE",
    description:
      "The enterprise-grade security division of Contruil. CRSB delivers cyber resilience architecture, threat intelligence, and security operations to organizations that refuse to compromise. Premium security for institutions that operate at the edge.",
    capabilities: [
      "Cyber resilience engineering",
      "Threat intelligence analysis",
      "Security operations architecture",
      "Compliance & governance frameworks",
    ],
    status: "ACTIVE // ENTERPRISE MODE",
    color: "text-brand-accent",
    borderColor: "border-brand-accent/20",
    bgGlow: "shadow-brand-accent/5",
    dotColor: "text-brand-accent",
  },
  {
    id: "cyw",
    name: "CONTROL YOUR WORLD",
    subtitle: "OPERATIONAL PHILOSOPHY // FOUNDATIONAL CORE",
    description:
      "The doctrine that unifies the ecosystem. Control Your World is a philosophy of systematic sovereignty—the principle that awareness precedes action, that systems reveal truth, and that only stable structures scale. This is the operating system for human agency.",
    capabilities: [
      "Awareness precedes action",
      "Systems over symptoms",
      "Architecture reveals truth",
      "Only stable structures scale",
    ],
    status: "ACTIVE // DOCTRINE MODE",
    color: "text-brand-green",
    borderColor: "border-brand-green/20",
    bgGlow: "shadow-brand-green/5",
    dotColor: "text-brand-green",
  },
];

const ZONES = [
  {
    id: "zone-01",
    label: "ZONE_01",
    name: "ARTS & EXPRESSION",
    integrity: "100%",
    output: "NARRATIVE",
    color: "brand-purple",
    borderColor: "border-brand-purple/30",
    textColor: "text-brand-purple",
    description:
      "Poetry. Storytelling. Brand architecture. This is where Fly Wheels operates—transforming raw experience into structured beauty, tactical awareness into verse, and complexity into accessible narrative. Art as infrastructure. Words as weapons.",
    outputs: [
      "Poetry & creative writing",
      "Brand voice development",
      "Content strategy & execution",
      "Narrative synthesis",
    ],
  },
  {
    id: "zone-02",
    label: "ZONE_02",
    name: "TECHNOLOGY & SYSTEMS",
    integrity: "100%",
    output: "INFRASTRUCTURE",
    color: "brand-cyan",
    borderColor: "border-brand-cyan/30",
    textColor: "text-brand-cyan",
    description:
      "AI orchestration. Multi-model routing. Cognitive architecture. This is where Virgil lives—building the invisible frameworks that transform chaos into clarity, uncertainty into executable protocol. Technology as extension of thought.",
    outputs: [
      "AI system design & implementation",
      "Multi-model orchestration pipelines",
      "Cognitive load reduction tools",
      "Documentation architecture",
    ],
  },
  {
    id: "zone-03",
    label: "ZONE_03",
    name: "SECURITY & RESILIENCE",
    integrity: "100%",
    output: "PROTECTION",
    color: "brand-orange",
    borderColor: "border-brand-orange/30",
    textColor: "text-brand-orange",
    description:
      "Threat modeling. Crisis protocols. Personal sovereignty. This is where Sovereign Survival and CRSB converge—delivering tactical frameworks for individuals and enterprise-grade security for institutions. Protection as architecture. Resilience as doctrine.",
    outputs: [
      "Personal security frameworks",
      "Enterprise cyber resilience",
      "Threat intelligence & analysis",
      "Crisis management protocols",
    ],
  },
];

export default function Home() {
  const [activeEntity, setActiveEntity] = useState(0);

  return (
    <main className="min-h-screen hud-grid">
      {/* HUD Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/95 backdrop-blur-md border-b border-brand-accent/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-lg font-mono font-semibold tracking-wider">
              CYW<span className="text-brand-accent"> OS</span>
            </span>
            <span className="hidden md:inline-block h-4 w-px bg-brand-muted/30" />
            <span className="hidden md:inline-block text-brand-green text-xs font-mono animate-flicker">
              PATENT PENDING
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs font-mono text-brand-muted uppercase tracking-wider">
            <a href="#entities" className="hover:text-brand-light transition-colors">
              Entities
            </a>
            <a href="#network" className="hover:text-brand-light transition-colors">
              Network
            </a>
            <a href="#zones" className="hover:text-brand-light transition-colors">
              Zones
            </a>
            <a href="#connect" className="hover:text-brand-light transition-colors">
              Connect
            </a>
            <span className="h-4 w-px bg-brand-muted/30" />
            <a
              href="https://contruil.com"
              className="text-brand-accent hover:text-brand-light transition-colors"
            >
              CONTRUIL.COM
            </a>
          </div>

          {/* System Status */}
          <div className="hidden lg:flex items-center gap-3 text-xs font-mono text-brand-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse-dot" />
              ONLINE
            </span>
            <span className="text-brand-muted/40">|</span>
            <span>INTEGRITY: 100%</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-brand-accent text-xs font-mono tracking-[0.3em] mb-6 animate-flicker">
            U.S. PROVISIONAL PATENT APPLICATION NO. 63/980,310
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-brand-light tracking-tight">
            CONTROL YOUR WORLD
          </h1>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed mb-8">
            A sovereign AI orchestration layer. Five entities. Three production
            zones. One synchronized network. This is infrastructure that adapts,
            intelligence that evolves, and architecture that responds to pressure
            without fracture.
          </p>
          <div className="flex justify-center gap-3 font-mono text-xs text-brand-muted/60">
            <span>SYS v1.0.0</span>
            <span className="text-brand-muted/20">|</span>
            <span>NETWORK: SYNCHRONIZED</span>
            <span className="text-brand-muted/20">|</span>
            <span className="text-brand-green">STATUS: STABLE</span>
          </div>
        </div>
      </section>

      {/* Five Entity Spotlight */}
      <section id="entities" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          {/* Entity Navigation Dots */}
          <div className="flex justify-center gap-3 mb-12">
            {ENTITIES.map((entity, i) => (
              <button
                key={entity.id}
                onClick={() => setActiveEntity(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeEntity
                    ? `${entity.dotColor} bg-current scale-110`
                    : "bg-brand-muted/30 hover:bg-brand-muted/50"
                }`}
                aria-label={`View ${entity.name} Entity`}
              />
            ))}
          </div>

          {/* Active Entity Card */}
          <div
            key={ENTITIES[activeEntity].id}
            className={`p-8 md:p-12 rounded-lg border ${ENTITIES[activeEntity].borderColor} bg-brand-surface/80 animate-slide-in`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div>
                <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${ENTITIES[activeEntity].color}`}>
                  {ENTITIES[activeEntity].name}
                </h2>
                <p className="text-xs font-mono text-brand-muted mt-2 tracking-wider">
                  {ENTITIES[activeEntity].subtitle}
                </p>
              </div>
              <span className="text-xs font-mono text-brand-green px-3 py-1 border border-brand-green/20 rounded self-start whitespace-nowrap">
                {ENTITIES[activeEntity].status}
              </span>
            </div>

            <p className="text-brand-muted leading-relaxed mb-8 max-w-3xl">
              {ENTITIES[activeEntity].description}
            </p>

            <div>
              <p className="text-xs font-mono text-brand-muted/60 uppercase tracking-wider mb-3">
                {ENTITIES[activeEntity].id === "cyw" ? "Principles" : "Capabilities"}
              </p>
              <div className="grid md:grid-cols-2 gap-2">
                {ENTITIES[activeEntity].capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="flex items-center gap-2 text-sm text-brand-light/80"
                  >
                    <span className={`w-1 h-1 rounded-full ${ENTITIES[activeEntity].color} bg-current`} />
                    {cap}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Entity Quick Tabs */}
          <div className="grid grid-cols-5 gap-2 mt-6">
            {ENTITIES.map((entity, i) => (
              <button
                key={entity.id}
                onClick={() => setActiveEntity(i)}
                className={`py-3 px-2 text-xs font-mono text-center rounded transition-all duration-200 ${
                  i === activeEntity
                    ? `${entity.borderColor} border ${entity.color} bg-brand-surface`
                    : "text-brand-muted/50 border border-transparent hover:border-white/5 hover:text-brand-muted"
                }`}
              >
                {entity.name.length > 12
                  ? entity.name.split(" ").map((w) => w[0]).join("")
                  : entity.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* The Breathing Network */}
      <section id="network" className="py-20 px-6 bg-brand-surface/50 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-light">
            THE BREATHING NETWORK
          </h2>
          <p className="text-xs font-mono text-brand-accent mb-10 tracking-wider">
            PULSE RATE: 6.0s // RHYTHM: SYNCHRONIZED // STATUS: STABLE
          </p>

          {/* Breathing Visualization */}
          <div className="relative py-16">
            <div className="flex justify-center items-center gap-6 md:gap-10">
              {ENTITIES.map((entity, i) => (
                <div
                  key={entity.id}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className={`w-4 h-4 md:w-5 md:h-5 rounded-full ${entity.color} bg-current animate-breathe`}
                    style={{ animationDelay: `${i * 0.4}s` }}
                  />
                  <span className="text-brand-muted/40 text-[10px] font-mono hidden md:block">
                    {entity.id.toUpperCase().replace("-", " ").slice(0, 6)}
                  </span>
                </div>
              ))}
            </div>
            {/* Connecting line */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent animate-pulse-line" />
          </div>

          <p className="text-brand-muted leading-relaxed max-w-2xl mx-auto mt-4">
            Contruil operates as a living system&mdash;each component
            synchronized to a shared rhythm, each entity breathing in concert
            with the whole. This is infrastructure that adapts, intelligence
            that evolves, and architecture that responds to pressure without
            fracture.
          </p>
          <p className="text-brand-light/80 mt-6 italic">
            The network inhales complexity. It exhales clarity.
          </p>
        </div>
      </section>

      {/* Production Zones */}
      <section id="zones" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-brand-light">
              PRODUCTION ZONES
            </h2>
            <p className="text-xs font-mono text-brand-muted tracking-wider">
              THREE OPERATIONAL DOMAINS // INFINITE APPLICATIONS
            </p>
          </div>

          <div className="space-y-6">
            {ZONES.map((zone) => (
              <div
                key={zone.id}
                className={`p-8 rounded-lg border ${zone.borderColor} bg-brand-surface/60 hover:bg-brand-surface transition-colors duration-300`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <p className={`text-xs font-mono ${zone.textColor} tracking-wider mb-1`}>
                      {zone.label}
                    </p>
                    <h3 className="text-xl font-bold text-brand-light">
                      {zone.name}
                    </h3>
                  </div>
                  <div className="flex gap-4 text-xs font-mono text-brand-muted">
                    <span>INTEGRITY: {zone.integrity}</span>
                    <span className="text-brand-muted/30">|</span>
                    <span>OUTPUT: {zone.output}</span>
                  </div>
                </div>

                <p className="text-brand-muted leading-relaxed mb-6 max-w-3xl">
                  {zone.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {zone.outputs.map((output) => (
                    <span
                      key={output}
                      className={`text-xs px-3 py-1 rounded border ${zone.borderColor} ${zone.textColor} font-mono`}
                    >
                      {output}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initialize Connection */}
      <section
        id="connect"
        className="py-20 px-6 bg-brand-surface/50 border-t border-white/5"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-brand-light">
            INITIALIZE CONNECTION PROTOCOL
          </h2>
          <p className="text-xs font-mono text-brand-accent mb-8 tracking-wider">
            READY TO INTEGRATE WITH THE NETWORK?
          </p>
          <p className="text-brand-muted leading-relaxed mb-10">
            Contruil operates at the intersection of art, technology, and
            security. Whether you&apos;re seeking strategic partnership, technical
            collaboration, or simply want to connect with the
            ecosystem&mdash;the protocol is simple. Reach out. State your
            intent. Initialize.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:timothy@contruil.com"
              className="px-8 py-3 bg-brand-accent text-brand-dark font-mono text-sm font-semibold rounded hover:bg-brand-accent/90 transition-colors tracking-wider"
            >
              INITIATE CONTACT
            </a>
            <a
              href="https://contruil.com"
              className="px-8 py-3 border border-brand-accent/30 text-brand-accent font-mono text-sm rounded hover:bg-brand-accent/10 transition-colors tracking-wider"
            >
              ACCESS CONTRUIL.COM
            </a>
          </div>
        </div>
      </section>

      {/* IP Section */}
      <section className="py-12 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono text-brand-muted leading-relaxed">
            Certain orchestration and governance mechanisms in the CYW
            architecture are the subject of a pending U.S. patent application.
          </p>
          <p className="text-xs font-mono text-brand-muted mt-2">
            <span className="text-brand-light">
              U.S. Provisional Patent Application No. 63/980,310
            </span>{" "}
            &mdash; Filed February 11, 2026 &mdash;{" "}
            <span className="text-brand-green">Patent Pending</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5 bg-brand-dark">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <p className="text-xs font-mono text-brand-muted">
              &copy; 2026 Contruil LLC. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-brand-muted/60">
              <a href="#entities" className="hover:text-brand-light transition-colors">
                Virgil
              </a>
              <a href="#entities" className="hover:text-brand-light transition-colors">
                Fly Wheels
              </a>
              <a href="#entities" className="hover:text-brand-light transition-colors">
                Sovereign Survival
              </a>
              <a href="#entities" className="hover:text-brand-light transition-colors">
                CRSB
              </a>
              <a href="#entities" className="hover:text-brand-light transition-colors">
                CYW
              </a>
            </div>
            <div className="flex gap-4 text-xs font-mono text-brand-muted/60">
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

          {/* System Status Footer */}
          <div className="text-center text-[10px] font-mono text-brand-muted/30 pt-4 border-t border-white/5">
            SYSTEM VERSION: 1.0.0 &nbsp;|&nbsp; NETWORK STATUS:{" "}
            <span className="text-brand-green/50">ONLINE</span> &nbsp;|&nbsp;
            U.S. PATENT PENDING (63/980,310)
          </div>
        </div>
      </footer>
    </main>
  );
}
