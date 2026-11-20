import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import ProductListing from "@/components/Products/ProductListing";
import CategorySearchBar from "@/components/Common/CategorySearchBar";
import { categoryTaxonomy, findCategoryOrSubcategory } from "@/data/platinumNav";
import { byCategoryAndSubcategory, byCategory } from "@/lib/catalog";

export function generateStaticParams() {
  const params = [];
  Object.values(categoryTaxonomy).forEach((cat) => {
    if (cat.items) {
      cat.items.forEach((item) => {
        if (item.slug) {
          params.push({ slug: cat.slug, subslug: item.slug });
        }
      });
    }
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { slug, subslug } = await params;
  const subData = findCategoryOrSubcategory(slug, subslug);
  const title = subData ? subData.name : "Subcategory";
  return {
    title: `${title} - Buy Medicines & Substitutes Online | Davai24`,
    description: subData?.description || `Explore ${title} medicines and healthcare essentials on Davai24.`,
  };
}

export default async function SubcategoryPage({ params }) {
  const { slug, subslug } = await params;
  const subData = findCategoryOrSubcategory(slug, subslug);

  if (!subData) notFound();

  const title = subData.name;
  const parentName = subData.parentName;
  const parentItems = subData.items || [];

  // Get products matching this subcategory
  let prods = byCategoryAndSubcategory(slug, subslug);
  if (prods.length === 0) {
    prods = byCategory(slug);
  }

  return (
    <>
      {/* Category Top Search Bar */}
      <CategorySearchBar />

      <Breadcrumbs
        items={[
          { label: "Category", href: "/categories" },
          { label: parentName, href: `/category/${slug}` },
          { label: title },
        ]}
      />

      <div className="container-x pb-16 space-y-6">
        
        {/* Category Header */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#171725] tracking-tight">
                {title}
              </h1>
              <p className="text-[13px] text-[#696974] mt-0.5">
                In <span className="font-semibold text-[#171725]">{parentName}</span>
              </p>
            </div>
            <span className="text-[13px] text-[#92929D] font-medium">
              {prods.length} products available
            </span>
          </div>

          {/* Sibling Subcategories Navigation Pills */}
          {parentItems.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-1 pb-2">
              <Link
                href={`/category/${slug}`}
                className="px-4 py-1.5 rounded-full text-[13px] font-medium border border-[#E2E4E8] bg-white text-[#44444F] hover:bg-[#F0F2F5]"
              >
                All {parentName}
              </Link>

              {parentItems.map((item) => {
                const isCur = item.slug === subslug;
                return (
                  <Link
                    key={item.name}
                    href={`/category/${slug}/${item.slug}`}
                    className={`px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all border ${
                      isCur
                        ? "bg-[#FF6B5A] text-white border-[#FF6B5A] shadow-xs"
                        : "bg-white text-[#44444F] border-[#E2E4E8] hover:border-[#FF6B5A] hover:text-[#FF6B5A]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Product Cards Grid & Filters */}
        <ProductListing
          key={`${slug}-${subslug}`}
          products={prods}
          emptyText={`No products currently available under ${title}.`}
        />

      </div>
    </>
  );
}
