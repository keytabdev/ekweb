import React from 'react';

export default function FAQSection() {
  return (
    <div className="w-full bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-zinc-900 text-4xl font-bold font-['Graphie'] leading-[76px] tracking-tight">Frequently asked questions</h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="px-6 py-4 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stone-300 flex justify-between items-start">
            <div className="flex flex-col gap-2">
              <div className="text-zinc-900 text-base font-semibold font-['Graphie'] leading-snug">What are credits used for?</div>
              <div className="text-zinc-900 text-xs font-normal font-['Graphie'] leading-tight">Credits unlock exciting lessons, interactive games, exclusive comics, and quizzes. More credits = more adventures!</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-[1.60px] h-4 bg-neutral-700" />
              <div className="w-[1.60px] h-4 origin-top-left rotate-90 bg-neutral-700" />
            </div>
          </div>
          
          <div className="px-6 py-4 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stone-300 flex justify-between items-center">
            <div className="flex flex-col">
              <div className="text-zinc-900 text-base font-semibold font-['Graphie'] leading-snug">Can I change my plan later?</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-[1.60px] h-4 bg-neutral-700" />
              <div className="w-[1.60px] h-4 origin-top-left rotate-90 bg-neutral-700" />
            </div>
          </div>
          
          <div className="px-6 py-4 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stone-300 flex justify-between items-center">
            <div className="flex flex-col">
              <div className="text-zinc-900 text-base font-semibold font-['Graphie'] leading-snug">Is there a discount for annual plans?</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-[1.60px] h-4 bg-neutral-700" />
              <div className="w-[1.60px] h-4 origin-top-left rotate-90 bg-neutral-700" />
            </div>
          </div>
          
          <div className="px-6 py-4 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stone-300 flex justify-between items-center">
            <div className="flex flex-col">
              <div className="text-zinc-900 text-base font-semibold font-['Graphie'] leading-snug">How do schools get special pricing?</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-[1.60px] h-4 bg-neutral-700" />
              <div className="w-[1.60px] h-4 origin-top-left rotate-90 bg-neutral-700" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="w-14 h-16 absolute left-4 top-20 bg-cyan-400" />
    </div>
  );
} 