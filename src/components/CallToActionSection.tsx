import BulletIcon from "@/components/BulletIcon";

export default function CallToActionSection() {
  return (
    <section className="py-24 bg-blue-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">
          Ready to Transform Learning Time?
        </h2>
        <p className="text-xl text-gray-700 mb-12">
          Begin 7 days of free adventure No wands required (though excitement
          is highly encouraged)
        </p>
        <p className="text-xl text-gray-700 mb-8">
          Because we believe every child deserves to: 
        </p>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - 3 items */}
            <ul className="text-left space-y-3">
              <li className="flex items-center">
                <BulletIcon />
                <span className="text-cyan-400 text-lg">Dream bigger</span>
              </li>
              <li className="flex items-center">
                <BulletIcon />
                <span className="text-cyan-400 text-lg">Learn easier</span>
              </li>
              <li className="flex items-center">
                <BulletIcon />
                <span className="text-cyan-400 text-lg">Stay curious</span>
              </li>
            </ul>
            
            {/* Right Column - 2 items */}
            <ul className="text-left space-y-3">
              <li className="flex items-center">
                <BulletIcon />
                <span className="text-cyan-400 text-lg">Smile wider</span>
              </li>
              <li className="flex items-center">
                <BulletIcon />
                <span className="text-cyan-400 text-lg">Grow confident</span>
              </li>
            </ul>
          </div>
        </div>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full">
          Sign up for free
        </button>
      </div>
    </section>
  );
} 