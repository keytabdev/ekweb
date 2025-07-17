import React from 'react';
import Image from 'next/image';
import { pricingHeroBg, pricingHeroImage } from '@/assets';

export default function PricingHeroSection() {
  return (
    <section className="relative overflow-visible w-full min-h-[560px] flex items-center justify-center lg:py-16 xl:py-26">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 xl:scale-y-100 xl:translate-y-[-30px]">
        <Image
          src={pricingHeroBg}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 relative z-10 pb-10">
        {/* Left: Text Content */}
        <div className="flex-1 text-left lg:ml-[144px] lg:w-[651px] -mt-12">
          <h1 className="text-cyan-900 text-4xl md:text-6xl font-normal font-['Graphie'] leading-tight mb-4">
            Unlock
            <br />
            <span className="text-stone-50">Unlimited Learning, Adventure, and Fun.</span>
          </h1>
          <p
            className="text-[#F8F8F8] font-['Graphie'] text-[16px] font-normal leading-[24px] tracking-[0.16px] mb-8"
            style={{ width: '614px', height: '97px', flexShrink: 0, fontStyle: 'normal' }}
          >
            Every child&apos;s journey is unique, and so is our pricing—flexible, transparent, and tailored to support your child&apos;s growth. Choose the perfect plan and let the learning adventures begin!
          </p>
          <button
            className="flex justify-start items-center gap-2 py-3 px-8 rounded-lg bg-[#F8F8F8] shadow-[1px_4px_4px_0px_rgba(0,0,0,0.16)] text-sky-950 text-lg font-normal font-['Graphie'] transition -mt-8"
          >
            Check Prices
          </button>
        </div>
        {/* Right: Hero Image */}
        <div className="flex-1 flex items-center justify-center lg:mr-[144px]">
          <Image
            src={pricingHeroImage}
            alt="Smiling student"
            width={400}
            height={400}
            className="w-[450px] h-[450px] rounded-3xl object-contain"
            sizes="400px"
            priority
          />
        </div>
      </div>
    </section>
  );
} 