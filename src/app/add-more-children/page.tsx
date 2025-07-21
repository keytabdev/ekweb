'use client';

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthBackground from '@/components/shared/AuthBackground';

interface ChildData {
  id: string;
  avatar: string;
  name: string;
  gender: string;
  grade: string;
  invitationCode: string;
  surveyCompleted: boolean;
}

interface NewChildData {
  firstName: string;
  lastName: string;
  gender: string;
  grade: string;
  avatar: string;
}

export default function AddMoreChildrenPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get('plan') || 'Standard';

  // Plan configurations
  const planConfigs = {
    'Free': { childCount: 1, planName: 'Free Plan' },
    'Basic': { childCount: 3, planName: 'Basic Plan' },
    'Standard': { childCount: 2, planName: 'Standard Plan' },
    'Advanced': { childCount: 7, planName: 'Advanced Plan' }
  };

  const currentPlan = planConfigs[selectedPlan as keyof typeof planConfigs] || planConfigs['Standard'];

  // Initialize with sample children data
  const [children, setChildren] = useState<ChildData[]>([
    {
      id: '1',
      avatar: '/images/child-avatar-1.png',
      name: 'lorem Ipsum',
      gender: 'Female',
      grade: 'viii',
      invitationCode: '789-232',
      surveyCompleted: false
    },
    {
      id: '2',
      avatar: '/images/child-avatar-2.png',
      name: 'lorem Ipsum',
      gender: 'Female',
      grade: 'viii',
      invitationCode: '789-233',
      surveyCompleted: false
    }
  ]);

  // Modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [newChild, setNewChild] = useState<NewChildData>({
    firstName: '',
    lastName: '',
    gender: '',
    grade: '',
    avatar: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Grade options
  const gradeOptions = [
    'Pre-K', 'K', '1st Grade', '2nd Grade', '3rd Grade', 
    '4th Grade', '5th Grade', '6th Grade', '7th Grade', '8th Grade'
  ];

  // Gender options
  const genderOptions = ['Male', 'Female', 'Other', 'Prefer not to say'];

  // Avatar options
  const avatarOptions = ['Avatar 1', 'Avatar 2', 'Avatar 3', 'Avatar 4', 'Avatar 5', 'Avatar 6'];

  const handleAddChild = () => {
    setShowAddModal(true);
    setNewChild({
      firstName: '',
      lastName: '',
      gender: '',
      grade: '',
      avatar: ''
    });
    setErrors({});
  };

  const handleNewChildChange = (field: keyof NewChildData, value: string) => {
    setNewChild(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateNewChild = () => {
    const newErrors: Record<string, string> = {};

    if (!newChild.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!newChild.grade) {
      newErrors.grade = 'Grade is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveChild = () => {
    if (validateNewChild()) {
      const fullName = `${newChild.firstName} ${newChild.lastName}`.trim();
      const newChildData: ChildData = {
        id: String(children.length + 1),
        avatar: newChild.avatar || '/images/child-avatar-default.png',
        name: fullName || 'lorem Ipsum',
        gender: newChild.gender || 'Female',
        grade: newChild.grade || 'viii',
        invitationCode: `789-${Math.floor(Math.random() * 900) + 100}`,
        surveyCompleted: false
      };
      
      setChildren([...children, newChildData]);
      setShowAddModal(false);
    }
  };

  const handleCancelAdd = () => {
    setShowAddModal(false);
    setNewChild({
      firstName: '',
      lastName: '',
      gender: '',
      grade: '',
      avatar: ''
    });
    setErrors({});
  };

  const handleCopyInvitationCode = (code: string) => {
    navigator.clipboard.writeText(code);
    // You could add a toast notification here
    console.log('Invitation code copied:', code);
  };

  const handleFillSurvey = (childId: string) => {
    // Navigate to survey page or open survey modal
    console.log('Fill survey for child:', childId);
  };

  const handleNext = () => {
    // Navigate to next step (could be payment, dashboard, etc.)
    router.push('/dashboard');
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-green-700 relative overflow-hidden">
      {/* Background decorative elements */}
      <AuthBackground />

      {/* Back button */}
      <div className="relative z-10 p-8">
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
      <div className="relative z-10 flex justify-end items-start pt-0 pr-16 lg:pt-12 lg:pr-20 xl:pt-16 xl:pr-24 2xl:pt-0 2xl:pr-32">
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-0 lg:p-8 border border-black">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-zinc-800 text-4xl font-bold font-['Graphie'] mb-4">
              Add More Children
            </h1>
            <p className="text-zinc-600 text-lg font-['Graphie']">
              You have selected the {currentPlan.planName}, which includes {currentPlan.childCount} children, you can add more.
            </p>
          </div>

          {/* Children Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 text-stone-500 text-lg font-normal font-['Graphie']">
                    Avatar
                  </th>
                  <th className="text-left py-4 px-6 text-stone-500 text-lg font-normal font-['Graphie']">
                    Name
                  </th>
                  <th className="text-left py-4 px-6 text-stone-500 text-lg font-normal font-['Graphie']">
                    Gender
                  </th>
                  <th className="text-left py-4 px-6 text-stone-500 text-lg font-normal font-['Graphie']">
                    Grade
                  </th>
                  <th className="text-left py-4 px-6 text-stone-500 text-lg font-normal font-['Graphie']">
                    Invitation code
                  </th>
                  <th className="text-left py-4 px-6 text-stone-500 text-lg font-normal font-['Graphie']">
                    Survey
                  </th>
                </tr>
              </thead>
              <tbody>
                {children.map((child) => (
                  <tr key={child.id} className="border-b border-gray-100">
                    <td className="py-4 px-6">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                        {/* Placeholder avatar - you can replace with actual avatar images */}
                        <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-zinc-800 text-lg font-normal font-['Graphie']">
                        {child.name}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-zinc-800 text-lg font-normal font-['Graphie']">
                        {child.gender}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-zinc-800 text-lg font-normal font-['Graphie']">
                        {child.grade}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-800 text-lg font-normal font-['Graphie']">
                          {child.invitationCode}
                        </span>
                        <button
                          onClick={() => handleCopyInvitationCode(child.invitationCode)}
                          className="p-1 hover:bg-gray-100 rounded"
                          title="Copy invitation code"
                        >
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => handleFillSurvey(child.id)}
                        className="text-green-600 text-lg font-normal font-['Graphie'] hover:text-green-700 underline"
                      >
                        Fill Survey
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Child Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleAddChild}
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-['Graphie'] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Child
            </button>
          </div>

          {/* Informational Notes */}
          <div className="mt-8 space-y-2">
            <p className="text-zinc-600 text-sm font-['Graphie']">
              *Students can login using the invitation code
            </p>
            <p className="text-zinc-600 text-sm font-['Graphie']">
              *Fill the survey to get personalized recommendation
            </p>
          </div>

          {/* Next Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleNext}
              className="w-64 h-16 bg-eklavya-dark-green hover:bg-green-800 rounded-[40px] text-white text-2xl font-medium font-['Graphie'] transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Add Child Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-black">
            <div className="text-center mb-8">
              <h2 className="text-zinc-800 text-3xl font-bold font-['Graphie'] mb-4">
                Add New Child
              </h2>
            </div>

            <div className="space-y-6">
              {/* First Name */}
              <div>
                <label className="block text-stone-500 text-lg font-normal font-['Graphie'] mb-1">
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
                    value={newChild.firstName}
                    onChange={(e) => handleNewChildChange('firstName', e.target.value)}
                    className={`w-full h-12 pl-12 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent ${
                      errors.firstName ? 'border-red-500' : 'border-neutral-300'
                    }`}
                  />
                </div>
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-stone-500 text-lg font-normal font-['Graphie'] mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  value={newChild.lastName}
                  onChange={(e) => handleNewChildChange('lastName', e.target.value)}
                  className="w-full h-12 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-stone-500 text-lg font-normal font-['Graphie'] mb-1">
                  Gender
                </label>
                <div className="relative">
                  <select
                    value={newChild.gender}
                    onChange={(e) => handleNewChildChange('gender', e.target.value)}
                    className="w-full h-12 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent appearance-none"
                  >
                    <option value="">Select Gender</option>
                    {genderOptions.map((gender) => (
                      <option key={gender} value={gender}>
                        {gender}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Grade */}
              <div>
                <label className="block text-stone-500 text-lg font-normal font-['Graphie'] mb-1">
                  Grade<span className="text-red-700">*</span>
                </label>
                <div className="relative">
                  <select
                    value={newChild.grade}
                    onChange={(e) => handleNewChildChange('grade', e.target.value)}
                    className={`w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent appearance-none ${
                      errors.grade ? 'border-red-500' : 'border-neutral-300'
                    }`}
                  >
                    <option value="">Select Grade</option>
                    {gradeOptions.map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                {errors.grade && (
                  <p className="text-red-500 text-sm mt-1">{errors.grade}</p>
                )}
              </div>

              {/* Avatar */}
              <div>
                <label className="block text-stone-500 text-lg font-normal font-['Graphie'] mb-1">
                  Avatar
                </label>
                <div className="relative">
                  <select
                    value={newChild.avatar}
                    onChange={(e) => handleNewChildChange('avatar', e.target.value)}
                    className="w-full h-12 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent appearance-none"
                  >
                    <option value="">Select Avatar</option>
                    {avatarOptions.map((avatar) => (
                      <option key={avatar} value={avatar}>
                        {avatar}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={handleCancelAdd}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-['Graphie'] hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChild}
                className="px-6 py-3 bg-eklavya-dark-green hover:bg-green-800 text-white rounded-lg font-['Graphie'] transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 