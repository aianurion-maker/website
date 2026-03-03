import FadeInSection from '../../components/FadeInSection';
import Image from 'next/image';

const imageLogic = '/services-llm-nlp.jpg.png';
const imageNlp = '/services-nlp.jpg.png';
const imageAgents = '/services-agents.jpg.png';
const imageIntegration = '/services-integration.jpg.png';
const imageWebUx = '/services-web-ux.jpg.png';
const imageUiUx = '/services-ui-ux-diff.jpg.png';
const imageMLOps = '/services-mlops.jpg.png';

const technologies = [
  'Python',
  'PyTorch',
  'TensorFlow',
  'HuggingFace',
  'LangChain',
  'OpenAI',
  'Next.js',
  'React',
  'Node.js',
  'FastAPI',
  'PostgreSQL',
  'MongoDB',
  'Pinecone',
  'Docker',
  'AWS',
  'Vercel',
  'Figma',
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
      <FadeInSection>
        <header className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Services
          </p>
          <h1 className="font-display text-3xl font-semibold text-zinc-50 sm:text-4xl md:text-5xl">
            AI. Built Right. From the Ground Up.
          </h1>
          <p className="text-sm text-zinc-400">
            We don&apos;t just use AI — we build it. Custom models, LLM pipelines, NLP
            systems, AI agents, and the web experiences around them.
          </p>
        </header>
      </FadeInSection>

      <div className="mt-12 space-y-12">
        <FadeInSection>
          <section className="space-y-4 rounded-3xl border border-white/5 bg-navy-900/40 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl">
                🧠
              </div>
              <h2 className="font-display text-xl font-semibold text-zinc-50 md:text-2xl">
                LLM Development
              </h2>
            </div>
            <div className="space-y-3 text-sm text-zinc-300">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950/40">
                <Image
                  src={imageLogic}
                  alt="Understanding and logic: language structured by machine intelligence"
                  width={1200}
                  height={720}
                  className="h-44 w-full object-cover opacity-95"
                />
              </div>
              <p>
                We design and fine-tune large language models for your specific domain —
                from customer support copilots to document reasoning engines.
              </p>
              <p>
                You bring the data and goals; we handle architecture, training, and a
                production-ready LLM endpoint.
              </p>
            </div>
            <div className="mt-4 grid gap-4 text-sm text-zinc-300 md:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Deliverables
                </h3>
                <ul className="mt-2 space-y-1 text-xs text-zinc-400">
                  <li>Custom LLM architecture and configuration</li>
                  <li>Fine-tuned model weights and artifacts</li>
                  <li>Inference API and serving endpoints</li>
                  <li>Evaluation benchmarks and reports</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Tools
                </h3>
                <p className="mt-2 text-xs text-zinc-400">
                  PyTorch, HuggingFace Transformers, LangChain, LlamaIndex, OpenAI API,
                  Ollama.
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection delay={0.05}>
          <section className="space-y-4 rounded-3xl border border-white/5 bg-navy-900/40 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl">
                🔬
              </div>
              <h2 className="font-display text-xl font-semibold text-zinc-50 md:text-2xl">
                Model Training &amp; Fine-Tuning
              </h2>
            </div>
            <div className="space-y-3 text-sm text-zinc-300">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950/40">
                <Image
                  src="/services-model-training.jpg.png"
                  alt="Model training dashboard with metrics and LoRA/QLoRA fine-tuning"
                  width={1200}
                  height={720}
                  className="h-44 w-full object-cover opacity-95"
                />
              </div>
              <p>
                We run the full training loop for you — data prep, experiments,
                fine-tuning, and evaluation.
              </p>
              <p>
                Parameter-efficient methods like LoRA/QLoRA keep compute costs sane
                while still hitting the accuracy you need.
              </p>
            </div>
            <div className="mt-4 grid gap-4 text-sm text-zinc-300 md:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Deliverables
                </h3>
                <ul className="mt-2 space-y-1 text-xs text-zinc-400">
                  <li>Trained model checkpoints</li>
                  <li>Training scripts and configuration files</li>
                  <li>Evaluation metrics and dashboards</li>
                  <li>Dataset documentation and versioning</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Tools
                </h3>
                <p className="mt-2 text-xs text-zinc-400">
                  PyTorch, TensorFlow, HuggingFace Trainer, Weights &amp; Biases,
                  LoRA/QLoRA, Axolotl.
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <section className="space-y-4 rounded-3xl border border-white/5 bg-navy-900/40 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl">
                💬
              </div>
              <h2 className="font-display text-xl font-semibold text-zinc-50 md:text-2xl">
                NLP Solutions
              </h2>
            </div>
            <div className="space-y-3 text-sm text-zinc-300">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950/40">
                <Image
                  src={imageNlp}
                  alt="NLP and LLM systems turning language into structured insight"
                  width={1200}
                  height={720}
                  className="h-44 w-full object-cover opacity-95"
                />
              </div>
              <p>
                We turn messy language data — tickets, chats, documents — into
                structured insight with NLP and LLM pipelines.
              </p>
              <p>
                Classification, sentiment, extraction, and summarisation are all
                tailored to your domain and deployed behind simple APIs.
              </p>
            </div>
            <div className="mt-4 grid gap-4 text-sm text-zinc-300 md:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Deliverables
                </h3>
                <ul className="mt-2 space-y-1 text-xs text-zinc-400">
                  <li>End-to-end NLP pipelines</li>
                  <li>REST or gRPC APIs for integration</li>
                  <li>Annotated datasets and labeling guidelines</li>
                  <li>Model and evaluation reports</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Tools
                </h3>
                <p className="mt-2 text-xs text-zinc-400">
                  spaCy, HuggingFace, NLTK, Transformers, FastAPI, LangChain.
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection delay={0.15}>
          <section className="space-y-4 rounded-3xl border border-white/5 bg-navy-900/40 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl">
                🤖
              </div>
              <h2 className="font-display text-xl font-semibold text-zinc-50 md:text-2xl">
                AI Agents &amp; Automation
              </h2>
            </div>
            <div className="space-y-3 text-sm text-zinc-300">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950/40">
                <Image
                  src={imageAgents}
                  alt="Autonomous AI agent executing a multi-step plan across tools"
                  width={1200}
                  height={720}
                  className="h-44 w-full object-cover opacity-95"
                />
              </div>
              <p>
                We build autonomous AI agents that plan, reason, and execute tasks across
                your tools.
              </p>
              <p>
                Guardrails, permissions, and monitoring are baked in so they stay
                reliable in production.
              </p>
            </div>
            <div className="mt-4 grid gap-4 text-sm text-zinc-300 md:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Deliverables
                </h3>
                <ul className="mt-2 space-y-1 text-xs text-zinc-400">
                  <li>Agent architecture and orchestration flows</li>
                  <li>Tool and API integrations</li>
                  <li>Automated workflows and playbooks</li>
                  <li>Monitoring and audit dashboards</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Tools
                </h3>
                <p className="mt-2 text-xs text-zinc-400">
                  LangChain, LangGraph, AutoGen, CrewAI, n8n, Zapier, Python.
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <section className="space-y-4 rounded-3xl border border-white/5 bg-navy-900/40 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl">
                🔗
              </div>
              <h2 className="font-display text-xl font-semibold text-zinc-50 md:text-2xl">
                AI Integration &amp; RAG Pipelines
              </h2>
            </div>
            <div className="space-y-3 text-sm text-zinc-300">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950/40">
                <Image
                  src={imageIntegration}
                  alt="Tablet accessing a knowledge base via RAG and vector search"
                  width={1200}
                  height={720}
                  className="h-44 w-full object-cover opacity-95"
                />
              </div>
              <p>
                Already have a product? We plug in RAG pipelines, smart search, and LLM
                APIs without a full rebuild.
              </p>
              <p>
                Your app stays grounded in your data, with performance and costs tracked
                so you can scale safely.
              </p>
            </div>
            <div className="mt-4 grid gap-4 text-sm text-zinc-300 md:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Deliverables
                </h3>
                <ul className="mt-2 space-y-1 text-xs text-zinc-400">
                  <li>Production-ready RAG pipelines</li>
                  <li>Vector database setup and indexing</li>
                  <li>Embedding models and APIs</li>
                  <li>Integrated application endpoints</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Tools
                </h3>
                <p className="mt-2 text-xs text-zinc-400">
                  Pinecone, Weaviate, Chroma, pgvector, OpenAI, Cohere, LangChain.
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection delay={0.25}>
          <section className="space-y-4 rounded-3xl border border-white/5 bg-navy-900/40 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl">
                💻
              </div>
              <h2 className="font-display text-xl font-semibold text-zinc-50 md:text-2xl">
                Web Development
              </h2>
            </div>
            <div className="space-y-3 text-sm text-zinc-300">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950/40">
                <Image
                  src={imageWebUx}
                  alt="Web development and UI/UX design collaboration across dashboards and prototypes"
                  width={1200}
                  height={720}
                  className="h-44 w-full object-cover opacity-95"
                />
              </div>
              <p>
                We design and ship the web dashboards and interfaces that sit on top of
                your AI systems.
              </p>
              <p>
                Modern, fast, and accessible — built to evolve as your product grows.
              </p>
            </div>
            <div className="mt-4 grid gap-4 text-sm text-zinc-300 md:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Deliverables
                </h3>
                <ul className="mt-2 space-y-1 text-xs text-zinc-400">
                  <li>Full-stack web applications</li>
                  <li>Admin panels and internal tools</li>
                  <li>Analytics and monitoring dashboards</li>
                  <li>Robust API layers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Tools
                </h3>
                <p className="mt-2 text-xs text-zinc-400">
                  Next.js, React, Node.js, FastAPI, PostgreSQL, MongoDB.
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <section className="space-y-4 rounded-3xl border border-white/5 bg-navy-900/40 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl">
                🎨
              </div>
              <h2 className="font-display text-xl font-semibold text-zinc-50 md:text-2xl">
                UI/UX Design
              </h2>
            </div>
            <div className="space-y-3 text-sm text-zinc-300">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950/40">
                <Image
                  src={imageUiUx}
                  alt="Difference between UX and UI with design concepts"
                  width={1200}
                  height={720}
                  className="h-44 w-full object-cover opacity-95"
                />
              </div>
              <p>
                AI products fail when users can&apos;t understand them. We design
                interfaces that translate complex AI outputs into clear, intuitive
                experiences — with thoughtful information architecture, clean visual
                design, and user testing baked in.
              </p>
              <p>
                We collaborate closely with your stakeholders to align on journeys,
                states, and edge cases. The result: products that feel powerful without
                overwhelming people.
              </p>
              <p>
                Our design systems are built to scale — reusable components, clear
                tokens, and documentation that makes handoff smooth.
              </p>
            </div>
            <div className="mt-4 grid gap-4 text-sm text-zinc-300 md:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Deliverables
                </h3>
                <ul className="mt-2 space-y-1 text-xs text-zinc-400">
                  <li>Wireframes and user flows</li>
                  <li>High-fidelity Figma prototypes</li>
                  <li>Design systems and component libraries</li>
                  <li>Handoff specs and documentation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Tools
                </h3>
                <p className="mt-2 text-xs text-zinc-400">
                  Figma, FigJam, Framer, user testing frameworks.
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection delay={0.35}>
          <section className="space-y-4 rounded-3xl border border-white/5 bg-navy-900/40 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl">
                ☁️
              </div>
              <h2 className="font-display text-xl font-semibold text-zinc-50 md:text-2xl">
                Deployment &amp; MLOps
              </h2>
            </div>
            <div className="space-y-3 text-sm text-zinc-300">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950/40">
                <Image
                  src={imageMLOps}
                  alt="MLOps control room monitoring deployments and scaling"
                  width={1200}
                  height={720}
                  className="h-44 w-full object-cover opacity-95"
                />
              </div>
              <p>
                We productionise your models — serving, monitoring, and CI/CD included.
              </p>
              <p>
                You get clear dashboards and playbooks so your own team can run AI
                systems with confidence.
              </p>
            </div>
            <div className="mt-4 grid gap-4 text-sm text-zinc-300 md:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Deliverables
                </h3>
                <ul className="mt-2 space-y-1 text-xs text-zinc-400">
                  <li>Dockerized model servers</li>
                  <li>CI/CD pipelines for models and apps</li>
                  <li>Monitoring and alerting dashboards</li>
                  <li>Scaling and rollout configuration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Tools
                </h3>
                <p className="mt-2 text-xs text-zinc-400">
                  Docker, Kubernetes, AWS/GCP/Azure, MLflow, BentoML, FastAPI,
                  Prometheus, Grafana.
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>

      {/* Technologies grid */}
      <FadeInSection delay={0.1}>
        <section className="mt-14 space-y-6 rounded-3xl border border-white/5 bg-navy-900/40 p-6 md:p-8">
          <div className="space-y-2">
            <h2 className="font-display text-xl font-semibold text-zinc-50 md:text-2xl">
              Technologies We Use
            </h2>
            <p className="text-sm text-zinc-400">
              Modern, proven tools across AI, infrastructure, and product engineering.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/10 bg-navy-950/70 px-3 py-1 text-xs text-zinc-200"
              >
                {label}
              </span>
            ))}
          </div>
        </section>
      </FadeInSection>

      <FadeInSection delay={0.15}>
        <section className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy-950 transition hover:bg-cyan-400"
          >
            Ready to start? → Contact
          </a>
        </section>
      </FadeInSection>
    </div>
  );
}


