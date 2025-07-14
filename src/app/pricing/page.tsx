'use client';

import React, { useState } from "react";
import PricingHeroSection from '@/components/pricing/PricingHeroSection';
import IntroText from '@/components/pricing/IntroText';
import PlanSelector from '@/components/pricing/PlanSelector';
import PricingTable from '@/components/pricing/PricingTable';
import WhyChooseEklavya from '@/components/pricing/WhyChooseEklavya';
import FAQSection from '@/components/pricing/FAQSection';
import LearningThatFeelsLikePlaySection from '@/components/pricing/LearningThatFeelsLikePlaySection';
import Footer from '@/components/shared/Footer';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<'parents' | 'teachers'>('parents');

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
        <PlanSelector selectedPlan={selectedPlan} onPlanChange={setSelectedPlan} />
        
        {/* Pricing Table */}
        <PricingTable planType={selectedPlan} />
        
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
