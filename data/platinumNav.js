// Davai24 Category Taxonomy and Mapping
export const categoryTaxonomy = {
  "Personal Care": {
    slug: "personal-care",
    description: "Shop certified personal care essentials, skin routines, hair treatments, and hygiene products.",
    items: [
      { name: "Baby And Mom Care", slug: "baby-and-mom-care", description: "Gentle and dermatologically safe products for babies and mothers." },
      { name: "Bone And Joint", slug: "bone-and-joint", description: "Pain relief formulas, calcium supplements, and joint mobility solutions." },
      { name: "Cough And Cold", slug: "cough-and-cold", description: "Fast-acting lozenges, inhalers, and syrups for cough and congestion." },
      { name: "Hair Care", slug: "hair-care", description: "Anti-dandruff solutions, hair growth serums, and nutrient shampoos." },
      { name: "Sexual Wellness", slug: "sexual-wellness", description: "Discreet and certified sexual health and wellness essentials." },
      { name: "Body Care", slug: "body-care", description: "Moisturizers, body washes, and nourishing lotions for daily body care." },
      { name: "Skin Care", slug: "skin-care", description: "Face cleansers, sunscreens, and dermatological skin treatments." },
      { name: "Miscellaneous", slug: "miscellaneous", description: "Everyday healthcare essentials, sanitizers, and wellness accessories." },
    ],
  },
  "Health Conditions": {
    slug: "health-conditions",
    description: "Targeted medicine substitutes for chronic health conditions with identical salt effectiveness.",
    items: [
      { name: "Digestive Care", slug: "digestive-care", description: "Antacids, enzymes, and digestive relief medicines." },
      { name: "Pain Relief", slug: "pain-relief", description: "Analgesic tablets, muscle relaxants, and pain relief sprays." },
      { name: "Respiratory Care", slug: "respiratory-care", description: "Inhalers, anti-asthma tablets, and respiratory aids." },
      { name: "Stomach Care", slug: "stomach-care", description: "Probiotics, acidity regulators, and gastro-protective medications." },
      { name: "Kidney Care", slug: "kidney-care", description: "Renal health supplements and kidney support medicines." },
      { name: "Liver Care", slug: "liver-care", description: "Hepato-protective formulations and liver detox supplements." },
      { name: "Eye Care", slug: "eye-care", description: "Lubricating eye drops, anti-allergic ophthalmic solutions." },
    ],
  },
  "Diabetes And Heart Care": {
    slug: "diabetes-and-heart-care",
    description: "Comprehensive affordable substitutes for cardiovascular wellness and daily blood sugar management.",
    items: [
      { name: "Sugar Substitutes", slug: "sugar-substitutes", description: "Zero-calorie sweeteners, stevia drops, and dietary alternatives." },
      { name: "Insulin Care", slug: "insulin-care", description: "Syringes, needle tips, and insulin preservation accessories." },
      { name: "Nutrition & Diet Drinks", slug: "nutrition-and-diet-drinks", description: "Nutritional shakes formulated for diabetic patients." },
      { name: "Heart Health", slug: "heart-health", description: "Omega-3 softgels, BP monitors, and heart health supplements." },
    ],
  },
  "Healthcare Devices": {
    slug: "healthcare-devices",
    description: "Clinically certified medical devices, diagnostic monitors, and rehabilitation supports.",
    items: [
      { name: "BP Monitors", slug: "bp-monitors", description: "Digital blood pressure monitors with auto-inflation." },
      { name: "Nebulizers And Vaporizers", slug: "nebulizers-and-vaporizers", description: "Compressor nebulizers and facial steam vaporizers." },
      { name: "Supports And Braces", slug: "supports-and-braces", description: "Orthopedic knee braces, waist belts, and wrist supports." },
    ],
  },
  "Vitamins & Supplements": {
    slug: "vitamins-and-supplements",
    description: "High-absorption multivitamins, daily minerals, and therapeutic nutrient supplements.",
    items: [
      { name: "Baby And Mom Care", slug: "baby-and-mom-care", description: "Folic acid, prenatal multivitamins, and pediatric drops." },
      { name: "Calcium And Minerals", slug: "calcium-and-minerals", description: "Calcium + D3 tablets and essential trace mineral complexes." },
      { name: "Supplement Powder", slug: "supplement-powder", description: "Protein powders, immunity boosters, and electrolyte mixes." },
      { name: "Vitamin A To Z", slug: "vitamin-a-to-z", description: "Complete daily multivitamin formulations for adults & seniors." },
      { name: "Vitamin B12 And Complex", slug: "vitamin-b12-and-complex", description: "B-complex vitamins with methylcobalamin for nerve vitality." },
      { name: "Minerals Supplements", slug: "minerals-supplements", description: "Zinc, iron, magnesium, and selenium mineral capsules." },
      { name: "Protein Supplements", slug: "protein-supplements", description: "Plant protein, whey isolates, and meal replacements." },
      { name: "Bone Health", slug: "bone-health", description: "Glucosamine, collagen peptides, and bone strength formulas." },
    ],
  },
  "Health Resources": {
    slug: "health-resources",
    description: "Educational health databases, medicine price comparisons, salts encyclopedia, and blogs.",
    items: [
      { name: "All Blogs", url: "/blogs", description: "Articles on generic vs branded medicines, dosage guides, and healthcare savings." },
      { name: "All Salts", url: "/salt", description: "Database of active pharmaceutical ingredients and therapeutic equivalents." },
      { name: "All Diseases", url: "/diseases", description: "Directory of health conditions, symptoms, and prescribed drug classes." },
      { name: "All Brands", url: "/brands", description: "Top pharmaceutical manufacturers including Cipla, Sun Pharma, and Mankind." },
      { name: "All Medicines", url: "/medicines", description: "Complete index of FDA & GMP certified branded and substitute medicines." },
      { name: "All Health Products", url: "/otc", description: "Over-the-counter wellness essentials, devices, and personal care." },
      { name: "Medicines By Health Condition", url: "/health-condition", description: "Explore certified medicines and substitutes grouped by medical therapy." },
    ],
  },
};

// Helper to look up any category or subcategory
export function findCategoryOrSubcategory(catSlug, subSlug) {
  const catEntry = Object.entries(categoryTaxonomy).find(([_, v]) => v.slug === catSlug);
  if (!catEntry) return null;
  const [catName, catData] = catEntry;

  if (!subSlug) {
    return {
      isSub: false,
      parentName: catName,
      parentSlug: catData.slug,
      name: catName,
      slug: catData.slug,
      description: catData.description,
      items: catData.items,
    };
  }

  const subItem = catData.items.find((item) => item.slug === subSlug);
  if (!subItem) return null;

  return {
    isSub: true,
    parentName: catName,
    parentSlug: catData.slug,
    name: subItem.name,
    slug: subItem.slug,
    description: subItem.description,
    items: catData.items,
  };
}
