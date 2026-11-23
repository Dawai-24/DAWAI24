"use client";
import { useState } from "react";
import { MapPin, Trash2 } from "lucide-react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { useStore } from "@/lib/store";
import { validPin } from "@/components/Header/PinModal";

export default function Addresses() {
  const { addresses, saveAddress, deleteAddress, toast, ready } = useStore();
  const blank = { name: "", phone: "", address: "", city: "", pin: "" };
  const [f, setF] = useState(blank);
  const [err, setErr] = useState({});

  const add = async (e) => {
    e.preventDefault();
    const v = {};
    if (f.name.trim().length < 2) v.name = "Enter a name";
    if (!/^[6-9]\d{9}$/.test(f.phone)) v.phone = "Enter a valid 10-digit mobile";
    if (f.address.trim().length < 6) v.address = "Enter the full address";
    if (f.city.trim().length < 2) v.city = "Enter the city";
    if (!validPin(f.pin)) v.pin = "Enter a valid 6-digit PIN";
    setErr(v);
    if (Object.keys(v).length) return;
    const saved=await saveAddress(f);if(!saved)return;
    setF(blank);
    toast("Address saved");
  };

  const inp = (k, label, extra = {}) => (
    <div><label htmlFor={`ad-${k}`} className="text-sm font-medium">{label}</label>
      <input id={`ad-${k}`} className={`input mt-1 ${err[k] ? "error" : ""}`} value={f[k]} onChange={(e) => { setF({ ...f, [k]: e.target.value }); setErr({ ...err, [k]: "" }); }} {...extra} />
      {err[k] && <p className="field-error">{err[k]}</p>}</div>
  );

  return (
    <>
      <Breadcrumbs items={[{ label: "My Account", href: "/account" }, { label: "Saved Addresses" }]} />
      <div className="container-x max-w-4xl grid md:grid-cols-2 gap-6 items-start">
        <div>
          <h1 className="text-2xl font-bold mb-4">Saved addresses</h1>
          {!ready ? <p className="text-slate-500">Loading…</p> : addresses.length === 0 ? <p className="card p-6 text-sm text-slate-500">No addresses saved yet.</p> : (
            <ul className="space-y-3">
              {addresses.map((a) => (
                <li key={a.id} className="card p-4 flex gap-3 text-sm">
                  <MapPin className="text-brand-700 shrink-0" size={18} />
                  <div className="flex-1"><b>{a.name}</b> · {a.phone}<br />{a.address}, {a.city} – {a.pin}</div>
                  <button aria-label="Delete address" onClick={async() => { await deleteAddress(a.id); toast("Address removed", "info"); }} className="text-slate-400 hover:text-red-600"><Trash2 size={16} /></button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <form onSubmit={add} className="card p-5 space-y-3" noValidate>
          <h2 className="font-bold text-lg">Add new address</h2>
          {inp("name", "Full name")}
          {inp("phone", "Mobile number", { inputMode: "numeric", maxLength: 10 })}
          {inp("address", "Address")}
          <div className="grid grid-cols-2 gap-3">{inp("city", "City")}{inp("pin", "PIN code", { inputMode: "numeric", maxLength: 6 })}</div>
          <button className="btn btn-primary w-full">Save address</button>
        </form>
      </div>
    </>
  );
}
