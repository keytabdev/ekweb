"use client";

import { useState } from "react";
import Image from "next/image";
import { blueSwirlImage, yellowBlobImage } from "@/assets";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-black rounded-lg">
      <button
        className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors touch-manipulation"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base sm:text-lg font-medium text-gray-900 pr-4">{question}</span>
        <div className="text-black text-xl font-bold flex-shrink-0 min-w-[24px] flex items-center justify-center">
          {isOpen ? "−" : "+"}
        </div>
      </button>
      {isOpen && (
        <div className="px-4 sm:px-6 pb-3 sm:pb-4">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Blue swirl on left edge - hidden on mobile */}
        <div className="hidden md:block absolute left-0 top-0" style={{ transform: 'translateX(-80%)' }}>
          <Image 
            src={blueSwirlImage}
            alt="Blue swirl decoration"
            width={80}
            height={80}
            className="lg:w-[100px] lg:h-[100px] object-contain opacity-70"
          />
        </div>

        {/* Yellow blob on right edge - hidden on mobile */}
        <div className="hidden md:block absolute right-0 top-0" style={{ transform: 'translateX(80%)' }}>
          <Image 
            src={yellowBlobImage}
            alt="Yellow blob decoration"
            width={96}
            height={96}
            className="lg:w-[120px] lg:h-[120px] object-contain opacity-70"
          />
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-10 lg:mb-12 px-4">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <FAQItem
            question="What ages is Eklavya for?"
            answer="Eklavya is designed for children from PreK to 6th grade (ages 3-12). Our content is carefully curated and adapted to match the developmental stages and learning capabilities of each age group."
          />

          <FAQItem
            question="What subjects does Eklavya cover?"
            answer="Eklavya covers core subjects including Mathematics, Language Arts, Science, and introduces basic coding concepts. Each subject is presented through interactive games, videos, books, and quizzes that make learning engaging and effective."
          />

          <FAQItem
            question="How to get started with Eklavya?"
            answer="Getting started is simple! Sign up for a free trial, create your child's profile, and our platform will recommend age-appropriate content. You can begin with any subject or activity that interests your child most."
          />

          <FAQItem
            question="What skills will my child learn with Eklavya?"
            answer="Your child will develop fundamental academic skills in math, reading, and science, along with critical thinking, problem-solving, creativity, and basic programming concepts. Our activities also help build focus, persistence, and a love for learning."
          />

          <FAQItem
            question="Will it work with our busy schedule?"
            answer="Absolutely! Eklavya is designed for flexibility. Sessions can be as short as 10-15 minutes or longer based on your availability. Your child can learn anytime, anywhere, and progress is automatically saved."
          />

          <FAQItem
            question="My child loses interest quickly..."
            answer="That's exactly why we created Eklavya! Our gamified approach, colorful animations, interactive challenges, and reward systems are specifically designed to maintain engagement and make learning addictive in the best way possible."
          />

          <FAQItem
            question="Is it actually educational?"
            answer="Yes! All our content is developed by education experts and aligned with curriculum standards. While children have fun playing games and watching videos, they're actually mastering essential academic concepts and skills."
          />
        </div>
      </div>
    </section>
  );
} 