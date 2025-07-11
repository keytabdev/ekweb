import React from 'react';

export default function PlanSelector() {
  return (
    <div className="w-full flex justify-center items-center py-8">
      <div className="inline-flex justify-start items-center gap-6">
        <div className="size-auto px-5 py-3 bg-indigo-950 rounded-[50px] outline outline-[1.50px] outline-offset-[-1.50px] outline-indigo-950 flex justify-center items-center gap-2">
          <div className="justify-start text-white text-base font-semibold font-['Graphie'] leading-tight">Parents</div>
        </div>
        <div className="size-auto px-5 py-3 rounded-[50px] outline outline-2 outline-offset-[-2px] outline-neutral-700 flex justify-center items-center gap-2">
          <div className="justify-start text-neutral-700 text-base font-semibold font-['Graphie'] leading-tight">Teachers</div>
        </div>
      </div>
    </div>
  );
} 