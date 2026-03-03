import FadeInSection from '../../components/FadeInSection';
import Link from 'next/link';
import {
  Search,
  LayoutTemplate,
  PenTool,
  Code2,
  CheckCircle2,
  Rocket,
  HeartHandshake,
} from 'lucide-react';

const phases = [
  {
    title: 'Phase 1 — Discovery',
    body: 'We dive deep into your goals, users, and constraints. If you don’t have an idea yet, we run a structured ideation workshop to find the right one.',
    step: '01',
    Icon: Search,
  },
  {
    title: 'Phase 2 — Planning & Architecture',
    body: 'We map out the blueprint: stack, timelines, and scope — you sign off before we write a single line of code.',
    step: '02',
    Icon: LayoutTemplate,
  },
  {
    title: 'Phase 3 — Design',
    body: 'High‑fidelity UI/UX in Figma that makes complex AI feel simple and intuitive.',
    step: '03',
    Icon: PenTool,
  },
  {
    title: 'Phase 4 — Development',
    body: 'Agile sprints, weekly demos, and AI‑accelerated engineering to ship fast without cutting corners.',
    step: '04',
    Icon: Code2,
  },
  {
    title: 'Phase 5 — Testing & QA',
    body: 'Rigorous testing across scenarios, devices, and edge cases — plus security reviews when needed.',
    step: '05',
    Icon: CheckCircle2,
  },
  {
    title: 'Phase 6 — Deployment',
    body: 'We deploy, wire up domains, observability, and on‑call workflows, then hand over cleanly.',
    step: '06',
    Icon: Rocket,
  },
  {
    title: 'Phase 7 — Support & Growth',
    body: 'Optional retainers for new features, optimisation, and scaling as your product grows.',
    step: '07',
    Icon: HeartHandshake,
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
        <div className="relative pl-6 md:pl-0">
          {/* Vertical dashed connector line */}
          <div className="pointer-events-none absolute left-3 top-0 h-full border-l border-dashed border-cyan-500/40 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-10">
            {phases.map((phase, index) => {
              const isLeft = index % 2 === 0;
              const Icon = phase.Icon;

              return (
                <FadeInSection key={phase.title} delay={0.05 * index}>
                  <div className="relative md:grid md:grid-cols-2 md:gap-10">
                    <div
                      className={`md:col-span-1 ${
                        isLeft ? 'md:col-start-1' : 'md:col-start-2 md:text-right'
                      }`}
                    >
                      <div
                        className={`relative ml-5 rounded-3xl border border-white/5 bg-navy-900/60 px-5 py-5 shadow-[0_0_24px_rgba(15,23,42,0.8)] transition hover:border-cyan-500/60 hover:bg-navy-800/60 md:ml-0 ${
                          isLeft ? 'md:mr-10' : 'md:ml-10'
                        } border-l-2 border-l-cyan-500`}
                      >
                        {/* Connector dot */}
                        <div
                          className={`absolute -left-7 top-7 flex h-3 w-3 items-center justify-center rounded-full bg-cyan-500 shadow-[0_0_14px_rgba(34,211,238,0.9)] md:-left-12 md:top-7 md:${isLeft ? '' : 'left-auto right-full'}`}
                        />

                        {/* Faded big step number */}
                        <div className="pointer-events-none absolute -right-1 top-1 text-5xl font-semibold tracking-tight text-cyan-500/10 md:-right-4 md:text-6xl">
                          {phase.step}
                        </div>

                        <div className="inline-flex items-center gap-2">
                          <span className="rounded-full bg-cyan-500 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-navy-950">
                            {`Step ${index + 1}`}
                          </span>
                          <span className="hidden text-[0.65rem] uppercase tracking-[0.18em] text-cyan-200 md:inline">
                            {phase.title.split('—')[0].trim()}
                          </span>
                        </div>

                        <div className="mt-3 flex items-start gap-3 md:gap-4">
                          <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className={`space-y-2 ${isLeft ? 'text-left' : 'md:text-right text-left'}`}>
                            <h2 className="font-display text-lg font-semibold text-zinc-50 md:text-xl">
                              {phase.title}
                            </h2>
                            <p className="text-sm text-zinc-400">{phase.body}</p>
                          </div>
                        </div>
                      </div>
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


