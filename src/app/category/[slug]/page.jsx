import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import ProductListing from "@/components/Products/ProductListing";
import { categoryTaxonomy, findCategoryOrSubcategory } from "@/data/platinumNav";
import { getCategory, categories } from "@/data/categories";
import { byCategory } from "@/lib/catalog";

export function generateStaticParams() {
  const slugs = new Set([
    ...categories.map((c) => c.slug),
    ...Object.values(categoryTaxonomy).filter((c) => c.slug).map((c) => c.slug),
  ]);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tax = findCategoryOrSubcategory(slug);
  const baseCat = getCategory(slug);
  const title = tax?.name || baseCat?.name || "Category";
  return { 
    title: `${title} - Medicines & Health Products | Davai24`,
    description: tax?.description || `Explore ${title} medicines, substitutes, and healthcare essentials.`
  };
}

export default async function CategoryPage({ params, searchParams }) {
  const { slug } = await params;
  const sp = await searchParams;
  const tax = findCategoryOrSubcategory(slug);
  const baseCat = getCategory(slug);

  if (!tax && !baseCat) notFound();

  const title = tax?.name || baseCat?.name;
  const subItems = tax?.items || (baseCat?.subs ? baseCat.subs.map((s, idx) => ({ name: s, slug: `sub-${idx}` })) : []);

  // Filter products by subquery if query param present
  const subQuery = sp?.sub;
  const allProds = byCategory(slug);
  const filteredProds = subQuery 
    ? allProds.filter((p) => p.subcategory === subQuery || String(p.subcategory) === String(subQuery))
    : allProds;

  return (
    <>
      <Breadcrumbs 
        items={[
          { label: "All Categories", href: "/categories" }, 
          { label: title }
        ]} 
      />

      <div className="container-x pb-16 space-y-6">
        
        {/* Minimal Category Header without giant banner */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h1 className="text-2xl sm:text-3xl font-black text-[#171725] tracking-tight">
              {title}
            </h1>
            <span className="text-[13px] text-[#92929D] font-medium">
              {filteredProds.length} products available
            </span>
          </div>

          {/* Subcategory Filter Pills Strip */}
          {subItems && subItems.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-1 pb-2">
              <Link
                href={`/category/${slug}`}
                className={`px-4 py-1.5 rounded-full text-[13px] font-bold transition-all ${
                  !subQuery 
                    ? "bg-[#FF6B5A] text-white shadow-xs" 
                    : "bg-[#F0F2F5] text-[#44444F] hover:bg-[#E4E7EC]"
                }`}
              >
                All
              </Link>

              {subItems.map((sub) => {
                const isCur = subQuery === sub.slug;
                const directHref = `/category/${slug}/${sub.slug}`;
                return (
                  <Link
                    key={sub.name}
                    href={directHref}
                    className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all border ${
                      isCur
                        ? "bg-[#FF6B5A] text-white border-[#FF6B5A] shadow-xs"
                        : "bg-white text-[#44444F] border-[#E2E4E8] hover:border-[#FF6B5A] hover:text-[#FF6B5A]"
                    }`}
                  >
                    {sub.name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Product Cards Grid & Filters */}
        <ProductListing
          key={`${slug}-${subQuery || "all"}`}
          products={filteredProds}
          emptyText={`No products found in ${title}. Check back soon for stock.`}
        />

      </div>
    </>
  );
}
