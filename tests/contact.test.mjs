import test from "node:test";
import assert from "node:assert/strict";
import { createEngagementEmail } from "../lib/contact.ts";

const details = {
  name: " Alex Chen ",
  organization: "R&D + Operations",
  email: "alex+ioa@example.com",
  responsibility: "Operations",
  operation: "Connect approvals & reporting.\nKeep records in sync.",
};

test("email draft preserves special characters and all introduction fields", () => {
  const draft = new URL(createEngagementEmail(details));
  assert.equal(draft.protocol, "mailto:");
  assert.equal(draft.pathname, "contact@ioacorporation.com");
  assert.equal(
    draft.searchParams.get("subject"),
    "Engagement enquiry — R&D + Operations",
  );
  assert.equal(
    draft.searchParams.get("body"),
    "Name: Alex Chen\nOrganization: R&D + Operations\nWork email: alex+ioa@example.com\nArea of responsibility: Operations\n\nOperation or problem:\nConnect approvals & reporting.\nKeep records in sync.",
  );
  assert.deepEqual([...draft.searchParams.keys()], ["subject", "body"]);
});

test("user content cannot add recipients or mail headers", () => {
  const draft = new URL(
    createEngagementEmail({
      ...details,
      organization: "Company\r\nBcc: unwanted@example.com&cc=other@example.com",
      operation: "Unicode: é 日本語 — 100% & ? #",
    }),
  );
  assert.equal(draft.pathname, "contact@ioacorporation.com");
  assert.equal(draft.searchParams.has("cc"), false);
  assert.equal(draft.searchParams.has("bcc"), false);
  assert.equal(/[\r\n]/.test(draft.searchParams.get("subject")), false);
  assert.ok(
    draft.searchParams.get("body").includes("Unicode: é 日本語 — 100% & ? #"),
  );
});
