import { Metadata } from 'next';
import React from "react";
import PricingHeroSection from '@/components/pricing/PricingHeroSection';
import IntroText from '@/components/pricing/IntroText';
import PlanSelector from '@/components/pricing/PlanSelector';
import PricingTable from '@/components/pricing/PricingTable';
import WhyChooseEklavya from '@/components/pricing/WhyChooseEklavya';
import FAQSection from '@/components/pricing/FAQSection';
import LearningThatFeelsLikePlaySection from '@/components/pricing/LearningThatFeelsLikePlaySection';
import Footer from '@/components/shared/Footer';

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: 'Eklavya Pricing - Affordable Plans for Everyone',
  description: 'Choose the perfect Eklavya plan for your needs. Flexible, value-driven pricing options for students, teachers, and parents. Start your free trial today!',
  keywords: ['pricing', 'plans', 'subscription', 'affordable education', 'free trial', 'educational pricing', 'value', 'flexible plans'],
};

export default function Pricing() {
  return (
    <>
      <div className="relative bg-white overflow-hidden">

        {/* Hero Section */}
        <PricingHeroSection />
        {/* Intro Text */}
        <IntroText />        
        {/* Choose your Plan heading */}
        <div className="w-full flex justify-center items-center py-16">
          <h2 className="text-zinc-900 text-4xl font-bold font-['Graphie'] leading-10 tracking-tight text-center">
            Choose your Plan
          </h2>
        </div>
        

        
        {/* Plan Selector */}
        <PlanSelector />
        
        {/* Pricing Table */}
        <PricingTable />
        
        {/* Learning That Feels Like Play Section */}
        <LearningThatFeelsLikePlaySection />
        
        {/* Why Choose Eklavya Section */}
        <WhyChooseEklavya />
        
        {/* FAQ Section */}
        <FAQSection />
        
      </div>
      
      <Footer />
    </>
  );
}
