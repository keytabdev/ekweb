import React from 'react';
import Image from 'next/image';
import { grassSvg, authBgSvg } from '@/assets';

export default function AuthBackground() {
  return (
    <div className="absolute inset-0 bg-white">
      {/* Top left background SVG - 500x500 */}
      <div className="absolute top-0 left-0 w-[750px] h-[750px]">
        <Image
          src={authBgSvg}
          alt="Auth background"
          width={750}
          height={750}
          className="object-cover"
        />
      </div>
      
      {/* Grass SVG - bottom 10% of screen */}
      <div className="absolute bottom-0 left-0 w-full h-[30%]">
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