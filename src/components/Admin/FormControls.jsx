"use client";
import { useFormStatus } from "react-dom";
import { LoaderCircle, Trash2 } from "lucide-react";

export function SubmitButton({ children="Save changes", className="" }){const {pending}=useFormStatus();return <button disabled={pending} className={`inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#7b2cbf] px-5 text-sm font-bold text-white transition hover:bg-[#6922a8] disabled:cursor-wait disabled:opacity-60 ${className}`}>{pending&&<LoaderCircle size={17} className="animate-spin"/>}{pending?"Saving...":children}</button>}
export function DeleteButton({label="Delete"}){const {pending}=useFormStatus();return <button type="submit" disabled={pending} onClick={(e)=>{if(!confirm("Are you sure? This action cannot be undone."))e.preventDefault()}} className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-bold text-red-600 hover:bg-red-50 disabled:opacity-50"><Trash2 size={14}/>{pending?"Deleting...":label}</button>}
