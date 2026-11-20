// Data-access layer. Swap these functions for API/database calls in production.
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { allTaxonomyProducts, getProductsByTaxonomy } from "@/data/taxonomyProducts";

// Combine base products with full taxonomy products
const combinedProducts = [...products, ...allTaxonomyProducts];

export const allProducts = () => combinedProducts;
export const getProduct = (slug) => combinedProducts.find((p) => p.slug === slug);
export const getProductById = (id) => combinedProducts.find((p) => p.id === id);

export const byCategory = (slug) => {
  const fromBase = products.filter((p) => p.category === slug);
  const fromTax = allTaxonomyProducts.filter((p) => p.category === slug);
  return [...fromTax, ...fromBase];
};

export const byCategoryAndSubcategory = (catSlug, subSlug) => {
  return getProductsByTaxonomy(catSlug, subSlug);
};

export function related(product, limit = 6) {
  return combinedProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function searchProducts(q) {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  return combinedProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(s) ||
      p.brand.toLowerCase().includes(s) ||
      p.category.replace(/-/g, " ").includes(s) ||
      (p.subcategory && p.subcategory.replace(/-/g, " ").includes(s))
  );
}

export function searchCategories(q) {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  return categories.filter((c) => c.name.toLowerCase().includes(s));
}

export const money = (n) => `₹${Number(n).toLocaleString("en-IN")}`;

// Demo pricing rules (shown clearly in the UI as demo).
export const FREE_DELIVERY_ABOVE = 499;
export const DELIVERY_FEE = 49;
export const COUPONS = { 
  WELCOME10: { type: "pct", value: 10, label: "10% off" }, 
  FREESHIP: { type: "ship", value: 0, label: "Free delivery" } 
};

export function totals(lines, coupon) {
  const mrpTotal = lines.reduce((s, l) => s + l.product.mrp * l.qty, 0);
  const subtotal = lines.reduce((s, l) => s + l.product.price * l.qty, 0);
  const couponOff = coupon && COUPONS[coupon]?.type === "pct" ? Math.round((subtotal * COUPONS[coupon].value) / 100) : 0;
  let delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_ABOVE ? 0 : DELIVERY_FEE;
  if (coupon && COUPONS[coupon]?.type === "ship") delivery = 0;
  return { mrpTotal, subtotal, savings: mrpTotal - subtotal + couponOff, couponOff, delivery, total: subtotal - couponOff + delivery };
}
