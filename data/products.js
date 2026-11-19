// SAMPLE DATA - fictional products and brands generated for the MediCart demo.
// No medical claims are made. Replace with a real catalogue API (see lib/catalog.js).
import { brands } from "./categories";

// [name, pack, mrp, prescriptionDemoFlag, subcategory index]
const templates = {
  medicines: [
    ["Pain Relief Tablets", "Strip of 15", 45, false, 0],
    ["Fever Care Tablets", "Strip of 10", 32, false, 0],
    ["Antacid Chewable Tablets", "Pack of 30", 98, false, 1],
    ["Oral Rehydration Powder", "Box of 10 sachets", 120, false, 1],
    ["Allergy Relief Tablets", "Strip of 10", 76, false, 2],
    ["Antiseptic Solution", "100 ml bottle", 88, false, 3],
    ["Adhesive Bandage Strips", "Pack of 100", 140, false, 3],
    ["Prescription Item (Demo Only)", "Strip of 10", 210, true, 0],
  ],
  "vitamins-supplements": [
    ["Daily Multivitamin Tablets", "Bottle of 60", 480, false, 0],
    ["Vitamin C Chewable Tablets", "Bottle of 50", 220, false, 0],
    ["Vitamin D3 Softgels", "Bottle of 60", 350, false, 0],
    ["Zinc Mineral Tablets", "Bottle of 40", 260, false, 1],
    ["Whey Protein Powder", "1 kg tub", 2400, false, 2],
    ["Immunity Gummies", "Pack of 30", 399, false, 3],
  ],
  "diabetes-care": [
    ["Glucometer Starter Kit", "1 device + 10 strips", 1299, false, 0],
    ["Glucose Test Strips", "Pack of 50", 850, false, 1],
    ["Lancets Pack", "Pack of 100", 180, false, 1],
    ["Sugar-free Oats", "500 g pack", 210, false, 2],
    ["Sugar-free Sweetener Tablets", "Pack of 300", 175, false, 2],
  ],
  "heart-care": [
    ["Digital BP Monitor", "1 unit", 1899, false, 0],
    ["Omega-3 Softgels", "Bottle of 60", 799, false, 2],
    ["Low-sodium Salt", "500 g pack", 130, false, 1],
    ["Wrist BP Monitor", "1 unit", 1499, false, 0],
    ["Heart-healthy Muesli", "750 g pack", 320, false, 1],
  ],
  "personal-care": [
    ["Gentle Face Wash", "100 ml tube", 240, false, 0],
    ["Daily Moisturising Lotion", "200 ml bottle", 360, false, 0],
    ["Anti-dandruff Shampoo", "200 ml bottle", 290, false, 1],
    ["Fluoride Toothpaste", "150 g tube", 110, false, 2],
    ["Soft Bristle Toothbrush", "Pack of 3", 95, false, 2],
    ["Sunscreen Lotion SPF 50", "80 g tube", 450, false, 0],
    ["Body Wash Gel", "250 ml bottle", 280, false, 3],
  ],
  "healthcare-devices": [
    ["Digital Thermometer", "1 unit", 299, false, 0],
    ["Fingertip Pulse Oximeter", "1 unit", 1199, false, 1],
    ["Compressor Nebulizer", "1 unit", 2199, false, 2],
    ["Knee Support Brace", "Free size", 650, false, 3],
    ["Infrared Forehead Thermometer", "1 unit", 1499, false, 0],
    ["Heating Pad", "1 unit", 899, false, 3],
  ],
  "baby-mom-care": [
    ["Baby Moisturising Lotion", "200 ml bottle", 310, false, 0],
    ["Baby Diapers (M)", "Pack of 54", 799, false, 1],
    ["Feeding Bottle", "250 ml", 380, false, 2],
    ["Baby Wipes", "Pack of 72", 199, false, 0],
    ["Maternity Support Belt", "Free size", 990, false, 3],
  ],
  "cough-cold": [
    ["Herbal Throat Lozenges", "Pack of 20", 60, false, 0],
    ["Cough Syrup (Demo)", "100 ml bottle", 105, false, 1],
    ["Steam Inhaler", "1 unit", 549, false, 2],
    ["Saline Nasal Spray", "20 ml bottle", 85, false, 2],
    ["Vapour Rub", "25 g jar", 78, false, 2],
  ],
  "bone-joint": [
    ["Pain Relief Gel", "30 g tube", 130, false, 0],
    ["Joint Wellness Tablets", "Bottle of 60", 620, false, 1],
    ["Calcium + D3 Tablets", "Strip of 15", 145, false, 2],
    ["Hot & Cold Gel Pack", "1 unit", 399, false, 0],
    ["Pain Relief Spray", "55 g can", 210, false, 0],
  ],
  "wellness-fitness": [
    ["Herbal Wellness Tea", "Box of 25 bags", 240, false, 0],
    ["Resistance Band Set", "Set of 3", 599, false, 1],
    ["Sleep Support Tablets", "Bottle of 30", 450, false, 2],
    ["Ashwagandha Capsules", "Bottle of 60", 520, false, 0],
    ["Yoga Mat", "6 mm", 899, false, 1],
  ],
};

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const discounts = [10, 15, 20, 25, 30, 12, 18, 22];

let n = 0;
export const products = Object.entries(templates).flatMap(([category, list]) =>
  list.map(([name, pack, mrp, rx, sub]) => {
    const brand = brands[n % brands.length];
    const d = discounts[n % discounts.length];
    const price = Math.round(mrp * (1 - d / 100));
    const id = `MC${String(1000 + n)}`;
    const item = {
      id,
      slug: `${slugify(name)}-${slugify(brand)}`,
      name,
      brand,
      category,
      subcategory: sub,
      pack,
      mrp,
      price,
      discount: d,
      rating: Number((3.8 + ((n * 7) % 12) / 10).toFixed(1)),
      reviews: 20 + ((n * 37) % 480),
      prescription: rx,
      description: `${name} by ${brand}. This is a sample listing for the MediCart demo storefront. Always read the product label and consult a qualified pharmacist or doctor before use.`,
      details: [
        ["Brand", brand],
        ["Pack size", pack],
        ["Category", category.replace(/-/g, " ")],
        ["Storage", "Store in a cool, dry place away from direct sunlight"],
        ["Prescription", rx ? "Required (demo flag)" : "Not required (demo flag)"],
      ],
    };
    n += 1;
    return item;
  })
);

export const bestSellerIds = products.filter((_, i) => i % 5 === 0).map((p) => p.id);
