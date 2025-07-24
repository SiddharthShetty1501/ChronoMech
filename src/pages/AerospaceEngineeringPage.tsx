import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plane, Rocket, Satellite, Wind } from 'lucide-react';

const AerospaceEngineeringPage = () => {
  return (
    <div className="relative min-h-screen pt-8 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/engineering-disciplines" 
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Engineering Disciplines
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

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Plane className="h-6 w-6 text-green-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Aircraft Design</h3>
                <p className="text-slate-400 text-sm">Commercial and military aviation</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Evolution of Aerospace Engineering</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">1783 - First Human Flight</h3>
                <p className="text-slate-300">
                  The Montgolfier brothers achieved the first human flight in a hot air balloon in Paris. 
                  This breakthrough proved that humans could leave the ground and sparked centuries of 
                  aviation innovation and experimentation.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">1903 - Wright Brothers' First Powered Flight</h3>
                <p className="text-slate-300">
                  Orville and Wilbur Wright achieved the first powered, sustained, and controlled heavier-than-air 
                  human flight at Kitty Hawk. Their systematic approach to solving lift, propulsion, and control 
                  problems established the foundation of modern aeronautical engineering.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">1939 - Jet Age Begins</h3>
                <p className="text-slate-300">
                  Hans von Ohain's turbojet engine powered the first jet aircraft, the Heinkel He 178. 
                  This breakthrough eliminated propeller limitations, enabling faster speeds and higher 
                  altitudes that revolutionized both military and commercial aviation.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">1957-1969 - Space Race Era</h3>
                <p className="text-slate-300">
                  Sputnik launched the space age, followed by Yuri Gagarin's first human spaceflight and 
                  Apollo 11's moon landing. This era drove rapid advancement in rocket technology, materials 
                  science, and systems engineering that continues to benefit aerospace today.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-orange-300 mb-2">1970s-Present - Modern Aerospace</h3>
                <p className="text-slate-300">
                  Commercial aviation expanded globally with wide-body jets like the Boeing 747. The Space Shuttle 
                  introduced reusable spacecraft concepts. Today's focus includes supersonic passenger flight, 
                  electric aircraft, space tourism, and Mars exploration missions.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Core Disciplines</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Aeronautical Engineering</h3>
                <p className="text-slate-300">
                  Focuses on aircraft design and operation within Earth's atmosphere. This includes commercial 
                  airliners, military fighters, helicopters, and unmanned aerial vehicles (UAVs).
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Astronautical Engineering</h3>
                <p className="text-slate-300">
                  Deals with spacecraft design and space missions. This includes satellites, space stations, 
                  planetary rovers, and launch vehicles that operate in the vacuum of space.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Propulsion Systems</h3>
                <p className="text-slate-300">
                  Development of engines and propulsion methods, from jet engines and rocket motors to 
                  experimental propulsion concepts like ion drives and nuclear thermal rockets.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">Flight Dynamics and Control</h3>
                <p className="text-slate-300">
                  Understanding how aircraft and spacecraft move through their environments, including 
                  stability, control systems, and guidance for both piloted and autonomous vehicles.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Modern Applications</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Today's aerospace engineers work on cutting-edge projects: reusable rockets that reduce launch costs, 
              hypersonic aircraft that can travel at five times the speed of sound, and spacecraft designed for 
              long-duration missions to Mars and beyond.
            </p>

            <p className="text-slate-300 leading-relaxed">
              The field continues to evolve with emerging technologies like electric aircraft propulsion, 
              autonomous flight systems, and space tourism. Aerospace engineering remains at the forefront 
              of human exploration and technological advancement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AerospaceEngineeringPage;