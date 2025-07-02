import Image from 'next/image';
// import { welcomeToEklavyaBg, yellowPastryLeft, pinkPastryRight, greenPastryRight, redPastry } from '@/assets';
import welcomeToEklavyaBg from '../../assets/about/welcome-to-eklavya-bg.svg';
import yellowPastryLeft from '../../assets/about/yellow-pastry-left.svg';
import pinkPastryRight from '../../assets/about/pink-pastry-right.svg';
import greenPastryRight from '../../assets/about/green-pastry-right.svg';
import redPastry from '../../assets/about/red-pastry.svg';

export default function AboutStorySection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background SVG */}
      <div className="absolute left-0 top-0 z-0 opacity-80">
        <Image src={welcomeToEklavyaBg} alt="Welcome to Eklavya BG" width={420} height={320} />
      </div>
      {/* Decorative pastries */}
      <div className="absolute left-0 bottom-0 z-0 opacity-70">
        <Image src={yellowPastryLeft} alt="Yellow Pastry Left" width={120} height={80} />
      </div>
      <div className="absolute right-0 top-0 z-0 opacity-70">
        <Image src={pinkPastryRight} alt="Pink Pastry Right" width={120} height={80} />
      </div>
      <div className="absolute right-0 bottom-0 z-0 opacity-70">
        <Image src={greenPastryRight} alt="Green Pastry Right" width={120} height={80} />
      </div>
      <div className="absolute left-1/2 bottom-0 z-0 opacity-60" style={{ transform: 'translateX(-50%)' }}>
        <Image src={redPastry} alt="Red Pastry" width={90} height={60} />
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2D1A47] mb-6">Who We Are</h2>
        <p className="text-lg md:text-xl text-[#3D3D3D] mb-10">We are parents, educators, technologists, and dreamers who saw a problem—kids glued to screens, disengaged from learning—and imagined a better way.</p>
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          <div className="flex-1 bg-[#F6EFFF] rounded-2xl p-6 shadow-md">
            <span className="block text-[#7B4AE2] font-bold text-lg mb-2">Math feels like an epic quest, not a worksheet.</span>
          </div>
          <div className="flex-1 bg-[#E6F7F1] rounded-2xl p-6 shadow-md">
            <span className="block text-[#2D8A4B] font-bold text-lg mb-2">Science becomes a hands-on experiment.</span>
          </div>
          <div className="flex-1 bg-[#FFF9E6] rounded-2xl p-6 shadow-md">
            <span className="block text-[#E2B14A] font-bold text-lg mb-2">Reading isn&apos;t a chore, but an adventure into new worlds.</span>
          </div>
        </div>
      </div>
    </section>
  );
} 