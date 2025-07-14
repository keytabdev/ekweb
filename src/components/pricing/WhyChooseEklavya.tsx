import React from 'react';
import Image from 'next/image';

export default function WhyChooseEklavya() {
  return (
    <section className="max-h-[900px]">
      <div className="w-full h-[760px] bg-white relative overflow-hidden mt-20 flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Why-chose-eklavya.svg" 
            alt="Why Choose Eklavya Background"
            fill
            className="object-center scale-x-100 xl:scale-x-[1.4]"
            sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 1522px, 2000px"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-zinc-900 text-4xl font-bold font-['Graphie'] leading-10 tracking-tight">Why Choose Eklavya?</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-[45px] justify-items-center max-w-[800px] mx-auto">
            <div className="w-[344px] h-[166px] px-10 py-8 flex flex-col justify-center items-center gap-2.5 bg-white rounded-[32px] border-2 border-[#F5E7FF] shadow-[1px_7.11px_6px_0px_rgba(88,78,203,0.16)]">
              <div className="text-zinc-900 text-2xl font-semibold font-['Graphie'] capitalize leading-relaxed">Transparent Pricing</div>
              <div className="text-center text-neutral-700 text-base font-normal font-['Graphie'] leading-normal">No hidden costs, clear monthly credits.</div>
            </div>
            
            <div className="w-[344px] h-[166px] px-10 py-8 flex flex-col justify-center items-center gap-2.5 bg-white rounded-[32px] border-2 border-[#F5E7FF] shadow-[1px_7.11px_6px_0px_rgba(88,78,203,0.16)]">
              <div className="text-zinc-900 text-2xl font-semibold font-['Graphie'] capitalize leading-relaxed">Flexible Plans</div>
              <div className="text-center text-neutral-700 text-base font-normal font-['Graphie'] leading-normal">Upgrade, downgrade, or cancel anytime</div>
            </div>
            
            <div className="w-[344px] h-[166px] px-10 py-8 flex flex-col justify-center items-center gap-2.5 bg-white rounded-[32px] border-2 border-[#F5E7FF] shadow-[1px_7.11px_6px_0px_rgba(88,78,203,0.16)]">
              <div className="text-zinc-900 text-2xl font-semibold font-['Graphie'] capitalize leading-relaxed">Continuous Rewards</div>
              <div className="text-center text-neutral-700 text-base font-normal font-['Graphie'] leading-normal">Credits incentivize regular learning.</div>
            </div>
            
            <div className="w-[344px] h-[166px] px-10 py-8 flex flex-col justify-center items-center gap-2.5 bg-white rounded-[32px] border-2 border-[#F5E7FF] shadow-[1px_7.11px_6px_0px_rgba(88,78,203,0.16)]">
              <div className="text-zinc-900 text-2xl font-semibold font-['Graphie'] capitalize leading-relaxed">Safe and Secure</div>
              <div className="text-center text-neutral-700 text-base font-normal font-['Graphie'] leading-normal">Ad-free, distraction-free learning.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 