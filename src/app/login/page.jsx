"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthShell from "@/components/Forms/AuthShell";
import OtpStep from "@/components/Forms/OtpStep";
import { useStore } from "@/lib/store";

export default function Login() {
  const router = useRouter();
  const { login, toast, user } = useStore();
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(0);
  const [err, setErr] = useState("");

  const send = (e) => {
    e.preventDefault();
    if (!/^[6-9]\d{9}$/.test(phone)) return setErr("Please enter a valid 10-digit mobile number");
    setErr("");
    setStep(1);
  };

  const done = () => {
    login({ name: user?.name || "Rahul Sharma", phone });
    toast("Welcome back! Logged in successfully.", "success");
    router.push("/account");
  };

  return (
    <AuthShell 
      title="Welcome Back" 
      subtitle="Enter your mobile number to view orders, prescriptions and wallet."
    >
      {step === 0 ? (
        <form onSubmit={send} className="space-y-4" noValidate>
          <div>
            <label htmlFor="ph" className="text-[12px] font-bold text-[#171725] block mb-1">
              Mobile Number
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3.5 border border-r-0 border-[#E2E4E8] rounded-l-xl bg-[#F8F9FA] text-[14px] font-semibold text-[#171725]">
                +91
              </span>
              <input
                id="ph"
                className={`input !rounded-l-none ${err ? "error" : ""}`}
                inputMode="numeric"
                maxLength={10}
                placeholder="10-digit mobile"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value.replace(/\D/g, ""));
                  setErr("");
                }}
                autoFocus
              />
            </div>
            {err && <p className="field-error">{err}</p>}
          </div>

          <button className="btn btn-primary w-full py-3 text-[14px] font-bold tracking-wide">
            Request OTP
          </button>

          <div className="text-center space-y-1.5 pt-2 text-[13px]">
            <p className="text-[#696974]">
              Don&apos;t have an account?{" "}
              <Link className="text-[#FF6B5A] font-bold hover:underline" href="/signup">
                Sign Up
              </Link>
            </p>
            <p>
              <Link className="text-[#92929D] hover:text-[#171725] text-[12px]" href="/forgot-password">
                Trouble logging in?
              </Link>
            </p>
          </div>
        </form>
      ) : (
        <OtpStep phone={phone} onVerified={done} onBack={() => setStep(0)} />
      )}
    </AuthShell>
  );
}
