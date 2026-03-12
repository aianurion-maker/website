import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, CheckCircle2 } from 'lucide-react';
import FadeInSection from '../components/FadeInSection';
import MarqueeTicker from '../components/MarqueeTicker';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'LLM Development',
    description:
      'We build, fine-tune, and deploy large language models tailored to your domain and data.',
  },
  {
    title: 'Model Training & Fine-Tuning',
    description:
      'Custom model training pipelines — from dataset prep to evaluation and production deployment.',
  },
  {
    title: 'NLP Solutions',
    description:
      'Text classification, sentiment analysis, named entity recognition, summarization, and more.',
  },
  {
    title: 'AI Agents & Automation',
    description:
      'Autonomous AI agents and smart workflow automation that work while you sleep.',
  },
  {
    title: 'AI Integration',
    description:
      'Plug state-of-the-art AI into your existing product — APIs, RAG pipelines, vector databases.',
  },
  {
    title: 'Web Development',
    description:
      'Web products and interfaces built around your AI core — fast, scalable, production-ready.',
  },
  {
    title: 'UI/UX Design',
    description:
      'Interfaces that make complex AI capabilities feel simple and intuitive to end users.',
  },
  {
    title: 'Deployment & MLOps',
    description:
      'Model serving, monitoring, versioning, and scaling — we handle the full MLOps lifecycle.',
  },
];

const whyPoints = [
  'Deep AI expertise — LLMs, NLP, model training, RAG, agents',
  'No juggling between data scientists, developers, and designers',
  'Cost-efficient fine-tuning with LoRA/QLoRA — no massive GPU bills',
  'Transparent process with weekly demos and progress updates',
];

const heroWords = ['We', 'Build', 'What', 'You', 'Imagine.'];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,180,216,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(241,245,249,1),_rgba(248,250,252,1))]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
          <ArrowDown className="h-5 w-5 animate-bounce text-cyan-400/80" />
        </div>

        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-24 md:flex-row md:items-center md:px-6 lg:px-8">
          <FadeInSection>
            <div className="max-w-2xl space-y-8">
              <h1 className="font-display text-[2.8rem] leading-tight sm:text-[3.4rem] md:text-[4.2rem] lg:text-[5rem]">
                {heroWords.map((word, index) => (
                  <span
                    key={word + index}
                    className="inline-block pr-2 align-baseline hero-word"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    {word}
                  </span>
                ))}
              </h1>

              <p className="max-w-xl text-lg text-[#334155]">
                From raw idea to live product — Anurional AI is your complete AI-powered
                technology partner.
              </p>

              <p className="max-w-xl text-sm text-[#64748B]">
                No need for multiple vendors. We handle strategy, design, development,
                and deployment. Got an idea? We&apos;ll shape it. Got a brief?
                We&apos;ll ship it.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy-950 transition hover:bg-cyan-400"
                >
                  Let&apos;s Build Together
                </Link>
                <Link
                  href="/process"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#334155] transition hover:border-cyan-500/70 hover:bg-cyan-500/5 hover:text-cyan-600"
                >
                  See How We Work
                </Link>
              </div>

              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#64748B]">
                From model training to live product — your end-to-end AI development
                partner.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="relative mt-6 w-full max-w-sm md:mt-0 md:ml-auto">
              <div className="overflow-hidden rounded-3xl border border-cyan-500/30 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <Image
                  src="/hero-visionary-core.jpg.png"
                  alt="Abstract AI visualization representing ideas becoming products"
                  width={640}
                  height={640}
                  className="h-full w-full object-cover object-top scale-110"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent" />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Marquee */}
      <MarqueeTicker />

      {/* What we do */}
      <section className="mx-auto max-w-6xl px-4 py-24 md:px-6 lg:px-8">
        <FadeInSection>
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              What We Do
            </p>
            <h2 className="font-display text-2xl font-semibold text-[#040D1E] sm:text-3xl md:text-4xl">
              Everything. End to End.
            </h2>
            <p className="max-w-xl text-sm text-[#64748B]">
              You bring the vision — or even just a vague thought. We take it from
              there.
            </p>
          </div>
        </FadeInSection>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* How it works teaser */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8">
        <FadeInSection>
          <div className="relative pl-10">
            <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-cyan-400/40" />
            <div className="space-y-20">
              {[
                {
                  title: 'Share Your Vision',
                  description:
                    'Tell us your idea, problem, or goal. Even a rough thought works.',
                  imageSrc: '/process-share-vision.jpg.png',
                  imageAlt: 'Visualising ideas, problems, and goals on a digital canvas',
                },
                {
                  title: 'We Plan & Build',
                  description:
                    'Our team designs, develops, and integrates everything — soup to nuts.',
                  imageSrc: '/process-deep-work.jpg.png',
                  imageAlt: 'Deep work and collaboration',
                },
                {
                  title: 'You Launch & Grow',
                  description:
                    'We deploy your product and stay on as your tech partner.',
                  imageSrc: '/process-launch-scale.jpg.png',
                  imageAlt: 'Launch and scale',
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className={`relative flex flex-col gap-8 md:items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-4 top-8 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,180,216,0.6)]" />
                  <div className="w-full md:w-1/2">
                    <div className="overflow-hidden rounded-xl">
                      <Image
                        src={(step as { imageSrc: string }).imageSrc}
                        alt={(step as { imageAlt: string }).imageAlt}
                        width={1000}
                        height={650}
                        className="w-full rounded-xl object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-500">
                      STEP {index + 1}
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-bold text-[#040D1E] md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#64748B] md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/process"
                className="text-sm font-medium text-cyan-300 hover:text-cyan-200"
              >
                See full process →
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Why Anurional AI */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-24 md:px-6 lg:px-8">
        <FadeInSection>
          <div className="grid gap-10 md:grid-cols-[1.1fr_1.2fr] md:items-start">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Why Anurional AI
              </p>
              <h2 className="font-display text-2xl font-semibold text-[#040D1E] sm:text-3xl md:text-4xl">
                One Team. Total Ownership.
              </h2>
              <p className="text-sm text-[#64748B]">
                Specializing in LLMs, NLP, model training, and end-to-end AI product
                development.
              </p>
            </div>
            <div className="space-y-3">
              {whyPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-3"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" />
                  <p className="text-sm text-[#334155]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-24 mt-16 md:px-6 lg:px-8">
        <FadeInSection>
          <div className="space-y-6">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Testimonials
              </p>
              <h2 className="font-display text-2xl font-semibold text-[#040D1E] sm:text-3xl">
                What Clients Say
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  quote:
                    'Anurion AI took our half-formed idea and turned it into a production-ready AI product in weeks, not months.',
                  name: 'Alex Rivera',
                  company: 'Founder, Northline Labs',
                },
                {
                  quote:
                    'The team deeply understands both modern AI stacks and product engineering. We finally have one partner for everything.',
                  name: 'Priya Sharma',
                  company: 'Head of Product, LumenCore',
                },
                {
                  quote:
                    'From strategy to deployment, the process was transparent, fast, and thoughtfully executed.',
                  name: 'Daniel Lee',
                  company: 'CTO, Meridian Systems',
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex h-full flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5"
                >
                  <p className="text-sm text-[#334155]">&ldquo;{item.quote}&rdquo;</p>
                  <div className="mt-4 space-y-1 text-xs text-[#64748B]">
                    <div className="font-medium text-[#040D1E]">{item.name}</div>
                    <div>{item.company}</div>
                    <div className="flex gap-0.5 text-cyan-400">
                      {'★★★★★'.split('').map((star, index) => (
                        <span key={index}>{star}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 py-28 mt-16 md:px-6 lg:px-8">
        <FadeInSection>
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-[#F1F5F9] via-[#E2E8F0] to-[#F1F5F9] px-6 py-10 text-center md:px-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative space-y-4">
              <h2 className="font-display text-2xl font-semibold text-[#040D1E] sm:text-3xl">
                Got a project in mind?
              </h2>
              <p className="text-sm text-[#334155]">
                Whether it&apos;s a clear roadmap or just a napkin sketch — we&apos;d
                love to hear it.
              </p>
              <a
                href="mailto:mailus@anurional.com"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy-950 transition hover:bg-cyan-400"
              >
                Get In Touch →
          </a>
        </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}

