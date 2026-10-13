import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { profile } from "@/data/profile";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: `${profile.name} | Personal Site`,
  description: profile.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="glow min-h-screen font-body antialiased">
        <Navbar />
        <main className="mx-auto max-w-5xl px-5 pb-24 pt-28">{children}</main>
        <footer className="pb-10 text-center text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind.
        </footer>
      </body>
    </html>
  );
}