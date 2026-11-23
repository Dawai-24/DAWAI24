import { redirect } from "next/navigation";
export default async function LegacyMedicine({ params }) { const { slug } = await params; redirect(`/products/${slug}`); }
