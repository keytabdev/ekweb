import Image from 'next/image';
import ourMissionBg from '../../assets/about/our-mission-bg.svg';
import greyFlower from '../../assets/about/grey-flower.svg';


export default function AboutMissionSection() {
  return (
    <section className="relative flex items-center justify-center overflow-visible w-full h-[545px]">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ourMissionBg}
          alt="Our Mission Background"
          width={1920}
          height={405}
          className="w-full scale-y-110"
        />
      </div>
      {/* Decorative Images */}

      <div className="absolute left-24 bottom-10 opacity-20 z-10">
        <Image src={greyFlower} alt="Grey Flower" width={56} height={56} />
      </div>
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center w-full text-center" style={{ marginTop: '-40px' }}>
        <h2 className="text-[#1A1A1A] text-center font-sans text-[48px] font-bold leading-[44px] tracking-[0.48px] mb-8">
          Our Mission
        </h2>
        <div className="w-[936px] h-[98px] text-center mx-auto">
          <p className="text-[#1A1A1A] text-center font-graphie text-[20px] font-sans leading-[24px] tracking-[-0.5px] mb-0" >
            To make learning so immersive, exciting, and effective that children
            no longer resist it—they crave it.
          </p>
          <p className="text-[#1A1A1A] text-center font-graphie text-[20px] font-sans leading-[24px] tracking-[-0.5px]">
            To create an inclusive, accessible, and engaging education platform
            that meets every child where <br></br> they are and helps them go further than
            they ever imagined.
          </p>
        </div>
      </div>
    </section>
  );
} 