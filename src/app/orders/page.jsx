"use client";

import Link from "next/link";
import { PackageOpen, ArrowRight, Clock, ShieldCheck, ChevronRight } from "lucide-react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { STEPS, demoStatus } from "@/components/Orders/Tracker";
import { useStore } from "@/lib/store";
import { money } from "@/lib/catalog";

export default function Orders() {
  const { orders, ready } = useStore();

  return (
    <>
      <Breadcrumbs items={[{ label: "My Orders" }]} />
      <div className="container-x max-w-4xl pb-16">
        <h1 className="text-2xl sm:text-3xl font-black text-[#171725] mb-6 tracking-tight">
          My Medicine Orders ({orders.length})
        </h1>

        {!ready ? (
          <div className="py-12 text-center text-[#92929D]">Loading orders...</div>
        ) : orders.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#ECEEF2] shadow-xs max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#FFF1EF] text-[#FF6B5A] flex items-center justify-center">
              <PackageOpen size={28} />
            </div>
            <h3 className="font-extrabold text-lg text-[#171725]">No Orders Placed Yet</h3>
            <p className="text-[13px] text-[#696974]">
              Start saving on your prescriptions and health essentials today.
            </p>
            <Link href="/medicines" className="btn btn-primary inline-flex text-[14px] px-6 py-2.5">
              Browse Medicines <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((o) => {
              const statusStep = demoStatus(o);
              const statusText = STEPS[statusStep] || "Processing";
              return (
                <Link
                  key={o.id}
                  href={`/orders/${o.id}`}
                  className="group bg-white rounded-3xl p-5 sm:p-6 border border-[#ECEEF2] hover:border-[#FF6B5A]/40 transition-all hover:shadow-xs block space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F0F2F5] pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#FFF1EF] text-[#FF6B5A] flex items-center justify-center font-bold">
                        #{o.id.slice(-4)}
                      </div>
                      <div>
                        <p className="font-extrabold text-[15px] text-[#171725]">Order #{o.id}</p>
                        <p className="text-[11px] text-[#92929D] flex items-center gap-1">
                          <Clock size={12} /> Placed on {new Date(o.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="bg-emerald-50 text-emerald-700 text-[12px] font-bold px-3 py-1 rounded-full border border-emerald-200">
                        {statusText}
                      </span>
                      <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 text-[13px]">
                    <span className="text-[#696974]">
                      {o.items.length} product(s) ordered
                    </span>
                    <div className="text-right">
                      <span className="text-[12px] text-[#92929D] block">Total Amount:</span>
                      <span className="text-[16px] font-black text-[#171725]">{money(o.total)}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
