import Image from 'next/image';
import logo from '../../assets/shared/eklavya.png';
import spiral from '../../assets/about/spiral-arrow.svg';
import redPastry from '../../assets/about/red-pastry.svg';
import yellowPastryLeftFacing from '../../assets/about/yellow-pastry-left-facing.svg';

const beliefs = [
  {
    title: 'Curiosity Over Cramming',
    desc: 'Kids learn best when they\'re intrigued, challenged, and having fun.',
    bg: '#F9F0FF',
    shadow: 'shadow-[6px_6px_0px_0px_rgba(223,204,248,1.00)]',
  },
  {
    title: 'Education Shouldn\'t Have Limits',
    desc: 'Every child deserves access to the tools that help them dream big and achieve bigger.',
    bg: '#FFFBF2',
    shadow: 'shadow-[6px_6px_0px_0px_rgba(248,228,204,1.00)]',
  },
  {
    title: 'Every Child Learns Differently',
    desc: 'AI should adapt to each learner, not the other way around.',
    bg: '#FFE7FB',
    shadow: 'shadow-[6px_6px_0px_0px_rgba(248,204,246,1.00)]',
  },
  {
    title: 'Play Is Power',
    desc: 'Learning should feel like an adventure that sparks creativity and problem-solving.',
    bg: '#ECF3FF',
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
        {/* Spiral arrow - top left */}
        <div className="absolute left-40 top-[100px] z-10">
          <Image 
            src={spiral} 
            alt="Spiral" 
            width={94.931} 
            height={53.567} 
            className=" flex-shrink-0"
          />
        </div>
        {/* Red pastry - top right */}
        <div className="absolute right-38 top-[60px] z-10">
          <Image 
            src={redPastry} 
            alt="Red Pastry" 
            width={97.642} 
            height={48.695}
          />
        </div>
        
        {/* Belief cards */}
        <div className="max-w-7xl mx-auto mt-[90px]">
          <h3 className="text-[#1A1A1A] text-center font-graphie text-[36px] font-semibold font-weight-700 leading-[44px] tracking-[0.36px] mb-12">
            What We Believe In
          </h3>
          <div className="grid grid-cols-2 gap-[45px] justify-items-center max-w-[800px] mx-auto">
            {beliefs.map((b, i) => (
              <div
                key={i}
                className={`w-96 h-60 px-10 py-8 rounded-[32px] ${b.shadow} flex flex-col justify-center items-center gap-2.5`}
                style={{ background: b.bg }}
              >
                <h3 className="text-[#38393E] text-[24px] font-semibold leading-[26px] capitalize text-center whitespace-nowrap font-graphie">
                  {b.title}
                </h3>
                <p className="text-[#38393E] text-[16px] font-normal leading-[26px] text-center font-graphie">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Subheading */}
        <div className="relative w-full flex justify-center items-center mt-40">
          {/* Yellow pastry left - 10% visible */}
          <div className="absolute left-0 top-[calc(50%+2rem)] transform -translate-y-1/2 -translate-x-[70%] z-10">
            <Image 
              src={yellowPastryLeftFacing} 
              alt="Yellow Pastry Left" 
              width={191} 
              height={191}
              className="scale-x-[-1]"
            />
          </div>
          
          {/* Yellow pastry right - 10% visible */}
          <div className="absolute right-0 top-[calc(50%+2rem)] transform -translate-y-1/2 translate-x-[70%] z-10">
            <Image 
              src={yellowPastryLeftFacing} 
              alt="Yellow Pastry Right" 
              width={191} 
              height={191}
            />
          </div>
          
          {/* Centered content */}
          <div className="w-[896px] px-36 inline-flex flex-col justify-start items-center gap-4">
            <div className="self-stretch text-center justify-start text-zinc-900 text-4xl font-bold font-graphie leading-10 tracking-tight">Join Us in Reimagining Education</div>
            <div className="w-[776px] text-center justify-start text-zinc-900 text-xl font-normal font-graphie leading-7">Eklavya isn&apos;t just an app. It&apos;s a movement to make learning joyful, personal, and limitless. Because when kids love learning, they don&apos;t just pass tests.</div>
          </div>
        </div>
        <div className="mx-auto mb-30 mt-6 text-center">
          <span className="text-slate-300 text-4xl font-semibold font-graphie leading-10 tracking-wide">They </span>
          <span className="text-lime-400 text-4xl font-bold font-graphie leading-10 tracking-wide">Grow</span>
          <span className="text-lime-400 text-4xl font-semibold font-graphie leading-10 tracking-wide">,</span>
          <span className="text-fuchsia-500 text-4xl font-bold font-graphie leading-10 tracking-wide"> Dream</span>
          <span className="text-fuchsia-500 text-4xl font-semibold font-graphie leading-10 tracking-wide">,</span>
          <span className="text-slate-300 text-4xl font-semibold font-graphie leading-10 tracking-wide"> and </span>
          <span className="text-indigo-500 text-4xl font-bold font-graphie leading-10 tracking-wide">Create</span>
          <span className="text-indigo-500 text-4xl font-semibold font-graphie leading-10 tracking-wide">.</span>
        </div>
      </section>
    </>
  );
} 