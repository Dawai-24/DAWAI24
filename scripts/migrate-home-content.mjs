import {PrismaClient} from "@prisma/client";

const db=new PrismaClient();
const entries=[
  ["HOME_HERO","home-hero","Switch to Branded Generics",null,"Trusted by 10L+ users\nSave upto 60%\nDoctor Approved",null,"/img/ak-home-hero.webp",null,0],
  ["QUICK_ACTION","add-prescription","Add Prescription","Add Prescription to place your order",null,null,null,"/upload-prescription",0],
  ["QUICK_ACTION","whatsapp-order","Order On WhatsApp","Order medicines with our support team",null,null,"/img/whatsapp-icon.webp","https://api.whatsapp.com/send?phone=919606973757&text=Hi%20Dawai24%20team%2C%20I'd%20like%20to%20place%20an%20order",1],
  ["WHY_FEATURE","why-hero","Why Choose Substitute",null,null,null,"/img/why-substitute-hero.png","/blogs/understanding-the-perception-of-generic-medicine-online-quality-2",0],
  ["WHY_FEATURE","same-composition","Same Composition",null,"Same salt, same strength as your prescribed medicine",null,"/img/same-composition.webp",null,1],
  ["WHY_FEATURE","certified-manufacturers","Certified Manufacturers",null,"Made by GMP certified Indian manufacturers",null,"/img/certified-mfg.webp",null,2],
  ["WHY_FEATURE","savings-60","Savings up to 60%",null,"Save up to 60% on your monthly medicine bill",null,"/img/savings-60.webp",null,3],
  ["ADVANTAGE","genuine","100% Genuine",null,null,null,"/img/adv-genuine.webp",null,0],
  ["ADVANTAGE","fda-gmp","FDA & GMP Approved",null,null,null,"/img/adv-fda-gmp.webp",null,1],
  ["ADVANTAGE","gmp-certified","GMP Certified",null,null,null,"/img/adv-gmp-cert.webp",null,2],
  ["TESTIMONIAL","ramesh-sharma","Ramesh Sharma","Bengaluru","I was spending nearly ₹3,200 every month on my diabetes and BP medicines. Switching to certified substitute medicines reduced my bill to ₹1,350 without any change in efficacy. Very satisfied!","Saved ₹1,850/month",null,null,0],
  ["TESTIMONIAL","pooja-deshmukh","Pooja Deshmukh","Pune","Doctor-approved substitute salts delivered with original seal and batch certificates. The pharmacist verified my prescription and explained the formulation patiently.","Saved ₹2,400/month",null,null,1],
  ["TESTIMONIAL","virender-gupta","Virender Gupta","Delhi NCR","Fast doorstep delivery and transparent pricing. No unnecessary brand markups. Same chemical salt manufactured by GMP approved pharma companies.","Saved 62% on chronic meds",null,null,2],
  ["TESTIMONIAL","ananya-iyer","Ananya Iyer","Chennai","Ordering through prescription upload is seamless. I uploaded a photo, received suitable alternatives, and got genuine medicines delivered quickly.","Saved ₹1,200/month",null,null,3],
  ["TESTIMONIAL","sanjay-singhal","Sanjay Singhal","Jaipur","My father takes daily cardiac and cholesterol tablets. Buying substitutes helped our family save substantially through the year.","Saved ₹3,100/month",null,null,4],
  ["TESTIMONIAL","kavita-nair","Kavita Nair","Kochi","Packaging is secure and delivery is on time every month. Customer care is responsive and helpful.","Saved 58% on monthly bill",null,null,5],
  ["TESTIMONIAL","manoj-agarwal","Manoj Agarwal","Kolkata","My family doctor confirmed the salt composition is identical. The ordering experience and service have been reliable.","Saved ₹1,650/month",null,null,6],
  ["TESTIMONIAL","dr-arvind-kulkarni","Dr. Arvind Kulkarni","Mumbai","Indian generic medicines follow bioequivalence standards. Dawai24 makes suitable options transparent and accessible.","Saved ₹2,800/month",null,null,7],
  ["NEWS","economic-times","The Economic Times",null,"Dawai24 has been featured for making affordable substitute medicines easier to access.",null,"/img/news-1.webp",null,0],
  ["NEWS","media-2","Media coverage",null,"Coverage of Dawai24 and its work in affordable healthcare.",null,"/img/news-2.webp",null,1],
  ["NEWS","media-3","Media coverage",null,"Coverage of Dawai24 and its work in affordable healthcare.",null,"/img/news-3.webp",null,2],
  ["NEWS","media-4","Media coverage",null,"Coverage of Dawai24 and its work in affordable healthcare.",null,"/img/news-4.webp",null,3],
  ["NEWS","media-5","Media coverage",null,"Coverage of Dawai24 and its work in affordable healthcare.",null,"/img/news-5.webp",null,4],
  ["NEWS","media-6","Media coverage",null,"Coverage of Dawai24 and its work in affordable healthcare.",null,"/img/news-6.webp",null,5],
  ["NEWS","media-7","Media coverage",null,"Coverage of Dawai24 and its work in affordable healthcare.",null,"/img/news-7.webp",null,6],
  ["NEWS","media-8","Media coverage",null,"Coverage of Dawai24 and its work in affordable healthcare.",null,"/img/news-8.webp",null,7],
  ["NEWS","media-9","Media coverage",null,"Coverage of Dawai24 and its work in affordable healthcare.",null,"/img/news-9.webp",null,8],
  ["NEWS","media-10","Media coverage",null,"Coverage of Dawai24 and its work in affordable healthcare.",null,"/img/news-10.webp",null,9],
  ["KNOW_MORE","buy-medicines-online","Buy Medicines Online from Dawai24, India's Trusted Online Pharmacy for Branded Substitute Medicines",null,"Looking to buy medicines online at affordable prices? Dawai24 helps you save more with branded substitute medicines manufactured in certified facilities. Whether you need prescription medicines, OTC products, or long-term treatment, Dawai24 makes online medicine delivery simple, secure, and convenient.",null,null,null,0],
  ["KNOW_MORE","substitute-medicines","What are Substitute Medicines?",null,"Substitute medicines contain the same active ingredient, strength, dosage form, and therapeutic effect as a prescribed medicine but may be manufactured by a different pharmaceutical company. Always consult your doctor before switching medicines.",null,null,null,1],
  ["KNOW_MORE","save-on-orders","How Does Dawai24 Help You Save More on Every Medicine Order?",null,"Compare medicine prices, find affordable branded substitutes, reduce monthly prescription costs, order from home, and get medicines delivered to your doorstep. Our goal is to make quality healthcare accessible without increasing treatment costs.",null,null,null,2],
  ["FAQ","what-is-dawai24","What is Dawai24?",null,"Dawai24 is an online pharmacy platform for medicines and healthcare products published by its administration team.",null,null,null,0],
  ["FAQ","are-substitutes-safe","Are substitute medicines safe?",null,"Substitutes should have the same active ingredient and strength. Consult your doctor or pharmacist before changing a prescribed medicine.",null,null,null,1],
  ["FAQ","prescription-required","Do I need a prescription?",null,"Products marked prescription-required can only be processed after a valid prescription is reviewed.",null,null,null,2],
];

for(const [type,slug,title,subtitle,body,badge,imageUrl,linkUrl,sortOrder] of entries){
  await db.cmsEntry.upsert({where:{type_slug:{type,slug}},update:{title,subtitle,body,badge,imageUrl,linkUrl,sortOrder,active:true},create:{type,slug,title,subtitle,body,badge,imageUrl,linkUrl,sortOrder,active:true}});
}

const banners=[
  ["Dynapar QPS Plus Pain Relief Spray","/img/banner-1.png","/medicines",0],
  ["Friends Premium Adult Dry Diaper Pants","/img/banner-2.jpeg","/category/personal-care",1],
  ["All Day Re-Moisturising Cream","/img/banner-3.png","/category/personal-care",2],
];
for(const [title,imageUrl,linkUrl,sortOrder] of banners){const existing=await db.banner.findFirst({where:{title,placement:"HOME_PROMO"}});if(existing)await db.banner.update({where:{id:existing.id},data:{imageUrl,linkUrl,sortOrder,active:true}});else await db.banner.create({data:{title,imageUrl,linkUrl,sortOrder,active:true,placement:"HOME_PROMO"}})}

const categories=await db.category.findMany({include:{_count:{select:{subcategories:true}}},orderBy:[{sortOrder:"asc"},{createdAt:"asc"}]});
for(let index=0;index<categories.length;index++)await db.category.update({where:{id:categories[index].id},data:{imageUrl:index===5?"/img/cat-main-5.svg":`/img/cat-main-${index}.png`,sortOrder:index}});

const subcategoryGroups=[
  ["Skin Care","Hair Care","Oral Care","Sexual Wellness","Feminine Hygiene","Baby Care","Elderly Care","Bone & Joint Care"],
  ["Pain Relief","Cold & Cough","Digestive Care","Allergy Care","Eye Care","Kidney Care","Respiratory Care"],
  ["Diabetes Care","Blood Pressure Care","Cardiac Care","Cholesterol Care"],
  ["Health Articles","Diseases","Medicine Salts"],
  ["Glucometers","Blood Pressure Monitors","Thermometers","Nebulizers","Oximeters","Weighing Scales","Orthopaedic Supports","Surgical Supplies"],
  ["Multivitamins","Protein Supplements","Calcium Supplements","Immunity Boosters","Omega & Fish Oil","Ayurvedic Supplements"],
];
const slugify=value=>value.toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
for(let categoryIndex=0;categoryIndex<categories.length;categoryIndex++){
  const category=categories[categoryIndex];
  if(categoryIndex===5&&category.name!=="Vitamins & Supplements")await db.category.update({where:{id:category.id},data:{name:"Vitamins & Supplements"}});
  for(let index=0;index<(subcategoryGroups[categoryIndex]||[]).length;index++){
    const name=subcategoryGroups[categoryIndex][index],slug=slugify(name);
    await db.subcategory.upsert({where:{categoryId_slug:{categoryId:category.id,slug}},update:{name,sortOrder:index,active:true},create:{categoryId:category.id,name,slug,sortOrder:index,active:true}});
  }
}

console.log(`Migrated ${entries.length} home entries, ${banners.length} banners and ${categories.length} categories.`);
console.log(`Migrated ${subcategoryGroups.reduce((sum,group)=>sum+group.length,0)} home subcategories.`);
await db.$disconnect();
