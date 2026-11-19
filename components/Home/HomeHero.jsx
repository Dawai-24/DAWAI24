"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomeHero() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/medicines?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <section data-slot="hero-section" className="relative w-full">
      {/* Blue gradient banner matching PlatinumRx exactly */}
      <div className="relative bg-[linear-gradient(274deg,#4762CB_-8.35%,#253C94_86.89%)] max-md:overflow-hidden md:h-75">
        
        {/* Background watermark icon */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden max-md:hidden">
          <div className="container-x relative h-full">
            <div className="overflow-hidden absolute -top-55 -left-50 size-105 opacity-50">
              <img
                alt=""
                className="h-full w-full object-contain object-center brightness-0 invert"
                src="/img/prx-blue-transparent.webp"
              />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="container-x relative max-md:py-8 md:h-full">
          <div className="text-white relative flex flex-col md:h-full md:justify-center max-w-2xl">
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Switch to <span className="text-white">Branded Generics</span>
            </h1>

            {/* 3 Pills: Trusted by 10L+ users, Save upto 60%, Doctor Approved */}
            <div className="mt-4 flex flex-wrap gap-2.5">
              <div className="flex w-fit items-center gap-2 rounded-full bg-white px-3.5 py-1.5 shadow-xs">
                <div className="bg-[#24a148] flex size-5 items-center justify-center rounded-full p-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="stroke-white">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-[12px] sm:text-[13px] font-semibold text-[#171725]">Trusted by 10L+ users</p>
              </div>

              <div className="flex w-fit items-center gap-2 rounded-full bg-white px-3.5 py-1.5 shadow-xs">
                <div className="bg-[#24a148] flex size-5 items-center justify-center rounded-full p-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="stroke-white">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-[12px] sm:text-[13px] font-semibold text-[#171725]">Save upto 60%</p>
              </div>

              <div className="flex w-fit items-center gap-2 rounded-full bg-white px-3.5 py-1.5 shadow-xs">
                <div className="bg-[#24a148] flex size-5 items-center justify-center rounded-full p-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="stroke-white">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-[12px] sm:text-[13px] font-semibold text-[#171725]">Doctor Approved</p>
              </div>
            </div>

            {/* Desktop Search Bar */}
            <form onSubmit={handleSearch} className="mt-6 w-full max-w-lg hidden md:block">
              <div className="relative w-full">
                <Search className="text-[#878792] pointer-events-none absolute top-1/2 size-4.5 -translate-y-1/2 left-4" />
                <input
                  type="search"
                  placeholder="Search your Medicines"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="rounded-full w-full bg-white text-[#171725] placeholder:text-[#878792] border border-transparent focus:border-[#FF6B5A] outline-none h-12 text-[14px] px-4 pl-11 shadow-sm"
                />
              </div>
            </form>

          </div>

          {/* Right Brand Ambassador illustration / image */}
          <div className="overflow-hidden absolute bottom-0 h-full right-0 w-[min(42vw,440px)] max-w-[440px] max-md:hidden pointer-events-none">
            <img
              alt="Brand Ambassador"
              src="/img/ak-home-hero.webp"
              className="h-full w-full object-contain object-bottom"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
