import React from 'react'
import Image from 'next/image'
import { safeSecureImage, panesImage, noAdIcon, noWifiIcon, privacyIcon } from '@/assets'

export default function SafeAndSecureSection() {
  return (
    <section className="relative mt-10 py-40 min-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={safeSecureImage}
          alt="Safe and secure learning background"
          fill
          className="w-full h-auto object-cover object-top"
          priority
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            A Safe and Secure Space for Growth
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Education Without Interruptions, Distractions, yet so Fun
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src={panesImage}
              alt="Parent and child learning together"
              fill
              className="object-contain"
            />
          </div>

          {/* Features List */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                <Image
                  src={noAdIcon}
                  alt="Ad-Free Learning"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                  Ad-Free Learning
                </h3>
                <p className="text-gray-600">
                  No ads or pop-ups—just pure, focused education.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                <Image
                  src={noWifiIcon}
                  alt="Offline Accessibility"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                  Offline Accessibility
                </h3>
                <p className="text-gray-600">
                  Keep your child&apos;s education uninterrupted, even on the
                  go or in areas with low connectivity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                <Image
                  src={privacyIcon}
                  alt="Privacy and Security"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                  Privacy and Security
                </h3>
                <p className="text-gray-600">
                  Your child&apos;s data and progress remain protected at all
                  times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 