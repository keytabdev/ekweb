export default function WhyEklavyaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Eklavya ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Because learning should be smart, fun and impactful.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6H10M10 6L7 3M10 6L7 9"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Smart & Aligned Learning
              </h3>
            </div>
            <p className="text-gray-600">
              Activities are designed to match school curriculums, ensuring
              your child stays on track while developing essential skills.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6H10M10 6L7 3M10 6L7 9"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Engaging & Insightful
              </h3>
            </div>
            <p className="text-gray-600">
              Gamified experiences keep kids motivated, with real-time
              progress tracking to help parents and teachers understand.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6H10M10 6L7 3M10 6L7 9"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Safe & Personalized Growth
              </h3>
            </div>
            <p className="text-gray-600">
              A distraction-free environment with tailored learning supports
              your child&apos;s unique journey from basics to advanced
              concepts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 