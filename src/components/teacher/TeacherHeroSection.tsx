import Image from 'next/image';
import { teacherHeroImageNew, teacherHeroImagePng } from '@/assets';


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
        <div className="w-full max-w-none flex flex-col md:flex-row items-center justify-between gap-8 px-4 relative z-10">
          {/* Left: Text Content */}
          <div className="flex-1 text-left lg:ml-[144px] lg:w-[651px] xl:translate-y-[-95px] xl:translate-x-[-30px] 2xl:translate-x-[140px] 2xl:translate-y-[-150px]">
            <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl xl:text-[69.49px] 2xl:text-[80px] text-[#0A7183] italic mb-6 font-graphie xl:leading-[95.3px]">
              Smarter Tools
              <br />
             
              <span className="text-white whitespace-nowrap not-italic font-bold">Inspired Teaching!</span>
            </h1>
            <p className="text-base text-black mb-8 font-graphie font-normal leading-[20px] tracking-[0.01em] w-[500px] 2xl:text-lg 2xl:w-[600px]">
              With Eklavya, you&apos;re not just teaching—you&apos;re creating impactful,
              unforgettable learning experiences. Start your journey with us
              today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#fff] text-[#0A7183] font-semibold text-lg py-3 px-8 rounded-lg transition-colors font-graphie 2xl:text-xl 2xl:py-4 2xl:px-10">
                Get Started
              </button>
              <button className="text-black font-semibold text-lg py-3 px-6 rounded-lg transition-colors font-graphie 2xl:text-xl 2xl:py-4 2xl:px-8">
                Check free material
              </button>
            </div>
          </div>
          
          {/* Right: Hero Image */}
          <div className="transform translate-x-20 translate-y-[-30px] flex items-center justify-center lg:mr-[144px]">
            <Image
              src={teacherHeroImagePng}
              alt="Teacher hero image"
              width={700}
              height={700}
              className="w-[700px] h-[700px] rounded-3xl object-contain 2xl:w-[700px] 2xl:h-[700px]"
              sizes="700px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 