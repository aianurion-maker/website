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
  title: "Anurional AI — End-to-End AI Technology Partner",
  description:
    "Anurional AI builds AI-native products — LLMs, NLP systems, AI agents, and the web experiences around them.",
  metadataBase: new URL("https://anurional.com"),
  openGraph: {
    title: "Anurional AI",
    description: "Your end-to-end AI partner for LLMs, NLP, agents, and MLOps.",
    url: "https://anurional.com",
    siteName: "Anurional AI",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurional AI",
    description: "From model training to launch — Anurional AI builds it all.",
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
      <body className="relative bg-white text-[#334155] antialiased font-body">
        <div className="fixed inset-0 -z-20 bg-gradient-radial from-cyan-600/5 via-[#F8F9FA] to-[#F1F5F9]" />
        <div className="grid-lines pointer-events-none fixed inset-0 -z-10 opacity-60" />
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
