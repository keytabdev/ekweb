import Image from 'next/image';
import logo from '../../assets/shared/eklavya.png';
import spiral from '../../assets/about/spiral-arrow.svg';
import flower from '../../assets/about/grey-flower.svg';

const beliefs = [
  {
    title: 'Curiosity Over Cramming',
    desc: 'Kids learn best when they&apos;re intrigued, challenged, and having fun.',
    bg: '#F3EFFF',
    shadow: 'shadow-purple-200',
  },
  {
    title: 'Education Shouldn\'t Have Limits',
    desc: 'Every child deserves access to the tools that help them dream big and achieve bigger.',
    bg: '#FFF8E2',
    shadow: 'shadow-yellow-200',
  },
  {
    title: 'Every Child Learns Differently',
    desc: 'AI should adapt to each learner, not the other way around.',
    bg: '#FFEFF6',
    shadow: 'shadow-pink-200',
  },
  {
    title: 'Play Is Power',
    desc: 'Learning should feel like an adventure that sparks creativity and problem-solving.',
    bg: '#EFFFFA',
    shadow: 'shadow-green-200',
  },
];

export default function AboutBeliefsSection() {
  return (
    <section className="relative py-20 px-4 bg-[#D6F8E7] overflow-hidden">
      {/* Logo */}
      <div className="absolute left-8 top-8 z-10 opacity-80">
        <Image src={logo} alt="Logo" width={60} height={60} />
      </div>
      {/* Spiral */}
      <div className="absolute left-0 top-1/2 z-10 opacity-40">
        <Image src={spiral} alt="Spiral" width={48} height={48} />
      </div>
      {/* Flower */}
      <div className="absolute right-8 bottom-8 z-10 opacity-40">
        <Image src={flower} alt="Flower" width={48} height={48} />
      </div>
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A7F4E] text-center mb-8">We&apos;re Not Just Building A Platform.<br />We&apos;re What Education Can Be.</h2>
      {/* Belief cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {beliefs.map((b, i) => (
          <div key={i} className={`rounded-2xl p-8 ${b.shadow}`} style={{ background: b.bg }}>
            <h3 className="font-semibold text-lg mb-2 text-[#2D1A47]">{b.title}</h3>
            <p className="text-[#3D3D3D] text-base">{b.desc}</p>
          </div>
        ))}
      </div>
      {/* Subheading */}
      <div className="mt-12 text-center max-w-2xl mx-auto">
        <h3 className="text-xl md:text-2xl font-bold mb-2">Join Us in Reimagining Education</h3>
        <p className="text-[#222] text-base md:text-lg">Eklavya isn&apos;t just an app. It&apos;s a movement to make learning joyful, personal, and limitless. Because when kids love learning, they don&apos;t just pass tests. <span className="text-[#2D8A4B] font-bold">They Grow, Dream, and Create.</span></p>
      </div>
    </section>
  );
} 