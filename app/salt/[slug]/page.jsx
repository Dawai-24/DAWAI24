import Link from "next/link";
import { notFound } from "next/navigation";
import saltsByLetter from "@/data/platinumrx_salts_by_letter.json";
import sampleDetails from "@/data/sample_salt_details.json";
import RelatedMedicationCard from "@/components/Common/RelatedMedicationCard";

function formatSaltName(slug) {
  if (!slug) return "Salt Information";
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const name = formatSaltName(slug);
  return {
    title: `${name}: Uses, Side Effects, Expert Advice and Medications | PlatinumRx`,
    description: `Comprehensive medical guide for ${name}: clinical uses, dosage, mechanism of action, precautions and affordable alternative medications.`,
  };
}

export default async function SaltDetailPageSingle({ params }) {
  const { slug } = await params;

  let saltName = formatSaltName(slug);
  let saltId = 1;
  for (const letter of Object.keys(saltsByLetter)) {
    const item = saltsByLetter[letter].salts?.find((s) => s.slug === slug);
    if (item) {
      saltName = item.name;
      saltId = item.id;
      break;
    }
  }

  const rawKey = `${slug}-${saltId}`;
  const detail = sampleDetails[rawKey] || null;

  const sections = [
    { id: "short-desc", title: "Short Description" },
    { id: "long-desc", title: "Long Description" },
    { id: "how-to-use", title: "How to use" },
    { id: "benefits", title: "Benefits" },
    { id: "side-effects", title: "Side Effects" },
    { id: "how-it-works", title: "How it works" },
    { id: "safety-advice", title: "Safety Advice" },
    { id: "quick-tips", title: "Quick Tips" },
    { id: "storage", title: "Storage" },
    { id: "interactions", title: "Drug Interactions" },
    { id: "faq", title: "FAQ" },
    { id: "fact-box", title: "Fact Box" }
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      {/* Breadcrumb matching PlatinumRx */}
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
              <Link href="/salt" className="hover:underline text-[#031926]">
                Salt
              </Link>
            </li>
            <li className="text-[#888] select-none">/</li>
            <li>
              <span className="text-[#fc5a5a] font-medium">{saltName}</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Main Two-Column Layout */}
      <div className="mx-[4.5%] lg:mx-[8%] my-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Section: Comprehensive Medical Information Tabs */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-[#f5f5f5] rounded-[16px] p-6 border border-[#e8e8e8]">
            <h1 className="text-[20px] sm:text-[24px] font-[600] text-[#031926] mb-4">
              More About {saltName}
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

            {/* Sections Content */}
            <div className="space-y-6 text-[#40464d]">
              {/* Short Description */}
              <div id="short-desc" className="bg-white p-5 rounded-[12px] border border-[#e8e8e8] space-y-2">
                <h2 className="text-[16px] font-[600] text-[#031926]">Quick Summary</h2>
                <p className="text-[14px] leading-relaxed">
                  {saltName} is an essential pharmaceutical agent widely utilized in modern therapeutic regimens. Prescribed by certified medical practitioners, it helps manage and treat condition symptoms efficiently by interacting with specific target pathways in the body.
                </p>
              </div>

              {/* Long Description */}
              <div id="long-desc" className="bg-white p-5 rounded-[12px] border border-[#e8e8e8] space-y-2">
                <h2 className="text-[16px] font-[600] text-[#031926]">Detailed Description</h2>
                <p className="text-[14px] leading-relaxed">
                  Belonging to its designated therapeutic chemical class, {saltName} works by delivering targeted therapeutic action to restore cellular balance and prevent further disease progression. It is manufactured under rigorous pharmaceutical quality guidelines and is available in approved oral solid, liquid, or parenteral formulations.
                </p>
              </div>

              {/* Benefits */}
              <div id="benefits" className="bg-white p-5 rounded-[12px] border border-[#e8e8e8] space-y-2">
                <h2 className="text-[16px] font-[600] text-[#031926]">Benefits of {saltName}</h2>
                <ul className="list-disc list-inside text-[14px] space-y-1.5">
                  <li>Provides sustained clinical improvement in target symptoms.</li>
                  <li>Available in bioequivalent formulations that reduce healthcare costs.</li>
                  <li>Flexible dosing schedules as recommended by the consulting physician.</li>
                </ul>
              </div>

              {/* Side Effects */}
              <div id="side-effects" className="bg-white p-5 rounded-[12px] border border-[#e8e8e8] space-y-2">
                <h2 className="text-[16px] font-[600] text-[#031926]">Side Effects of {saltName}</h2>
                <p className="text-[13px] text-[#666]">
                  Most common side effects are transient and diminish as the body adapts to the medication:
                </p>
                <div className="grid sm:grid-cols-2 gap-2 text-[14px] pt-1">
                  <div className="p-2.5 bg-[#f9fafb] rounded border border-[#f0f0f0]">• Mild nausea or stomach upset</div>
                  <div className="p-2.5 bg-[#f9fafb] rounded border border-[#f0f0f0]">• Occasional headache or fatigue</div>
                  <div className="p-2.5 bg-[#f9fafb] rounded border border-[#f0f0f0]">• Temporary drowsiness</div>
                  <div className="p-2.5 bg-[#f9fafb] rounded border border-[#f0f0f0]">• Mild gastrointestinal changes</div>
                </div>
              </div>

              {/* How it works */}
              <div id="how-it-works" className="bg-white p-5 rounded-[12px] border border-[#e8e8e8] space-y-2">
                <h2 className="text-[16px] font-[600] text-[#031926]">How it works</h2>
                <p className="text-[14px] leading-relaxed">
                  Upon administration, the active salt molecule is absorbed into systemic circulation and binds selectively to designated receptors or enzymes, modulating biochemical reactions that alleviate the pathological triggers of the condition.
                </p>
              </div>

              {/* Safety Advice */}
              <div id="safety-advice" className="bg-white p-5 rounded-[12px] border border-[#e8e8e8] space-y-3">
                <h2 className="text-[16px] font-[600] text-[#031926]">Safety Advice</h2>
                <div className="grid sm:grid-cols-2 gap-3 text-[13px]">
                  <div className="border border-[#e8e8e8] p-3 rounded-[8px]">
                    <span className="font-[600] text-[#031926] block mb-1">Pregnancy & Lactation</span>
                    <span>Consult your doctor before using {saltName} during pregnancy or breastfeeding.</span>
                  </div>
                  <div className="border border-[#e8e8e8] p-3 rounded-[8px]">
                    <span className="font-[600] text-[#031926] block mb-1">Alcohol</span>
                    <span>Avoid alcohol consumption as it may increase sedation or compromise medicine efficacy.</span>
                  </div>
                  <div className="border border-[#e8e8e8] p-3 rounded-[8px]">
                    <span className="font-[600] text-[#031926] block mb-1">Driving</span>
                    <span>Exercise caution while driving or operating heavy machinery if drowsiness occurs.</span>
                  </div>
                  <div className="border border-[#e8e8e8] p-3 rounded-[8px]">
                    <span className="font-[600] text-[#031926] block mb-1">Kidney & Liver</span>
                    <span>Dose adjustments may be needed for patients with hepatic or renal impairment.</span>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div id="faq" className="bg-white p-5 rounded-[12px] border border-[#e8e8e8] space-y-3">
                <h2 className="text-[16px] font-[600] text-[#031926]">Frequently Asked Questions</h2>
                {detail?.faqs?.length > 0 ? (
                  detail.faqs.map((faq, i) => (
                    <div key={i} className="border-b border-[#f0f0f0] pb-3 last:border-b-0 space-y-1">
                      <p className="text-[14px] font-[600] text-[#031926]">{faq.question}</p>
                      <p className="text-[13px] text-[#555] leading-relaxed">{faq.answer}</p>
                    </div>
                  ))
                ) : (
                  <div className="space-y-3">
                    <div className="border-b border-[#f0f0f0] pb-2">
                      <p className="text-[14px] font-[600] text-[#031926]">Is {saltName} safe for regular use?</p>
                      <p className="text-[13px] text-[#555]">Yes, when taken exactly as directed and prescribed by your physician.</p>
                    </div>
                    <div className="border-b border-[#f0f0f0] pb-2">
                      <p className="text-[14px] font-[600] text-[#031926]">Can I stop taking {saltName} once I feel better?</p>
                      <p className="text-[13px] text-[#555]">Always complete the full prescribed course unless advised otherwise by your doctor.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Fact Box */}
              <div id="fact-box" className="bg-white p-5 rounded-[12px] border border-[#e8e8e8] space-y-2">
                <h2 className="text-[16px] font-[600] text-[#031926]">Fact Box</h2>
                <div className="divide-y divide-[#f0f0f0] text-[13px]">
                  <div className="flex justify-between py-2">
                    <span className="text-[#888]">Salt Name</span>
                    <span className="font-[600] text-[#031926]">{saltName}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-[#888]">Habit Forming</span>
                    <span className="font-[600] text-[#031926]">No</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-[#888]">Bioequivalent Alternatives</span>
                    <span className="font-[600] text-[#fc5a5a]">Available on PlatinumRx</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Section: Related Medications matching user screenshot */}
        <div className="lg:col-span-4 space-y-4">
          <RelatedMedicationCard saltName={saltName} saltSlug={slug} />
        </div>

      </div>
    </div>
  );
}
