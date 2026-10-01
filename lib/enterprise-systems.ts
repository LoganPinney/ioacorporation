export const enterpriseSystems = [
  {
    id: "architecture",
    label: "01 / STRUCTURE",
    title: "Operational architecture & workflow engineering",
    description:
      "Design how work moves across teams: responsibilities, handoffs, approvals, exceptions and the rules that connect them.",
    disciplines: ["Operating models", "Workflow engineering"],
  },
  {
    id: "delivery",
    label: "02 / EXECUTION",
    title: "Systems integration, internal tools & automation",
    description:
      "Connect applications and operational records. Build internal interfaces and automation around defined processes, ownership and controls.",
    disciplines: ["Systems integration", "Internal tools", "Automation"],
  },
  {
    id: "information",
    label: "03 / INFORMATION",
    title: "Data architecture & decision systems",
    description:
      "Define authoritative records, data relationships and validation. Structure the information, criteria and escalation paths that support operational decisions.",
    disciplines: ["Data architecture", "Decision systems"],
  },
  {
    id: "governance",
    label: "04 / CONTROL",
    title: "Governance & operational stewardship",
    description:
      "Establish accountability, permissions, change controls and review points. Carry documentation, maintainability and operational transfer into implementation.",
    disciplines: ["Governance", "Implementation & transfer"],
  },
] as const;

// Supply only verified content with explicit publication authorization.
// No client or project data is stored here before it is approved.
export type PublishedCaseStudy = {
  id: string;
  title: string;
  context: string;
  implementation: string;
  verifiedOutcomes?: readonly string[];
  publicationApproved: true;
};
