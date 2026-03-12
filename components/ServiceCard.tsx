import FadeInSection from './FadeInSection';

interface ServiceCardProps {
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({
  title,
  description,
  index = 0,
}: ServiceCardProps) {
  const sequence = String(index + 1).padStart(2, '0');

  return (
    <FadeInSection delay={0.1 + index * 0.05}>
      <div className="relative flex h-full flex-col rounded-2xl border border-gray-100 border-l-2 border-l-cyan-400 bg-white p-5 shadow-sm">
        <div className="mb-2 text-xs font-medium tracking-[0.2em] text-cyan-500">
          {sequence}
        </div>
        <h3 className="font-display text-base font-bold text-[#040D1E]">
          {title}
        </h3>
        <p className="mt-2 text-sm text-[#64748B]">{description}</p>
      </div>
    </FadeInSection>
  );
}


