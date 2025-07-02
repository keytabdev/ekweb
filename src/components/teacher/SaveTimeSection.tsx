import Image from 'next/image';
import { saveTimeBg, saveTime1Image, saveTime2Image, saveTime3Image } from '@/assets';

export default function SaveTimeSection() {
  return (
    <section className="relative overflow-hidden w-[1440px] h-[731px] flex-shrink-0 mx-auto my-16 xl:w-full xl:max-w-none">
      {/* Save Time Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={saveTimeBg}
          alt="Save Time Background"
          fill
          className="w-full h-full object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" style={{ marginTop: '107px' }}>
          <h2 className="text-white text-center font-graphie text-[36px] font-bold leading-[44px] tracking-[0.36px] mb-4">
            Save Time, Focus More on Teaching
          </h2>
          <div className="h-[48px] flex items-center justify-center">
            <p className="text-white text-center font-graphie text-[21px] font-normal leading-[28px]">
              Streamline Your Workflow and Devote More Time to Inspiring Young
              Minds.
            </p>
          </div>
        </div>

        <div className="flex px-4 md:px-[144px] justify-center items-start self-stretch gap-8 md:gap-30">
          <div className="flex w-[250px] md:w-[300px] px-2 md:px-4 flex-col justify-center items-center">
            {/* Automated Grading Image */}
            <div className="mb-6 flex justify-center">
              <Image
                src={saveTime1Image}
                alt="Automated Grading"
                width={180}
                height={180}
                className="object-contain md:w-[235px] md:h-[235px]"
              />
            </div>
            <h3 className="text-white font-graphie text-[24px] font-semibold leading-[26px] capitalize mb-4 whitespace-nowrap">
              Automated Grading
            </h3>
            <p className="text-white text-center">
              Say goodbye to tedious assessments. Eklavya handles them for
              you.
            </p>
          </div>

          <div className="flex w-[250px] md:w-[300px] px-2 md:px-4 flex-col justify-center items-center">
            {/* Simplified Lesson Planning Image */}
            <div className="mb-6 flex justify-center">
              <Image
                src={saveTime2Image}
                alt="Simplified Lesson Planning"
                width={180}
                height={180}
                className="object-contain md:w-[235px] md:h-[235px]"
              />
            </div>
            <h3 className="text-white font-graphie text-[24px] font-semibold leading-[26px] capitalize mb-4 whitespace-nowrap">
              Simplified Lesson Planning
            </h3>
            <p className="text-white text-center">
              Plan entire terms in minutes with intuitive tools that keep you
              organized.
            </p>
          </div>

          <div className="flex w-[250px] md:w-[300px] px-2 md:px-4 flex-col justify-center items-center">
            {/* Pre-Made Resources Image */}
            <div className="mb-6 flex justify-center">
              <Image
                src={saveTime3Image}
                alt="Pre-Made Resources"
                width={180}
                height={180}
                className="object-contain md:w-[235px] md:h-[235px]"
              />
            </div>
            <h3 className="text-white font-graphie text-[24px] font-semibold leading-[26px] capitalize mb-4 whitespace-nowrap">
              Pre-Made Resources
            </h3>
            <p className="text-white text-center">
              Leverage Eklavya&apos;s repository of ready-to-use lessons,
              activities and quizzes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 