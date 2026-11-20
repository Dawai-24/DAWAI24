"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";

const PAGE = 16;

export default function ProductListing({ products, emptyText = "No products found." }) {
  const [sort, setSort] = useState("relevance");
  const [shown, setShown] = useState(PAGE);

  const list = useMemo(() => {
    let l = [...products];
    if (sort === "low") l.sort((a, b) => a.price - b.price);
    if (sort === "high") l.sort((a, b) => b.price - a.price);
    if (sort === "disc") l.sort((a, b) => b.discount - a.discount);
    if (sort === "rating") l.sort((a, b) => b.rating - a.rating);
    return l;
  }, [products, sort]);

  return (
    <div>
      {/* Top Bar: Count & Sorting */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-white rounded-2xl p-4 border border-[#ECEEF2] shadow-xs">
        <div className="text-[14px] text-[#696974]">
          Showing <span className="font-bold text-[#171725]">{list.length}</span> verified medicines & products
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-[13px]">
            <span className="text-[#92929D] hidden sm:inline">Sort by:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent font-bold text-[#171725] border-0 outline-none cursor-pointer pr-1"
            >
              <option value="relevance">Popularity</option>
              <option value="disc">Biggest Savings</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Cards Grid - Clean Full Width */}
      <div className="space-y-8">
        {list.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#ECEEF2] space-y-3">
            <p className="text-lg font-bold text-[#171725]">{emptyText}</p>
            <p className="text-[13px] text-[#696974]">No medications found in this category.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3.5 sm:gap-4">
              {list.slice(0, shown).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            {shown < list.length && (
              <div className="text-center pt-4">
                <button
                  onClick={() => setShown((s) => s + PAGE)}
                  className="btn btn-outline px-8 py-2.5 text-[14px]"
                >
                  Load More Medicines ({list.length - shown} remaining)
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
