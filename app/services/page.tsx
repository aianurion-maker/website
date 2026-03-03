import FadeInSection from '../../components/FadeInSection';
import Image from 'next/image';

const imageLogic = '/services-llm-nlp.jpg';

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
                We design and build large language models from scratch or adapt existing
                foundation models (GPT, LLaMA, Mistral, Gemma) for your specific domain.
                Whether you need a customer support bot, a document reasoning engine, or
                a domain-specific copilot — we architect and deliver the full LLM
                pipeline.
              </p>
              <p>
                Our approach balances research-grade techniques with production
                constraints. We help you choose the right base model, design
                tokenization and context strategies, and optimize for latency and cost
                so your experience feels instant, not experimental.
              </p>
              <p>
                We also build evaluation harnesses to continuously benchmark your model
                against real-world scenarios, keeping it accurate as your product and
                users evolve.
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
              <p>
                Raw AI potential means nothing without the right training. We handle the
                complete ML pipeline — dataset curation, cleaning, augmentation,
                training runs, hyperparameter tuning, and rigorous evaluation.
              </p>
              <p>
                We design experiments that make trade-offs visible: accuracy vs.
                latency, performance vs. cost. Our pipelines are reproducible,
                documented, and ready for your in-house teams to extend.
              </p>
              <p>
                We specialize in parameter-efficient fine-tuning (LoRA, QLoRA) so you
                get powerful models without massive compute budgets, ideal for startups
                and teams that need to move fast.
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
                  src={imageLogic}
                  alt="NLP and LLM systems turning language into structured insight"
                  width={1200}
                  height={720}
                  className="h-44 w-full object-cover opacity-95"
                />
              </div>
              <p>
                Natural Language Processing is the backbone of intelligent
                applications. We build NLP pipelines for text classification, sentiment
                analysis, named entity recognition (NER), summarization, translation,
                question answering, and document intelligence — tailored to your data
                and language.
              </p>
              <p>
                Our systems are built for noisy, real-world text — support tickets,
                chats, logs, and documents. We design robust preprocessing,
                tokenization, and error-handling layers so your outputs stay reliable.
              </p>
              <p>
                Whether you&apos;re building internal analytics tools or
                customer-facing products, we ensure the NLP layer is explainable,
                measurable, and maintainable over time.
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
              <p>
                We build autonomous AI agents that can browse, reason, plan, and
                execute multi-step tasks. From customer service agents to internal ops
                automation — we design agentic systems that integrate with your tools
                and workflows.
              </p>
              <p>
                Our focus is reliability and guardrails. We define clear tools,
                permissions, and safety checks so agents stay aligned with your
                business rules and compliance requirements.
              </p>
              <p>
                We also connect agents to the systems you already use — CRMs, ticketing
                tools, spreadsheets, and internal APIs — so they create real leverage,
                not new silos.
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
              <p>
                Already have a product? We add AI superpowers to it. We specialize in
                Retrieval-Augmented Generation (RAG) pipelines, embedding-based search,
                and seamless LLM API integration — so your product becomes smarter
                without rebuilding from scratch.
              </p>
              <p>
                We design document ingestion, chunking, and embedding strategies that
                preserve context and minimize hallucinations. Your product stays fast,
                accurate, and grounded in your own data.
              </p>
              <p>
                We also handle observability — monitoring latency, costs, and answer
                quality — so you can confidently scale usage.
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
              <p>
                Every AI system needs a great interface. We build the web experiences
                around your AI core — dashboards, admin panels, and client-facing
                products — ensuring your users can actually access and benefit from the
                intelligence you&apos;ve built.
              </p>
              <p>
                We choose modern, battle-tested stacks that optimize for developer
                velocity and long-term maintainability. Performance, accessibility, and
                security come baked in.
              </p>
              <p>
                Our work doesn&apos;t stop at launch — we can stay on as a product
                partner to iterate, refine, and scale your experience as usage grows.
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
              <p>
                Shipping a model to production is a different beast than training one.
                We set up the full MLOps stack — model serving, versioning, A/B
                testing, monitoring for drift, auto-scaling, and CI/CD pipelines — so
                your AI stays reliable at scale.
              </p>
              <p>
                We design environments that are secure, observable, and cost-aware.
                That means right-sizing infrastructure and building dashboards that
                make behavior visible.
              </p>
              <p>
                Our goal is to leave you with an operations foundation your own teams
                can run confidently, not a black box.
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


