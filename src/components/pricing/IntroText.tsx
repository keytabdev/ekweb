import React from 'react';
import Image from 'next/image';
import redPastry from '@/assets/about/red-pastry.svg';
import { greyFlower, greenSwirlImage } from '@/assets';

export default function IntroText() {
  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-16">
            {/* Red Pastry in top right */}
      <div 
        className="absolute top-0 right-0 z-5"
        style={{ transform: 'translateX(80%) translateY(-70%) ' }}
      >
        <Image 
          src={redPastry}
          alt="Red pastry decoration"
          width={96}
          height={88}
          className="opacity-100"
        />
      </div>

      {/* Grey Flower in top left */}
      <div 
        className="absolute top-0 left-0 z-5"
        style={{ transform: 'translateX(-50%) translateY(-50%) rotate(15deg)' }}
      >
        <Image 
          src={greyFlower}
          alt="Grey flower decoration"
          width={140}
          height={140}
          className="opacity-100"
          style={{ transform: 'translateX(80%) translateY(50%)' }}
        />
      </div>

      {/* Green Swirl in bottom left */}
      <div 
        className="absolute bottom-0 left-0 z-5"
        style={{ transform: 'translateX(-30%) translateY(30%) rotate(-10deg)' }}
      >
        <Image 
          src={greenSwirlImage}
          alt="Green swirl decoration"
          width={60}
          height={60}
          className="opacity-100"
          style={{ transform: 'translateX(-120%) translateY(-100%)' }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <span style={{ 
          color: '#5FBE7A', 
          fontFamily: 'Graphie', 
          fontSize: '32px', 
          fontStyle: 'normal', 
          fontWeight: 550, 
          lineHeight: '44px', 
          letterSpacing: '1.08px' 
        }}>At Eklavya,</span>
        <span style={{ 
          color: '#B8C2CF', 
          fontFamily: 'Graphie', 
          fontSize: '32px', 
          fontStyle: 'normal', 
          fontWeight: 550, 
          lineHeight: '44px', 
          letterSpacing: '1.08px' 
        }}> we believe learning should never feel limited. Our pricing is designed with </span>
        <span style={{ 
          color: '#F4B400', 
          fontFamily: 'Graphie', 
          fontSize: '32px', 
          fontStyle: 'normal', 
          fontWeight: 550, 
          lineHeight: '44px', 
          letterSpacing: '1.08px' 
        }}>simplicity,</span>
        <span style={{ 
          color: '#B8C2CF', 
          fontFamily: 'Graphie', 
          fontSize: '32px', 
          fontStyle: 'normal', 
          fontWeight: 550, 
          lineHeight: '44px', 
          letterSpacing: '1.08px' 
        }}> </span>
        <span style={{ 
          color: '#D261CF', 
          fontFamily: 'Graphie', 
          fontSize: '32px', 
          fontStyle: 'normal', 
          fontWeight: 550, 
          lineHeight: '44px', 
          letterSpacing: '1.08px' 
        }}>flexibility,</span>
        <span style={{ 
          color: '#B8C2CF', 
          fontFamily: 'Graphie', 
          fontSize: '36px', 
          fontStyle: 'normal', 
          fontWeight: 550, 
          lineHeight: '44px', 
          letterSpacing: '1.08px' 
        }}> and </span>
        <span style={{ 
          color: '#6F61D2', 
          fontFamily: 'Graphie', 
          fontSize: '32px', 
          fontStyle: 'normal', 
          fontWeight: 550, 
          lineHeight: '44px', 
          letterSpacing: '1.08px' 
        }}>value in mind,</span>
        <span style={{ 
          color: '#B8C2CF', 
          fontFamily: 'Graphie', 
          fontSize: '32px', 
          fontStyle: 'normal', 
          fontWeight: 550, 
          lineHeight: '44px', 
          letterSpacing: '1.08px' 
        }}> ensuring your child <br /> stays excited and motivated without any hidden surprises.</span>
      </div>
    </div>
  );
} 