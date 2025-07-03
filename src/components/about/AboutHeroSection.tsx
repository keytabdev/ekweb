import Image from 'next/image';
 import { aboutUsBg, aboutUsPic } from '@/assets';

export default function AboutHeroSection() {
  return (
    <section className="relative bg-white overflow-hidden py-20">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 -mt-5">
        <Image
          src={aboutUsBg}
          alt="About Us Background"
          fill
          className="object-contain object-center w-full h-full"
          priority
        />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-[1440px] mx-auto px-6 py-12 gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2D1A47] mb-6">Learning that Sparks <span className="text-[#895BAE]">Curiosity</span>,<br/>Builds <span className="bg-[#C6F7D0] text-[#2D8A4B] px-2 rounded">Confidence</span>,<br/>and Feels Like Play.</h1>
          <p className="text-lg md:text-xl text-[#3D3D3D] max-w-xl mb-8 mx-auto md:mx-0">
            Imagine a world where learning is as exciting as unlocking a new game level, as rewarding as solving a mystery, and as limitless as a child&apos;s imagination. That&apos;s the world we&apos;re building at Eklavya.
          </p>
        </div>
        {/* Main Image */}
        <div className="relative w-full md:w-[45%] max-w-[500px]" style={{ marginRight: 'px' }}>
          {/* Decorative Rectangle */}
          <div 
            className="absolute border-4 border-[#F8F8F8] rounded-xl"
            style={{
              width: '391px',
              height: '633.489px',
              transform: 'rotate(-4.219deg)',
              flexShrink: 0,
              bottom: '0',
              left: '0',
              transformOrigin: 'bottom left',
              zIndex: 15
            }}
          />
          {/* Shadow Rectangle */}
          <div 
            className="absolute"
            style={{
              width: '381px',
              height: '630px',
              flexShrink: 0,
              borderRadius: '12px',
              backgroundColor: '#9984B3',
              position: 'absolute',
              top: '20px',
              left: '20px',
              zIndex: 5
            }}
          />
          <div 
            className="relative z-10"
            style={{
              width: '381px',
              height: '630px',
              flexShrink: 0,
              borderRadius: '12px',
              backgroundColor: '#533681',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Image
              src={aboutUsPic}
              alt="About Us Main"
              width={381}
              height={630}
              style={{
                objectFit: 'contain',
                width: '100%',
                height: '100%'
              }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 