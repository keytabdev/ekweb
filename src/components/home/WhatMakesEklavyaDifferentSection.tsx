import { learningUniBg, differenceImage, bubblesImage } from '@/assets';

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
      
      {/* Bubble decorations */}
      {/* Top right bubble - 600px from center */}
      <div 
        className="absolute top-30 z-20"
        style={{
          width: '26px',
          height: '26px',
          rotate: '40deg',
          left: 'calc(50% + 600px)',
          backgroundImage: `url(${bubblesImage.src})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Bottom left bubble - 600px from center */}
      <div 
        className="absolute bottom-20 z-20"
        style={{
          width: '30px',
          height: '40px',
          left: 'calc(50% - 650px)',
          backgroundImage: `url(${bubblesImage.src})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 
          className="text-center mb-16"
          style={{
            color: '#1A1A1A',
            
            fontSize: '36px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '44px',
            letterSpacing: '0.36px'
          }}
        >
          What Makes Eklavya Different?
        </h2>
        
        <div className="max-w-6xl mx-auto relative">
          {/* Single difference SVG background containing both containers */}
          <div 
            className="w-full min-h-[480px] relative"
            style={{
              backgroundImage: `url(${differenceImage.src})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* For Kids Content - Left Side */}
            <div className="absolute left-[4%] top-[15%] w-[calc(40%+60px)] p-6">
              <h3 
                className="mb-6"
                style={{
                  color: '#1A1A1A',
                  
                  fontSize: '21px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '32px',
                }}
              >
                For Kids: They Think They&apos;re Playing
              </h3>
              
              <ul className="space-y-2">
                <li 
                  className="flex items-start"
                  style={{
                    color: '#1A1A1A',
                    fontFamily: 'Graphie, sans-serif',
                    fontSize: '19px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '36px',
                    letterSpacing: '1px',

                  }}
                >
                  <span className="mr-3 mt-1">•</span>
                  <span>Battling number ninjas while mastering multiplication.</span>
                </li>
                <li 
                  className="flex items-start"
                  style={{
                    color: '#1A1A1A',
                    fontFamily: 'Graphie, sans-serif',
                    fontSize: '19px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '26px',
                    letterSpacing: '1px',

                  }}
                >
                  <span className="mr-3 mt-1">•</span>
                  <span>Saving kingdoms while improving grammar.</span>
                </li>
                <li 
                  className="flex items-start"
                  style={{
                    color: '#1A1A1A',
                    fontFamily: 'Graphie, sans-serif',
                    fontSize: '19px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '26px',
                    letterSpacing: '1px',

                  }}
                >
                  <span className="mr-3 mt-1">•</span>
                  <span>Building castles while developing creativity.</span>
                </li>
                <li 
                  className="flex items-start"
                  style={{
                    color: '#1A1A1A',
                    fontFamily: 'Graphie, sans-serif',
                    fontSize: '19px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '26px',
                    letterSpacing: '1px',

                  }}
                >
                  <span className="mr-3 mt-1">•</span>
                  <span>Exploring galaxies while unlocking scientific discoveries.</span>
                </li>
              </ul>
            </div>

            {/* For Parents & Teachers Content - Right Side */}
            <div className="absolute right-[0%] top-[15%] w-[calc(40%+60px)] p-6">
              <h3 
                className="mb-6"
                style={{
                  color: '#1A1A1A',
                  
                  fontSize: '21px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '26px'
                }}
              >
                For Parents & Teachers: You Know They&apos;re Learning
              </h3>
              
              <ul className="space-y-2">
                <li 
                  className="flex items-start"
                  style={{
                    color: '#1A1A1A',
                    fontFamily: 'Graphie, sans-serif',
                    fontSize: '19px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '36px',
                    letterSpacing: '1px',

                  }}
                >
                  <span className="mr-3 mt-1">•</span>
                  <span>Curriculum-aligned lessons ensure they stay <br /> on track with school requirements</span>
                </li>
                <li 
                  className="flex items-start"
                  style={{
                    color: '#1A1A1A',
                    fontFamily: 'Graphie, sans-serif',
                    fontSize: '19px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '26px',
                    letterSpacing: '1px',

                  }}
                >
                  <span className="mr-3 mt-1">•</span>
                  <span>Skill-building quests develop critical thinking, creativity, and problem-solving</span>
                </li>
                <li 
                  className="flex items-start"
                  style={{
                    color: '#1A1A1A',
                    fontFamily: 'Graphie, sans-serif',
                    fontSize: '19px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '36px',
                    letterSpacing: '1px',

                  }}
                >
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