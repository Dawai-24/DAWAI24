import Link from "next/link";
import otcByLetter from "@/data/platinumrx_otc_by_letter.json";

export const metadata = {
  title: "Complete Online Medicine List | Browse All OTC Medicines – PlatinumRx",
  description: "Browse all Over-The-Counter (OTC) health products, vitamins, daily essentials, and personal wellness supplements on PlatinumRx.",
};

const ALPHABETS = [
  "0-9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

export default async function AllOtcPage({ searchParams }) {
  const sp = await searchParams;
  const currentLabel = (sp?.label || "A").toUpperCase();
  const currentPage = parseInt(sp?.page || "1", 10) || 1;

  // Retrieve letter-specific data dynamically
  const letterData = otcByLetter[currentLabel] || otcByLetter["A"] || { items: [], totalPages: 1 };
  const products = letterData.items || [];
  const totalPages = letterData.totalPages || 1;

  const paginationPages = [];
  const maxVisiblePages = 5;
  for (let i = 1; i <= Math.min(totalPages, maxVisiblePages); i++) {
    paginationPages.push(i);
  }

  return (
    <div className="min-h-screen bg-white">
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
              <span className="text-[#fc5a5a] font-medium">OTC</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Main Container */}
      <main className="border border-[#e2ecf4] rounded-[12px] mx-[4.5%] lg:mx-[8%] my-[1.25%] p-[4%] lg:p-[2%_4%]">
        <h1 className="text-[24px] font-[600] text-[#031926] mb-2 leading-tight">
          All Health Products
        </h1>
        <p className="text-[16px] lg:text-[18px] font-[400] text-[#40464d] leading-[2.2rem] mt-2 mb-6">
          Browse verified wellness essentials, OTC supplements, skincare and health devices
        </p>

        {/* Alphabet Navigation Bar */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8">
          {ALPHABETS.map((letter) => {
            const isActive = currentLabel === letter;
            return (
              <Link
                key={letter}
                href={`/otc?label=${encodeURIComponent(letter)}`}
                className={`min-w-[32px] h-[32px] sm:min-w-[36px] sm:h-[36px] px-2 rounded-[4px] flex items-center justify-center text-[13px] sm:text-[14px] font-[500] transition-colors ${
                  isActive
                    ? "bg-[#fc5a5a] text-white"
                    : "border border-[#e2ecf4] text-[#40464d] hover:bg-[#f5f5f5]"
                }`}
              >
                {letter}
              </Link>
            );
          })}
        </div>

        {/* Products Grid Cards */}
        {products.length === 0 ? (
          <div className="text-center py-12 text-[#666]">
            No health products found for letter {currentLabel}.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6">
            {products.map((item) => {
              const detailUrl = `/otc/${item.slug}/${item.id}`;
              return (
                <div
                  key={`${item.slug}-${item.id}`}
                  className="border border-[#e2ecf4] rounded-[12px] p-4 bg-white flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    {/* Placeholder container for product image */}
                    <div className="h-44 w-full bg-[#f8fafc] rounded-[8px] mb-3 border border-[#edf2f7] flex items-center justify-center"></div>

                    <Link href={detailUrl} className="block group">
                      <h2 className="text-[15px] font-[600] text-[#031926] group-hover:text-[#fc5a5a] transition-colors line-clamp-2 leading-snug">
                        {item.name}
                      </h2>
                    </Link>

                    <p className="text-[12px] text-[#888] mt-1 truncate">
                      {item.manufacturer}
                    </p>

                    <div className="text-[12px] text-[#555] mt-2 font-medium">
                      {item.packageSize}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#f0f0f0] flex flex-col gap-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[18px] font-bold text-[#219653]">
                        ₹{item.price}
                      </span>
                      <span className="text-[11px] text-[#888]">MRP</span>
                    </div>

                    <Link
                      href={detailUrl}
                      className="w-full text-center py-2.5 bg-[#fc5a5a] hover:bg-[#e04848] text-white font-[600] text-[13px] rounded-[6px] transition-colors"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 pt-8 pb-2 border-t border-[#f0f4f8] mt-6">
            {currentPage > 1 ? (
              <Link
                href={`/otc?label=${encodeURIComponent(currentLabel)}&page=${currentPage - 1}`}
                className="w-9 h-9 rounded-[4px] border border-[#e2ecf4] flex items-center justify-center text-[#40464d] hover:bg-[#f5f5f5]"
                aria-label="Previous page"
              >
                ‹
              </Link>
            ) : (
              <span className="w-9 h-9 rounded-[4px] border border-[#e2ecf4] flex items-center justify-center text-[#ccc] cursor-not-allowed">
                ‹
              </span>
            )}

            {paginationPages.map((pg) => {
              const isSelected = pg === currentPage;
              return (
                <Link
                  key={pg}
                  href={`/otc?label=${encodeURIComponent(currentLabel)}&page=${pg}`}
                  className={`w-9 h-9 rounded-[4px] flex items-center justify-center text-[14px] font-[500] border ${
                    isSelected
                      ? "bg-[#fc5a5a] text-white border-[#fc5a5a]"
                      : "border-[#e2ecf4] text-[#40464d] hover:bg-[#f5f5f5]"
                  }`}
                >
                  {pg}
                </Link>
              );
            })}

            {totalPages > maxVisiblePages && (
              <>
                <span className="px-1 text-[#888]">…</span>
                <Link
                  href={`/otc?label=${encodeURIComponent(currentLabel)}&page=${totalPages}`}
                  className={`w-9 h-9 rounded-[4px] flex items-center justify-center text-[14px] font-[500] border ${
                    totalPages === currentPage
                      ? "bg-[#fc5a5a] text-white border-[#fc5a5a]"
                      : "border-[#e2ecf4] text-[#40464d] hover:bg-[#f5f5f5]"
                  }`}
                >
                  {totalPages}
                </Link>
              </>
            )}

            {currentPage < totalPages ? (
              <Link
                href={`/otc?label=${encodeURIComponent(currentLabel)}&page=${currentPage + 1}`}
                className="w-9 h-9 rounded-[4px] border border-[#e2ecf4] flex items-center justify-center text-[#40464d] hover:bg-[#f5f5f5]"
                aria-label="Next page"
              >
                ›
              </Link>
            ) : (
              <span className="w-9 h-9 rounded-[4px] border border-[#e2ecf4] flex items-center justify-center text-[#ccc] cursor-not-allowed">
                ›
              </span>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
