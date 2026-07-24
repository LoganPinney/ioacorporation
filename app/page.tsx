import Image from "next/image";
import { ContactForm } from "../components/ContactForm";
import { Header } from "../components/Header";

const capabilities = [
  {
    title: "Operational architecture",
    copy: "Design operating models, decision structures and workflows that align people, technology and accountability.",
    services: ["Operating model design", "Process and responsibility mapping", "Exception and decision architecture"],
  },
  {
    title: "Data and information systems",
    copy: "Establish authoritative records and connected information systems that support reliable enterprise decisions.",
    services: ["Data and information architecture", "Internal tools and interfaces", "Workflow automation and integration"],
  },
  {
    title: "Governance and implementation",
    copy: "Translate architecture into durable systems with clear ownership, controlled change and practical adoption.",
    services: ["Governance frameworks", "Implementation leadership", "Documentation and operational transfer"],
  },
];

const engagements = [
  {
    title: "Complex operations",
    copy: "Multi-team, multi-region and high-consequence work that has outgrown informal coordination.",
  },
  {
    title: "Operational transformation",
    copy: "Programs requiring new systems, clearer accountability and a controlled transition from legacy processes.",
  },
  {
    title: "Enterprise implementation",
    copy: "Operational architecture carried through to working tools, integrations, governance and adoption.",
  },
];

const approach = [
  ["Discover", "Understand how the operation actually works, including hidden dependencies and informal workarounds."],
  ["Architect", "Define the operating model, information structure, control points and implementation requirements."],
  ["Implement", "Build and integrate the systems, tools and governance mechanisms the operation requires."],
  ["Transfer", "Establish ownership, documentation and a maintainable operating state."],
];

const outcomes = [
  "Clear operational accountability",
  "Authoritative information",
  "Reduced coordination overhead",
  "Controlled risk and exceptions",
  "Scalable internal systems",
  "Durable organizational knowledge",
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
    "A Canadian enterprise systems consultancy that designs and implements integrated operational systems for complex organizations.",
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <section className="hero" id="overview" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow">Integrated Operations Architecture</p>
            <h1 id="hero-heading">Integrated systems for complex operations.</h1>
            <p className="hero-intro">
              IOA Corporation designs the operational architecture, data structures and internal systems that allow complex organizations to coordinate work, control risk and scale with confidence.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href="#contact">
                Discuss an engagement <span aria-hidden="true">→</span>
              </a>
              <a className="text-link" href="#capabilities">
                View capabilities <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/ioa-architecture-hero.jpg"
              alt="Architectural plans, a glass structural model and drafting instruments"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </section>

        <div className="principles" aria-label="IOA operating model">
          <span>Architecture</span><i aria-hidden="true" />
          <span>Implementation</span><i aria-hidden="true" />
          <span>Governance</span>
        </div>

        <section className="capabilities section-shell" id="capabilities" aria-labelledby="capabilities-heading">
          <div className="section-intro">
            <div>
              <p className="section-label">What we do</p>
              <h2 id="capabilities-heading">From operational complexity to institutional clarity.</h2>
            </div>
            <p>
              IOA works across the full operating system—not isolated technologies or process fragments. Architecture, implementation and governance are designed as one engagement.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability" key={capability.title}>
                <span className="accent-rule" aria-hidden="true" />
                <h3>{capability.title}</h3>
                <p>{capability.copy}</p>
                <ul>
                  {capability.services.map((service) => <li key={service}>{service}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="engagements" aria-labelledby="engagements-heading">
          <div className="section-shell">
            <div className="section-intro section-intro-light">
              <div>
                <p className="section-label">Where we engage</p>
                <h2 id="engagements-heading">Built for consequential operational work.</h2>
              </div>
              <p>
                IOA is brought in when coordination has become difficult, operational risk is increasing, or the organization needs a system that will withstand scale.
              </p>
            </div>
            <div className="engagement-grid">
              {engagements.map((engagement) => (
                <article key={engagement.title}>
                  <h3>{engagement.title}</h3>
                  <p>{engagement.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach section-shell" id="approach" aria-labelledby="approach-heading">
          <div className="section-intro">
            <div>
              <p className="section-label">How we work</p>
              <h2 id="approach-heading">Architecture before automation.</h2>
            </div>
            <p>
              IOA begins with the operation itself. Technology is selected only after the responsibilities, decisions, information and controls are understood.
            </p>
          </div>
          <ol className="approach-list">
            {approach.map(([title, copy], index) => (
              <li key={title}>
                <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="outcomes section-shell" aria-labelledby="outcomes-heading">
          <div className="outcomes-copy">
            <p className="section-label">Operational outcomes</p>
            <h2 id="outcomes-heading">Systems that remain clear under pressure.</h2>
            <p>
              The objective is not more technology. It is an operation that can be understood, controlled, maintained and extended.
            </p>
          </div>
          <ul>
            {outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
          </ul>
        </section>

        <section className="company section-shell" id="company" aria-labelledby="company-heading">
          <div className="company-heading">
            <p className="section-label">The company</p>
            <h2 id="company-heading">Technical depth. Operational judgment. Institutional discipline.</h2>
          </div>
          <div className="company-copy">
            <p>
              Integrated Operations Architecture Inc. is a Canadian corporation that designs and implements operational systems for complex organizations.
            </p>
            <p>
              IOA combines technical architecture, operational analysis, implementation and governance in one delivery model. Software, databases, automations and interfaces are implementation mechanisms—not the product itself.
            </p>
            <p>
              Client work is frequently confidential. We communicate capability without exposing protected operations, systems or information.
            </p>
          </div>
          <dl className="company-facts">
            <div><dt>Legal name</dt><dd>Integrated Operations Architecture Inc.</dd></div>
            <div><dt>Public brand</dt><dd>IOA Corporation</dd></div>
            <div><dt>Operating model</dt><dd>Architecture · Implementation · Governance</dd></div>
          </dl>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-heading">
          <div className="contact-inner section-shell">
            <div className="contact-intro">
              <p className="section-label">Contact</p>
              <h2 id="contact-heading">Discuss an engagement.</h2>
              <p>
                Share the operating context, where coordination is breaking down and what the organization needs the system to support.
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
      <footer className="site-footer">
        <div className="section-shell">
          <span className="footer-brand">IOA Corporation</span>
          <p>Integrated Operations Architecture Inc. · Canada</p>
          <a href="#overview">Back to top ↑</a>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
    </>
  );
}
