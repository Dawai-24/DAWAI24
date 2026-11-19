import Link from "next/link";
import { ShieldCheck, HeartPulse, Sparkles, Building2, Users2, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { allProducts } from "@/lib/catalog";
import { categories } from "@/data/categories";

export const metadata = { 
  title: "About Us | Davai24",
  description: "Learn how Davai24 makes essential chronic medicines accessible and affordable across India."
};

export default function About() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About Us" }]} />
      <div className="container-x max-w-4xl pb-16 space-y-10">
        
        {/* Hero Section */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF1EF] text-[#FF6B5A] text-[12px] font-bold">
            <HeartPulse size={14} /> Our Mission & Vision
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#171725] tracking-tight">
            Making Quality Healthcare Affordable for Every Indian Family
          </h1>
          <p className="text-[14px] text-[#696974] leading-relaxed">
            Healthcare expenses shouldn&apos;t be a financial burden. Davai24 is dedicated to breaking high medicine price barriers by providing 100% genuine substitute medicines with identical active ingredients.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-3xl p-6 border border-[#ECEEF2] text-center shadow-xs">
            <p className="text-3xl font-black text-[#FF6B5A]">70%</p>
            <p className="text-[12px] font-bold text-[#171725] mt-1">Average Savings</p>
            <p className="text-[11px] text-[#92929D]">On chronic prescriptions</p>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-[#ECEEF2] text-center shadow-xs">
            <p className="text-3xl font-black text-[#171725]">100%</p>
            <p className="text-[12px] font-bold text-[#171725] mt-1">Salt Equivalence</p>
            <p className="text-[11px] text-[#92929D]">Same therapeutic outcome</p>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-[#ECEEF2] text-center shadow-xs">
            <p className="text-3xl font-black text-[#FF6B5A]">{allProducts().length}+</p>
            <p className="text-[12px] font-bold text-[#171725] mt-1">Genuine Medicines</p>
            <p className="text-[11px] text-[#92929D]">Verified catalogue</p>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-[#ECEEF2] text-center shadow-xs">
            <p className="text-3xl font-black text-[#171725]">19,000+</p>
            <p className="text-[12px] font-bold text-[#171725] mt-1">Pincodes Served</p>
            <p className="text-[11px] text-[#92929D]">Doorstep delivery across India</p>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="bg-white rounded-3xl p-8 border border-[#ECEEF2] shadow-xs space-y-6">
          <h2 className="text-xl font-extrabold text-[#171725]">Why Trust Davai24?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF1EF] text-[#FF6B5A] flex items-center justify-center font-bold">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-bold text-[15px] text-[#171725]">FDA & GMP Approved</h3>
              <p className="text-[13px] text-[#696974] leading-relaxed">
                We only source medicines manufactured in certified facilities adhering to the highest global quality standards.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Users2 size={24} />
              </div>
              <h3 className="font-bold text-[15px] text-[#171725]">Pharmacist Oversight</h3>
              <p className="text-[13px] text-[#696974] leading-relaxed">
                Every prescription order is verified by licensed medical professionals before dispatch.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Building2 size={24} />
              </div>
              <h3 className="font-bold text-[15px] text-[#171725]">Top Pharmaceutical Partners</h3>
              <p className="text-[13px] text-[#696974] leading-relaxed">
                Partnered directly with India&apos;s leading manufacturers including Cipla, Sun Pharma, Mankind, and Dr. Reddy&apos;s.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl bg-[#171725] text-white p-8 text-center sm:text-left sm:flex items-center justify-between gap-6">
          <div className="space-y-1 max-w-lg mb-4 sm:mb-0">
            <h3 className="text-xl font-bold">Ready to reduce your monthly medicine bills?</h3>
            <p className="text-[13px] text-gray-300">Upload your prescription or explore our catalogue to find verified substitutes.</p>
          </div>
          <Link href="/medicines" className="btn btn-primary whitespace-nowrap text-[14px]">
            Explore Medicines <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </>
  );
}
