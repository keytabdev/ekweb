import Image from 'next/image';
import { transformLessonsPic, transformLessonsBg } from '@/assets';
import DynamicBulletPoint from '@/components/shared/DynamicBulletPoint';

export default function TransformLessonsSection() {
  return (
    <section className="py-82 relative overflow-hidden my-16 min-h-[1600px]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={transformLessonsBg}
          alt="Transform Lessons Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Transform Lessons Effortlessly
          </h2>
          <p className="text-xl text-gray-600">
            Innovative Tools to Simplify, Gamify, and Enrich Learning.
          </p>
        </div>

        <div className="flex w-[1152px] h-[615px] justify-between items-start flex-shrink-0 mx-auto overflow-visible">
          {/* Left side - Features */}
          <div className="space-y-[10px] relative">
            <div className="flex gap-4 relative">
              <div className="flex-shrink-0 relative w-[29px] h-0">
                <DynamicBulletPoint textHeight={60} className="w-[29px] absolute left-0 top-0" />
              </div>
              <div className="max-w-[500px] pl-[0px] overflow-visible">
                <h3 className="text-[24px] font-semibold text-[#38393E] mb-2 font-graphie leading-[26px] capitalize">
                  AI-Powered Lesson Creation
                </h3>
                <p className="text-[17px] font-normal text-[#38393E] font-graphie leading-[24px]">
                  Activities are designed to match school curriculums,
                  ensuring your child stays on track while developing
                  essential skills.
                </p>
              </div>
            </div>

            <div className="flex gap-4 relative">
              <div className="flex-shrink-0 relative w-[29px] h-0">
                <DynamicBulletPoint textHeight={80} className="w-[29px] absolute left-0 top-0" />
              </div>
              <div className="max-w-[500px] pl-[0px] overflow-visible">
                <h3 className="text-[24px] font-semibold text-[#38393E] mb-2 font-graphie leading-[26px] capitalize">
                  Gamified Learning Made Simple
                </h3>
                <p className="text-[17px] font-normal text-[#38393E] font-graphie leading-[24px]">
                  Choose from our extensive library of ready-to-play games,
                  craft your own with an intuitive drag-and-drop tool, or let
                  Eklavya AI handle it—just describe the game you want, and
                  it&apos;s ready in no time!
                </p>
              </div>
            </div>

            <div className="flex gap-4 relative">
              <div className="flex-shrink-0 relative w-[29px] h-0">
                <DynamicBulletPoint textHeight={70} className="w-[29px] absolute left-0 top-0" />
              </div>
              <div className="max-w-[500px] pl-[0px] overflow-visible">
                <h3 className="text-[24px] font-semibold text-[#38393E] mb-2 font-graphie leading-[26px] capitalize">
                  Explainer Videos Made Easy
                </h3>
                <p className="text-[17px] font-normal text-[#38393E] font-graphie leading-[24px]">
                  Create engaging explainer videos using our AI to simplify
                  even the toughest topics and make them easy for your
                  students to understand.
                </p>
              </div>
            </div>

            <div className="flex gap-4 relative">
              <div className="flex-shrink-0 relative w-[29px] h-0">
                <DynamicBulletPoint textHeight={80} className="w-[29px] absolute left-0 top-0" />
              </div>
              <div className="max-w-[500px] pl-[0px] overflow-visible">
                <h3 className="text-[24px] font-semibold text-[#38393E] mb-2 font-graphie leading-[26px] capitalize">
                  Turn Lessons Into Comics
                </h3>
                <p className="text-[17px] font-normal text-[#38393E] font-graphie leading-[24px]">
                  Make History or any subject exciting by turning it into a
                  comic! Write your story, and our AI-powered comic creator
                  transforms it into an entertaining and educational comic
                  strip.
                </p>
              </div>
            </div>

            <div className="flex gap-4 relative">
              <div className="flex-shrink-0 relative w-[29px] h-0">
                <DynamicBulletPoint textHeight={60} className="w-[29px] absolute left-0 top-0" hideLine={true} />
              </div>
              <div className="max-w-[500px] pl-[0px] overflow-visible">
                <h3 className="text-[24px] font-semibold text-[#38393E] mb-2 font-graphie leading-[26px] capitalize">
                  Built-In Library
                </h3>
                <p className="text-[17px] font-normal text-[#38393E] font-graphie leading-[24px]">
                  Access a vast library of ready-made courses and lesson plans
                  tailored to various age groups and subjects.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Transform Lessons Image */}
          <div className="relative h-full w-full max-w-[500px]">
            <Image
              src={transformLessonsPic}
              alt="Transform Lessons"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 