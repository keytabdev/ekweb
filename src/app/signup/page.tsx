'use client';

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get('role') || 'parent';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: '+91',
    flag: 'in',
    name: 'India'
  });

  const countries = [
    { code: '+91', flag: 'in', name: 'India' },
    { code: '+1', flag: 'us', name: 'United States' },
    { code: '+44', flag: 'gb', name: 'United Kingdom' },
    { code: '+61', flag: 'au', name: 'Australia' },
    { code: '+86', flag: 'cn', name: 'China' },
    { code: '+81', flag: 'jp', name: 'Japan' },
    { code: '+49', flag: 'de', name: 'Germany' },
    { code: '+33', flag: 'fr', name: 'France' },
    { code: '+39', flag: 'it', name: 'Italy' },
    { code: '+34', flag: 'es', name: 'Spain' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleGoBack = () => {
    router.back();
  };

  const getRoleTitle = () => {
    switch (role) {
      case 'student':
        return 'Register as a Student';
      case 'teacher':
        return 'Register as a Teacher';
      default:
        return 'Register as a Parent';
    }
  };

  return (
    <div className="min-h-screen bg-green-700 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Large decorative shapes */}
        <div className="absolute left-10 top-20 w-[624px] h-[654px] bg-[#5FB678] rounded-full opacity-20"></div>
        <div className="absolute left-10 top-56 w-[624px] h-[520px] bg-[#5FB678] rounded-full opacity-20"></div>

        {/* Small decorative elements */}
        <div className="absolute left-[567px] top-[281px] w-11 h-20 bg-[#5FB678] rounded opacity-30"></div>
        <div className="absolute left-[567px] top-[281px] w-11 h-20 bg-[#5FB678] rounded opacity-30"></div>
        <div className="absolute left-[552px] top-[216px] w-36 h-28 bg-[#5FB678] rounded opacity-30"></div>
        <div className="absolute left-[552px] top-[216px] w-36 h-28 bg-[#5FB678] rounded opacity-30"></div>
        <div className="absolute left-[434px] top-[130px] w-2.5 h-4 bg-[#5FB678] rounded opacity-30"></div>
        <div className="absolute left-[434px] top-[130px] w-2.5 h-4 bg-[#5FB678] rounded opacity-30"></div>

        {/* Blurred circles */}
        <div className="absolute left-[217px] top-[357px] w-72 h-72 bg-white/50 rounded-full blur-[100px] mix-blend-soft-light"></div>
        <div className="absolute left-[246px] top-[386px] w-60 h-60 bg-white/50 rounded-full blur-[100px] mix-blend-soft-light"></div>
        <div className="absolute left-[277px] top-[417px] w-44 h-44 bg-white/50 rounded-full blur-[100px] mix-blend-soft-light"></div>
        <div className="absolute left-[304px] top-[444px] w-32 h-32 bg-white/50 rounded-full blur-[100px] mix-blend-soft-light"></div>

        {/* Decorative images */}
        <div className="absolute left-[228px] top-[399px] w-72 h-48 bg-white/20 rounded-lg"></div>
        <div className="absolute left-[125px] top-[402px] w-24 h-16 bg-white/20 rounded-lg"></div>
        <div className="absolute left-[461px] top-[296px] w-24 h-16 bg-white/20 rounded-lg transform rotate-[22.85deg]"></div>
        <div className="absolute left-[228px] top-[223px] w-40 h-40 bg-white/20 rounded-lg"></div>
      </div>

      {/* Back button */}
      <div className="relative z-10 p-8">
        <button
          onClick={handleGoBack}
          className="inline-flex items-center gap-2 text-white text-2xl font-bold underline"
        >
          <div className="w-7 h-0.5 bg-white"></div>
          Back
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex justify-center items-center min-h-screen px-4 py-8">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Header */}
            <div className="flex justify-center items-center gap-2">
              <div className="text-center text-zinc-800 text-3xl font-medium font-['Graphie']">
                {getRoleTitle()}
              </div>
              <div className="w-12 h-12 flex items-center justify-center">
                <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
                  <path
                    d="M2 2L12 12L22 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Google Signup Button */}
            <button
              type="button"
              className="w-full h-14 bg-white border border-zinc-800 rounded-[40px] flex items-center justify-center gap-4 hover:bg-gray-50 transition-colors"
            >
              <div className="w-6 h-6">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>
              <span className="text-zinc-800 text-xl font-normal font-['Graphie']">
                Signup with Google
              </span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-6">
              <div className="flex-1 h-0.5 bg-stone-500/25"></div>
              <div className="text-stone-500 text-2xl font-normal font-['Graphie']">
                OR
              </div>
              <div className="flex-1 h-0.5 bg-stone-500/25"></div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Name Fields */}
              <div className="flex gap-4">
                <div className="flex-1">
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
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="w-full h-12 pl-12 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-stone-500 text-lg font-normal font-['Graphie'] mb-1">
                    Last name<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="w-full h-12 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-stone-500 text-lg font-normal font-['Graphie'] mb-1">
                  Email address<span className="text-red-700">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-5 h-5 text-zinc-600"
                    >
                      <path
                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="22,6 12,13 2,6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    placeholder="Type here"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full h-12 pl-12 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-stone-500 text-lg font-normal font-['Graphie'] mb-1">
                  Phone number
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                      className="flex items-center gap-2 text-left"
                    >
                      <img 
                        src={`https://flagcdn.com/w20/${selectedCountry.flag}.png`}
                        alt={`${selectedCountry.name} flag`}
                        className="w-5 h-4 object-cover rounded-sm"
                      />
                      <span className="text-zinc-600 text-base font-['Graphie']">{selectedCountry.code}</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Country Dropdown */}
                  {showCountryDropdown && (
                    <div className="absolute left-4 top-full mt-1 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                      {countries.map((country, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            setSelectedCountry(country);
                            setShowCountryDropdown(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left"
                        >
                          <img 
                            src={`https://flagcdn.com/w20/${country.flag}.png`}
                            alt={`${country.name} flag`}
                            className="w-5 h-4 object-cover rounded-sm"
                          />
                          <span className="text-zinc-600 text-base font-['Graphie']">{country.code}</span>
                          <span className="text-zinc-800 text-sm font-['Graphie']">{country.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                  
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full h-14 pl-32 pr-4 py-2 border border-stone-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-stone-500 text-lg font-normal font-['Graphie']">
                    Password<span className="text-red-700">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-stone-500/80 text-base font-normal font-['Graphie']"
                  >
                    {showPassword ? "Show" : "Hide"}
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-5 h-5 text-zinc-600"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="16"
                        r="1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Type here"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    className="w-full h-12 pl-12 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  />
                </div>
                <p className="text-stone-500 text-sm font-normal font-['Graphie'] mt-1">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </p>
              </div>

              {/* Confirm Password Field */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-stone-500 text-lg font-normal font-['Graphie']">
                    Confirm Password<span className="text-red-700">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-stone-500/80 text-base font-normal font-['Graphie']"
                  >
                    {showConfirmPassword ? "Show" : "Hide"}
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-5 h-5 text-zinc-600"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="16"
                        r="1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Type here"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    className="w-full h-12 pl-12 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center">
              <div className="text-zinc-800 text-lg font-normal font-['Graphie']">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => router.push("/login")}
                  className="text-neutral-900 font-semibold underline font-['Graphie']"
                >
                  Log in
                </button>
              </div>
              <button
                type="submit"
                className="w-64 h-16 bg-green-700 hover:bg-green-800 rounded-[40px] text-white text-2xl font-medium font-['Graphie'] transition-colors"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 