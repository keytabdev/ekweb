import React from 'react'
import Image from 'next/image'
import { gamesImage2, comicsImage, learningImage, rocketImage, greenSwirlImage, redCloudImage } from '@/assets'

export default function LearningThatFeelsLikePlaySection() {
  return (
    <section className="py-20 bg-white  relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 w-20 h-20 z-10" style={{ left: 'calc(50% - 600px)' }}>
        <Image
          src={greenSwirlImage}
          alt="Green swirl decoration"
          width={100}
          height={100}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-0 w-32 h-32 z-10" style={{ left: 'calc(50% + 600px)' }}>
        <Image
          src={redCloudImage}
          alt="Red cloud decoration"
          width={128}
          height={128}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Learning That Feels Like Play
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Where They&apos;ll be Asking for More Homework everyday!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
          {/* Engaging Games */}
          <div className="relative p-6 md:p-12 rounded-xl overflow-hidden min-h-[300px] md:min-h-[400px]">
            <Image
              src={gamesImage2}
              alt="Engaging games background"
              fill
              className="object-cover"
            />
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-4 md:mb-6">
                Engaging Games
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                From solving math puzzles to conquering creative writing
                quests, every activity is designed to teach while they play.
              </p>
            </div>
          </div>

          {/* Comics */}
          <div className="relative p-6 md:p-12 rounded-xl overflow-hidden min-h-[300px] md:min-h-[400px]">
            <Image
              src={comicsImage}
              alt="Comics background"
              fill
              className="object-cover"
            />
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-4 md:mb-6">
                Comics
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                Comics which turn boring topics into fun ideas.
                <br />
                <br />
              </p>
            </div>
          </div>

          {/* Curriculum-Aligned Lessons */}
          <div className="relative p-6 md:p-12 rounded-xl overflow-hidden min-h-[300px] md:min-h-[400px]">
            <Image
              src={learningImage}
              alt="Learning lessons background"
              fill
              className="object-cover"
            />
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-4 md:mb-6">
                Curriculum-Aligned Lessons
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                Upload schoolbooks or let Eklavya&apos;s AI craft lessons
                tailored to your child&apos;s needs.
              </p>
            </div>
          </div>

          {/* Interactive Adventures */}
          <div className="relative p-6 md:p-12 rounded-xl overflow-hidden min-h-[300px] md:min-h-[400px]">
            <Image
              src={rocketImage}
              alt="Interactive adventures background"
              fill
              className="object-cover"
            />
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-4 md:mb-6">
                Interactive Adventures
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                Turn learning into exciting challenges that your child
                can&apos;t wait to explore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 