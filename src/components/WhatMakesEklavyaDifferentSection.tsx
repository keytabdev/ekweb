import { learningUniBg, differenceImage } from '@/assets';

export default function WhatMakesEklavyaDifferentSection() {
  return (
    <section className="py-20 bg-white relative">
      <div 
        className="absolute inset-0 -mx-[50vw] left-1/2"
        style={{
          backgroundImage: `url(${learningUniBg.src})`,
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat-x',
          width: '100vw'
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          What Makes Eklavya Different?
        </h2>
        
        <div className="max-w-6xl mx-auto relative">
          {/* Single difference SVG background containing both containers */}
          <div 
            className="w-full min-h-[400px] relative"
            style={{
              backgroundImage: `url(${differenceImage.src})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* For Kids Content - Left Side */}
            <div className="absolute left-[5%] top-[15%] w-[40%] p-6">
              <h3 className="text-2xl font-bold mb-6 text-black">
                For Kids: They Think They&apos;re Playing
              </h3>
              
              <ul className="space-y-4 text-lg text-black">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Battling number ninjas while mastering multiplication.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Saving kingdoms while improving grammar.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Building castles while developing creativity.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Exploring galaxies while unlocking scientific discoveries.</span>
                </li>
              </ul>
            </div>

            {/* For Parents & Teachers Content - Right Side */}
            <div className="absolute right-[5%] top-[15%] w-[40%] p-6">
              <h3 className="text-2xl font-bold mb-6 text-black">
                For Parents & Teachers: You Know They&apos;re Learning
              </h3>
              
              <ul className="space-y-4 text-lg text-black">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Curriculum-aligned lessons ensure they stay on track with school requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Skill-building quests develop critical thinking, creativity, and problem-solving</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Progress reports show measurable improvement in academics and confidence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 