import Link from "next/link";
import saltsByLetter from "@/data/platinumrx_salts_by_letter.json";

export const metadata = {
  title: "Medicine Salt Name List – Browse Salts and Their Uses | PlatinumRx",
  description: "Browse the complete medicine salt name list with uses. Find salt names of medicines and explore their compositions and related drugs only at PlatinumRx.",
};

const ALPHABETS = [
  "0-9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

export default async function AllSaltsPage({ searchParams }) {
  const sp = await searchParams;
  const currentLabel = (sp?.label || "A").toUpperCase();
  const currentPage = parseInt(sp?.page || "1", 10) || 1;

  // Retrieve letter data
  const letterData = saltsByLetter[currentLabel] || saltsByLetter["A"] || { salts: [], totalPages: 1 };
  const allSalts = letterData.salts || [];
  const totalPages = letterData.totalPages || 1;

  // Items per page = 24
  const pageSize = 24;
  const startIndex = (currentPage - 1) * pageSize;
  const saltsToShow = allSalts.length > pageSize
    ? allSalts.slice(startIndex, startIndex + pageSize)
    : allSalts;

  // Pagination page numbers generation (like PlatinumRx 1 2 3 4 5 ... total)
  const paginationPages = [];
  const maxVisiblePages = 5;
  for (let i = 1; i <= Math.min(totalPages, maxVisiblePages); i++) {
    paginationPages.push(i);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* PlatinumRx Breadcrumb */}
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
              <span className="text-[#fc5a5a] font-medium">Salt</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Main Container */}
      <main className="border border-[#e2ecf4] rounded-[12px] mx-[4.5%] lg:mx-[8%] my-[1.25%] p-[4%] lg:p-[2%_4%]">
        <h1 className="text-[24px] font-[600] text-[#031926] mb-2 leading-tight">
          All Salt List
        </h1>
        <p className="text-[16px] lg:text-[18px] font-[400] text-[#40464d] leading-[2.2rem] mt-2 mb-6">
          Browse through our comprehensive list of salts
        </p>

        {/* Alphabet Navigation Bar */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-6">
          {ALPHABETS.map((letter) => {
            const isActive = currentLabel === letter;
            return (
              <Link
                key={letter}
                href={`/salt?label=${encodeURIComponent(letter)}`}
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

        {/* Salt Listing Grid: 4 columns on desktop, 1 on mobile like reference */}
        {saltsToShow.length === 0 ? (
          <div className="text-center py-12 text-[#666]">
            No salts found for letter {currentLabel}.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-1 my-4">
            {saltsToShow.map((salt) => {
              const detailUrl = `/salt/${salt.slug || salt.id}/${salt.id || 1}`;
              return (
                <Link
                  key={`${salt.slug}-${salt.id}`}
                  href={detailUrl}
                  className="text-[14px] sm:text-[15px] font-[400] text-[#40464d] leading-[2.2rem] hover:text-[#fc5a5a] hover:bg-[#f5f5f5] px-2 py-0.5 rounded transition-colors truncate block"
                  title={salt.name}
                >
                  {salt.name}
                </Link>
              );
            })}
          </div>
        )}

        {/* Bottom Pagination Bar */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 pt-8 pb-2 border-t border-[#f0f4f8] mt-6">
            {/* Prev Page Button */}
            {currentPage > 1 ? (
              <Link
                href={`/salt?label=${encodeURIComponent(currentLabel)}&page=${currentPage - 1}`}
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

            {/* Page Numbers */}
            {paginationPages.map((pg) => {
              const isSelected = pg === currentPage;
              return (
                <Link
                  key={pg}
                  href={`/salt?label=${encodeURIComponent(currentLabel)}&page=${pg}`}
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
                  href={`/salt?label=${encodeURIComponent(currentLabel)}&page=${totalPages}`}
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

            {/* Next Page Button */}
            {currentPage < totalPages ? (
              <Link
                href={`/salt?label=${encodeURIComponent(currentLabel)}&page=${currentPage + 1}`}
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
