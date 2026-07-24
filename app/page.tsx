import { ContactForm } from "../components/ContactForm";
import { Header } from "../components/Header";
import { SystemDiagram } from "../components/SystemDiagram";

const problems = [
  "Critical workflows distributed across spreadsheets",
  "Conflicting records and sources of truth",
  "Approvals and reporting assembled by hand",
  "Processes dependent on individual memory",
  "Departmental tools that do not communicate",
  "Operational risk hidden inside informal procedures",
];

const capabilities = [
  {
    number: "01",
    title: "Operational architecture",
    copy: "Map how work, responsibility, decisions, constraints, and failure points connect across the real operation.",
  },
  {
    number: "02",
    title: "Data and information architecture",
    copy: "Establish structured records, ownership, validation, relationships, and authoritative sources of truth.",
  },
  {
    number: "03",
    title: "Workflow and automation systems",
    copy: "Design reliable routing, approvals, notifications, synchronization, and exception handling.",
  },
  {
    number: "04",
    title: "Internal tools and interfaces",
    copy: "Build purpose-designed applications, dashboards, forms, administrative tools, and operational interfaces.",
  },
  {
    number: "05",
    title: "Governance and operational control",
    copy: "Define permissions, accountability, auditability, documentation, change control, and system ownership.",
  },
  {
    number: "06",
    title: "Integration and implementation",
    copy: "Connect platforms, migrate processes, deploy systems, train teams, and transition operations into a maintainable state.",
  },
];

const approach = [
  ["Discover", "Observe the real operation, including informal workarounds and hidden dependencies."],
  ["Model", "Make roles, records, decisions, constraints, and failure paths visible."],
  ["Design", "Define the operational, data, workflow, and governance architecture."],
  ["Build", "Implement the tools, integrations, automations, and control points required."],
  ["Validate", "Test the system against real conditions, exceptions, and operational pressure."],
  ["Transfer", "Document ownership, govern change, and establish a maintainable operating state."],
];

const outcomes = [
  "Reduced manual coordination",
  "Clearer accountability",
  "Reliable data lineage",
  "Fewer duplicated records",
  "Controlled exceptions",
  "Shorter reporting cycles",
  "Improved auditability",
  "Lower key-person dependency",
  "Capacity for more volume, regions, teams, and complexity",
];

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Integrated Operations Architecture Inc.",
  alternateName: "IOA Corporation",
  url: "https://ioacorporation.com",
  email: "contact@ioacorporation.com",
  areaServed: "Canada",
  description:
    "A Canadian enterprise systems consultancy that designs integrated operational systems for complex organizations.",
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <section className="hero section-shell" id="overview" aria-labelledby="hero-heading">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="signal-dot" aria-hidden="true" />
                Integrated Operations Architecture Inc.
              </p>
              <h1 id="hero-heading">Architecture for complex operations.</h1>
              <p className="hero-intro">
                IOA Corporation converts fragmented processes, data, tools, and responsibilities into integrated operational systems built to scale.
              </p>
              <div className="hero-actions" aria-label="Primary actions">
                <a className="button button-primary" href="#contact">
                  Discuss an operation
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#capabilities">
                  Review capabilities <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <div className="hero-aside" aria-label="IOA operating principle">
              <span className="aside-index">IOA / 001</span>
              <p>Operational clarity converted into durable system architecture.</p>
              <dl>
                <div>
                  <dt>Focus</dt>
                  <dd>Enterprise operations</dd>
                </div>
                <div>
                  <dt>Method</dt>
                  <dd>Architecture before automation</dd>
                </div>
                <div>
                  <dt>Output</dt>
                  <dd>Governed operating systems</dd>
                </div>
              </dl>
            </div>
          </div>
          <SystemDiagram />
        </section>

        <section className="problem section-shell" aria-labelledby="problem-heading">
          <div className="section-heading split-heading">
            <div>
              <p className="section-label">01 / The operating condition</p>
              <h2 id="problem-heading">Complexity exposes weak architecture.</h2>
            </div>
            <p>
              Important operations rarely fail all at once. They accumulate coordination debt until scale, turnover, or pressure makes the gaps visible.
            </p>
          </div>
          <div className="problem-grid">
            {problems.map((problem, index) => (
              <article className="problem-item" key={problem}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{problem}</p>
              </article>
            ))}
          </div>
          <p className="problem-conclusion">
            IOA is engaged when the operation has outgrown spreadsheets, disconnected tools, informal processes, and manual coordination.
          </p>
        </section>

        <section className="capabilities section-shell" id="capabilities" aria-labelledby="capabilities-heading">
          <div className="section-heading split-heading">
            <div>
              <p className="section-label">02 / Integrated capability</p>
              <h2 id="capabilities-heading">One operating system, not disconnected services.</h2>
            </div>
            <p>
              Each layer is designed together. Architecture determines what should be built, how it connects, and how the organization will govern it.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.number}>
                <span>{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="approach section-shell" id="approach" aria-labelledby="approach-heading">
          <div className="section-heading split-heading">
            <div>
              <p className="section-label">03 / Engagement model</p>
              <h2 id="approach-heading">Understand the operation before changing it.</h2>
            </div>
            <p>
              IOA does not automate a broken process without first understanding and restructuring the system beneath it.
            </p>
          </div>
          <ol className="approach-list">
            {approach.map(([title, copy], index) => (
              <li key={title}>
                <span className="step-number">0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="outcomes section-shell" aria-labelledby="outcomes-heading">
          <div className="outcomes-panel">
            <div>
              <p className="section-label">04 / Operational outcomes</p>
              <h2 id="outcomes-heading">Systems that remain clear under pressure.</h2>
              <p>
                The goal is not more technology. The goal is an operation that can be understood, controlled, maintained, and extended.
              </p>
            </div>
            <ul>
              {outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="about section-shell" id="about" aria-labelledby="about-heading">
          <div className="about-grid">
            <div>
              <p className="section-label">05 / About IOA</p>
              <h2 id="about-heading">Built from enterprise implementation work.</h2>
            </div>
            <div className="about-copy">
              <p>
                Integrated Operations Architecture Inc. is a Canadian corporation that designs operational systems for complex organizations.
              </p>
              <p>
                IOA combines technical architecture, operational analysis, implementation, and governance in one delivery model. Software, automation, databases, interfaces, and integrations are selected as implementation mechanisms, not treated as the product itself.
              </p>
              <p>
                Client work is often confidential. IOA communicates capability without exposing protected operations, systems, or information.
              </p>
            </div>
          </div>
          <div className="about-facts" aria-label="Company facts">
            <div><span>Legal name</span><strong>Integrated Operations Architecture Inc.</strong></div>
            <div><span>Public brand</span><strong>IOA Corporation</strong></div>
            <div><span>Operating model</span><strong>Architecture · Implementation · Governance</strong></div>
          </div>
        </section>

        <section className="contact section-shell" id="contact" aria-labelledby="contact-heading">
          <div className="contact-grid">
            <div className="contact-intro">
              <p className="section-label">06 / Contact</p>
              <h2 id="contact-heading">Discuss an operation.</h2>
              <p>
                Share the operating context, where coordination is breaking down, and what the system needs to support.
              </p>
              <div className="contact-note">
                <span>Corporate contact</span>
                <a href="mailto:contact@ioacorporation.com">contact@ioacorporation.com</a>
                <small>Provisional address pending final confirmation.</small>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="site-footer section-shell">
        <div className="footer-brand">
          <span className="brand-mark brand-mark-small" aria-hidden="true"><i /><i /><i /><i /></span>
          <span>IOA Corporation</span>
        </div>
        <p>Integrated Operations Architecture Inc. · Canada</p>
        <a href="#overview">Back to overview ↑</a>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
    </>
  );
}
