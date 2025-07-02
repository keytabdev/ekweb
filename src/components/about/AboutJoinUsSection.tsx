import Image from 'next/image';
import yellowPastryLeft from '../../assets/about/yellow-pastry-left.svg';
import yellowPastryRight from '../../assets/about/yellow-pastry-right.svg';

export default function AboutJoinUsSection() {
  return (
    <section className="relative py-16 bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* Yellow pastries */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <Image src={yellowPastryLeft} alt="Yellow Pastry Left" width={80} height={80} />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <Image src={yellowPastryRight} alt="Yellow Pastry Right" width={80} height={80} />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-[#2D1A47] text-center mb-4">
        Join Us in Reimagining Education
      </h2>
      <p className="text-[#3D3D3D] text-base md:text-lg text-center max-w-xl">
        Eklavya isn&apos;t just an app. It&apos;s a movement to make learning joyful, personal, and limitless. Because when kids love learning, they don&apos;t just pass tests. <span className="text-[#2D8A4B] font-bold">They Grow, Dream, and Create.</span>
      </p>
    </section>
  );
} 