import Link from "next/link";
import brandsByLetter from "@/data/platinumrx_brands_by_letter.json";

function formatBrandName(slug) {
  if (!slug) return "Manufacturer";
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const name = formatBrandName(slug);
  return {
    title: `${name}: Medicines, Products, Profile & Pricing | PlatinumRx`,
    description: `Browse all medicines and healthcare formulations manufactured by ${name} on PlatinumRx with verified substitutes.`,
  };
}

export default async function BrandDetailPage({ params }) {
  const { slug } = await params;

  let brandName = formatBrandName(slug);
  for (const letter of Object.keys(brandsByLetter)) {
    const item = brandsByLetter[letter].brands?.find((b) => b.slug === slug);
    if (item) {
      brandName = item.name;
      break;
    }
  }

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
              <Link href="/brands" className="hover:underline text-[#031926]">
                Brands
              </Link>
            </li>
            <li className="text-[#888] select-none">/</li>
            <li>
              <span className="text-[#fc5a5a] font-medium">{brandName}</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="mx-[4.5%] lg:mx-[8%] my-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Section */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-[#f5f5f5] rounded-[16px] p-6 border border-[#e8e8e8] space-y-6">
            <div>
              <span className="text-[12px] font-[600] text-[#fc5a5a] uppercase tracking-wider">
                Pharmaceutical Manufacturer
              </span>
              <h1 className="text-[22px] sm:text-[28px] font-[600] text-[#031926] mt-1">
                {brandName}
              </h1>
            </div>

            <div className="bg-white p-5 rounded-[12px] border border-[#e8e8e8] space-y-2">
              <h2 className="text-[16px] font-[600] text-[#031926]">About {brandName}</h2>
              <p className="text-[14px] text-[#40464d] leading-relaxed">
                {brandName} is a licensed pharmaceutical enterprise dedicated to producing compliant, high-efficacy pharmaceutical medications. Sourced directly through verified supply chains, their formulations adhere to strict Good Manufacturing Practices (GMP).
              </p>
            </div>

            <div className="bg-white p-5 rounded-[12px] border border-[#e8e8e8] space-y-2">
              <h2 className="text-[16px] font-[600] text-[#031926]">Therapeutic Portfolio</h2>
              <p className="text-[14px] text-[#40464d] leading-relaxed">
                Formulations under {brandName} cover chronic care (cardiology, diabetology, nephrology) as well as acute therapies (anti-infectives, analgesics, and gastrointestinal care). PlatinumRx ensures 100% genuine batch certifications for every medicine ordered.
              </p>
            </div>

            <div className="bg-white p-5 rounded-[12px] border border-[#e8e8e8] space-y-2">
              <h2 className="text-[16px] font-[600] text-[#031926]">Quality & Regulatory Compliance</h2>
              <div className="grid sm:grid-cols-2 gap-3 text-[13px] text-[#40464d] pt-2">
                <div className="p-3 bg-[#fafafa] rounded border border-[#f0f0f0]">
                  <b>WHO-GMP Certified:</b> Produced in accredited high-standard labs.
                </div>
                <div className="p-3 bg-[#fafafa] rounded border border-[#f0f0f0]">
                  <b>Cold Chain Maintained:</b> Temperature controlled handling end-to-end.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-4 space-y-4">
          <div className="border border-[#e2ecf4] rounded-[12px] p-5 bg-white shadow-xs">
            <h2 className="text-[18px] font-[600] text-[#031926] mb-4">
              Medicines by {brandName}
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-[8px] border border-[#e8e8e8] bg-[#fcfcfc] hover:border-[#fc5a5a] transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#ffebee] flex items-center justify-center text-[#fc5a5a] text-[11px] font-bold">
                    Rx
                  </div>
                  <span className="text-[11px] font-[600] text-[#888]">Genuine Supply</span>
                </div>
                <p className="text-[13px] text-[#40464d] font-medium mb-3">
                  Explore full range of medicines manufactured by {brandName} with verified affordable substitute options.
                </p>
                <Link
                  href="/medicines"
                  className="block text-center text-[13px] font-[600] text-[#fc5a5a] border border-[#fc5a5a] py-1.5 rounded-[6px] hover:bg-[#fc5a5a] hover:text-white transition-colors"
                >
                  View All Medicines
                </Link>
              </div>

              <div className="p-4 bg-[#f8fafc] rounded-[8px] border border-[#e2ecf4] text-[12px] text-[#666] space-y-2">
                <p className="font-[600] text-[#031926]">Need assistance?</p>
                <p>
                  Our certified pharmacists are available 8:00 AM - 8:00 PM to help verify your prescription or suggest same-salt substitutes.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
