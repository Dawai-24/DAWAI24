import Link from "next/link";
import AuthShell from "@/components/Forms/AuthShell";

export default function ForgotPassword(){return <AuthShell title="Forgot password" subtitle="For account security, password changes are handled by the Dawai24 support team."><div className="space-y-4 text-center"><p className="text-sm text-slate-600">Send a support request using the email or mobile number registered with your account.</p><Link href="/contact" className="btn btn-primary w-full">Contact support</Link><Link href="/login" className="block text-sm font-semibold text-brand-700">Back to login</Link></div></AuthShell>}
