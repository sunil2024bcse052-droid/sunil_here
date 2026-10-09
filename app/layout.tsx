import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Fonts: one for headings, one for normal text
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

// This sets the browser tab title
export const metadata: Metadata = {
  title: "Sunil | Personal Site",
  description: "My profile, skills and writings.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen font-body antialiased">
        <Navbar />
        <main className="mx-auto max-w-5xl px-5 pb-24 pt-28">{children}</main>
      </body>
    </html>
  );
}