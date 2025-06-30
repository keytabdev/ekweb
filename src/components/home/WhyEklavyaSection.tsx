export default function WhyEklavyaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Eklavya ?
          </h2>
          <div className="self-stretch h-7 text-center justify-start text-zinc-900 text-xl font-normal font-['Graphie'] leading-7">
            Because learning should be smart, fun and impactful.
          </div>
        </div>

        {/* Text containers */}
        <div className="mx-24 flex justify-center gap-16 mb-16">
          <div className="w-[420px] h-33 flex gap-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
            <div className="flex-1">
              <h3 className="text-neutral-700 text-2xl font-semibold font-['Graphie'] capitalize leading-relaxed text-left mb-2 whitespace-nowrap">
                Smart & aligned learning
              </h3>
              <p className="text-neutral-700 text-base font-normal font-['Graphie'] leading-relaxed text-left">
                Activities are designed to match school curriculums, ensuring
                your child stays on track while developing essential skills.
              </p>
            </div>
          </div>

          <div className="w-[420px] h-33 flex gap-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
            <div className="flex-1">
              <h3 className="text-neutral-700 text-2xl font-semibold font-['Graphie'] capitalize leading-relaxed text-left mb-2 whitespace-nowrap">
                Engaging & insightful
              </h3>
              <p className="text-neutral-700 text-base font-normal font-['Graphie'] leading-relaxed text-left">
                Gamified experiences keep kids motivated, with real-time
                progress tracking to help parents and teachers understand.
              </p>
            </div>
          </div>

          <div className="w-[420px] h-33 flex gap-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
            <div className="flex-1">
              <h3 className="text-neutral-700 text-2xl font-semibold font-['Graphie'] capitalize leading-relaxed text-left mb-2 whitespace-nowrap">
                Safe & personalized growth
              </h3>
              <p className="text-neutral-700 text-base font-normal font-['Graphie'] leading-relaxed text-left">
                A distraction-free environment with tailored learning supports
                your child&apos;s unique journey from basics to advanced
                concepts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 