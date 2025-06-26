import Image from 'next/image';
import { transformLessonsPic, transformLessonsBg } from '@/assets';

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

        <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
          {/* Left side - Features */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  AI-Powered Lesson Creation
                </h3>
                <p className="text-gray-600">
                  Activities are designed to match school curriculums,
                  ensuring your child stays on track while developing
                  essential skills.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Gamified Learning Made Simple
                </h3>
                <p className="text-gray-600">
                  Choose from our extensive library of ready-to-play games,
                  craft your own with an intuitive drag-and-drop tool, or let
                  Eklavya AI handle it—just describe the game you want, and
                  it&apos;s ready in no time!
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Explainer Videos Made Easy
                </h3>
                <p className="text-gray-600">
                  Create engaging explainer videos using our AI to simplify
                  even the toughest topics and make them easy for your
                  students to understand.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Turn Lessons Into Comics
                </h3>
                <p className="text-gray-600">
                  Make History or any subject exciting by turning it into a
                  comic! Write your story, and our AI-powered comic creator
                  transforms it into an entertaining and educational comic
                  strip.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Built-In Library
                </h3>
                <p className="text-gray-600">
                  Access a vast library of ready-made courses and lesson plans
                  tailored to various age groups and subjects.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Transform Lessons Image */}
          <div className="relative h-[600px]">
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