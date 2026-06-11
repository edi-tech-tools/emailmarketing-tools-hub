import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — PeakBureau | Email Compare",
  description:
    "PeakBureau is a Los Angeles-based e-commerce specialist team of 6, delivering data-driven email marketing tool comparisons. Meet Avery Sandberg, Christian Koch, and the rest of the team.",
};

const TEAM = [
  {
    name: "Avery Sandberg",
    role: "CEO & Founder",
    bio: "Avery founded PeakBureau in 2021 after a decade leading e-commerce growth at top DTC brands. She saw how hard it was for businesses to find reliable, unbiased email marketing tool information — so she built the solution. Under her leadership, PeakBureau has grown into a trusted source for data-driven email marketing comparisons.",
  },
  {
    name: "Christian Koch",
    role: "Full-Stack Developer",
    bio: "Christian is the technical backbone of Email Compare. With deep expertise in Next.js, React, and data engineering, he built and maintains the comparison platform. Christian ensures every tool comparison is backed by accurate, up-to-date data and delivers a seamless user experience.",
  },
  {
    name: "Marcus Chen",
    role: "E-Commerce Strategy Lead",
    bio: "Marcus brings 8 years of e-commerce marketing experience from agencies and in-house roles. He leads our e-commerce tool evaluations, focusing on platforms that drive real revenue for online businesses. His practical, ROI-focused approach ensures our recommendations are actionable.",
  },
  {
    name: "Sofia Reyes",
    role: "Content Director",
    bio: "Sofia oversees all editorial content at Email Compare. A former email marketing manager at a $50M DTC brand, she knows what actually works in the inbox. She edits every comparison and guide to ensure clarity, accuracy, and practical value.",
  },
  {
    name: "Daniel Park",
    role: "Data Analyst",
    bio: "Daniel is responsible for our data infrastructure — aggregating pricing, feature data, and user reviews from multiple sources. His rigorous methodology ensures every tool comparison reflects the most current information available.",
  },
  {
    name: "Emma Torres",
    role: "UX & Design Lead",
    bio: "Emma designs the Email Compare experience with a focus on clarity and usability. She believes that comparing email tools should be as easy as the tools themselves. Her clean, functional designs help users find the right information fast.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#dc2626] bg-[#dc2626]/10 px-3 py-1.5 rounded-md mb-4 border border-[#dc2626]/20">
            About
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#fef2f2] tracking-tight mb-6">
            Meet{' '}
            <span className="text-[#dc2626]">PeakBureau</span>
          </h1>
          <p className="text-lg text-[#e5c7c7] leading-relaxed max-w-3xl mx-auto">
            We are a Los Angeles-based team of 6 e-commerce specialists on a mission
            to help businesses find the perfect email marketing tools — through honest,
            data-driven comparisons and expert insights.
          </p>
        </div>

        {/* Our Story */}
        <div className="mb-16 card-dark">
          <h2 className="text-2xl font-bold text-[#fef2f2] mb-4">Our Story</h2>
          <div className="space-y-4 text-[#e5c7c7] leading-relaxed text-sm">
            <p>
              PeakBureau was founded in Los Angeles in 2021 with a simple idea: 
              businesses deserve better information when choosing email marketing tools.
              The review sites were full of sponsored rankings, hidden affiliate bias, 
              and outdated pricing. We knew there had to be a better way.
            </p>
            <p>
              Starting as a small consultancy helping DTC brands optimize their email 
              stacks, we quickly realized the same questions kept coming up: 
              &ldquo;Is Klaviyo really better than ActiveCampaign for e-commerce?&rdquo; 
              &ldquo;What does HubSpot actually cost?&rdquo; &ldquo;Which tool has the best 
              deliverability?&rdquo;
            </p>
            <p>
              So we built Email Compare — a platform that answers those questions 
              with real data, not opinions. Every tool page includes verified pricing, 
              feature comparisons, pros and cons synthesized from thousands of user 
              reviews, and practical use case recommendations.
            </p>
            <p>
              Today, our 6-person team in Los Angeles covers 100+ email marketing 
              tools across 15+ categories. We are independent, we are thorough, 
              and we are committed to giving you the information you need to make 
              the right choice — no fluff, no bias, just data.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#fef2f2] mb-8 text-center">The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="card-dark"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#dc2626]/15 border border-[#dc2626]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#fef2f2] text-lg font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-[#fef2f2]">{member.name}</h3>
                    <p className="text-xs text-[#dc2626] font-medium mb-2">{member.role}</p>
                    <p className="text-xs text-[#a88282] leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="mb-16 card-dark text-center">
          <h2 className="text-2xl font-bold text-[#fef2f2] mb-3">Based in Los Angeles</h2>
          <p className="text-sm text-[#e5c7c7] max-w-xl mx-auto">
            We work from our studio in the Arts District, Los Angeles, California.
            Our team brings together expertise from e-commerce, marketing, 
            engineering, and design — all focused on one mission: 
            helping you find the right email tools.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="btn-red text-xs">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
