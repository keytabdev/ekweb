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

  const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide);

  // Update cards per slide on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(getCardsPerSlide());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(gameCards.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Every Adventure Is a Lesson in Disguise
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button className="px-4 py-2 bg-eklavya-purple text-white rounded-full font-medium">
              PreK
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">
              K
            </button>
            {[1, 2, 3, 4, 5, 6].map((grade) => (
              <button
                key={grade}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
              >
                {grade}
              </button>
            ))}

            <div className="ml-8 pl-8 border-l border-gray-300">
              <button className="flex items-center gap-2 px-8 py-2 border border-gray-300 bg-white hover:bg-gray-50 min-w-[120px]">
                Subject
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedTab("Interactive courses")}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedTab === "Interactive courses"
                  ? "bg-eklavya-purple text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Interactive courses
            </button>
            <button
              onClick={() => setSelectedTab("Videos")}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedTab === "Videos"
                  ? "bg-eklavya-purple text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Videos
            </button>
            <button
              onClick={() => setSelectedTab("Games")}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedTab === "Games"
                  ? "bg-eklavya-purple text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Games
            </button>
            <button
              onClick={() => setSelectedTab("Books")}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedTab === "Books"
                  ? "bg-eklavya-purple text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Books
            </button>
            <button
              onClick={() => setSelectedTab("Code")}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedTab === "Code"
                  ? "bg-eklavya-purple text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Code
            </button>
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Math missions, language expeditions, and science challenges make
            academic concepts unforgettable.
          </p>
        </div>

        {/* Dynamic Content Based on Selected Tab */}
        {selectedTab === "Games" && (
          <div className="relative max-w-7xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-8">
                      {gameCards
                        .slice(
                          slideIndex * cardsPerSlide,
                          slideIndex * cardsPerSlide + cardsPerSlide
                        )
                        .map((game) => (
                          <div
                            key={game.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                          >
                            <div
                              className={`h-40 bg-gradient-to-br ${game.gradient} relative`}
                            >
                              <div className="absolute inset-0 flex items-center justify-center">
                                {game.emoji && (
                                  <div className="text-5xl">{game.emoji}</div>
                                )}
                                {game.numbers && (
                                  <div className="flex space-x-2">
                                    {game.numbers.map((num, index) => (
                                      <div
                                        key={index}
                                        className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
                                      >
                                        {num}
                                      </div>
                                    ))}
                                  </div>
                                )}
                                {game.dots && (
                                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center">
                                    <div className="grid grid-cols-3 gap-1">
                                      {[...Array(game.dots)].map((_, i) => (
                                        <div
                                          key={i}
                                          className="w-2 h-2 bg-gray-800 rounded-full"
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
                                <div className="absolute bottom-3 left-4 flex space-x-1">
                                  {game.numberSequence.map((num) => (
                                    <div
                                      key={num}
                                      className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold"
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
                              <h3 className="text-xl font-bold text-gray-900 mb-1">
                                {game.title}
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {game.tags.map((tag, index) => (
                                  <span
                                    key={index}
                                    className={`px-3 py-1 rounded-full text-sm ${
                                      tag.includes("Adventure")
                                        ? "bg-green-100 text-green-800"
                                        : tag.includes("Addition")
                                        ? "bg-blue-100 text-blue-800"
                                        : tag.includes("Logic")
                                        ? "bg-purple-100 text-purple-800"
                                        : tag.includes("Pattern")
                                        ? "bg-orange-100 text-orange-800"
                                        : "bg-gray-100 text-gray-800"
                                    }`}
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
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
              disabled={currentSlide === 0}
            >
              <ChevronLeft
                className={`w-6 h-6 ${
                  currentSlide === 0 ? "text-gray-400" : "text-gray-600"
                }`}
              />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
              disabled={currentSlide === totalSlides - 1}
            >
              <ChevronRight
                className={`w-6 h-6 ${
                  currentSlide === totalSlides - 1
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index
                      ? "bg-eklavya-purple"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {selectedTab === "Interactive courses" && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interactive Courses
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Educational Videos
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Digital Books
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Coding Adventures
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
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