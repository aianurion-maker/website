import FadeInSection from '../../components/FadeInSection';

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 lg:px-0">
      <FadeInSection>
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Legal
          </p>
          <h1 className="font-display text-3xl font-semibold text-[#040D1E] sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#64748B]">
            This is a simple overview of how Anurional AI approaches privacy and data
            handling. Update this copy as you formalize your policies.
          </p>
        </header>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <section className="mt-8 space-y-4 text-sm leading-relaxed text-[#334155]">
          <p>
            We treat your data and your customers&apos; data with care. Any information
            you share with Anurional AI — through this website, email, or project
            collaboration — is used solely for the purpose of working together and
            improving our services.
          </p>
          <p>
            We do not sell your data to third parties. When we use third-party tools
            (such as hosting providers, analytics platforms, or form processors), we
            select vendors that align with modern security and privacy best practices.
          </p>
          <p>
            For production projects, we typically sign NDAs and data processing
            agreements as needed. We&apos;re happy to work with your legal or security
            team to align on requirements.
          </p>
          <p>
            If you have any questions about how we handle data, reach out at{' '}
            <a
              href="mailto:mailus@anurional.com"
              className="text-cyan-300 hover:text-cyan-200"
            >
              mailus@anurional.com
            </a>
            .
          </p>
        </section>
      </FadeInSection>
    </div>
  );
}




