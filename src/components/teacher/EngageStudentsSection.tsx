export default function EngageStudentsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 font-graphie">
            Engage Every Student, Every Time
          </h2>
          <p className="text-[#1A1A1A] text-center text-[21px] font-normal leading-[28px] font-graphie">
            Innovative Features Designed to Keep Learning Fun and Impactful.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 2xl:gap-[60px] max-w-6xl mx-auto">
          <div className="px-10 py-8 rounded-xl text-center bg-[#CAFEE8] shadow-[0px_4px_12px_0px_rgba(0,255,178,0.10)] rounded-xl font-graphie">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 whitespace-nowrap font-graphie">
              Gamified Learning Paths
            </h3>
            <p className="text-[#38393E] text-center text-[17px] font-normal leading-[26px] font-graphie">
              Make learning rewarding by assigning gaming points to your
              quizzes, books and challenges. Make it competitive with our
              leaderboard.
            </p>
          </div>

          <div className="px-10 py-8 rounded-xl text-center bg-[#F6D1FF] shadow-[0px_4px_12px_0px_rgba(219,0,255,0.10)] rounded-xl font-graphie">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 whitespace-nowrap font-graphie">
              Make Learning Interactive
            </h3>
            <p className="text-[#38393E] text-center text-[17px] font-normal leading-[26px] font-graphie">
              Enrich your lessons with dynamic content like interactive
              videos, games, comics, quizzes, and more to keep students
              engaged and excited.
            </p>
          </div>

          <div className="px-10 py-8 rounded-xl text-center bg-[#FEF3CB] shadow-[0px_4px_12px_0px_rgba(255,230,0,0.10)] rounded-xl font-graphie">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 whitespace-nowrap font-graphie">
              Learning Outcomes
            </h3>
            <p className="text-[#38393E] text-center text-[17px] font-normal leading-[26px] font-graphie">
              Assign measurable learning outcomes to courses and lessons,
              making it easier to track progress and assess student
              understanding effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 