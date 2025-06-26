import React from 'react'
import Image from 'next/image'
import { controlBgImage } from '@/assets'

export default function BeInControlSection() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden min-h-[700px] md:min-h-[1050px]">
      {/* Background SVG */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={controlBgImage}
          alt="Be in control background"
          fill
          className="object-cover "
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Be in Control, Every Step of the Way
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Set Smart Limits That Encourage More Learning, Less Scrolling
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <div className="bg-[#FFFBF2] p-6 md:p-8 rounded-[40px] md:rounded-[60px] shadow-[4px_4px_12px_rgba(0,0,0,0.1)] border border-orange-200 text-center hover:shadow-[8px_8px_20px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Custom Screen Time Schedules
            </h3>
            <p className="text-gray-600">
              Decide when learning happens and ensure a healthy balance
              between study and play.
            </p>
          </div>

          <div className="bg-[#FFFBF2] p-6 md:p-8 rounded-[40px] md:rounded-[60px] shadow-[4px_4px_12px_rgba(0,0,0,0.1)] border border-orange-200 text-center hover:shadow-[8px_8px_20px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Learning-Only Mode
            </h3>
            <p className="text-gray-600">
              Lock the tablet into education mode to minimize distractions.
            </p>
          </div>

          <div className="bg-[#FFFBF2] p-6 md:p-8 rounded-[40px] md:rounded-[60px] shadow-[4px_4px_12px_rgba(0,0,0,0.1)] border border-orange-200 text-center hover:shadow-[8px_8px_20px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Flexible Management
            </h3>
            <p className="text-gray-600">
              Tailor their learning experience to suit your family&apos;s
              routine and priorities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 