import Image from 'next/image';
import { classroom1Image, classroom2Image } from '@/assets';

export default function ThrivingClassroomSection() {
  return (
    <section className="py-20 relative overflow-hidden mx-8 my-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          {/* Left SVG - Classroom 1 */}
          <div className="absolute left-8 top-8">
            <Image
              src={classroom1Image}
              alt="Classroom 1"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>

          {/* Right SVG - Classroom 2 */}
          <div className="absolute right-8 top-8">
            <Image
              src={classroom2Image}
              alt="Classroom 2"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>

          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Create a Thriving Classroom
          </h2>
          <p className="text-xl text-gray-600">
            Foster a Secure, Connected, and Focused Learning Environment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <div className="text-center p-6 rounded-2xl bg-white border border-[#DCF6D6] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Safe Learning Environment
            </h3>
            <p className="text-gray-600">
              No ads, no distractions—just pure, focused education.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white border border-[#DCF6D6] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Parental Collaboration
            </h3>
            <p className="text-gray-600">
              Share student progress reports to keep parents involved and
              supportive.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white border border-[#DCF6D6] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Offline Access
            </h3>
            <p className="text-gray-600">
              Keep lessons going even without an internet connection.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-[#5FBE7A] hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Try for free
          </button>
        </div>
      </div>
    </section>
  );
} 