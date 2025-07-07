import Image from 'next/image';
import logo from '../../assets/shared/eklavya.png';

const beliefs = [
  {
    title: 'Curiosity Over Cramming',
    desc: 'Kids learn best when they&apos;re intrigued, challenged, and having fun.',
    bg: '#F3EFFF',
    shadow: 'shadow-[6px_6px_0px_0px_rgba(223,204,248,1.00)]',
  },
  {
    title: 'Education Shouldn\'t Have Limits',
    desc: 'Every child deserves access to the tools that help them dream big and achieve bigger.',
    bg: '#FFF8E2',
    shadow: 'shadow-[6px_6px_0px_0px_rgba(248,228,204,1.00)]',
  },
  {
    title: 'Every Child Learns Differently',
    desc: 'AI should adapt to each learner, not the other way around.',
    bg: '#FFEFF6',
    shadow: 'shadow-[6px_6px_0px_0px_rgba(248,204,246,1.00)]',
  },
  {
    title: 'Play Is Power',
    desc: 'Learning should feel like an adventure that sparks creativity and problem-solving.',
    bg: '#EFFFFA',
    shadow: 'shadow-[6px_6px_0px_0px_rgba(204,237,248,1.00)]',
  },
];

export default function AboutBeliefsSection() {
  return (
    <>
      {/* First section with green background */}
      <section className="relative w-full h-[277px] bg-[#CAFEE8] flex items-center justify-center">
        {/* Logo */}
        <div className="absolute left-8 top-8 z-10">
          <Image 
            src={logo} 
            alt="Logo" 
            width={147.594} 
            height={138.912} 
            className="rotate-[4.709deg] flex-shrink-0 -translate-y-22"
            style={{ opacity: 0.8, filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(1234%) hue-rotate(118deg) brightness(95%) contrast(101%)' }}
          />
        </div>

                  {/* Main heading */}
          <div className="text-center">
            <h2 className="text-[#027D49] text-center font-graphie text-[48px] font-semibold leading-[70px] tracking-[1.44px] capitalize">
              We&apos;re not just building a platform.<br /> We&apos;re what education can be.
            </h2>
          </div>
      </section>

      {/* Second section with white background */}
      <section className="relative py-20 px-4 bg-white overflow-hidden">
        {/* Belief cards */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-[#1A1A1A] text-[36px] font-bold leading-[40px] tracking-tight text-center mb-12">
            What We Believe In
          </h3>
          <div className="w-[1152px] mx-auto grid grid-cols-2 gap-11">
            {beliefs.map((b, i) => (
              <div
                key={i}
                className={`w-96 h-60 px-10 py-8 rounded-[32px] ${b.shadow} flex flex-col justify-center items-center gap-2.5`}
                style={{ background: b.bg }}
              >
                <h3 className="text-[#38393E] text-[24px] font-semibold leading-[26px] capitalize text-center">
                  {b.title}
                </h3>
                <p className="text-[#38393E] text-[16px] font-normal leading-[26px] text-center">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Subheading */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <h3 className="text-[#1A1A1A] text-[36px] font-bold leading-[40px] tracking-tight mb-4">
            Join Us in Reimagining Education
          </h3>
          <p className="text-[#1A1A1A] text-[21px] font-normal leading-[28px]">
            Eklavya isn&apos;t just an app. It&apos;s a movement to make
            learning joyful, personal, and limitless. Because when kids love
            learning, they don&apos;t just pass tests.{" "}
            <span className="text-[#80D261] font-bold">They Grow,</span>{" "}
            <span className="text-[#D261CF] font-bold">Dream,</span>{" "}
            <span className="text-[#6F61D2] font-bold">and Create.</span>
          </p>
        </div>
      </section>
    </>
  );
} 