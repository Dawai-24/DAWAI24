"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldCheck, Truck, CreditCard, Banknote, Smartphone, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import CouponBox from "@/components/Cart/CouponBox";
import Summary from "@/components/Cart/Summary";
import { useStore } from "@/lib/store";
import { validPin } from "@/components/Header/PinModal";

const payments = [
  { id: "cod", label: "Cash on Delivery", desc: "Pay via Cash or UPI upon medicine arrival", icon: Banknote },
  { id: "upi", label: "Instant UPI (GPay, PhonePe, Paytm)", desc: "Quick contactless scan or VPA request", icon: Smartphone },
  { id: "card", label: "Credit / Debit Card", desc: "Secure encrypted transaction", icon: CreditCard },
];

export default function Checkout() {
  const router = useRouter();
  const { lines, sums, coupon, addresses, user, pin, placeOrder, saveAddress, toast, ready } = useStore();
  const [sel, setSel] = useState("");
  const [f, setF] = useState({ name: user?.name || "", phone: "", address: "", city: "", pin: pin || "560102" });
  const [pay, setPay] = useState("cod");
  const [err, setErr] = useState({});
  const [busy, setBusy] = useState(false);

  const set = (k) => (e) => {
    setF((x) => ({ ...x, [k]: e.target.value }));
    setErr((x) => ({ ...x, [k]: "" }));
  };

  const validate = (a) => {
    const e = {};
    if (a.name.trim().length < 2) e.name = "Enter your full name";
    if (!/^[6-9]\d{9}$/.test(a.phone)) e.phone = "Enter a valid 10-digit mobile number";
    if (a.address.trim().length < 6) e.address = "Enter your complete street address";
    if (a.city.trim().length < 2) e.city = "Enter your city";
    if (!validPin(a.pin)) e.pin = "Enter a valid 6-digit PIN code";
    return e;
  };

  if (!ready) return <div className="container-x py-10 text-gray-500">Loading checkout...</div>;
  if (lines.length === 0) {
    return (
      <div className="container-x py-16 text-center">
        <h2 className="text-xl font-bold text-[#171725]">Your Cart is Empty</h2>
        <p className="text-[#696974] mt-1 text-sm">Add medicines before proceeding to checkout.</p>
        <Link href="/medicines" className="btn btn-primary mt-4">Browse Medicines</Link>
      </div>
    );
  }

  const submit = async (e) => {
    e.preventDefault();
    const addr = sel ? addresses.find((a) => a.id === sel) : f;
    const errors = validate(addr);
    if (Object.keys(errors).length) return setErr(errors);
    if (!sel && f.save) saveAddress({ ...f, id: "addr-" + Date.now() });

    setBusy(true);
    try {
      const response = await fetch("/api/orders", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ address: addr, payment: pay, lines, coupon }) });
      if(response.status===401){router.push("/login?next=/checkout");return}
      if (!response.ok) throw new Error("Order could not be placed");
      const order = await response.json();
      placeOrder(order);
      toast("Order placed successfully!", "success");
      router.push(`/order-confirmation/${order.id}`);
    } catch (error) { setBusy(false); toast(error.message, "error"); }
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Cart", href: "/cart" }, { label: "Checkout" }]} />
      <div className="container-x pb-16">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#171725] mb-6 tracking-tight">
          Checkout & Delivery
        </h1>

        <form onSubmit={submit} className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
          
          <div className="space-y-6">
            {/* Delivery Address Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#ECEEF2] shadow-xs space-y-4">
              <div className="flex items-center gap-2 border-b border-[#F0F2F5] pb-3">
                <div className="w-8 h-8 rounded-full bg-[#FFF1EF] text-[#FF6B5A] flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h2 className="font-extrabold text-[16px] text-[#171725]">Delivery Address</h2>
              </div>

              {addresses.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[13px] font-bold text-[#696974]">Choose saved address:</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {addresses.map((a) => (
                      <label 
                        key={a.id} 
                        className={`p-3.5 rounded-2xl border cursor-pointer block text-[13px] transition-all ${
                          sel === a.id ? "border-[#FF6B5A] bg-[#FFF8F7] ring-1 ring-[#FF6B5A]" : "border-[#E2E4E8] hover:bg-gray-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="addr"
                          className="sr-only"
                          checked={sel === a.id}
                          onChange={() => setSel(a.id)}
                        />
                        <p className="font-bold text-[#171725]">{a.name} ({a.phone})</p>
                        <p className="text-[#696974] mt-0.5 line-clamp-2">{a.address}, {a.city} - {a.pin}</p>
                      </label>
                    ))}
                    <label 
                      className={`p-3.5 rounded-2xl border cursor-pointer block text-[13px] transition-all ${
                        sel === "" ? "border-[#FF6B5A] bg-[#FFF8F7] ring-1 ring-[#FF6B5A]" : "border-[#E2E4E8] hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="addr"
                        className="sr-only"
                        checked={sel === ""}
                        onChange={() => setSel("")}
                      />
                      <p className="font-bold text-[#171725]">+ Enter New Address</p>
                      <p className="text-[#92929D] mt-0.5">Ship to a different location</p>
                    </label>
                  </div>
                </div>
              )}

              {/* New address form */}
              {sel === "" && (
                <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                  <div>
                    <label className="text-[12px] font-bold text-[#171725] block mb-1">Full Name</label>
                    <input className={`input ${err.name ? "error" : ""}`} placeholder="e.g. Rahul Sharma" value={f.name} onChange={set("name")} />
                    {err.name && <p className="field-error">{err.name}</p>}
                  </div>
                  <div>
                    <label className="text-[12px] font-bold text-[#171725] block mb-1">Mobile Number</label>
                    <input className={`input ${err.phone ? "error" : ""}`} placeholder="10-digit mobile" value={f.phone} onChange={set("phone")} />
                    {err.phone && <p className="field-error">{err.phone}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-[12px] font-bold text-[#171725] block mb-1">Street Address / House No.</label>
                    <input className={`input ${err.address ? "error" : ""}`} placeholder="Flat/House, building, street, landmark" value={f.address} onChange={set("address")} />
                    {err.address && <p className="field-error">{err.address}</p>}
                  </div>
                  <div>
                    <label className="text-[12px] font-bold text-[#171725] block mb-1">City</label>
                    <input className={`input ${err.city ? "error" : ""}`} placeholder="City" value={f.city} onChange={set("city")} />
                    {err.city && <p className="field-error">{err.city}</p>}
                  </div>
                  <div>
                    <label className="text-[12px] font-bold text-[#171725] block mb-1">PIN Code</label>
                    <input className={`input ${err.pin ? "error" : ""}`} placeholder="6-digit PIN" maxLength={6} value={f.pin} onChange={set("pin")} />
                    {err.pin && <p className="field-error">{err.pin}</p>}
                  </div>
                </div>
              )}
            </div>

            {/* Payment Method Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#ECEEF2] shadow-xs space-y-4">
              <div className="flex items-center gap-2 border-b border-[#F0F2F5] pb-3">
                <div className="w-8 h-8 rounded-full bg-[#FFF1EF] text-[#FF6B5A] flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h2 className="font-extrabold text-[16px] text-[#171725]">Payment Option</h2>
              </div>

              <div className="space-y-2.5">
                {payments.map((p) => {
                  const Icon = p.icon;
                  const isChecked = pay === p.id;
                  return (
                    <label
                      key={p.id}
                      className={`flex items-center gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all ${
                        isChecked 
                          ? "border-[#FF6B5A] bg-[#FFF8F7] ring-1 ring-[#FF6B5A]" 
                          : "border-[#ECEEF2] hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="pay"
                        value={p.id}
                        checked={isChecked}
                        onChange={(e) => setPay(e.target.value)}
                        className="w-4 h-4 text-[#FF6B5A] focus:ring-[#FF6B5A]"
                      />
                      <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-[#ECEEF2] flex items-center justify-center text-[#171725] shrink-0">
                        <Icon size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-[14px] text-[#171725]">{p.label}</p>
                        <p className="text-[12px] text-[#696974]">{p.desc}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Summary */}
          <aside className="bg-white rounded-3xl p-6 border border-[#ECEEF2] space-y-5 shadow-xs sticky top-24">
            <CouponBox />
            <Summary />
            <button
              type="submit"
              disabled={busy}
              className="btn btn-primary w-full py-3.5 text-[15px] font-bold shadow-md tracking-wide disabled:opacity-50"
            >
              {busy ? "Placing Order..." : `Pay ${sums.total ? `₹${sums.total}` : ""} & Place Order`}
            </button>
            <div className="flex items-center justify-center gap-2 text-[11px] text-[#92929D]">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>Safe & Secure 256-bit Encrypted Checkout</span>
            </div>
          </aside>

        </form>
      </div>
    </>
  );
}
