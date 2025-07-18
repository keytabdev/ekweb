import React from 'react'
import Image from 'next/image'
import rocket from '@/assets/pricing/rocket.png'
import books from '@/assets/pricing/books.png'
import trophy from '@/assets/pricing/trophy.png'
import backpack from '@/assets/pricing/backpack.png'
import { greenSwirlImage, redPastry, spiralArrow, bubblesImage } from '@/assets'

export default function LearningThatFeelsLikePlaySection() {
  return (
    <div className="w-full relative overflow-visible py-20 bg-white">
      {/* Decorative elements */}
      <div className="absolute top-[-60] left-4 z-10" style={{ width: '249.862px', height: '107.134px', flexShrink: 0 }}>
        <Image
          src={spiralArrow}
          alt="Spiral arrow decoration"
          width={249.862}
          height={107.134}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-[-60] right-4 z-10" style={{ width: '59.911px', height: '64.915px', flexShrink: 0 }}>
        <Image
          src={greenSwirlImage}
          alt="Green swirl decoration"
          width={59.911}
          height={64.915}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-0 left-4 z-10" style={{ width: '36.033px', height: '40.095px', flexShrink: 0 }}>
        <Image
          src={bubblesImage}
          alt="Bubbles decoration"
          width={36.033}
          height={40.095}
          className="w-full h-full object-contain"
          style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(246deg) brightness(89%) contrast(101%)' }}
        />
      </div>
      <div className="absolute bottom-60 right-0 z-10" style={{ width: '123.17px', height: '100.121px', transform: 'translateX(50%)', flexShrink: 0 }}>
        <Image
          src={redPastry}
          alt="Red pastry decoration"
          width={123.17}
          height={100.121}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-20 mx-auto px-32" style={{ maxWidth: 'fit-content' }}>
        {/* Free Adventure */}
        <div 
          className="relative rounded-xl overflow-hidden flex-shrink-0"
          style={{
            display: 'flex',
            width: '518px',
            height: '430px',
            padding: '96px 112px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            flexShrink: 0,
            
          }}
        >
          <Image
            src={rocket}
            alt="Free Adventure background"
            fill
            className="object-cover"
          />
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center pt-40">
            <h3 
              className="mb-3"
              style={{
                color: '#0184E2',
                fontFamily: 'Graphie',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '26px',
                textTransform: 'capitalize'
              }}
            >
              Free Adventure
            </h3>
            <div className="text-left">
              <p 
                className="mb-1 flex items-start"
                style={{
                  color: '#38393E',
                  fontFamily: 'Graphie',
                  fontSize: '17px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '20px'
                }}
              >
                <span className="mr-2 mt-1">•</span>
                <span>Ideal to explore and get started.</span>
              </p>
              <p 
                className="mb-1 flex items-start"
                style={{
                  color: '#38393E',
                  fontFamily: 'Graphie',
                  fontSize: '17px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '20px'
                }}
              >
                <span className="mr-2 mt-1">•</span>
                <span>Access to essential lessons and activities.</span>
              </p>
              <p 
                className="mb-1 flex items-start"
                style={{
                  color: '#38393E',
                  fontFamily: 'Graphie',
                  fontSize: '17px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '20px'
                }}
              >
                <span className="mr-2 mt-1">•</span>
                <span>A taste of gamified learning.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Learning Explorer */}
        <div 
          className="relative rounded-xl overflow-hidden flex-shrink-0"
          style={{
            display: 'flex',
            width: '518px',
            height: '430px',
            padding: '96px 112px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            flexShrink: 0,
            
          }}
        >
          <Image
            src={books}
            alt="Learning Explorer background"
            fill
            className="object-cover"
          />
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center pt-47">
            <h3 
              className="mb-3"
              style={{
                color: '#0184E2',
                fontFamily: 'Graphie',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '26px',
                textTransform: 'capitalize'
              }}
            >
              Learning Explorer
            </h3>
            <div className="text-left">
              <p 
                className="mb-1 flex items-start"
                style={{
                  color: '#38393E',
                  fontFamily: 'Graphie',
                  fontSize: '17px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '20px'
                }}
              >
                <span className="mr-2 mt-1">•</span>
                <span>Perfect for engaged learners.</span>
              </p>
              <p 
                className="mb-1 flex items-start"
                style={{
                  color: '#38393E',
                  fontFamily: 'Graphie',
                  fontSize: '17px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '20px'
                }}
              >
                <span className="mr-2 mt-1">•</span>
                <span>Balanced credits for regular learning.</span>
              </p>
              <p 
                className="mb-1 flex items-start"
                style={{
                  color: '#38393E',
                  fontFamily: 'Graphie',
                  fontSize: '17px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '20px'
                }}
              >
                <span className="mr-2 mt-1">•</span>
                <span>Full access to AI-powered study buddy and personalized learning paths.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Growth Champion */}
        <div 
          className="relative rounded-xl overflow-hidden flex-shrink-0"
          style={{
            display: 'flex',
            width: '518px',
            height: '430px',
            padding: '96px 112px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            flexShrink: 0,
            
          }}
        >
          <Image
            src={trophy}
            alt="Growth Champion background"
            fill
            className="object-cover"
          />
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center pt-40">
            <h3 
              className="mb-3"
              style={{
                color: '#0184E2',
                fontFamily: 'Graphie',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '26px',
                textTransform: 'capitalize'
              }}
            >
              Growth Champion
            </h3>
            <div className="text-left">
              <p 
                className="mb-1 flex items-start"
                style={{
                  color: '#38393E',
                  fontFamily: 'Graphie',
                  fontSize: '17px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '20px'
                }}
              >
                <span className="mr-2 mt-1">•</span>
                <span>Best for consistent learning and unlimited exploration.</span>
              </p>
              <p 
                className="mb-1 flex items-start"
                style={{
                  color: '#38393E',
                  fontFamily: 'Graphie',
                  fontSize: '17px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '20px'
                }}
              >
                <span className="mr-2 mt-1">•</span>
                <span>Unlimited credits for uninterrupted learning.</span>
              </p>
              <p 
                className="mb-1 flex items-start"
                style={{
                  color: '#38393E',
                  fontFamily: 'Graphie',
                  fontSize: '17px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '20px'
                }}
              >
                <span className="mr-2 mt-1">•</span>
                <span>Enhanced parental controls, weekly reports, and priority support.</span>
              </p>
            </div>
          </div>
        </div>

        {/* School Special */}
        <div 
          className="relative rounded-xl overflow-hidden flex-shrink-0"
          style={{
            display: 'flex',
            width: '518px',
            height: '430px',
            padding: '96px 112px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            flexShrink: 0,
            
          }}
        >
          <Image
            src={backpack}
            alt="School Special background"
            fill
            className="object-cover"
          />
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center pt-40">
            <h3 
              className="mb-3"
              style={{
                color: '#0184E2',
                fontFamily: 'Graphie',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '26px',
                textTransform: 'capitalize'
              }}
            >
              School Special
            </h3>
            <div className="text-left">
              <p 
                className="mb-1 flex items-start"
                style={{
                  color: '#38393E',
                  fontFamily: 'Graphie',
                  fontSize: '17px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '20px'
                }}
              >
                <span className="mr-2 mt-1">•</span>
                <span>Customized solutions for schools.</span>
              </p>
              <p 
                className="mb-1 flex items-start"
                style={{
                  color: '#38393E',
                  fontFamily: 'Graphie',
                  fontSize: '17px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '20px'
                }}
              >
                <span className="mr-2 mt-1">•</span>
                <span>Dedicated support and implementation.</span>
              </p>
              <p 
                className="mb-1 flex items-start"
                style={{
                  color: '#38393E',
                  fontFamily: 'Graphie',
                  fontSize: '17px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '20px'
                }}
              >
                <span className="mr-2 mt-1">•</span>
                <span>Special bulk pricing and tailored content alignment.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 