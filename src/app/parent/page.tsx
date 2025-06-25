import Footer from '@/components/Footer';
import ParentHeroSection from '@/components/ParentHeroSection';
import LearningThatFeelsLikePlaySection from '@/components/LearningThatFeelsLikePlaySection';
import SafeAndSecureSection from '@/components/SafeAndSecureSection';
import StayInvolvedSection from '@/components/StayInvolvedSection';
import CelebrateAchievementSection from '@/components/CelebrateAchievementSection';
import BeInControlSection from '@/components/BeInControlSection';
import React from 'react'

export const dynamic = "force-static"

export default function Parent() {
  return (
    <div className="min-h-screen bg-white">
      <ParentHeroSection />
      <LearningThatFeelsLikePlaySection />
      <SafeAndSecureSection />
      <StayInvolvedSection />
      <CelebrateAchievementSection />
      <BeInControlSection />
      <Footer />
    </div>
  );
}
