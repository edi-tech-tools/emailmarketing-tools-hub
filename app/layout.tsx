import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import CookieBanner from "./components/CookieBanner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Email Marketing Tools Hub — Best Email Marketing Software & Tools",
  description:
    "Compare 80+ email marketing tools with verified reviews, pricing breakdowns, and expert comparisons. Find the perfect email marketing software for your business needs. Trusted by marketing professionals worldwide.",
  keywords: [
    "email marketing",
    "email marketing tools",
    "email marketing software",
    "email automation",
    "newsletter tools",
    "email campaign software",
    "marketing automation",
    "CRM email tools",
  ],
  verification: {
    google: "T5bb4mZivi0CfaYYRiKZLSNIWmhvAX6_RVgDEyonTGo",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Email Marketing Tools Hub",
    title: "Email Marketing Tools Hub — Best Email Marketing Software & Tools",
    description:
      "Compare 80+ email marketing tools with verified reviews, pricing breakdowns, and expert comparisons.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className={`${spaceGrotesk.className} min-h-screen antialiased`}>
        {/* Background Effects */}
        <div className="aurora-bg" />
        <div className="grid-pattern" />

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="relative z-10">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Cookie Consent Banner */}
        <CookieBanner />
      </body>
    </html>
  );
}
