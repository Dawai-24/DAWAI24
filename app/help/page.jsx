import Link from "next/link";
import { CreditCard, FileUp, HelpCircle, Package, RotateCcw, Truck, Headphones, MessageSquare, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";

export const metadata = { 
  title: "Help & Support Centre | Davai24",
  description: "Find answers and assistance for orders, prescription verification, delivery, and refunds."
};

const topics = [
  { icon: Package, title: "Orders & Tracking", desc: "Track shipment status and delivery times", href: "/orders" },
  { icon: FileUp, title: "Prescription Upload", desc: "How to send prescriptions and get verified", href: "/upload-prescription" },
  { icon: Truck, title: "Delivery & Shipping", desc: "Coverage areas, PIN codes, delivery slots", href: "/policies/shipping-policy" },
  { icon: RotateCcw, title: "Returns & Refunds", desc: "Guidelines on returns and cancellations", href: "/policies/return-policy" },
  { icon: CreditCard, title: "Payments & Wallet", desc: "UPI, Cards, Cash on delivery details", href: "/faqs" },
  { icon: HelpCircle, title: "Frequently Asked Questions", desc: "Everything about substitute medicines", href: "/faqs" },
];

export default function Help() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Help Centre" }]} />
      <div className="container-x max-w-4xl pb-16 space-y-10">
        
        <div className="text-center space-y-2 max-w-lg mx-auto">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#FFF1EF] text-[#FF6B5A] flex items-center justify-center">
            <Headphones size={24} />
          </div>
          <h1 className="text-3xl font-black text-[#171725] tracking-tight">How Can We Help You?</h1>
          <p className="text-[14px] text-[#696974]">
            Select a topic below or reach out to our dedicated pharmacist helpdesk.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {topics.map((t) => {
            const Icon = t.icon;
            return (
              <Link 
                key={t.title} 
                href={t.href} 
                className="group bg-white rounded-3xl p-6 border border-[#ECEEF2] hover:border-[#FF6B5A]/40 transition-all hover:shadow-xs space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFF1EF] text-[#FF6B5A] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-extrabold text-[15px] text-[#171725] group-hover:text-[#FF6B5A] transition-colors">{t.title}</h3>
                  <p className="text-[12px] text-[#92929D] mt-1">{t.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="bg-[#171725] text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold">Need direct assistance from our pharmacist?</h3>
            <p className="text-[13px] text-gray-300">We respond to medicine composition and order queries promptly.</p>
          </div>
          <Link href="/contact" className="btn btn-primary whitespace-nowrap text-[14px]">
            Contact Helpdesk <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </>
  );
}
