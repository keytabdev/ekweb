import Image from 'next/image';
import { aboutUsBg, aboutUsPic, playUnderline, curiosityUnderline } from '@/assets';
import heroWave from '../../assets/about/hero-wave.svg';

export default function AboutHeroSection() {
  return (
    <section className="relative bg-white overflow-visible 2xl:mt-5 xl:mt-[-26] 2xl:py-20 xl:py-10 min-h-screen">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 -mt-5">
        <Image
          src={aboutUsBg}
          alt="About Us Background"
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-start w-full max-w-[1440px] mx-auto px-[124px] py-12 gap-36">
        {/* Text */}
        <div className="text-center md:text-left w-[612px] -mt-16">
          {/* First Row */}
          <div className="flex items-center mb-2 h-11">
            <span className="text-[#C6B6E0] text-[32px] font-normal leading-tight font-graphie">
              Learning that
            </span>
            <Image
              src={heroWave}
              alt="Hero Wave"
              width={113}
              height={56.5}
              className="ml-2"
            />
          </div>

          {/* Second Row */}
          <div className="mb-6 h-24 relative">
            <span className="text-[#C6B6E0] text-[55.49px] font-normal leading-[80px] font-graphie">
              Sparks{" "}
            </span>
            <span 
              style={{
                color: '#FFF',
                fontFamily: 'Graphie',
                fontSize: '69.49px',
                fontStyle: 'italic',
                fontWeight: 600,
                lineHeight: '80px'
              }}
            >
              Curiosity,
            </span>
            <div className="absolute -bottom-0 left-[204px]">
              <Image
                src={curiosityUnderline}
                alt="Curiosity Underline"
                width={180}
                height={20}
                className="object-contain"
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="mb-6 h-24 relative">
            <span className="text-[#C6B6E0] text-[55.49px] font-normal leading-[80px] font-graphie">
              Builds{" "}
            </span>
            <div className="inline-block relative">
              <svg
                width="429"
                height="98"
                viewBox="0 0 429 98"
                fill="none"
                className="absolute inset-0"
              >
                <path d="M0 0H410.28L429 98H14.04L0 0Z" fill="#EFFBEC" />
              </svg>
              <span
                className="relative z-10 px-4 flex items-center justify-center"
                style={{
                  color: "#5BB775",
                  fontFamily: "Graphie",
                  fontSize: "69.49px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "80px",
                  letterSpacing: "1px",
                  width: "429px",
                  height: "98px",
                }}
              >
                Confidence,
              </span>
            </div>
          </div>

          {/* Fourth Row */}
          <div className="mb-6 h-24">
            <span className="text-[#C6B6E0] text-[55.49px] font-normal leading-[80px] font-graphie">
              and{" "}
            </span>
            <span className="text-[#FFF] text-[69.49px] font-normal leading-[80px] font-graphie">
              Feels Like Play.
            </span>
            <div className="mt-2 ml-[60%]">
              <Image
                src={playUnderline}
                alt="Play Underline"
                width={221}
                height={11}
                className="object-contain"
              />
            </div>
          </div>

          <p className="text-[#FFF] text-[16px] font-normal leading-[20px] tracking-[0.16px] w-[588px] h-20 mb-6 font-graphie">
            Imagine a world where learning is as exciting as unlocking a new
            game level, as rewarding as solving a mystery, and as limitless as a
            child&apos;s imagination.{" "}
            <span className="text-[#FFF] text-[16px] font-semibold leading-[20px] italic tracking-[0.16px] font-graphie">
              That&apos;s the world we&apos;re building at Eklavya.
            </span>{" "}
            We believe that education shouldn&apos;t feel like a task—it should feel like discovery.
          </p>
        </div>
        
        {/* Main Image */}
        <div className="relative w-[384px] h-[630px]">
          {/* Shadow Rectangle */}
          <div
            className="absolute"
            style={{
              width: "384px",
              height: "630px",
              borderRadius: "12px",
              backgroundColor: "#9984B3",
              position: "absolute",
              top: "20px",
              left: "20px",
              zIndex: 5,
            }}
          />
          {/* Decorative Rectangle */}
          <div
            className="absolute border-4 border-[#F8F8F8] rounded-xl"
            style={{
              width: "384px",
              height: "630px",
              transform: "rotate(-2deg)",
              flexShrink: 0,
              bottom: "0",
              left: "0",
              transformOrigin: "bottom left",
              zIndex: 15,
            }}
          />
          <div
            className="relative z-10"
            style={{
              width: "384px",
              height: "630px",
              borderRadius: "12px",
              backgroundColor: "#533681",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src={aboutUsPic}
              alt="About Us Main"
              width={384}
              height={630}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 