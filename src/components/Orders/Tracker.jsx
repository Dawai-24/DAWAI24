import { Check } from "lucide-react";

export const ORDER_STEPS=[["PENDING","Order placed"],["CONFIRMED","Confirmed"],["PACKED","Packed"],["OUT_FOR_DELIVERY","Out for delivery"],["DELIVERED","Delivered"]];
export const orderStatusLabel=(status)=>ORDER_STEPS.find(([value])=>value===status)?.[1]||status?.replaceAll("_"," ")||"Pending";

export default function Tracker({status}){
  if(status==="CANCELLED"||status==="RETURNED")return <div className="rounded-xl bg-red-50 p-4 text-sm font-bold text-red-700">Order {status.toLowerCase()}.</div>;
  const current=Math.max(0,ORDER_STEPS.findIndex(([value])=>value===status));
  return <ol className="space-y-4">{ORDER_STEPS.map(([value,label],index)=><li key={value} className="flex items-center gap-3"><span className={`grid size-7 place-items-center rounded-full text-xs font-bold ${index<=current?"bg-brand-700 text-white":"bg-slate-200 text-slate-500"}`}>{index<=current?<Check size={14}/>:index+1}</span><span className={index<=current?"font-semibold":"text-slate-400"}>{label}</span></li>)}</ol>;
}
