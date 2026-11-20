import Link from "next/link";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import CategorySearchBar from "@/components/Common/CategorySearchBar";
import { categoryTaxonomy } from "@/data/platinumNav";
import { ArrowRight } from "lucide-react";

export const metadata = { 
  title: "All Categories | Davai24",
  description: "Browse all health categories, chronic care medicines and healthcare devices."
};

export default function Categories() {
  return (
    <div className="container-x pb-16 space-y-6">
      <CategorySearchBar />
      <Breadcrumbs className="!px-0 !py-1" items={[{ label: "All Categories" }]} />
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-black text-[#171725] tracking-tight">Health & Medicine Categories</h1>
          <p className="text-[14px] text-[#696974] mt-1">
            Browse through our verified therapeutic categories and discover affordable substitute medications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(categoryTaxonomy).map(([title, data]) => (
            <div 
              key={title} 
              className="bg-white rounded-3xl p-6 border border-[#ECEEF2] hover:border-[#FF6B5A]/40 shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF1EF] text-[#FF6B5A] flex items-center justify-center font-bold text-lg">
                    {title.charAt(0)}
                  </div>
                  <span className="text-[12px] font-bold text-[#696974] bg-[#F8F9FA] px-2.5 py-1 rounded-full">
                    {data.items.length} sections
                  </span>
                </div>

                <h2 className="text-xl font-extrabold text-[#171725] mb-3">{title}</h2>
                
                <ul className="flex flex-wrap gap-1.5 mb-6">
                  {data.items.slice(0, 6).map((item) => {
                    const href = item.url ? item.url : `/category/${data.slug}?sub=${encodeURIComponent(item.slug)}`;
                    return (
                      <li key={item.name}>
                        <Link 
                          href={href} 
                          className="inline-block text-[12px] font-medium text-[#44444F] bg-[#FAFBFD] hover:bg-[#FFF1EF] hover:text-[#FF6B5A] px-2.5 py-1 rounded-lg border border-[#ECEEF2] transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <Link 
                href={`/category/${data.slug}`}
                className="inline-flex items-center justify-between w-full pt-4 border-t border-[#F0F2F5] text-[13px] font-bold text-[#FF6B5A] hover:underline"
              >
                <span>Explore all {title}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
