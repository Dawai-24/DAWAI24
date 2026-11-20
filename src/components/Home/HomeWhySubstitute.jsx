import Link from "next/link";

export default function HomeWhySubstitute() {
  return (
    <section data-slot="choose-substitute" className="container-x pt-6 pb-10">
      <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#171725] capitalize">
        Why Choose Substitute
      </h2>

      <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:grid-cols-12 md:gap-6">
        
        {/* Left Side: Large Article / Perception Hero Card (col-span-7) */}
        <Link
          href="/blogs/understanding-the-perception-of-generic-medicine-online-quality-2"
          className="border border-[#E2E8F0] relative aspect-[4/3] md:aspect-auto overflow-hidden rounded-[16px] md:rounded-[24px] md:col-span-7 shadow-xs group block"
        >
          <img
            src="/img/why-substitute-hero.png"
            alt="Why Choose Substitute"
            className="h-full w-full object-cover group-hover:scale-102 transition-transform duration-300"
          />
        </Link>

        {/* Right Side: 3 Feature Cards (col-span-5) */}
        <div className="grid grid-cols-1 gap-3 md:col-span-5 md:grid-flow-row md:gap-4">
          
          {/* Card 1: Same Composition */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-4 rounded-[16px] md:rounded-[20px] p-4 md:p-5 shadow-xs">
            <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center p-2 shadow-xs">
              <img
                src="/img/same-composition.webp"
                alt="Same Composition"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] md:text-[16px] font-bold text-[#171725]">
                Same Composition
              </span>
              <p className="text-[12px] md:text-[13px] text-[#696974] mt-0.5">
                Same salt, same strength as your prescribed medicine
              </p>
            </div>
          </div>

          {/* Card 2: Certified Manufacturers */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-4 rounded-[16px] md:rounded-[20px] p-4 md:p-5 shadow-xs">
            <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center p-2 shadow-xs">
              <img
                src="/img/certified-mfg.webp"
                alt="Certified Manufacturers"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] md:text-[16px] font-bold text-[#171725]">
                Certified Manufacturers
              </span>
              <p className="text-[12px] md:text-[13px] text-[#696974] mt-0.5">
                Made by GMP certified Indian manufacturers
              </p>
            </div>
          </div>

          {/* Card 3: Savings up to 60% */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-4 rounded-[16px] md:rounded-[20px] p-4 md:p-5 shadow-xs">
            <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center p-2 shadow-xs">
              <img
                src="/img/savings-60.webp"
                alt="Savings up to 60%"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] md:text-[16px] font-bold text-[#171725]">
                Savings up to 60%
              </span>
              <p className="text-[12px] md:text-[13px] text-[#696974] mt-0.5">
                Save up to 60% on your monthly medicine bill
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
