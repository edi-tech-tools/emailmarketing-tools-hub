"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ALL_TOOLS } from "@/data/tools";
import { BLOG_POSTS } from "@/data/blog-posts";
import { ArrowRight, Star, CheckCircle, BarChart3, TrendingUp, Users, DollarSign } from "lucide-react";

export default function HomePage() {
  const cats = useMemo(() => {
    const m = new Map<string, { count: number }>();
    for (const t of ALL_TOOLS) {
      if (!m.has(t.category)) m.set(t.category, { count: 0 });
      m.get(t.category)!.count++;
    }
    return [...m.entries()].sort((a, b) => b[1].count - a[1].count);
  }, []);

  const topPicks = useMemo(() => [...ALL_TOOLS].sort((a, b) => b.rating - a.rating).slice(0, 8), []);

  const latestPosts = useMemo(
    () => [...BLOG_POSTS].sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3),
    []
  );

  return (
    <div className="relative min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="pt-28 pb-12 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#0a0a0a]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#dc2626]/5 blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#dc2626]/20 bg-[#dc2626]/5 text-[#ef4444] text-[10px] font-medium uppercase tracking-wider mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] animate-pulse" />
            {ALL_TOOLS.length} Email Marketing Tools Reviewed
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#fef2f2] mb-4 tracking-tight leading-[1.05]">
            Find Your Perfect<br />
            <span className="text-[#dc2626]">Email Marketing Stack</span>
          </h1>

          <p className="text-base text-[#e5c7c7] max-w-2xl mx-auto leading-relaxed">
            Side-by-side comparisons of the top email marketing platforms.
            Unbiased reviews, real pricing data, and expert insights from the <strong className="text-[#fef2f2]">PeakBureau</strong> team.
          </p>

          <div className="flex justify-center gap-3 mt-8">
            <Link href="/tools" className="btn-red">
              <BarChart3 className="w-4 h-4" />
              Compare Tools
            </Link>
            <Link href="/about" className="btn-red-outline">
              Meet PeakBureau
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8 text-[10px] text-[#a88282] font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-[#22c55e]" /> Unbiased
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-[#22c55e]" /> Data-Driven
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-[#22c55e]" /> Expert Reviewed
            </span>
          </div>
        </div>
      </section>

      {/* ═══ COMPARISON TABLE ═══ */}
      <section className="pb-16 px-6 max-w-6xl mx-auto">
        <p className="section-title">Top Rated Email Marketing Tools</p>

        <div className="overflow-x-auto rounded-xl border border-[#dc2626]/15">
          <table className="table-compare">
            <thead>
              <tr>
                <th className="w-[180px]">Tool</th>
                <th className="w-[100px]">Rating</th>
                <th className="w-[120px]">Category</th>
                <th className="hidden md:table-cell">Best For</th>
                <th className="hidden lg:table-cell w-[140px]">Starting Price</th>
                <th className="w-[100px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {topPicks.map((t) => (
                <tr key={t.id}>
                  <td className="font-medium text-[#fef2f2]">
                    <Link href={`/tools/${t.id}`} className="hover:text-[#dc2626] transition-colors">
                      {t.name}
                    </Link>
                  </td>
                  <td>
                    <span className="inline-flex items-center gap-1 text-[#fbbf24] text-xs">
                      <Star className="w-3 h-3 fill-current" />
                      {t.rating}
                    </span>
                  </td>
                  <td>
                    <span className="badge-red">{t.category}</span>
                  </td>
                  <td className="hidden md:table-cell text-[#e5c7c7] text-xs max-w-[200px] truncate">
                    {t.useCase}
                  </td>
                  <td className="hidden lg:table-cell text-xs text-[#a88282]">
                    {t.pricing}
                  </td>
                  <td>
                    <Link
                      href={`/tools/${t.id}`}
                      className="inline-flex items-center gap-1 text-xs text-[#dc2626] hover:text-[#ef4444] transition-colors font-medium"
                    >
                      Review <ArrowRight className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-6">
          <Link href="/tools" className="btn-red-outline text-xs">
            View All {ALL_TOOLS.length} Tools <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      {/* ═══ CATEGORIES ═══ */}
      <section className="pb-16 px-6 max-w-6xl mx-auto">
        <p className="section-title">Browse by Category</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {cats.map(([name, d]) => (
            <Link
              key={name}
              href={`/category/${name.toLowerCase().replace(/\s+/g, '-')}`}
              className="card-dark hover:border-[#dc2626]/30 transition-all group"
            >
              <h3 className="text-sm font-semibold text-[#fef2f2] group-hover:text-[#dc2626] transition-colors">
                {name}
              </h3>
              <p className="text-xs text-[#a88282] mt-1">{d.count} tools</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ WHY PEAKBUREAU ═══ */}
      <section className="pb-16 px-6 max-w-4xl mx-auto">
        <p className="section-title">Why PeakBureau?</p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="card-dark text-center">
            <div className="w-10 h-10 rounded-lg bg-[#dc2626]/10 flex items-center justify-center mx-auto mb-3">
              <Users className="w-5 h-5 text-[#dc2626]" />
            </div>
            <h3 className="text-sm font-semibold text-[#fef2f2] mb-1">6-Person Team</h3>
            <p className="text-xs text-[#a88282] leading-relaxed">
              Dedicated e-commerce specialists in Los Angeles, CA.
            </p>
          </div>
          <div className="card-dark text-center">
            <div className="w-10 h-10 rounded-lg bg-[#dc2626]/10 flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-5 h-5 text-[#dc2626]" />
            </div>
            <h3 className="text-sm font-semibold text-[#fef2f2] mb-1">Data-First</h3>
            <p className="text-xs text-[#a88282] leading-relaxed">
              Every comparison backed by real data and verified sources.
            </p>
          </div>
          <div className="card-dark text-center">
            <div className="w-10 h-10 rounded-lg bg-[#dc2626]/10 flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-5 h-5 text-[#dc2626]" />
            </div>
            <h3 className="text-sm font-semibold text-[#fef2f2] mb-1">Unbiased</h3>
            <p className="text-xs text-[#a88282] leading-relaxed">
              No sponsorship bias. Just honest, practical recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ LATEST BLOG ═══ */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <p className="section-title">Latest Reviews & Guides</p>

        <div className="grid md:grid-cols-3 gap-4">
          {latestPosts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card-dark hover:border-[#dc2626]/30 transition-all group flex flex-col h-full">
              <div className="text-[10px] font-mono tracking-wider uppercase text-[#a88282] mb-2">
                {p.category || 'Review'}
                <span className="mx-2">·</span>
                {p.readTime} min read
              </div>
              <h3 className="text-sm font-semibold text-[#fef2f2] mb-2 line-clamp-2 leading-snug group-hover:text-[#dc2626] transition-colors">
                {p.title}
              </h3>
              <p className="text-xs text-[#a88282] flex-grow line-clamp-3 leading-relaxed">
                {p.excerpt}
              </p>
              <div className="text-[10px] text-[#a88282] mt-3 pt-3 border-t border-[#dc2626]/10 flex items-center gap-2">
                <span>By {p.author}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link href="/blog" className="btn-red-outline text-xs">
            All Articles <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>
    </div>
  );
}
