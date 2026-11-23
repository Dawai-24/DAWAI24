"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { useStore } from "@/lib/store";

export const validPin = (v) => /^[1-9][0-9]{5}$/.test(v);

export default function PinModal({ onClose }) {
  const { pin, setPin, toast } = useStore();
  const [v, setV] = useState(pin);
  const [err, setErr] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!validPin(v)) return setErr("Enter a valid 6-digit PIN code");
    setPin(v);
    toast(`Delivery PIN set to ${v}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-label="Set delivery PIN code">
      <form onSubmit={submit} className="card w-full max-w-sm p-5 anim-fade">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-lg">Check delivery PIN code</h2>
          <button type="button" aria-label="Close" onClick={onClose}><X size={20} /></button>
        </div>
        <input className={`input ${err ? "error" : ""}`} inputMode="numeric" maxLength={6} placeholder="6-digit PIN code" value={v} onChange={(e) => { setV(e.target.value.replace(/\D/g, "")); setErr(""); }} autoFocus />
        {err && <p className="field-error">{err}</p>}
        <p className="text-xs text-slate-500 mt-2">Enter your delivery area PIN code.</p>
        <button className="btn btn-primary w-full mt-4">Apply</button>
      </form>
    </div>
  );
}
