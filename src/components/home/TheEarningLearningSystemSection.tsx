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
          <div className="w-full max-w-[1440px] mx-auto">
            <div 
              className="relative w-full aspect-[1440/1270] max-h-[1270px]"
              style={{
                backgroundImage: `url(${earningBg.src})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Central Trophy Image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <Image 
                  src={trophyImage} 
                  alt="Trophy" 
                  width={280}
                  height={280}
                  className="object-contain w-[clamp(180px,19.4vw,280px)] h-auto"
                />
              </div>
              
              {/* Step 1: Discover & Learn - Top Center Container */}
              <div className="absolute top-[14.5%] transform -translate-x-1/2 w-[clamp(140px,13.9vw,200px)] text-center" style={{ left: 'clamp(47%, 49vw, 49%)' }}>
                <div className="text-[#1A1A1A] font-semibold whitespace-nowrap mb-1" style={{ fontFamily: 'Graphie', fontSize: 'clamp(14px, 1.46vw, 18px)', lineHeight: 'clamp(16px, 1.67vw, 21px)' }}>1. Discover & Learn</div>
                <p className="text-[#1A1A1A] font-normal" style={{ fontFamily: 'Graphie', fontSize: 'clamp(12px, 1.25vw, 15px)', lineHeight: 'clamp(14px, 1.53vw, 18px)' }}>
                  Every completed lesson unlocks a new skill—and every new skill is another step forward you want to keep going!
                </p>
              </div>
              
              {/* Step 2: Dive Into Stories - Right Container */}
              <div className="absolute top-[39%] w-[clamp(140px,13.9vw,200px)] text-center" style={{ right: 'clamp(8%, 13vw, 13%)' }}>
                <div className="text-[#1A1A1A] font-semibold whitespace-nowrap mb-1" style={{ fontFamily: 'Graphie', fontSize: 'clamp(14px, 1.46vw, 18px)', lineHeight: 'clamp(16px, 1.67vw, 21px)' }}>2. Dive Into Stories</div>
                <p className="text-[#1A1A1A] font-normal" style={{ fontFamily: 'Graphie', fontSize: 'clamp(12px, 1.25vw, 15px)', lineHeight: 'clamp(14px, 1.53vw, 18px)' }}>
                  Unleash imagination with tales that inspire, excite, and reward curiosity at every turn.
                </p>
              </div>
              
              {/* Step 3: Conquer Quizzes - Bottom Right Container */}
              <div className="absolute bottom-[15%] w-[clamp(140px,13.9vw,200px)] text-center" style={{ right: 'clamp(12%, 19vw, 19%)' }}>
                <div className="text-[#1A1A1A] font-semibold whitespace-nowrap mb-1" style={{ fontFamily: 'Graphie', fontSize: 'clamp(14px, 1.46vw, 18px)', lineHeight: 'clamp(16px, 1.67vw, 21px)' }}>3. Conquer Quizzes</div>
                <p className="text-[#1A1A1A] font-normal" style={{ fontFamily: 'Graphie', fontSize: 'clamp(12px, 1.25vw, 15px)', lineHeight: 'clamp(14px, 1.53vw, 18px)' }}>
                  Put their knowledge to the test, earn points, and feel the thrill of progress!
                </p>
              </div>
              
              {/* Step 4: Earn Play Time - Bottom Left Container */}
              <div className="absolute bottom-[11%] w-[clamp(140px,13.9vw,200px)] text-center" style={{ left: 'clamp(15%, 19.5vw, 19.5%)' }}>
                <div className="text-[#1A1A1A] font-semibold whitespace-nowrap mb-1" style={{ fontFamily: 'Graphie', fontSize: 'clamp(14px, 1.46vw, 18px)', lineHeight: 'clamp(16px, 1.67vw, 21px)' }}>4. Earn Play Time</div>
                <p className="text-[#1A1A1A] font-normal" style={{ fontFamily: 'Graphie', fontSize: 'clamp(12px, 1.25vw, 15px)', lineHeight: 'clamp(14px, 1.53vw, 18px)' }}>
                  Participation equals rewards! Every activity adds up to more time for the games they love.
                </p>
              </div>
              
              {/* Step 5: Play & Explore - Left Container */}
              <div className="absolute top-[43%] w-[clamp(140px,13.9vw,200px)] text-center" style={{ left: 'clamp(8%, 12.5vw, 12.5%)' }}>
                <div className="text-[#1A1A1A] font-semibold whitespace-nowrap mb-1" style={{ fontFamily: 'Graphie', fontSize: 'clamp(14px, 1.46vw, 18px)', lineHeight: 'clamp(16px, 1.67vw, 21px)' }}>5. Play & Explore</div>
                <p className="text-[#1A1A1A] font-normal" style={{ fontFamily: 'Graphie', fontSize: 'clamp(12px, 1.25vw, 15px)', lineHeight: 'clamp(14px, 1.53vw, 18px)' }}>
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