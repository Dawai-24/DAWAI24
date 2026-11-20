import Link from "next/link";
import sampleBlogs from "@/data/platinumrx_blogs_sample.json";

function formatBlogTitle(slug) {
  if (!slug) return "Medical Article";
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = sampleBlogs.find((b) => b.slug === slug);
  const title = blog ? blog.title.replace(/&amp;/g, '&') : formatBlogTitle(slug);
  return {
    title: `${title} | PlatinumRx Health Blog`,
    description: `Comprehensive medical guide: clinical overview, active therapeutic components, clinical benefits, dosage precautions and verified substitute medications.`,
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const blog = sampleBlogs.find((b) => b.slug === slug) || {
    title: formatBlogTitle(slug),
    date: "16 Nov 2026",
    image: "https://plrx.gumlet.io/871aa43d-a2e8-4286-940c-ee00a95c5499.png",
  };

  const cleanTitle = blog.title.replace(/&amp;/g, '&').replace(/<!-- -->/g, ' ');

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
              <Link href="/blogs" className="hover:underline text-[#031926]">
                Blogs
              </Link>
            </li>
            <li className="text-[#888] select-none">/</li>
            <li className="truncate max-w-xs sm:max-w-md">
              <span className="text-[#fc5a5a] font-medium">{cleanTitle}</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Main Blog Article Layout */}
      <div className="mx-[4.5%] lg:mx-[8%] pb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Article Body */}
        <article className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-[16px] border border-[#e2ecf4] shadow-xs space-y-6">
          <div className="space-y-3">
            <span className="text-[12px] font-[600] text-[#fc5a5a] bg-[#fff0f0] px-3 py-1 rounded-full">
              Medically Reviewed
            </span>
            <h1 className="text-[24px] sm:text-[34px] font-[700] text-[#031926] leading-tight">
              {cleanTitle}
            </h1>
            <div className="flex items-center gap-4 text-[13px] text-[#777] border-y border-[#f0f0f0] py-3">
              <span>Published: {blog.date.replace(/<!-- -->/g, ' ')}</span>
              <span>•</span>
              <span>By PlatinumRx Medical Team</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[12px] max-h-[420px] bg-[#f9f9f9]">
            <img
              src={blog.image}
              alt={cleanTitle}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 text-[#40464d] text-[15px] sm:text-[16px] leading-relaxed pt-4">
            <h2 className="text-[20px] font-[600] text-[#031926]">
              Introduction & Clinical Significance
            </h2>
            <p>
              In contemporary healthcare management, staying informed about prescribed formulations, their precise therapeutic salt actions, and cost-effective alternatives is paramount for patient wellness. This comprehensive clinical guide reviews key actions, recommended dosage principles, and critical safety parameters.
            </p>

            <h2 className="text-[20px] font-[600] text-[#031926]">
              Key Therapeutic Benefits
            </h2>
            <p>
              When administered under proper medical guidance, this medicine works to alleviate symptoms rapidly while preventing downstream complications. Regular adherence ensures continuous physiological regulation and therapeutic efficacy.
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Clinically established efficacy for target conditions.</li>
              <li>Bioequivalent to verified same-salt substitute formulations.</li>
              <li>Minimal adverse reactions when dosing schedules are maintained.</li>
            </ul>

            <h2 className="text-[20px] font-[600] text-[#031926]">
              Important Safety & Dosing Guidelines
            </h2>
            <p>
              Always take your medicine as prescribed by your doctor. Never adjust dosages or cease therapy abruptly without professional medical consultation. Store tablets and syrups in a cool, dry place away from direct sunlight.
            </p>

            <div className="bg-[#f8fafc] border border-[#e2ecf4] p-5 rounded-[12px] space-y-2">
              <span className="font-[600] text-[#031926] block">
                Save on Prescriptions with PlatinumRx
              </span>
              <p className="text-[14px] text-[#666]">
                Did you know? You can switch to identical-molecule generic alternatives that cost up to 70% less while providing the exact same therapeutic outcome.
              </p>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="border border-[#e2ecf4] rounded-[16px] p-6 bg-white shadow-xs space-y-4">
            <h3 className="text-[18px] font-[600] text-[#031926]">
              Related Articles
            </h3>
            <div className="space-y-4">
              {sampleBlogs.slice(1, 5).map((rb) => (
                <Link
                  key={rb.slug}
                  href={`/blogs/${rb.slug}`}
                  className="flex gap-3 group items-center"
                >
                  <img
                    src={rb.image}
                    alt={rb.title}
                    className="w-16 h-14 object-cover rounded-[6px] shrink-0"
                  />
                  <p className="text-[13px] font-[600] text-[#031926] group-hover:text-[#fc5a5a] transition-colors line-clamp-2">
                    {rb.title.replace(/&amp;/g, '&')}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="border border-[#e2ecf4] rounded-[16px] p-6 bg-[#fff7f6] shadow-xs space-y-3">
            <h4 className="text-[16px] font-[600] text-[#031926]">Need Medicines?</h4>
            <p className="text-[13px] text-[#666]">
              Order prescription medicines on PlatinumRx and get genuine substitute recommendations delivered to your door.
            </p>
            <Link
              href="/medicines"
              className="block text-center py-2.5 bg-[#fc5a5a] text-white rounded-[6px] text-[13px] font-bold hover:bg-[#e04848]"
            >
              Order Now
            </Link>
          </div>
        </aside>

      </div>
    </div>
  );
}
