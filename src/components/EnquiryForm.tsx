"use client";

import { FormEvent, useState } from "react";
import { SITE } from "@/lib/site";

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const company = String(data.get("company") || "");
    const email = String(data.get("email") || "");
    const mobile = String(data.get("mobile") || "");
    const message = String(data.get("message") || "");
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Mobile: ${mobile}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      "Enquiry from website"
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <input
        name="name"
        required
        placeholder="Name*"
        aria-label="Name"
        className="w-full border border-[#ececec] bg-white px-3 py-2 text-sm outline-none focus:border-brand-navy"
      />
      <input
        name="company"
        placeholder="Company Name"
        aria-label="Company Name"
        className="w-full border border-[#ececec] bg-white px-3 py-2 text-sm outline-none focus:border-brand-navy"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email*"
        aria-label="Email"
        className="w-full border border-[#ececec] bg-white px-3 py-2 text-sm outline-none focus:border-brand-navy"
      />
      <input
        name="mobile"
        required
        placeholder="Mobile Number*"
        aria-label="Mobile Number"
        className="w-full border border-[#ececec] bg-white px-3 py-2 text-sm outline-none focus:border-brand-navy"
      />
      <textarea
        name="message"
        rows={4}
        placeholder="Message"
        aria-label="Message"
        className="w-full border border-[#ececec] bg-white px-3 py-2 text-sm outline-none focus:border-brand-navy"
      />
      <button
        type="submit"
        className="bg-brand-lime px-8 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white hover:bg-[#8E4E22]"
      >
        Submit
      </button>
      {sent && (
        <p className="text-sm text-brand-muted">
          Your email app should open with this enquiry. You can also call {SITE.phoneDisplay}.
        </p>
      )}
    </form>
  );
}
