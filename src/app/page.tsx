"use client";

export const dynamic = "force-static";

import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WhyEklavyaSection from "@/components/WhyEklavyaSection";
import AdventureLearningSection from "@/components/AdventureLearningSection";
import LearningUniversesSection from "@/components/LearningUniversesSection";
import WhatMakesEklavyaDifferentSection from "@/components/WhatMakesEklavyaDifferentSection";
import FAQSection from "@/components/FAQSection";
import CallToActionSection from "@/components/CallToActionSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyEklavyaSection />
      <AdventureLearningSection />
      <LearningUniversesSection />
      <WhatMakesEklavyaDifferentSection />
      <FAQSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
