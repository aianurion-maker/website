'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleStartProjectClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== '/contact') return;

    e.preventDefault();
    setOpen(false);
    const el = document.getElementById('contact-form');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-30 border-b transition-all ${
        scrolled
          ? 'border-zinc-200 bg-white/90 backdrop-blur-lg shadow-sm'
          : 'border-transparent bg-white/90 backdrop-blur-lg'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/ai-logo.png" alt="Anurional AI logo" width={40} height={40} />
          <span className="font-display text-lg font-semibold tracking-tight">
            Anurional <span className="text-cyan-400">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#334155] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-cyan-400"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#contact-form"
            onClick={handleStartProjectClick}
            className="rounded-full border border-cyan-500/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-500 transition hover:bg-cyan-500 hover:text-white"
          >
            Start a Project
          </Link>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-full border border-zinc-200 p-1.5 text-[#040D1E] md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 top-full mt-2 origin-top rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-xl md:hidden"
            >
              <div className="flex flex-col gap-1 text-sm text-[#334155]">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2 py-1.5 transition hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact#contact-form"
                  onClick={(e) => {
                    handleStartProjectClick(e);
                    setOpen(false);
                  }}
                  className="mt-2 inline-flex items-center justify-center rounded-full border border-cyan-500/80 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300 transition hover:bg-cyan-500 hover:text-navy-950"
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}


