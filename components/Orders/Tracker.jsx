import { Check } from "lucide-react";

export const STEPS = ["Order placed", "Confirmed", "Packed", "Out for delivery", "Delivered"];

// Demo tracker: status is derived from minutes since order (demo clock: 1 step per minute).
export function demoStatus(order) {
  const mins = Math.floor((Date.now() - new Date(order.date).getTime()) / 60000);
  return Math.min(STEPS.length - 1, Math.max(order.status || 0, mins));
}

export default function Tracker({ status }) {
  return (
    <ol className="space-y-4">
      {STEPS.map((s, i) => (
        <li key={s} className="flex items-center gap-3">
          <span className={`grid place-items-center w-7 h-7 rounded-full text-xs font-bold ${i <= status ? "bg-brand-700 text-white" : "bg-slate-200 text-slate-500"}`}>
            {i <= status ? <Check size={14} /> : i + 1}
          </span>
          <span className={i <= status ? "font-semibold" : "text-slate-400"}>{s}</span>
        </li>
      ))}
    </ol>
  );
}
