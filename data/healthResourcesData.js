export const saltsData = {
  "paracetamol": {
    slug: "paracetamol",
    name: "Paracetamol",
    class: "Analgesic & Antipyretic",
    overview: "Paracetamol (also known as Acetaminophen) is one of the most widely used over-the-counter pain relievers and fever reducers globally. It works by inhibiting prostaglandin synthesis in the central nervous system and elevating the pain threshold.",
    uses: [
      "Reduction of mild-to-moderate fever caused by infections, flu, or seasonal illnesses",
      "Headaches, tension migraines, and dental toothaches",
      "Muscle aches, backache, and arthritis discomfort",
      "Post-vaccination pyrexia and fever in children and adults"
    ],
    mechanism: "Paracetamol acts primarily in the CNS by blocking cyclooxygenase (COX) enzyme variants, which reduces the generation of prostaglandins responsible for pain signalling and fever regulation in the hypothalamus.",
    sideEffects: [
      "Generally safe and well tolerated when taken within recommended dosage limits",
      "Nausea, allergic skin rash, or mild itching (rare)",
      "Liver toxicity (hepatotoxicity) if taken in excessive doses or combined with heavy alcohol intake"
    ],
    dosageAdvice: "Standard adult dose is 500mg to 650mg every 4 to 6 hours as needed. Maximum recommended daily dose is 3000mg to 4000mg. Do not combine with other paracetamol-containing cold remedies.",
    substitutesCount: 42,
    topBrand: "Dolo 650 / Calpol",
    sampleMedicines: [
      { name: "Pain Relief Tablets 650mg", brand: "Healora", mrp: 35, price: 18, pack: "Strip of 15 tablets" },
      { name: "Fever Care Tablets 500mg", brand: "Vitanova", mrp: 28, price: 14, pack: "Strip of 10 tablets" },
      { name: "Fast Relief Paracetamol Drops", brand: "CareNest", mrp: 55, price: 32, pack: "Bottle of 15ml" }
    ]
  },
  "pantoprazole": {
    slug: "pantoprazole",
    name: "Pantoprazole",
    class: "Proton Pump Inhibitor (PPI)",
    overview: "Pantoprazole is a gastric acid-suppressing medication that provides long-lasting relief from gastroesophageal reflux disease (GERD), gastric ulcers, and erosive esophagitis. It promotes healing of the esophagus and stomach lining.",
    uses: [
      "Treatment of Gastroesophageal Reflux Disease (GERD) and chronic heartburn",
      "Healing of duodenal and gastric peptic ulcers",
      "Zollinger-Ellison syndrome (hypersecretory gastric acid conditions)",
      "Prevention of NSAID-induced gastrointestinal ulcers"
    ],
    mechanism: "Pantoprazole irreversibly binds to the hydrogen/potassium adenosine triphosphatase enzyme system (the gastric proton pump) in gastric parietal cells, blocking the final common step of hydrochloric acid secretion.",
    sideEffects: [
      "Headache, mild abdominal discomfort, or diarrhea",
      "Vitamin B12 deficiency and reduced magnesium absorption on prolonged multi-year usage",
      "Dizziness or flatulence"
    ],
    dosageAdvice: "Usually taken once daily in the morning, 30 to 60 minutes before breakfast. Swallow whole with water; do not crush or chew delayed-release enteric-coated tablets.",
    substitutesCount: 58,
    topBrand: "Pan 40 / Pantocid",
    sampleMedicines: [
      { name: "Antacid Chewable & PPI Tablets 40mg", brand: "CareNest", mrp: 120, price: 54, pack: "Strip of 10 tablets" },
      { name: "Gastro Relief Pantoprazole DSR", brand: "Healora", mrp: 165, price: 78, pack: "Strip of 10 capsules" },
      { name: "Acidity Care Fast Action 20mg", brand: "PureLeaf", mrp: 85, price: 42, pack: "Strip of 10 tablets" }
    ]
  },
  "metformin-hydrochloride": {
    slug: "metformin-hydrochloride",
    name: "Metformin Hydrochloride",
    class: "Biguanide Antidiabetic",
    overview: "Metformin is the worldwide first-line pharmacological treatment for Type 2 Diabetes Mellitus. It helps maintain healthy glycemic control without promoting weight gain or causing hypoglycemia when used as monotherapy.",
    uses: [
      "First-line management of blood glucose levels in Type 2 Diabetes Mellitus",
      "Polycystic Ovary Syndrome (PCOS) insulin sensitisation and cycle regulation",
      "Prevention of type 2 diabetes progression in high-risk prediabetic adults",
      "Cardiovascular mortality reduction in overweight diabetic patients"
    ],
    mechanism: "Metformin decreases hepatic glucose production (gluconeogenesis), decreases intestinal absorption of glucose, and improves insulin sensitivity by increasing peripheral glucose uptake and utilization in skeletal muscles.",
    sideEffects: [
      "Mild gastrointestinal distress, metallic taste, nausea, or loose stools (usually transient)",
      "Vitamin B12 deficiency on prolonged multi-year therapy",
      "Lactic acidosis (rare but serious risk in patients with severe renal impairment)"
    ],
    dosageAdvice: "Take with or immediately after meals to reduce stomach upset. Sustained-release (SR) formulations should be taken whole with the evening meal.",
    substitutesCount: 64,
    topBrand: "Glycomet 500 / Glucophage",
    sampleMedicines: [
      { name: "Blood Sugar Care Metformin 500mg", brand: "Medisure", mrp: 48, price: 22, pack: "Strip of 20 tablets" },
      { name: "Glycemic Balance SR 1000mg", brand: "Healora", mrp: 82, price: 39, pack: "Strip of 15 tablets" },
      { name: "Diabetic Care Complex", brand: "Vitanova", mrp: 95, price: 46, pack: "Strip of 15 tablets" }
    ]
  },
  "telmisartan": {
    slug: "telmisartan",
    name: "Telmisartan",
    class: "Angiotensin II Receptor Blocker (ARB)",
    overview: "Telmisartan is a potent, long-acting non-peptide angiotensin II receptor antagonist that effectively lowers arterial blood pressure and provides 24-hour cardiovascular and renal protection.",
    uses: [
      "Treatment of essential hypertension (high blood pressure) in adults",
      "Reduction of cardiovascular morbidity in patients with manifest atherothrombotic disease",
      "Diabetic nephropathy renal protection in hypertensive type 2 diabetic patients",
      "Prevention of stroke and heart failure events"
    ],
    mechanism: "Telmisartan selectively blocks the vasoconstrictor and aldosterone-secreting effects of angiotensin II by competing for AT1 receptors in vascular smooth muscle and adrenal glands, causing blood vessel dilation.",
    sideEffects: [
      "Dizziness, lightheadedness when standing up quickly",
      "Hyperkalemia (elevated potassium levels) when combined with potassium supplements",
      "Back pain or sinus congestion"
    ],
    dosageAdvice: "Take once daily, with or without food, preferably at the same time each day. Regular monitoring of blood pressure and kidney function is recommended.",
    substitutesCount: 48,
    topBrand: "Telma 40 / Telmikind",
    sampleMedicines: [
      { name: "Blood Pressure Support Telmisartan 40mg", brand: "BlueBay", mrp: 140, price: 62, pack: "Strip of 15 tablets" },
      { name: "Cardio Protect 80mg", brand: "Healora", mrp: 190, price: 88, pack: "Strip of 15 tablets" },
      { name: "Hypertension Balance 40+H", brand: "Medisure", mrp: 155, price: 72, pack: "Strip of 15 tablets" }
    ]
  },
  "atorvastatin": {
    slug: "atorvastatin",
    name: "Atorvastatin",
    class: "HMG-CoA Reductase Inhibitor (Statin)",
    overview: "Atorvastatin is a lipid-lowering medication widely prescribed to prevent cardiovascular disease and lower cholesterol. It significantly reduces LDL ('bad cholesterol') and triglycerides while modestly raising HDL ('good cholesterol').",
    uses: [
      "Primary hypercholesterolemia and mixed dyslipidemia",
      "Prevention of myocardial infarction (heart attack) and stroke in high-risk patients",
      "Slowing progression of coronary atherosclerosis in patients with heart disease",
      "Post-angioplasty and cardiac bypass graft long-term stabilization"
    ],
    mechanism: "Atorvastatin selectively and competitively inhibits 3-hydroxy-3-methylglutaryl-coenzyme A (HMG-CoA) reductase, the rate-limiting enzyme in cholesterol biosynthesis, increasing hepatic LDL receptor density to clear circulating LDL.",
    sideEffects: [
      "Mild muscle ache (myalgia) or joint pain",
      "Mild elevations in liver transaminases (monitored via LFT tests)",
      "Digestive changes including mild diarrhea or indigestion"
    ],
    dosageAdvice: "Take once daily in the evening or night with or without meals. Avoid drinking excessive quantities of grapefruit juice while taking atorvastatin.",
    substitutesCount: 52,
    topBrand: "Atorva / Storvas",
    sampleMedicines: [
      { name: "Lipid Guard Atorvastatin 10mg", brand: "Wellspring", mrp: 110, price: 49, pack: "Strip of 15 tablets" },
      { name: "Cardio Health Atorva 20mg", brand: "Healora", mrp: 185, price: 82, pack: "Strip of 15 tablets" },
      { name: "Cholesterol Defense 40mg", brand: "Medisure", mrp: 240, price: 110, pack: "Strip of 10 tablets" }
    ]
  },
  "cetirizine-hydrochloride": {
    slug: "cetirizine-hydrochloride",
    name: "Cetirizine Hydrochloride",
    class: "Second-Generation Antihistamine",
    overview: "Cetirizine is a non-sedating, rapid-acting antihistamine used to relieve seasonal allergic rhinitis, indoor dust and pet allergies, and chronic allergic hives (urticaria).",
    uses: [
      "Relief of sneezing, runny nose, itchy watery eyes from allergic rhinitis",
      "Treatment of uncomplicated skin manifestations of chronic idiopathic urticaria (hives)",
      "Seasonal pollen and mold spore allergies",
      "Allergic skin reactions, insect bites, and eczema pruritus"
    ],
    mechanism: "Cetirizine is a potent and selective antagonist of peripheral histamine H1 receptors. It stops histamine released by mast cells from binding to target receptors in nasal, ocular, and cutaneous tissues.",
    sideEffects: [
      "Low incidence of drowsiness compared to first-generation antihistamines",
      "Dry mouth, mild fatigue, or headache",
      "Pharyngitis or dizziness in rare cases"
    ],
    dosageAdvice: "Take once daily in the evening, with or without food. Avoid alcohol and operating heavy machinery if you feel drowsy.",
    substitutesCount: 30,
    topBrand: "Cetzine / Okacet",
    sampleMedicines: [
      { name: "Allergy Care Cetirizine 10mg", brand: "Vitanova", mrp: 38, price: 17, pack: "Strip of 10 tablets" },
      { name: "Nasal Relief Allergy Syrup 60ml", brand: "CareNest", mrp: 65, price: 34, pack: "Bottle of 60ml" },
      { name: "Anti-Allergy Skin Tabs", brand: "Healora", mrp: 45, price: 21, pack: "Strip of 10 tablets" }
    ]
  }
};

export const diseasesData = {
  "type-2-diabetes-mellitus": {
    slug: "type-2-diabetes-mellitus",
    name: "Type 2 Diabetes Mellitus",
    category: "Endocrine & Metabolic",
    synonyms: "Adult-onset Diabetes, Non-Insulin Dependent Diabetes (NIDDM)",
    overview: "Type 2 Diabetes is a chronic metabolic disorder characterized by elevated levels of blood glucose resulting from insulin resistance combined with progressive impairment of insulin secretion by pancreatic beta cells.",
    symptoms: [
      "Frequent urination (Polyuria), especially at night",
      "Increased persistent thirst (Polydipsia) and constant dry mouth",
      "Unexplained fatigue and lethargy after meals",
      "Slow-healing cuts, bruises, or frequent skin infections",
      "Blurred vision and numbness/tingling in hands and feet (peripheral neuropathy)"
    ],
    causes: [
      "Insulin resistance in muscle, liver, and adipose tissues",
      "Sedentary lifestyle and lack of regular cardiovascular exercise",
      "Excess body weight and abdominal/visceral adiposity",
      "Genetic predisposition and family history of metabolic syndromes",
      "Chronic emotional stress and poor sleep patterns"
    ],
    treatmentAndMeds: "Initial management relies on medical nutrition therapy, weight loss, and daily physical activity. When lifestyle intervention is insufficient, oral antidiabetic agents are initiated.",
    commonSalts: [
      "Metformin Hydrochloride (first-line biguanide)",
      "Glimepiride & Gliclazide (sulfonylureas for insulin secretion)",
      "Sitagliptin & Vildagliptin (DPP-4 inhibitors)",
      "Dapagliflozin & Empagliflozin (SGLT2 inhibitors for kidney glucose excretion)"
    ],
    recommendedTests: "HbA1c test (every 3 months), Fasting Blood Glucose (FBG), Postprandial Blood Glucose (PPBS), and Urine Microalbumin."
  },
  "hypertension-high-blood-pressure": {
    slug: "hypertension-high-blood-pressure",
    name: "Hypertension (High Blood Pressure)",
    category: "Cardiovascular",
    synonyms: "High BP, Essential Hypertension, Primary Arterial Hypertension",
    overview: "Hypertension is a chronic cardiovascular condition in which the blood pressure in the arteries remains persistently elevated (above 130/80 mmHg). Often referred to as the 'silent killer' because it seldom exhibits noticeable symptoms until serious complications occur.",
    symptoms: [
      "Often entirely asymptomatic during initial and moderate stages",
      "Morning occipital headaches and throbbing temple sensations",
      "Dizziness, lightheadedness, or sudden vertigo",
      "Shortness of breath on mild exertion",
      "Nosebleeds (epistaxis) or chest tightness during severe spikes"
    ],
    causes: [
      "Excessive dietary sodium (salt) consumption and low potassium intake",
      "Arterial wall stiffness and atherosclerotic plaque narrowing",
      "Chronic stress triggering sympathetic nervous system overactivity",
      "Obesity, smoking, and excessive alcohol consumption",
      "Family history of cardiovascular hypertension"
    ],
    treatmentAndMeds: "Management incorporates dietary changes (DASH diet, salt restriction below 5g/day), daily aerobic exercise, stress reduction, and daily antihypertensive pharmacological regimens.",
    commonSalts: [
      "Telmisartan & Losartan (Angiotensin II receptor blockers)",
      "Amlodipine (Calcium channel blocker)",
      "Hydrochlorothiazide & Chlorthalidone (Thiazide diuretics)",
      "Metoprolol & Atenolol (Beta-blockers)"
    ],
    recommendedTests: "Regular home BP monitoring with digital oscillometric monitors, Lipid Profile, Serum Creatinine, and Electrocardiogram (ECG)."
  },
  "gastroesophageal-reflux-disease-gerd": {
    slug: "gastroesophageal-reflux-disease-gerd",
    name: "Gastroesophageal Reflux Disease (GERD)",
    category: "Digestive & Gastro",
    synonyms: "Acid Reflux, Heartburn Disease, Esophageal Reflux",
    overview: "GERD is a digestive disease in which stomach acid and bile repeatedly flow back into the esophagus, irritating the mucosal lining. It is often triggered by dysfunction or transient relaxation of the lower esophageal sphincter (LES).",
    symptoms: [
      "Burning chest sensation (heartburn) usually after eating, worse when lying down",
      "Sour or bitter acid regurgitation into the throat or mouth",
      "Difficulty swallowing (dysphagia) or sensation of a lump in the throat",
      "Chronic dry cough and morning hoarseness",
      "Upper abdominal fullness, bloating, and frequent belching"
    ],
    causes: [
      "Hiatal hernia (upper stomach protruding through the diaphragm)",
      "Delayed stomach emptying (gastroparesis)",
      "Consuming heavy oily, spicy, acidic, or fried meals late at night",
      "Smoking and high caffeine, alcohol, or carbonated drink intake",
      "Obesity exerting extra abdominal pressure on the stomach"
    ],
    treatmentAndMeds: "Therapy involves elevating the head of the bed, eating smaller meals 3 hours before sleep, avoiding trigger foods, and taking stomach acid-neutralizing and acid-suppressing pharmaceuticals.",
    commonSalts: [
      "Pantoprazole & Rabeprazole (Proton Pump Inhibitors)",
      "Domperidone & Levosulpiride (Prokinetic agents for motility)",
      "Magnesium Hydroxide & Aluminium Hydroxide (Antacid suspensions)",
      "Sucralfate (Mucosal protective barrier)"
    ],
    recommendedTests: "Upper GI Endoscopy, 24-hour Esophageal pH Impedance Monitoring, and H. Pylori Stool Antigen Test."
  },
  "osteoarthritis-and-joint-pain": {
    slug: "osteoarthritis-and-joint-pain",
    name: "Osteoarthritis & Joint Pain",
    category: "Musculoskeletal",
    synonyms: "Degenerative Joint Disease, Wear-and-Tear Arthritis",
    overview: "Osteoarthritis is the most common form of arthritis, affecting millions worldwide. It occurs when the protective cartilage that cushions the ends of bones wears down over time, most frequently affecting knees, hips, hands, and the spine.",
    symptoms: [
      "Joint pain during or after movement and weight-bearing activities",
      "Joint stiffness noticeable upon waking up or after periods of inactivity",
      "Loss of joint flexibility and reduced range of motion",
      "Grating sensation or cracking sound (crepitus) during movement",
      "Mild swelling and bony tenderness around affected joints"
    ],
    causes: [
      "Cumulative age-related breakdown of articular cartilage matrix",
      "Prior traumatic joint injuries, ligament tears, or sports fractures",
      "Obesity placing continuous mechanical stress on weight-bearing joints",
      "Repetitive occupational stress on knees and spine",
      "Genetic factors influencing cartilage elasticity and density"
    ],
    treatmentAndMeds: "Staying active through low-impact exercises (swimming, cycling), maintaining healthy body weight, physiotherapy, and taking supportive anti-inflammatory medications and cartilage building blocks.",
    commonSalts: [
      "Glucosamine Sulfate & Chondroitin (Cartilage building supplements)",
      "Paracetamol & NSAIDs (Diclofenac, Aceclofenac for pain control)",
      "Collagen Peptides & Rose Hip Extracts (Joint flexibility)",
      "Topical Diclofenac and Capsaicin pain relief gels"
    ],
    recommendedTests: "Weight-bearing X-rays of knees/hips, MRI for soft tissue analysis, and Erythrocyte Sedimentation Rate (ESR)."
  }
};

export const brandsData = {
  "healora": {
    slug: "healora",
    name: "Healora Laboratories",
    origin: "India",
    certifications: "WHO-GMP Certified, ISO 9001:2015",
    description: "Healora is a flagship pharmaceutical research and formulations company delivering high-potency, bioequivalent generic medicines at affordable prices across chronic pain, gastro, and lifestyle segments.",
    specialties: ["Pain Management", "Gastroenterology", "Cardiology", "Primary Care"],
    founded: "2012"
  },
  "vitanova": {
    slug: "vitanova",
    name: "Vitanova Healthcare",
    origin: "India",
    certifications: "US-FDA Approved Facilities, GMP Certified",
    description: "Vitanova specializes in active nutrient delivery systems, evidence-based daily vitamins, pediatric wellness formulations, and essential chronic care medications.",
    specialties: ["Vitamins & Minerals", "Pediatric Care", "Respiratory Antiallergics", "Immunity"],
    founded: "2008"
  },
  "carenest": {
    slug: "carenest",
    name: "CareNest Pharmaceuticals",
    origin: "India",
    certifications: "GMP Certified, NABL Accredited Testing",
    description: "CareNest focuses on mother and child wellness, digestive health products, daily antacids, and gentle dermatological therapeutics.",
    specialties: ["Mother & Baby Care", "Acid Peptic Disorders", "Topical Skincare", "First Aid"],
    founded: "2016"
  },
  "medisure": {
    slug: "medisure",
    name: "Medisure Therapeutics",
    origin: "India",
    certifications: "WHO-GMP, EU-GMP Certified",
    description: "Medisure is a trusted manufacturer of affordable cardiovascular, antidiabetic, and antihypertensive medications engineered to international pharmacopoeia standards.",
    specialties: ["Diabetes Mellitus", "Hypertension", "Lipid Management", "Renal Therapeutics"],
    founded: "2004"
  },
  "pureleaf": {
    slug: "pureleaf",
    name: "PureLeaf Bioceuticals",
    origin: "India",
    certifications: "AYUSH Certified, GMP Organic Standards",
    description: "PureLeaf bridges traditional herbal therapeutics with modern standardization, producing clinically evaluated botanical supplements and digestive herbal remedies.",
    specialties: ["Herbal Wellness", "Liver Protection", "Joint Mobility", "Stress Relief"],
    founded: "2015"
  },
  "bluebay": {
    slug: "bluebay",
    name: "BlueBay Health Science",
    origin: "India",
    certifications: "ISO 13485 (Medical Devices), WHO-GMP",
    description: "BlueBay specializes in medical diagnostic devices, digital blood pressure monitors, infrared thermometers, and critical cardiovascular formulations.",
    specialties: ["Healthcare Devices", "Cardiovascular Medicine", "Digital Diagnostics", "Emergency Care"],
    founded: "2014"
  },
  "wellspring": {
    slug: "wellspring",
    name: "Wellspring Lifesciences",
    origin: "India",
    certifications: "WHO-GMP, PIC/S Compliant",
    description: "Wellspring provides precision medications for endocrine, renal, and cholesterol management, ensuring patient affordability for lifelong therapies.",
    specialties: ["Lipid Lowering", "Thyroid Disorders", "Urology", "Metabolic Health"],
    founded: "2010"
  },
  "novaderm": {
    slug: "novaderm",
    name: "NovaDerm Dermatology",
    origin: "India",
    certifications: "Dermatologically Tested, GMP Certified",
    description: "NovaDerm is a dedicated derma-cosmeceutical laboratory formulating clinical barrier repair creams, sunscreens, antifungal ointments, and scalp treatments.",
    specialties: ["Clinical Dermatology", "Acne Management", "Eczema & Psoriasis", "Scalp Care"],
    founded: "2018"
  }
};
