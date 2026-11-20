import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { 
  Activity, 
  ShieldCheck, 
  AlertTriangle, 
  Stethoscope, 
  Pill, 
  ArrowRight, 
  ArrowLeft, 
  FileText 
} from "lucide-react";
import { diseasesData } from "@/data/healthResourcesData";

export function generateStaticParams() {
  return Object.keys(diseasesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const dis = diseasesData[slug];
  if (!dis) return { title: "Condition Details | Davai24" };
  return {
    title: `${dis.name} - Symptoms, Causes, Treatment & Medicines | Davai24`,
    description: `Comprehensive health guide on ${dis.name}: symptoms, causes, diagnosis tests, and affordable medicine substitutes.`
  };
}

export default async function DiseaseDetailPage({ params }) {
  const { slug } = await params;
  const dis = diseasesData[slug];

  if (!dis) notFound();

  return (
    <>
      <Breadcrumbs 
        items={[
          { label: "Health Resources" }, 
          { label: "All Diseases", href: "/diseases" }, 
          { label: dis.name }
        ]} 
      />

      <div className="container-x pb-20 space-y-8">
        
        {/* Header Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#ECEEF2] shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF1EF] text-[#FF6B5A] text-[12px] font-bold">
              <Activity size={14} /> Health Condition Guide
            </span>
            <span className="text-[12px] font-extrabold text-[#233A5E] bg-[#F0F4F8] px-3.5 py-1 rounded-full">
              Category: {dis.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-[#233A5E] tracking-tight">
            {dis.name}
          </h1>

          {dis.synonyms && (
            <p className="text-[13px] text-[#92929D] font-medium">
              Also known as: <span className="text-[#233A5E]">{dis.synonyms}</span>
            </p>
          )}

          <p className="text-[15px] sm:text-[16px] text-[#696974] leading-relaxed max-w-4xl">
            {dis.overview}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Symptoms */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ECEEF2] shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
                  <AlertTriangle size={18} />
                </div>
                <h2 className="text-xl font-black text-[#233A5E]">Common Symptoms of {dis.name}</h2>
              </div>
              <ul className="space-y-2.5">
                {dis.symptoms.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[14px] text-[#44444F] leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B5A] mt-2 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Causes & Risk Factors */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ECEEF2] shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Stethoscope size={18} />
                </div>
                <h2 className="text-xl font-black text-[#233A5E]">Causes & Risk Factors</h2>
              </div>
              <ul className="space-y-2.5">
                {dis.causes.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[14px] text-[#44444F] leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-[#233A5E] mt-2 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatment & Clinical Care */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ECEEF2] shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck size={18} />
                </div>
                <h2 className="text-xl font-black text-[#233A5E]">Treatment & Medical Management</h2>
              </div>
              <p className="text-[14px] text-[#696974] leading-relaxed">
                {dis.treatmentAndMeds}
              </p>
            </div>

            {/* Recommended Diagnostic Tests */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ECEEF2] shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                  <FileText size={18} />
                </div>
                <h2 className="text-xl font-black text-[#233A5E]">Recommended Diagnostic Tests</h2>
              </div>
              <p className="text-[14px] text-[#696974] leading-relaxed">
                {dis.recommendedTests}
              </p>
            </div>

          </div>

          {/* Right Sidebar: Common Prescribed Salts & Medicines */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-[#ECEEF2] shadow-xs space-y-5 sticky top-24">
              <div>
                <span className="text-[11px] font-bold text-[#FF6B5A] bg-[#FFF1EF] px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                  Prescription Drug Classes
                </span>
                <h3 className="text-lg font-black text-[#233A5E]">
                  Prescribed Medicines & Salts
                </h3>
                <p className="text-[12px] text-[#696974] mt-0.5">
                  Common active pharmaceutical ingredients prescribed for this condition:
                </p>
              </div>

              <div className="space-y-2.5">
                {dis.commonSalts.map((saltItem, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-2xl border border-[#ECEEF2] bg-[#F8FAFC] text-[13px] text-[#233A5E] font-semibold flex items-center gap-2"
                  >
                    <Pill size={15} className="text-[#FF6B5A] shrink-0" />
                    <span>{saltItem}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/medicines"
                className="btn btn-primary w-full py-2.5 text-[13px] text-center"
              >
                Find Medicines for {dis.name.split(" ")[0]}
              </Link>

              <Link
                href="/diseases"
                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#233A5E] hover:text-[#FF6B5A] pt-2"
              >
                <ArrowLeft size={14} /> Back to all conditions
              </Link>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
