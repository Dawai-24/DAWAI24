import Link from "next/link";
import diseasesByLetter from "@/data/platinumrx_diseases_by_letter.json";

function formatDiseaseName(slug) {
  if (!slug) return "Condition Guide";
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const name = formatDiseaseName(slug);
  return {
    title: `${name}: Overview, Symptoms, Causes & Treatments | PlatinumRx`,
    description: `Complete medical handbook for ${name}: clinical overview, recognized symptoms, diagnosis pathways, and doctor-prescribed treatment medications.`,
  };
}

export default async function DiseaseDetailPage({ params }) {
  const { slug, id } = await params;

  let diseaseName = formatDiseaseName(slug);
  for (const letter of Object.keys(diseasesByLetter)) {
    const item = diseasesByLetter[letter].diseases?.find((d) => d.slug === slug || d.id == id);
    if (item) {
      diseaseName = item.name;
      break;
    }
  }

  const sections = [
    { id: "overview", title: "Overview" },
    { id: "symptoms", title: "Symptoms" },
    { id: "causes", title: "Causes & Risk Factors" },
    { id: "treatment", title: "Treatments & Drugs" },
    { id: "prevention", title: "Prevention & Lifestyle" },
    { id: "faq", title: "FAQ" }
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      {/* Breadcrumbs matching PlatinumRx */}
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
              <Link href="/diseases" className="hover:underline text-[#031926]">
                Diseases
              </Link>
            </li>
            <li className="text-[#888] select-none">/</li>
            <li>
              <span className="text-[#fc5a5a] font-medium">{diseaseName}</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Main 2-Column Content */}
      <div className="mx-[4.5%] lg:mx-[8%] my-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Comprehensive Info */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-[#f5f5f5] rounded-[16px] p-6 border border-[#e8e8e8]">
            <h1 className="text-[20px] sm:text-[24px] font-[600] text-[#031926] mb-4">
              More About {diseaseName}
            </h1>

            {/* Horizontal Tabs Header Bar */}
            <div className="sticky top-[70px] bg-white z-10 shadow-xs rounded-lg p-2 flex overflow-x-auto gap-2 border border-[#e2ecf4] scrollbar-none mb-6">
              {sections.map((s, idx) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`px-3 py-1.5 rounded-[6px] text-[13px] font-[500] whitespace-nowrap transition-colors ${
                    idx === 0 
                      ? "bg-[#fc5a5a] text-white" 
                      : "text-[#40464d] hover:bg-[#f0f4f8]"
                  }`}
                >
                  {s.title}
                </a>
              ))}
            </div>

            {/* Section Blocks */}
            <div className="space-y-6 text-[#40464d]">
              <div id="overview" className="bg-white p-5 rounded-[12px] border border-[#e8e8e8] space-y-2">
                <h2 className="text-[16px] font-[600] text-[#031926]">Overview</h2>
                <p className="text-[14px] leading-relaxed">
                  {diseaseName} is a recognized medical condition affecting individuals across various age groups. Timely clinical diagnosis and intervention can greatly relieve symptoms, prevent secondary complications, and restore normal health and well-being.
                </p>
              </div>

              <div id="symptoms" className="bg-white p-5 rounded-[12px] border border-[#e8e8e8] space-y-2">
                <h2 className="text-[16px] font-[600] text-[#031926]">Recognized Symptoms</h2>
                <p className="text-[13px] text-[#666]">
                  Individuals diagnosed with {diseaseName} commonly experience symptoms such as:
                </p>
                <ul className="list-disc list-inside text-[14px] space-y-1.5">
                  <li>Persistent localized discomfort or recurring episodes.</li>
                  <li>General fatigue or diminished day-to-day energy levels.</li>
                  <li>Changes in physical appetite or routine sleep cycles.</li>
                  <li>Acute flare-ups triggered by environmental or lifestyle changes.</li>
                </ul>
              </div>

              <div id="causes" className="bg-white p-5 rounded-[12px] border border-[#e8e8e8] space-y-2">
                <h2 className="text-[16px] font-[600] text-[#031926]">Causes & Risk Factors</h2>
                <p className="text-[14px] leading-relaxed">
                  Development of {diseaseName} can stem from multiple contributory factors including genetic predisposition, biological stressors, immune dysregulation, or environmental triggers. Maintaining regular checkups helps identify root indicators early.
                </p>
              </div>

              <div id="treatment" className="bg-white p-5 rounded-[12px] border border-[#e8e8e8] space-y-2">
                <h2 className="text-[16px] font-[600] text-[#031926]">Treatments & Medical Options</h2>
                <p className="text-[14px] leading-relaxed">
                  Therapy is tailored according to severity and physician assessment. Treatment typically combines pharmacological management (such as approved generic and branded formulations) with targeted supportive lifestyle modifications.
                </p>
              </div>

              <div id="prevention" className="bg-white p-5 rounded-[12px] border border-[#e8e8e8] space-y-2">
                <h2 className="text-[16px] font-[600] text-[#031926]">Prevention & Healthy Living</h2>
                <ul className="list-disc list-inside text-[14px] space-y-1.5">
                  <li>Follow an individualized balanced diet rich in micronutrients.</li>
                  <li>Maintain structured physical movement and restful sleep.</li>
                  <li>Adhere strictly to prescribed medicine schedules without sudden cessation.</li>
                </ul>
              </div>

              <div id="faq" className="bg-white p-5 rounded-[12px] border border-[#e8e8e8] space-y-3">
                <h2 className="text-[16px] font-[600] text-[#031926]">Frequently Asked Questions</h2>
                <div className="space-y-3 text-[13px]">
                  <div className="border-b border-[#f0f0f0] pb-2">
                    <p className="font-[600] text-[#031926]">Can {diseaseName} be managed effectively with medicines?</p>
                    <p className="text-[#555]">Yes. With certified generic medicines and doctor guidance, most individuals achieve strong symptom control.</p>
                  </div>
                  <div className="border-b border-[#f0f0f0] pb-2">
                    <p className="font-[600] text-[#031926]">When should I consult a doctor?</p>
                    <p className="text-[#555]">Seek prompt medical attention if symptoms persist or interfere with routine activities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Recommended Treatments */}
        <div className="lg:col-span-4 space-y-4">
          <div className="border border-[#e2ecf4] rounded-[12px] p-5 bg-white shadow-xs">
            <h2 className="text-[18px] font-[600] text-[#031926] mb-4">
              Medicines for {diseaseName}
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-[8px] border border-[#e8e8e8] bg-[#fcfcfc] hover:border-[#fc5a5a] transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#ffebee] flex items-center justify-center text-[#fc5a5a] text-[11px] font-bold">
                    Rx
                  </div>
                  <span className="text-[11px] font-[600] text-[#888]">Verified Treatments</span>
                </div>
                <p className="text-[13px] text-[#40464d] font-medium mb-3">
                  Find doctor-prescribed medications and save up to 70% with verified substitute salts.
                </p>
                <Link
                  href="/medicines"
                  className="block text-center text-[13px] font-[600] text-[#fc5a5a] border border-[#fc5a5a] py-1.5 rounded-[6px] hover:bg-[#fc5a5a] hover:text-white transition-colors"
                >
                  Explore Medicines
                </Link>
              </div>

              <div className="p-4 bg-[#f8fafc] rounded-[8px] border border-[#e2ecf4] text-[12px] text-[#666] space-y-2">
                <p className="font-[600] text-[#031926]">PlatinumRx Quality Guarantee</p>
                <p>
                  All medicines are sourced from WHO-GMP compliant manufacturers with complete cold-chain delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
