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
      <h2 className="text-[48px] font-bold text-[#1A1A1A] text-center mb-12 leading-[48px] tracking-wide">Our Vision</h2>
      {/* Vision cards */}
      <div className="max-w-7xl mx-auto space-y-12">
        {/* First card */}
        <div className="w-[1152px] mx-auto rounded-tl-xl rounded-tr-[200px] rounded-bl-xl rounded-br-[200px] shadow-[6px_6px_0px_0px_rgba(212,227,255,1.00)] bg-white flex justify-center items-center gap-6 p-8">
          <div className="w-80 h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-4xl">🧒</span>
          </div>
          <div className="w-[637px] h-52 relative">
            <div className="w-[627px] h-48 left-[10px] top-[8px] absolute bg-yellow-50 rounded-[28.28px] border-r border-b border-zinc-900" />
            <div className="w-[625px] h-48 left-0 top-0 absolute rounded-[28.28px] border border-zinc-900" />
            <div className="w-[572px] left-[26px] top-[31px] absolute flex flex-col justify-center items-center gap-1.5">
              <div className="text-center text-[#1A1A1A] text-[30px] font-normal leading-[40px]">
                Every child has access to high-quality, engaging learning—no matter their background.
              </div>
            </div>
          </div>
        </div>

        {/* Second card */}
        <div className="w-[1152px] mx-auto rounded-[200px] shadow-[6px_6px_0px_0px_rgba(255,212,212,1.00)] bg-white flex justify-center items-center gap-8 p-8">
          <div className="w-[637px] h-52 relative">
            <div className="w-[627px] h-48 left-[10px] top-[8px] absolute bg-green-100 rounded-[28.28px] border-r border-b border-zinc-900" />
            <div className="w-[625px] h-48 left-0 top-0 absolute rounded-[28.28px] border border-zinc-900" />
            <div className="w-[567px] left-[41px] top-[53px] absolute flex flex-col justify-center items-center gap-1.5">
              <div className="text-center text-[#1A1A1A] text-[30px] font-normal leading-[40px]">
                Teachers have the tools to make lessons come alive effortlessly.
              </div>
            </div>
          </div>
          <div className="w-80 h-80 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-4xl">🧑‍🏫</span>
          </div>
        </div>

        {/* Third card */}
        <div className="w-[1152px] mx-auto rounded-[200px] shadow-[6px_6px_0px_0px_rgba(255,212,212,1.00)] bg-white flex justify-center items-center gap-6 p-8">
          <div className="w-80 h-80 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-4xl">👨‍👩‍👧</span>
          </div>
          <div className="w-[637px] h-52 relative">
            <div className="w-[627px] h-48 left-[10px] top-[8px] absolute bg-sky-100 rounded-[28.28px] border-r border-b border-zinc-900" />
            <div className="w-[625px] h-48 left-0 top-0 absolute rounded-[28.28px] border border-zinc-900" />
            <div className="w-[572px] left-[26px] top-[31px] absolute flex flex-col justify-center items-center gap-1.5">
              <div className="text-center text-[#1A1A1A] text-[30px] font-normal leading-[40px]">
                Parents no longer have to fight the &quot;homework battle&quot; because kids are excited to learn.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 