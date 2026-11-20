import { Minus, Plus } from "lucide-react";

export default function QtyControl({ qty, onChange, min = 1, max = 10 }) {
  return (
    <div className="inline-flex items-center rounded-lg border border-slate-300 overflow-hidden">
      <button aria-label="Decrease quantity" className="p-2 hover:bg-brand-50 disabled:opacity-40" disabled={qty <= min && min > 0} onClick={() => onChange(qty - 1)}><Minus size={14} /></button>
      <span className="w-8 text-center text-sm font-semibold" aria-live="polite">{qty}</span>
      <button aria-label="Increase quantity" className="p-2 hover:bg-brand-50 disabled:opacity-40" disabled={qty >= max} onClick={() => onChange(qty + 1)}><Plus size={14} /></button>
    </div>
  );
}
