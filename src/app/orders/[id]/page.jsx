import Link from "next/link";
import {notFound,redirect} from "next/navigation";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import Tracker from "@/components/Orders/Tracker";
import {getCustomerSession} from "@/lib/auth";
import {db} from "@/lib/db";
import {money} from "@/lib/catalog";

export const dynamic="force-dynamic";
export default async function OrderDetail({params}){
  const auth=await getCustomerSession();if(!auth)redirect("/login?next=/orders");
  const {id}=await params;const order=await db.order.findFirst({where:{id,customerId:auth.user.id},include:{items:true}});if(!order)notFound();
  return <><Breadcrumbs items={[{label:"My Orders",href:"/orders"},{label:order.orderNumber}]}/><div className="container-x grid items-start gap-6 pb-16 md:grid-cols-[1fr_320px]"><div className="space-y-4"><section className="card p-5"><h1 className="text-xl font-bold">Order {order.orderNumber}</h1><p className="text-xs text-slate-500">{order.createdAt.toLocaleString("en-IN")} · Payment: {order.paymentMethod||"Not specified"}</p><ul className="mt-3 divide-y text-sm">{order.items.map(item=><li key={item.id} className="flex justify-between gap-2 py-2"><span>{item.name} <span className="text-slate-400">× {item.quantity}</span></span><b>{money(Number(item.unitPrice)*item.quantity)}</b></li>)}</ul><div className="mt-2 space-y-1 border-t pt-2 text-sm"><div className="flex justify-between"><span>Delivery</span><span>{Number(order.deliveryFee)?money(Number(order.deliveryFee)):"FREE"}</span></div>{Number(order.discount)>0&&<div className="flex justify-between text-emerald-700"><span>Discount</span><span>-{money(Number(order.discount))}</span></div>}<div className="flex justify-between text-base font-extrabold"><span>Total</span><span>{money(Number(order.total))}</span></div></div></section><section className="card p-5 text-sm"><h2 className="mb-1 font-bold">Delivery address</h2><p>{order.deliveryName} · {order.deliveryPhone}<br/>{order.deliveryAddress}, {order.deliveryCity} – {order.deliveryPin}</p></section></div><aside className="card p-5"><h2 className="mb-3 font-bold">Order tracking</h2><Tracker status={order.status}/><Link href="/orders" className="btn btn-outline mt-6 w-full">Back to orders</Link></aside></div></>;
}
