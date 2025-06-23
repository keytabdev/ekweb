export default function WhatMakesEklavyaDifferentSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          What makes Eklavya different?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Place holder for the SVG */}
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Curriculum Aligned</h3>
            <p className="text-gray-600">
              All content is carefully designed to match school curriculums and learning standards.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Adaptive Learning</h3>
            <p className="text-gray-600">
              Our platform adapts to your child&apos;s learning pace and provides personalized challenges.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Safe Environment</h3>
            <p className="text-gray-600">
              Ad-free, distraction-free learning environment designed specifically for children.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 