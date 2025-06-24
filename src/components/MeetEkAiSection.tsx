export default function MeetEkAiSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Ek AI
          </h2>
        </div>
        
        <div className="flex justify-center">
          <svg
            width="400"
            height="300"
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="border-2 border-dashed border-gray-300 rounded-lg"
          >
            <rect width="400" height="300" fill="#ffffff"/>
            <rect x="160" y="110" width="80" height="80" rx="40" fill="#10b981"/>
            <circle cx="180" cy="130" r="8" fill="white"/>
            <circle cx="220" cy="130" r="8" fill="white"/>
            <path d="M180 160 Q200 175 220 160" stroke="white" strokeWidth="3" fill="none"/>
            <text x="200" y="220" textAnchor="middle" className="fill-gray-600 text-sm">
              AI Assistant Banner
            </text>
            <text x="200" y="240" textAnchor="middle" className="fill-gray-600 text-xs">
              Coming Soon
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
} 