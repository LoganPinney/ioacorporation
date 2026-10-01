"use client";

import { useState } from "react";
import { CONTACT_EMAIL, CONTACT_HREF } from "../lib/company";

export function ContactPanel() {
  const [status, setStatus] = useState("");

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setStatus("Email address copied. Paste it into your email app.");
    } catch {
      setStatus(`Copy is unavailable. Select and copy ${CONTACT_EMAIL}, or use the email link.`);
    }
  }

  return (
    <div className="contact-panel">
      <h3>A brief introduction is enough.</h3>
      <p>Tell us what needs to work better. You can start with:</p>
      <ul className="contact-prompts">
        <li>The operation or team you are responsible for</li>
        <li>Where approvals, information or handoffs get stuck</li>
        <li>What you need the operation to support next</li>
      </ul>
      <a className="button button-primary" href={CONTACT_HREF}>
        Email IOA <span aria-hidden="true">↗</span>
      </a>
      <div className="contact-address-row">
        <span>{CONTACT_EMAIL}</span>
        <button type="button" className="copy-address" onClick={copyAddress}>
          Copy email address
        </button>
      </div>
      <p className="contact-status" role="status" aria-live="polite">{status}</p>
      <p className="contact-disclosure">
        The email link opens your email app. You review and send the message
        yourself. If no app opens, copy the address and use your usual email
        service. Please leave out confidential information.
      </p>
    </div>
  );
}
