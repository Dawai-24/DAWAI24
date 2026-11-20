import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="container-x py-3 text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-brand-700">Home</Link></li>
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight size={14} />
            {it.href ? <Link href={it.href} className="hover:text-brand-700">{it.label}</Link> : <span className="text-slate-800 font-medium">{it.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
