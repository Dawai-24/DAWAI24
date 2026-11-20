"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Ramesh Sharma",
    location: "Bengaluru",
    rating: 5,
    saving: "Saved ₹1,850/month",
    comment: "I was spending nearly ₹3,200 every month on my diabetes and BP medicines. Switching to certified substitute medicines on PlatinumRx reduced my bill to ₹1,350 without any change in efficacy. Very satisfied!",
  },
  {
    id: 2,
    name: "Pooja Deshmukh",
    location: "Pune",
    rating: 5,
    saving: "Saved ₹2,400/month",
    comment: "Doctor-approved substitute salts delivered with original seal and batch certificates. Pharmacist verified my prescription on WhatsApp and explained the entire formulation patiently.",
  },
  {
    id: 3,
    name: "Virender Gupta",
    location: "Delhi NCR",
    rating: 5,
    saving: "Saved 62% on chronic meds",
    comment: "Fast doorstep delivery and transparent pricing. No unnecessary brand markups. Same chemical salt manufactured by top GMP approved pharma companies.",
  },
  {
    id: 4,
    name: "Ananya Iyer",
    location: "Chennai",
    rating: 5,
    saving: "Saved ₹1,200/month",
    comment: "Ordering through prescription upload is seamless. Just clicked a photo, they identified all alternatives, and I received genuine medicines in 24 hours.",
  },
  {
    id: 5,
    name: "Sanjay Singhal",
    location: "Jaipur",
    rating: 5,
    saving: "Saved ₹3,100/month",
    comment: "My father has 5 daily cardiac and cholesterol tablets. Buying substitutes saved us more than ₹35,000 in a single year. Lab test reports remained consistently normal.",
  },
  {
    id: 6,
    name: "Kavita Nair",
    location: "Kochi",
    rating: 5,
    saving: "Saved 58% on monthly bill",
    comment: "Packaging is secure, temperature-controlled, and delivery is on time every month. Customer care is extremely responsive and helpful.",
  },
  {
    id: 7,
    name: "Manoj Agarwal",
    location: "Kolkata",
    rating: 5,
    saving: "Saved ₹1,650/month",
    comment: "I double checked with my family doctor before ordering substitutes. He confirmed the salt composition is 100% identical. Genuine service!",
  },
  {
    id: 8,
    name: "Dr. Arvind Kulkarni",
    location: "Mumbai",
    rating: 5,
    saving: "Saved ₹2,800/month",
    comment: "Being a medical professional myself, I know Indian generic medicines follow the exact bioequivalence standards. PlatinumRx makes it transparent and easily accessible.",
  },
];

export default function HomeTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = reviews.length - visibleCount;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-slide effect every 3.5 seconds
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 3500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, maxIndex]);

  const stepPercentage = 100 / visibleCount;

  return (
    <section
      data-slot="testimonials"
      className="container-x py-8 md:py-14"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div>
          <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#171725]">
            Trusted by <span className="text-[#FF6B5A]">10L+</span> Customers
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#696974] mt-1">
            Real experiences from patients saving up to 60% on monthly medicines
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-[#E2E8F0] bg-white flex items-center justify-center hover:bg-[#F8FAFC] active:scale-95 transition-all shadow-xs cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft size={18} className="text-[#171725]" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-[#E2E8F0] bg-white flex items-center justify-center hover:bg-[#F8FAFC] active:scale-95 transition-all shadow-xs cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight size={18} className="text-[#171725]" />
          </button>
        </div>
      </div>

      {/* Carousel Track */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out -mx-2 md:-mx-3"
          style={{
            transform: `translateX(-${currentIndex * stepPercentage}%)`,
          }}
        >
          {reviews.map((r) => (
            <div
              key={r.id}
              className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-2 md:px-3"
            >
              <div className="h-full rounded-[20px] border border-[#E2E8F0] bg-white p-6 shadow-xs flex flex-col justify-between hover:border-[#FF6B5A]/40 transition-all hover:shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex text-amber-400">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-[#24a148] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 flex items-center gap-1">
                      <CheckCircle2 size={12} className="stroke-[#24a148]" />
                      {r.saving}
                    </span>
                  </div>

                  <p className="text-[13px] md:text-[14px] text-[#475569] leading-relaxed italic line-clamp-4">
                    “{r.comment}”
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 mt-5 border-t border-[#F1F5F9]">
                  <div className="w-10 h-10 rounded-full bg-[#FFF1EF] text-[#FF6B5A] font-bold text-sm flex items-center justify-center shrink-0">
                    {r.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-[14px] text-[#171725] truncate">
                      {r.name}
                    </h4>
                    <p className="text-[12px] text-[#696974] truncate">
                      {r.location} &bull; Verified Buyer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Dots Indicator */}
      <div className="flex justify-center items-center gap-1.5 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              currentIndex === i
                ? "w-6 bg-[#FF6B5A]"
                : "w-2 bg-[#E2E8F0] hover:bg-[#CBD5E1]"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
