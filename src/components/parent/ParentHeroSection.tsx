import React from 'react'
import Image from 'next/image'
import { parentHeroPic, parentHeroSvg } from '@/assets'

export default function ParentHeroSection() {
  return (
    <section className="relative text-white pb-60 pt-60 min-h-[700px] overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 w-full">
        <Image
          src={parentHeroSvg}
          alt="Parent hero background"
          height={731}
          className="w-full "
          priority
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center h-full">
           <div className="pl-4 md:pl-10 text-center md:text-left 2xl:-mt-40 xl:-mt-80">
            <h1 className="text-5xl sm:text-6xl md:text-7xl text-[#C1FFB1] mb-6 md:mb-8 leading-tight whitespace-nowrap">
              Happier Kids, <br />
              <span className="italic text-white">Smarter Learning!</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-purple-100">
              Eklavya transforms screen time into the most valuable part of your
              child&apos;s day, empowering you and delighting them.
            </p>
            <div className="flex flex-col sm:flex-row pt-8 gap-4 justify-center md:justify-start">
              <button className="bg-white text-purple-700 px-6 md:px-8 py-3 rounded-xs font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
               <button className=" text-white px-6 md:px-8 py-3 rounded-xs font-semibold bg-transparent border border-white">
                  Check free material
                </button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="w-64 h-64 md:w-80 lg:w-96 md:h-80 lg:h-96 rounded-full overflow-hidden xl:transform xl:scale-136 xl:translate-x-4 xl:-translate-y-37 2xl:scale-184 2xl:translate-x-17 2xl:-translate-y-15">
              <Image
                src={parentHeroPic}
                alt="Parent and child learning together"
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 