import React from 'react'
import Image from 'next/image'
import { controlBgImage } from '@/assets'

export default function BeInControlSection() {
  return (
    <section className="pb-[-100px] xl:-mt-40 2xl:-mt-10 pt-30 bg-white relative overflow-hidden min-h-[900px]">
      {/* Background SVG */}
      <div className="absolute 2xl:-top-30 xl:-top-40 w-full h-full">
        <Image
          src={controlBgImage}
          alt="Be in control background"
          fill
          className="object-cover "
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 2xl:mt-8 xl:mt-6 mb-4">
            Be in Control, Every Step of the Way
          </h2>
          <p className="text-[#1A1A1A] text-center text-[21px] font-normal leading-[28px]">
            Set Smart Limits That Encourage More Learning, Less Scrolling
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <div className="bg-[#FFFBF2] px-10 py-4 rounded-[100px] shadow-[6px_6px_0px_0px_#FFE6D4] flex flex-col justify-center items-center gap-3 flex-1">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Custom Screen Time Schedules
            </h3>
            <p className="text-gray-800">
              Decide when learning happens and ensure a healthy balance
              between study and play.
            </p>
          </div>

          <div className="bg-[#FFFBF2] px-10 py-4 rounded-[100px] shadow-[6px_6px_0px_0px_#FFE6D4] flex flex-col justify-center items-center gap-3 flex-1">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Learning-Only Mode
            </h3>
            <p className="text-gray-800">
              Lock the tablet into education mode to minimize distractions.
            </p>
          </div>

          <div className="bg-[#FFFBF2] px-10 py-4 rounded-[100px] shadow-[6px_6px_0px_0px_#FFE6D4] flex flex-col justify-center items-center gap-3 flex-1">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Flexible Management
            </h3>
            <p className="text-gray-800">
              Tailor their learning experience to suit your family&apos;s
              routine and priorities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 