import Image from 'next/image';
// import { aboutUsBg, aboutUsPic, eklavyaButterfly } from '@/assets';
import aboutUsBg from '../../assets/about/about-us-bg.svg';
import aboutUsPic from '../../assets/about/about-us-pic.png';
import eklavyaButterfly from '../../assets/about/eklavya-butterfly.png';

export default function AboutHeroSection() {
  return (
    <section className="relative bg-white overflow-hidden py-20" style={{ minHeight: '700px' }}>
      {/* Background SVG */}
      <div className="absolute inset-0 z-0">
        <Image
          src={aboutUsBg}
          alt="About Us Background"
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2D1A47] mb-6">Learning that Sparks <span className="text-[#895BAE]">Curiosity</span>,<br/>Builds <span className="bg-[#C6F7D0] text-[#2D8A4B] px-2 rounded">Confidence</span>,<br/>and Feels Like Play.</h1>
          <p className="text-lg md:text-xl text-[#3D3D3D] max-w-xl mb-8 mx-auto md:mx-0">
            Imagine a world where learning is as exciting as unlocking a new game level, as rewarding as solving a mystery, and as limitless as a child&apos;s imagination. That&apos;s the world we&apos;re building at Eklavya.
          </p>
        </div>
        {/* Main Image */}
        <div className="flex-1 flex items-center justify-center relative">
          <Image
            src={aboutUsPic}
            alt="About Us Main"
            width={400}
            height={500}
            className="rounded-3xl shadow-2xl border-4 border-white object-cover"
            priority
          />
          {/* Butterfly Decoration */}
          <div className="absolute -top-8 -right-8 w-24 h-24 md:w-32 md:h-32">
            <Image
              src={eklavyaButterfly}
              alt="Butterfly"
              fill
              className="object-contain opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 