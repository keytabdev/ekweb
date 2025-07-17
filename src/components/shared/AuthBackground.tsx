import React from 'react';
import Image from 'next/image';
import { grassSvg, authBgSvg } from '@/assets';

export default function AuthBackground() {
  return (
    <div className="absolute inset-0">
      {/* Top left background SVG - 500x500 */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px]">
        <Image
          src={authBgSvg}
          alt="Auth background"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
      
      {/* Grass SVG - bottom 10% of screen */}
      <div className="absolute bottom-0 left-0 w-full h-[10%]">
        <Image
          src={grassSvg}
          alt="Grass decoration"
          fill
          className="object-cover object-bottom"
        />
      </div>
    </div>
  );
} 