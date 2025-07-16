'use client';

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthBackground from '@/components/shared/AuthBackground';

interface ChildData {
  firstName: string;
  lastName: string;
  gender: string;
  grade: string;
  avatar: string;
}

export default function ChildDetailsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get('plan') || 'Free';

  // Plan configurations
  const planConfigs = {
    'Free': { childCount: 1, planName: 'Free Plan' },
    'Basic': { childCount: 3, planName: 'Basic Plan' },
    'Standard': { childCount: 5, planName: 'Standard Plan' },
    'Advanced': { childCount: 7, planName: 'Advanced Plan' }
  };

  const currentPlan = planConfigs[selectedPlan as keyof typeof planConfigs] || planConfigs['Free'];

  // Initialize children data based on plan
  const [children, setChildren] = useState<ChildData[]>(() => {
    return Array(currentPlan.childCount).fill(null).map(() => ({
      firstName: '',
      lastName: '',
      gender: '',
      grade: '',
      avatar: ''
    }));
  });

  const [errors, setErrors] = useState<Record<string, Record<string, string>>>({});

  // Grade options
  const gradeOptions = [
    'Pre-K', 'K', '1st Grade', '2nd Grade', '3rd Grade', 
    '4th Grade', '5th Grade', '6th Grade', '7th Grade', '8th Grade'
  ];

  // Gender options
  const genderOptions = ['Male', 'Female', 'Other', 'Prefer not to say'];

  // Avatar options (you can replace with actual avatar images)
  const avatarOptions = ['Avatar 1', 'Avatar 2', 'Avatar 3', 'Avatar 4', 'Avatar 5', 'Avatar 6'];

  const handleChildChange = (childIndex: number, field: keyof ChildData, value: string) => {
    const newChildren = [...children];
    newChildren[childIndex] = {
      ...newChildren[childIndex],
      [field]: value
    };
    setChildren(newChildren);

    // Clear error when user starts typing
    if (errors[childIndex]?.[field]) {
      setErrors(prev => ({
        ...prev,
        [childIndex]: {
          ...prev[childIndex],
          [field]: ''
        }
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, Record<string, string>> = {};
    let isValid = true;

    children.forEach((child, index) => {
      const childErrors: Record<string, string> = {};

      if (!child.firstName.trim()) {
        childErrors.firstName = 'First name is required';
        isValid = false;
      }

      if (!child.grade) {
        childErrors.grade = 'Grade is required';
        isValid = false;
      }

      if (Object.keys(childErrors).length > 0) {
        newErrors[index] = childErrors;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Here you would typically save the children data
      console.log('Children data:', children);
      console.log('Selected plan:', selectedPlan);
      
      // Navigate to next step (could be payment, dashboard, etc.)
      router.push('/dashboard');
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-green-700 relative overflow-hidden">
      {/* Background decorative elements */}
      <AuthBackground />

      {/* Navigation buttons */}
      <div className="relative z-10 flex justify-between items-start p-8">
        {/* Back button */}
        <button
          onClick={handleGoBack}
          className="inline-flex items-center gap-2 text-white text-2xl font-bold hover:text-gray-200 transition-colors underline"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 12H5M12 19L5 12L12 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex justify-end items-start pt-16 pr-16 lg:pt-20 lg:pr-20 xl:pt-24 xl:pr-24 2xl:pt-32 2xl:pr-32">
        <div className="w-full max-w-4xl">
          {/* Form Container */}
          <div className="bg-white/95 rounded-xl shadow-[8px_8px_4px_0px_rgba(255,206,0,0.04)] outline outline-1 outline-offset-[-1px] outline-slate-200 p-8 lg:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-zinc-800 text-4xl font-bold font-['Graphie'] mb-4">
                Add Your Child&apos;s Details
              </h1>
              <p className="text-zinc-600 text-lg font-['Graphie']">
                You have selected the {currentPlan.planName}, which includes {currentPlan.childCount} {currentPlan.childCount === 1 ? 'child' : 'children'}.
              </p>
            </div>

            {/* Children Forms */}
            <div className="space-y-8">
              {children.map((child, childIndex) => (
                <div key={childIndex} className="border border-gray-200 rounded-lg p-6">
                  <h2 className="text-zinc-800 text-2xl font-bold font-['Graphie'] mb-6">
                    Child {childIndex + 1}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div>
                      <label className="block text-stone-500 text-lg font-normal font-['Graphie'] mb-2">
                        First name<span className="text-red-700">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-5 h-5 text-zinc-600"
                          >
                            <path
                              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle
                              cx="12"
                              cy="7"
                              r="4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          placeholder="First name"
                          value={child.firstName}
                          onChange={(e) => handleChildChange(childIndex, 'firstName', e.target.value)}
                          className={`w-full h-12 pl-12 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent ${
                            errors[childIndex]?.firstName ? 'border-red-500' : 'border-neutral-300'
                          }`}
                        />
                      </div>
                      {errors[childIndex]?.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors[childIndex].firstName}</p>
                      )}
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-stone-500 text-lg font-normal font-['Graphie'] mb-2">
                        Last name
                      </label>
                      <input
                        type="text"
                        placeholder="Last name"
                        value={child.lastName}
                        onChange={(e) => handleChildChange(childIndex, 'lastName', e.target.value)}
                        className="w-full h-12 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      />
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="block text-stone-500 text-lg font-normal font-['Graphie'] mb-2">
                        Gender
                      </label>
                      <select
                        value={child.gender}
                        onChange={(e) => handleChildChange(childIndex, 'gender', e.target.value)}
                        className="w-full h-12 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      >
                        <option value="">Select Gender</option>
                        {genderOptions.map((gender) => (
                          <option key={gender} value={gender}>
                            {gender}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Grade */}
                    <div>
                      <label className="block text-stone-500 text-lg font-normal font-['Graphie'] mb-2">
                        Grade<span className="text-red-700">*</span>
                      </label>
                      <select
                        value={child.grade}
                        onChange={(e) => handleChildChange(childIndex, 'grade', e.target.value)}
                        className={`w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent ${
                          errors[childIndex]?.grade ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      >
                        <option value="">Select Grade</option>
                        {gradeOptions.map((grade) => (
                          <option key={grade} value={grade}>
                            {grade}
                          </option>
                        ))}
                      </select>
                      {errors[childIndex]?.grade && (
                        <p className="text-red-500 text-sm mt-1">{errors[childIndex].grade}</p>
                      )}
                    </div>

                    {/* Avatar */}
                    <div className="md:col-span-2">
                      <label className="block text-stone-500 text-lg font-normal font-['Graphie'] mb-2">
                        Avatar
                      </label>
                      <select
                        value={child.avatar}
                        onChange={(e) => handleChildChange(childIndex, 'avatar', e.target.value)}
                        className="w-full h-12 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                      >
                        <option value="">Select Avatar</option>
                        {avatarOptions.map((avatar) => (
                          <option key={avatar} value={avatar}>
                            {avatar}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={handleSubmit}
                className="w-64 h-16 bg-eklavya-dark-green hover:bg-green-800 rounded-[40px] text-white text-2xl font-medium font-['Graphie'] transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 