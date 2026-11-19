import Link from "next/link";
import sampleMeds from "@/data/platinumrx_medicines_sample.json";

function formatMedTitle(slug) {
  if (!slug) return "Medicine Details";
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const name = formatMedTitle(slug);
  return {
    title: `${name} - Uses, Side Effects, Composition & Price | PlatinumRx`,
    description: `Order ${name} online at best price from PlatinumRx. Find substitute generic medicines with identical salt compositions and save up to 70%.`,
  };
}

export default async function MedicineDetailPage({ params }) {
  const { slug, id } = await params;

  const med = sampleMeds.find((m) => m.slug === slug || m.id == id) || {
    name: formatMedTitle(slug),
    manufacturer: "Certified Pharma Laboratories",
    price: 45,
    packageSize: "Strip of 10 Tablets / 60ml Suspension",
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      {/* Breadcrumb */}
      <div className="mx-[4.5%] lg:mx-[8%] my-[1.25%]">
        <nav aria-label="breadcrumb">
          <ol className="flex items-center space-x-2 text-[14px] text-[#40464d]">
            <li>
              <Link href="/" className="hover:underline text-[#031926]">
                Home
              </Link>
            </li>
            <li className="text-[#888] select-none">/</li>
            <li>
              <Link href="/medicines" className="hover:underline text-[#031926]">
                Medicines
              </Link>
            </li>
            <li className="text-[#888] select-none">/</li>
            <li>
              <span className="text-[#fc5a5a] font-medium">{med.name}</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Main PDP Grid */}
      <div className="mx-[4.5%] lg:mx-[8%] my-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Product Details & Substitutes */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-[16px] p-6 sm:p-8 border border-[#e2ecf4] shadow-xs">
            <div className="grid sm:grid-cols-12 gap-6 items-start">
              
              {/* Product Image Placeholder */}
              <div className="sm:col-span-5 h-64 bg-[#fbfbfb] rounded-[12px] border border-[#f0f0f0]"></div>

              {/* Medicine Summary Info */}
              <div className="sm:col-span-7 space-y-3">
                <span className="text-[12px] font-[600] text-[#fc5a5a] bg-[#fff0f0] px-2.5 py-0.5 rounded-full inline-block">
                  Prescription Drug (Rx)
                </span>
                <h1 className="text-[20px] sm:text-[24px] font-[600] text-[#031926] leading-snug">
                  {med.name}
                </h1>
                <p className="text-[13px] text-[#777]">
                  Manufactured by: <span className="font-[600] text-[#031926]">{med.manufacturer}</span>
                </p>
                <p className="text-[13px] text-[#555] font-medium">
                  Packaging: {med.packageSize}
                </p>

                <div className="pt-2 flex items-baseline gap-2">
                  <span className="text-[26px] font-bold text-[#219653]">
                    ₹{med.price}
                  </span>
                  <span className="text-[12px] text-[#888]">Inclusive of all taxes</span>
                </div>

                <div className="pt-3 flex gap-3">
                  <button className="flex-1 py-3 bg-[#fc5a5a] hover:bg-[#e04848] text-white font-[600] text-[14px] rounded-[8px] transition-colors shadow-xs">
                    Add to Cart
                  </button>
                  <Link
                    href="/upload-prescription"
                    className="py-3 px-4 border border-[#fc5a5a] text-[#fc5a5a] font-[600] text-[14px] rounded-[8px] hover:bg-[#fff0f0] transition-colors"
                  >
                    Upload Rx
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* PlatinumRx Same-Salt Bioequivalent Substitutes Banner */}
          <div className="border border-[#e2ecf4] rounded-[16px] p-6 bg-white shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-[18px] font-[600] text-[#031926]">
                  Same Salt Affordable Substitutes
                </h2>
                <p className="text-[13px] text-[#666]">
                  Save up to 70% with 100% bioequivalent substitute brands containing identical active salts.
                </p>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 bg-[#e8f5e9] text-[#2e7d32] text-[12px] font-bold rounded-full">
                100% Salt Matched
              </span>
            </div>

            <div className="p-4 bg-[#f9fbfd] border border-[#e2ecf4] rounded-[12px] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-[#fc5a5a]">RECOMMENDED SUBSTITUTE</span>
                <p className="text-[15px] font-[600] text-[#031926] mt-0.5">Generic Bio-Equivalent Formulation</p>
                <p className="text-[12px] text-[#777]">Identical strength, efficacy and regulatory certifications</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-[16px] font-bold text-[#219653]">₹{Math.max(12, Math.round(med.price * 0.4))}</span>
                  <span className="text-[11px] text-[#888] line-through block">₹{med.price}</span>
                </div>
                <button className="px-4 py-2 bg-[#fc5a5a] text-white text-[13px] font-bold rounded-[6px] hover:bg-[#e04848]">
                  Switch & Save
                </button>
              </div>
            </div>
          </div>

          {/* Clinical Uses & Dosage Guide */}
          <div className="border border-[#e2ecf4] rounded-[16px] p-6 bg-white shadow-xs space-y-4">
            <h2 className="text-[18px] font-[600] text-[#031926]">
              Clinical Guidelines & Safety Information
            </h2>
            <div className="space-y-3 text-[14px] text-[#40464d] leading-relaxed">
              <p>
                <b>Indications:</b> Prescribed for chronic and acute symptomatic management as verified by medical specialists. Always follow strict dosing instructions on the prescription label.
              </p>
              <p>
                <b>Storage:</b> Store below 25°C in a dry place away from direct sunlight. Keep out of reach of children.
              </p>
            </div>
          </div>
        </div>

        {/* Right Quality Assurance Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          <div className="border border-[#e2ecf4] rounded-[12px] p-5 bg-white shadow-xs space-y-4">
            <h3 className="text-[16px] font-[600] text-[#031926]">
              PlatinumRx Assured Care
            </h3>
            <div className="space-y-3 text-[13px] text-[#555]">
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>100% Genuine batch certification</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Cold-chain temperature tracking</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Free pharmacist consultation on substitutes</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
