import Link from 'next/link';
import { LinkedinIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#0f172a] bg-[#040D1E]">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20">
                <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-white">
                Anurional <span className="text-cyan-400">AI</span>
              </span>
            </div>
            <p className="max-w-xs text-sm text-[#94A3B8]">
              Your end-to-end AI technology partner.
            </p>
            <p className="text-xs text-[#94A3B8]">
              © 2026 Anurional AI. All rights reserved.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Navigation
            </h3>
            <div className="flex flex-col gap-1 text-white">
              <Link href="/" className="hover:text-[#00B4D8]">
                Home
              </Link>
              <Link href="/services" className="hover:text-[#00B4D8]">
                Services
              </Link>
              <Link href="/process" className="hover:text-[#00B4D8]">
                Process
              </Link>
              <Link href="/about" className="hover:text-[#00B4D8]">
                About
              </Link>
              <Link href="/contact" className="hover:text-[#00B4D8]">
                Contact
              </Link>
              <Link href="/privacy" className="hover:text-[#00B4D8]">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Services
            </h3>
            <div className="flex flex-col gap-1 text-[#94A3B8]">
              <span>Ideation</span>
              <span>Web Dev</span>
              <span>NLP Solutions</span>
              <span>AI Integration</span>
              <span>Design</span>
              <span>Deployment</span>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Contact
            </h3>
            <div className="flex flex-col gap-1 text-[#94A3B8]">
              <a
                href="mailto:mailus@anurional.com"
                className="text-white hover:text-[#00B4D8]"
              >
                mailus@anurional.com
              </a>
              <a
                href="tel:+918105326859"
                className="text-white hover:text-[#00B4D8]"
              >
                +91 81053 26859
              </a>
              <a
                href="https://anurional.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#00B4D8]"
              >
                anurional.com
              </a>
              <div className="mt-2 flex gap-3 text-white">
                <a
                  href="https://www.linkedin.com/company/anurion-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-[#00B4D8]"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#0f172a] bg-[#040D1E]">
        <div className="mx-auto max-w-6xl px-4 py-3 text-center text-xs text-[#94A3B8] md:px-6 lg:px-8">
          © 2026 Anurional AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


