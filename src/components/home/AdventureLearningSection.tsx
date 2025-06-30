"use client";

import { useState } from "react";
import * as React from "react";
import Image from "next/image";
import {
  ChevronDown,
  Play,
  BookOpen,
  Code,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { 
  geometryGameCard,
  countingMoneyGameCard,
  timeGameCard,
  shapesGameCard,
  someGameCard,
  blueStar
} from "../../assets";

export default function AdventureLearningSection() {
  const [selectedTab, setSelectedTab] = useState("Games");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const gameCards = [
    {
      id: 1,
      title: "Geometry",
      image: geometryGameCard,
      tags: ["Adventure Game", "Addition", "Subtraction"]
    },
    {
      id: 2,
      title: "Counting Money",
      image: countingMoneyGameCard,
      tags: ["Adventure Game", "Addition", "Subtraction"]
    },
    {
      id: 3,
      title: "Time",
      image: timeGameCard,
      tags: ["Adventure Game", "Addition", "Subtraction"]
    },
    {
      id: 4,
      title: "Shapes",
      image: shapesGameCard,
      tags: ["Adventure Game", "Subtraction"]
    },
    {
      id: 5,
      title: "Math Puzzles",
      image: someGameCard,
      tags: ["Logic Game", "Problem Solving"]
    },
  ];

  // Create infinite loop by tripling the array
  const infiniteGameCards = [...gameCards, ...gameCards, ...gameCards];
  const cardWidth = 320; // 280px card + 40px gap (approx)
  const totalCards = gameCards.length;

  // Update for responsive behavior
  React.useEffect(() => {
    const handleResize = () => {
      // Reset to middle section for responsive calculation
      setCurrentSlide(totalCards);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [totalCards]);

  // Initialize at the middle section for seamless infinite scroll
  React.useEffect(() => {
    setCurrentSlide(totalCards);
  }, [totalCards]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
    
    // Reset to beginning of middle section when reaching end
    setTimeout(() => {
      if (currentSlide + 1 >= totalCards * 2) {
        setCurrentSlide(totalCards);
      }
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
    
    // Reset to end of middle section when reaching beginning
    setTimeout(() => {
      if (currentSlide - 1 < totalCards) {
        setCurrentSlide(totalCards * 2 - 1);
      }
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="py-20 bg-white">
      {/* Header content in container */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 relative">
          <Image 
            src={blueStar} 
            alt="Blue star" 
            width={90.814} 
            height={91.762}
            className="absolute left-1/2"
            style={{ 
              width: '160px',
              height: '160px',
              flexShrink: 0,
              transform: 'translateX(calc(-440%))',
              top: '-40%'
            }}
          />
          <h2 className="text-4xl font-bold mb-18" style={{ color: '#3D3D3D' }}>
            Every Adventure Is a Lesson in Disguise
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <button className="px-4 py-2 bg-eklavya-purple text-white rounded-2xl font-medium border-2" style={{ borderColor: '#3D3D3D' }}>
              Prek
            </button>
            <button className="px-5 py-2 bg-white rounded-3xl hover:bg-neutral-50 border-2" style={{ borderColor: '#3D3D3D', color: '#3D3D3D' }}>
              K
            </button>
            {[1, 2, 3, 4, 5, 6].map((grade) => (
              <button
                key={grade}
                className="px-5 py-2 bg-white rounded-3xl hover:bg-neutral-50 border-2"
                style={{ borderColor: '#3D3D3D', color: '#3D3D3D' }}
              >
                {grade}
              </button>
            ))}

            <div className="ml-12 pl-12 border-l border-neutral-300">
              <button className="flex items-center justify-between px-8 py-2 border-2 rounded bg-white hover:bg-neutral-50 min-w-[240px]" style={{ borderColor: '#3D3D3D', color: '#000000' }}>
                <span className="text-left">Subject</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <button
              onClick={() => setSelectedTab("Interactive courses")}
              className={`px-6 py-2 rounded-full transition-colors border-2 ${
                selectedTab === "Interactive courses"
                  ? "bg-eklavya-purple text-white"
                  : "bg-white hover:bg-neutral-50"
              }`}
              style={{ 
                borderColor: '#3D3D3D',
                color: selectedTab === "Interactive courses" ? 'white' : '#000000'
              }}
            >
              Interactive courses
            </button>
            <button
              onClick={() => setSelectedTab("Videos")}
              className={`px-6 py-2 rounded-full transition-colors border-2 ${
                selectedTab === "Videos"
                  ? "bg-eklavya-purple text-white"
                  : "bg-white hover:bg-neutral-50"
              }`}
              style={{ 
                borderColor: '#3D3D3D',
                color: selectedTab === "Videos" ? 'white' : '#000000'
              }}
            >
              Videos
            </button>
            <button
              onClick={() => setSelectedTab("Games")}
              className={`px-6 py-2 rounded-full transition-colors border-2 ${
                selectedTab === "Games"
                  ? "bg-eklavya-purple text-white"
                  : "bg-white hover:bg-neutral-50"
              }`}
              style={{ 
                borderColor: '#3D3D3D',
                color: selectedTab === "Games" ? 'white' : '#000000'
              }}
            >
              Games
            </button>
            <button
              onClick={() => setSelectedTab("Books")}
              className={`px-6 py-2 rounded-full transition-colors border-2 ${
                selectedTab === "Books"
                  ? "bg-eklavya-purple text-white"
                  : "bg-white hover:bg-neutral-50"
              }`}
              style={{ 
                borderColor: '#3D3D3D',
                color: selectedTab === "Books" ? 'white' : '#000000'
              }}
            >
              Books
            </button>
            <button
              onClick={() => setSelectedTab("Code")}
              className={`px-6 py-2 rounded-full transition-colors border-2 ${
                selectedTab === "Code"
                  ? "bg-eklavya-purple text-white"
                  : "bg-white hover:bg-neutral-50"
              }`}
              style={{ 
                borderColor: '#3D3D3D',
                color: selectedTab === "Code" ? 'white' : '#000000'
              }}
            >
              Code
            </button>
          </div>

          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#3D3D3D' }}>
            Math missions, language expeditions, and science challenges make
            academic concepts unforgettable.
          </p>
        </div>
      </div>

      {/* Games section - full width */}
      {selectedTab === "Games" && (
        <div className="relative w-full">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className={`flex gap-8 px-6 ${isTransitioning ? 'transition-transform duration-300 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${currentSlide * cardWidth}px)` }}
            >
              {infiniteGameCards.map((game, index) => (
                <div
                  key={`${game.id}-${index}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex-shrink-0"
                  style={{ width: '280px' }}
                >
                  <div className="h-40 relative overflow-hidden rounded-t-xl">
                    <Image 
                      src={game.image}
                      alt={game.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-2">
                    <h3 className="text-xl font-bold mb-1" style={{ color: '#3D3D3D' }}>
                      {game.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {game.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - moved towards center */}
          <button
            onClick={prevSlide}
            className="absolute left-12 top-1/2 -translate-y-1/2 bg-neutral-700 hover:bg-neutral-600 rounded-full p-2 shadow-lg hover:shadow-xl transition-all z-10"
            disabled={isTransitioning}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-12 top-1/2 -translate-y-1/2 bg-neutral-700 hover:bg-neutral-600 rounded-full p-2 shadow-lg hover:shadow-xl transition-all z-10"
            disabled={isTransitioning}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      )}

      {/* Other tab content in container */}
      <div className="container mx-auto px-6">
        {selectedTab === "Interactive courses" && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#3D3D3D' }}>
              Interactive Courses
            </h3>
            <p className="max-w-2xl mx-auto" style={{ color: '#3D3D3D' }}>
              Comprehensive interactive courses that guide your child through
              step-by-step learning experiences, complete with hands-on
              activities and real-time feedback.
            </p>
          </div>
        )}

        {selectedTab === "Videos" && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Play className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#3D3D3D' }}>
              Educational Videos
            </h3>
            <p className="max-w-2xl mx-auto" style={{ color: '#3D3D3D' }}>
              Engaging animated videos that break down complex concepts into
              bite-sized, easy-to-understand lessons that keep children
              entertained while they learn.
            </p>
          </div>
        )}

        {selectedTab === "Books" && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#3D3D3D' }}>
              Digital Books
            </h3>
            <p className="max-w-2xl mx-auto" style={{ color: '#3D3D3D' }}>
              Interactive digital books with stunning illustrations and
              immersive storytelling that bring classic tales and educational
              content to life.
            </p>
          </div>
        )}

        {selectedTab === "Code" && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Code className="w-10 h-10 text-cyan-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#3D3D3D' }}>
              Coding Adventures
            </h3>
            <p className="max-w-2xl mx-auto" style={{ color: '#3D3D3D' }}>
              Fun, beginner-friendly coding challenges and programming puzzles
              designed to introduce children to computational thinking and
              problem-solving skills.
            </p>
          </div>
        )}
      </div>
    </section>
  );
} 