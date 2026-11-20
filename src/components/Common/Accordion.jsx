"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-slate-200 card overflow-hidden">
      {items.map((it, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between gap-4 text-left px-4 py-4 font-semibold hover:bg-brand-50"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            {it.q}
            <ChevronDown size={18} className={`shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && <p className="px-4 pb-4 text-slate-600 anim-fade">{it.a}</p>}
        </div>
      ))}
    </div>
  );
}
