import Image from 'next/image';
import welcome from '@/assets/about/welcome-to-eklavya-bg.svg';
import welcomeText from '@/assets/about/welcome-text.svg';

export default function AboutWelcomeSection() {
  return (
    <section className="relative h-[433px] flex flex-col items-center justify-center overflow-hidden w-full max-w-none">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-[433px]">
        <Image 
          src={welcome} 
          alt="Welcome background" 
          fill
          className="2xl:scale-x-[1.35] xl:scale-x-[1.15] scale-x-[1.0] "
        />
      </div>

      {/* Heading */}
      <div className="text-center z-2 mb-8">
        <Image src={welcomeText} alt="Welcome to Eklavya. Where curiosity leads the way." width={720} height={120} />
      </div>
      
      {/* Button */}
      <button className="inline-flex px-8 py-[12px] justify-center items-center gap-2 rounded-[50px] border-4 border-[#DF6934] bg-[#FFFBEA] text-[#DF6934] font-extrabold text-lg leading-tight hover:bg-[#FFF0D6] transition-all z-2">
        Try for free
      </button>
    </section>
  );
} 