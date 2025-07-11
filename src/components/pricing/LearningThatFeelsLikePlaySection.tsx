import React from 'react'
import Image from 'next/image'
import rocket from '@/assets/pricing/rocket.png'
import books from '@/assets/pricing/books.png'
import trophy from '@/assets/pricing/trophy.png'
import backpack from '@/assets/pricing/backpack.png'
import pricingPlanBgUrl from '@/assets/pricing/pricing-plan-bg.svg'
import { greenSwirlImage, redCloudImage } from '@/assets'

export default function LearningThatFeelsLikePlaySection() {
  return (
    <div className="w-full relative overflow-visible py-20 bg-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-4 w-20 h-20 z-10">
        <Image
          src={greenSwirlImage}
          alt="Green swirl decoration"
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-0 right-4 w-32 h-32 z-10">
        <Image
          src={redCloudImage}
          alt="Red cloud decoration"
          width={128}
          height={128}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
        {/* Free Adventure */}
        <div
          className="flex flex-col justify-center items-center gap-6 flex-shrink-0 relative"
          style={{
            width: 576,
            height: 433,
            padding: '32px 40px',
            overflow: 'visible',
            background: `url(${pricingPlanBgUrl}) center/cover no-repeat`,
            boxShadow: 'none',
          }}
        >
          <div className="relative z-10 flex flex-col items-center w-full">
            <Image src={rocket} alt="Free Adventure" width={120} height={120} className="mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 md:mb-6">Free Adventure</h3>
            <p className="text-gray-700 text-base md:text-lg mb-1"><span className="font-regular">Ideal to explore and get started.</span></p>
            <p className="text-gray-700 text-base md:text-lg mb-1">Access to essential lessons and activities.</p>
            <p className="text-gray-700 text-base md:text-lg">A taste of gamified learning.</p>
          </div>
        </div>

        {/* Learning Explorer */}
        <div
          className="flex flex-col justify-center items-center gap-6 flex-shrink-0 relative"
          style={{
            width: 576,
            height: 433,
            padding: '32px 40px',
            overflow: 'visible',
            background: `url(${pricingPlanBgUrl}) center/cover no-repeat`,
            boxShadow: 'none',
          }}
        >
          <div className="relative z-10 flex flex-col items-center w-full">
            <Image src={books} alt="Learning Explorer" width={120} height={120} className="mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 md:mb-6">Learning Explorer</h3>
            <p className="text-gray-700 text-base md:text-lg mb-1">Perfect for engaged learners.</p>
            <p className="text-gray-700 text-base md:text-lg mb-1">Balanced credits for regular learning.</p>
            <p className="text-gray-700 text-base md:text-lg">Full access to AI-powered study buddy and personalized learning paths.</p>
          </div>
        </div>

        {/* Growth Champion */}
        <div
          className="flex flex-col justify-center items-center gap-6 flex-shrink-0 relative"
          style={{
            width: 576,
            height: 433,
            padding: '32px 40px',
            overflow: 'visible',
            background: `url(${pricingPlanBgUrl}) center/cover no-repeat`,
            boxShadow: 'none',
          }}
        >
          <div className="relative z-10 flex flex-col items-center w-full">
            <Image src={trophy} alt="Growth Champion" width={120} height={120} className="mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 md:mb-6">Growth Champion</h3>
            <p className="text-gray-700 text-base md:text-lg mb-1">Best for consistent learning and unlimited exploration.</p>
            <p className="text-gray-700 text-base md:text-lg mb-1">Unlimited credits for uninterrupted learning.</p>
            <p className="text-gray-700 text-base md:text-lg">Enhanced parental controls, weekly reports, and priority support.</p>
          </div>
        </div>

        {/* School Special */}
        <div
          className="flex flex-col justify-center items-center gap-6 flex-shrink-0 relative"
          style={{
            width: 576,
            height: 433,
            padding: '32px 40px',
            overflow: 'visible',
            background: `url(${pricingPlanBgUrl}) center/cover no-repeat`,
            boxShadow: 'none',
          }}
        >
          <div className="relative z-10 flex flex-col items-center w-full">
            <Image src={backpack} alt="School Special" width={120} height={120} className="mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4 md:mb-6">School Special</h3>
            <p className="text-gray-700 text-base md:text-lg mb-1">Customized solutions for schools.</p>
            <p className="text-gray-700 text-base md:text-lg mb-1">Dedicated support and implementation.</p>
            <p className="text-gray-700 text-base md:text-lg">Special bulk pricing and tailored content alignment.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 