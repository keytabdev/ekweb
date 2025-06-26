import Image from 'next/image';
import { saveTimeBg, cloudImage, saveTime1Image, saveTime2Image, saveTime3Image } from '@/assets';

export default function SaveTimeSection() {
  return (
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
  );
} 