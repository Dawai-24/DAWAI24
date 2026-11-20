"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SearchX } from "lucide-react";
import ProductListing from "@/components/Products/ProductListing";
import { categories } from "@/data/categories";
import { searchCategories, searchProducts } from "@/lib/catalog";

export default function SearchResults() {
  const q = (useSearchParams().get("q") || "").trim();

  if (!q) {
    return (
      <div className="card p-10 text-center">
        <SearchX size={40} className="mx-auto text-brand-200" />
        <h1 className="font-bold text-lg mt-3">Search MediCart</h1>
        <p className="text-sm text-slate-500 mt-1">Type a product, brand or category in the search bar.</p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {categories.slice(0, 6).map((c) => <Link key={c.slug} href={`/category/${c.slug}`} className="text-sm rounded-full bg-brand-50 text-brand-700 px-3 py-1">{c.name}</Link>)}
        </div>
      </div>
    );
  }

  const prods = searchProducts(q);
  const cats = searchCategories(q);

  return (
    <>
      <h1 className="text-2xl font-bold">Results for “{q}”</h1>
      {cats.length > 0 && (
        <p className="text-sm mt-2">Categories: {cats.map((c) => <Link key={c.slug} href={`/category/${c.slug}`} className="text-brand-700 font-semibold underline mr-3">{c.name}</Link>)}</p>
      )}
      <div className="mt-4">
        {prods.length === 0 ? (
          <div className="card p-10 text-center">
            <SearchX size={40} className="mx-auto text-brand-200" />
            <p className="font-semibold mt-3">No results found for “{q}”</p>
            <p className="text-sm text-slate-500 mt-1">Check the spelling or try a broader term.</p>
            <Link href="/medicines" className="btn btn-primary mt-4">Browse all products</Link>
          </div>
        ) : (
          <ProductListing key={q} products={prods} />
        )}
      </div>
    </>
  );
}
