import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abdur Rehman - Full Stack Developer Portfolio",
  description: "Full Stack Developer & UI/UX Enthusiast specializing in React, Next.js, and modern web technologies. View my projects and get in touch.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "Abdur Rehman" }],
  openGraph: {
    title: "Abdur Rehman - Full Stack Developer",
    description: "Building beautiful digital experiences with modern web technologies",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

