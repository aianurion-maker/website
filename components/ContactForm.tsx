'use client';

import { useState } from 'react';
import type React from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const response = await fetch('https://formspree.io/f/mlgwvebz', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    if (response.ok) {
      setSubmitted(true);
    } else {
      alert('Something went wrong. Please email us at mailus@anurional.com');
    }
  };

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-lg shadow-black/10 sm:p-8">
      {submitted ? (
        <div className="space-y-2 text-sm text-[#334155]">
          <h3 className="font-display text-lg font-semibold text-cyan-400">
            Message sent.
          </h3>
          <p className="text-[#64748B]">
            Thanks for reaching out. We typically respond within 24 hours.
          </p>
        </div>
      ) : (
        <form
          className="space-y-4 text-sm text-[#334155]"
          onSubmit={handleSubmit}
        >
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-xs font-medium text-[#64748B]">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-[#334155] outline-none ring-0 transition placeholder:text-[#94A3B8] focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/70"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-medium text-[#64748B]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-[#334155] outline-none ring-0 transition placeholder:text-[#94A3B8] focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/70"
              placeholder="you@company.com"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="company" className="text-xs font-medium text-[#64748B]">
              Company / Project Name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-[#334155] outline-none ring-0 transition placeholder:text-[#94A3B8] focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/70"
              placeholder="Optional"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="project" className="text-xs font-medium text-[#64748B]">
              Tell us about your project
            </label>
            <textarea
              id="project"
              name="project"
              required
              rows={5}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-[#334155] outline-none ring-0 transition placeholder:text-[#94A3B8] focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/70"
              placeholder="What are you looking to build? Any goals, timelines, or constraints we should know?"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="source" className="text-xs font-medium text-[#64748B]">
              How did you hear about us?
            </label>
            <select
              id="source"
              name="source"
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-[#334155] outline-none ring-0 transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/70"
              defaultValue=""
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Google">Google</option>
              <option value="Referral">Referral</option>
              <option value="Social Media">Social Media</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-cyan-500 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy-950 transition hover:bg-cyan-400"
          >
            Send Message →
          </button>
        </form>
      )}
    </div>
  );
}


