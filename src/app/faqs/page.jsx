import Breadcrumbs from "@/components/Common/Breadcrumbs";
import Accordion from "@/components/Common/Accordion";
import { faqs } from "@/data/content";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";

export const metadata = { 
  title: "Frequently Asked Questions | Davai24",
  description: "Common questions about substitute medicines, pricing, prescription verification, and delivery."
};

export default function Faqs() {
  return (
    <>
      <Breadcrumbs items={[{ label: "FAQs" }]} />
      <div className="container-x max-w-3xl pb-16 space-y-8">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#FFF1EF] text-[#FF6B5A] flex items-center justify-center">
            <HelpCircle size={24} />
          </div>
          <h1 className="text-3xl font-black text-[#171725] tracking-tight">Frequently Asked Questions</h1>
          <p className="text-[14px] text-[#696974] max-w-md mx-auto">
            Everything you need to know about substitute medicines, pricing comparisons, and doorstep delivery.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ECEEF2] shadow-xs">
          <Accordion items={faqs} />
        </div>

        <div className="bg-[#FAFBFD] rounded-3xl p-6 border border-[#ECEEF2] text-center space-y-2">
          <p className="font-bold text-[15px] text-[#171725]">Still have questions?</p>
          <p className="text-[13px] text-[#696974]">Our pharmacist and customer support team is available 7 days a week.</p>
          <div className="pt-2">
            <Link href="/contact" className="btn btn-primary text-[13px] inline-flex items-center gap-1">
              Contact Support <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
