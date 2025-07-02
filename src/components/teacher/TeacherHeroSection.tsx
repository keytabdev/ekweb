import Image from 'next/image';
import { teacherHeroImage } from '@/assets';

export default function TeacherHeroSection() {
  return (
    <section className="relative bg-white text-white w-full aspect-[1440/670]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={teacherHeroImage}
          alt="Teacher Hero Background"
          width={1440}
          height={670}
          className="w-full h-full object-fill"
          priority
        />
      </div>
      <div className="relative z-10 h-full flex items-center w-full">
        <div className="absolute left-[6%] sm:left-[8%] md:left-[9.6%] lg:left-[9.6%] max-w-2xl">
          <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl xl:text-[69.49px] text-[#0A7183] italic mb-6 leading-tight">
            Smarter <span className="relative">
              Tools,
              <svg xmlns="http://www.w3.org/2000/svg" width="110" height="10" viewBox="0 0 110 10" fill="none" className="absolute -bottom-2 left-0">
                <path fillRule="evenodd" clipRule="evenodd" d="M109.957 3.13802C109.508 1.97486 105.651 1.48511 94.0604 1.07699C83.2451 0.689264 70.6544 -0.43309 48.6563 0.179101C31.8415 0.648447 10.9046 2.52583 10.9046 3.56656C10.9046 4.32159 11.7208 4.342 19.516 3.66859C26.7195 3.0564 30.413 2.91355 34.9228 2.7503C16.8428 4.342 12.986 5.38272 3.35422 6.38264C-2.68606 7.01523 0.844238 8.83139 3.04812 8.64774C3.06853 8.64774 31.1681 6.36223 33.8209 6.48467C34.0658 6.50507 31.3925 6.87239 27.8622 7.30092C18.006 8.5253 19.9038 10.5657 27.2909 9.62704C52.1458 6.46405 75.5315 5.48455 93.5503 6.85177C99.2436 7.28031 99.8762 7.28031 99.8762 6.74974C99.8762 5.81105 98.3254 5.09704 95.897 4.95419C92.1014 4.70932 77.4905 4.01529 70.8788 3.81123C70.3687 3.79082 70.6135 3.40331 71.0625 3.36249C73.7561 3.09721 95.142 3.30107 103.549 3.58676C109.733 3.79082 110.181 3.77062 109.957 3.13802Z" fill="#0A7183"/>
              </svg>
            </span>
            <br />
            <span className="text-white font-bold not-italic">Inspired Teaching!</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-[24px] mb-8 text-black max-w-xl leading-relaxed">
            With Eklavya, you&apos;re not just teaching, you&apos;re creating
            impactful, unforgettable learning experiences. Start your journey
            with us today.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-[#00A8C5] px-8 py-3 rounded-l font-semibold hover:bg-gray-100 transition-colors text-[18px]">
              Get Started
            </button>
            <button className="text-[#1A1A1A] px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-black hover:border-1 hover:border-black transition-colors text-[18px]">
              Check free material
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 