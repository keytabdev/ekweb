import React from 'react';

export default function WhyChooseEklavya() {
  return (
    <div className="w-full bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-zinc-900 text-4xl font-bold font-['Graphie'] leading-10 tracking-tight">Why Choose Eklavya?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="w-full h-40 px-10 py-7 bg-white rounded-xl shadow-[1px_7.110000133514404px_6px_0px_rgba(88,78,203,0.16)] outline outline-2 outline-offset-[-2px] outline-purple-100 flex flex-col justify-center items-center gap-2">
            <div className="text-zinc-900 text-2xl font-semibold font-['Graphie'] capitalize leading-relaxed">Transparent Pricing</div>
            <div className="text-center text-neutral-700 text-base font-normal font-['Graphie'] leading-normal">No hidden costs, clear monthly credits.</div>
          </div>
          
          <div className="w-full h-40 px-10 py-7 bg-white rounded-xl shadow-[1px_7.110000133514404px_6px_0px_rgba(88,78,203,0.16)] outline outline-2 outline-offset-[-2px] outline-purple-100 flex flex-col justify-center items-center gap-2">
            <div className="text-zinc-900 text-2xl font-semibold font-['Graphie'] capitalize leading-relaxed">Flexible Plans</div>
            <div className="text-center text-neutral-700 text-base font-normal font-['Graphie'] leading-normal">Upgrade, downgrade, or cancel anytime</div>
          </div>
          
          <div className="w-full h-40 px-10 py-7 bg-white rounded-xl shadow-[1px_7.110000133514404px_6px_0px_rgba(88,78,203,0.16)] outline outline-2 outline-offset-[-2px] outline-purple-100 flex flex-col justify-center items-center gap-2">
            <div className="text-zinc-900 text-2xl font-semibold font-['Graphie'] capitalize leading-relaxed">Continuous Rewards</div>
            <div className="text-center text-neutral-700 text-base font-normal font-['Graphie'] leading-normal">Credits incentivize regular learning.</div>
          </div>
          
          <div className="w-full h-40 px-10 py-7 bg-white rounded-xl shadow-[1px_7.110000133514404px_6px_0px_rgba(88,78,203,0.16)] outline outline-2 outline-offset-[-2px] outline-purple-100 flex flex-col justify-center items-center gap-2">
            <div className="text-zinc-900 text-2xl font-semibold font-['Graphie'] capitalize leading-relaxed">Safe and Secure</div>
            <div className="text-center text-neutral-700 text-base font-normal font-['Graphie'] leading-normal">Ad-free, distraction-free learning.</div>
          </div>
        </div>
      </div>
    </div>
  );
} 