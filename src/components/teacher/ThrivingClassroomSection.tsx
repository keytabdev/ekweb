import Image from 'next/image';
import { classroom1Image, classroom2Image } from '@/assets';

export default function ThrivingClassroomSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          {/* Left SVG - Classroom 1 */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-[470px] lg:block hidden">
            <Image
              src={classroom1Image}
              alt="Classroom 1"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>

          {/* Right SVG - Classroom 2 */}
          <div className="absolute left-1/2 bottom-0 transform translate-x-[450px] lg:block hidden">
            <Image
              src={classroom2Image}
              alt="Classroom 2"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>

          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-graphie">
            Create a Thriving Classroom
          </h2>
          <p className="text-[21px] font-normal leading-[28px] text-[#1A1A1A] text-center font-graphie">
            Foster a Secure, Connected, and Focused Learning Environment
          </p>
        </div>

        <div className="flex justify-center items-center gap-[60px] w-[1152px] h-[250px] flex-shrink-0 mx-auto mb-12">
          <div className="flex flex-col items-center gap-2 h-[166px] px-10 py-[30px] rounded-xl border-t border-[#DCF6D6] bg-white shadow-[1px_7.11px_6px_0px_rgba(78,203,113,0.16)]">
            <h3 className="text-[24px] font-semibold leading-[26px] text-[#38393E] capitalize whitespace-nowrap mb-4 font-graphie">
              Safe Learning Environment
            </h3>
            <p className="text-[17px] font-normal leading-[24px] text-[#38393E] text-center font-graphie">
              No ads, no distractions—just pure, focused education.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 h-[166px] px-10 py-[30px] rounded-xl border-t border-[#DCF6D6] bg-white shadow-[1px_7.11px_6px_0px_rgba(78,203,113,0.16)]">
            <h3 className="text-[24px] font-semibold leading-[26px] text-[#38393E] capitalize whitespace-nowrap mb-4 font-graphie">
              Parental Collaboration
            </h3>
            <p className="text-[17px] font-normal leading-[24px] text-[#38393E] text-center font-graphie">
              Share student progress reports to keep parents involved and
              supportive.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 h-[166px] px-10 py-[30px] rounded-xl border-t border-[#DCF6D6] bg-white shadow-[1px_7.11px_6px_0px_rgba(78,203,113,0.16)]">
            <h3 className="text-[24px] font-semibold leading-[26px] text-[#38393E] capitalize whitespace-nowrap mb-4 font-graphie">
              Offline Access
            </h3>
            <p className="text-[17px] font-normal leading-[24px] text-[#38393E] text-center font-graphie">
              Keep lessons going even without an internet connection.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="inline-flex justify-center items-center gap-2 py-[18px] px-10 bg-[#5FBE7A] hover:bg-green-600 text-white font-semibold rounded-[50px] transition-colors font-graphie">
            Try for free
          </button>
        </div>
      </div>
    </section>
  );
} 