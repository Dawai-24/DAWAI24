"use client";
import { useEffect, useState } from "react";

// Demo OTP: generated in the browser and displayed on screen (no SMS is sent).
export default function OtpStep({ phone, onVerified, onBack }) {
  const [otp] = useState(() => String(Math.floor(100000 + Math.random() * 900000)));
  const [v, setV] = useState("");
  const [err, setErr] = useState("");
  const [left, setLeft] = useState(30);

  useEffect(() => {
    if (left <= 0) return;
    const t = setTimeout(() => setLeft((x) => x - 1), 1000);
    return () => clearTimeout(t);
  }, [left]);

  const submit = (e) => {
    e.preventDefault();
    if (v !== otp) return setErr("Incorrect OTP. Check the demo code above.");
    onVerified();
  };

  return (
    <form onSubmit={submit} className="space-y-3">
      <p className="text-sm">Enter the 6-digit code for <b>+91 {phone}</b></p>
      <p className="text-sm rounded-lg bg-brand-50 p-2 text-center">Demo OTP: <b className="tracking-widest">{otp}</b></p>
      <input className={`input text-center tracking-[0.4em] text-lg ${err ? "error" : ""}`} inputMode="numeric" maxLength={6} value={v} onChange={(e) => { setV(e.target.value.replace(/\D/g, "")); setErr(""); }} aria-label="OTP" autoFocus />
      {err && <p className="field-error">{err}</p>}
      <button className="btn btn-primary w-full">Verify</button>
      <div className="flex justify-between text-xs text-slate-500">
        <button type="button" className="hover:text-brand-700" onClick={onBack}>Change number</button>
        <span>{left > 0 ? `Resend in ${left}s` : "Reload page to get a new code"}</span>
      </div>
    </form>
  );
}
