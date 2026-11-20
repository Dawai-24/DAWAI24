export default function ProductImage({ product, className = "" }) {
  // Placeholder using official Davai24 Logo brand mark until real product images are configured
  return (
    <div className={`w-full h-full flex flex-row items-center justify-center gap-2 bg-[#F8FAFC] rounded-xl border border-[#EDF2F7] relative overflow-hidden group-hover:bg-[#F1F5F9] transition-colors px-3 py-2 ${className}`}>
      {/* Official Davai24 SVG Hexagon Logo Symbol */}
      <svg
        width="28"
        height="32"
        viewBox="0 0 100 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-80 transition-transform duration-300 group-hover:scale-105 shrink-0"
      >
        <path
          d="M50 4L93.3 29V79L50 104L6.7 79V29L50 4Z"
          stroke="#233A5E"
          strokeWidth="11"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M34 32H54C64.5 32 72 38.5 72 54C72 69.5 64.5 76 54 76H34V32ZM46 44V64H53C58 64 61 60.5 61 54C61 47.5 58 44 53 44H46Z"
          fill="#FF6B5A"
        />
      </svg>
      <span className="text-[13px] font-black tracking-tight select-none flex items-baseline">
        <span className="text-[#233A5E]">Davai</span>
        <span className="text-[#FF6B5A]">24</span>
      </span>
    </div>
  );
}
