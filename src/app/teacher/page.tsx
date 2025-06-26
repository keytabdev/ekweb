import { Metadata } from 'next';
import Footer from '@/components/Footer';
import React from 'react'
import { teacherHeroImage, transformLessonsPic, transformLessonsBg, classroom1Image, classroom2Image, saveTimeBg, cloudImage, saveTime1Image, saveTime2Image, saveTime3Image, monitorGrowthContainers, paperAirplaneImage } from '@/assets';
import Image from 'next/image';

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: 'Eklavya for Teachers - Smarter Tools, Inspired Teaching',
  description: 'Empower your teaching with AI-powered lesson creation, automated grading, gamified learning paths, and real-time analytics. Save time and inspire students with Eklavya.',
  keywords: ['teaching tools', 'AI lesson creation', 'automated grading', 'classroom management', 'educational technology', 'teacher resources', 'lesson planning', 'student analytics'],
};

export default function Teacher() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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
        <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl text-[#0A7183] italic mb-6">
              Smarter Tools, <br />
              <span className="text-white not-italic">Inspired Teaching!</span>
            </h1>
            <p className="text-xl mb-8 text-purple-100 max-w-xl">
              With Eklavya, you&apos;re not just teaching, you&apos;re creating
              impactful, unforgettable learning experiences. Start your journey
              with us today.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-[#00A8C5] px-8 py-3 rounded-l font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="  text-[#1A1A1A] px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-black hover:border-1 hover:border-black transition-colors">
                Check free material
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Engage Every Student, Every Time
            </h2>
            <p className="text-xl text-gray-600">
              Innovative Features Designed to Keep Learning Fun and Impactful.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-green-200 p-8 rounded-xl shadow-[4px_4px_12px_rgba(0,0,0,0.1)] border border-green-300 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Gamified Learning Paths
              </h3>
              <p className="text-gray-600">
                Make learning rewarding by assigning gaming points to your
                quizzes, books and challenges. Make it competitive with our
                leaderboard.
              </p>
            </div>

            <div className="bg-purple-200 p-8 rounded-xl shadow-[4px_4px_12px_rgba(0,0,0,0.1)] border border-purple-300 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Make Learning Interactive
              </h3>
              <p className="text-gray-600">
                Enrich your lessons with dynamic content like interactive
                videos, games, comics, quizzes, and more to keep students
                engaged and excited.
              </p>
            </div>

            <div className="bg-yellow-200 p-8 rounded-xl shadow-[4px_4px_12px_rgba(0,0,0,0.1)] border border-yellow-300 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Learning Outcomes
              </h3>
              <p className="text-gray-600">
                Assign measurable learning outcomes to courses and lessons,
                making it easier to track progress and assess student
                understanding effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Lessons Effortlessly Section */}
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

      {/* Create a Thriving Classroom Section */}
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

      {/* Save Time, Focus More on Teaching Section */}
      <section className="py-82 relative overflow-hidden my-16 min-h-[1200px] w-full">
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

        {/* Cloud Images */}
        <div className="absolute top-20 left-0">
          <Image
            src={cloudImage}
            alt="Cloud"
            width={80}
            height={50}
            className="object-contain"
          />
        </div>

        <div className="absolute top-8 right-20">
          <Image
            src={cloudImage}
            alt="Cloud"
            width={100}
            height={60}
            className="object-contain"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Save Time, Focus More on Teaching
            </h2>
            <p className="text-xl text-white">
              Streamline Your Workflow and Devote More Time to Inspiring Young
              Minds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              {/* Automated Grading Image */}
              <div className="mb-6 flex justify-center">
                <Image
                  src={saveTime1Image}
                  alt="Automated Grading"
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Automated Grading
              </h3>
              <p className="text-white">
                Say goodbye to tedious assessments. Eklavya handles them for
                you.
              </p>
            </div>

            <div className="text-center">
              {/* Simplified Lesson Planning Image */}
              <div className="mb-6 flex justify-center">
                <Image
                  src={saveTime2Image}
                  alt="Simplified Lesson Planning"
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Simplified Lesson Planning
              </h3>
              <p className="text-white">
                Plan entire terms in minutes with intuitive tools that keep you
                organized.
              </p>
            </div>

            <div className="text-center">
              {/* Pre-Made Resources Image */}
              <div className="mb-6 flex justify-center">
                <Image
                  src={saveTime3Image}
                  alt="Pre-Made Resources"
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Pre-Made Resources
              </h3>
              <p className="text-white">
                Leverage Eklavya&apos;s repository of ready-to-use lessons,
                activities and quizzes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden mx-8 my-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 relative">
            {/* Paper Airplane - Top Right */}
            <div className="absolute top-0 right-0">
              <Image
                src={paperAirplaneImage}
                alt="Paper Airplane"
                width={120}
                height={80}
                className="w-auto h-auto"
              />
            </div>

            <h2 className="text-4xl font-bold text-gray-800 mb-4 mt-16">
              Monitor Growth Like Never Before
            </h2>
            <p className="text-xl text-gray-600">
              Track each student&apos;s progress with precision and purpose
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Single Background Image */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
              <Image
                src={monitorGrowthContainers}
                alt="Monitor Growth Containers"
                fill
                className="object-contain"
              />
              
              {/* Text overlays positioned over the containers */}
              {/* Real-Time Dashboards - Left */}
              <div className="absolute left-[4%] md:left-[1%] lg:left-[0%] xl:left-[2%] top-[55%] transform -translate-y-1/2 
                             w-[25%] md:w-[28%] lg:w-[26%] xl:w-[24%] 
                             flex flex-col items-center justify-center px-1 md:px-3 lg:px-4 py-2 md:py-4 lg:py-6 z-10">
                <h3 className="text-xs md:text-base lg:text-lg xl:text-xl font-bold text-purple-600 mb-1 md:mb-3 text-center">
                  Real-Time Dashboards
                </h3>
                <p className="text-gray-700 text-center text-[10px] md:text-sm lg:text-base leading-tight md:leading-snug">
                  Track student performance at a glance, identifying strengths
                  and areas needing improvement.
                </p>
              </div>

              {/* Balanced Skill Development - Center */}
              <div className="absolute left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-1/2 
                             w-[25%] md:w-[28%] lg:w-[24%] xl:w-[22%] 
                             flex flex-col items-center justify-center px-1 md:px-3 lg:px-4 py-2 md:py-4 lg:py-6 z-10">
                <h3 className="text-xs md:text-base lg:text-lg xl:text-xl font-bold text-blue-600 mb-1 md:mb-3 text-center">
                  Balanced Skill Development
                </h3>
                <p className="text-gray-700 text-center text-[10px] md:text-sm lg:text-base leading-tight md:leading-snug">
                  Help students build confidence in weaker areas while
                  excelling in their strengths.
                </p>
              </div>

              {/* Data-Driven Insights - Right */}
              <div className="absolute right-[4%] md:right-[1%] lg:right-[0%] xl:right-[2%] top-[55%] transform -translate-y-1/2 
                             w-[25%] md:w-[28%] lg:w-[26%] xl:w-[24%] 
                             flex flex-col items-center justify-center px-1 md:px-3 lg:px-4 py-2 md:py-4 lg:py-6 z-10">
                <h3 className="text-xs md:text-base lg:text-lg xl:text-xl font-bold text-orange-600 mb-1 md:mb-3 text-center">
                  Data-Driven Insights
                </h3>
                <p className="text-gray-700 text-center text-[10px] md:text-sm lg:text-base leading-tight md:leading-snug">
                  Use actionable analytics to refine lessons and maximize
                  learning outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
