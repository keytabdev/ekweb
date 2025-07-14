import React from 'react';

interface PlanSelectorProps {
  selectedPlan: 'parents' | 'teachers';
  onPlanChange: (plan: 'parents' | 'teachers') => void;
}

export default function PlanSelector({ selectedPlan, onPlanChange }: PlanSelectorProps) {
  return (
    <div className="w-full flex justify-center items-center py-8 relative z-20">
      <div className="inline-flex justify-start items-center gap-6">
        <button
          onClick={() => onPlanChange('parents')}
          className={`size-auto px-5 py-3 rounded-[50px] outline outline-[1.50px] outline-offset-[-1.50px] transition-all duration-200 flex justify-center items-center gap-2 cursor-pointer ${
            selectedPlan === 'parents'
              ? 'bg-indigo-950 outline-indigo-950'
              : 'bg-transparent outline-neutral-700 hover:bg-gray-50'
          }`}
        >
          <div className={`text-base font-semibold font-['Graphie'] leading-tight ${
            selectedPlan === 'parents' ? 'text-white' : 'text-neutral-700'
          }`}>
            Parents
          </div>
        </button>
        <button
          onClick={() => onPlanChange('teachers')}
          className={`size-auto px-5 py-3 rounded-[50px] outline outline-[1.50px] outline-offset-[-1.50px] transition-all duration-200 flex justify-center items-center gap-2 cursor-pointer ${
            selectedPlan === 'teachers'
              ? 'bg-indigo-950 outline-indigo-950'
              : 'bg-transparent outline-neutral-700 hover:bg-gray-50'
          }`}
        >
          <div className={`text-base font-semibold font-['Graphie'] leading-tight ${
            selectedPlan === 'teachers' ? 'text-white' : 'text-neutral-700'
          }`}>
            Teachers
          </div>
        </button>
      </div>
    </div>
  );
} 