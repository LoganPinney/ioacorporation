import { ContactPanel } from "../components/ContactPanel";
import { CONTACT_EMAIL, CONTACT_HREF } from "../lib/company";
import { Header } from "../components/Header";
import { AnimatedFigure } from "../components/AnimatedFigure";
import { EnterpriseSystems } from "../components/EnterpriseSystems";

const capabilities = [
  {
    title: "Operational architecture",
    copy: "Give complex work a clear structure. Align people, processes and technology around how the operation needs to run.",
    services: [
      "Operating model design",
      "Process and responsibility mapping",
      "Decision and exception architecture",
    ],
  },
  {
    title: "Data & information systems",
    copy: "Connect the information your teams depend on. Build authoritative records, practical tools and dependable workflows.",
    services: [
      "Data and information architecture",
      "Internal tools and interfaces",
      "Automation and systems integration",
    ],
  },
  {
    title: "Governance & implementation",
    copy: "Carry the architecture into everyday work. Establish ownership, introduce controlled change and make the system maintainable.",
    services: [
      "Governance frameworks",
      "Implementation leadership",
      "Documentation and operational transfer",
    ],
  },
];
const steps = [
  [
    "Discover",
    "Understand the real operation.",
    "Map how work moves, where decisions happen and which dependencies are hidden in informal workarounds.",
  ],
  [
    "Architect",
    "Design the whole system.",
    "Define responsibilities, information structures, control points and the requirements for implementation.",
  ],
  [
    "Implement",
    "Make the architecture work.",
    "Build and connect the tools, workflows and governance mechanisms that the operation requires.",
  ],
  [
    "Transfer",
    "Leave a durable capability.",
    "Establish clear ownership, practical documentation and a maintainable operating state.",
  ],
];

function OperatingModel() {
  return (
    <AnimatedFigure className="operating-model" label="Fig. 01">
      <div className="model-caption">
        <span>
          <i /> THE INTEGRATED OPERATING MODEL
        </span>
        <span>FIG. 01</span>
      </div>
      <svg
        viewBox="0 0 600 450"
        role="img"
        aria-labelledby="model-title model-desc"
      >
        <title id="model-title">
          One operating system, three connected layers
        </title>
        <desc id="model-desc">
          Governance provides ownership and control. Information connects
          records and decisions. Operations connects people and workflows. IOA
          integrates all three.
        </desc>
        <defs>
          <pattern
            id="grid"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 30 0 L 0 0 0 30"
              fill="none"
              stroke="#263746"
              strokeWidth=".5"
            />
          </pattern>
        </defs>
        <rect width="600" height="450" fill="url(#grid)" />
        <g className="model-connections" stroke="#81968d" strokeWidth="1" strokeDasharray="4 6">
          <path d="M95 119V304 M310 33V218 M505 118V303 M290 211V396" />
        </g>
        <g className="model-layer model-layer-operations">
          <path
            d="M95 304 310 218 505 303 290 396Z"
            fill="#243b46"
            stroke="#738e93"
          />
          <path
            d="M95 304v13l195 92 215-93v-13l-215 93Z"
            fill="#172d39"
            stroke="#738e93"
          />
          <path
            d="m140 305 165-66 155 64-166 71Z"
            fill="none"
            stroke="#738e93"
            strokeDasharray="3 5"
          />
          <text
            x="294"
            y="328"
            textAnchor="middle"
            fill="#e9f1ee"
            fontSize="18"
          >
            OPERATIONS
          </text>
          <text
            x="294"
            y="351"
            textAnchor="middle"
            fill="#a9b9be"
            fontSize="12"
          >
            PEOPLE + WORKFLOWS
          </text>
        </g>
        <g className="model-layer model-layer-information">
          <path
            d="M95 212 310 126 505 211 290 304Z"
            fill="#314b50"
            stroke="#a0b3aa"
          />
          <path
            d="M95 212v13l195 92 215-93v-13l-215 93Z"
            fill="#233d43"
            stroke="#a0b3aa"
          />
          <path
            d="m140 213 165-66 155 64-166 71Z"
            fill="none"
            stroke="#879d97"
            strokeDasharray="3 5"
          />
          <text
            x="294"
            y="236"
            textAnchor="middle"
            fill="#f1f6ef"
            fontSize="18"
          >
            INFORMATION
          </text>
          <text
            x="294"
            y="259"
            textAnchor="middle"
            fill="#c0d0c8"
            fontSize="12"
          >
            RECORDS + DECISIONS
          </text>
        </g>
        <g className="model-layer model-layer-governance">
          <path
            d="M95 120 310 34 505 119 290 212Z"
            fill="#d6eea8"
            stroke="#e8ffc3"
          />
          <path
            d="M95 120v13l195 92 215-93v-13l-215 93Z"
            fill="#a8c67d"
            stroke="#d6eea8"
          />
          <path
            d="m140 121 165-66 155 64-166 71Z"
            fill="none"
            stroke="#748b56"
            strokeDasharray="3 5"
          />
          <text
            x="294"
            y="119"
            textAnchor="middle"
            fill="#17291f"
            fontSize="18"
          >
            GOVERNANCE
          </text>
          <text
            x="294"
            y="142"
            textAnchor="middle"
            fill="#405333"
            fontSize="12"
          >
            OWNERSHIP + CONTROL
          </text>
        </g>
        <g className="model-nodes" fill="#d6eea8">
          <circle cx="95" cy="120" r="4" />
          <circle cx="505" cy="119" r="4" />
          <circle cx="290" cy="396" r="4" />
        </g>
      </svg>
      <div className="model-bottom">
        <span>
          Designed together.
          <br />
          <strong>Built to work as one.</strong>
        </span>
        <span className="model-cross" aria-hidden="true">
          ↗
        </span>
      </div>
    </AnimatedFigure>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <section
          className="hero section-shell"
          id="overview"
          aria-labelledby="hero-heading"
        >
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="square" /> CLARITY BY DESIGN
            </p>
            <h1 id="hero-heading">
              Bring structure
              <br />
              to complex
              <br />
              <span>operations.</span>
            </h1>
            <p className="hero-intro">
              We connect people, data and workflows so approvals move, records
              stay consistent and teams know who owns the next step.
            </p>
            <a className="button button-primary" href="#contact">
              Discuss an engagement <span aria-hidden="true">↗</span>
            </a>
            <p className="hero-footnote">
              Independent advisory. Integrated delivery.
            </p>
          </div>
          <OperatingModel />
        </section>
        <div className="principles section-shell">
          <span>One connected operation.</span>
          <div>
            <span>Architecture</span>
            <i aria-hidden="true">/</i>
            <span>Implementation</span>
            <i aria-hidden="true">/</i>
            <span>Governance</span>
          </div>
          <a href="#capabilities" aria-label="Explore our capabilities">
            ↓
          </a>
        </div>
        <section
          className="capabilities section-shell section-space"
          id="capabilities"
          aria-labelledby="capabilities-heading"
        >
          <div className="section-intro">
            <p className="section-label">01 / CAPABILITIES</p>
            <div>
              <h2 id="capabilities-heading">
                The whole operation.
                <br />
                <span>Working together.</span>
              </h2>
              <p>
                Processes, information and accountability are connected. We
                bring them into one coherent system, from the initial
                architecture through implementation.
              </p>
            </div>
          </div>
          <div className="capability-grid">
            {capabilities.map((item, index) => (
              <article className="capability" key={item.title}>
                <div className="card-index">
                  <span>0{index + 1}</span>
                  <span aria-hidden="true">{["⌘", "⊞", "↗"][index]}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <ul>
                  {item.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section className="engagements" aria-labelledby="engagements-heading">
          <div className="section-shell section-space">
            <div className="section-intro">
              <p className="section-label">02 / WHERE WE ENGAGE</p>
              <div>
                <h2 id="engagements-heading">
                  When complexity
                  <br />
                  becomes consequential.
                </h2>
                <p>
                  When coordination gets harder, risk increases or informal
                  systems reach their limits, the operation needs a stronger
                  foundation.
                </p>
              </div>
            </div>
            <div className="engagement-grid">
              <article>
                <span className="small-index">01 — COORDINATION</span>
                <h3>Complex operations</h3>
                <p>
                  Approvals stall between teams, handoffs depend on a few
                  people, and no one has a clear view of what happens next.
                </p>
              </article>
              <article>
                <span className="small-index">02 — CHANGE</span>
                <h3>Operational transformation</h3>
                <p>
                  Duplicate records, disconnected tools and manual reporting
                  make it difficult to introduce a new system or way of working.
                </p>
              </article>
              <article>
                <span className="small-index">03 — DELIVERY</span>
                <h3>Enterprise implementation</h3>
                <p>
                  A new tool needs more than configuration: clear ownership,
                  connected workflows, exception handling and team adoption.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section
          className="approach section-shell section-space"
          id="approach"
          aria-labelledby="approach-heading"
        >
          <div className="section-intro">
            <p className="section-label">03 / OUR APPROACH</p>
            <div>
              <h2 id="approach-heading">
                Architecture
                <br />
                <span>before automation.</span>
              </h2>
              <p>
                We begin with the operation itself. Map the people, data and
                decisions, then design how digital systems orchestrate the work.
              </p>
            </div>
          </div>
          <div className="approach-layout">
            <AnimatedFigure
              as="figure"
              label="Fig. 02"
              className="orchestration-diagram"
            >
              <figcaption>
                <span>DIGITAL ORCHESTRATION</span>
                <span>FIG. 02</span>
              </figcaption>
              <div className="flow-inputs">
                <span>Requests</span>
                <span>Events</span>
                <span>Changes</span>
              </div>
              <div className="flow-arrow" aria-hidden="true">
                ↓
              </div>
              <div className="flow-core">
                <span>ORCHESTRATION LAYER</span>
                <strong>
                  The right work.
                  <br />
                  The right next step.
                </strong>
                <p>Rules · Ownership · Controls</p>
              </div>
              <div className="flow-arrow" aria-hidden="true">
                ↓
              </div>
              <div className="flow-outputs">
                <div>
                  <span aria-hidden="true">↳</span>
                  <strong>People</strong>
                  <p>Decisions & approvals</p>
                </div>
                <div>
                  <span aria-hidden="true">↳</span>
                  <strong>Systems</strong>
                  <p>Workflows & integrations</p>
                </div>
              </div>
              <div className="flow-record">
                <span aria-hidden="true">↻</span>
                <div>
                  <strong>One shared operational record</strong>
                  <p>Outcomes inform the next decision.</p>
                </div>
              </div>
            </AnimatedFigure>
            <ol className="approach-list">
              {steps.map(([title, lead, copy], index) => (
                <li key={title}>
                  <span className="step-number">0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>
                      <strong>{lead}</strong> {copy}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <EnterpriseSystems />
        <section
          className="first-engagement section-shell section-space"
          id="first-engagement"
          aria-labelledby="first-engagement-heading"
        >
          <div className="section-intro">
            <p className="section-label">START HERE / INITIAL ENGAGEMENT</p>
            <div>
              <h2 id="first-engagement-heading">
                Start with one operation.<br /><span>Leave with a clear plan.</span>
              </h2>
              <p>
                Begin with an operational diagnostic focused on one workflow,
                team or coordination problem. Agree the scope, deliverables,
                timing and fees before work begins.
              </p>
            </div>
          </div>
          <div className="diagnostic-grid">
            <article>
              <span className="small-index">01 / FOCUS</span>
              <h3>Understand the real work</h3>
              <p>
                Review how requests, information and decisions move through the
                operation. Identify delays, duplicate effort and unclear ownership.
              </p>
            </article>
            <article>
              <span className="small-index">02 / DELIVERABLES</span>
              <h3>A practical decision package</h3>
              <ul>
                <li>A map of the current workflow and responsibilities</li>
                <li>A prioritized view of gaps, dependencies and risks</li>
                <li>A proposed operating model and implementation roadmap</li>
              </ul>
            </article>
            <article>
              <span className="small-index">03 / YOUR INVOLVEMENT</span>
              <h3>Built with your team</h3>
              <p>
                Nominate an operational lead, involve the people who do the work,
                and share relevant process documents or sample records where appropriate.
              </p>
            </article>
          </div>
          <div className="diagnostic-next">
            <p>
              <strong>Decide what comes next.</strong> Review the findings together,
              then choose whether your team implements the plan or scopes further
              delivery with IOA. Implementation is a separate decision.
            </p>
            <a className="button button-primary" href="#contact">
              Discuss a diagnostic <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
        <section
          className="outcomes section-shell"
          aria-labelledby="outcomes-heading"
        >
          <div>
            <p className="section-label">DESIGN OBJECTIVES</p>
            <h2 id="outcomes-heading">
              Clarity that holds
              <br />
              under pressure.
            </h2>
          </div>
          <ul>
            {[
              "Clear operational accountability",
              "Authoritative information",
              "Less coordination overhead",
              "Controlled risk and exceptions",
              "Scalable internal systems",
              "Knowledge that stays with your team",
            ].map((outcome, index) => (
              <li key={outcome}>
                <span>0{index + 1}</span>
                {outcome}
                <span aria-hidden="true">↗</span>
              </li>
            ))}
          </ul>
        </section>
        <section
          className="company section-shell section-space"
          id="company"
          aria-labelledby="company-heading"
        >
          <p className="section-label">04 / THE COMPANY</p>
          <div className="company-body">
            <h2 id="company-heading">
              Technical depth.
              <br />
              Operational judgment.
              <br />
              <span>One delivery model.</span>
            </h2>
            <div className="company-copy">
              <p>
                Integrated Operations Advisory Inc. is a Canadian corporation
                that advises on and implements operational systems for complex
                organizations.
              </p>
              <p>
                We bring technical architecture, operational analysis,
                implementation and governance together. Every tool and workflow
                serves the wider operation.
              </p>
              <p className="confidentiality">
                <span aria-hidden="true">↳</span> Selected engagements and
                implementation details are confidential. We describe our
                capabilities and methodology while protecting the operations,
                systems and information entrusted to us.
              </p>
            </div>
          </div>
          <div className="company-facts">
            <span>INTEGRATED OPERATIONS ADVISORY INC.</span>
            <span>INDEPENDENT ADVISORY & IMPLEMENTATION</span>
            <span>BASED IN CANADA ↗</span>
          </div>
        </section>
        <section
          className="contact"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className="contact-inner section-shell section-space">
            <div className="contact-intro">
              <p className="section-label">05 / START A CONVERSATION</p>
              <h2 id="contact-heading">
                What needs to
                <br />
                <span>work better?</span>
              </h2>
              <p>
                Tell us about the operation, where coordination is breaking down
                and what the organization needs to support next.
              </p>
              <div className="contact-note">
                <span>CORPORATE CONTACT</span>
                <a href={CONTACT_HREF}>
                  {CONTACT_EMAIL} ↗
                </a>
              </div>
            </div>
            <ContactPanel />
          </div>
        </section>
      </main>
      <footer className="site-footer section-shell">
        <div className="footer-top">
          <a
            href="#overview"
            className="footer-brand"
            aria-label="IOA, back to top"
          >
            IOA
          </a>
          <p>
            Structure for complexity.
            <br />
            Clarity for what comes next.
          </p>
          <a className="back-top" href="#overview">
            Back to top ↑
          </a>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Integrated Operations Advisory Inc.
          </span>
          <span>Architecture. Implementation. Governance.</span>
          <span>Canada</span>
        </div>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Integrated Operations Advisory Inc.",
            alternateName: "Integrated Operations Advisory",
            url: "https://ioacorporation.com",
            email: CONTACT_EMAIL,
            areaServed: "Canada",
            description:
              "Integrated operational systems, data architecture and governance for complex organizations.",
          }),
        }}
      />
    </>
  );
}
