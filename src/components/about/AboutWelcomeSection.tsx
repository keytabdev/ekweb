import Image from 'next/image';
import star from '../../assets/about/our-mission-bg.svg'; // Placeholder, replace with actual star asset if available

export default function AboutWelcomeSection() {
  return (
    <section className="relative py-20 flex flex-col items-center justify-center overflow-hidden" style={{ background: '#FFF8E2', borderRadius: '0 0 60px 60px/0 0 30px 30px' }}>
      {/* Decorative stars */}
      <div className="absolute left-12 top-16 z-10 opacity-80">
        <Image src={star} alt="Star" width={48} height={48} />
      </div>
      <div className="absolute right-12 top-16 z-10 opacity-80">
        <Image src={star} alt="Star" width={48} height={48} />
      </div>
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#F28C2B] drop-shadow-lg text-center mb-4" style={{ textShadow: '2px 2px 0 #fff, 4px 4px 0 #F28C2B' }}>
        Welcome to Eklavya.<br />Where curiosity leads the way.
      </h1>
      {/* Button */}
      <button className="mt-6 px-8 py-3 rounded-full border-2 border-[#F28C2B] text-[#F28C2B] font-semibold text-lg bg-white hover:bg-[#FFF0D6] transition-all">
        Try for free
      </button>
    </section>
  );
} 