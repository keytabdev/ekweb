import Image from 'next/image';
import { aboutUsBg, aboutUsPic, playUnderline, curiosityUnderline } from '@/assets';
import heroWave from '../../assets/about/hero-wave.svg';

export default function AboutHeroSection() {
  return (
    <section className="relative bg-white overflow-hidden py-20 min-h-screen">
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
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-[1920px] mx-auto px-6 py-12 gap-12">
        {/* Text */}
        <div
          className="text-center md:text-left"
          style={{ transform: "translateY(calc(-9%))" }}
        >
          {/* First Row */}
          <div
            className="flex items-center mb-2"
            style={{
              height: "43px",
              width: "clamp(500px, 42vw, 613px)",
            }}
          >
            <span
              style={{
                color: "#C6B6E0",
                fontFamily: "Graphie",
                fontSize: "clamp(24px, 2.2vw, 32px)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "21px",
              }}
            >
              Learning that
            </span>
            <div className="ml-5" style={{ width: "clamp(120px, 10vw, 150px)", height: "50px" }}>
              <Image
                src={heroWave}
                alt="Hero Wave"
                width={150}
                height={50}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Second Row */}
          <div
            className="mb-2 relative"
            style={{
              height: "80px",
              width: "clamp(500px, 42vw, 613px)",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                color: "#C6B6E0",
                fontFamily: "Graphie",
                fontSize: "clamp(40px, 3.8vw, 55.49px)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "80px",
              }}
            >
              Sparks{" "}
            </span>
            <span
              style={{
                color: "#FFF",
                fontFamily: "Graphie",
                fontSize: "clamp(50px, 4.8vw, 69.49px)",
                fontStyle: "italic",
                fontWeight: 600,
                lineHeight: "80px",
              }}
            >
              Curiosity
            </span>
            <div className="absolute -bottom-2" style={{ left: "calc(40%)" }}>
              <Image
                src={curiosityUnderline}
                alt="Curiosity Underline"
                width={150}
                height={10}
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          {/* Third Row */}
          <div
            className="mb-2"
            style={{
              height: "80px",
              width: "clamp(500px, 42vw, 613px)",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                color: "#C6B6E0",
                fontFamily: "Graphie",
                fontSize: "clamp(40px, 3.8vw, 55.49px)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "80px",
              }}
            >
              Builds{" "}
            </span>
            <div className="inline-block relative">
              <svg
                width="clamp(350px, 30vw, 429px)"
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
                  fontSize: "clamp(50px, 4.8vw, 69.49px)",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "80px",
                  letterSpacing: "1px",
                  width: "clamp(350px, 30vw, 429px)",
                  height: "98px",
                }}
              >
                Confidence,
              </span>
            </div>
          </div>

          {/* Fourth Row */}
          <div
            className="mb-6"
            style={{
              height: "80px",
              width: "clamp(500px, 42vw, 613px)",
              marginBottom: "53px"
            }}
          >
            <span
              style={{
                color: "#C6B6E0",
                fontFamily: "Graphie",
                fontSize: "clamp(40px, 3.8vw, 55.49px)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "80px",
              }}
            >
              and &nbsp;
            </span>
            <span
              style={{
                color: "#FFF",
                fontFamily: "Graphie",
                fontSize: "clamp(50px, 4.8vw, 69.49px)",
                fontStyle: "normal",
                fontWeight: 350,
                lineHeight: "80px",
              }}
            >
              Feels Like Play.
            </span>
            <div className="mt-2" style={{ transform: "translateX(calc(60% ))" }}>
              <Image
                src={playUnderline}
                alt="Play Underline"
                width={221}
                height={11}
                className="object-contain"
              />
            </div>
          </div>

          <p
            style={{
              color: "#FFF",
              fontFamily: "Graphie",
              fontSize: "clamp(14px, 1.1vw, 16px)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: "0.16px",
              width: "clamp(500px, 42vw, 613px)",
              height: "83px",
              marginBottom: "53px",
            }}
          >
            Imagine a world where learning is as exciting as unlocking a new
            game level, as rewarding as solving a mystery, and as limitless as a
            child&apos;s imagination.{" "}
            <span
              style={{
                color: "#FFF",
                fontFamily: "Graphie",
                fontSize: "clamp(14px, 1.1vw, 16px)",
                fontStyle: "italic",
                fontWeight: 600,
                lineHeight: "20px",
                letterSpacing: "0.16px",
              }}
            >
              That&apos;s the world we&apos;re building at Eklavya.
            </span>
            We believe that education shouldn&apos;t feel like a task- it should feel like a discovery.
          </p>
        </div>
        {/* Main Image */}
        <div
          className="relative w-full md:w-[45%] max-w-[500px]"
          style={{ marginRight: "px", transform: "translateX(140px)" }}
        >
          {/* Decorative Rectangle */}
          <div
            className="absolute border-4 border-[#F8F8F8] rounded-xl"
            style={{
              width: "clamp(280px, 24vw, 351.9px)",
              height: "clamp(456px, 40vw, 570.1401px)",
              transform: "rotate(-4.219deg)",
              flexShrink: 0,
              bottom: "0",
              left: "0",
              transformOrigin: "bottom left",
              zIndex: 15,
            }}
          />
          {/* Shadow Rectangle */}
          <div
            className="absolute"
            style={{
              width: "clamp(274px, 24vw, 342.9px)",
              height: "clamp(454px, 40vw, 567px)",
              flexShrink: 0,
              borderRadius: "12px",
              backgroundColor: "#9984B3",
              position: "absolute",
              top: "20px",
              left: "20px",
              zIndex: 5,
            }}
          />
          <div
            className="relative z-10"
            style={{
              width: "clamp(274px, 24vw, 342.9px)",
              height: "clamp(454px, 40vw, 567px)",
              flexShrink: 0,
              borderRadius: "12px",
              backgroundColor: "#533681",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src={aboutUsPic}
              alt="About Us Main"
              width={343}
              height={567}
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