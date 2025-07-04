import Image from 'next/image';
import greenPastryRight from '../../assets/about/green-pastry-right.svg';
import pinkPastryRight from '../../assets/about/pink-pastry-right.svg';
import yellowPastryRight from '../../assets/about/yellow-pastry-right.svg';
import greyFlower from '../../assets/about/grey-flower.svg';

export default function AboutStorySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-[#1A1A1A] text-[36px] font-bold leading-[44px] tracking-[0.36px] mb-6">Who We Are</h2>
          <p className="text-[#1A1A1A] text-[21px] font-normal leading-[28px]">We are parents, educators, technologists, and dreamers who saw a problem—kids glued to screens, disengaged from learning—and imagined a better way.</p>
        </div>
        
        <div className="flex justify-between items-start gap-8 pt-[60px]">
          <div className="flex-1 flex items-start gap-3">
            <Image src={greenPastryRight} alt="Green Pastry" width={27.274} height={49.157} className="flex-shrink-0" />
            <span className="block text-[#38393E] text-[24px] font-semibold leading-[26px]">Math feels like an epic quest, not a worksheet.</span>
          </div>
          <div className="flex-1 flex items-start gap-3">
            <Image src={pinkPastryRight} alt="Pink Pastry" width={27.274} height={49.157} className="flex-shrink-0" />
            <span className="block text-[#38393E] text-[24px] font-semibold leading-[26px]">Science becomes a hands-on experiment.</span>
          </div>
          <div className="flex-1 flex items-start gap-3">
            <Image src={yellowPastryRight} alt="Yellow Pastry" width={27.274} height={49.157} className="flex-shrink-0" />
            <span className="block text-[#38393E] text-[24px] font-semibold leading-[26px]">Reading isn&apos;t a chore, but an adventure into new worlds.</span>
          </div>
        </div>

        {/* Pseudo Section */}
        <div className="mt-16 text-center relative pt-[160px]">
          <div className="absolute bottom-20 left-35 z-0">
            <Image src={greyFlower} alt="Grey Flower" width={142} height={142} className="flex-shrink-0" />
          </div>
          <div className="w-[841px] h-[176px] mx-auto relative z-10">
            <p className="text-[#B8C2CF] text-[36px] font-semibold leading-[44px] tracking-[1.08px]">
              With{' '}
              <span className="text-[#80D261]">AI-powered tutors</span>
              ,{' '}
              <span className="text-[#D261CF]">gamified learning</span>
              , and{' '}
              <span className="text-[#6F61D2]">interactive storytelling</span>
              , we&apos;re making education something kids want to do—not something they have to do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 