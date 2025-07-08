import React from 'react';

export default function PricingTable() {
  return (
    <div className="w-[1200px] left-[120px] top-[1412px] absolute bg-white rounded-xl shadow-[8px_8px_4px_0px_rgba(255,206,0,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-start overflow-hidden">
      {/* Features Column */}
      <div className="flex-1 border-r border-slate-200 inline-flex flex-col justify-start items-start">
        <div className="self-stretch h-60 px-8 py-5 border-b border-slate-200 flex flex-col justify-center items-center gap-3">
          <div className="size-auto inline-flex justify-center items-center gap-4">
            <div className="text-center justify-center text-zinc-800 text-3xl font-normal font-['Graphie']">Features</div>
          </div>
        </div>
        <div className="self-stretch h-28 px-8 py-5 bg-white border-b border-slate-200 inline-flex justify-start items-center gap-2.5">
          <div className="flex-1 justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-normal">
            Interactive Quizzes<br/>(Manual)
          </div>
        </div>
        <div className="self-stretch h-28 px-8 py-5 bg-white border-b border-slate-200 inline-flex justify-start items-center gap-2.5">
          <div className="flex-1 justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-relaxed">
            Interactive Quizzes<br/>(AI-Powered)
          </div>
        </div>
        <div className="self-stretch h-20 px-8 py-5 bg-white border-b border-slate-200 inline-flex justify-start items-center gap-2.5">
          <div className="justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-relaxed">
            Progress Reports
          </div>
        </div>
        <div className="self-stretch h-20 px-8 py-5 bg-white border-b border-slate-200 inline-flex justify-start items-center gap-2.5">
          <div className="flex-1 justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-relaxed">
            Real-Time<br/>Dashboards
          </div>
        </div>
        <div className="self-stretch h-20 px-8 py-5 bg-white border-b border-slate-200 inline-flex justify-start items-center gap-2.5">
          <div className="w-48 justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-relaxed">
            Progress Sharing
          </div>
        </div>
        <div className="self-stretch h-20 px-8 py-5 bg-white border-b border-slate-200 inline-flex justify-start items-center gap-2.5">
          <div className="flex-1 justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-relaxed">
            Game Designer<br/>(Manual)
          </div>
        </div>
        <div className="self-stretch h-20 px-8 py-5 bg-white border-b border-slate-200 inline-flex justify-start items-center gap-2.5">
          <div className="flex-1 justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-relaxed">
            Comic Creator<br/>(Using EkAI)
          </div>
        </div>
        <div className="self-stretch h-20 px-8 py-5 bg-white border-b border-slate-200 inline-flex justify-start items-center gap-2.5">
          <div className="flex-1 justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-relaxed">Downloads</div>
        </div>
        <div className="self-stretch h-20 px-8 py-5 bg-white border-b border-slate-200 inline-flex justify-start items-center gap-2.5">
          <div className="flex-1 justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-relaxed">Support</div>
        </div>
      </div>

      {/* Free Plan */}
      <div className="flex-1 border-r border-slate-200 inline-flex flex-col justify-center items-center">
        <div className="self-stretch h-60 p-7 relative border-b border-slate-200 flex flex-col justify-center items-center gap-7">
          <div className="self-stretch inline-flex justify-start items-center gap-4">
            <div className="w-44 text-center justify-center text-zinc-800 text-3xl font-semibold font-['Graphie']">Free</div>
          </div>
          <div className="left-[79px] top-[172px] absolute justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">1 Student</div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="self-stretch py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="size-auto inline-flex flex-col justify-center items-center">
              <div className="text-center justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-normal">50 quizzes</div>
              <div className="text-center justify-center text-gray-500 text-sm font-normal font-['Graphie'] leading-normal">-10 questions per quiz - Saved Quiz 30</div>
            </div>
          </div>
          <div className="self-stretch py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="size-auto inline-flex flex-col justify-center items-center">
              <div className="text-center justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-normal">20 quizzes</div>
              <div className="text-center justify-center text-gray-500 text-sm font-normal font-['Graphie'] leading-normal">-10 questions per quiz - Saved Quiz 30</div>
            </div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">Monthly</div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="size-6 relative overflow-hidden">
              <div className="size-6 left-0 top-0 absolute bg-rose-500" />
            </div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="size-6 relative overflow-hidden">
              <div className="size-6 left-0 top-0 absolute bg-rose-500" />
            </div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">10 games</div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">20 comics</div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">20</div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="w-40 justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">Community Forum</div>
          </div>
          <div className="self-stretch h-28 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="w-44 px-4 py-4 bg-green-500 rounded-xl shadow-[0px_3px_6px_0px_rgba(7,0,110,0.03)] shadow-[inset_0px_4px_6px_0px_rgba(255,255,255,0.40)] shadow-[inset_0px_-2px_2px_0px_rgba(27,35,85,0.07)] outline outline-1 outline-Colors-Neutrals-Neutral-400 flex justify-center items-center gap-1.5">
              <div className="text-center justify-center text-white text-lg font-bold font-['Graphie'] leading-tight">Get started</div>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Plan */}
      <div className="flex-1 border-r border-slate-200 inline-flex flex-col justify-center items-center">
        <div className="self-stretch h-60 p-7 relative border-b border-slate-200 flex flex-col justify-center items-center gap-7">
          <div className="self-stretch inline-flex justify-start items-center gap-4">
            <div className="w-44 text-center justify-center text-zinc-800 text-3xl font-semibold font-['Graphie']">
              Basic<br/>(₹499/mo)
            </div>
          </div>
          <div className="left-[76px] top-[172px] absolute text-center justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">3 Students</div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="self-stretch py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="size-auto inline-flex flex-col justify-center items-center">
              <div className="text-center justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-normal">500 quizzes</div>
              <div className="text-center justify-center text-gray-500 text-sm font-normal font-['Graphie'] leading-normal">-20 questions per quiz - Saved Quiz 30</div>
            </div>
          </div>
          <div className="self-stretch py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="size-auto inline-flex flex-col justify-center items-center">
              <div className="text-center justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-normal">100 quizzes</div>
              <div className="text-center justify-center text-gray-500 text-sm font-normal font-['Graphie'] leading-normal">-20 questions per quiz - Saved Quiz 30</div>
            </div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">Monthly</div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="size-6 relative overflow-hidden">
              <div className="size-6 left-0 top-0 absolute bg-rose-500" />
            </div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="size-6 relative overflow-hidden">
              <div className="size-6 left-0 top-0 absolute bg-green-400" />
            </div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">40 games</div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">50 comics</div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">50</div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">Email (Within 48h)</div>
          </div>
          <div className="self-stretch h-28 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="w-44 px-4 py-4 bg-green-500 rounded-xl shadow-[0px_3px_6px_0px_rgba(7,0,110,0.03)] shadow-[inset_0px_4px_6px_0px_rgba(255,255,255,0.40)] shadow-[inset_0px_-2px_2px_0px_rgba(27,35,85,0.07)] outline outline-1 outline-Colors-Neutrals-Neutral-400 flex justify-center items-center gap-1.5">
              <div className="text-center justify-center text-white text-lg font-bold font-['Graphie'] leading-tight">Get started</div>
            </div>
          </div>
        </div>
      </div>

      {/* Standard Plan */}
      <div className="flex-1 border-r border-slate-200 inline-flex flex-col justify-center items-center">
        <div className="self-stretch h-60 p-7 relative border-b border-slate-200 flex flex-col justify-center items-center gap-7">
          <div className="self-stretch inline-flex justify-start items-center gap-4">
            <div className="w-44 text-center justify-center text-zinc-800 text-3xl font-semibold font-['Graphie']">
              Standard<br/>(₹999/mo)
            </div>
          </div>
          <div className="left-[76px] top-[172px] absolute text-center justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">5 Students</div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="self-stretch py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="size-auto inline-flex flex-col justify-center items-center">
              <div className="text-center justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-normal">1000 quizzes</div>
              <div className="text-center justify-center text-gray-500 text-sm font-normal font-['Graphie'] leading-normal">-50 questions per quiz - Saved Quiz 30</div>
            </div>
          </div>
          <div className="self-stretch py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="size-auto inline-flex flex-col justify-center items-center">
              <div className="text-center justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-normal">300 quizzes</div>
              <div className="text-center justify-center text-gray-500 text-sm font-normal font-['Graphie'] leading-normal">-50 questions per quiz - Saved Quiz 30</div>
            </div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">Every 15 Days</div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="size-6 relative overflow-hidden">
              <div className="size-6 left-0 top-0 absolute bg-green-400" />
            </div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="size-6 relative overflow-hidden">
              <div className="size-6 left-0 top-0 absolute bg-green-400" />
            </div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">500 games</div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">500 comics</div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">100</div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">Chat & Email (Within 24h)</div>
          </div>
          <div className="self-stretch h-28 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="w-44 px-4 py-4 bg-green-500 rounded-xl shadow-[0px_3px_6px_0px_rgba(7,0,110,0.03)] shadow-[inset_0px_4px_6px_0px_rgba(255,255,255,0.40)] shadow-[inset_0px_-2px_2px_0px_rgba(27,35,85,0.07)] outline outline-1 outline-Colors-Neutrals-Neutral-400 flex justify-center items-center gap-1.5">
              <div className="text-center justify-center text-white text-lg font-bold font-['Graphie'] leading-tight">Get started</div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Plan */}
      <div className="flex-1 border-r border-slate-200 inline-flex flex-col justify-center items-center">
        <div className="self-stretch h-60 p-7 relative border-b border-slate-200 flex flex-col justify-center items-center gap-7">
          <div className="size-auto inline-flex justify-start items-center gap-4">
            <div className="w-48 text-center justify-center text-zinc-800 text-3xl font-semibold font-['Graphie']">
              Advanced<br/>(₹1999/mo)
            </div>
          </div>
          <div className="left-[76px] top-[172px] absolute text-center justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">7 Students</div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="self-stretch py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="size-auto inline-flex flex-col justify-center items-center">
              <div className="text-center justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-normal">Unlimited quizzes</div>
              <div className="text-center justify-center text-gray-500 text-sm font-normal font-['Graphie'] leading-normal">-Unlimited questions per quiz - Saved Quiz 100</div>
            </div>
          </div>
          <div className="self-stretch py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="size-auto inline-flex flex-col justify-center items-center">
              <div className="text-center justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-normal">Unlimited quizzes</div>
              <div className="text-center justify-center text-gray-500 text-sm font-normal font-['Graphie'] leading-normal">-Unlimited questions per quiz - Saved Quiz 100</div>
            </div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">Weekly</div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="size-6 relative overflow-hidden">
              <div className="size-6 left-0 top-0 absolute bg-green-400" />
            </div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="size-6 relative overflow-hidden">
              <div className="size-6 left-0 top-0 absolute bg-green-400" />
            </div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">Unlimited games</div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">Unlimited comics</div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">Unlimited</div>
          </div>
          <div className="self-stretch h-20 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="justify-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">Priority Support (Within 2h)</div>
          </div>
          <div className="self-stretch h-28 py-5 bg-white border-l border-r border-b border-slate-200 inline-flex justify-center items-center gap-3">
            <div className="w-44 px-4 py-4 bg-green-500 rounded-xl shadow-[0px_3px_6px_0px_rgba(7,0,110,0.03)] shadow-[inset_0px_4px_6px_0px_rgba(255,255,255,0.40)] shadow-[inset_0px_-2px_2px_0px_rgba(27,35,85,0.07)] outline outline-1 outline-Colors-Neutrals-Neutral-400 flex justify-center items-center gap-1.5">
              <div className="text-center justify-center text-white text-lg font-bold font-['Graphie'] leading-tight">Get started</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 