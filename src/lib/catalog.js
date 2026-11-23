export const allProducts = () => [];
export const getProduct = () => undefined;
export const getProductById = () => undefined;
export const byCategory = () => [];
export const byCategoryAndSubcategory = () => [];
export const related = () => [];

export function searchProducts(q) {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  return [];
}

export function searchCategories(q) {
  return [];
}

export const money = (n) => `₹${Number(n).toLocaleString("en-IN")}`;

export const FREE_DELIVERY_ABOVE = 499;
export const DELIVERY_FEE = 49;
export function totals(lines, coupon, coupons = {}, settings = {}) {
  const mrpTotal = lines.reduce((s, l) => s + l.product.mrp * l.qty, 0);
  const subtotal = lines.reduce((s, l) => s + l.product.price * l.qty, 0);
  const rule = coupons[coupon];
  const couponOff = rule && subtotal >= Number(rule.minOrderValue || 0) ? (rule.type === "PERCENT" ? Math.round((subtotal * rule.value) / 100) : Math.min(subtotal, Number(rule.value))) : 0;
  const freeDeliveryAbove=Number(settings.FREE_DELIVERY_ABOVE??FREE_DELIVERY_ABOVE);
  const deliveryFee=Number(settings.DELIVERY_FEE??DELIVERY_FEE);
  let delivery = subtotal === 0 || subtotal >= freeDeliveryAbove ? 0 : deliveryFee;
  return { mrpTotal, subtotal, savings: mrpTotal - subtotal + couponOff, couponOff, delivery, total: subtotal - couponOff + delivery };
}
