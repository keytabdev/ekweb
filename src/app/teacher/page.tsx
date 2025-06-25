import Footer from '@/components/Footer';
import React from 'react'

export const dynamic = "force-static"

export default function Teacher() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-400 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="pl-10">
              <h1 className="text-5xl text-green-300 font-bold mb-6">
                Smarter Tools, <br />
                <span className="italic text-white">Inspired Teaching!</span>
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                With Eklavya, you&apos;re not just teaching, you&apos;re
                creating impactful, unforgettable learning experiences. Start
                your journey with us today.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-purple-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className=" text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-purple-700 transition-colors">
                  Check free material
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-4 border-white overflow-hidden mx-auto">
                <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                  <span className="text-6xl">👨‍👩‍👧‍👦</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Engage Every Student, Every Time
            </h2>
            <p className="text-xl text-gray-600">
              Innovative Features Designed to Keep Learning Fun and Impactful.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-green-100 p-8 rounded-xl shadow-[4px_4px_12px_rgba(0,0,0,0.1)] border border-green-200 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Gamified Learning Paths
              </h3>
              <p className="text-gray-600">
                Make learning rewarding by assigning gaming points to your quizzes, books and challenges. Make it competitive with our leaderboard.
              </p>
            </div>

            <div className="bg-purple-100 p-8 rounded-xl shadow-[4px_4px_12px_rgba(0,0,0,0.1)] border border-purple-200 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Make Learning Interactive
              </h3>
              <p className="text-gray-600">
                Enrich your lessons with dynamic content like interactive videos, games, comics, quizzes, and more to keep students engaged and excited.
              </p>
            </div>

            <div className="bg-yellow-100 p-8 rounded-xl shadow-[4px_4px_12px_rgba(0,0,0,0.1)] border border-yellow-200 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Learning Outcomes
              </h3>
              <p className="text-gray-600">
                Assign measurable learning outcomes to courses and lessons, making it easier to track progress and assess student understanding effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Lessons Effortlessly Section */}
      <section className="py-20 bg-white relative overflow-hidden mx-8 my-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Transform Lessons Effortlessly
            </h2>
            <p className="text-xl text-gray-600">
              Innovative Tools to Simplify, Gamify, and Enrich Learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
            {/* Left side - Features */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    AI-Powered Lesson Creation
                  </h3>
                  <p className="text-gray-600">
                    Activities are designed to match school curriculums, ensuring your child stays on track while developing essential skills.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Gamified Learning Made Simple
                  </h3>
                  <p className="text-gray-600">
                    Choose from our extensive library of ready-to-play games, craft your own with an intuitive drag-and-drop tool, or let Eklavya AI handle it—just describe the game you want, and it&apos;s ready in no time!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Explainer Videos Made Easy
                  </h3>
                  <p className="text-gray-600">
                    Create engaging explainer videos using our AI to simplify even the toughest topics and make them easy for your students to understand.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Turn Lessons Into Comics
                  </h3>
                  <p className="text-gray-600">
                    Make History or any subject exciting by turning it into a comic! Write your story, and our AI-powered comic creator transforms it into an entertaining and educational comic strip.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Built-In Library
                  </h3>
                  <p className="text-gray-600">
                    Access a vast library of ready-made courses and lesson plans tailored to various age groups and subjects.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Images placeholder */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 h-48 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 h-48 flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 h-48 flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-6 h-48 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create a Thriving Classroom Section */}
      <section className="py-20 relative overflow-hidden mx-8 my-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            {/* Left SVG placeholder */}
            <div className="absolute left-8 top-8">
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="96" height="96" rx="12" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="2"/>
                <text x="48" y="52" textAnchor="middle" className="text-sm fill-gray-500">Left SVG</text>
              </svg>
            </div>
            
            {/* Right SVG placeholder */}
            <div className="absolute right-8 top-8">
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="96" height="96" rx="12" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="2"/>
                <text x="48" y="52" textAnchor="middle" className="text-sm fill-gray-500">Right SVG</text>
              </svg>
            </div>

            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Create a Thriving Classroom
            </h2>
            <p className="text-xl text-gray-600">
              Foster a Secure, Connected, and Focused Learning Environment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Safe Learning Environment
              </h3>
              <p className="text-gray-600">
                No ads, no distractions—just pure, focused education.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Parental Collaboration
              </h3>
              <p className="text-gray-600">
                Share student progress reports to keep parents involved and supportive.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Offline Access
              </h3>
              <p className="text-gray-600">
                Keep lessons going even without an internet connection.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
              Try for free
            </button>
          </div>
        </div>
      </section>

      {/* Save Time, Focus More on Teaching Section */}
      <section className="py-20 relative overflow-hidden mx-8 my-16">
        {/* Background Wave Placeholder */}
        <div className="absolute inset-0">
          <svg width="100%" height="100%" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1200" height="600" fill="#1E3A8A" opacity="0.1" stroke="#1E3A8A" strokeWidth="2" strokeDasharray="10,10"/>
            <text x="600" y="300" textAnchor="middle" className="text-lg fill-blue-600">Blue Wave Background Placeholder</text>
          </svg>
        </div>

        {/* Cloud Placeholders */}
        <div className="absolute top-4 left-16">
          <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="50" rx="25" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1"/>
            <text x="40" y="28" textAnchor="middle" className="text-xs fill-gray-500">Cloud</text>
          </svg>
        </div>
        
        <div className="absolute top-8 right-20">
          <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="60" rx="30" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1"/>
            <text x="50" y="33" textAnchor="middle" className="text-xs fill-gray-500">Cloud</text>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Save Time, Focus More on Teaching
            </h2>
            <p className="text-xl text-white">
              Streamline Your Workflow and Devote More Time to Inspiring Young Minds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              {/* Automated Grading Image Placeholder */}
              <div className="mb-6 flex justify-center">
                <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="200" height="150" rx="12" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="2"/>
                  <text x="100" y="75" textAnchor="middle" className="text-sm fill-gray-500">Automated Grading</text>
                  <text x="100" y="95" textAnchor="middle" className="text-sm fill-gray-500">Image Placeholder</text>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Automated Grading
              </h3>
              <p className="text-white">
                Say goodbye to tedious assessments. Eklavya handles them for you.
              </p>
            </div>

            <div className="text-center">
              {/* Simplified Lesson Planning Image Placeholder */}
              <div className="mb-6 flex justify-center">
                <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="200" height="150" rx="12" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="2"/>
                  <text x="100" y="75" textAnchor="middle" className="text-sm fill-gray-500">Lesson Planning</text>
                  <text x="100" y="95" textAnchor="middle" className="text-sm fill-gray-500">Image Placeholder</text>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Simplified Lesson Planning
              </h3>
              <p className="text-white">
                Plan entire terms in minutes with intuitive tools that keep you organized.
              </p>
            </div>

            <div className="text-center">
              {/* Pre-Made Resources Image Placeholder */}
              <div className="mb-6 flex justify-center">
                <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="200" height="150" rx="12" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="2"/>
                  <text x="100" y="75" textAnchor="middle" className="text-sm fill-gray-500">Pre-Made Resources</text>
                  <text x="100" y="95" textAnchor="middle" className="text-sm fill-gray-500">Image Placeholder</text>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Pre-Made Resources
              </h3>
              <p className="text-white">
                Leverage Eklavya&apos;s repository of ready-to-use lessons, activities and quizzes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Monitor Growth Like Never Before Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden mx-8 my-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 relative">
            {/* Paper Airplane Placeholder - Top Right */}
            <div className="absolute top-0 right-0">
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="80" rx="8" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1"/>
                <text x="60" y="42" textAnchor="middle" className="text-xs fill-gray-500">Paper Airplane</text>
              </svg>
            </div>



            <h2 className="text-4xl font-bold text-gray-800 mb-4 mt-16">
              Monitor Growth Like Never Before
            </h2>
            <p className="text-xl text-gray-600">
              Track each student&apos;s progress with precision and purpose
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Real-Time Dashboards */}
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8 text-center relative">  
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="4" fill="white" stroke="#A855F7" strokeWidth="1"/>
                    <text x="16" y="18" textAnchor="middle" className="text-xs fill-purple-600">📊</text>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-purple-600 mb-4 mt-4">
                Real-Time Dashboards
              </h3>
              <p className="text-gray-600">
                Track student performance at a glance, identifying their strengths and areas needing improvement.
              </p>
            </div>

            {/* Balanced Skill Development */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="4" fill="white" stroke="#3B82F6" strokeWidth="1"/>
                    <text x="16" y="18" textAnchor="middle" className="text-xs fill-blue-600">⚖️</text>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-4 mt-4">
                Balanced Skill Development
              </h3>
              <p className="text-gray-600">
                Help students build confidence in weaker areas while excelling in their strengths.
              </p>
            </div>

            {/* Data-Driven Insights */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="4" fill="white" stroke="#F97316" strokeWidth="1"/>
                    <text x="16" y="18" textAnchor="middle" className="text-xs fill-orange-600">📈</text>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-4 mt-4">
                Data-Driven Insights
              </h3>
              <p className="text-gray-600">
                Use actionable analytics to refine your lessons and maximize learning outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
