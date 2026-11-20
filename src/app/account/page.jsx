"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, LogOut, MapPin, Package, ShieldCheck, Wallet, ChevronRight } from "lucide-react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { useStore } from "@/lib/store";

export default function Account() {
  const router = useRouter();
  const { user, ready, login, logout, orders, addresses, wishlist, toast } = useStore();
  const [f, setF] = useState({ name: "", email: "", phone: "" });
  const [err, setErr] = useState({});

  useEffect(() => { 
    if (ready && !user) router.replace("/login"); 
  }, [ready, user, router]);

  useEffect(() => { 
    if (user) setF({ name: user.name || "", email: user.email || "", phone: user.phone || "" }); 
  }, [user]);

  if (!ready || !user) return <div className="container-x py-16 text-gray-400 text-center">Loading account...</div>;

  const save = (e) => {
    e.preventDefault();
    const v = {};
    if (f.name.trim().length < 2) v.name = "Enter your full name";
    if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) v.email = "Enter a valid email address";
    setErr(v);
    if (Object.keys(v).length) return;
    login({ ...user, name: f.name.trim(), email: f.email });
    toast("Profile details updated successfully", "success");
  };

  const tiles = [
    { icon: Package, title: "Orders & Prescriptions", sub: `${orders.length} order(s) placed`, href: "/orders" },
    { icon: Heart, title: "Wishlist", sub: `${wishlist.length} item(s) saved`, href: "/wishlist" },
    { icon: MapPin, title: "Saved Delivery Addresses", sub: `${addresses.length} address(es)`, href: "/account/addresses" },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "My Account" }]} />
      <div className="container-x max-w-4xl pb-16 space-y-8">
        
        {/* User Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ECEEF2] shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#FFF1EF] text-[#FF6B5A] font-black text-2xl flex items-center justify-center">
              {user.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-[#171725]">{user.name}</h1>
                <span className="bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                  Verified
                </span>
              </div>
              <p className="text-[13px] text-[#696974] mt-0.5">+91 {user.phone}</p>
            </div>
          </div>

          <button
            onClick={() => {
              logout();
              router.push("/");
            }}
            className="btn btn-outline py-2 px-5 text-[13px] flex items-center gap-1.5"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>

        {/* Dashboard quick tiles */}
        <div className="grid sm:grid-cols-3 gap-4">
          {tiles.map((t) => {
            const Icon = t.icon;
            return (
              <Link
                key={t.href}
                href={t.href}
                className="group bg-white rounded-3xl p-5 border border-[#ECEEF2] hover:border-[#FF6B5A]/40 transition-all hover:shadow-xs flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF1EF] text-[#FF6B5A] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[14px] text-[#171725]">{t.title}</h3>
                    <p className="text-[12px] text-[#92929D] mt-0.5">{t.sub}</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            );
          })}
        </div>

        {/* Edit profile form */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ECEEF2] shadow-xs space-y-5">
          <h2 className="font-extrabold text-[17px] text-[#171725] border-b border-[#F0F2F5] pb-3">
            Profile Settings
          </h2>

          <form onSubmit={save} className="grid sm:grid-cols-2 gap-4" noValidate>
            <div>
              <label className="text-[12px] font-bold text-[#171725] block mb-1">Full Name</label>
              <input
                className={`input ${err.name ? "error" : ""}`}
                value={f.name}
                onChange={(e) => {
                  setF({ ...f, name: e.target.value });
                  setErr({ ...err, name: "" });
                }}
              />
              {err.name && <p className="field-error">{err.name}</p>}
            </div>

            <div>
              <label className="text-[12px] font-bold text-[#171725] block mb-1">Email Address</label>
              <input
                type="email"
                className={`input ${err.email ? "error" : ""}`}
                value={f.email}
                onChange={(e) => {
                  setF({ ...f, email: e.target.value });
                  setErr({ ...err, email: "" });
                }}
              />
              {err.email && <p className="field-error">{err.email}</p>}
            </div>

            <div className="sm:col-span-2">
              <label className="text-[12px] font-bold text-[#171725] block mb-1">Primary Mobile Number</label>
              <input
                disabled
                className="input bg-[#FAFBFD] text-gray-500 cursor-not-allowed"
                value={`+91 ${f.phone}`}
              />
              <p className="text-[11px] text-[#92929D] mt-1">Verified with SMS OTP</p>
            </div>

            <div className="sm:col-span-2 pt-2">
              <button type="submit" className="btn btn-primary py-2.5 px-6 text-[14px]">
                Save Changes
              </button>
            </div>
          </form>
        </div>

      </div>
    </>
  );
}
