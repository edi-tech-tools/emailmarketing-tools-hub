import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://emailcompare.net"),
  title: {
    default: "Email Compare — Best Email Marketing Tools & Software Reviews",
    template: "%s — Email Compare",
  },
  description:
    "Expert reviews of the best email marketing tools. Compare email marketing software, read in-depth analyses, and build your ideal email stack.",
  keywords: [
    "email marketing", "email marketing tools", "email marketing software",
    "email automation", "newsletter tools", "email campaign software",
    "marketing automation", "CRM email tools",
  ],
  verification: {
    google: "T5bb4mZivi0CfaYYRiKZLSNIWmhvAX6_RVgDEyonTGo",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Email Compare",
    title: "Email Compare — Best Email Marketing Tools & Software Reviews",
    description: "Expert reviews of the best email marketing tools. Side-by-side comparisons, pricing, and insights.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
