import Footer from '@/components/Footer';
import React from 'react'
// import Image from 'next/image'

export const dynamic = "force-static"

export default function Parent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl text-green-300 font-bold mb-6">
                Happier Kids, <br />
                <span className="italic text-white">Smarter Learning!</span>
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                Eklavya transforms screen time into the most valuable part of
                your child&apos;s day, empowering you and delighting them.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-purple-700 px-8 py-3 rounded-xs font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className=" text-white px-8 py-3 rounded-xs font-semibold hover:bg-white hover:text-purple-700 transition-colors">
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

      {/* Learning That Feels Like Play Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Learning That Feels Like Play
            </h2>
            <p className="text-xl text-gray-600">
              Where They&apos;ll be Asking for More Homework everyday!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Engaging Games */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                Engaging Games
              </h3>
              <p className="text-gray-600">
                From solving math puzzles to conquering creative writing quests,
                every activity is designed to teach while they play.
              </p>
            </div>

            {/* Comics */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-4">Comics</h3>
              <p className="text-gray-600">
                Comics which turn boring topics into fun ideas.
              </p>
            </div>

            {/* Curriculum-Aligned Lessons */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                Curriculum-Aligned Lessons
              </h3>
              <p className="text-gray-600">
                Upload schoolbooks or let Eklavya&apos;s AI craft lessons
                tailored to your child&apos;s needs.
              </p>
            </div>

            {/* Interactive Adventures */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                Interactive Adventures
              </h3>
              <p className="text-gray-600">
                Turn learning into exciting challenges that your child
                can&apos;t wait to explore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safe and Secure Space Section */}
      <section className="py-20 bg-gradient-to-br from-green-100 to-blue-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              A Safe and Secure Space for Growth
            </h2>
            <p className="text-xl text-gray-600">
              Education Without Interruptions, Distractions, yet so Fun
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Grid Placeholder */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-8 rounded-xl shadow-sm aspect-square flex items-center justify-center">
                <span className="text-gray-400 text-sm">Image Placeholder</span>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm aspect-square flex items-center justify-center">
                <span className="text-gray-400 text-sm">Image Placeholder</span>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm aspect-square flex items-center justify-center">
                <span className="text-gray-400 text-sm">Image Placeholder</span>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm aspect-square flex items-center justify-center">
                <span className="text-gray-400 text-sm">Image Placeholder</span>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🚫</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Ad-Free Learning
                  </h3>
                  <p className="text-gray-600">
                    No ads or pop-ups—just pure, focused education.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📶</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Offline Accessibility
                  </h3>
                  <p className="text-gray-600">
                    Keep your child&apos;s education uninterrupted, even on the
                    go or in areas with low connectivity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🔒</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Privacy and Security
                  </h3>
                  <p className="text-gray-600">
                    Your child&apos;s data and progress remain protected at all
                    times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Involved Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Stay Involved and Informed
            </h2>
            <p className="text-xl text-gray-600">
              Know Exactly What They&apos;re Learning & When They Need Help
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Detailed Progress Reports
              </h3>
              <p className="text-gray-600">
                Understand what your child is learning, their achievements, and
                where they might need extra help.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Skill Balancing Insights
              </h3>
              <p className="text-gray-600">
                Identify their strengths and support areas that need
                improvement.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Instant Notifications
              </h3>
              <p className="text-gray-600">
                Get real-time updates on their milestones and progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Celebrate Every Achievement Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500 to-purple-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Celebrate Every Achievement ⚡
            </h2>
            <p className="text-xl text-purple-100">
              Watch Their Confidence Grow With Every Challenge They Overcome
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl text-gray-800">
              <h3 className="text-2xl font-bold mb-4">Track Their Wins</h3>
              <p className="text-gray-600">
                Watch their confidence grow as they conquer challenges and
                master skills.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl text-gray-800">
              <h3 className="text-2xl font-bold mb-4">Share Milestones</h3>
              <p className="text-gray-600">
                Celebrate their progress with friends and family to keep them
                motivated.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl text-gray-800">
              <h3 className="text-2xl font-bold mb-4">Encourage Curiosity</h3>
              <p className="text-gray-600">
                From coding programs to math concepts, we keep them excited to
                learn.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Try for free
            </button>
          </div>
        </div>

        {/* Decorative elements placeholders */}
        <div className="absolute top-10 left-10 w-8 h-8 bg-white/20 rounded-full"></div>
        <div className="absolute top-20 right-10 w-16 h-16 bg-white/10 rounded-lg"></div>
        <div className="absolute bottom-10 left-16 w-12 h-12 bg-white/15 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-white/10 rounded-lg"></div>
      </section>

      {/* Be in Control Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Be in Control, Every Step of the Way
            </h2>
            <p className="text-xl text-gray-600">
              Set Smart Limits That Encourage More Learning, Less Scrolling
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Custom Screen Time Schedules
              </h3>
              <p className="text-gray-600">
                Decide when learning happens and ensure a healthy balance
                between study and play.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Learning-Only Mode
              </h3>
              <p className="text-gray-600">
                Lock the tablet into education mode to minimize distractions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Flexible Management
              </h3>
              <p className="text-gray-600">
                Tailor their learning experience to suit your family&apos;s
                routine and priorities.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative background elements placeholders */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-100 rounded-full opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-green-100 rounded-full opacity-50"></div>
      </section>

      <Footer />
    </div>
  );
}
