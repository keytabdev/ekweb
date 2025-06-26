import Image from 'next/image';
import { monitorGrowthContainers, paperAirplaneImage } from '@/assets';

export default function MonitorGrowthSection() {
  return (
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
  );
} 