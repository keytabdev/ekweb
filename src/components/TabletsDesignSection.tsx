import Image from 'next/image';
import { tabletsImage, tabletBg } from '@/assets';

export default function TabletsDesignSection() {
  return (
    <section className="mt-20 py-20 bg-gray-50 relative">
      <div 
        className="absolute inset-0 -mx-[50vw] left-1/2"
        style={{
          backgroundImage: `url(${tabletBg.src})`,
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat-x',
          width: '100vw'
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tablets Designed for Learning: Your Child&apos;s Personal Learning Companion
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At Eklavya, we understand the challenges of learning on devices filled with distractions. That&apos;s why we&apos;ve created learning-focused tablets, optimized for your child&apos;s success.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Tablet image */}
          <div className="flex justify-center">
            <Image 
              src={tabletsImage}
              alt="Learning Tablets"
              width={400}
              height={300}
              className="object-contain"
            />
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