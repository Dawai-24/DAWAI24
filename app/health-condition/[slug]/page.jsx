import Link from "next/link";
import healthConditionsData from "@/data/healthConditionsData";

function formatConditionTitle(slug) {
  if (!slug) return "Health Condition";
  return slug
    .replace("-medicines", "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const name = formatConditionTitle(slug);
  return {
    title: `${name} Medicines – Uses, Substitutes & Price | PlatinumRx`,
    description: `Complete list of medicines for ${name}. Explore verified generic substitutes with identical active ingredients and save up to 70% online.`,
  };
}

export default async function ConditionDetailPage({ params }) {
  const { slug } = await params;
  const title = formatConditionTitle(slug);

  // Find parent category if any
  let parentCategoryName = "Health Condition";
  for (const cat of healthConditionsData) {
    if (cat.subcategories.some((s) => s.slug === slug)) {
      parentCategoryName = cat.name;
      break;
    }
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      {/* Breadcrumbs */}
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
              <Link href="/health-condition" className="hover:underline text-[#031926]">
                Health Condition
              </Link>
            </li>
            <li className="text-[#888] select-none">/</li>
            <li>
              <span className="text-[#fc5a5a] font-medium">{title}</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="mx-[4.5%] lg:mx-[8%] pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Section */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-[16px] p-6 sm:p-8 border border-[#e2ecf4] shadow-xs space-y-4">
            <span className="text-[12px] font-[600] text-[#fc5a5a] bg-[#fff0f0] px-3 py-1 rounded-full inline-block">
              Therapeutic Class: {parentCategoryName}
            </span>
            <h1 className="text-[24px] sm:text-[30px] font-[700] text-[#031926] leading-tight">
              Medicines for {title}
            </h1>
            <p className="text-[14px] sm:text-[15px] text-[#40464d] leading-relaxed">
              Explore physician-recommended medications formulated for {title}. PlatinumRx allows you to compare prescriptions by chemical composition and choose 100% bioequivalent substitute brands at substantial cost savings.
            </p>

            <div className="p-4 rounded-[12px] bg-[#f8fafc] border border-[#e2ecf4] space-y-2 mt-4 text-[13px] text-[#555]">
              <p className="font-[600] text-[#031926]">Treatment Guidance:</p>
              <p>
                Proper medical management of {title} requires accurate diagnosis and adherence to treatment regimens. Consult your doctor before beginning or altering any medication schedule.
              </p>
            </div>
          </div>

          {/* Related Formulations Card */}
          <div className="bg-white rounded-[16px] p-6 sm:p-8 border border-[#e2ecf4] shadow-xs space-y-4">
            <h2 className="text-[18px] font-[600] text-[#031926]">
              Verified Medicines & Substitute Formulations
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-[10px] border border-[#e8e8e8] hover:border-[#fc5a5a] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-[15px] font-[600] text-[#031926]">Prescription Tablets & Suspensions</h3>
                  <p className="text-[13px] text-[#666]">Targeted therapies for {title} with bioequivalent alternatives</p>
                </div>
                <Link
                  href="/medicines"
                  className="px-4 py-2 bg-[#fc5a5a] text-white text-[13px] font-[600] rounded-[6px] hover:bg-[#e04848] text-center"
                >
                  Browse Medicines
                </Link>
              </div>

              <div className="p-4 rounded-[10px] border border-[#e8e8e8] hover:border-[#fc5a5a] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-[15px] font-[600] text-[#031926]">Active Chemical Salts</h3>
                  <p className="text-[13px] text-[#666]">Understand the active ingredients and mechanism of action</p>
                </div>
                <Link
                  href="/salt"
                  className="px-4 py-2 border border-[#fc5a5a] text-[#fc5a5a] text-[13px] font-[600] rounded-[6px] hover:bg-[#fff0f0] text-center"
                >
                  View Salt Index
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          <div className="border border-[#e2ecf4] rounded-[16px] p-6 bg-white shadow-xs space-y-3">
            <h3 className="text-[16px] font-[600] text-[#031926]">
              Why Buy on PlatinumRx?
            </h3>
            <ul className="space-y-2.5 text-[13px] text-[#555]">
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Save up to 70% with same-salt substitutes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>100% Genuine batch tested drugs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Pharmacist assistance on prescriptions</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
