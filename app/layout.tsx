import type { Metadata } from "next";
import "./globals.css";
// import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Ansh Barman Portfolio",
  description: "A portfolio website showcasing the projects and skills of Ansh Barman, a passionate developer and tech enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        {/* <nav className="fullNav">
          <Link href='/about'>About</Link>
          <Link href='/projects'>Projects</Link>
          <Link href='#skills'>Skills</Link>
          <Link href='#contact'>Contact</Link>
        </nav> */}
        <Navbar />
        {children}
        <svg width="0" height="0" className="absolute">
          <filter id="glass-distortion">
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" result="turbulence" />
            <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="8" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
        <Footer />
      </body>
    </html>
  );
}
