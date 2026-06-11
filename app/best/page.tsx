import Link from "next/link";
import { ALL_TOOLS } from "@/data/tools";
import { Star, ArrowRight, CheckCircle } from "lucide-react";

export default function BestToolsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-12 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#0a0a0a]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#dc2626]/5 blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#fef2f2] mb-4 tracking-tight">
            Best Email Marketing Tools
          </h1>
          <p className="text-base text-[#e5c7c7] max-w-2xl mx-auto leading-relaxed">
            Hand-picked top-rated email marketing platforms. Compare features, pricing, and reviews to find the perfect fit.
          </p>
        </div>
      </section>

      {/* Tool Grid */}
      <section className="pb-24 px-6 max-w-6xl mx-auto">
        <div className="grid gap-4 md:grid-cols-2">
          {ALL_TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.id}
                href={`/tools/${tool.id}`}
                className="group bg-[#1a1a1a] border border-[#dc2626]/15 rounded-xl p-5 hover:border-[#dc2626]/40 transition-all hover:bg-[#1f1f1f]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#dc2626]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#dc2626]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-[#fef2f2] group-hover:text-[#dc2626] transition-colors">
                        {tool.name}
                      </h3>
                      <span className="px-2 py-0.5 bg-[#dc2626]/10 text-[#dc2626] text-[10px] font-bold rounded-full uppercase tracking-wider border border-[#dc2626]/20 shrink-0">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-xs text-[#a88282] line-clamp-2 leading-relaxed mb-2">
                      {tool.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="inline-flex items-center gap-1 text-[#fbbf24]">
                        <Star className="w-3 h-3 fill-current" />
                        {tool.rating}/5
                      </span>
                      <span className="text-[#80504A]">
                        {tool.reviewCount.toLocaleString()} reviews
                      </span>
                      <span className="text-[#22c55e] font-medium">
                        {tool.pricing}
                      </span>
                    </div>
                    <div className="mt-2.5 text-xs text-[#e5c7c7] leading-relaxed line-clamp-2">
                      <span className="text-[#80504A] font-medium">Best for: </span>
                      {tool.useCase}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#dc2626] mt-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
