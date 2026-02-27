import type { ReactNode } from 'react';
import FadeInSection from './FadeInSection';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  index = 0,
}: ServiceCardProps) {
  return (
    <FadeInSection delay={0.1 + index * 0.05}>
      <div className="group relative flex h-full flex-col rounded-2xl border border-white/5 bg-navy-900/40 p-5 transition hover:border-cyan-500/60 hover:bg-navy-800/40">
        <div className="absolute inset-y-4 left-0 w-0.5 rounded-r-full bg-gradient-to-b from-cyan-500/0 via-cyan-500/60 to-cyan-500/0 opacity-0 transition group-hover:opacity-100" />
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-lg">
            {icon}
          </div>
          <h3 className="font-display text-base font-semibold text-zinc-50">
            {title}
          </h3>
        </div>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </FadeInSection>
  );
}


