import Link from "next/link";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import ProductListing from "@/components/Products/ProductListing";
import { getActiveProducts } from "@/lib/dbCatalog";

export const metadata = {
  title: "All Health Products & OTC Essentials | Davai24",
  description: "Browse certified over-the-counter health products, personal care essentials, supplements, and devices.",
};

export const dynamic = "force-dynamic";
export default async function AllHealthProductsPage() {
  const prods = await getActiveProducts({prescriptionRequired:false});

  return (
    <>
      <Breadcrumbs items={[{ label: "Health Resources" }, { label: "All Health Products" }]} />

      <div className="container-x pb-16 space-y-6">
        
        {/* Simple Header */}
        <div className="flex flex-wrap items-baseline justify-between gap-2 pt-2">
          <h1 className="text-2xl sm:text-3xl font-black text-[#171725] tracking-tight">
            All Health & Wellness Products
          </h1>
          <span className="text-[13px] text-[#92929D] font-medium">
            {prods.length} products available
          </span>
        </div>

        {/* Product Listing */}
        <ProductListing
          products={prods}
          emptyText="No health products currently available."
        />

      </div>
    </>
  );
}
