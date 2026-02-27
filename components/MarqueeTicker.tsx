import FadeInSection from './FadeInSection';

const ITEMS =
  'Strategy · Ideation · UI/UX Design · Web Development · App Development · AI Integration · Automation · API Development · Cloud Deployment · Ongoing Support · LLM Development · Model Fine-Tuning · NLP · RAG Pipelines · AI Agents · MLOps · Web Development · UI/UX Design ·';

export default function MarqueeTicker() {
  return (
    <FadeInSection>
      <section className="border-y border-white/5 bg-navy-900/60">
        <div className="overflow-hidden">
          <div className="marquee-inner flex min-w-max gap-8 py-3 text-xs font-medium uppercase tracking-[0.22em] text-zinc-400">
            <span>{ITEMS}</span>
            <span aria-hidden="true">{ITEMS}</span>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}


