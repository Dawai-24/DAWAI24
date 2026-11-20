import Link from "next/link";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { healthConditions } from "@/data/categories";
import { Activity, ArrowRight } from "lucide-react";

export const metadata = { 
  title: "Health Conditions & Diseases | Davai24",
  description: "Browse affordable substitute medicines by specific health conditions and chronic therapies."
};

export default function HealthConditions() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Health Conditions" }]} />
      <div className="container-x pb-16 space-y-8">
        <div>
          <h1 className="text-3xl font-black text-[#171725] tracking-tight">Shop by Health Condition</h1>
          <p className="text-[14px] text-[#696974] mt-1">
            Find targeted substitute treatments formulated for specific health conditions, reviewed by certified pharmacists.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {healthConditions.map((h) => (
            <Link 
              key={h.slug} 
              href={`/health-conditions/${h.slug}`} 
              className="group bg-white rounded-3xl p-5 border border-[#ECEEF2] hover:border-[#FF6B5A]/40 text-center transition-all hover:shadow-xs flex flex-col items-center justify-between"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FFF1EF] text-[#FF6B5A] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Activity size={24} />
              </div>
              <h3 className="font-extrabold text-[14px] text-[#171725] group-hover:text-[#FF6B5A] transition-colors">
                {h.name}
              </h3>
              <span className="text-[11px] font-bold text-[#FF6B5A] mt-3 inline-flex items-center gap-1 group-hover:underline">
                View Medicines <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
