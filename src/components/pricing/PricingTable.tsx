import { pricingPlanBg } from '@/assets';
import React from 'react';

interface PricingTableProps {
  planType: 'parents' | 'teachers';
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
      manualQuizzes: { count: 'Unlimited quizzes', details: '-Unlimited questions per quiz - Saved Quiz 100' },
      aiQuizzes: { count: 'Unlimited quizzes', details: '-Unlimited questions per quiz - Saved Quiz 100' },
      progressReports: 'Weekly',
      realTimeDashboards: true,
      progressSharing: true,
      gameDesigner: 'Unlimited games',
      comicCreator: 'Unlimited comics',
      downloads: 'Unlimited',
      support: 'Priority Support (Within 2h)'
    }
  ];

  const teacherPlans = [
    {
      name: "Free",
      price: "",
      students: "1 Kid",
      manualQuizzes: {
        count: "50 quizzes",
        details: "-10 questions per quiz - Saved Quiz 30",
      },
      aiQuizzes: {
        count: "20 quizzes",
        details: "-10 questions per quiz - Saved Quiz 30",
      },
      progressReports: "Monthly",
      realTimeDashboards: false,
      progressSharing: false,
      gameDesigner: "10 games",
      comicCreator: "20 comics",
      downloads: "20",
      support: "Community Forum",
    },
    {
      name: "Starter",
      price: "(₹299/mo)",
      students: "Up to 20 Students",
      manualQuizzes: {
        count: "200 quizzes",
        details: "-15 questions per quiz - Saved Quiz 50",
      },
      aiQuizzes: {
        count: "50 quizzes",
        details: "-15 questions per quiz - Saved Quiz 50",
      },
      progressReports: "Monthly",
      realTimeDashboards: false,
      progressSharing: true,
      gameDesigner: "25 games",
      comicCreator: "30 comics",
      downloads: "30",
      support: "Email Support",
    },
    {
      name: "Professional",
      price: "(₹599/mo)",
      students: "Up to 50 Students",
      manualQuizzes: {
        count: "500 quizzes",
        details: "-25 questions per quiz - Saved Quiz 100",
      },
      aiQuizzes: {
        count: "150 quizzes",
        details: "-25 questions per quiz - Saved Quiz 100",
      },
      progressReports: "Bi-weekly",
      realTimeDashboards: true,
      progressSharing: true,
      gameDesigner: "100 games",
      comicCreator: "100 comics",
      downloads: "100",
      support: "Email & Chat Support",
    },
    {
      name: "School",
      price: "(₹999/mo)",
      students: "Up to 100 Students",
      manualQuizzes: {
        count: "1000 quizzes",
        details: "-Unlimited questions per quiz - Saved Quiz 200",
      },
      aiQuizzes: {
        count: "300 quizzes",
        details: "-Unlimited questions per quiz - Saved Quiz 200",
      },
      progressReports: "Weekly",
      realTimeDashboards: true,
      progressSharing: true,
      gameDesigner: "Unlimited games",
      comicCreator: "Unlimited comics",
      downloads: "Unlimited",
      support: "Priority Support",
    },
  ];

  const plans = planType === 'parents' ? parentPlans : teacherPlans;

  return (
    <div className="w-full max-w-7xl mx-auto px-30 py-16 relative">
      {/* Background SVG using CSS */}
      <div 
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{
          backgroundImage: `url(${pricingPlanBg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.8,
          backgroundColor: '#e0e0e0'
        }}
      />
      
      <div className="bg-white rounded-xl shadow-[8px_8px_4px_0px_rgba(255,206,0,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-${plans.length + 1}`}>
          {/* Features Column */}
          <div className="border-r border-slate-200">
            <div className="h-60 px-8 py-5 border-b border-slate-200 flex flex-col justify-center items-center gap-3">
              <div className="text-center text-zinc-800 text-3xl font-normal font-['Graphie']">Features</div>
            </div>
            <div className="h-24 px-8 py-5 bg-white border-b border-slate-200 flex justify-start items-center gap-2.5">
              <div className="flex-1 text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">
                Interactive Quizzes<br/>(Manual)
              </div>
            </div>
            <div className="h-24 px-8 py-5 bg-white border-b border-slate-200 flex justify-start items-center gap-2.5">
              <div className="flex-1 text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">
                Interactive Quizzes<br/>(AI-Powered)
              </div>
            </div>
            <div className="h-20 px-8 py-5 bg-white border-b border-slate-200 flex justify-start items-center gap-2.5">
              <div className="text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">
                Progress Reports
              </div>
            </div>
            <div className="h-20 px-8 py-5 bg-white border-b border-slate-200 flex justify-start items-center gap-2.5">
              <div className="flex-1 text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">
                Real-Time<br/>Dashboards
              </div>
            </div>
            <div className="h-20 px-8 py-5 bg-white border-b border-slate-200 flex justify-start items-center gap-2.5">
              <div className="w-48 text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">
                Progress Sharing
              </div>
            </div>
            <div className="h-20 px-8 py-5 bg-white border-b border-slate-200 flex justify-start items-center gap-2.5">
              <div className="flex-1 text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">
                Game Designer<br/>(Manual)
              </div>
            </div>
            <div className="h-20 px-8 py-5 bg-white border-b border-slate-200 flex justify-start items-center gap-2.5">
              <div className="flex-1 text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">
                Comic Creator<br/>(Using EkAI)
              </div>
            </div>
            <div className="h-20 px-8 py-5 bg-white border-b border-slate-200 flex justify-start items-center gap-2.5">
              <div className="flex-1 text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">Downloads</div>
            </div>
            <div className="h-20 px-8 py-5 bg-white border-b border-slate-200 flex justify-start items-center gap-2.5">
              <div className="flex-1 text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">Support</div>
            </div>
            <div className="h-24 px-8 py-5 bg-white flex justify-start items-center gap-2.5">
              <div className="flex-1 text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">Action</div>
            </div>
          </div>

          {/* Plan Columns */}
          {plans.map((plan) => (
            <div key={plan.name} className="border-r border-slate-200">
              <div className="h-60 p-7 border-b border-slate-200 flex flex-col justify-center items-center gap-7">
                <div className="text-center text-zinc-800 text-3xl font-semibold font-['Graphie']">
                  {plan.name}<br/>{plan.price}
                </div>
                <div className="text-center text-zinc-800 text-lg font-normal font-['Graphie'] leading-tight">{plan.students}</div>
              </div>
              <div className="flex flex-col">
                <div className="h-24 py-5 bg-white border-l border-r border-b border-slate-200 flex justify-center items-center gap-3">
                  <div className="flex flex-col justify-center items-center">
                    <div className="text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">{plan.manualQuizzes.count}</div>
                    <div className="text-center text-gray-500 text-xs font-normal font-['Graphie'] leading-4 break-words">{plan.manualQuizzes.details}</div>
                  </div>
                </div>
                <div className="h-24 py-5 bg-white border-l border-r border-b border-slate-200 flex justify-center items-center gap-3">
                  <div className="flex flex-col justify-center items-center">
                    <div className="text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">{plan.aiQuizzes.count}</div>
                    <div className="text-center text-gray-500 text-xs font-normal font-['Graphie'] leading-4 break-words">{plan.aiQuizzes.details}</div>
                  </div>
                </div>
                <div className="h-20 py-5 bg-white border-l border-r border-b border-slate-200 flex justify-center items-center gap-3">
                  <div className="text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">{plan.progressReports}</div>
                </div>
                <div className="h-20 py-5 bg-white border-l border-r border-b border-slate-200 flex justify-center items-center gap-3">
                  <div className={`w-6 h-6 rounded ${plan.realTimeDashboards ? 'bg-green-400' : 'bg-rose-500'}`}></div>
                </div>
                <div className="h-20 py-5 bg-white border-l border-r border-b border-slate-200 flex justify-center items-center gap-3">
                  <div className={`w-6 h-6 rounded ${plan.progressSharing ? 'bg-green-400' : 'bg-rose-500'}`}></div>
                </div>
                <div className="h-20 py-5 bg-white border-l border-r border-b border-slate-200 flex justify-center items-center gap-3">
                  <div className="text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">{plan.gameDesigner}</div>
                </div>
                <div className="h-20 py-5 bg-white border-l border-r border-b border-slate-200 flex justify-center items-center gap-3">
                  <div className="text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">{plan.comicCreator}</div>
                </div>
                <div className="h-20 py-5 bg-white border-l border-r border-b border-slate-200 flex justify-center items-center gap-3">
                  <div className="text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">{plan.downloads}</div>
                </div>
                <div className="h-20 py-5 bg-white border-l border-r border-b border-slate-200 flex justify-center items-center gap-3">
                  <div className="text-center text-[#64637E] text-sm font-normal font-['Graphie'] leading-6 break-words">{plan.support}</div>
                </div>
                <div className="h-24 py-5 bg-white border-l border-r border-b border-slate-200 flex justify-center items-center gap-3">
                  <div className="w-44 px-4 py-4 bg-green-500 rounded-xl shadow-[0px_3px_6px_0px_rgba(7,0,110,0.03)] shadow-[inset_0px_4px_6px_0px_rgba(255,255,255,0.40)] shadow-[inset_0px_-2px_2px_0px_rgba(27,35,85,0.07)] outline outline-1 outline-Colors-Neutrals-Neutral-400 flex justify-center items-center gap-1.5">
                    <div className="text-center text-white text-lg font-bold font-['Graphie'] leading-tight">Get started</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 