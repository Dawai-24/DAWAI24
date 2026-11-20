import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import ProductListing from "@/components/Products/ProductListing";
import CategorySearchBar from "@/components/Common/CategorySearchBar";
import { healthConditions } from "@/data/categories";
import { allProducts } from "@/lib/catalog";

// Demo mapping from a health topic to related sample categories.
const map = {
  diabetes: ["diabetes-care"],
  "heart-health": ["heart-care"],
  "joint-pain": ["bone-joint"],
  "cough-cold": ["cough-cold"],
  digestion: ["medicines"],
  "skin-concerns": ["personal-care"],
  immunity: ["vitamins-supplements"],
  "sleep-stress": ["wellness-fitness"],
  "women-s-health": ["baby-mom-care", "vitamins-supplements"],
  "child-care": ["baby-mom-care"],
};

export function generateStaticParams() {
  return healthConditions.map((h) => ({ slug: h.slug }));
}

export default async function ConditionPage({ params }) {
  const { slug } = await params;
  const h = healthConditions.find((x) => x.slug === slug);
  if (!h) notFound();
  const cats = map[slug] || [];
  const items = allProducts().filter((p) => cats.includes(p.category));
  return (
    <>
      <CategorySearchBar />
      <Breadcrumbs items={[{ label: "Health Conditions", href: "/health-conditions" }, { label: h.name }]} />
      <div className="container-x">
        <h1 className="text-2xl font-bold mb-1">{h.name}</h1>
        <p className="text-sm text-slate-500 mb-4">Sample products grouped for this topic. Consult a doctor for medical advice.</p>
        <ProductListing products={items} />
      </div>
    </>
  );
}
