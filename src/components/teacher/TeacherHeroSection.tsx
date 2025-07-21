import Image from 'next/image';
import { teacherHeroImageNew, teacherHeroImagePng } from '@/assets';
import underlineWave from '../../assets/shared/underline-wave.svg';

export default function TeacherHeroSection() {
  return (
    <section className="relative bg-white text-white w-full aspect-[1440/670]">
      {/* Background SVG */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={teacherHeroImageNew}
          alt="Teacher Hero Background"
          width={1440}
          height={670}
          className="w-full h-full object-fill"
          priority
        />
      </div>
      
      <div className="relative z-10 h-full flex items-center w-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 relative z-10">
          {/* Left: Text Content */}
          <div className="flex-1 text-left lg:ml-[144px] lg:w-[651px]">
            <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl xl:text-[69.49px] text-[#0A7183] italic mb-6 leading-tight font-graphie">
              Smarter Tools
              <br />
              <div className="relative">
                <Image
                  src={underlineWave}
                  alt="Underline Wave"
                  width={110}
                  height={10}
                  className="absolute -bottom-2 left-80 object-contain"
                />
              </div>
              <span className="text-white whitespace-nowrap not-italic">Inspired Teaching!</span>
            </h1>
            <p className="text-lg md:text-xl text-black mb-8 font-graphie">
              With Eklavya, you&apos;re not just teaching—you&apos;re creating impactful,
              unforgettable learning experiences. Start your journey with us
              today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#fff] text-[#0A7183] font-semibold text-lg py-3 px-8 rounded-lg transition-colors font-graphie">
                Get Started
              </button>
              <button className="text-black font-semibold text-lg py-3 px-6 rounded-lg transition-colors font-graphie">
                Check free material
              </button>
            </div>
          </div>
          
          {/* Right: Hero Image */}
          <div className="flex-1 transform translate-x-40 flex items-center justify-center lg:mr-[144px]">
            <Image
              src={teacherHeroImagePng}
              alt="Teacher hero image"
              width={400}
              height={400}
              className="w-[450px] h-[450px] rounded-3xl object-contain scale-x-[-1]"
              sizes="400px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 