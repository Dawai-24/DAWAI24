"use client";
import { useState } from "react";
import { BadgePercent, X } from "lucide-react";
import { useStore } from "@/lib/store";
import { COUPONS } from "@/lib/catalog";

export default function CouponBox() {
  const { coupon, setCoupon, toast } = useStore();
  const [v, setV] = useState("");

  const apply = (e) => {
    e.preventDefault();
    const code = v.trim().toUpperCase();
    if (!COUPONS[code]) return toast("Invalid coupon code", "error");
    setCoupon(code);
    setV("");
    toast(`${code} applied: ${COUPONS[code].label}`);
  };

  if (coupon) {
    return (
      <div className="flex items-center justify-between rounded-lg bg-green-50 border border-green-200 px-3 py-2 text-sm">
        <span className="flex items-center gap-2 text-green-800"><BadgePercent size={16} /> <b>{coupon}</b> – {COUPONS[coupon].label}</span>
        <button aria-label="Remove coupon" onClick={() => setCoupon("")}><X size={16} /></button>
      </div>
    );
  }
  return (
    <form onSubmit={apply} className="flex gap-2">
      <input className="input" placeholder="Coupon code (try WELCOME10)" value={v} onChange={(e) => setV(e.target.value)} aria-label="Coupon code" />
      <button className="btn btn-outline">Apply</button>
    </form>
  );
}
