import Link from "next/link";
import {ArrowRight,Headphones,HelpCircle} from "lucide-react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import {db} from "@/lib/db";

export const metadata={title:"Help & Support Centre | Dawai24"};
export const dynamic="force-dynamic";
export default async function Help(){
  const topics=await db.cmsEntry.findMany({where:{type:"HELP_TOPIC",active:true},orderBy:{sortOrder:"asc"}});
  return <><Breadcrumbs items={[{label:"Help Centre"}]}/><div className="container-x max-w-4xl space-y-10 pb-16"><div className="mx-auto max-w-lg space-y-2 text-center"><div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-[#FFF1EF] text-[#FF6B5A]"><Headphones size={24}/></div><h1 className="text-3xl font-black tracking-tight">How Can We Help You?</h1><p className="text-sm text-[#696974]">Choose a support topic published by the Dawai24 team.</p></div>{topics.length?<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">{topics.map(topic=><Link key={topic.id} href={topic.linkUrl||"/contact"} className="group space-y-3 rounded-3xl border bg-white p-6 transition hover:border-[#FF6B5A]/40"><div className="flex size-12 items-center justify-center rounded-2xl bg-[#FFF1EF] text-[#FF6B5A]"><HelpCircle size={22}/></div><div><h3 className="text-sm font-extrabold group-hover:text-[#FF6B5A]">{topic.title}</h3>{topic.body&&<p className="mt-1 text-xs text-[#92929D]">{topic.body}</p>}</div></Link>)}</div>:<div className="rounded-3xl border bg-white p-10 text-center text-sm text-slate-500">No help topics have been published yet.</div>}<div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-[#171725] p-8 text-white sm:flex-row"><div><h3 className="text-xl font-bold">Need direct assistance?</h3><p className="text-sm text-gray-300">Contact the Dawai24 support team.</p></div><Link href="/contact" className="btn btn-primary whitespace-nowrap">Contact Helpdesk <ArrowRight size={16}/></Link></div></div></>;
}
