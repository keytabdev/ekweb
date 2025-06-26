export default function EngageStudentsSection() {
  return (
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
  );
} 