import Image from 'next/image';
import { teacherHeroImage } from '@/assets';

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
      <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-6xl text-[#0A7183] italic mb-6">
            Smarter Tools, <br />
            <span className="text-white not-italic">Inspired Teaching!</span>
          </h1>
          <p className="text-xl mb-8 text-purple-100 max-w-xl">
            With Eklavya, you&apos;re not just teaching, you&apos;re creating
            impactful, unforgettable learning experiences. Start your journey
            with us today.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-[#00A8C5] px-8 py-3 rounded-l font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
            <button className="  text-[#1A1A1A] px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-black hover:border-1 hover:border-black transition-colors">
              Check free material
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 