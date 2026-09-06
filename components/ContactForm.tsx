"use client";

import { FormEvent, useState } from "react";
import { createEngagementEmail } from "../lib/contact";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const draft = createEngagementEmail({
      name: String(data.get("name") ?? ""),
      organization: String(data.get("organization") ?? ""),
      email: String(data.get("email") ?? ""),
      responsibility: String(data.get("responsibility") ?? ""),
      operation: String(data.get("operation") ?? ""),
    });
    window.location.href = draft;
    setStatus(
      "Your email app should open with a draft. Review it and send when ready. Nothing has been sent by this website. If no app opens, use the email address below.",
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
      <p className="form-disclosure">
        Prepare a brief introduction. This opens a draft in your email app for
        you to review and send.
      </p>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="organization">Organization</label>
          <input
            id="organization"
            name="organization"
            autoComplete="organization"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="email">Work email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="responsibility">Area of responsibility</label>
          <select
            id="responsibility"
            name="responsibility"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option>Operations</option>
            <option>Programs</option>
            <option>Technology or data</option>
            <option>Transformation</option>
            <option>Executive leadership</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="operation">Operation or problem</label>
        <textarea
          id="operation"
          name="operation"
          required
          minLength={20}
          placeholder="Briefly describe the operation, its current constraints, and where coordination is breaking down."
        />
      </div>
      <div className="form-actions">
        <button className="button button-primary" type="submit">
          Prepare email introduction <span aria-hidden="true">↗</span>
        </button>
        <p className="form-status" role="status" aria-live="polite">
          {status}
        </p>
      </div>
      <p className="form-fallback">
        Prefer to write directly?{" "}
        <a href="mailto:contact@ioacorporation.com">Email IOA</a>. Keep your
        introduction brief and leave out confidential information.
      </p>
    </form>
  );
}
