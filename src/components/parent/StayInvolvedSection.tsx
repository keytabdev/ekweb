import React from 'react'
import Image from 'next/image'
import { cloudImage } from '@/assets'

export default function StayInvolvedSection() {
  return (
    <section className="py-16 md:py-28 lg:py-50 bg-white relative overflow-hidden">
      {/* Decorative cloud elements */}
      <div className="absolute top-12 md:top-24 left-2 md:left-4 w-20 h-20 md:w-40 md:h-40 z-10">
        <Image
          src={cloudImage}
          alt="Cloud decoration"
        fill
          className="object-contain"
        />
      </div>
      <div className="absolute top-8 md:top-12 right-2 md:right-4 w-20 h-20 md:w-40 md:h-40 z-10">
        <Image
          src={cloudImage}
          alt="Cloud decoration"
          fill
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-10 md:mb-12">
          <h2 
            className="mb-4"
            style={{
              color: '#1A1A1A',
              textAlign: 'center',
              fontSize: '36px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '44px',
              letterSpacing: '0.36px'
            }}
          >
            Stay Involved and Informed
          </h2>
          <p 
            style={{
              color: '#1A1A1A',
              textAlign: 'center',
              fontSize: '21px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '28px'
            }}
          >
            Know Exactly What They&apos;re Learning & When They Need Help
          </p>
        </div>

        <div className="grid mt-7 md:mt-9 md:grid-cols-3 gap-5 md:gap-7 max-w-6xl mx-auto">
          <div 
            className="text-center p-5 md:p-7"
            style={{
              borderRadius: '12px',
              borderTop: '1px solid #E7E7FF',
              background: '#FFF',
              boxShadow: '1px 7.11px 6px 0px rgba(78, 180, 203, 0.16)'
            }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Detailed Progress Reports
            </h3>
            <p className="text-gray-600">
              Understand what your child is learning, their achievements, and
              where they might need extra help.
            </p>
          </div>

          <div 
            className="text-center p-5 md:p-7"
            style={{
              borderRadius: '12px',
              borderTop: '1px solid #E7E7FF',
              background: '#FFF',
              boxShadow: '1px 7.11px 6px 0px rgba(78, 180, 203, 0.16)'
            }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Skill Balancing Insights
            </h3>
            <p className="text-gray-600">
              Identify their strengths and support areas that need
              improvement.
            </p>
          </div>

          <div 
            className="text-center p-5 md:p-7"
            style={{
              borderRadius: '12px',
              borderTop: '1px solid #E7E7FF',
              background: '#FFF',
              boxShadow: '1px 7.11px 6px 0px rgba(78, 180, 203, 0.16)'
            }}
          >
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