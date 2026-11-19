import HomeHero from "@/components/Home/HomeHero";
import HomeQuickActions from "@/components/Home/HomeQuickActions";
import HomeBannerCarousel from "@/components/Home/HomeBannerCarousel";
import HomeWhySubstitute from "@/components/Home/HomeWhySubstitute";
import HomeShopByCategory from "@/components/Home/HomeShopByCategory";
import HomeAdvantage from "@/components/Home/HomeAdvantage";
import HomeTestimonials from "@/components/Home/HomeTestimonials";
import HomeNews from "@/components/Home/HomeNews";
import HomeKnowMore from "@/components/Home/HomeKnowMore";

export const metadata = {
  title: "Buy Generic Medicines Online & Save Up to 60% on PlatinumRx",
  description: "PlatinumRx is India's trusted online pharmacy for branded substitute medicines. Save up to 60% on chronic prescription drugs with identical salt compositions.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section (Blue gradient banner with Doctor Approved pills + Search + Ambassador image) */}
      <HomeHero />

      {/* 2. Quick Action Cards (Add Prescription Upload + WhatsApp Order) */}
      <HomeQuickActions />

      {/* 3. Promotional Carousel Banners */}
      <HomeBannerCarousel />

      {/* 4. Why Choose Substitute (Perception card + Same Composition + Certified Mfg + 60% Savings) */}
      <HomeWhySubstitute />

      {/* 5. Shop by Category (Interactive tabs + subcategories grid) */}
      <HomeShopByCategory />

      {/* 6. The PlatinumRx Advantage (100% Genuine, FDA & GMP Approved, GMP Certified) */}
      <HomeAdvantage />

      {/* 7. Trusted by 10L+ Customers (Customer reviews slider) */}
      <HomeTestimonials />

      {/* 8. We Are In The News (Interactive coverage + press logos) */}
      <HomeNews />

      {/* 9. Know More About PlatinumRx (SEO description + FAQs) */}
      <HomeKnowMore />
    </div>
  );
}
