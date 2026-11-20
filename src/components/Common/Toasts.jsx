"use client";
import { CheckCircle2, Info, XCircle } from "lucide-react";
import { useStore } from "@/lib/store";

export default function Toasts() {
  const { toasts } = useStore();
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[70] flex flex-col gap-2 w-[92vw] max-w-sm" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className="anim-fade flex items-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-3 text-sm shadow-lg">
          {t.type === "success" ? <CheckCircle2 size={18} className="text-green-400" /> : t.type === "error" ? <XCircle size={18} className="text-red-400" /> : <Info size={18} className="text-blue-300" />}
          {t.message}
        </div>
      ))}
    </div>
  );
}
