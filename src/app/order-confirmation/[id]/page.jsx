import Link from "next/link";
import {notFound,redirect} from "next/navigation";
import {CheckCircle2} from "lucide-react";
import {getCustomerSession} from "@/lib/auth";
import {db} from "@/lib/db";
import {money} from "@/lib/catalog";

export const dynamic="force-dynamic";
export default async function Confirmation({params}){
  const auth=await getCustomerSession();if(!auth)redirect("/login?next=/orders");
  const {id}=await params;const order=await db.order.findFirst({where:{id,customerId:auth.user.id}});if(!order)notFound();
  return <div className="container-x max-w-xl py-16 text-center"><CheckCircle2 size={64} className="mx-auto text-green-600"/><h1 className="mt-3 text-2xl font-extrabold">Order placed successfully!</h1><p className="mt-1 text-slate-600">Order ID <b>{order.orderNumber}</b> · {money(Number(order.total))}</p><p className="mt-2 text-sm text-slate-500">You can follow every status update from My Orders.</p><div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><Link href={`/orders/${order.id}`} className="btn btn-primary">Track order</Link><Link href="/medicines" className="btn btn-outline">Continue shopping</Link></div></div>;
}
