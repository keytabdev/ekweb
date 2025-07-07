import Image from 'next/image';
import cloud from '@/assets/about/clouds (very light color).png';
import chat1 from '@/assets/about/chat1.png';
import chat2 from '@/assets/about/chat2.png';
import chat3 from '@/assets/about/chat3.png';
import sparkle from '@/assets/about/sparkle.svg';

export default function AboutVisionSection() {
  return (
    <section className="relative py-10 px-0 bg-white overflow-visible mb-30">
      {/* Background clouds - full cover */}
      <div className="absolute inset-0 z-0  ">
        <Image
          src={cloud}
          alt="Clouds"
          width={1920}
          height={1080}
          className="w-[110vw] h-full -translate-x-[5vw] !max-w-none"
        />
      </div>
      {/* Content with higher z-index */}
      <div className="relative z-10">
        {/* Heading */}
        <h2 className="text-[#1A1A1A] text-center text-[44px] font-graphie font-semibold font-weight-700 leading-[44px] tracking-[0.48px] mb-12">
          Our Vision
        </h2>

        {/* Flexbox layout with 3 rows */}
        <div className="max-w-7xl mx-auto space-y-12 relative">

          {/* First row - Picture then Text */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-80 h-80 flex items-center justify-center">
              <Image
                src={chat1}
                alt="Chat 1"
                width={290}
                height={290}
                className="object-contain"
              />
            </div>
            <div className="w-[581px] h-[180px] flex-shrink-0 relative">
              <div className="w-[572px] h-[173px] left-[9px] top-[7px] absolute bg-[#FFF7E7] rounded-[26px] border-r-[0.25px] border-b-[0.25px] border-zinc-900" />
              <div className="w-[570px] h-[173px] left-0 top-0 absolute rounded-[26px] border border-zinc-900" />
              <div className="w-[521px] left-[24px] top-[29px] absolute flex flex-col justify-center items-center gap-1.5">
                <div className="text-center text-[#1A1A1A] text-[30px] font-graphie font-normal font-weight-400 leading-[42px]">
                  Every child has access to high-quality, engaging learning—no
                  matter their background.
                </div>
              </div>
              {/* Sparkle - top right for picture-text format */}
              <div className="absolute -top-3 -right-3">
                <Image src={sparkle} alt="Sparkle" width={26} height={26} />
              </div>
              {/* Spiral arrow - right of first text container */}
                <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 translate-y-[150px]">
                  <svg width="89" height="107" viewBox="0 0 89 107" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1) rotate(-30deg)' }}>
                    <path d="M86.5004 2.76347C73 5.26367 73.5004 5.2632 65.5001 6.76391C57.4999 8.26461 48.5234 12.8589 42.0487 17.544C33.1281 23.9991 26.2776 33.8949 28.3662 45.3539C29.2029 49.9442 30.7042 53.5045 32.5474 57.6845C33.9156 60.7874 37.269 63.0716 38.9288 65.895C39.3446 66.6024 41.5027 67.9313 42.2804 68.3369C43.4318 68.9374 44.5832 69.538 45.7347 70.1385C47.9369 71.2872 48.9995 71.2443 51.402 71.2443C56.1731 69.8926 59.3885 68.812 61.4995 64.7647C62.8935 62.0919 59.7247 52.5974 57.9525 50.5069C57.1289 49.5353 56.3506 48.4992 55.4995 47.508C54.5693 46.4248 53.6573 45.5943 52.4023 44.9397C48.0603 42.6751 43.9522 39.0763 39.0155 38.1888C35.9412 37.6362 32.021 37.7231 28.9098 38.0058C26.8754 38.1905 25.2425 37.9785 23.175 38.4579C21.438 38.8608 20.5239 39.1446 18.8983 40.056C17.4664 40.8587 16.0935 42.0819 14.9906 43.3112C13.6067 44.854 11.1583 45.64 10.1294 47.508C8.24808 50.9234 6.51714 54.4337 4.71388 57.8911C0.682458 65.6205 2.91685 74.9144 6.02486 82.5233C8.5834 88.787 13.8598 95.1408 19.96 98.3224C20.5474 98.6288 25.2066 101.518 25.6609 101.039C26.8721 99.7621 24.896 95.6748 24.7422 93.9816C24.6176 92.61 24.0192 91.588 24.011 90.2598C24.0038 89.0853 22.6602 87.8601 22.6036 86.7506C22.5905 86.4922 21.7247 84.1052 21.5828 84.4709C21.4761 84.746 22.4772 87.1004 22.6301 87.5867C22.9325 88.5483 23.5609 89.4858 23.6598 90.5391C23.701 90.9786 24.9753 93.5067 25.2568 93.6847C26.3378 94.3683 28.0699 97.5422 28.5552 98.6427C30.6239 103.334 23.823 102.987 21.1216 103.091C19.9398 103.136 18.8528 103.557 17.6685 103.603C16.6207 103.643 15.8026 103.059 14.7238 102.992C13.5701 102.92 12.7408 103.808 11.4199 103.119C10.752 102.77 9.58383 103.179 8.85112 103.166" stroke="#D2D2EA" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
            </div>
          </div>

          {/* Second row - Text then Picture */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-[581px] h-[180px] flex-shrink-0 relative">
              <div className="w-[572px] h-[173px] left-[9px] top-[7px] absolute bg-[#E6FFE0] rounded-[26px] border-r-[0.25px] border-b-[0.25px] border-zinc-900" />
              <div className="w-[570px] h-[173px] left-0 top-0 absolute rounded-[26px] border border-zinc-900" />
              <div className="w-[516px] left-[38px] top-[49px] absolute flex flex-col justify-center items-center gap-1.5">
                <div className="text-center text-[#1A1A1A] text-[30px] font-graphie font-normal font-weight-400 leading-[42px]">
                  Teachers have the tools to make lessons come alive
                  effortlessly.
                </div>
              </div>
              {/* Sparkle - top left for text-picture format */}
              <div className="absolute -top-3 -left-3">
                <Image src={sparkle} alt="Sparkle" width={26} height={26} />
              </div>
            </div>
            <div className="w-[390px] h-[390px] flex-shrink-0 aspect-square flex items-center justify-center relative">
              {/* Spiral arrow - left of second row picture */}
                <div className="absolute -left-190 top-1/2 transform -translate-y-1/2 translate-y-[70px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="164.931" height="110.567" viewBox="0 0 72 117" fill="none" >
                    <path d="M70.7786 1.59456C58.095 6.852 58.5844 6.7473 51.0722 9.88152C43.56 13.0157 35.7374 19.379 30.3806 25.31C23.0002 33.4816 18.3612 44.5873 22.7909 55.3599C24.5654 59.6752 26.7753 62.8447 29.4487 66.5491C31.4333 69.299 35.1889 70.8346 37.4004 73.2503C37.9544 73.8556 40.342 74.7058 41.1871 74.9405C42.4384 75.2881 43.6896 75.6356 44.9409 75.9831C47.3341 76.6479 48.3644 76.3846 50.7143 75.8842C55.0991 73.5683 58.019 71.8417 59.2406 67.4435C60.0473 64.5389 54.9703 55.9127 52.8016 54.2372C51.7936 53.4584 50.8167 52.6072 49.7777 51.815C48.6423 50.9493 47.5773 50.327 46.2134 49.9482C41.4951 48.6376 36.7274 45.9735 31.7141 46.1338C28.5922 46.2336 24.7761 47.1352 21.7919 48.0597C19.8407 48.6642 18.1994 48.7969 16.2772 49.6965C14.6622 50.4523 13.8272 50.9204 12.4271 52.1503C11.1939 53.2337 10.1058 54.716 9.28321 56.1481C8.25093 57.9453 6.02004 59.224 5.40274 61.2654C4.27413 64.9978 3.31234 68.7916 2.26879 72.5488C-0.0642056 80.9484 4.05705 89.573 8.68179 96.3676C12.4889 101.961 18.9731 107.076 25.6021 108.918C26.2405 109.095 31.3993 110.95 31.7438 110.387C32.6625 108.886 29.8784 105.3 29.3753 103.676C28.9678 102.36 28.1696 101.485 27.8849 100.188C27.6332 99.0408 26.0639 98.1223 25.7775 97.0489C25.7107 96.7989 24.3668 94.6447 24.3042 95.0318C24.2571 95.3232 25.7266 97.4174 25.9775 97.8611C26.4735 98.7387 27.2835 99.5248 27.5996 100.534C27.7314 100.956 29.5044 103.163 29.8168 103.278C31.0165 103.722 33.3717 106.465 34.0755 107.44C37.0761 111.598 30.3521 112.675 27.7316 113.34C26.5851 113.63 25.6096 114.268 24.4608 114.559C23.4443 114.817 22.5226 114.417 21.4534 114.575C20.31 114.745 19.6838 115.786 18.2484 115.387C17.5226 115.186 16.4652 115.829 15.7459 115.969" stroke="#D2D2EA" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              <Image
                src={chat2}
                alt="Chat 2"
                width={390}
                height={390}
                className="object-contain"
              />
            </div>
          </div>

          {/* Third row - Picture then Text */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-[454.858px] h-[309px] flex-shrink-0 flex items-center justify-center">
              <Image
                src={chat3}
                alt="Chat 3"
                width={454.858}
                height={309}
                className="object-contain"
              />
            </div>
            <div className="w-[581px] h-[180px] flex-shrink-0 relative">
              <div className="w-[572px] h-[173px] left-[9px] top-[7px] absolute bg-[#E3EEFF] rounded-[26px] border-r-[0.25px] border-b-[0.25px] border-zinc-900" />
              <div className="w-[570px] h-[173px] left-0 top-0 absolute rounded-[26px] border border-zinc-900" />
              <div className="w-[521px] left-[24px] top-[29px] absolute flex flex-col justify-center items-center gap-1.5">
                <div className="text-center text-[#1A1A1A] text-[30px] font-graphie font-normal font-weight-400 leading-[42px]">
                  Parents no longer have to fight the &quot;homework
                  battle&quot; because kids are excited to learn.
                </div>
              </div>
              {/* Sparkle - top right for picture-text format */}
              <div className="absolute -top-3 -right-3">
                <Image src={sparkle} alt="Sparkle" width={26} height={26} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 