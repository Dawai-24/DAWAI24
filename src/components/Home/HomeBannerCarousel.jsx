"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Dynapar QPS Plus Pain Relief Spray",
    image: "/img/banner-1.png",
    link: "/medicines",
  },
  {
    id: 2,
    title: "Friends Premium Adult Dry Diaper Pants",
    image: "/img/banner-2.jpeg",
    link: "/category/personal-care",
  },
  {
    id: 3,
    title: "All Day Re-Moisturising Cream",
    image: "/img/banner-3.png",
    link: "/category/personal-care",
  },
];

export default function HomeBannerCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section data-slot="banner-carousel" className="container-x py-4">
      <div className="relative">
        <div className="overflow-hidden rounded-[20px]">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((s) => (
              <div key={s.id} className="min-w-full shrink-0 basis-full">
                <Link href={s.link} className="relative block aspect-[2/1] sm:aspect-[2.8/1] md:aspect-[3.2/1] w-full overflow-hidden rounded-[20px] border border-[#E2E8F0] shadow-xs">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center items-center gap-2 mt-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                current === i
                  ? "w-6 bg-[#FF6B5A]"
                  : "w-2 bg-[#D1D5DB] hover:bg-[#9CA3AF]"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
