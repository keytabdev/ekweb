export default function EngageStudentsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Engage Every Student, Every Time
          </h2>
          <p style={{
            color: '#1A1A1A',
            textAlign: 'center',
            fontSize: '21px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '28px'
          }}>
            Innovative Features Designed to Keep Learning Fun and Impactful.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 2xl:gap-[60px] max-w-6xl mx-auto">
          <div className="px-10 py-8 rounded-xl text-center" style={{
            background: '#CAFEE8',
            boxShadow: '0px 4px 12px 0px rgba(0, 255, 178, 0.10)',
            borderRadius: '12px'
          }}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 whitespace-nowrap">
              Gamified Learning Paths
            </h3>
            <p style={{
              color: '#38393E',
              textAlign: 'center',
              fontSize: '17px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '26px'
            }}>
              Make learning rewarding by assigning gaming points to your
              quizzes, books and challenges. Make it competitive with our
              leaderboard.
            </p>
          </div>

          <div className="px-10 py-8 rounded-xl text-center" style={{
            background: '#F6D1FF',
            boxShadow: '0px 4px 12px 0px rgba(219, 0, 255, 0.10)',
            borderRadius: '12px'
          }}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 whitespace-nowrap">
              Make Learning Interactive
            </h3>
            <p style={{
              color: '#38393E',
              textAlign: 'center',
              fontSize: '17px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '26px'
            }}>
              Enrich your lessons with dynamic content like interactive
              videos, games, comics, quizzes, and more to keep students
              engaged and excited.
            </p>
          </div>

          <div className="px-10 py-8 rounded-xl text-center" style={{
            background: '#FEF3CB',
            boxShadow: '0px 4px 12px 0px rgba(255, 230, 0, 0.10)',
            borderRadius: '12px'
          }}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 whitespace-nowrap">
              Learning Outcomes
            </h3>
            <p style={{
              color: '#38393E',
              textAlign: 'center',
              fontSize: '17px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '26px'
            }}>
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