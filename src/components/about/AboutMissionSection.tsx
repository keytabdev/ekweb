import Image from 'next/image';
// import { ourMissionBg, spiralArrow, greyFlower, chatAbout } from '@/assets';
import ourMissionBg from '../../assets/about/our-mission-bg.svg';

import greyFlower from '../../assets/about/grey-flower.svg';
import chatAbout from '../../assets/about/chat.png';

export default function AboutMissionSection() {
  return (
    <section className="relative flex items-center justify-center overflow-visible" style={{ width: '1522px', height: '485.656px', flexShrink: 0, maxWidth: '100vw' }}>
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 -my-8">
        <Image
          src={ourMissionBg}
          alt="Our Mission Background"
          fill
          className="object-cover object-center w-full h-full"
          style={{ objectPosition: 'center' }}
        />
      </div>
      {/* Decorative Images */}

      <div className="absolute right-16 top-20 opacity-20 z-10">
        <Image src={chatAbout} alt="Chat Icon" width={72} height={72} />
      </div>
      <div className="absolute left-24 bottom-10 opacity-20 z-10">
        <Image src={greyFlower} alt="Grey Flower" width={56} height={56} />
      </div>
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-center px-4">
        <h2 className="text-[48px] font-bold text-[#1A1A1A] mb-8 leading-[48px] tracking-wide">Our Mission</h2>
        <div className="w-[936px] h-[98px] text-center">
          <p className="text-[#1A1A1A] text-center font-graphie text-[21px] font-normal leading-[28px] mb-4">
            To make learning so immersive, exciting, and effective that children no longer resist it—they crave it.
          </p>
          <p className="text-[#1A1A1A] text-center font-graphie text-[21px] font-normal leading-[28px]">
            To create an inclusive, accessible, and engaging education platform that meets every child where they are and helps them go further than they ever imagined.
          </p>
        </div>
      </div>
    </section>
  );
} 