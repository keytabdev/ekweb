'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { eklavyaLogo, studentIcon, parentIcon, teacherIcon } from "@/assets";

export default function WelcomePage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<'student' | 'parent' | 'teacher' | null>(null);

  const handleRoleSelect = (role: 'student' | 'parent' | 'teacher') => {
    setSelectedRole(role);
  };

  const handleGetStarted = () => {
    if (selectedRole) {
      // Navigate to appropriate signup page based on role
      router.push(`/signup?role=${selectedRole}`);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Decorative Eklavya logos - Left side */}
      <div className="absolute left-[-35px] top-[7px] w-80 h-80">
        <Image
          src={eklavyaLogo}
          alt="Eklavya Logo"
          width={320}
          height={320}
          className="opacity-10"
        />
      </div>

      {/* Decorative Eklavya logos - Right side (inverted horizontally) */}
      <div className="absolute right-[33.77px] top-[221px] w-40 h-44">
        <Image
          src={eklavyaLogo}
          alt="Eklavya Logo"
          width={160}
          height={176}
          className="opacity-10 scale-x-[-1]"
        />
      </div>

      <div className="absolute right-[50px] bottom-[100px] w-24 h-24">
        <Image
          src={eklavyaLogo}
          alt="Eklavya Logo"
          width={96}
          height={96}
          className="opacity-10"
        />
      </div>

      {/* Main content */}
      <div className="w-full max-w-6xl mx-auto px-4 top-[80px] absolute left-1/2 transform -translate-x-1/2 flex flex-col justify-start items-center gap-12">
        {/* Header with logo and title */}
        <div className="inline-flex justify-center items-center gap-2">
          <div className="w-8 h-8 bg-eklavya-dark-green rounded-lg flex items-center justify-center">
            <Image
              src={eklavyaLogo}
              alt="Eklavya Logo"
              width={24}
              height={24}
              className="brightness-0 invert"
            />
          </div>
          <div className="w-72 text-center text-eklavya-dark-green text-3xl font-medium font-['Graphie']">
            Welcome To Eklavya
          </div>
        </div>

        {/* Role selection */}
        <div className="self-stretch flex flex-col justify-start items-center gap-8">
          <div className="self-stretch text-center text-neutral-700 text-xl font-medium font-['Graphie']">
            Who are you?
          </div>
          
          <div className="w-full flex justify-center items-center gap-8 lg:gap-16 xl:gap-24 2xl:gap-32">
            {/* Student Option */}
            <div 
              className="w-80 inline-flex flex-col justify-start items-center gap-4 cursor-pointer hover:scale-105 transition-transform duration-200"
              onClick={() => handleRoleSelect('student')}
            >
              <div className="relative w-56 h-56">
                {/* Background circles - only show when selected */}
                {selectedRole === 'student' && (
                  <>
                    <div className="absolute inset-0 bg-green-200 rounded-full border-4 border-green-200 blur-[100px]"></div>
                    <div className="absolute inset-0 bg-green-200 rounded-full border-4 border-green-200 blur-[100px] transform scale-75"></div>
                    <div className="absolute inset-0 bg-green-200 rounded-full border-4 border-green-300"></div>
                  </>
                )}
                
                {/* Student illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={studentIcon}
                    alt="Student"
                    width={224}
                    height={224}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className={`self-stretch text-center text-neutral-700 text-2xl font-['Graphie'] ${selectedRole === 'student' ? 'font-bold' : 'font-normal'}`}>
                I am a Student
              </div>
            </div>

            {/* Parent Option */}
            <div 
              className="w-80 inline-flex flex-col justify-start items-center gap-4 cursor-pointer hover:scale-105 transition-transform duration-200"
              onClick={() => handleRoleSelect('parent')}
            >
              <div className="relative w-56 h-56">
                {/* Background circles - only show when selected */}
                {selectedRole === 'parent' && (
                  <>
                    <div className="absolute inset-0 bg-green-200 rounded-full border-4 border-green-200 blur-[100px]"></div>
                    <div className="absolute inset-0 bg-green-200 rounded-full border-4 border-green-200 blur-[100px] transform scale-75"></div>
                    <div className="absolute inset-0 bg-green-200 rounded-full border-4 border-green-300"></div>
                  </>
                )}
                
                {/* Parent illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={parentIcon}
                    alt="Parent"
                    width={224}
                    height={224}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className={`self-stretch text-center text-neutral-700 text-2xl font-['Graphie'] ${selectedRole === 'parent' ? 'font-bold' : 'font-normal'}`}>
                I am a Parent
              </div>
            </div>

            {/* Teacher Option */}
            <div 
              className="w-80 inline-flex flex-col justify-start items-center gap-4 cursor-pointer hover:scale-105 transition-transform duration-200"
              onClick={() => handleRoleSelect('teacher')}
            >
              <div className="relative w-56 h-56">
                {/* Background circles - only show when selected */}
                {selectedRole === 'teacher' && (
                  <>
                    <div className="absolute inset-0 bg-green-200 rounded-full border-4 border-green-200 blur-[100px]"></div>
                    <div className="absolute inset-0 bg-green-200 rounded-full border-4 border-green-200 blur-[100px] transform scale-75"></div>
                    <div className="absolute inset-0 bg-green-200 rounded-full border-4 border-green-300"></div>
                  </>
                )}
                
                {/* Teacher illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={teacherIcon}
                    alt="Teacher"
                    width={224}
                    height={224}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className={`self-stretch text-center text-neutral-700 text-2xl font-['Graphie'] ${selectedRole === 'teacher' ? 'font-bold' : 'font-normal'}`}>
                I am a Teacher
              </div>
            </div>
          </div>
        </div>

        {/* Get Started Button */}
        <button 
          className={`w-75 px-8 py-4 rounded-lg outline outline-1 outline-offset-[-1px] inline-flex justify-center items-center gap-2 overflow-hidden transition-colors duration-200 ${
            selectedRole 
              ? 'bg-eklavya-dark-green hover:bg-green-600 outline-eklavya-dark-green hover:outline-green-600 cursor-pointer' 
              : 'bg-gray-400 outline-gray-400 cursor-not-allowed'
          }`}
          onClick={handleGetStarted}
          disabled={!selectedRole}
        >
          <div className="justify-start text-white text-lg font-semibold font-['Graphie'] leading-7">
            Get Started
          </div>
        </button>
      </div>

      {/* Back button */}
      <button
        onClick={handleGoBack}
        className="absolute top-8 left-8 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 10H5M5 10L10 15M5 10L10 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
} 