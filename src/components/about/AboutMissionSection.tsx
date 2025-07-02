import Image from 'next/image';
// import { ourMissionBg, spiralArrow, greyFlower, chatAbout } from '@/assets';
import ourMissionBg from '../../assets/about/our-mission-bg.svg';
import spiralArrow from '../../assets/about/spiral-arrow.svg';
import greyFlower from '../../assets/about/grey-flower.svg';
import chatAbout from '../../assets/about/chat.png';

export default function AboutMissionSection() {
  return (
    <section className="relative py-24 flex items-center justify-center overflow-hidden" style={{ minHeight: '480px' }}>
      {/* Background SVG */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ourMissionBg}
          alt="Our Mission Background"
          fill
          className="object-cover object-center w-full h-full"
        />
      </div>
      {/* Decorative Images */}
      <div className="absolute left-12 top-12 opacity-30 z-10">
        <Image src={spiralArrow} alt="Spiral Arrow" width={64} height={64} />
      </div>
      <div className="absolute right-16 top-20 opacity-20 z-10">
        <Image src={chatAbout} alt="Chat Icon" width={72} height={72} />
      </div>
      <div className="absolute left-24 bottom-10 opacity-20 z-10">
        <Image src={greyFlower} alt="Grey Flower" width={56} height={56} />
      </div>
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#222] mb-8">Our Mission</h2>
        <p className="text-xl md:text-2xl text-[#222] font-medium mb-2">To make learning so immersive, exciting, and effective that children no longer resist it—they crave it.</p>
        <p className="text-lg md:text-xl text-[#222]">To create an inclusive, accessible, and engaging education platform that meets every child where they are and helps them go further than they ever imagined.</p>
      </div>
    </section>
  );
} 