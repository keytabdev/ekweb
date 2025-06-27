import Image from 'next/image';
import { helloImage, chatbotImage, smileyImage } from '@/assets';

export default function MeetEkAiSection() {
  return (
    <section className="py-28 mt-40 bg-white   relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Hello bubble positioned at top left */}
        <div className="absolute top-0 left-230 z-35">
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
                    fontFamily: 'Graphie',
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

                {/* Chatbot positioned absolutely on top */}
        <div className="absolute top-1/2 transform -translate-y-3/8 z-30" style={{ right: '400px' }}>
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