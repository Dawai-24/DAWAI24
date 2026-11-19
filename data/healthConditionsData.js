const healthConditionsData = [
  {
    id: "blood-disorders",
    name: "Blood Disorders",
    icon: "https://plrx.gumlet.io/blood_disorders.svg",
    subcategories: [
      { name: "Bleeding", slug: "bleeding-medicines" },
      { name: "Haemophilia A", slug: "haemophilia-a-medicines" },
      { name: "Iron Deficiency Anaemia", slug: "iron-deficiency-anaemia-medicines" },
      { name: "Thrombocytopenia", slug: "thrombocytopenia-medicines" },
      { name: "Deep Vein Thrombosis", slug: "deep-vein-thrombosis-medicines" }
    ]
  },
  {
    id: "bone-joint-care",
    name: "Bone & Joint Care",
    icon: "https://plrx.gumlet.io/bone_and_joint_care.svg",
    subcategories: [
      { name: "Osteoarthritis", slug: "osteoarthritis-medicines" },
      { name: "Rheumatoid Arthritis", slug: "rheumatoid-arthritis-medicines" },
      { name: "Osteoporosis", slug: "osteoporosis-medicines" },
      { name: "Gout", slug: "gout-medicines" },
      { name: "Bone Density Loss", slug: "bone-density-loss-medicines" },
      { name: "Joint Pain & Stiffness", slug: "joint-pain-stiffness-medicines" }
    ]
  },
  {
    id: "cancer-care",
    name: "Cancer Care",
    icon: "https://plrx.gumlet.io/cancer_care.svg",
    subcategories: [
      { name: "Chemotherapy Support", slug: "chemotherapy-support-medicines" },
      { name: "Breast Cancer", slug: "breast-cancer-medicines" },
      { name: "Prostate Cancer", slug: "prostate-cancer-medicines" },
      { name: "Colorectal Cancer", slug: "colorectal-cancer-medicines" },
      { name: "Lung Cancer Support", slug: "lung-cancer-support-medicines" }
    ]
  },
  {
    id: "diabetes-care",
    name: "Diabetes Care",
    icon: "https://plrx.gumlet.io/diabetes_care.svg",
    subcategories: [
      { name: "Type 2 Diabetes", slug: "type-2-diabetes-medicines" },
      { name: "Type 1 Diabetes Support", slug: "type-1-diabetes-medicines" },
      { name: "Diabetic Neuropathy", slug: "diabetic-neuropathy-medicines" },
      { name: "Blood Glucose Regulators", slug: "blood-glucose-regulators" },
      { name: "Insulin Formulations", slug: "insulin-formulations" }
    ]
  },
  {
    id: "ear-nose-throat",
    name: "Ear, Nose & Throat",
    icon: "https://plrx.gumlet.io/ear_nose_and_throat.svg",
    subcategories: [
      { name: "Allergic Rhinitis", slug: "allergic-rhinitis-medicines" },
      { name: "Sinusitis", slug: "sinusitis-medicines" },
      { name: "Otitis Media (Ear Infection)", slug: "otitis-media-medicines" },
      { name: "Sore Throat & Tonsillitis", slug: "sore-throat-medicines" }
    ]
  },
  {
    id: "eye-care",
    name: "Eye Care",
    icon: "https://plrx.gumlet.io/eye_care.svg",
    subcategories: [
      { name: "Dry Eye Syndrome", slug: "dry-eye-syndrome-medicines" },
      { name: "Glaucoma", slug: "glaucoma-medicines" },
      { name: "Conjunctivitis", slug: "conjunctivitis-medicines" },
      { name: "Eye Allergy & Irritation", slug: "eye-allergy-medicines" }
    ]
  },
  {
    id: "heart-care",
    name: "Heart Care",
    icon: "https://plrx.gumlet.io/heart_care.svg",
    subcategories: [
      { name: "Hypertension (High Blood Pressure)", slug: "hypertension-medicines" },
      { name: "High Cholesterol & Dyslipidemia", slug: "high-cholesterol-medicines" },
      { name: "Angina & Coronary Artery Disease", slug: "angina-medicines" },
      { name: "Heart Failure Support", slug: "heart-failure-medicines" },
      { name: "Arrhythmia", slug: "arrhythmia-medicines" }
    ]
  },
  {
    id: "infections",
    name: "Infections",
    icon: "https://plrx.gumlet.io/infections.svg",
    subcategories: [
      { name: "Bacterial Infections", slug: "bacterial-infections-medicines" },
      { name: "Fungal Infections", slug: "fungal-infections-medicines" },
      { name: "Viral Infections", slug: "viral-infections-medicines" },
      { name: "Urinary Tract Infections (UTI)", slug: "uti-medicines" },
      { name: "Parasitic Infestations", slug: "parasitic-infestations-medicines" }
    ]
  },
  {
    id: "kidney-care",
    name: "Kidney Care",
    icon: "https://plrx.gumlet.io/kidney_care.svg",
    subcategories: [
      { name: "Chronic Kidney Disease (CKD)", slug: "chronic-kidney-disease-medicines" },
      { name: "Kidney Stones", slug: "kidney-stones-medicines" },
      { name: "Hyperkalemia Support", slug: "hyperkalemia-medicines" }
    ]
  },
  {
    id: "liver-care",
    name: "Liver Care",
    icon: "https://plrx.gumlet.io/liver_care.svg",
    subcategories: [
      { name: "Fatty Liver Disease", slug: "fatty-liver-disease-medicines" },
      { name: "Hepatitis Support", slug: "hepatitis-support-medicines" },
      { name: "Liver Cirrhosis Care", slug: "liver-cirrhosis-medicines" }
    ]
  },
  {
    id: "mental-health",
    name: "Mental Health",
    icon: "https://plrx.gumlet.io/mental_health.svg",
    subcategories: [
      { name: "Anxiety Disorders", slug: "anxiety-disorders-medicines" },
      { name: "Depression Support", slug: "depression-medicines" },
      { name: "Insomnia & Sleep Regulators", slug: "insomnia-medicines" },
      { name: "Panic Disorder", slug: "panic-disorder-medicines" }
    ]
  },
  {
    id: "neurology-care",
    name: "Neurology Care",
    icon: "https://plrx.gumlet.io/neurology_care.svg",
    subcategories: [
      { name: "Epilepsy & Seizures", slug: "epilepsy-medicines" },
      { name: "Migraine & Chronic Headache", slug: "migraine-medicines" },
      { name: "Neuropathic Pain", slug: "neuropathic-pain-medicines" },
      { name: "Parkinson's Disease", slug: "parkinsons-disease-medicines" }
    ]
  },
  {
    id: "pain-management",
    name: "Pain Management",
    icon: "https://plrx.gumlet.io/pain_management.svg",
    subcategories: [
      { name: "Acute Body Ache", slug: "acute-body-ache-medicines" },
      { name: "Chronic Musculoskeletal Pain", slug: "chronic-musculoskeletal-pain" },
      { name: "Post-operative Pain Relief", slug: "post-operative-pain-relief" }
    ]
  },
  {
    id: "respiratory-care",
    name: "Respiratory Care",
    icon: "https://plrx.gumlet.io/respiratory_care.svg",
    subcategories: [
      { name: "Asthma & Bronchospasm", slug: "asthma-medicines" },
      { name: "COPD (Chronic Obstructive Pulmonary)", slug: "copd-medicines" },
      { name: "Persistent Bronchitis", slug: "bronchitis-medicines" },
      { name: "Cough & Congestion", slug: "cough-congestion-medicines" }
    ]
  },
  {
    id: "skin-care",
    name: "Skin Care",
    icon: "https://plrx.gumlet.io/skin_care.svg",
    subcategories: [
      { name: "Acne Vulgaris", slug: "acne-vulgaris-medicines" },
      { name: "Eczema & Atopic Dermatitis", slug: "eczema-medicines" },
      { name: "Psoriasis", slug: "psoriasis-medicines" },
      { name: "Fungal Skin Infections", slug: "fungal-skin-infections-medicines" },
      { name: "Skin Lightening & Hyperpigmentation", slug: "hyperpigmentation-medicines" }
    ]
  },
  {
    id: "stomach-digestive",
    name: "Stomach & Digestive Care",
    icon: "https://plrx.gumlet.io/stomach_and_digestive_care.svg",
    subcategories: [
      { name: "Acidity & GERD", slug: "acidity-gerd-medicines" },
      { name: "Peptic Ulcer Disease", slug: "peptic-ulcer-disease-medicines" },
      { name: "Irritable Bowel Syndrome (IBS)", slug: "ibs-medicines" },
      { name: "Constipation Relief", slug: "constipation-medicines" },
      { name: "Indigestion & Bloating", slug: "indigestion-medicines" }
    ]
  },
  {
    id: "thyroid-care",
    name: "Thyroid Care",
    icon: "https://plrx.gumlet.io/thyroid_care.svg",
    subcategories: [
      { name: "Hypothyroidism (Underactive)", slug: "hypothyroidism-medicines" },
      { name: "Hyperthyroidism (Overactive)", slug: "hyperthyroidism-medicines" },
      { name: "Goiter Management", slug: "goiter-medicines" }
    ]
  },
  {
    id: "womens-health",
    name: "Womens Health",
    icon: "https://plrx.gumlet.io/womens_health.svg",
    subcategories: [
      { name: "PCOS / PCOD Support", slug: "pcos-pcod-medicines" },
      { name: "Menstrual Irregularity", slug: "menstrual-irregularity-medicines" },
      { name: "Hormone Replacement Therapy", slug: "hrt-medicines" },
      { name: "Pregnancy Nutritional Care", slug: "pregnancy-nutritional-care" }
    ]
  }
];

export default healthConditionsData;
