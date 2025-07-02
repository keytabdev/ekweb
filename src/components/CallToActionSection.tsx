import Image from 'next/image';
import BulletIcon from "@/components/shared/BulletIcon";
import { ctaBg } from "@/assets";

export default function CallToActionSection() {
  return (
    <section className="pt-20 pb-40 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src={ctaBg}
          alt="Happy children"
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-auto min-w-full object-cover object-center"
          priority
        />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Teal shape placeholder */}
        <div className="absolute left-0 top-0 w-96 h-96 bg-teal-500 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/4"></div>
        {/* Yellow elements placeholder */}
        <div className="absolute right-10 top-10 w-16 h-16 bg-yellow-400 rounded-full opacity-30"></div>
        <div className="absolute right-20 bottom-20 w-12 h-12 bg-yellow-400 opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          {/* Left side - Space for the image that's now in background */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 h-80">
              {/* Empty space since image is now background */}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform
              <br />
              Learning Time?
            </h2>

            <p className="text-xl text-gray-700 mb-6">
              <span className="text-blue-500 underline cursor-pointer">
                Begin 7-Day Free Adventure
              </span>{" "}
              No wands required (though excitement is highly encouraged!)
            </p>

            <p className="text-xl text-[#FF5F71] mb-8 font-medium">
              Because we believe every child deserves to:
            </p>

            <div className="mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column - 3 items */}
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <BulletIcon />
                    <span className="text-teal-500 text-lg font-medium">
                      Dream bigger
                    </span>
                  </li>
                  <li className="flex items-center">
                    <BulletIcon />
                    <span className="text-teal-500 text-lg font-medium">
                      Learn easier
                    </span>
                  </li>
                  <li className="flex items-center">
                    <BulletIcon />
                    <span className="text-teal-500 text-lg font-medium">
                      Stay curious
                    </span>
                  </li>
                </ul>

                {/* Right Column - 2 items */}
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <BulletIcon />
                    <span className="text-teal-500 text-lg font-medium">
                      Smile Wider
                    </span>
                  </li>
                  <li className="flex items-center">
                    <BulletIcon />
                    <span className="text-teal-500 text-lg font-medium">
                      Grow confident
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <button className="bg-[#FF5F71] hover:bg-[#FF5F71] text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 