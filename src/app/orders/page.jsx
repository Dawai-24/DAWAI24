import Link from "next/link";
import {redirect} from "next/navigation";
import {ArrowRight,ChevronRight,Clock,PackageOpen} from "lucide-react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import {orderStatusLabel} from "@/components/Orders/Tracker";
import {getCustomerSession} from "@/lib/auth";
import {db} from "@/lib/db";
import {money} from "@/lib/catalog";

export const dynamic="force-dynamic";
export default async function Orders(){
  const auth=await getCustomerSession();
  if(!auth)redirect("/login?next=/orders");
  const orders=await db.order.findMany({where:{customerId:auth.user.id},include:{items:true},orderBy:{createdAt:"desc"}});
  return <><Breadcrumbs items={[{label:"My Orders"}]}/><div className="container-x max-w-4xl pb-16"><h1 className="mb-6 text-2xl font-black tracking-tight text-[#171725] sm:text-3xl">My Medicine Orders ({orders.length})</h1>{orders.length===0?<div className="mx-auto max-w-md space-y-4 rounded-3xl border border-[#ECEEF2] bg-white p-12 text-center"><div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#FFF1EF] text-[#FF6B5A]"><PackageOpen size={28}/></div><h3 className="text-lg font-extrabold">No Orders Placed Yet</h3><p className="text-sm text-[#696974]">Your successfully placed orders will appear here.</p><Link href="/medicines" className="btn btn-primary inline-flex">Browse Medicines <ArrowRight size={16}/></Link></div>:<div className="space-y-4">{orders.map(order=><Link key={order.id} href={`/orders/${order.id}`} className="group block space-y-4 rounded-3xl border border-[#ECEEF2] bg-white p-5 transition hover:border-[#FF6B5A]/40 sm:p-6"><div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F0F2F5] pb-3"><div className="flex items-center gap-3"><div className="flex size-10 items-center justify-center rounded-2xl bg-[#FFF1EF] font-bold text-[#FF6B5A]">#{order.orderNumber.slice(-4)}</div><div><p className="text-sm font-extrabold">{order.orderNumber}</p><p className="flex items-center gap-1 text-xs text-[#92929D]"><Clock size={12}/>{order.createdAt.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}</p></div></div><div className="flex items-center gap-3"><span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">{orderStatusLabel(order.status)}</span><ChevronRight size={18} className="text-gray-400"/></div></div><div className="flex justify-between text-sm"><span className="text-[#696974]">{order.items.length} product(s)</span><b>{money(Number(order.total))}</b></div></Link>)}</div>}</div></>;
}
