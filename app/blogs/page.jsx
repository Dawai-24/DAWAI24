import Link from "next/link";
import sampleBlogs from "@/data/platinumrx_blogs_sample.json";

export const metadata = {
  title: "PlatinumRx Blog - Health Blog, Medical News & Patient Awareness Blog",
  description: "Stay informed with verified medical guides, clinical research summaries, disease overviews and healthcare tips from PlatinumRx doctors and pharmacists.",
};

export default function AllBlogsPage() {
  const blogs = sampleBlogs;
  const heroBlog = blogs[0];
  const sideBlogs = blogs.slice(1, 4);
  const remainingBlogs = blogs.slice(4);

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
              <span className="text-[#fc5a5a] font-medium">Blogs</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Main Section */}
      <div className="mx-[4.5%] lg:mx-[8%] pb-16 space-y-10">
        
        {/* Page Heading */}
        <div className="pt-2">
          <h1 className="text-[28px] sm:text-[36px] font-[700] text-[#031926] leading-tight">
            Health & Medicine Information <br className="hidden sm:inline" />
            <span className="text-[#fc5a5a]">You Can Trust</span>
          </h1>
          <p className="text-[15px] text-[#666] mt-2 max-w-2xl">
            Medically reviewed patient education guides, medicine comparisons, usage instructions and wellness awareness written by medical specialists.
          </p>
        </div>

        {/* Featured Top Stories (1 Hero Large + 3 Right Compact) */}
        {heroBlog && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Big Hero Card */}
            <div className="lg:col-span-7">
              <Link
                href={`/blogs/${heroBlog.slug}`}
                className="group flex flex-col gap-4 bg-white p-5 rounded-[16px] border border-[#e2ecf4] hover:shadow-md transition-shadow"
              >
                <div className="relative overflow-hidden rounded-[12px] h-[220px] sm:h-[340px] w-full bg-[#f0f4f8]">
                  <img
                    src={heroBlog.image}
                    alt={heroBlog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-[12px] text-[#888] font-medium block">
                    {heroBlog.date.replace(/<!-- -->/g, ' ')}
                  </span>
                  <h2 className="text-[20px] sm:text-[24px] font-[600] text-[#031926] group-hover:text-[#fc5a5a] transition-colors leading-snug">
                    {heroBlog.title.replace(/&amp;/g, '&')}
                  </h2>
                  <span className="text-[14px] font-[600] text-[#fc5a5a] inline-flex items-center gap-1">
                    Read more →
                  </span>
                </div>
              </Link>
            </div>

            {/* Side 3 Stacked Articles */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {sideBlogs.map((b) => (
                <Link
                  key={b.slug}
                  href={`/blogs/${b.slug}`}
                  className="group flex gap-4 bg-white p-4 rounded-[12px] border border-[#e2ecf4] hover:shadow-sm transition-shadow items-center"
                >
                  <div className="relative overflow-hidden rounded-[8px] h-[88px] w-[110px] shrink-0 bg-[#f0f4f8]">
                    <img
                      src={b.image}
                      alt={b.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <span className="text-[11px] text-[#888]">
                      {b.date.replace(/<!-- -->/g, ' ')}
                    </span>
                    <h3 className="text-[14px] font-[600] text-[#031926] group-hover:text-[#fc5a5a] transition-colors line-clamp-2 leading-snug">
                      {b.title.replace(/&amp;/g, '&')}
                    </h3>
                    <span className="text-[12px] font-[600] text-[#fc5a5a] block">
                      Read more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        )}

        {/* Latest Articles Grid */}
        <div className="space-y-6 pt-6">
          <h2 className="text-[22px] font-[600] text-[#031926]">
            Latest Medical Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {remainingBlogs.map((b) => (
              <Link
                key={b.slug}
                href={`/blogs/${b.slug}`}
                className="group flex flex-col bg-white p-4 rounded-[12px] border border-[#e2ecf4] hover:shadow-md transition-shadow justify-between"
              >
                <div>
                  <div className="relative overflow-hidden rounded-[8px] h-[160px] w-full bg-[#f0f4f8] mb-3">
                    <img
                      src={b.image}
                      alt={b.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[11px] text-[#888] font-medium block mb-1">
                    {b.date.replace(/<!-- -->/g, ' ')}
                  </span>
                  <h3 className="text-[15px] font-[600] text-[#031926] group-hover:text-[#fc5a5a] transition-colors line-clamp-2 leading-snug">
                    {b.title.replace(/&amp;/g, '&')}
                  </h3>
                </div>
                <div className="pt-3 mt-3 border-t border-[#f0f0f0]">
                  <span className="text-[12px] font-[600] text-[#fc5a5a]">
                    Read Full Guide →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
