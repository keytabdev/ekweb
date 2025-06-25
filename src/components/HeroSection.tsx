"use client";

import Image from "next/image";
import { childImage, heroSectionSvg } from "@/assets";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden min-h-[100vh]">
      <div className="absolute inset-0">
        {/* Hero Section SVG Background */}
        <div className="absolute inset-0 z-20">
          <Image
            src={heroSectionSvg}
            alt="Hero Section Background"
            fill
            className="object-cover object-center w-full h-full scale-x-110 sm:scale-x-105 md:scale-x-100"
            priority
          />
        </div>

      </div>

      {/* Text positioned to align with pointer - using absolute positioning with percentages */}
      <div className="absolute z-40 w-full h-full">
        <div className="relative w-full h-full">
          {/* Main heading positioned higher */}
          <div className="absolute left-[4%] sm:left-[6%] md:left-[8%] lg:left-[10%] top-[25%] sm:top-[28%] md:top-[32%] lg:top-[35%]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Turn Screen Time
              <br />
              into <span className="text-white font-extrabold">Mind Time</span>
            </h2>
          </div>

          {/* Subtitle positioned to align with pointer */}
          <div className="absolute left-[4%] sm:left-[6%] md:left-[8%] lg:left-[10%] top-[48%] sm:top-[50%] md:top-[52%] lg:top-[54%]">
            <div className="max-w-xs sm:max-w-sm md:max-w-md">
              <span className="text-white text-lg sm:text-xl font-medium">
                Where every tap sparks curiosity ! ✨
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="absolute left-[4%] sm:left-[6%] md:left-[8%] lg:left-[10%] top-[56%] sm:top-[58%] md:top-[60%] lg:top-[62%]">
            <p className="text-lg sm:text-xl text-gray-300 max-w-sm sm:max-w-md md:max-w-lg">
              Unlock the Power of Playful Learning for Your Child&apos;s Growth.
            </p>
          </div>

          {/* Buttons */}
          <div className="absolute left-[4%] sm:left-[6%] md:left-[8%] lg:left-[10%] top-[68%] sm:top-[70%] md:top-[72%] lg:top-[74%]">
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors text-sm sm:text-base">
                Get Started
              </button>
              <button className="text-white hover:text-green-400 font-medium transition-colors text-sm sm:text-base py-2 sm:py-0">
                Check free material
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 sm:-bottom-10 md:-bottom-16 lg:-bottom-20 right-2 sm:right-4 md:right-20 lg:right-32 xl:right-50 z-30 border-0 outline-0">
        <Image
          src={childImage}
          alt="Child"
          width={750}
          height={1000}
          className="h-[250px] sm:h-[350px] md:h-[500px] lg:h-[650px] xl:h-[750px] w-auto object-cover rounded-lg border-0 outline-0"
          priority
        />


      </div>


    </section>
  );
} 