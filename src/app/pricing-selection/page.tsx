'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { checkCircle, crossCircle } from '@/assets';
import AuthBackground from '@/components/shared/AuthBackground';

export default function PricingSelectionPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

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

  const featureRows = [
    { key: 'manualQuizzes', label: 'Interactive Quizzes (Manual)' },
    { key: 'aiQuizzes', label: 'Interactive Quizzes (AI-Powered)' },
    { key: 'progressReports', label: 'Progress Reports' },
    { key: 'realTimeDashboards', label: 'Real-Time Dashboards' },
    { key: 'progressSharing', label: 'Progress Sharing' },
    { key: 'gameDesigner', label: 'Game Designer (Manual)' },
    { key: 'comicCreator', label: 'Comic Creator (Using EkAI)' },
    { key: 'downloads', label: 'Downloads' },
    { key: 'support', label: 'Support' },
  ];

  // Type guard for object with count/details
  function hasCountDetails(obj: unknown): obj is { count?: string; details?: string } {
    return (
      typeof obj === 'object' &&
      obj !== null &&
      ('count' in obj || 'details' in obj)
    );
  }

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
  };

  const handleContinue = () => {
    if (selectedPlan) {
      // Navigate to child details page with selected plan
      router.push(`/child-details?plan=${encodeURIComponent(selectedPlan)}`);
    }
  };

  const handleSkip = () => {
    // Navigate to dashboard or wherever you want to go when skipping
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-green-700 relative overflow-hidden">
      {/* Background decorative elements */}
      <AuthBackground />

      {/* Navigation buttons */}
      <div className="relative z-10 flex justify-between items-start p-8">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-white text-2xl font-bold hover:text-gray-200 transition-colors underline"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 12H5M12 19L5 12L12 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </button>

        {/* Skip button */}
        <button
          onClick={handleSkip}
          className="inline-flex items-center gap-2 text-white text-2xl font-bold hover:text-gray-200 transition-colors underline"
        >
          Skip
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex justify-end items-start pt-16 pr-16 lg:pt-20 lg:pr-20 xl:pt-24 xl:pr-24 2xl:pt-32 2xl:pr-32">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-white text-4xl font-bold font-['Graphie'] mb-4">
              Choose Your Plan
            </h1>
            <p className="text-white/80 text-lg font-['Graphie']">
              Select the perfect plan for your child&apos;s learning journey
            </p>
          </div>

          {/* Pricing Table */}
          <div className="bg-white/95 rounded-xl shadow-[8px_8px_4px_0px_rgba(255,206,0,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
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
              {parentPlans.map((planObj, idx) => {
                const plan = planObj as Record<string, unknown>;
                const isLast = idx === parentPlans.length - 1;
                const isSelected = selectedPlan === plan.name;
                return (
                  <div key={plan.name as string} className={isLast ? '' : 'border-r border-slate-200'}>
                    <div className={`h-60 p-7 border-b border-slate-200 flex flex-col justify-center items-center gap-7 ${isSelected ? 'bg-green-50' : ''}`}>
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
                        <button
                          onClick={() => {
                            if (isSelected) {
                              handlePlanSelect(plan.name as string);
                            } else {
                              handlePlanSelect(plan.name as string);
                              router.push(`/child-details?plan=${encodeURIComponent(plan.name as string)}`);
                            }
                          }}
                          className={`w-44 px-4 py-4 rounded-xl shadow-[0px_3px_6px_0px_rgba(7,0,110,0.03)] shadow-[inset_0px_4px_6px_0px_rgba(255,255,255,0.40)] shadow-[inset_0px_-2px_2px_0px_rgba(27,35,85,0.07)] outline outline-1 outline-Colors-Neutrals-Neutral-400 flex justify-center items-center gap-1.5 transition-colors ${
                            isSelected 
                              ? 'bg-eklavya-dark-green text-white' 
                              : 'bg-green-500 text-white hover:bg-green-600'
                          }`}
                        >
                          <div className="text-center text-lg font-bold font-['Graphie'] leading-tight">
                            {isSelected ? 'Selected' : 'Get Started'}
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Continue Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleContinue}
              disabled={!selectedPlan}
              className={`w-64 h-16 rounded-[40px] text-white text-2xl font-medium font-['Graphie'] transition-colors ${
                selectedPlan 
                  ? 'bg-eklavya-dark-green hover:bg-green-800' 
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 