import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import ProductDetail from "@/components/Products/ProductDetail";
import ProductRow from "@/components/Products/ProductRow";
import { getCategory } from "@/data/categories";
import { categoryTaxonomy } from "@/data/platinumNav";
import { allProducts, getProduct, related } from "@/lib/catalog";

export function generateStaticParams() {
  return allProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  return { 
    title: p ? `${p.name} - Buy Online | Davai24` : "Product | Davai24",
    description: p ? p.description : "Affordable genuine medicine on Davai24."
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  // Look up category in categories or categoryTaxonomy
  const cat = getCategory(p.category) || Object.values(categoryTaxonomy).find((c) => c.slug === p.category);
  const catName = cat ? cat.name : "Medicines";
  const catSlug = cat ? cat.slug : "medicines";
  const rel = related(p);

  return (
    <>
      <Breadcrumbs 
        items={[
          { label: "All Categories", href: "/categories" },
          { label: catName, href: `/category/${catSlug}` }, 
          { label: p.name }
        ]} 
      />
      <div className="container-x pb-12">
        <ProductDetail product={p} />
      </div>
      {rel.length > 0 && (
        <ProductRow 
          title="Similar Verified Products & Substitutes" 
          products={rel} 
          href={`/category/${catSlug}`} 
        />
      )}
    </>
  );
}
