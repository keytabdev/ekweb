"use client";

import { useState } from "react";
import * as React from "react";
import {
  ChevronDown,
  Play,
  BookOpen,
  Code,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function AdventureLearningSection() {
  const [selectedTab, setSelectedTab] = useState("Games");
  const [currentSlide, setCurrentSlide] = useState(0);

  const gameCards = [
    {
      id: 1,
      title: "Geometry",
      emoji: "🐷",
      gradient: "from-cyan-400 to-purple-500",
      symbol: "+",
      symbolColor: "bg-green-500",
      tags: ["Adventure Game", "Addition", "Subtraction"]
    },
    {
      id: 2,
      title: "Counting Money",
      emoji: null,
      gradient: "from-green-400 to-yellow-400",
      numbers: [4, 6],
      tags: ["Adventure Game", "Addition", "Subtraction"]
    },
    {
      id: 3,
      title: "Time",
      emoji: "⏰",
      gradient: "from-teal-500 to-green-600",
      numberSequence: [1, 2, 3, 4, 5],
      tags: ["Adventure Game", "Addition", "Subtraction"]
    },
    {
      id: 4,
      title: "Shapes",
      emoji: null,
      gradient: "from-indigo-500 to-purple-600",
      dots: 6,
      number: "9",
      tags: ["Adventure Game", "Subtraction"]
    },
    {
      id: 5,
      title: "Math Puzzles",
      emoji: "🧩",
      gradient: "from-pink-400 to-red-500",
      symbol: "=",
      symbolColor: "bg-blue-500",
      tags: ["Logic Game", "Problem Solving"]
    },
    {
      id: 6,
      title: "Number Patterns",
      emoji: "🔢",
      gradient: "from-blue-400 to-indigo-500",
      symbol: "∞",
      symbolColor: "bg-yellow-500",
      tags: ["Pattern Game", "Sequences"]
    }
  ];

  const getCardsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1536) return 5; // 2xl screens: 5 cards
      if (window.innerWidth >= 1280) return 4; // xl screens: 4 cards
      if (window.innerWidth >= 1024) return 3; // lg screens: 3 cards
      if (window.innerWidth >= 768) return 2;  // md screens: 2 cards
      return 1; // sm screens: 1 card
    }
    return 3; // default for SSR
  };



  // Update for responsive behavior
  React.useEffect(() => {
    const handleResize = () => {
      // Force re-render for responsive calculation
      setCurrentSlide(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = gameCards.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 3)); // Allow last cards to be partially visible
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#3D3D3D' }}>
            Every Adventure Is a Lesson in Disguise
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
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
              <button className="flex items-center justify-between px-8 py-2 border-2 rounded bg-white hover:bg-neutral-50 min-w-[240px]" style={{ borderColor: '#3D3D3D', color: '#3D3D3D' }}>
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
                color: selectedTab === "Interactive courses" ? 'white' : '#3D3D3D'
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
                color: selectedTab === "Videos" ? 'white' : '#3D3D3D'
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
                color: selectedTab === "Games" ? 'white' : '#3D3D3D'
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
                color: selectedTab === "Books" ? 'white' : '#3D3D3D'
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
                color: selectedTab === "Code" ? 'white' : '#3D3D3D'
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

        {/* Dynamic Content Based on Selected Tab */}
        {selectedTab === "Games" && (
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex gap-8 px-8 transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 320}px)` }}
              >
                {gameCards.map((game) => (
                  <div
                    key={game.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex-shrink-0"
                    style={{ width: '280px' }}
                  >
                            <div
                              className={`h-40 bg-gradient-to-br ${game.gradient} relative`}
                            >
                              <div className="absolute inset-0 flex items-center justify-center">
                                {game.emoji && (
                                  <div className="text-5xl">{game.emoji}</div>
                                )}
                                {game.numbers && (
                                  <div className="flex gap-4">
                                    {game.numbers.map((num, index) => (
                                      <div
                                        key={index}
                                        className="px-3 py-2 bg-white rounded-full font-bold text-xl border-2"
                                        style={{ 
                                          borderColor: '#3D3D3D',
                                          color: 'black'
                                        }}
                                      >
                                        {num}
                                      </div>
                                    ))}
                                  </div>
                                )}
                                {game.dots && (
                                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center">
                                    <div className="flex flex-wrap justify-center gap-2 max-w-[40px]">
                                      {[...Array(game.dots)].map((_, i) => (
                                        <div
                                          key={i}
                                          className="w-2 h-2 bg-neutral-800 rounded-full"
                                        ></div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>

                              {game.symbol && (
                                <div
                                  className={`absolute top-4 left-4 w-8 h-8 ${game.symbolColor} rounded-full flex items-center justify-center text-white font-bold`}
                                >
                                  {game.symbol}
                                </div>
                              )}

                              {game.numberSequence && (
                                <div className="absolute bottom-3 left-4 flex gap-2">
                                  {game.numberSequence.map((num) => (
                                    <div
                                      key={num}
                                      className="px-2 py-1 bg-white rounded-full text-xs font-bold border-2"
                                      style={{ 
                                        borderColor: '#3D3D3D',
                                        color: '#3D3D3D'
                                      }}
                                    >
                                      {num}
                                    </div>
                                  ))}
                                </div>
                              )}

                              {game.number && (
                                <div className="absolute bottom-3 left-4 text-white text-2xl font-bold">
                                  {game.number}
                                </div>
                              )}
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

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-neutral-700 hover:bg-neutral-600 rounded-full p-2 shadow-lg hover:shadow-xl transition-all z-10"
              disabled={currentSlide === 0}
            >
              <ChevronLeft
                className={`w-6 h-6 ${
                  currentSlide === 0 ? "text-neutral-400" : "text-white"
                }`}
              />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-neutral-700 hover:bg-neutral-600 rounded-full p-2 shadow-lg hover:shadow-xl transition-all z-10"
              disabled={currentSlide >= totalSlides - 3}
            >
              <ChevronRight
                className={`w-6 h-6 ${
                  currentSlide >= totalSlides - 3
                    ? "text-neutral-400"
                    : "text-white"
                }`}
              />
            </button>


          </div>
        )}

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