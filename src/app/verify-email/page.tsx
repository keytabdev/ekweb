'use client';

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from 'next/image';
import { verificationSuccessfulSvg } from '@/assets';
import AuthBackground from '@/components/shared/AuthBackground';

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || 'xyz@email.com';
  
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(52); // 52 seconds as shown in image
  const [canResend, setCanResend] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    
    // Handle paste event (multiple characters)
    if (value.length > 1) {
      const digits = value.replace(/\D/g, '').slice(0, 6); // Only numbers, max 6 digits
      const otpArray = digits.split('').concat(Array(6 - digits.length).fill(''));
      setOtp(otpArray.slice(0, 6));
      
      // Focus the next empty input or the last input
      const nextEmptyIndex = otpArray.findIndex(digit => digit === '');
      const focusIndex = nextEmptyIndex === -1 ? 5 : Math.min(nextEmptyIndex, 5);
      const nextInput = document.getElementById(`otp-${focusIndex}`);
      nextInput?.focus();
      return;
    }
    
    // Handle single digit input
    if (value.length === 1 && /^\d$/.test(value)) {
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    const digits = pastedData.replace(/\D/g, '').slice(0, 6); // Only numbers, max 6 digits
    
    if (digits.length > 0) {
      const otpArray = digits.split('').concat(Array(6 - digits.length).fill(''));
      setOtp(otpArray.slice(0, 6));
      
      // Focus the next empty input or the last input
      const nextEmptyIndex = otpArray.findIndex(digit => digit === '');
      const focusIndex = nextEmptyIndex === -1 ? 5 : Math.min(nextEmptyIndex, 5);
      const nextInput = document.getElementById(`otp-${focusIndex}`);
      nextInput?.focus();
    }
  };

  const handleResendOtp = () => {
    setTimeLeft(52);
    setCanResend(false);
    // Here you would typically make an API call to resend OTP
    console.log('Resending OTP to:', email);
  };

  const handleVerifyOtp = async () => {
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      alert('Please enter the complete 6-digit OTP');
      return;
    }

    setIsVerifying(true);
    
    try {
      // Here you would typically make an API call to verify OTP
      console.log('Verifying OTP:', otpString);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success modal
      setShowSuccess(true);
    } catch (error) {
      console.error('Verification failed:', error);
      alert('Verification failed. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `(${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')})`;
  };

  return (
    <div className="min-h-screen bg-green-700 relative overflow-hidden">
      {/* Background decorative elements */}
      <AuthBackground />

      {/* Back button */}
      <div className="relative z-10 p-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-white text-2xl font-bold hover:text-gray-200 transition-colors"
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
      {!showSuccess ? (
        <div className="relative z-10 flex justify-end items-start pt-16 pr-16 lg:pt-20 lg:pr-20 xl:pt-24 xl:pr-24 2xl:pt-32 2xl:pr-32">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-zinc-800 text-3xl font-medium font-['Graphie'] mb-4">
                Email Verification
              </h1>
              <p className="text-zinc-600 text-base font-['Graphie'] mb-2">
                An OTP has been sent to {email}
              </p>
              <p className="text-zinc-600 text-base font-['Graphie']">
                If you do not find the email in your inbox, check your spam folder.
              </p>
            </div>

            {/* OTP Input */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <label className="text-zinc-800 text-lg font-medium font-['Graphie']">
                  OTP
                </label>
              </div>
              <div className="flex gap-3 justify-center" onPaste={handlePaste}>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                    placeholder=""
                  />
                ))}
              </div>
            </div>

            {/* Resend OTP */}
            <div className="flex justify-end mb-8">
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={!canResend}
                className={`text-sm font-['Graphie'] underline ${
                  canResend 
                    ? 'text-green-600 hover:text-green-700' 
                    : 'text-gray-400 cursor-not-allowed'
                }`}
              >
                Resend OTP {!canResend && formatTime(timeLeft)}
              </button>
            </div>

            {/* Verify Button */}
            <button
              onClick={handleVerifyOtp}
              disabled={isVerifying || otp.join('').length !== 6}
              className={`w-full h-16 rounded-[40px] text-white text-2xl font-medium font-['Graphie'] transition-colors ${
                isVerifying || otp.join('').length !== 6
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-eklavya-dark-green hover:bg-green-800'
              }`}
            >
              {isVerifying ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Verifying...
                </div>
              ) : (
                'Verify OTP'
              )}
            </button>
          </div>
        </div>
              ) : (
          <div className="relative z-10 flex justify-end items-start pt-16 pr-16 lg:pt-20 lg:pr-20 xl:pt-24 xl:pr-24 2xl:pt-32 2xl:pr-32">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 text-center">
            {/* Success Icon */}
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Image
                src={verificationSuccessfulSvg}
                alt="Verification successful"
                width={64}
                height={64}
              />
            </div>
            
            {/* Success Message */}
            <h2 className="text-zinc-800 text-2xl font-medium font-['Graphie'] mb-8">
              Email Verified Successfully
            </h2>
            
            {/* Next Button */}
            <button
              onClick={() => router.push('/pricing-selection')}
              className="w-full h-14 bg-eklavya-dark-green hover:bg-green-800 rounded-[40px] text-white text-xl font-medium font-['Graphie'] transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 