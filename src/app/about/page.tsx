import { Metadata } from 'next';
import React from 'react'

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: 'About Eklavya - Revolutionary Educational Platform',
  description: 'Learn about Eklavya\'s mission to transform education through innovation. Discover how we empower students, teachers, and parents with cutting-edge learning technology.',
  keywords: ['about eklavya', 'educational innovation', 'learning technology', 'educational platform', 'mission', 'vision', 'team'],
};

import AboutHeroSection from '@/components/about/AboutHeroSection';
import AboutStorySection from '@/components/about/AboutStorySection';
import AboutMissionSection from '@/components/about/AboutMissionSection';
import AboutVisionSection from '@/components/about/AboutVisionSection';
import AboutStripSection from '@/components/about/AboutStripSection';
import AboutBeliefsSection from '@/components/about/AboutBeliefsSection';
import AboutJoinUsSection from '@/components/about/AboutJoinUsSection';
import AboutWelcomeSection from '@/components/about/AboutWelcomeSection';
import Footer from '@/components/shared/Footer';

export default function About() {
  return (
    <div>
      <AboutHeroSection />
      <AboutStorySection />
      <AboutMissionSection />
      <AboutVisionSection />
      <AboutStripSection />
      <AboutBeliefsSection />
      <AboutJoinUsSection />
      <AboutWelcomeSection />
      <Footer />
    </div>
  )
}
