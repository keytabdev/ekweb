import React from 'react';

interface DynamicBulletPointProps {
  textHeight: number;
  className?: string;
  hideLine?: boolean;
}

export default function DynamicBulletPoint({ textHeight, className = "", hideLine = false }: DynamicBulletPointProps) {
  // The bullet point circle is at y=13.5, so the line should start there
  const lineStartY = 13.5;
  const lineEndY = lineStartY + (textHeight * 1.9);
  
  return (
    <svg 
      width="29" 
      height={Math.max(97, lineEndY + 2)} 
      viewBox={`0 0 29 ${Math.max(97, lineEndY + 2)}`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {!hideLine && (
        <path 
          d={`M13 ${lineStartY}L13 ${lineEndY}`} 
          stroke="#D0E7D6" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
      )}
      <circle cx="13" cy="13.5" r="13" fill="#5FBE7A" fillOpacity="0.25"/>
      <circle cx="13.0004" cy="13.4995" r="9.45455" fill="#5FBE7A" fillOpacity="0.33"/>
      <circle cx="12.9996" cy="13.5005" r="3.54545" fill="#5FBE7A" fillOpacity="0.71"/>
    </svg>
  );
} 