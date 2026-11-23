import { db } from "@/lib/db";

export function mapProduct(p) {
  return {
    ...p,
    mrp: Number(p.mrp),
    price: Number(p.price),
    discount: Number(p.mrp) > 0 ? Math.round((1 - Number(p.price) / Number(p.mrp)) * 100) : 0,
    prescription: p.prescriptionRequired,
    brand: p.brand?.name || "",
    category: p.category?.slug || "",
    subcategory: p.subcategory?.slug || "",
    image: p.imageUrl || p.images?.[0]?.url || "",
    rating: 0,
    reviews: 0,
    details: [["Brand", p.brand?.name || ""], ["Pack size", p.pack || ""], ["Category", p.category?.name || ""], ["Prescription", p.prescriptionRequired ? "Required" : "Not required"]],
  };
}

const include = { brand: true, category: true, subcategory: true, images: { orderBy: { sortOrder: "asc" } } };
export async function getActiveProducts(where = {}) {
  const rows = await db.product.findMany({ where: { active: true, ...where }, include, orderBy: { createdAt: "desc" } });
  return rows.map(mapProduct);
}
export async function getActiveProduct(slug) {
  const row = await db.product.findFirst({ where: { slug, active: true }, include });
  return row ? mapProduct(row) : null;
}
