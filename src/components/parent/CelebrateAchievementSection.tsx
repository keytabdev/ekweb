import React from 'react'
import Image from 'next/image'
import { celebrateImage } from '@/assets'

export default function CelebrateAchievementSection() {
  return (
    <section className="py-20 md:py-32 lg:py-40 text-white relative overflow-hidden min-h-[600px] md:min-h-[800px] lg:min-h-[1000px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={celebrateImage}
          alt="Celebrate achievements background"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Celebrate Every Achievement!
          </h2>
          <p className="text-lg md:text-xl text-black">
            Watch Their Confidence Grow With Every Challenge They Overcome
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-16 lg:gap-32 max-w-7xl mx-auto mb-16 md:mb-20 lg:mb-24">
          <div className="p-8 md:p-12 lg:p-16 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
              Track Their Wins
            </h3>
            <p className="text-base md:text-lg text-black">
              Watch their confidence grow as they conquer challenges and
              master skills.
            </p>
          </div>

          <div className="p-8 md:p-12 lg:p-16 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
              Share Milestones
            </h3>
            <p className="text-base md:text-lg text-black">
              Celebrate their progress with friends and family to keep them
              motivated.
            </p>
          </div>

          <div className="p-8 md:p-12 lg:p-16 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
              Encourage Curiosity
            </h3>
            <p className="text-base md:text-lg text-black">
              From coding programs to math concepts, we keep them excited to
              learn.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-[#7D7AAD] text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
            Try for free
          </button>
        </div>
      </div>
    </section>
  )
} 