"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import Tracker, { demoStatus } from "@/components/Orders/Tracker";
import { useStore } from "@/lib/store";
import { money } from "@/lib/catalog";

export default function OrderDetail() {
  const { id } = useParams();
  const { orders, ready } = useStore();
  const o = orders.find((x) => x.id === id);
  if (!ready) return <div className="container-x py-16 text-slate-500">Loading…</div>;
  return (
    <>
      <Breadcrumbs items={[{ label: "My Orders", href: "/orders" }, { label: `#${id}` }]} />
      <div className="container-x">
        {!o ? (
          <div className="card p-10 text-center"><p className="font-semibold">Order not found in this browser.</p><Link href="/orders" className="btn btn-primary mt-4">My orders</Link></div>
        ) : (
          <div className="grid md:grid-cols-[1fr_320px] gap-6 items-start">
            <div className="space-y-4">
              <section className="card p-5">
                <h1 className="font-bold text-xl">Order #{o.id}</h1>
                <p className="text-xs text-slate-500">{new Date(o.date).toLocaleString("en-IN")} · Payment: {o.pay.toUpperCase()} (demo)</p>
                <ul className="divide-y mt-3 text-sm">
                  {o.items.map((i) => (
                    <li key={i.id} className="flex justify-between gap-2 py-2"><span>{i.name} <span className="text-slate-400">({i.pack}) × {i.qty}</span></span><b>{money(i.price * i.qty)}</b></li>
                  ))}
                </ul>
                <div className="border-t mt-2 pt-2 text-sm space-y-1">
                  <div className="flex justify-between"><span>Delivery</span><span>{o.sums.delivery ? money(o.sums.delivery) : "FREE"}</span></div>
                  <div className="flex justify-between font-extrabold text-base"><span>Total</span><span>{money(o.total)}</span></div>
                </div>
              </section>
              <section className="card p-5 text-sm">
                <h2 className="font-bold mb-1">Delivery address</h2>
                <p>{o.address.name} · {o.address.phone}<br />{o.address.address}, {o.address.city} – {o.address.pin}</p>
              </section>
            </div>
            <aside className="card p-5">
              <h2 className="font-bold mb-3">Order tracking (demo)</h2>
              <Tracker status={demoStatus(o)} />
              <p className="text-xs text-slate-400 mt-4">Demo clock: the status advances one step per minute.</p>
            </aside>
          </div>
        )}
      </div>
    </>
  );
}
