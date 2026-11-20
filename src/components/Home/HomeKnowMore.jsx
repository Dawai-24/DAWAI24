"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import faqsData from "@/data/platinumrx_home_faqs.json";

export default function HomeKnowMore() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = faqsData?.mainEntity || [];

  return (
    <section data-slot="know-more" className="bg-[#F8FAFC] border-t border-[#E2E8F0] py-8 md:py-16">
      <div className="container-x">
        
        {/* Section Heading with mobile toggle */}
        <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-[#171725] capitalize">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex w-full items-center justify-between gap-2 text-left md:pointer-events-none md:cursor-default"
          >
            <span>Know more about PlatinumRx</span>
            <ChevronDown
              size={20}
              className={`shrink-0 transition-transform md:hidden ${
                mobileOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </h2>

        {/* Content Container (Open always on desktop, toggleable on mobile) */}
        <div className={`mt-6 ${mobileOpen ? "block" : "hidden md:block"}`}>
          
          <div className="flex flex-col gap-6 md:gap-8 text-[#475569]">
            
            {/* Block 1 */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[16px] md:text-[18px] font-bold text-[#171725]">
                Buy Medicines Online from PlatinumRx, India&apos;s Trusted Online Pharmacy for Branded Substitute Medicines
              </h3>
              <p className="text-[14px] leading-relaxed">
                Looking to buy medicines online at affordable prices? PlatinumRx is a trusted online pharmacy in India that helps you save more with branded substitute medicines. We offer high-quality medicines manufactured in GMP certified facilities, giving you access to affordable alternatives without compromising on quality. Whether you need prescription medicines, OTC products, or medicines for long-term treatment, PlatinumRx makes online medicine delivery simple, secure, and convenient.
              </p>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[16px] md:text-[18px] font-bold text-[#171725]">
                What are Substitute Medicines?
              </h3>
              <p className="text-[14px] leading-relaxed">
                Substitute medicines are medicines that contain the same active ingredient, strength, dosage form, and therapeutic effect as your prescribed medicine but are manufactured by a different pharmaceutical company. They offer a more affordable option while maintaining the intended treatment.
              </p>
              <p className="text-[14px] leading-relaxed mt-1">
                At PlatinumRx, we help you discover trusted branded substitute medicines so you can reduce your medicine expenses. However, always consult your doctor before switching to any substitute medicine.
              </p>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[16px] md:text-[18px] font-bold text-[#171725]">
                How Does PlatinumRx Help You Save More on Every Medicine Order?
              </h3>
              <p className="text-[14px] leading-relaxed">
                Healthcare costs can increase quickly, especially for patients who require medicines every month. PlatinumRx helps you reduce these expenses by offering affordable medicine substitutes from trusted manufacturers.
              </p>
              <div className="text-[14px] mt-1">
                <p className="font-semibold text-[#171725] mb-2">With PlatinumRx, you can:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Compare medicine prices before purchasing.</li>
                  <li>Find affordable branded substitute medicines.</li>
                  <li>Save on monthly prescription costs.</li>
                  <li>Buy medicines online from the comfort of your home.</li>
                  <li>Get medicines delivered to your doorstep across India.</li>
                </ul>
              </div>
              <p className="text-[14px] leading-relaxed mt-2">
                Our goal is to make quality healthcare accessible without increasing your treatment costs.
              </p>
            </div>

            {/* Block 4: Accordion FAQs */}
            {faqs.length > 0 && (
              <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                <h4 className="text-[17px] font-bold text-[#171725] mb-4">
                  Frequently Asked Questions
                </h4>
                <div className="space-y-3">
                  {faqs.map((faq, i) => {
                    const isOpen = openFaq === i;
                    return (
                      <div
                        key={i}
                        className="border border-[#E2E8F0] rounded-xl bg-white overflow-hidden shadow-2xs"
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : i)}
                          className="w-full text-left px-5 py-3.5 flex items-center justify-between gap-4 font-bold text-[14px] text-[#171725] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                        >
                          <span>{faq.name}</span>
                          <ChevronDown
                            size={16}
                            className={`shrink-0 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-4 pt-1 text-[13.5px] text-[#64748B] border-t border-[#F1F5F9] leading-relaxed">
                            {faq.acceptedAnswer?.text?.trim()}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
