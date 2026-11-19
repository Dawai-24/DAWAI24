"use client";

import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import ProductCard from "@/components/Products/ProductCard";
import { useStore } from "@/lib/store";
import { getProductById } from "@/lib/catalog";

export default function Wishlist() {
  const { wishlist, ready } = useStore();
  const items = wishlist.map(getProductById).filter(Boolean);

  return (
    <>
      <Breadcrumbs items={[{ label: "Wishlist" }]} />
      <div className="container-x pb-16">
        <h1 className="text-2xl sm:text-3xl font-black text-[#171725] mb-6 tracking-tight">
          Saved Medicines & Wishlist ({items.length})
        </h1>

        {!ready ? (
          <div className="py-12 text-center text-[#92929D]">Loading wishlist...</div>
        ) : items.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#ECEEF2] shadow-xs max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#FFF1EF] text-[#FF6B5A] flex items-center justify-center">
              <Heart size={28} />
            </div>
            <h3 className="font-extrabold text-lg text-[#171725]">Your Wishlist is Empty</h3>
            <p className="text-[13px] text-[#696974]">
              Keep track of chronic medications and healthcare devices by tapping the heart icon.
            </p>
            <Link href="/medicines" className="btn btn-primary inline-flex text-[14px] px-6 py-2.5">
              Browse Medicines <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
