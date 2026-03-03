import FadeInSection from '../../components/FadeInSection';
import AIOrbit from '../../components/AIOrbit';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 lg:px-0">
      <FadeInSection>
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            About
          </p>
          <h1 className="font-display text-3xl font-semibold text-zinc-50 sm:text-4xl md:text-5xl">
            We Are Anurion AI
          </h1>
          <p className="text-sm text-zinc-400">
            A team obsessed with building AI products that matter. Specializing in LLMs,
            NLP, model training, and end-to-end AI product development.
          </p>
        </header>
      </FadeInSection>

      <FadeInSection delay={0.08}>
        <div className="mt-8">
          <AIOrbit className="h-44" />
        </div>
      </FadeInSection>

      <FadeInSection delay={0.15}>
        <section className="mt-10 space-y-5 text-sm leading-relaxed text-zinc-300">
          <p>
            Anurion AI was founded on one core belief: powerful AI should be accessible
            to every business, not just the ones with huge ML teams and research
            budgets. Whether you&apos;re a startup with an AI idea or an established
            company that wants to embed intelligence into your existing product — we
            bring the same rigor, creativity, and technical depth to every engagement.
          </p>
          <p>
            We specialize in the full AI stack — from data preparation and model
            training to LLM fine-tuning, NLP pipelines, AI agents, RAG systems, and
            production deployment. We build the AI, and we build the web experience
            around it. One team, total ownership.
          </p>
          <p>
            Our approach is grounded in modern AI research but pragmatic in execution.
            We know when to fine-tune a foundation model, when to build from scratch,
            and when to use a smart API call — and that judgment is what separates us.
          </p>
        </section>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <section className="mt-10 rounded-3xl border border-white/5 bg-navy-900/40 p-6 md:p-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Mission
          </h2>
          <p className="mt-3 text-lg text-zinc-100">
            To turn every client&apos;s AI vision into a working, scalable product — from
            the first conversation to the last deployment.
          </p>
        </section>
      </FadeInSection>

      <FadeInSection delay={0.25}>
        <section className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Values
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="space-y-2 rounded-2xl border border-white/5 bg-navy-900/40 p-4">
              <div className="text-xl">🎯</div>
              <h3 className="font-display text-base font-semibold text-zinc-50">
                Clarity
              </h3>
              <p className="text-sm text-zinc-400">
                We communicate transparently. No jargon, no surprises.
              </p>
            </div>
            <div className="space-y-2 rounded-2xl border border-white/5 bg-navy-900/40 p-4">
              <div className="text-xl">⚡</div>
              <h3 className="font-display text-base font-semibold text-zinc-50">
                Speed
              </h3>
              <p className="text-sm text-zinc-400">
                AI-accelerated workflows mean faster delivery without compromise.
              </p>
            </div>
            <div className="space-y-2 rounded-2xl border border-white/5 bg-navy-900/40 p-4">
              <div className="text-xl">🤝</div>
              <h3 className="font-display text-base font-semibold text-zinc-50">
                Partnership
              </h3>
              <p className="text-sm text-zinc-400">
                We treat every project like it&apos;s our own.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}

