import { Metadata } from 'next';
import Footer from '@/components/Footer';
import ParentHeroSection from '@/components/ParentHeroSection';
import LearningThatFeelsLikePlaySection from '@/components/LearningThatFeelsLikePlaySection';
import SafeAndSecureSection from '@/components/SafeAndSecureSection';
import StayInvolvedSection from '@/components/StayInvolvedSection';
import CelebrateAchievementSection from '@/components/CelebrateAchievementSection';
import BeInControlSection from '@/components/BeInControlSection';
import React from 'react'

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: 'Eklavya for Parents - Safe Learning That Feels Like Play',
  description: 'Give your child a safe, ad-free learning environment with Eklavya. Stay involved with progress tracking, gamified lessons, and secure educational content.',
  keywords: ['parental control', 'safe learning', 'ad-free education', 'gamified learning', 'progress tracking', 'child safety', 'educational games'],
};

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
