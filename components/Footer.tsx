import Link from 'next/link';
import { LinkedinIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 bg-navy-950/60">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20">
                <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Anurion <span className="text-cyan-400">AI</span>
              </span>
            </div>
            <p className="max-w-xs text-sm text-zinc-400">
              Your end-to-end AI technology partner.
            </p>
            <p className="text-xs text-zinc-500">
              © 2026 Anurion AI. All rights reserved.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Navigation
            </h3>
            <div className="flex flex-col gap-1 text-zinc-400">
              <Link href="/" className="hover:text-cyan-400">
                Home
              </Link>
              <Link href="/services" className="hover:text-cyan-400">
                Services
              </Link>
              <Link href="/process" className="hover:text-cyan-400">
                Process
              </Link>
              <Link href="/about" className="hover:text-cyan-400">
                About
              </Link>
              <Link href="/contact" className="hover:text-cyan-400">
                Contact
              </Link>
              <Link href="/privacy" className="hover:text-cyan-400">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Services
            </h3>
            <div className="flex flex-col gap-1 text-zinc-400">
              <span>Ideation</span>
              <span>Web Dev</span>
              <span>NLP Solutions</span>
              <span>AI Integration</span>
              <span>Design</span>
              <span>Deployment</span>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Contact
            </h3>
            <div className="flex flex-col gap-1 text-zinc-400">
              <a href="mailto:mailus@anurional.com" className="hover:text-cyan-400">
                mailus@anurional.com
              </a>
              <a
                href="https://anurional.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                anurional.com
              </a>
              <div className="mt-2 flex gap-3 text-zinc-400">
                <a
                  href="https://www.linkedin.com/company/anurion-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-cyan-400"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 bg-navy-950/80">
        <div className="mx-auto max-w-6xl px-4 py-3 text-center text-xs text-zinc-500 md:px-6 lg:px-8">
          Built with AI. Delivered with care.
        </div>
      </div>
    </footer>
  );
}


