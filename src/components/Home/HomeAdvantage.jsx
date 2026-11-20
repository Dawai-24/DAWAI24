export default function HomeAdvantage() {
  const advantages = [
    {
      title: "100% Genuine",
      image: "/img/adv-genuine.webp",
    },
    {
      title: "FDA & GMP Approved",
      image: "/img/adv-fda-gmp.webp",
    },
    {
      title: "GMP Certified",
      image: "/img/adv-gmp-cert.webp",
    },
  ];

  return (
    <section data-slot="advantage-medicine" className="container-x py-6 md:py-14">
      <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#171725] capitalize">
        The PlatinumRx Advantage
      </h2>

      <div className="mt-4 grid grid-cols-3 gap-3 md:mt-8 md:gap-6">
        {advantages.map((adv) => (
          <div
            key={adv.title}
            className="flex flex-col items-center justify-center gap-3 rounded-[16px] md:rounded-[20px] border border-[#E2E8F0] bg-white p-4 md:p-8 shadow-xs text-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
              <img
                src={adv.image}
                alt={adv.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="text-[13px] md:text-[16px] font-bold text-[#171725]">
              {adv.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
