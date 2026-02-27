'use client';

import { useState } from 'react';

const FORMSPREE_ACTION = 'https://formspree.io/f/mlgwvebz';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rounded-2xl border border-white/5 bg-navy-900/50 p-6 shadow-lg shadow-black/40 sm:p-8">
      {submitted ? (
        <div className="space-y-2 text-sm text-zinc-200">
          <h3 className="font-display text-lg font-semibold text-cyan-400">
            Message sent.
          </h3>
          <p className="text-zinc-400">
            Thanks for reaching out. We typically respond within 24 hours.
          </p>
        </div>
      ) : (
        <form
          action={FORMSPREE_ACTION}
          method="POST"
          className="space-y-4 text-sm text-zinc-200"
          onSubmit={() => setSubmitted(true)}
        >
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-xs font-medium text-zinc-400">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-white/10 bg-navy-900/70 px-3 py-2 text-sm text-zinc-50 outline-none ring-0 transition placeholder:text-zinc-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/70"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-medium text-zinc-400">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-white/10 bg-navy-900/70 px-3 py-2 text-sm text-zinc-50 outline-none ring-0 transition placeholder:text-zinc-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/70"
              placeholder="you@company.com"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="company" className="text-xs font-medium text-zinc-400">
              Company / Project Name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full rounded-lg border border-white/10 bg-navy-900/70 px-3 py-2 text-sm text-zinc-50 outline-none ring-0 transition placeholder:text-zinc-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/70"
              placeholder="Optional"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="project" className="text-xs font-medium text-zinc-400">
              Tell us about your project
            </label>
            <textarea
              id="project"
              name="project"
              required
              rows={5}
              className="w-full rounded-lg border border-white/10 bg-navy-900/70 px-3 py-2 text-sm text-zinc-50 outline-none ring-0 transition placeholder:text-zinc-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/70"
              placeholder="What are you looking to build? Any goals, timelines, or constraints we should know?"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="source" className="text-xs font-medium text-zinc-400">
              How did you hear about us?
            </label>
            <select
              id="source"
              name="source"
              className="w-full rounded-lg border border-white/10 bg-navy-900/70 px-3 py-2 text-sm text-zinc-50 outline-none ring-0 transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/70"
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

          <p className="text-[0.7rem] text-zinc-500">
            This form is powered by Formspree. Replace the form ID in the code with
            your live endpoint before going to production.
          </p>
        </form>
      )}
    </div>
  );
}


