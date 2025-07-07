import Image from 'next/image';
import yellowPastryLeftFacing from '../../assets/about/yellow-pastry-left-facing.svg';
import yellowPastryRightFacing from '../../assets/about/yellow-pastry-right-facing.svg';

export default function AboutWelcomeSection() {
  return (
    <section className="relative py-20 flex flex-col items-center justify-center overflow-hidden bg-[#FFF8E2]">
      {/* Decorative pastries */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <Image src={yellowPastryLeftFacing} alt="Yellow Pastry Left" width={80} height={80} />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <Image src={yellowPastryRightFacing} alt="Yellow Pastry Right" width={80} height={80} />
      </div>
      
      {/* Heading */}
      <h1 className="text-[#F28C2B] text-[48px] font-normal leading-[48px] tracking-[3.84px] text-center mb-8" style={{ textShadow: '1px 1px 0px rgb(68 42 162 / 1.00)' }}>
        Welcome to Eklavya.<br />Where curiosity leads the way.
      </h1>
      
      {/* Button */}
      <button className="px-10 py-4 bg-[#FFF8E2] rounded-[50px] border-4 border-[#F28C2B] text-[#F28C2B] font-extrabold text-lg leading-tight hover:bg-[#FFF0D6] transition-all">
        Try for free
      </button>
    </section>
  );
} 