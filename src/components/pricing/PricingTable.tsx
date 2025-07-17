import React from 'react';
import Image from 'next/image';
import { pricingPlanBg, checkCircle, crossCircle } from '@/assets';

interface PricingTableProps {
  planType: 'parents' | 'teachers';
}

// Type guard for object with count/details
function hasCountDetails(obj: unknown): obj is { count?: string; details?: string } {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    ('count' in obj || 'details' in obj)
  );
}

export default function PricingTable({ planType }: PricingTableProps) {
  const parentPlans = [
    {
      name: 'Free',
      price: '',
      students: '1 Student',
      manualQuizzes: { count: '50 quizzes', details: '-10 questions per quiz - Saved Quiz 30' },
      aiQuizzes: { count: '20 quizzes', details: '-10 questions per quiz - Saved Quiz 30' },
      progressReports: 'Monthly',
      realTimeDashboards: false,
      progressSharing: false,
      gameDesigner: '10 games',
      comicCreator: '20 comics',
      downloads: '20',
      support: 'Community Forum'
    },
    {
      name: 'Basic',
      price: '(₹499/mo)',
      students: '3 Students',
      manualQuizzes: { count: '500 quizzes', details: '-20 questions per quiz - Saved Quiz 30' },
      aiQuizzes: { count: '100 quizzes', details: '-20 questions per quiz - Saved Quiz 30' },
      progressReports: 'Monthly',
      realTimeDashboards: false,
      progressSharing: true,
      gameDesigner: '40 games',
      comicCreator: '50 comics',
      downloads: '50',
      support: 'Email (Within 48h)'
    },
    {
      name: 'Standard',
      price: '(₹999/mo)',
      students: '5 Students',
      manualQuizzes: { count: '1000 quizzes', details: '-50 questions per quiz - Saved Quiz 30' },
      aiQuizzes: { count: '300 quizzes', details: '-50 questions per quiz - Saved Quiz 30' },
      progressReports: 'Every 15 Days',
      realTimeDashboards: true,
      progressSharing: true,
      gameDesigner: '500 games',
      comicCreator: '500 comics',
      downloads: '100',
      support: 'Chat & Email (Within 24h)'
    },
    {
      name: 'Advanced',
      price: '(₹1999/mo)',
      students: '7 Students',
      manualQuizzes: { count: '3000 quizzes', details: '-100 questions per quiz - Saved Quiz 30' },
      aiQuizzes: { count: '1200 quizzes', details: '-100 questions per quiz - Saved Quiz 30' },
      progressReports: 'Daily',
      realTimeDashboards: true,
      progressSharing: true,
      gameDesigner: '1000 games',
      comicCreator: '1000 comics',
      downloads: '200',
      support: 'Dedicated Manager (Within 12h)'
    }
  ];

  const teacherPlans = [
    {
      name: 'Free',
      price: '',
      students: '1 Kid',
      manualQuizzes: { count: '50 quizzes', details: '-10 questions per quiz - Saved Quiz 30' },
      aiQuizzes: { count: '20 quizzes', details: '-10 questions per quiz - Saved Quiz 30' },
      progressReports: 'Monthly',
      realTimeDashboards: false,
      progressSharing: false,
      gameDesigner: '10 games',
      coding: '10 codes',
      comicCreator: '20 comics',
      videoGenerator: '20 videos',
      courseBuilder: '10 courses',
      downloads: undefined,
      support: 'Community Forum',
    },
    {
      name: 'Basic',
      price: '(₹499/mo)',
      students: '3 Kid',
      manualQuizzes: { count: '500 quizzes', details: '-20 questions per quiz - Saved Quiz 30' },
      aiQuizzes: { count: '100 quizzes', details: '-20 questions per quiz - Saved Quiz 30' },
      progressReports: 'Monthly',
      realTimeDashboards: false,
      progressSharing: true,
      gameDesigner: '40 games',
      coding: '50 codes',
      comicCreator: '50 comics',
      videoGenerator: '50 videos',
      courseBuilder: '50 courses',
      downloads: undefined,
      support: 'Email (Within 48h)',
    },
    {
      name: 'Standard',
      price: '(₹999/mo)',
      students: '10 Kid',
      manualQuizzes: { count: '1000 quizzes', details: '-50 questions per quiz - Saved Quiz 30' },
      aiQuizzes: { count: '300 quizzes', details: '-50 questions per quiz - Saved Quiz 30' },
      progressReports: 'Every 15 Days',
      realTimeDashboards: true,
      progressSharing: true,
      gameDesigner: '500 games',
      coding: '100 codes',
      comicCreator: '500 comics',
      videoGenerator: '500 videos',
      courseBuilder: '550 courses',
      downloads: undefined,
      support: 'Chat & Email (Within 24h)',
    },
    {
      name: 'Advanced',
      price: '(₹1999/mo)',
      students: '20 Kid',
      manualQuizzes: { count: '3000 quizzes', details: '-100 questions per quiz - Saved Quiz 30' },
      aiQuizzes: { count: '1200 quizzes', details: '-100 questions per quiz - Saved Quiz 30' },
      progressReports: 'Daily',
      realTimeDashboards: true,
      progressSharing: true,
      gameDesigner: '1000 games',
      coding: '500 codes',
      comicCreator: '1000 comics',
      videoGenerator: '1000 videos',
      courseBuilder: '1000 courses',
      downloads: undefined,
      support: 'Dedicated Manager (Within 12h)',
    },
  ];

  const plans = planType === 'parents' ? parentPlans : teacherPlans;

  // Define feature rows based on planType
  const featureRows: { key: string; label: string }[] = planType === 'parents'
    ? [
        { key: 'manualQuizzes', label: 'Interactive Quizzes (Manual)' },
        { key: 'aiQuizzes', label: 'Interactive Quizzes (AI-Powered)' },
        { key: 'progressReports', label: 'Progress Reports' },
        { key: 'realTimeDashboards', label: 'Real-Time Dashboards' },
        { key: 'progressSharing', label: 'Progress Sharing' },
        { key: 'gameDesigner', label: 'Game Designer (Manual)' },
        { key: 'comicCreator', label: 'Comic Creator (Using EkAI)' },
        { key: 'downloads', label: 'Downloads' },
        { key: 'support', label: 'Support' },
      ]
    : [
        { key: 'manualQuizzes', label: 'Manual Quizzes' },
        { key: 'aiQuizzes', label: 'AI-Powered Quizzes' },
        { key: 'progressReports', label: 'Progress Reports' },
        { key: 'realTimeDashboards', label: 'Real-Time Dashboards' },
        { key: 'progressSharing', label: 'Progress Sharing' },
        { key: 'gameDesigner', label: 'Game Designer' },
        { key: 'coding', label: 'Coding (Manual)' },
        { key: 'comicCreator', label: 'Comic Creator (EkAI)' },
        { key: 'videoGenerator', label: 'Video Generator (EkAI)' },
        { key: 'courseBuilder', label: 'Course Builder (Manual)' },
        { key: 'support', label: 'Support' },
      ];

  return (
    <div className="w-full max-w-7xl mx-auto py-16 relative mb-20">
      {/* Background SVG */}
      <div
        className={`absolute inset-0 ${planType === 'teachers' ? 'scale-y-140' : 'scale-y-120'} xl:scale-x-140 z-0 overflow-visible`}
        style={{
          transformOrigin: 'center',
          left: '-10%',
          right: '-7%',
          top: planType === 'teachers' ? '-5%' : '-10%',
        }}
      >
        <Image
          src={pricingPlanBg}
          alt="Pricing background"
          width={1850}
          height={planType === 'teachers' ? 1400 : 1363}
          style={{
            flexShrink: 0,
            minWidth: '100%',
            height: planType === 'teachers' ? '1400px' : '1363px',
            objectPosition: 'center',
          }}
          priority
        />
      </div>

      <div className="bg-white/95 rounded-xl shadow-[8px_8px_4px_0px_rgba(255,206,0,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden relative z-10" style={{ display: 'flex', width: '1200px', alignItems: 'flex-start' }}>
        <div className={`grid grid-cols-1 lg:grid-cols-${plans.length + 1}`}>
          {/* Features Column */}
          <div className="border-r border-slate-200">
            <div className="h-60 px-8 py-5 border-b border-slate-200 flex flex-col justify-center items-center gap-3">
              <div className="text-center text-zinc-800 text-3xl font-normal font-['Graphie']">
                Features
              </div>
            </div>
            {featureRows.map((row, idx) => (
              <div
                key={String(row.key)}
                className={`px-8 py-5 bg-white border-b border-slate-200 flex justify-start items-center gap-2.5 ${idx === featureRows.length - 1 ? '' : ''}`}
                style={{ height: idx < 2 ? 96 : 80 }}
              >
                <div className="flex-1 text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">
                  {String(row.label)}
                </div>
              </div>
            ))}
            {/* Action row */}
            <div className="h-24 px-8 py-5 bg-white flex justify-start items-center gap-2.5">
              <div className="flex-1 text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">
                Action
              </div>
            </div>
          </div>

          {/* Plan Columns */}
          {plans.map((planObj, idx) => {
            const plan = planObj as Record<string, unknown>;
            const isLast = idx === plans.length - 1;
            return (
              <div key={plan.name as string} className={isLast ? '' : 'border-r border-slate-200'}>
                <div className="h-60 p-7 border-b border-slate-200 flex flex-col justify-center items-center gap-7">
                  <div className="text-center text-zinc-800 text-3xl font-semibold font-['Graphie']">
                    {plan.name as string}
                    <br />
                    {plan.price as string}
                  </div>
                  <div className="text-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">
                    {plan.students as string}
                  </div>
                </div>
                <div className="flex flex-col">
                  {featureRows.map((row) => {
                    const keyStr: string = row.key;
                    const value: unknown = plan[keyStr];
                    // Render booleans as check/cross circles
                    if (typeof value === 'boolean') {
                      return (
                        <div key={keyStr} className="h-20 py-5 bg-white border-l border-r border-b border-slate-200 flex justify-center items-center gap-3">
                          <Image
                            src={value ? checkCircle : crossCircle}
                            alt={value ? "Available" : "Not available"}
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                        </div>
                      );
                    }
                    // Render objects with count/details
                    if (hasCountDetails(value)) {
                      const countStr = value.count !== undefined && value.count !== null && String(value.count) !== '' ? String(value.count) : '-';
                      const detailsStr = value.details !== undefined && value.details !== null && String(value.details) !== '' ? String(value.details) : '';
                      return (
                        <div key={keyStr} className={`h-24 py-5 bg-white border-l border-r border-b border-slate-200 flex justify-center items-center gap-3`}>
                          <div className="flex flex-col justify-center items-center">
                            <div className="text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">{String(countStr)}</div>
                            <div className="text-center text-gray-500 text-xs font-normal font-['Graphie'] leading-4 break-words">{String(detailsStr)}</div>
                          </div>
                        </div>
                      );
                    }
                    // Render normal string or missing value
                    const strValue = value !== undefined && value !== null && String(value) !== '' ? String(value) : '-';
                    return (
                      <div key={keyStr} className="h-20 py-5 bg-white border-l border-r border-b border-slate-200 flex justify-center items-center gap-3">
                        <div className="text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">
                          {String(strValue)}
                        </div>
                      </div>
                    );
                  })}
                  {/* Action row */}
                  <div className="h-24 py-5 bg-white border-l border-r border-b border-slate-200 flex justify-center items-center gap-3">
                    <div className="w-44 px-4 py-4 bg-green-500 rounded-xl shadow-[0px_3px_6px_0px_rgba(7,0,110,0.03)] shadow-[inset_0px_4px_6px_0px_rgba(255,255,255,0.40)] shadow-[inset_0px_-2px_2px_0px_rgba(27,35,85,0.07)] outline outline-1 outline-Colors-Neutrals-Neutral-400 flex justify-center items-center gap-1.5">
                      <div className="text-center text-white text-lg font-bold font-['Graphie'] leading-tight">
                        Get started
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 