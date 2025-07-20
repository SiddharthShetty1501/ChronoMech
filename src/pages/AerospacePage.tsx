import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plane, Rocket, Satellite, Wind } from 'lucide-react';

const AerospacePage = () => {
  return (
    <div className="relative min-h-screen pt-8 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl mr-4">
              <Plane className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Aerospace Engineering</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Aerospace engineering represents humanity's boldest ambition: to conquer the skies 
              and reach beyond our planet. From the Wright brothers' first flight to landing on Mars, 
              this field continues to push the boundaries of what's possible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Wind className="h-6 w-6 text-cyan-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Aerodynamics</h3>
                <p className="text-slate-400 text-sm">Understanding airflow and lift generation</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Rocket className="h-6 w-6 text-orange-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Propulsion</h3>
                <p className="text-slate-400 text-sm">From propellers to jet engines to rockets</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Satellite className="h-6 w-6 text-purple-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Space Systems</h3>
                <p className="text-slate-400 text-sm">Satellites, spacecraft, and exploration</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Milestones in Flight</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">1903 - Wright Brothers' First Flight</h3>
                <p className="text-slate-300">
                  Orville and Wilbur Wright achieved the first powered, sustained, and controlled heavier-than-air 
                  human flight. Their systematic approach to solving the problems of lift, propulsion, and control 
                  laid the foundation for modern aviation.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">1939 - First Jet Engine</h3>
                <p className="text-slate-300">
                  Hans von Ohain's jet engine powered the first jet aircraft. This breakthrough eliminated 
                  the limitations of propeller-driven aircraft, enabling faster speeds and higher altitudes 
                  that revolutionized both military and commercial aviation.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">1957 - Space Age Begins</h3>
                <p className="text-slate-300">
                  The launch of Sputnik marked humanity's entry into space. This basketball-sized satellite 
                  demonstrated that we could escape Earth's gravity, launching the space race and opening 
                  entirely new frontiers for exploration and technology.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">1969 - Moon Landing</h3>
                <p className="text-slate-300">
                  Apollo 11's successful moon landing represented the pinnacle of 1960s aerospace engineering. 
                  The mission required breakthroughs in navigation, life support, materials science, and 
                  precision manufacturing that continue to benefit society today.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Modern Aerospace Challenges</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Today's aerospace engineers face new challenges: sustainable aviation fuels, electric aircraft, 
              reusable rockets, and spacecraft designed for long-duration missions to Mars and beyond. 
              The industry must balance performance with environmental responsibility.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Emerging technologies like supersonic passenger aircraft, urban air mobility vehicles, 
              and space tourism are creating new engineering challenges. Each advancement builds on 
              a century of innovation while pushing into uncharted territory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AerospacePage;