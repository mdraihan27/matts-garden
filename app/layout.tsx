import type { Metadata } from "next";
import { Playfair_Display, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { LandingNav } from "./_components/LandingNav";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matt's Garden",
  description: "Chill, approachable garden and floral services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="relative min-h-full">
        <video
          className="pointer-events-none fixed inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/videos/hero%20video.mp4" type="video/mp4" />
        </video>

        <div className="pointer-events-none fixed inset-0 bg-linear-to-b from-brand-800/72 via-brand-800/58 to-black/72" />

        <LandingNav />

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
