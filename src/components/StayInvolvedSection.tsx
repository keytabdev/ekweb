import React from 'react'
import Image from 'next/image'
import { cloudImage } from '@/assets'

export default function StayInvolvedSection() {
  return (
    <section className="py-20 md:py-40 lg:py-80 bg-white relative overflow-hidden">
      {/* Decorative cloud elements */}
      <div className="absolute top-12 md:top-24 left-2 md:left-4 w-32 h-32 md:w-60 md:h-60 z-10">
        <Image
          src={cloudImage}
          alt="Cloud decoration"
        fill
          className="object-contain"
        />
      </div>
      <div className="absolute top-8 md:top-12 right-2 md:right-4 w-32 h-32 md:w-60 md:h-60 z-10">
        <Image
          src={cloudImage}
          alt="Cloud decoration"
          fill
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Stay Involved and Informed
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Know Exactly What They&apos;re Learning & When They Need Help
          </p>

          <br />
        </div>

        <div className="grid mt-8 md:mt-10 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 md:p-8 border border-gray-200 rounded-xl shadow-md shadow-blue-200/30 hover:shadow-lg hover:shadow-blue-600/40 transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Detailed Progress Reports
            </h3>
            <p className="text-gray-600">
              Understand what your child is learning, their achievements, and
              where they might need extra help.
            </p>
          </div>

          <div className="text-center p-6 md:p-8 border border-gray-200 rounded-xl shadow-md shadow-blue-200/30 hover:shadow-lg hover:shadow-blue-600/40 transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Skill Balancing Insights
            </h3>
            <p className="text-gray-600">
              Identify their strengths and support areas that need
              improvement.
            </p>
          </div>

          <div className="text-center p-6 md:p-8 border border-gray-200 rounded-xl shadow-md shadow-blue-200/30 hover:shadow-lg hover:shadow-blue-600/40 transition-shadow">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Instant Notifications
            </h3>
            <p className="text-gray-600">
              Get real-time updates on their milestones and progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 