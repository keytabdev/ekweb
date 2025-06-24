export default function WhatMakesEklavyaDifferentSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          What Makes Eklavya Different?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* For Kids Card */}
          <div className="relative">
            {/* Placeholder for blue background SVG */}
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 text-white min-h-[400px] relative overflow-hidden">
              {/* Decorative elements placeholder */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-red-400 rounded-full"></div>
              
              <h3 className="text-2xl font-bold mb-6">
                For Kids: They Think They&apos;re Playing
              </h3>
              
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Battling number ninjas while mastering multiplication.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Saving kingdoms while improving grammar.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Building castles while developing creativity.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Exploring galaxies while unlocking scientific discoveries.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* For Parents & Teachers Card */}
          <div className="relative">
            {/* Placeholder for green background SVG */}
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-8 text-white min-h-[400px] relative overflow-hidden">
              {/* Decorative elements placeholder */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-300 rounded-full"></div>
              
              <h3 className="text-2xl font-bold mb-6">
                For Parents & Teachers: You Know They&apos;re Learning
              </h3>
              
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Curriculum-aligned lessons ensure they stay on track with school requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Skill-building quests develop critical thinking, creativity, and problem-solving</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Progress reports show measurable improvement in academics and confidence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 