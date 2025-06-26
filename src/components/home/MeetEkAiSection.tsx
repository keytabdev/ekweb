import Image from 'next/image';
import { helloImage, chatbotImage, smileyImage } from '@/assets';

export default function MeetEkAiSection() {
  return (
    <section className="py-28 bg-white   relative overflow-hidden">
      <div className="container mx-auto px-6">
                {/* Hello bubble positioned at top left */}
        <div className="absolute top-10 left-200 z-35">
          <Image 
            src={helloImage} 
            alt="Hello speech bubble"
            width={160}
            height={120}
            className="drop-shadow-lg"
          />
        </div>

        {/* Smiley decoration - top left corner */}
        <div className="absolute top-12 left-32 z-35">
          <Image 
            src={smileyImage} 
            alt="Smiley decoration"
            width={80}
            height={80}
          />
        </div>

                {/* Blue rounded container for text only */}
        <div className="bg-[#002A42] rounded-3xl p-12 shadow-2xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side - Text content */}
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Meet <span className="text-white">AskEk</span>, your 24/7 AI
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Buddy to answer all your questions, help with homework, and
                inspire curiosity.
              </p>
            </div>

            {/* Right side - Empty space for layout */}
            <div className="lg:w-1/2">
            </div>
          </div>
        </div>

        {/* Chatbot positioned absolutely on top */}
        <div className="absolute top-1/2 right-80 transform -translate-y-3/8 z-30">
          <div className="w-150 h-150">
            <Image 
              src={chatbotImage} 
              alt="AskEk AI Chatbot"
              width={880}
              height={880}
              className="drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 