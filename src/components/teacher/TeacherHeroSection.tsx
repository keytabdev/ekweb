import Image from 'next/image';
import { teacherHeroImage } from '@/assets';
import underlineWave from '../../assets/shared/underline-wave.svg';

export default function TeacherHeroSection() {
  return (
    <section className="relative bg-white text-white w-full aspect-[1440/670]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={teacherHeroImage}
          alt="Teacher Hero Background"
          width={1440}
          height={670}
          className="w-full h-full object-fill"
          priority
        />
      </div>
      <div className="relative z-10 h-full flex items-center w-full 2xl:left-40 2xl:bottom-30 xl:left-0 xl:bottom-20">
        <div className="absolute left-[6%] sm:left-[8%] md:left-[9.6%] lg:left-[9.6%] max-w-2xl">
          <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl xl:text-[69.49px] text-[#0A7183] italic mb-6 leading-tight">
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
            <span className="text-white not-italic">Inspired Teaching!</span>
          </h1>
          <p className="text-lg md:text-xl text-black mb-8">
            With Eklavya, you&apos;re not just teaching—you&apos;re creating impactful,
            unforgettable learning experiences. Start your journey with us
            today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#fff]  text-[#0A7183] font-semibold text-lg py-3 px-8 rounded-lg transition-colors">
              Get Started
            </button>
            <button className="text-black font-semibold text-lg py-3 px-6 rounded-lg transition-colors">
              Check free material
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 