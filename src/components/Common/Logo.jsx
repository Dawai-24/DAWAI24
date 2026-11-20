import Link from "next/link";

export default function Logo({ width = 38, height = 38, showText = true, className = "" }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group select-none ${className}`} aria-label="Davai24 home">
      {/* Davai24 Hexagon Icon with bold inner 'D' */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform group-hover:scale-105 drop-shadow-xs"
      >
        {/* Outer Deep Blue Hexagon border */}
        <path
          d="M50 4L93.3 29V79L50 104L6.7 79V29L50 4Z"
          stroke="#233A5E"
          strokeWidth="11"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />
        {/* Inner Coral Red 'D' */}
        <path
          d="M34 32H54C64.5 32 72 38.5 72 54C72 69.5 64.5 76 54 76H34V32ZM46 44V64H53C58 64 61 60.5 61 54C61 47.5 58 44 53 44H46Z"
          fill="#FF6B5A"
        />
      </svg>

      {/* Brand Text: "Davai" in Deep Blue, "24" in Coral Red */}
      {showText && (
        <span className="text-[24px] font-black tracking-tight leading-none font-sans select-none flex items-baseline">
          <span className="text-[#233A5E]">Davai</span>
          <span className="text-[#FF6B5A]">24</span>
        </span>
      )}
    </Link>
  );
}
