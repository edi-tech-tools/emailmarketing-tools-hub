import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://emailcompare.net"),
  title: {
    default: "Email Compare — Best Email Marketing Tools Compared by PeakBureau",
    template: "%s — Email Compare by PeakBureau",
  },
  description:
    "Expert email marketing tool comparisons by PeakBureau. Side-by-side reviews, pricing breakdowns, and data-driven insights from our Los Angeles team.",
  keywords: [
    "email marketing", "email marketing tools", "email marketing software",
    "email automation", "newsletter tools", "email campaign software",
    "marketing automation", "CRM email tools", "PeakBureau",
  ],
  verification: {
    google: "T5bb4mZivi0CfaYYRiKZLSNIWmhvAX6_RVgDEyonTGo",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Email Compare by PeakBureau",
    title: "Email Compare — Best Email Marketing Tools Compared by PeakBureau",
    description: "Expert comparisons and reviews of email marketing tools. Side-by-side analysis, pricing, and insights from the PeakBureau team.",
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
        <CookieBanner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#dc2626]/15 bg-[#0a0a0a]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-[#dc2626] flex items-center justify-center">
            <span className="text-white text-xs font-bold">EC</span>
          </div>
          <span className="text-sm font-semibold text-[#fef2f2] tracking-tight">
            Email <span className="text-[#dc2626]">Compare</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-xs text-[#e5c7c7] hover:text-[#fef2f2] transition-colors uppercase tracking-wider">
            Home
          </Link>
          <Link href="/about" className="text-xs text-[#e5c7c7] hover:text-[#fef2f2] transition-colors uppercase tracking-wider">
            About
          </Link>
          <Link href="/blog" className="text-xs text-[#e5c7c7] hover:text-[#fef2f2] transition-colors uppercase tracking-wider">
            Blog
          </Link>
          <Link href="/contact" className="text-xs text-[#e5c7c7] hover:text-[#fef2f2] transition-colors uppercase tracking-wider">
            Contact
          </Link>
        </nav>
        <Link
          href="/tools"
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-medium transition-all"
        >
          Browse Tools
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#dc2626]/10 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-[#dc2626] flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">EC</span>
              </div>
              <span className="text-sm font-semibold text-[#fef2f2]">
                Email <span className="text-[#dc2626]">Compare</span>
              </span>
            </div>
            <p className="text-xs text-[#a88282] leading-relaxed">
              Data-driven email marketing tool comparisons by{' '}
              <span className="text-[#e5c7c7]">PeakBureau</span>. Based in Los Angeles, CA.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-[#fef2f2] uppercase tracking-wider mb-3">Pages</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-xs text-[#a88282] hover:text-[#e5c7c7] transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-xs text-[#a88282] hover:text-[#e5c7c7] transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-xs text-[#a88282] hover:text-[#e5c7c7] transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-xs text-[#a88282] hover:text-[#e5c7c7] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-[#fef2f2] uppercase tracking-wider mb-3">Categories</h4>
            <ul className="space-y-2">
              <li><Link href="/category/campaign" className="text-xs text-[#a88282] hover:text-[#e5c7c7] transition-colors">Campaign</Link></li>
              <li><Link href="/category/crm" className="text-xs text-[#a88282] hover:text-[#e5c7c7] transition-colors">CRM</Link></li>
              <li><Link href="/category/marketing-automation" className="text-xs text-[#a88282] hover:text-[#e5c7c7] transition-colors">Marketing Automation</Link></li>
              <li><Link href="/category/deliverability" className="text-xs text-[#a88282] hover:text-[#e5c7c7] transition-colors">Deliverability</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-[#fef2f2] uppercase tracking-wider mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-xs text-[#a88282] hover:text-[#e5c7c7] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-xs text-[#a88282] hover:text-[#e5c7c7] transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclosure" className="text-xs text-[#a88282] hover:text-[#e5c7c7] transition-colors">Disclosure</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#dc2626]/10 pt-6 text-center">
          <p className="text-[10px] text-[#a88282]">
            &copy; {new Date().getFullYear()} Email Compare by{' '}
            <a href="https://peakbureau.com" className="text-[#dc2626] hover:underline" target="_blank" rel="noopener noreferrer">
              PeakBureau
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
