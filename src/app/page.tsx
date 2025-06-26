export const dynamic = "force-static";

import { Metadata } from 'next';
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WhyEklavyaSection from "@/components/WhyEklavyaSection";
import AdventureLearningSection from "@/components/AdventureLearningSection";
import LearningUniversesSection from "@/components/LearningUniversesSection";
import WhatMakesEklavyaDifferentSection from "@/components/WhatMakesEklavyaDifferentSection";
import FAQSection from "@/components/FAQSection";
import CallToActionSection from "@/components/CallToActionSection";
import TheEarningLearningSystemSection from "@/components/TheEarningLearningSystemSection";
import MeetEkAiSection from "@/components/MeetEkAiSection";
import TabletsDesignSection from "@/components/TabletsDesignSection";

export const metadata: Metadata = {
  title: 'Eklavya - Transforming Learning Through Innovation',
  description: 'Discover Eklavya, the revolutionary educational platform that makes learning interactive, gamified, and AI-powered. Perfect for students, teachers, and parents.',
  keywords: ['education', 'learning platform', 'AI-powered', 'gamified learning', 'interactive education', 'students', 'teachers', 'parents'],
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyEklavyaSection />
      <AdventureLearningSection />
      <LearningUniversesSection />
      <MeetEkAiSection />
      <TheEarningLearningSystemSection />
      <WhatMakesEklavyaDifferentSection />
      <TabletsDesignSection />
      <FAQSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
