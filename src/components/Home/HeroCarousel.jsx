"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function HeroCarousel() {
  return (
    <div className="container-x mt-4">
      {/* Davai24 Main Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#FFF5F3] via-[#FFF1ED] to-[#FFEBE5] border border-[#FDE0D8] p-6 sm:p-10 lg:p-12 shadow-sm">
        
        {/* Decorative background glow circle */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#FF6B5A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-10 -bottom-20 w-80 h-80 bg-[#233A5E]/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-4 sm:space-y-6">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-xs border border-[#FCD4C7] text-[12px] font-bold text-[#FF6B5A]">
            <Sparkles size={14} className="fill-[#FF6B5A]" />
            <span>India&apos;s Most Affordable Online Pharmacy</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#171725] tracking-tight leading-[1.15]">
            Save Up To <span className="text-[#FF6B5A]">70%</span> On Your Chronic Medicines
          </h1>

          {/* Subheading */}
          <p className="text-[14px] sm:text-[16px] text-[#696974] leading-relaxed max-w-xl">
            Same salt composition, identical therapeutic effectiveness, certified by FDA & GMP approved labs. Compare prices and order substitutes easily.
          </p>

          {/* Quick Stats Badges */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <div className="flex items-center gap-2 text-[13px] font-semibold text-[#171725]">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <ShieldCheck size={13} strokeWidth={3} />
              </div>
              <span>100% Salt Match</span>
            </div>
            <div className="flex items-center gap-2 text-[13px] font-semibold text-[#171725]">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Zap size={13} strokeWidth={3} />
              </div>
              <span>Same Formulation</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/medicines"
              className="btn btn-primary text-[15px] px-7 py-3"
            >
              Order Medicines <ArrowRight size={16} />
            </Link>
            <Link
              href="/upload-prescription"
              className="btn btn-outline text-[15px] px-6 py-3"
            >
              Upload Prescription
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
