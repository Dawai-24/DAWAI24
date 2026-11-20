"use client";

import { useState } from "react";
import newsData from "@/data/platinumrx_home_news.json";

export default function HomeNews() {
  const articles = newsData?.articles || [];
  const [selectedIdx, setSelectedIdx] = useState(0);

  const active = articles[selectedIdx] || articles[0];

  return (
    <section data-slot="news-section" className="container-x py-8 md:py-12">
      <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-[#171725]">
        We Are In The News
      </h2>

      {/* Tabs List */}
      <div className="mt-4 md:mt-8">
        <div className="scrollbar-none -mx-4 px-4 overflow-x-auto md:mx-0 md:px-0">
          <div
            role="tablist"
            className="flex items-center border-b border-[#E2E8F0] w-max min-w-full md:min-w-fit"
          >
            {articles.slice(0, 10).map((art, idx) => {
              const isSelected = selectedIdx === idx;
              const logoPath = `/img/news-${idx + 1}.webp`;

              return (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedIdx(idx)}
                  className={`relative flex items-center justify-center w-36 sm:w-44 md:w-48 h-20 sm:h-24 px-4 transition-all cursor-pointer flex-none border-b-2 -mb-[1px] ${
                    isSelected
                      ? "border-[#FF6B5A] bg-gradient-to-b from-transparent to-[#FFECEC]"
                      : "border-transparent hover:bg-slate-50/60"
                  }`}
                  title={art.sourceName}
                >
                  <img
                    src={logoPath}
                    alt={art.sourceName}
                    className="max-h-10 sm:max-h-12 max-w-[85%] object-contain"
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

        {/* Selected Article Description */}
        {active && (
          <div className="mt-6 md:mt-8 text-[14px] sm:text-[15px] md:text-[16px] text-[#475569] leading-relaxed max-w-6xl">
            <span>{active.description} </span>
            {active.actionUrl && (
              <a
                href={active.actionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF6B5A] hover:underline font-medium inline-block ml-1 cursor-pointer"
              >
                Read more
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
