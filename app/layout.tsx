import type { Metadata } from "next";
import "./globals.css";
import { Syne, DM_Sans } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Anurion AI — End-to-End AI Technology Partner",
  description:
    "Anurion AI builds AI-native products — LLMs, NLP systems, AI agents, and the web experiences around them.",
  metadataBase: new URL("https://anurional.com"),
  openGraph: {
    title: "Anurion AI",
    description: "Your end-to-end AI partner for LLMs, NLP, agents, and MLOps.",
    url: "https://anurional.com",
    siteName: "Anurion AI",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurion AI",
    description: "From model training to launch — Anurion AI builds it all.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-navy-950 text-zinc-100 antialiased font-body relative">
        <div className="fixed inset-0 -z-20 bg-gradient-radial from-cyan-600/10 via-navy-950 to-navy-950" />
        <div className="grid-lines pointer-events-none fixed inset-0 -z-10" />
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
