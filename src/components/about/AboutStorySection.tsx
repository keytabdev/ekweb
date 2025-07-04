export default function AboutStorySection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-[#1A1A1A] text-center text-[36px] font-bold leading-[44px] tracking-[0.36px] mb-6">Who We Are</h2>
        <p className="text-[#1A1A1A] text-center text-[21px] font-normal leading-[28px] mb-10">We are parents, educators, technologists, and dreamers who saw a problem—kids glued to screens, disengaged from learning—and imagined a better way.</p>
        <div className="flex w-[1440px] px-[144px] justify-between items-start gap-8 mt-8">
          <div className="flex-1 bg-[#F6EFFF] rounded-2xl p-6 shadow-md">
            <span className="block text-[#38393E] text-[24px] font-semibold leading-[26px] mb-2">Math feels like an epic quest, not a worksheet.</span>
          </div>
          <div className="flex-1 bg-[#E6F7F1] rounded-2xl p-6 shadow-md">
            <span className="block text-[#38393E] text-[24px] font-semibold leading-[26px] mb-2">Science becomes a hands-on experiment.</span>
          </div>
          <div className="flex-1 bg-[#FFF9E6] rounded-2xl p-6 shadow-md">
            <span className="block text-[#38393E] text-[24px] font-semibold leading-[26px] mb-2">Reading isn&apos;t a chore, but an adventure into new worlds.</span>
          </div>
        </div>
      </div>
    </section>
  );
} 