"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthShell from "@/components/Forms/AuthShell";
import OtpStep from "@/components/Forms/OtpStep";
import { useStore } from "@/lib/store";

export default function Signup() {
  const router = useRouter();
  const { login, toast } = useStore();
  const [f, setF] = useState({ name: "", email: "", phone: "", agree: true });
  const [err, setErr] = useState({});
  const [step, setStep] = useState(0);

  const set = (k) => (e) => {
    const v = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setF((x) => ({ ...x, [k]: k === "phone" ? v.replace(/\D/g, "") : v }));
    setErr((x) => ({ ...x, [k]: "" }));
  };

  const submit = (e) => {
    e.preventDefault();
    const v = {};
    if (f.name.trim().length < 2) v.name = "Enter your full name";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) v.email = "Enter a valid email address";
    if (!/^[6-9]\d{9}$/.test(f.phone)) v.phone = "Enter a valid 10-digit mobile number";
    if (!f.agree) v.agree = "Please agree to the terms to proceed";
    setErr(v);
    if (!Object.keys(v).length) setStep(1);
  };

  const done = () => {
    login({ name: f.name.trim(), email: f.email, phone: f.phone });
    toast("Account created successfully!", "success");
    router.push("/account");
  };

  const row = (k, label, props = {}) => (
    <div>
      <label htmlFor={k} className="text-[12px] font-bold text-[#171725] block mb-1">
        {label}
      </label>
      <input
        id={k}
        className={`input ${err[k] ? "error" : ""}`}
        value={f[k]}
        onChange={set(k)}
        {...props}
      />
      {err[k] && <p className="field-error">{err[k]}</p>}
    </div>
  );

  return (
    <AuthShell 
      title="Create Your Account" 
      subtitle="Join millions saving on monthly prescriptions with Davai24."
    >
      {step === 0 ? (
        <form onSubmit={submit} className="space-y-4" noValidate>
          {row("name", "Full Name", { placeholder: "e.g. Priya Sharma" })}
          {row("email", "Email Address", { type: "email", placeholder: "name@example.com" })}
          {row("phone", "Mobile Number", { inputMode: "numeric", maxLength: 10, placeholder: "10-digit mobile" })}

          <label className="flex items-start gap-2.5 text-[12px] text-[#696974] cursor-pointer pt-1">
            <input
              type="checkbox"
              checked={f.agree}
              onChange={set("agree")}
              className="mt-0.5 rounded text-[#FF6B5A] focus:ring-[#FF6B5A]"
            />
            <span>
              I agree to the{" "}
              <Link href="/policies/terms-and-conditions" className="text-[#FF6B5A] font-bold underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/policies/privacy-policy" className="text-[#FF6B5A] font-bold underline">
                Privacy Policy
              </Link>.
            </span>
          </label>
          {err.agree && <p className="field-error">{err.agree}</p>}

          <button className="btn btn-primary w-full py-3 text-[14px] font-bold tracking-wide">
            Continue & Verify OTP
          </button>

          <p className="text-[13px] text-center text-[#696974] pt-2">
            Already have an account?{" "}
            <Link className="text-[#FF6B5A] font-bold hover:underline" href="/login">
              Login here
            </Link>
          </p>
        </form>
      ) : (
        <OtpStep phone={f.phone} onVerified={done} onBack={() => setStep(0)} />
      )}
    </AuthShell>
  );
}
