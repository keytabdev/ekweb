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
            className="object-cover object-center"
            priority
          />
        </div>

      </div>

      <div className="relative container top-40 mx-auto px-6 py-24 h-full flex items-end z-40">
        <div className="text-white space-y-8 max-w-2xl z-30 relative ml-16">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Turn Screen Time
            <br />
            into <span className="text-white font-extrabold">Mind Time</span>
          </h2>

          <div className="max-w-md">
            <span className="text-blue-400 text-xl font-medium">
              Where every tap sparks curiosity ! ✨
            </span>
          </div>

          <p className="text-xl text-gray-300 max-w-lg">
            Unlock the Power of Playful Learning for Your Child&apos;s Growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Get Started
            </button>
            <button className="text-white hover:text-green-400 font-medium transition-colors">
              Check free material
            </button>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 sm:-bottom-16 md:-bottom-20 right-4 sm:right-20 md:right-32 lg:right-50 z-30 border-0 outline-0">
        <Image
          src={childImage}
          alt="Child"
          width={750}
          height={1000}
          className="h-[300px] sm:h-[450px] md:h-[600px] lg:h-[750px] w-auto object-cover rounded-lg border-0 outline-0"
          priority
        />


      </div>


    </section>
  );
} 