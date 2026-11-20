"use client";

import { useState } from "react";
import Link from "next/link";
import newsData from "@/data/platinumrx_home_news.json";

export default function HomeNews() {
  const articles = newsData?.articles || [];
  const [selectedIdx, setSelectedIdx] = useState(0);

  const active = articles[selectedIdx] || articles[0];

  return (
    <section data-slot="news-section" className="container-x py-6 md:py-10">
      <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#171725] capitalize">
        We Are In The News
      </h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Left Side: Active Featured Article Box */}
        {active && (
          <div className="md:col-span-7 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[20px] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="h-10 flex items-center">
                <span className="text-[18px] font-black tracking-wide text-[#171725] uppercase">
                  {active.sourceName}
                </span>
              </div>
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
                {active.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex items-center justify-between">
              <a
                href={active.actionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-bold text-[#FF6B5A] hover:underline inline-flex items-center gap-1.5"
              >
                Read full article &rarr;
              </a>
              <span className="text-[12px] text-[#94A3B8]">Featured Coverage</span>
            </div>
          </div>
        )}

        {/* Right Side: Media Logos Grid to switch tabs */}
        <div className="md:col-span-5 grid grid-cols-3 gap-2.5 sm:gap-3">
          {articles.slice(0, 9).map((art, idx) => {
            const isSelected = selectedIdx === idx;
            const logoPath = `/img/news-${idx + 1}.webp`;

            return (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`h-18 sm:h-20 rounded-[14px] border p-2 flex items-center justify-center transition-all bg-white cursor-pointer shadow-2xs ${
                  isSelected
                    ? "border-[#FF6B5A] ring-2 ring-[#FF6B5A]/20 shadow-xs"
                    : "border-[#E2E8F0] hover:border-[#CBD5E1]"
                }`}
                title={art.sourceName}
              >
                <img
                  src={logoPath}
                  alt={art.sourceName}
                  className="max-h-8 max-w-[85%] object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = art.imageUrl;
                  }}
                />
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
