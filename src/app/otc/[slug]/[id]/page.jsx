import Link from "next/link";
import sampleOtc from "@/data/platinumrx_otc_sample.json";

function formatOtcTitle(slug) {
  if (!slug) return "Healthcare Product";
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const name = formatOtcTitle(slug);
  return {
    title: `${name} - Uses, Benefits, Price & Online Order | PlatinumRx`,
    description: `Buy ${name} online at genuine discounts from PlatinumRx. Safe packaging, verified batch dates and fast doorstep delivery.`,
  };
}

export default async function OtcDetailPage({ params }) {
  const { slug, id } = await params;

  const product = sampleOtc.find((p) => p.slug === slug || p.id == id) || {
    name: formatOtcTitle(slug),
    manufacturer: "Trusted Wellness Laboratories",
    price: 99,
    packageSize: "1 Unit / Bottle / Tube",
    image: "https://platinumrx.gumlet.io/assets/default_image.jpg"
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
              <Link href="/otc" className="hover:underline text-[#031926]">
                OTC
              </Link>
            </li>
            <li className="text-[#888] select-none">/</li>
            <li>
              <span className="text-[#fc5a5a] font-medium">{product.name}</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Main PDP Grid */}
      <div className="mx-[4.5%] lg:mx-[8%] my-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-[16px] p-6 sm:p-8 border border-[#e2ecf4] shadow-xs">
            <div className="grid sm:grid-cols-12 gap-6 items-start">
              
              {/* Product Image Placeholder */}
              <div className="sm:col-span-5 h-64 bg-[#fbfbfb] rounded-[12px] border border-[#f0f0f0]"></div>

              <div className="sm:col-span-7 space-y-3">
                <span className="text-[12px] font-[600] text-[#219653] bg-[#e8f5e9] px-2.5 py-0.5 rounded-full inline-block">
                  OTC Wellness Product
                </span>
                <h1 className="text-[20px] sm:text-[24px] font-[600] text-[#031926] leading-snug">
                  {product.name}
                </h1>
                <p className="text-[13px] text-[#777]">
                  Brand: <span className="font-[600] text-[#031926]">{product.manufacturer}</span>
                </p>
                <p className="text-[13px] text-[#555] font-medium">
                  Pack Size: {product.packageSize}
                </p>

                <div className="pt-2 flex items-baseline gap-2">
                  <span className="text-[26px] font-bold text-[#219653]">
                    ₹{product.price}
                  </span>
                  <span className="text-[12px] text-[#888]">Inclusive of all taxes</span>
                </div>

                <div className="pt-3">
                  <button className="w-full py-3 bg-[#fc5a5a] hover:bg-[#e04848] text-white font-[600] text-[14px] rounded-[8px] transition-colors shadow-xs">
                    Add to Cart
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Product Overview */}
          <div className="border border-[#e2ecf4] rounded-[16px] p-6 bg-white shadow-xs space-y-4">
            <h2 className="text-[18px] font-[600] text-[#031926]">
              Product Overview & Key Benefits
            </h2>
            <div className="space-y-3 text-[14px] text-[#40464d] leading-relaxed">
              <p>
                {product.name} is formulated under stringent quality parameters to support everyday health, vitality, and well-being. Ideal for daily or intermittent wellness maintenance as per recommended pack directions.
              </p>
              <ul className="list-disc list-inside space-y-1.5 pt-2">
                <li>Non-prescription daily wellness & nutritional support.</li>
                <li>Manufactured with genuine ingredients certified by regulatory bodies.</li>
                <li>Tamper-evident packaging with clear expiry and batch details.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Assurance Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          <div className="border border-[#e2ecf4] rounded-[12px] p-5 bg-white shadow-xs space-y-4">
            <h3 className="text-[16px] font-[600] text-[#031926]">
              PlatinumRx Promise
            </h3>
            <div className="space-y-3 text-[13px] text-[#555]">
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>100% Genuine product warranty</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Long expiry dates guaranteed</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Safe doorstep contact-free delivery</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
