"use client";

import Link from "next/link";
import { ShoppingBag, Trash2, ArrowRight, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import ProductImage from "@/components/Common/ProductImage";
import QtyControl from "@/components/Common/QtyControl";
import CouponBox from "@/components/Cart/CouponBox";
import Summary from "@/components/Cart/Summary";
import { useStore } from "@/lib/store";
import { money } from "@/lib/catalog";

export default function CartPage() {
  const { lines, setQty, removeFromCart, ready } = useStore();

  return (
    <>
      <Breadcrumbs items={[{ label: "Shopping Cart" }]} />
      <div className="container-x pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#171725] mb-6 tracking-tight">
          Shopping Cart ({lines.length} items)
        </h1>

        {!ready ? (
          <div className="py-12 text-center text-[#92929D]">Loading cart...</div>
        ) : lines.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#ECEEF2] shadow-xs max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#FFF1EF] text-[#FF6B5A] flex items-center justify-center">
              <ShoppingBag size={28} />
            </div>
            <h3 className="font-extrabold text-lg text-[#171725]">Your Cart is Empty</h3>
            <p className="text-[13px] text-[#696974]">
              Explore verified substitute medicines and healthcare items with up to 70% savings.
            </p>
            <Link href="/medicines" className="btn btn-primary inline-flex text-[14px] px-6 py-2.5">
              Explore Medicines <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
            
            {/* Cart Items List */}
            <div className="space-y-4">
              <div className="bg-white rounded-3xl border border-[#ECEEF2] divide-y divide-[#F5F6F8] shadow-xs overflow-hidden">
                {lines.map((l) => (
                  <div key={l.id} className="flex gap-4 p-4 sm:p-5 items-center">
                    <div className="bg-[#FAFBFD] p-2 rounded-2xl border border-[#F0F2F5] shrink-0">
                      <ProductImage product={l.product} className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <span className="text-[11px] font-semibold text-[#FF6B5A] bg-[#FFF1EF] px-2 py-0.5 rounded">
                        {l.product.brand}
                      </span>
                      <Link 
                        href={`/products/${l.product.slug}`} 
                        className="font-bold text-[14px] text-[#171725] line-clamp-1 hover:text-[#FF6B5A] transition-colors block"
                      >
                        {l.product.name}
                      </Link>
                      <p className="text-[11px] text-[#92929D]">{l.product.pack}</p>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                        <QtyControl qty={l.qty} onChange={(q) => setQty(l.id, q)} />
                        
                        <div className="text-right">
                          <span className="font-extrabold text-[15px] text-[#171725]">
                            {money(l.product.price * l.qty)}
                          </span>
                          {l.product.mrp > l.product.price && (
                            <span className="block text-[11px] text-[#92929D] line-through">
                              MRP {money(l.product.mrp * l.qty)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <button
                      aria-label={`Remove ${l.product.name}`}
                      className="p-2 text-gray-400 hover:text-[#FF6B5A] transition-colors self-start"
                      onClick={() => removeFromCart(l.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Assurance strip */}
              <div className="rounded-2xl bg-[#FAFBFD] border border-[#ECEEF2] p-4 flex items-center gap-3">
                <ShieldCheck size={20} className="text-emerald-600 shrink-0" />
                <p className="text-[12px] text-[#696974]">
                  Safe, tamper-proof packaging and direct distributor dispatch on all orders.
                </p>
              </div>
            </div>

            {/* Sidebar Checkout / Coupon */}
            <aside className="bg-white rounded-3xl p-6 border border-[#ECEEF2] space-y-5 shadow-xs sticky top-24">
              <CouponBox />
              <Summary />
              <Link 
                href="/checkout" 
                className="btn btn-primary w-full py-3.5 text-[15px] font-bold shadow-md tracking-wide"
              >
                Proceed to Checkout &rarr;
              </Link>
            </aside>
          </div>
        )}
      </div>
    </>
  );
}
