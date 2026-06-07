"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Send, Search } from 'lucide-react';
import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'All Tools', href: '/' },
  { label: 'Categories', href: '/#categories' },
  { label: 'Editor\'s Picks', href: '/#editors-picks' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1A0A0A]/90 backdrop-blur-xl border-b border-[#5F1E1E]/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E63946] to-[#FF6B6B] flex items-center justify-center">
            <Send className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold text-[#FEF2F0] group-hover:text-[#E63946] transition-colors">
            Email Marketing Hub
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-[#BE8A83] hover:text-[#FEF2F0] rounded-lg hover:bg-[#401616] transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 px-4 py-2 text-sm text-[#BE8A83] hover:text-[#FEF2F0] rounded-lg hover:bg-[#401616] transition-all"
          >
            <Search className="w-4 h-4" />
            Search
          </Link>
          <button className="px-5 py-2 text-sm font-medium text-white bg-[#E63946] hover:bg-[#C53030] rounded-lg transition-colors shadow-glow-sm">
            Submit Tool
          </button>
        </div>

        <button
          className="md:hidden p-2 text-[#BE8A83] hover:text-[#FEF2F0]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#2D0F0F]/95 backdrop-blur-xl border-b border-[#5F1E1E]"
        >
          <nav className="px-6 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-sm font-medium text-[#BE8A83] hover:text-[#FEF2F0] hover:bg-[#401616] rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="mt-2 px-5 py-3 text-sm font-medium text-white bg-[#E63946] rounded-lg">
              Submit Tool
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
