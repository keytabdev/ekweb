import React from 'react';

export default function FAQSection() {
  return (
    <div className="w-[1440px] h-[494px] left-0 top-[4849px] absolute bg-white overflow-hidden">
      <div className="w-[760px] left-[340px] top-[167px] absolute inline-flex flex-col justify-start items-start gap-2">
        <div className="self-stretch px-6 py-4 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stone-300 inline-flex justify-between items-start">
          <div className="size-auto inline-flex flex-col justify-start items-start gap-2">
            <div className="justify-start text-zinc-900 text-base font-semibold font-['Graphie'] leading-snug">What are credits used for?</div>
            <div className="w-[644px] justify-start text-zinc-900 text-xs font-normal font-['Graphie'] leading-tight">Credits unlock exciting lessons, interactive games, exclusive comics, and quizzes. More credits = more adventures!</div>
          </div>
          <div className="w-[1.60px] h-4 bg-neutral-700" />
          <div className="w-[1.60px] h-4 origin-top-left rotate-90 bg-neutral-700" />
        </div>
        <div className="self-stretch px-6 py-4 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stone-300 inline-flex justify-between items-center">
          <div className="size-auto inline-flex flex-col justify-start items-start">
            <div className="justify-start text-zinc-900 text-base font-semibold font-['Graphie'] leading-snug">Can I change my plan later?</div>
          </div>
          <div className="w-[1.60px] h-4 bg-neutral-700" />
          <div className="w-[1.60px] h-4 origin-top-left rotate-90 bg-neutral-700" />
        </div>
        <div className="self-stretch px-6 py-4 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stone-300 inline-flex justify-between items-center">
          <div className="size-auto inline-flex flex-col justify-start items-start">
            <div className="justify-start text-zinc-900 text-base font-semibold font-['Graphie'] leading-snug">Is there a discount for annual plans?</div>
          </div>
          <div className="w-[1.60px] h-4 bg-neutral-700" />
          <div className="w-[1.60px] h-4 origin-top-left rotate-90 bg-neutral-700" />
        </div>
        <div className="self-stretch px-6 py-4 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stone-300 inline-flex justify-between items-center">
          <div className="size-auto inline-flex flex-col justify-start items-start">
            <div className="justify-start text-zinc-900 text-base font-semibold font-['Graphie'] leading-snug">How do schools get special pricing?</div>
          </div>
          <div className="w-[1.60px] h-4 bg-neutral-700" />
          <div className="w-[1.60px] h-4 origin-top-left rotate-90 bg-neutral-700" />
        </div>
      </div>
      <div className="left-[496px] top-[59px] absolute justify-start text-zinc-900 text-4xl font-bold font-['Graphie'] leading-[76px] tracking-tight">Frequently asked questions</div>
      <div className="w-14 h-16 left-[-21px] top-[52px] absolute bg-cyan-400" />
    </div>
  );
} 