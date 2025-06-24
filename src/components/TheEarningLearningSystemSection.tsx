import Image from 'next/image';
import { earningBg, trophyImage } from '@/assets';

export default function TheEarningLearningSystemSection() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Earning Learning System: Turning Knowledge into Rewards
          </h2>
          <p className="text-gray-600">
            The more they learn, the more they play—keeping the cycle of growth and fun alive
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-[1650px] mx-auto">
            <div 
              className="relative w-full aspect-[1650/1050] max-h-[1400px] flex items-center justify-center"
              style={{
                backgroundImage: `url(${earningBg.src})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Central Trophy Image */}
              <Image 
                src={trophyImage} 
                alt="Trophy" 
                width={200}
                height={200}
                className="object-contain z-10"
              />
              
              {/* Step 1: Discover & Learn - Top */}
              <div className="absolute top-[7%] left-1/2 transform -translate-x-1/2 w-[12%] min-w-[180px] text-center">
                <div className="text-black font-bold text-lg mb-2">1. Discover & Learn</div>
                <p className="text-sm text-gray-600">
                  Every completed lesson unlocks a new skill—and every new skill is another step forward you want to keep going!
                </p>
              </div>
              
              {/* Step 2: Dive Into Stories - Right */}
              <div className="absolute right-[20%] top-[35%] w-[12%] min-w-[180px] text-center">
                <div className="text-black font-bold text-lg mb-2">2. Dive Into Stories</div>
                <p className="text-sm text-gray-600">
                  Unleash imagination with tales that inspire, excite, and reward curiosity at every turn.
                </p>
              </div>
              
              {/* Step 3: Conquer Quizzes - Bottom Right */}
              <div className="absolute right-[25%] bottom-[8%] w-[12%] min-w-[180px] text-center">
                <div className="text-black font-bold text-lg mb-2">3. Conquer Quizzes</div>
                <p className="text-sm text-gray-600">
                  Put their knowledge to the test, earn points, and feel the thrill of progress!
                </p>
              </div>
              
              {/* Step 4: Earn Play Time - Bottom Left */}
              <div className="absolute left-[24%] bottom-[4%] w-[12%] min-w-[180px] text-center">
                <div className="text-black font-bold text-lg mb-2">4. Earn Play Time</div>
                <p className="text-sm text-gray-600">
                  Participation equals rewards! Every activity adds up to more time for the games they love.
                </p>
              </div>
              
              {/* Step 5: Play & Explore - Left */}
              <div className="absolute left-[18%] top-[39%] w-[12%] min-w-[180px] text-center">
                <div className="text-black font-bold text-lg mb-2">5. Play & Explore</div>
                <p className="text-sm text-gray-600">
                  Use their earned game time to dive into exciting adventures that blend fun with learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 