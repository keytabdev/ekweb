import Image from 'next/image';
import cloud from '../../assets/about/clouds (very light color).png';
import swirl from '../../assets/about/spiral-arrow.svg';

export default function AboutVisionSection() {
  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      {/* Background clouds */}
      <div className="absolute left-0 top-0 z-0 opacity-20">
        <Image src={cloud} alt="Clouds" width={200} height={120} />
      </div>
      <div className="absolute right-0 top-0 z-0 opacity-20">
        <Image src={cloud} alt="Clouds" width={200} height={120} />
      </div>
      {/* Swirl */}
      <div className="absolute left-8 bottom-8 z-0 opacity-30">
        <Image src={swirl} alt="Swirl" width={60} height={60} />
      </div>
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#2D1A47] text-center mb-12">Our Vision</h2>
      {/* Vision grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 mb-4 bg-[#FFF8E2] rounded-full flex items-center justify-center">
            {/* Placeholder for illustration */}
            <span className="text-5xl">🧒</span>
          </div>
          <div className="rounded-2xl bg-[#FFF8E2] p-6 shadow-md text-center">
            Every child has access to high-quality, engaging learning—no matter their background.
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 mb-4 bg-[#EFFFFA] rounded-full flex items-center justify-center">
            {/* Placeholder for illustration */}
            <span className="text-5xl">🧑‍🏫</span>
          </div>
          <div className="rounded-2xl bg-[#EFFFFA] p-6 shadow-md text-center">
            Teachers have the tools to make lessons come alive effortlessly.
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 mb-4 bg-[#FFEFF6] rounded-full flex items-center justify-center">
            {/* Placeholder for illustration */}
            <span className="text-5xl">👨‍👩‍👧</span>
          </div>
          <div className="rounded-2xl bg-[#E3F0FF] p-6 shadow-md text-center">
            Parents no longer have to fight the &quot;homework battle&quot; because kids are excited to learn.
          </div>
        </div>
      </div>
    </section>
  );
} 