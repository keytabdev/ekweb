import Image from 'next/image';
import { earningBg, trophyImage, timeSvg, discoverSvg, quizSvg, readBookSvg, playSvg } from '@/assets';

export default function TheEarningLearningSystemSection() {
  return (
    <section className="pt-40 pb-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center -mb-8">
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
                  width={308}
                  height={308}
                  className="object-contain w-[clamp(198px,21.34vw,308px)] h-auto"
                />
              </div>
              
              {/* Step 1: Discover & Learn - Top Center Container */}
              <div className="absolute top-[4.5%] transform -translate-x-1/2 text-center" style={{ left: '49%' }}>
                <Image 
                  src={discoverSvg} 
                  alt="Discover & Learn" 
                  width={322}
                  height={222}
                  className="object-contain"
                />
              </div>
              
              {/* Step 2: Dive Into Stories - Right Container */}
              <div className="absolute top-[30%] text-center" style={{ right: '10%' }}>
                <Image 
                  src={readBookSvg} 
                  alt="Dive Into Stories" 
                  width={322}
                  height={222}
                  className="object-contain"
                />
              </div>
              
              {/* Step 3: Conquer Quizzes - Bottom Right Container */}
              <div className="absolute bottom-[12%] text-center" style={{ right: '17%' }}>
                <Image 
                  src={quizSvg} 
                  alt="Conquer Quizzes" 
                  width={322}
                  height={222}
                  className="object-contain"
                />
              </div>
              
              {/* Step 4: Earn Play Time - Bottom Left Container */}
              <div className="absolute bottom-[6.5%] text-center" style={{ left: '17%' }}>
                <Image 
                  src={timeSvg} 
                  alt="Earn Play Time" 
                  width={322}
                  height={222}
                  className="object-contain"
                />
              </div>
              
              {/* Step 5: Play & Explore - Left Container */}
              <div className="absolute top-[34%] text-center" style={{ left: '10%' }}>
                <Image 
                  src={playSvg} 
                  alt="Play & Explore" 
                  width={322}
                  height={222}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 