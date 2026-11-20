"use client";

import Link from "next/link";
import { ShoppingBag, Trash2, X, ArrowRight } from "lucide-react";
import { useStore } from "@/lib/store";
import { money } from "@/lib/catalog";
import ProductImage from "@/components/Common/ProductImage";
import QtyControl from "@/components/Common/QtyControl";

export default function CartDrawer() {
  const { drawer, closeDrawer, lines, sums, setQty, removeFromCart } = useStore();
  if (!drawer) return null;

  return (
    <div className="fixed inset-0 z-[65]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity" 
        onClick={closeDrawer} 
      />
      
      {/* Drawer */}
      <aside 
        className="absolute right-0 top-0 h-full w-full max-w-md bg-white flex flex-col anim-slide shadow-2xl" 
        role="dialog" 
        aria-label="Shopping Cart"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#F0F2F5]">
          <h2 className="font-extrabold text-lg text-[#171725]">Your Cart ({lines.length})</h2>
          <button 
            aria-label="Close cart" 
            onClick={closeDrawer}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-[#171725] hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex-1 grid place-items-center text-center p-8">
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#FFF1EF] text-[#FF6B5A] flex items-center justify-center">
                <ShoppingBag size={28} />
              </div>
              <p className="font-bold text-lg text-[#171725]">Your Cart is Empty</p>
              <p className="text-[13px] text-[#696974] max-w-xs">
                Explore affordable substitute medicines with same active ingredients.
              </p>
              <Link 
                href="/medicines" 
                onClick={closeDrawer} 
                className="btn btn-primary inline-flex text-[14px] px-6 py-2.5 mt-2"
              >
                Browse Medicines
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Items list */}
            <ul className="flex-1 overflow-y-auto divide-y divide-[#F6F6F9] px-2">
              {lines.map((l) => (
                <li key={l.id} className="flex gap-3.5 p-4 items-center">
                  <div className="bg-[#FAFBFD] p-1.5 rounded-xl border border-[#ECEEF2] shrink-0">
                    <ProductImage product={l.product} className="w-14 h-14 object-contain" />
                  </div>
                  
                  <div className="flex-1 min-w-0 space-y-0.5">
                    <span className="text-[10px] font-bold text-[#FF6B5A] bg-[#FFF1EF] px-1.5 py-0.2 rounded">
                      {l.product.brand}
                    </span>
                    <Link 
                      href={`/products/${l.product.slug}`} 
                      onClick={closeDrawer} 
                      className="font-bold text-[13px] text-[#171725] line-clamp-1 hover:text-[#FF6B5A] block"
                    >
                      {l.product.name}
                    </Link>
                    <p className="text-[11px] text-[#92929D]">{l.product.pack}</p>
                    
                    <div className="flex items-center justify-between pt-1.5">
                      <QtyControl qty={l.qty} onChange={(q) => setQty(l.id, q)} />
                      <span className="font-extrabold text-[14px] text-[#171725]">{money(l.product.price * l.qty)}</span>
                    </div>
                  </div>

                  <button 
                    aria-label={`Remove ${l.product.name}`} 
                    onClick={() => removeFromCart(l.id)} 
                    className="text-gray-400 hover:text-[#FF6B5A] p-1 self-start transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </li>
              ))}
            </ul>

            {/* Bottom summary and actions */}
            <div className="border-t border-[#F0F2F5] p-5 space-y-3 bg-[#FAFBFD]">
              <div className="space-y-1.5 text-[13px]">
                <div className="flex justify-between text-[#696974]">
                  <span>Item Total</span>
                  <span className="font-semibold text-[#171725]">{money(sums.subtotal)}</span>
                </div>
                {sums.savings > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>You Save</span>
                    <span>{money(sums.savings)}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#696974]">
                  <span>Delivery Fee</span>
                  <span className="font-bold text-emerald-600">
                    {sums.delivery ? money(sums.delivery) : "FREE"}
                  </span>
                </div>
                <div className="flex justify-between text-[15px] font-extrabold text-[#171725] pt-2 border-t border-[#EAECEF]">
                  <span>To Pay</span>
                  <span>{money(sums.total)}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <Link 
                  href="/cart" 
                  onClick={closeDrawer} 
                  className="btn btn-outline py-2.5 text-[13px]"
                >
                  View Cart
                </Link>
                <Link 
                  href="/checkout" 
                  onClick={closeDrawer} 
                  className="btn btn-primary py-2.5 text-[13px] flex items-center justify-center gap-1"
                >
                  Checkout <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
