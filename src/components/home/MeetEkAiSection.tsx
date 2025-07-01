import Image from 'next/image';
import { helloImage, chatbotImage, smileyImage } from '@/assets';

export default function MeetEkAiSection() {
  return (
    <section className="py-28 mt-40 bg-white relative overflow-visible">
      <div className="container mx-auto px-6 relative">
        {/* Hello bubble positioned at middle of container */}
        <div 
          className="absolute z-35"
          style={{ 
            top: '-180px', // Move up above the container
            left: 'calc(50% - 80px)', // Center of screen minus half hello image width (80px) to center it horizontally
          }}
        >
          <Image
            src={helloImage}
            alt="Hello speech bubble"
            width={160}
            height={120}
            className="drop-shadow-lg"
          />
        </div>

        {/* Smiley decoration - top left corner */}
        <div 
          className="absolute z-35"
          style={{ 
            top: '-190px', // Position above the container
            left: 'calc(50% - 595.5px + 40px)', // Center - half container width + half smiley width to position at left edge
          }}
        >
          <Image
            src={smileyImage}
            alt="Smiley decoration"
            width={80}
            height={80}
          />
        </div>

        {/* Blue rounded container for text only */}
        <div
          className="bg-[#002A42] rounded-3xl p-8 shadow-2xl relative z-10 mx-auto"
          style={{ width: "1191px", height: "288px" }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side - Text content */}
            <div className="lg:w-1/2 space-y-6">
              <h2 
                className="text-white"
                style={{
                  fontSize: '36px',
                  fontStyle: 'normal',
                  lineHeight: '56px',
                  letterSpacing: '0.36px'
                }}
              >
                <span style={{ fontWeight: 700 }}>Meet AskEk,</span>
                <span style={{ fontWeight: 400 }}> your 24/7 AI Buddy to answer all your questions, help with homework, and inspire curiosity.</span>
              </h2>
            </div>

            {/* Right side - Empty space for layout */}
            <div className="lg:w-1/2"></div>
          </div>
        </div>

        {/* Chatbot positioned relative to blue container */}
        <div 
          className="absolute top-1/2 z-30"
          style={{ 
            left: 'calc(50% + 595.5px - 119px - 450px)', // Center + half container width (595.5px) - 10% of container width (119px) - half chatbot width (250px)
            transform: 'translateY(-37.5%)'
          }}
        >
          <div className="w-120 h-120">
            <Image 
              src={chatbotImage} 
              alt="AskEk AI Chatbot"
              width={500}
              height={500}
              className="drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 