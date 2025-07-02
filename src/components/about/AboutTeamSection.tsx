import Image from 'next/image';
// import { cloudsVeryLight, eklavyaButterfly, greyFlower } from '@/assets';
import cloudsVeryLight from '../../assets/about/clouds (very light color).png';
import eklavyaButterfly from '../../assets/about/eklavya-butterfly.png';
import greyFlower from '../../assets/about/grey-flower.svg';

export default function AboutTeamSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background clouds */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Image src={cloudsVeryLight} alt="Clouds Background" fill className="object-cover object-top w-full h-full" />
      </div>
      {/* Decorative butterfly */}
      <div className="absolute left-10 top-10 z-10 opacity-80">
        <Image src={eklavyaButterfly} alt="Butterfly" width={64} height={64} />
      </div>
      {/* Decorative flower */}
      <div className="absolute right-10 bottom-10 z-10 opacity-60">
        <Image src={greyFlower} alt="Grey Flower" width={56} height={56} />
      </div>
      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2D1A47] mb-10">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {/* Placeholder team cards */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-20 h-20 bg-[#F6EFFF] rounded-full mb-4" />
            <span className="font-bold text-lg text-[#895BAE]">Name</span>
            <span className="text-[#3D3D3D] text-sm mb-2">Role</span>
            <span className="text-[#666] text-xs">Short bio about this team member goes here.</span>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-20 h-20 bg-[#E6F7F1] rounded-full mb-4" />
            <span className="font-bold text-lg text-[#2D8A4B]">Name</span>
            <span className="text-[#3D3D3D] text-sm mb-2">Role</span>
            <span className="text-[#666] text-xs">Short bio about this team member goes here.</span>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-20 h-20 bg-[#FFF9E6] rounded-full mb-4" />
            <span className="font-bold text-lg text-[#E2B14A]">Name</span>
            <span className="text-[#3D3D3D] text-sm mb-2">Role</span>
            <span className="text-[#666] text-xs">Short bio about this team member goes here.</span>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-20 h-20 bg-[#FFD6E6] rounded-full mb-4" />
            <span className="font-bold text-lg text-[#E26BAA]">Name</span>
            <span className="text-[#3D3D3D] text-sm mb-2">Role</span>
            <span className="text-[#666] text-xs">Short bio about this team member goes here.</span>
          </div>
        </div>
      </div>
    </section>
  );
} 