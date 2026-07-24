"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("Secure form delivery is not connected in this first draft. No information was sent or stored. Please use the provisional email shown beside the form.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
      <p className="form-disclosure">Draft contact channel: form delivery is not yet configured. This preview does not transmit or store submissions.</p>
      <div className="form-row">
        <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required /></div>
        <div className="field"><label htmlFor="organization">Organization</label><input id="organization" name="organization" autoComplete="organization" required /></div>
      </div>
      <div className="form-row">
        <div className="field"><label htmlFor="email">Work email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
        <div className="field">
          <label htmlFor="responsibility">Area of responsibility</label>
          <select id="responsibility" name="responsibility" required defaultValue="">
            <option value="" disabled>Select one</option><option>Operations</option><option>Programs</option><option>Technology or data</option><option>Transformation</option><option>Executive leadership</option><option>Other</option>
          </select>
        </div>
      </div>
      <div className="field"><label htmlFor="operation">Operation or problem</label><textarea id="operation" name="operation" required minLength={20} placeholder="Briefly describe the operation, its current constraints, and where coordination is breaking down." /></div>
      <label className="consent"><input type="checkbox" name="consent" required /><span>I understand this first-draft form is not connected and that no information will be transmitted or retained.</span></label>
      <div className="form-actions">
        <button className="button button-primary" type="submit">Start a discussion <span aria-hidden="true">↗</span></button>
        <p className="form-status" role="status" aria-live="polite">{status}</p>
      </div>
    </form>
  );
}
