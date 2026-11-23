import { redirect } from "next/navigation";
export default async function LegacyOtc({ params }) { const { slug } = await params; redirect(`/products/${slug}`); }
