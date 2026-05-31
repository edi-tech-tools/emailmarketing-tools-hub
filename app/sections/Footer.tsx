"use client";
import { Sparkles, Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

interface FooterLink {
  name: string;
  href: string;
}

const FOOTER_LINKS: Record<string, FooterLink[]> = {
  Product: [
    { name: 'Browse Tools', href: '/' },
    { name: 'Categories', href: '/' },
    { name: 'Comparisons', href: '/' },
    { name: 'API Access', href: '/' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '#' },
    { name: 'Press Kit', href: '#' },
  ],
  Resources: [
    { name: 'Documentation', href: '/' },
    { name: 'Help Center', href: '/contact' },
    { name: 'Community', href: '#' },
    { name: 'Status', href: '#' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Affiliate Disclosure', href: '/disclosure' },
    { name: 'Cookie Policy', href: '/privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[#5F1E1E] bg-[#1A0A0A]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Brand Column */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E63946] to-[#FF6B6B] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-[#FEF2F0]">Email Hub</span>
            </Link>
            <p className="text-sm text-[#BE8A83] leading-relaxed mb-6">
              The most comprehensive directory of email marketing tools. Discover, compare, and integrate the best software for your business.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-[#2D0F0F] border border-[#5F1E1E] flex items-center justify-center text-[#BE8A83] hover:text-[#E63946] hover:border-[#802828] transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[#2D0F0F] border border-[#5F1E1E] flex items-center justify-center text-[#BE8A83] hover:text-[#E63946] hover:border-[#802828] transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[#2D0F0F] border border-[#5F1E1E] flex items-center justify-center text-[#BE8A83] hover:text-[#E63946] hover:border-[#802828] transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold text-[#FEF2F0] mb-4">{title}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#BE8A83] hover:text-[#E63946] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#5F1E1E] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#80504A]">
            &copy; {new Date().getFullYear()} Email Marketing Tools Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-[#80504A] hover:text-[#BE8A83] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-[#80504A] hover:text-[#BE8A83] transition-colors">
              Terms
            </Link>
            <a href="#" className="text-sm text-[#80504A] hover:text-[#BE8A83] transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
