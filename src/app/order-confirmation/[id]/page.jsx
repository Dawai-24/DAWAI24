"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { useStore } from "@/lib/store";
import { money } from "@/lib/catalog";

export default function Confirmation() {
  const { id } = useParams();
  const { orders, ready } = useStore();
  const o = orders.find((x) => x.id === id);
  if (!ready) return <div className="container-x py-16 text-slate-500">Loading…</div>;
  if (!o) return (
    <div className="container-x py-16 text-center">
      <p className="font-semibold">Order not found in this browser.</p>
      <Link href="/orders" className="btn btn-primary mt-4">My orders</Link>
    </div>
  );
  return (
    <div className="container-x py-10 max-w-xl text-center">
      <CheckCircle2 size={64} className="mx-auto text-green-600" />
      <h1 className="text-2xl font-extrabold mt-3">Demo order placed!</h1>
      <p className="text-slate-600 mt-1">Order ID <b>{o.id}</b> · {money(o.total)}</p>
      <p className="text-xs text-slate-500 mt-2">This is a demo. No payment was taken and nothing will be delivered.</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
        <Link href={`/orders/${o.id}`} className="btn btn-primary">Track order</Link>
        <Link href="/medicines" className="btn btn-outline">Continue shopping</Link>
      </div>
    </div>
  );
}
