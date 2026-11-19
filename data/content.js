// SAMPLE CONTENT - fictional, for the MediCart demo.
export const heroSlides = [
  { title: "Healthcare essentials, delivered", text: "Browse a demo catalogue of everyday health and wellness products.", cta: "Shop medicines", href: "/medicines", bg: "from-blue-700 to-blue-500" },
  { title: "Upload your prescription", text: "Try the demo upload flow with image or PDF preview and validation.", cta: "Upload now", href: "/upload-prescription", bg: "from-sky-700 to-blue-600" },
  { title: "Wellness deals this week", text: "Sample discounts across vitamins, devices and personal care.", cta: "View deals", href: "/category/vitamins-supplements", bg: "from-indigo-700 to-blue-500" },
];

export const trust = [
  { icon: "ShieldCheck", title: "Quality focus", text: "Demo copy: products would be sourced from licensed partners." },
  { icon: "Truck", title: "Fast delivery UI", text: "Delivery estimate interface by PIN code (demo)." },
  { icon: "BadgePercent", title: "Great savings", text: "Discounts shown against MRP on every sample product." },
  { icon: "Headset", title: "Help centre", text: "Support pages and contact form (demo only)." },
];

export const testimonials = [
  { name: "Sample Customer A", city: "City A", text: "Clean layout and easy to find what I needed. (Sample testimonial)" },
  { name: "Sample Customer B", city: "City B", text: "The cart and checkout steps were simple to follow. (Sample testimonial)" },
  { name: "Sample Customer C", city: "City C", text: "Prescription upload preview worked smoothly. (Sample testimonial)" },
];

export const faqs = [
  { q: "Is MediCart a real pharmacy?", a: "No. MediCart is a fictional demo storefront built for learning and design purposes. No real orders, payments or prescriptions are processed." },
  { q: "How does the prescription upload work?", a: "You can select an image or PDF (max 5 MB). The file is previewed in your browser only and is never uploaded to a server." },
  { q: "Can I place an order?", a: "You can walk through the checkout demo. Orders are stored in your browser's localStorage and no payment is taken." },
  { q: "Which coupon codes can I try?", a: "WELCOME10 gives 10% off and FREESHIP removes the delivery fee. Both are demo codes." },
  { q: "Is the product information medical advice?", a: "No. All product text is sample content. Consult a qualified doctor or pharmacist for medical advice." },
  { q: "How do I reset the demo data?", a: "Clear this site's localStorage in your browser's developer tools to reset cart, orders and account." },
];

export const policies = {
  "privacy-policy": { title: "Privacy Policy", body: ["MediCart is a demo. It does not collect, transmit or store personal data on any server.", "Cart, wishlist, address and order data you enter are saved only in your own browser's localStorage and can be cleared at any time.", "Uploaded prescription files stay in your browser and are not sent anywhere."] },
  "terms-and-conditions": { title: "Terms & Conditions", body: ["This website is a non-commercial demonstration. Nothing here is an offer to sell goods or services.", "All products, prices, brands and testimonials are fictional sample data.", "Do not enter real payment or medical details."] },
  "return-policy": { title: "Return Policy", body: ["Demo policy text: eligible items could be returned within a fixed window if unopened.", "Because MediCart sells nothing, no returns are possible."] },
  "cancellation-policy": { title: "Cancellation Policy", body: ["Demo policy text: orders could be cancelled before dispatch.", "You can delete demo orders by clearing localStorage."] },
  "shipping-policy": { title: "Shipping & Delivery Policy", body: ["Demo rule: free delivery above ₹499, otherwise a ₹49 fee.", "No goods are shipped."] },
  "disclaimer": { title: "Medical Disclaimer", body: ["Nothing on this site is medical advice, diagnosis or treatment.", "Always consult a qualified healthcare professional before using any health product."] },
};

export const footerGroups = [
  { title: "Company", links: [["About Us", "/about-us"], ["Contact Us", "/contact"], ["Help Centre", "/help"], ["FAQs", "/faqs"]] },
  { title: "Shop", links: [["All Medicines", "/medicines"], ["All Categories", "/categories"], ["Brands", "/brands"], ["Health Conditions", "/health-conditions"], ["Upload Prescription", "/upload-prescription"]] },
  { title: "Policies", links: Object.entries(policies).map(([k, v]) => [v.title, `/policies/${k}`]) },
  { title: "Account", links: [["Login", "/login"], ["Sign up", "/signup"], ["My Orders", "/orders"], ["Wishlist", "/wishlist"], ["Saved Addresses", "/account/addresses"]] },
];
