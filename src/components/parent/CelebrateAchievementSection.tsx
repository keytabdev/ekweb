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
          className="object-contain"
        />
      </div>

      <div className="w-[85%] md:w-[70%] xl:w-[80%] 2xl:w-full mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Celebrate Every Achievement!
          </h2>
          <p className="text-lg md:text-xl text-black">
            Watch Their Confidence Grow With Every Challenge They Overcome
          </p>
        </div>

        <div className="flex flex-wrap justify-center mx-auto mb-16 md:mb-20 lg:mb-24 gap-2 md:gap-3 lg:gap-4 xl:gap-[35px] 2xl:gap-20">
          <div
            className="flex-1 xl:flex-none xl:w-[305px] max-w-[300px]"
            style={{
              display: "flex",
              height: "245px",
              padding: "32px 40px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flex: "1 0 0",
              background: "#F9F0FF",
              boxShadow: "6px 6px 0px 0px #DFCCF8",
            }}
          >
            <h3
              className="font-semibold capitalize"
              style={{
                color: "var(--Text, #38393E)",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "26px",
              }}
            >
              Track Their Wins
            </h3>
            <p className="text-sm md:text-base text-black text-center">
              Watch their confidence grow as they conquer challenges and master
              skills.
            </p>
          </div>

          <div
            className="flex-1 xl:flex-none xl:w-[305px] max-w-[320px]"
            style={{
              display: "flex",
              height: "245px",
              padding: "32px 40px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flex: "1 0 0",
              background: "#ECF3FF",
              boxShadow: "6px 6px 0px 0px #CCEDF8",
            }}
          >
            <h3
              className="font-semibold capitalize"
              style={{
                color: "var(--Text, #38393E)",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "26px",
              }}
            >
              Share Milestones
            </h3>
            <p className="text-sm md:text-base text-black text-center">
              Celebrate their progress with friends and family to keep them
              motivated.
            </p>
          </div>

          <div
            className="flex-1 xl:flex-none xl:w-[305px] max-w-[300px]"
            style={{
              display: "flex",
              height: "245px",
              padding: "32px 40px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flex: "1 0 0",
              background: "#FFE7FB",
              boxShadow: "6px 6px 0px 0px #F8CCF6",
            }}
          >
            <h3
              className="font-semibold capitalize"
              style={{
                color: "var(--Text, #38393E)",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "26px",
              }}
            >
              Encourage Curiosity
            </h3>
            <p className="text-sm md:text-base text-black text-center">
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
  );
} 