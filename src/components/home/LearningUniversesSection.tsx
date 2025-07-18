import Image from 'next/image';
import { videosImage, gamesImage, booksImage, codeImage, quizImage, learningUniBg, atomImage } from '@/assets';

export default function LearningUniversesSection() {
  return (
    <section className="mt-20 pt-20 pb-8 relative">
      <div
        className="absolute -inset-20 transform scale-x-100 sm:scale-x-65 md:scale-x-75 lg:scale-x-100 xl:scale-x-110 2xl:scale-x-110"
        style={{
          backgroundImage: `url(${learningUniBg.src})`,
          backgroundSize: "1920px 731px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="flex justify-center mb-4"></div>
          {/* Atom decoration positioned to the left of heading */}
          <div className="absolute left-1/3 top-1/2 transform -translate-x-96 -translate-y-1/2">
            <Image
              src={atomImage}
              alt="Atom decoration"
              width={60}
              height={60}
              className="object-contain opacity-70"
            />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 transform -translate-y-2.5">
            Our Learning Universes
          </h2>
          <p className="text-xl text-gray-600 w-[660px] mx-auto font-semibold">
            With thousands of videos, games, books and quizzes at their
            fingertips,
            <br />
            your child will never want to stop learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <div className="w-40 h-40 flex items-center justify-center">
                <Image
                  src={videosImage}
                  alt="Videos"
                  width={160}
                  height={160}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Videos</h3>
            <p className="text-gray-600 text-sm w-[172px] mx-auto font-semibold">
              Bite-sized animations that simplify complex topics and keep
              learning fun.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <div className="w-40 h-40 flex items-center justify-center">
                <Image
                  src={gamesImage}
                  alt="Games"
                  width={160}
                  height={160}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Games</h3>
            <p className="text-gray-600 text-sm w-[172px] mx-auto font-semibold">
              Exciting missions that turn math, language, and science concepts
              into unforgettable adventures.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <div className="w-40 h-40 flex items-center justify-center">
                <Image
                  src={booksImage}
                  alt="Books"
                  width={160}
                  height={160}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Books</h3>
            <p className="text-gray-600 text-sm w-[172px] mx-auto font-semibold">
              Reimagined classics and historical tales that make reading and
              learning a true adventure.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <div className="w-40 h-40 flex items-center justify-center">
                <Image
                  src={codeImage}
                  alt="Coding"
                  width={160}
                  height={160}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Coding</h3>
            <p className="text-gray-600 text-sm w-[172px] mx-auto font-semibold">
              Beginner-friendly coding challenges that spark creativity and
              build problem-solving skills.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <div className="w-40 h-40 flex items-center justify-center">
                <Image
                  src={quizImage}
                  alt="Quizzes"
                  width={128}
                  height={128}
                  className="object-contain w-4/5 h-4/5"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Quizzes</h3>
            <p className="text-gray-600 text-sm w-[172px] mx-auto font-semibold">
              Cleverly designed quizzes that reinforce learning, helping your
              child retain concepts with ease.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-eklavya-purple hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-3xl transition-colors">
            Try for Free
          </button>
        </div>
      </div>
    </section>
  );
} 