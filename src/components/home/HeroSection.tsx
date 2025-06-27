"use client";

import Image from "next/image";
import { childImage, heroSectionSvg } from "@/assets";

export default function HeroSection() {
  return (
    <>
      <section className="relative bg-white overflow-hidden py-16" style={{ height: '785px' }}>
        {/* Background SVG positioned to fill the exact hero section */}
        <div className="absolute inset-0">
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
          <div className="relative w-full h-full max-w-[1440px] mx-auto">
                      {/* Main heading positioned higher */}
          <div className="absolute left-[6%] sm:left-[8%] md:left-[9.6%] lg:left-[9.6%] top-[10%] sm:top-[12%] md:top-[14%] lg:top-[16%]">
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[69.49px] leading-tight">
              <span className="text-[#FCFCFC] font-light">
                Turn Screen Time <br />{" "}
              </span>
              <span className="text-white">into</span>
              <span className="text-white font-bold"> Mind Time</span>
            </h1>
          </div>

          {/* Subtitle positioned to align with pointer */}
          <div className="absolute left-[6%] sm:left-[8%] md:left-[9.6%] lg:left-[9.6%] top-[45%] sm:top-[45%] md:top-[47%] lg:top-[45%]">
            <div className="max-w-xs sm:max-w-sm md:max-w-md">
              <span className="font-sans text-white text-xl sm:text-2xl md:text-[24px] font-normal leading-relaxed">
                Where every tap sparks curiosity ! ✨
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="absolute left-[6%] sm:left-[8%] md:left-[9.6%] lg:left-[9.6%] top-[50%] sm:top-[52%] md:top-[54%] lg:top-[56%]">
            <p className="font-sans text-white text-base md:text-[16px] leading-7 max-w-sm sm:max-w-md md:max-w-lg">
              Unlock the Power of Playful Learning for Your Child&apos;s Growth.
            </p>
          </div>

          {/* Buttons */}
          <div className="absolute left-[6%] sm:left-[8%] md:left-[9.6%] lg:left-[9.6%] top-[60%] sm:top-[60%] md:top-[62%] lg:top-[64%]">
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <button className="bg-[#4ECB71] hover:bg-[#45b866] text-white font-sans font-semibold text-[18px] py-4 px-10 rounded-lg transition-colors">
                  Get Started
                </button>
                <button className="text-white hover:text-[#4ECB71] font-sans font-semibold text-[18px] py-4 px-7 rounded-lg shadow-sm hover:shadow-md transition-all">
                  Check free material
                </button>
              </div>
            </div>

            {/* Child image - moved up another 3% more */}
            <div className="absolute z-30 right-[8%] sm:right-[10%] md:right-[12%] lg:right-[15%] xl:left-[800px] top-[0%] sm:top-[0%] md:top-[0%] lg:top-[0%] xl:top-[22px] w-[35%] sm:w-[36%] md:w-[36%] lg:w-[36%] xl:w-[522px] h-[75%] sm:h-[80%] md:h-[85%] lg:h-[90%] xl:h-[732px]">
              <Image
                src={childImage}
                alt="Child"
                width={522}
                height={732}
                className="w-full h-full object-cover rounded-lg border-0 outline-0"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 