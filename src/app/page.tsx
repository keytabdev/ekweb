export const dynamic = "force-static";

import { Metadata } from 'next';
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/home/HeroSection";
import WhyEklavyaSection from "@/components/home/WhyEklavyaSection";
import AdventureLearningSection from "@/components/home/AdventureLearningSection";
import LearningUniversesSection from "@/components/home/LearningUniversesSection";
import WhatMakesEklavyaDifferentSection from "@/components/home/WhatMakesEklavyaDifferentSection";
import FAQSection from "@/components/home/FAQSection";
import CallToActionSection from "@/components/home/CallToActionSection";
import TheEarningLearningSystemSection from "@/components/home/TheEarningLearningSystemSection";
import MeetEkAiSection from "@/components/home/MeetEkAiSection";
import TabletsDesignSection from "@/components/home/TabletsDesignSection";

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
