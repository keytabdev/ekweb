import Image from 'next/image';
// import { spiralArrow, chatAbout, pinkPastryRight } from '@/assets';
import spiralArrow from '../../assets/about/spiral-arrow.svg';
import chatAbout from '../../assets/about/chat.png';
import pinkPastryRight from '../../assets/about/pink-pastry-right.svg';

export default function AboutCallToActionSection() {
  return (
    <section className="relative py-20 bg-[#F6EFFF] overflow-hidden flex items-center justify-center">
      {/* Decorative spiral arrow */}
      <div className="absolute left-10 top-10 z-10 opacity-40">
        <Image src={spiralArrow} alt="Spiral Arrow" width={64} height={64} />
      </div>
      {/* Decorative chat icon */}
      <div className="absolute right-10 bottom-10 z-10 opacity-30">
        <Image src={chatAbout} alt="Chat Icon" width={80} height={80} />
      </div>
      {/* Decorative pastry */}
      <div className="absolute right-24 top-0 z-10 opacity-30">
        <Image src={pinkPastryRight} alt="Pink Pastry Right" width={100} height={60} />
      </div>
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D1A47] mb-4">Ready to Join the Adventure?</h2>
        <p className="text-lg md:text-xl text-[#3D3D3D] mb-8">With AI-powered tutors, gamified learning, and interactive storytelling, we&apos;re making education something kids want to do—not something they have to do.</p>
        <button className="bg-[#4ECB71] hover:bg-[#45b866] text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-lg transition-colors">Create free account</button>
      </div>
    </section>
  );
} 