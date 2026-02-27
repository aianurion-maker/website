import FadeInSection from '../../components/FadeInSection';
import Link from 'next/link';

const phases = [
  {
    title: 'Phase 1 — Discovery',
    body: 'We dive deep into your goals, users, and constraints. If you don’t have an idea yet, we run a structured ideation session to find the right one.',
  },
  {
    title: 'Phase 2 — Planning & Architecture',
    body: 'We map out the product blueprint: tech stack, timelines, wireframes, and feature scope. You approve before we write a single line of code.',
  },
  {
    title: 'Phase 3 — Design',
    body: 'High-fidelity UI/UX designs delivered in Figma. Two rounds of revisions included.',
  },
  {
    title: 'Phase 4 — Development',
    body: 'Agile sprints, demos, and transparent progress updates. AI-accelerated development means faster timelines without cutting corners.',
  },
  {
    title: 'Phase 5 — Testing & QA',
    body: 'Rigorous testing across devices, browsers, and edge cases. Security audits where required.',
  },
  {
    title: 'Phase 6 — Deployment',
    body: 'We deploy to production, configure domains, set up monitoring, and hand over all credentials.',
  },
  {
    title: 'Phase 7 — Support & Growth',
    body: 'Optional retainer for maintenance, feature additions, and scaling.',
  },
];

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
      <FadeInSection>
        <header className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Process
          </p>
          <h1 className="font-display text-3xl font-semibold text-zinc-50 sm:text-4xl md:text-5xl">
            How Anurion AI Works
          </h1>
          <p className="text-sm text-zinc-400">
            A clear, collaborative process designed for speed and quality.
          </p>
        </header>
      </FadeInSection>

      <section className="mt-12">
        <div className="relative border-l border-white/10 pl-6 md:pl-0">
          <div className="hidden h-full w-px bg-gradient-to-b from-cyan-500/70 via-cyan-500/10 to-transparent md:block md:ml-[50%]" />
          <div className="space-y-8 md:space-y-10">
            {phases.map((phase, index) => {
              const isLeft = index % 2 === 0;
              return (
                <FadeInSection key={phase.title} delay={0.05 * index}>
                  <div className="relative md:grid md:grid-cols-2 md:items-start md:gap-10">
                    <div
                      className={`hidden md:block ${
                        isLeft ? 'order-1' : 'order-2'
                      }`}
                    />
                    <div
                      className={`relative md:col-span-1 ${
                        isLeft ? 'md:order-2 md:text-left' : 'md:order-1 md:text-right'
                      }`}
                    >
                      <div
                        className={`absolute -left-9 top-1.5 hidden h-3 w-3 rounded-full border-2 border-navy-950 bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)] md:block ${
                          isLeft ? 'md:-left-[calc(50%+0.38rem)]' : 'md:left-[calc(50%-0.62rem)]'
                        }`}
                      />
                      <div className="inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                        {`Step ${index + 1}`}
                      </div>
                      <h2 className="mt-3 font-display text-lg font-semibold text-zinc-50 md:text-xl">
                        {phase.title}
                      </h2>
                      <p className="mt-2 text-sm text-zinc-400">{phase.body}</p>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      <FadeInSection delay={0.1}>
        <section className="mt-14 text-center">
          <p className="text-sm text-zinc-400">
            Clear. Collaborative. Committed. We stay aligned from first call to
            production launch.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy-950 transition hover:bg-cyan-400"
          >
            Start the Process → /contact
          </Link>
        </section>
      </FadeInSection>
    </div>
  );
}


