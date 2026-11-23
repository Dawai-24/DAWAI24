import Link from "next/link";
import {ArrowRight,HeartPulse} from "lucide-react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import {db} from "@/lib/db";

export const metadata={title:"About Us | Dawai24",description:"Learn more about Dawai24."};
export const dynamic="force-dynamic";
export default async function About(){
  const [sections,stats,productCount]=await Promise.all([
    db.cmsEntry.findMany({where:{type:"ABOUT_SECTION",active:true},orderBy:{sortOrder:"asc"}}),
    db.cmsEntry.findMany({where:{type:"ABOUT_STAT",active:true},orderBy:{sortOrder:"asc"}}),
    db.product.count({where:{active:true}}),
  ]);
  const hero=sections[0];
  return <><Breadcrumbs items={[{label:"About Us"}]}/><div className="container-x max-w-4xl space-y-10 pb-16"><div className="mx-auto max-w-2xl space-y-3 text-center"><span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF1EF] px-3 py-1 text-xs font-bold text-[#FF6B5A]"><HeartPulse size={14}/>About Dawai24</span><h1 className="text-3xl font-black tracking-tight text-[#171725] sm:text-4xl">{hero?.title||"About Dawai24"}</h1>{hero?.body&&<p className="text-sm leading-relaxed text-[#696974]">{hero.body}</p>}</div><div className="grid grid-cols-2 gap-4 md:grid-cols-4"><div className="rounded-3xl border bg-white p-6 text-center"><p className="text-3xl font-black text-[#FF6B5A]">{productCount}</p><p className="mt-1 text-xs font-bold">Published products</p></div>{stats.map(stat=><div key={stat.id} className="rounded-3xl border bg-white p-6 text-center"><p className="text-3xl font-black text-[#171725]">{stat.badge||stat.subtitle||"—"}</p><p className="mt-1 text-xs font-bold">{stat.title}</p>{stat.body&&<p className="text-xs text-[#92929D]">{stat.body}</p>}</div>)}</div>{sections.slice(1).map(section=><section key={section.id} className="rounded-3xl border bg-white p-8"><h2 className="text-xl font-extrabold">{section.title}</h2>{section.body&&<p className="mt-3 whitespace-pre-line text-sm leading-7 text-[#696974]">{section.body}</p>}</section>)}<div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-[#171725] p-8 text-white sm:flex-row"><div><h3 className="text-xl font-bold">Explore our live medicine catalogue</h3><p className="mt-1 text-sm text-gray-300">Only products published from the admin panel are displayed.</p></div><Link href="/medicines" className="btn btn-primary whitespace-nowrap">Explore Medicines <ArrowRight size={16}/></Link></div></div></>;
}
