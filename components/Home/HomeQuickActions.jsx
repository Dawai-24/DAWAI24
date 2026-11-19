"use client";

import Link from "next/link";
import { Upload, PhoneCall } from "lucide-react";

export default function HomeQuickActions() {
  return (
    <section data-slot="hero-quick-actions" className="container-x relative z-20 -mt-6 md:mt-0 md:py-8">
      {/* Subheading on desktop */}
      <p className="text-[14px] font-medium text-[#696974] pb-4 text-center hidden md:block">
        Get your medicines via
      </p>

      {/* Grid: 2 columns on desktop, 2 columns on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        
        {/* Card 1: Add Prescription -> /upload-prescription */}
        <div data-slot="upload-rx" className="border border-[#E2E8F0] flex items-center justify-between gap-4 rounded-[16px] bg-white px-5 py-4 shadow-sm hover:border-[#FF6B5A]/40 transition-colors">
          <div className="flex min-w-0 flex-col gap-1">
            <span className="text-[16px] font-bold text-[#171725]">Add Prescription</span>
            <span className="text-[13px] text-[#696974]">Add Prescription to place your order</span>
          </div>

          <Link
            href="/upload-prescription"
            className="cursor-pointer inline-flex items-center justify-center rounded-full bg-[#FF6B5A] hover:bg-[#F05543] active:bg-[#E04432] text-white h-11 px-6 text-[14px] font-semibold min-w-[120px] shrink-0 gap-2 shadow-xs transition-transform active:scale-95"
          >
            <Upload size={18} strokeWidth={2.2} />
            <span>Upload</span>
          </Link>
        </div>

        {/* Card 2: Order On WhatsApp */}
        <a
          data-slot="order-via-whatsapp"
          href="https://api.whatsapp.com/send?phone=919606973757&text=Hi%20PlatinumRx%20team%2C%20I'd%20like%20to%20place%20an%20order"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#E2E8F0] flex items-center justify-center gap-3.5 rounded-[16px] bg-white p-4 shadow-sm hover:border-emerald-500/40 hover:bg-emerald-50/20 transition-all cursor-pointer group"
        >
          <img
            alt="WhatsApp"
            src="/img/whatsapp-icon.webp"
            className="size-7 shrink-0 group-hover:scale-110 transition-transform"
          />
          <div className="text-[15px] font-bold text-[#171725] text-left">
            Order On WhatsApp
          </div>
        </a>

      </div>
    </section>
  );
}
