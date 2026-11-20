"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  FileText, 
  Trash2, 
  UploadCloud, 
  ShieldCheck, 
  PhoneCall, 
  CheckCheck,
  Sparkles,
  ArrowRight
} from "lucide-react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { useStore } from "@/lib/store";

const MAX = 5 * 1024 * 1024;
const OK = ["image/jpeg", "image/png", "application/pdf"];

export default function UploadPrescription() {
  const { toast } = useStore();
  const input = useRef(null);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [err, setErr] = useState("");
  const [drag, setDrag] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", notes: "" });

  useEffect(() => () => url && URL.revokeObjectURL(url), [url]);

  const pick = (f) => {
    setErr("");
    if (!f) return;
    if (!OK.includes(f.type)) return setErr("Only JPG, PNG or PDF files are allowed.");
    if (f.size > MAX) return setErr("File exceeds 5 MB limit.");
    if (url) URL.revokeObjectURL(url);
    setFile(f);
    setUrl(URL.createObjectURL(f));
  };

  const remove = () => {
    if (url) URL.revokeObjectURL(url);
    setFile(null);
    setUrl("");
    setErr("");
    if (input.current) input.current.value = "";
  };

  const submit = (e) => {
    e.preventDefault();
    if (!file) return setErr("Please upload or take a photo of your prescription.");
    if (form.name.trim().length < 2) return setErr("Please enter your name.");
    if (!/^[6-9]\d{9}$/.test(form.phone)) return setErr("Please enter a valid 10-digit mobile number.");
    setErr("");
    setDone(true);
    toast("Prescription received! A verified pharmacist will call you.", "success");
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Upload Prescription" }]} />
      <div className="container-x pb-16">
        
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Header intro */}
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF1EF] text-[#FF6B5A] text-[12px] font-bold">
              <Sparkles size={14} /> Quick & Easy Ordering
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#171725] tracking-tight">
              Upload Your Prescription
            </h1>
            <p className="text-[14px] text-[#696974] max-w-lg mx-auto">
              Our registered pharmacists will review your prescription, verify identical salts, and suggest substitute medicines that save up to 70%.
            </p>
          </div>

          {done ? (
            <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-[#ECEEF2] shadow-xs space-y-4 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCheck size={32} />
              </div>
              <h2 className="text-2xl font-bold text-[#171725]">Prescription Received!</h2>
              <p className="text-[14px] text-[#696974] leading-relaxed">
                Thank you, <b>{form.name}</b>. Our pharmacist will verify your prescription details and contact you at <b>{form.phone}</b> within 15 minutes.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setDone(false);
                    remove();
                  }}
                  className="btn btn-outline text-[13px]"
                >
                  Upload Another
                </button>
                <Link href="/medicines" className="btn btn-primary text-[13px]">
                  Browse Medicines
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">
              
              {/* Upload Dropzone Form */}
              <form onSubmit={submit} className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ECEEF2] shadow-xs space-y-6">
                
                {/* Drag and drop zone */}
                <div>
                  <label className="text-[14px] font-bold text-[#171725] block mb-2">
                    Attach Prescription Document (JPG, PNG or PDF)
                  </label>
                  
                  <div
                    onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
                    onDragLeave={() => setDrag(false)}
                    onDrop={(e) => { e.preventDefault(); setDrag(false); pick(e.dataTransfer.files?.[0]); }}
                    onClick={() => input.current?.click()}
                    className={`border-2 border-dashed rounded-3xl p-8 sm:p-10 text-center cursor-pointer transition-all ${
                      drag 
                        ? "border-[#FF6B5A] bg-[#FFF1EF]" 
                        : "border-[#E2E4E8] hover:border-[#FF6B5A] bg-[#FAFBFD]"
                    }`}
                  >
                    <input
                      ref={input}
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      className="hidden"
                      onChange={(e) => pick(e.target.files?.[0])}
                    />

                    {file ? (
                      <div className="space-y-3" onClick={(e) => e.stopPropagation()}>
                        <div className="w-14 h-14 mx-auto rounded-2xl bg-[#FFF1EF] text-[#FF6B5A] flex items-center justify-center">
                          <FileText size={28} />
                        </div>
                        <div>
                          <p className="font-bold text-[14px] text-[#171725] truncate max-w-xs mx-auto">{file.name}</p>
                          <p className="text-[12px] text-[#92929D]">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                        </div>
                        <button
                          type="button"
                          onClick={remove}
                          className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#FF6B5A] hover:underline"
                        >
                          <Trash2 size={14} /> Remove and choose another
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="w-14 h-14 mx-auto rounded-2xl bg-[#FFF1EF] text-[#FF6B5A] flex items-center justify-center">
                          <UploadCloud size={28} />
                        </div>
                        <div>
                          <p className="font-bold text-[15px] text-[#171725]">Drag & Drop your prescription here</p>
                          <p className="text-[12px] text-[#696974] mt-0.5">or <span className="text-[#FF6B5A] font-bold">browse from your computer / phone</span></p>
                        </div>
                        <p className="text-[11px] text-[#92929D]">Supports JPG, PNG, PDF up to 5 MB</p>
                      </div>
                    )}
                  </div>

                  {err && <p className="field-error mt-2">{err}</p>}
                </div>

                {/* Patient details fields */}
                <div className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-[#F0F2F5]">
                  <div>
                    <label className="text-[13px] font-bold text-[#171725] block mb-1">Patient Name</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="e.g. Ananya Patel"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-[13px] font-bold text-[#171725] block mb-1">Contact Mobile Number</label>
                    <input
                      type="text"
                      maxLength={10}
                      className="input"
                      placeholder="10-digit mobile"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-[13px] font-bold text-[#171725] block mb-1">Optional Notes / Duration</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="e.g. Please find substitute for 1 month supply"
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full py-3.5 text-[15px] font-bold shadow-md tracking-wide"
                >
                  Continue & Request Pharmacist Call <ArrowRight size={16} />
                </button>
              </form>

              {/* Sidebar: How it works & trust info */}
              <aside className="space-y-4">
                <div className="bg-white rounded-3xl p-6 border border-[#ECEEF2] shadow-xs space-y-4">
                  <h3 className="font-extrabold text-[15px] text-[#171725] border-b border-[#F0F2F5] pb-2.5">
                    How it works
                  </h3>
                  
                  <ol className="space-y-3.5 text-[13px]">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#FFF1EF] text-[#FF6B5A] font-bold text-xs flex items-center justify-center shrink-0">1</span>
                      <p className="text-[#44444F]"><b>Upload Prescription:</b> Take a photo or attach your prescription document.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#FFF1EF] text-[#FF6B5A] font-bold text-xs flex items-center justify-center shrink-0">2</span>
                      <p className="text-[#44444F]"><b>Pharmacist Verification:</b> A licensed pharmacist checks the active salt composition.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#FFF1EF] text-[#FF6B5A] font-bold text-xs flex items-center justify-center shrink-0">3</span>
                      <p className="text-[#44444F]"><b>Confirm & Save:</b> Confirm genuine substitute brands and save up to 70%.</p>
                    </li>
                  </ol>
                </div>

                <div className="bg-[#FAFBFD] rounded-3xl p-5 border border-[#ECEEF2] space-y-3 text-[12px] text-[#696974]">
                  <div className="flex items-center gap-2 font-bold text-[#171725]">
                    <ShieldCheck size={18} className="text-emerald-600" />
                    <span>Prescription Privacy Guaranteed</span>
                  </div>
                  <p>
                    Your medical prescriptions are kept strictly confidential under Indian telemedicine & digital healthcare guidelines.
                  </p>
                </div>
              </aside>

            </div>
          )}

        </div>
      </div>
    </>
  );
}
