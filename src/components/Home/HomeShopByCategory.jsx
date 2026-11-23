"use client";

import { useState } from "react";
import Link from "next/link";
export default function HomeShopByCategory({ categories = [] }) {
  const [activeTab, setActiveTab] = useState(0);

  const currentCategory = categories[activeTab] || categories[0];

  return (
    <div
      data-slot="shop-by-categories"
      data-testid="home-categories"
      className="bg-gradient-to-b to-white py-8 md:py-12"
    >
      <div className="container-x">
        <h2
          data-testid="home-categories-heading"
          className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#171725] capitalize"
        >
          Shop by Category
        </h2>

        {/* Horizontal Category Tabs matching user screenshot */}
        <div className="scrollbar-none -mx-3 mt-6 overflow-x-auto overflow-y-hidden md:mx-0 md:mt-8">
          <div
            role="tablist"
            data-slot="tabs-list"
            className="flex w-max min-w-full flex-nowrap items-center border-b border-[#E2E8F0] pb-[0.5px] md:min-w-fit"
          >
            {categories.map((cat, idx) => {
              const isActive = activeTab === idx;
              const mainIcon = cat.imageUrl || `/img/cat-main-${idx}.png`;

              return (
                <button
                    key={cat.id || cat.label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(idx)}
                  className={`relative inline-flex flex-col items-center justify-center p-3 text-sm font-medium whitespace-nowrap cursor-pointer transition-all border-b-2 gap-2 w-36 md:w-52 px-3 ${
                    isActive
                      ? "text-[#FF6B5A] bg-gradient-to-b from-transparent to-[#FFECEC] border-[#FF6B5A]"
                      : "text-[#696974] hover:text-[#171725] border-transparent hover:bg-[#F8FAFC]"
                  }`}
                >
                  <div className="size-16 sm:size-20 flex items-center justify-center">
                    <img
                      src={mainIcon}
                        alt={cat.name || cat.label}
                      className="size-16 sm:size-18 object-contain"
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                  </div>
                  <span
                    className={`text-[13px] sm:text-[14px] text-center font-medium ${
                      isActive ? "text-[#FF6B5A] font-bold" : "text-[#475569]"
                    }`}
                  >
                    {cat.name || cat.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Subcategories Grid matching screenshot exactly: 6 columns on md+, light rounded box background */}
        {currentCategory && (
          <div
            role="tabpanel"
            data-slot="tabs-content"
            className="mt-6 md:mt-8 outline-none"
          >
            <div className="grid grid-cols-3 gap-3 md:grid-cols-6 md:gap-5">
              {(currentCategory.subcategories || []).map((sub, sIdx) => {
                const cleanSlug =
                  `/category/${currentCategory.slug}/${sub.slug}`;
                const subIcon = activeTab < 5 ? `/img/subcat-${activeTab}-${sIdx}.png` : "/img/cat-main-5.svg";

                return (
                  <Link
                    key={sub.id || sub.slug}
                    href={cleanSlug}
                    className="group flex w-full flex-col items-center gap-2.5 transition-transform hover:-translate-y-0.5"
                  >
                    {/* Light gray card container for subcategory image */}
                    <div className="bg-[#F8FAFC] border border-[#F1F5F9] group-hover:border-[#FF6B5A]/30 flex h-28 sm:h-36 md:h-44 w-full items-center justify-center rounded-[16px] md:rounded-[20px] p-4 md:p-6 transition-colors shadow-2xs">
                      <img
                        src={subIcon}
                        alt={sub.name}
                        className="h-full w-auto max-w-full object-contain group-hover:scale-105 transition-transform"
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                      />
                    </div>

                    {/* Subcategory Label underneath */}
                    <span className="text-[12px] sm:text-[13px] md:text-sm font-medium text-[#171725] text-center group-hover:text-[#FF6B5A] transition-colors line-clamp-2">
                      {sub.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
