"use client";
import { useState } from "react";
import Link from "next/link";
import AuthShell from "@/components/Forms/AuthShell";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setErr("Enter a valid email address");
    setSent(true);
  };

  return (
    <AuthShell title="Forgot password" subtitle="MediCart logs in with OTP, so there is no password to reset.">
      {sent ? (
        <div className="text-center space-y-3">
          <p className="text-sm">Demo: if this were a real store, a reset link would be emailed to <b>{email}</b>. Nothing was sent.</p>
          <Link href="/login" className="btn btn-primary">Back to login</Link>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-3" noValidate>
          <label htmlFor="fe" className="text-sm font-medium">Email</label>
          <input id="fe" className={`input ${err ? "error" : ""}`} type="email" value={email} onChange={(e) => { setEmail(e.target.value); setErr(""); }} />
          {err && <p className="field-error">{err}</p>}
          <button className="btn btn-primary w-full">Send reset link (demo)</button>
          <p className="text-sm text-center"><Link className="text-brand-700 font-semibold" href="/login">Back to login</Link></p>
        </form>
      )}
    </AuthShell>
  );
}
