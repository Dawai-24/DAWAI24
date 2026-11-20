"use client";

import { useStore } from "@/lib/store";
import { money, FREE_DELIVERY_ABOVE } from "@/lib/catalog";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function Summary() {
  const { sums, coupon } = useStore();
  const row = (l, v, cls = "") => (
    <div className={`flex justify-between items-center text-[13px] ${cls}`}>
      <span className="text-[#696974]">{l}</span>
      <span className="font-semibold text-[#171725]">{v}</span>
    </div>
  );

  return (
    <div className="space-y-3 bg-[#FAFBFD] rounded-2xl p-4 sm:p-5 border border-[#ECEEF2]">
      <h3 className="font-extrabold text-[15px] text-[#171725] border-b border-[#F0F2F5] pb-2.5">
        Bill Summary
      </h3>

      {row("Total MRP", money(sums.mrpTotal))}
      {row("Item Savings", `− ${money(sums.mrpTotal - sums.subtotal)}`, "!text-emerald-600")}
      {row("Subtotal", money(sums.subtotal))}

      {sums.couponOff > 0 && (
        <div className="flex justify-between items-center text-[13px] text-emerald-600">
          <span className="flex items-center gap-1 font-medium">
            <Sparkles size={14} /> Coupon ({coupon})
          </span>
          <span className="font-bold">− {money(sums.couponOff)}</span>
        </div>
      )}

      {row(
        "Estimated Delivery", 
        sums.delivery ? money(sums.delivery) : "FREE", 
        sums.delivery === 0 ? "!text-emerald-600 font-bold" : ""
      )}

      {sums.delivery > 0 && (
        <div className="p-2.5 rounded-xl bg-[#FFF8EE] border border-[#FDE5B5] text-[11px] text-[#9A5B00] font-medium">
          Add <b>{money(FREE_DELIVERY_ABOVE - sums.subtotal)}</b> more to qualify for <b>FREE Delivery</b>!
        </div>
      )}

      <div className="border-t border-[#EAECEF] pt-3 flex justify-between items-baseline">
        <div>
          <span className="text-[15px] font-extrabold text-[#171725]">Total to Pay</span>
          <p className="text-[10px] text-[#92929D]">Inclusive of all taxes</p>
        </div>
        <span className="text-[20px] font-black text-[#171725]">{money(sums.total)}</span>
      </div>

      {sums.savings > 0 && (
        <div className="mt-2 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-[12px] font-bold flex items-center gap-1.5">
          <CheckCircle2 size={16} className="shrink-0" />
          <span>Total savings on this order: {money(sums.savings)}</span>
        </div>
      )}
    </div>
  );
}
