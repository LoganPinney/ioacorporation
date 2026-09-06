export type EngagementDetails = {
  name: string;
  organization: string;
  email: string;
  responsibility: string;
  operation: string;
};

export function createEngagementEmail(details: EngagementDetails): string {
  const subject = `Engagement enquiry — ${details.organization.trim().replace(/[\r\n]+/g, " ")}`;
  const body = [
    `Name: ${details.name.trim()}`,
    `Organization: ${details.organization.trim()}`,
    `Work email: ${details.email.trim()}`,
    `Area of responsibility: ${details.responsibility.trim()}`,
    "",
    "Operation or problem:",
    details.operation.trim(),
  ].join("\n");
  return `mailto:contact@ioacorporation.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
