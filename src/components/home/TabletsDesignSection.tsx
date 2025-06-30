import Image from 'next/image';
import { tabletsImage, tabletBg } from '@/assets';

export default function TabletsDesignSection() {
  return (
    <section className="mt-20 py-32 bg-white relative">
      <div 
        className="absolute inset-0 -mx-[50vw] left-1/2"
        style={{
          backgroundImage: `url(${tabletBg.src})`,
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat-x',
          width: '100vw'
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div 
            className="mb-4 mx-auto"
            style={{
              width: '843px'
            }}
          >
            <h2 
              style={{
                color: '#1A1A1A',
                textAlign: 'center',
                fontFamily: 'Graphie',
                fontSize: '36px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '44px',
                letterSpacing: '0.36px'
              }}
            >
              Tablets Designed for Learning: Your Child&apos;s Personal Learning Companion
            </h2>
          </div>
          <div 
            className="mx-auto"
            style={{
              width: '926px',
              height: '48px',
              flexShrink: 0
            }}
          >
            <p 
              style={{
                color: '#1A1A1A',
                textAlign: 'center',
                fontFamily: 'Graphie',
                fontSize: '21px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '28px'
              }}
            >
              At Eklavya, we understand the challenges of learning on devices filled with distractions. That&apos;s why we&apos;ve created learning-focused tablets, optimized for your child&apos;s success.
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Tablet image */}
          <div className="flex justify-center ml-50">
            <Image 
              src={tabletsImage}
              alt="Learning Tablets"
              width={735}
              height={353}
              className="object-contain"
              style={{
                width: '735px',
                height: '353px',
                flexShrink: 0
              }}
            />
          </div>

          {/* Right side - Features */}
          <div className="space-y-4">
            <div 
              className="w-[583px] justify-start"
            >
              <span 
                style={{
                  color: '#1A1A1A',
                  fontFamily: 'Graphie',
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '1.625',
                  letterSpacing: '-0.025em',
                  opacity: 0.8
                }}
              >
                Distraction-Free Learning
              </span>
              <span 
                style={{
                  color: '#1A1A1A',
                  fontFamily: 'Graphie',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.625',
                  letterSpacing: '-0.025em',
                  opacity: 0.8
                }}
              >
                {" "}with no ads, pop-ups, or notifications to pull them away from learning. The tablet is pre-installed in Tablets Designed for Learning with Eklavya&apos;s entire learning universe, so they&apos;re always one click away from adventure.
              </span>
            </div>

            <div 
              className="w-[583px] justify-start"
            >
              <span 
                style={{
                  color: '#1A1A1A',
                  fontFamily: 'Graphie',
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '1.625',
                  letterSpacing: '-0.025em',
                  opacity: 0.8
                }}
              >
                Tailored content
              </span>
              <span 
                style={{
                  color: '#1A1A1A',
                  fontFamily: 'Graphie',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.625',
                  letterSpacing: '-0.025em',
                  opacity: 0.8
                }}
              >
                {" "}based on age, curriculum, and individual learning needs.
              </span>
            </div>

            <div 
              className="w-[583px] justify-start"
            >
              <span 
                style={{
                  color: '#1A1A1A',
                  fontFamily: 'Graphie',
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '1.625',
                  letterSpacing: '-0.025em',
                  opacity: 0.8
                }}
              >
                Parental controls
              </span>
              <span 
                style={{
                  color: '#1A1A1A',
                  fontFamily: 'Graphie',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.625',
                  letterSpacing: '-0.025em',
                  opacity: 0.8
                }}
              >
                {" "}ensure peace of mind. No external apps or risky downloads—just a safe space to explore and grow.
              </span>
            </div>

            <div 
              className="w-[583px] justify-start"
            >
              <span 
                style={{
                  color: '#1A1A1A',
                  fontFamily: 'Graphie',
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '1.625',
                  letterSpacing: '-0.025em',
                  opacity: 0.8
                }}
              >
                Offline access
              </span>
              <span 
                style={{
                  color: '#1A1A1A',
                  fontFamily: 'Graphie',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.625',
                  letterSpacing: '-0.025em',
                  opacity: 0.8
                }}
              >
                {" "}ensures no Wi-Fi interruptions during learning time.
              </span>
            </div>

            <div 
              className="w-[583px] justify-start"
            >
              <span 
                style={{
                  color: '#1A1A1A',
                  fontFamily: 'Graphie',
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '1.625',
                  letterSpacing: '-0.025em',
                  opacity: 0.8
                }}
              >
                Track What They&apos;ve Learned
              </span>
              <span 
                style={{
                  color: '#1A1A1A',
                  fontFamily: 'Graphie',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.625',
                  letterSpacing: '-0.025em',
                  opacity: 0.8
                }}
              >
                {" "}Stay in the loop with progress reports and skill summaries, because we know you love to see them win.
              </span>
            </div>

            <div 
              className="w-[583px] justify-start"
            >
              <span 
                style={{
                  color: '#1A1A1A',
                  fontFamily: 'Graphie',
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '1.625',
                  letterSpacing: '-0.025em',
                  opacity: 0.8
                }}
              >
                Control Screen Time
              </span>
              <span 
                style={{
                  color: '#1A1A1A',
                  fontFamily: 'Graphie',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.625',
                  letterSpacing: '-0.025em',
                  opacity: 0.8
                }}
              >
                {" "}Block the tablet or set schedules to ensure balanced learning and play.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 