import Image from 'next/image';
import FadeInSection from '../../components/FadeInSection';
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
      <div className="grid gap-10 md:grid-cols-[1.1fr_1.1fr] md:items-start">
        <FadeInSection>
          <section className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Contact
            </p>
            <h1 className="font-display text-3xl font-semibold text-zinc-50 sm:text-4xl md:text-5xl">
              Let&apos;s Build Something.
            </h1>
            <p className="text-sm text-zinc-400">
              Fill out the form or drop us a line directly at{' '}
              <a
                href="mailto:mailus@anurional.com"
                className="text-cyan-300 hover:text-cyan-200"
              >
                mailus@anurional.com
              </a>
              .
            </p>
            <div className="space-y-1 text-sm text-zinc-400">
              <p>Email: mailus@anurional.com</p>
              <p>Phone: 8105326859</p>
              <p>Response time: We typically respond within 24 hours.</p>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-navy-900/60">
              <Image
                src="/contact-trust-partnership.jpg.png"
                alt="Trust and partnership"
                width={1100}
                height={720}
                className="h-44 w-full object-cover opacity-95"
              />
            </div>
          </section>
        </FadeInSection>

        <div id="contact-form" className="scroll-mt-28">
          <FadeInSection delay={0.05}>
            <ContactForm />
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}


