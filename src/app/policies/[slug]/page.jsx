import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { policies } from "@/data/content";

export function generateStaticParams() {
  return Object.keys(policies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return { title: `${policies[slug]?.title || "Policy"} | Davai24` };
}

export default async function Policy({ params }) {
  const { slug } = await params;
  const p = policies[slug];
  if (!p) notFound();

  return (
    <>
      <Breadcrumbs items={[{ label: "Policies", href: "/policies/terms-and-conditions" }, { label: p.title }]} />
      <div className="container-x max-w-5xl pb-16">
        <div className="grid md:grid-cols-[240px_1fr] gap-8 items-start">
          
          {/* Policy Navigation Sidebar */}
          <nav className="bg-white rounded-3xl p-4 border border-[#ECEEF2] shadow-xs hidden md:block space-y-1" aria-label="Policies">
            <p className="px-3 py-2 text-[11px] font-bold text-[#92929D] uppercase tracking-wider">
              Legal & Compliance
            </p>
            {Object.entries(policies).map(([k, v]) => (
              <Link 
                key={k} 
                href={`/policies/${k}`} 
                className={`block rounded-2xl px-3.5 py-2.5 text-[13px] font-semibold transition-colors ${
                  k === slug 
                    ? "bg-[#FFF1EF] text-[#FF6B5A]" 
                    : "text-[#696974] hover:bg-gray-50 hover:text-[#171725]"
                }`}
              >
                {v.title}
              </Link>
            ))}
          </nav>

          {/* Policy Article Content */}
          <article className="bg-white rounded-3xl p-6 sm:p-10 border border-[#ECEEF2] shadow-xs space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#171725] tracking-tight">{p.title}</h1>
              <p className="text-[12px] text-[#92929D] mt-1">Last revised: January 2026</p>
            </div>

            <div className="space-y-4 text-[14px] text-[#44444F] leading-relaxed border-t border-[#F0F2F5] pt-6">
              {p.body.map((t, i) => (
                <p key={i} className="leading-relaxed">
                  {t}
                </p>
              ))}
            </div>
          </article>

        </div>
      </div>
    </>
  );
}
