// SAMPLE DATA - MediCart is a fictional demo store.
export const categories = [
  { slug: "medicines", name: "Medicines", color: "#2563eb", icon: "Pill", subs: ["Pain & Fever", "Digestive Care", "Allergy", "First Aid"] },
  { slug: "vitamins-supplements", name: "Vitamins & Supplements", color: "#f59e0b", icon: "Sparkles", subs: ["Multivitamins", "Minerals", "Protein & Nutrition", "Immunity"] },
  { slug: "diabetes-care", name: "Diabetes Care", color: "#0891b2", icon: "Droplet", subs: ["Monitors", "Test Strips", "Sugar-free Foods"] },
  { slug: "heart-care", name: "Heart Care", color: "#dc2626", icon: "HeartPulse", subs: ["BP Monitors", "Wellness Foods", "Omega Care"] },
  { slug: "personal-care", name: "Personal Care", color: "#7c3aed", icon: "Smile", subs: ["Skin Care", "Hair Care", "Oral Care", "Body Care"] },
  { slug: "healthcare-devices", name: "Healthcare Devices", color: "#0d9488", icon: "Stethoscope", subs: ["Thermometers", "Oximeters", "Nebulizers", "Supports & Braces"] },
  { slug: "baby-mom-care", name: "Baby & Mom Care", color: "#db2777", icon: "Baby", subs: ["Baby Skin", "Diapers", "Feeding", "Mom Care"] },
  { slug: "cough-cold", name: "Cough & Cold", color: "#4f46e5", icon: "Wind", subs: ["Lozenges", "Syrups", "Steam & Nasal"] },
  { slug: "bone-joint", name: "Bone & Joint", color: "#ea580c", icon: "Bone", subs: ["Pain Relief Gels", "Joint Wellness", "Calcium Care"] },
  { slug: "wellness-fitness", name: "Wellness & Fitness", color: "#16a34a", icon: "Dumbbell", subs: ["Herbal Wellness", "Fitness Aids", "Sleep & Stress"] },
];

export const healthConditions = [
  "Diabetes", "Heart Health", "Joint Pain", "Cough & Cold", "Digestion", "Skin Concerns",
  "Immunity", "Sleep & Stress", "Women's Health", "Child Care",
].map((name) => ({ name, slug: name.toLowerCase().replace(/[^a-z]+/g, "-").replace(/-$/, "") }));

export const brands = ["Healora", "Vitanova", "CareNest", "PureLeaf", "Medisure", "BlueBay", "Wellspring", "NovaDerm"];

export const getCategory = (slug) => categories.find((c) => c.slug === slug);
