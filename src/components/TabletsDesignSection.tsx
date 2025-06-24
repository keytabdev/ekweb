export default function TabletsDesignSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tablets Designed for Learning: Your Child&apos;s Personal Learning Companion
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At Eklavya, we understand the challenges of learning on devices filled with distractions. That&apos;s why we&apos;ve created learning-focused tablets, optimized for your child&apos;s success.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Tablet mockup placeholder */}
          <div className="flex justify-center">
            <svg
              width="400"
              height="300"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="border-2 border-dashed border-gray-300 rounded-lg"
            >
              <rect width="400" height="300" fill="#f9fafb"/>
              <rect x="150" y="100" width="100" height="80" rx="8" fill="#374151" stroke="#6b7280" strokeWidth="2"/>
              <rect x="155" y="105" width="90" height="60" fill="#e5e7eb"/>
              <circle cx="200" cy="175" r="4" fill="#6b7280"/>
              <rect x="120" y="120" width="80" height="60" rx="6" fill="#9ca3af" opacity="0.5"/>
              <rect x="200" y="120" width="80" height="60" rx="6" fill="#9ca3af" opacity="0.5"/>
              <text x="200" y="220" textAnchor="middle" className="fill-gray-600 text-sm">
                Tablet Design Banner
              </text>
              <text x="200" y="240" textAnchor="middle" className="fill-gray-600 text-xs">
                Coming Soon
              </text>
            </svg>
          </div>

          {/* Right side - Features */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Distraction-Free Learning</h3>
              <p className="text-gray-600">
                with no ads, pop-ups, or notifications to pull them away from learning. The tablet is pre-installed in Tablets Designed for Learning with Eklavya&apos;s entire learning universe, so they&apos;re always one click away from adventure.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tailored content</h3>
              <p className="text-gray-600">
                based on age, curriculum, and individual learning needs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Parental controls</h3>
              <p className="text-gray-600">
                ensure peace of mind. No external apps or risky downloads—just a safe space to explore and grow.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Offline access</h3>
              <p className="text-gray-600">
                ensures no Wi-Fi interruptions during learning time.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Track What They&apos;ve Learned</h3>
              <p className="text-gray-600">
                Stay in the loop with progress reports and skill summaries, because we know you love to see them win.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Control Screen Time</h3>
              <p className="text-gray-600">
                Block the tablet or set schedules to ensure balanced learning and play.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 