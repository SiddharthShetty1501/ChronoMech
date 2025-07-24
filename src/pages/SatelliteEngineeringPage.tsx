import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Satellite, Radio, Globe, Rocket } from 'lucide-react';

const SatelliteEngineeringPage = () => {
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
            <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-3 rounded-xl mr-4">
              <Satellite className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Satellite Engineering</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Satellite engineering involves designing, building, and operating spacecraft that orbit Earth 
              or other celestial bodies. These systems have revolutionized global communications, navigation, 
              weather forecasting, and Earth observation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Satellite className="h-6 w-6 text-purple-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Spacecraft Design</h3>
                <p className="text-slate-400 text-sm">Structural and thermal systems for space</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Radio className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Communication Systems</h3>
                <p className="text-slate-400 text-sm">RF systems and signal processing</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Globe className="h-6 w-6 text-green-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Earth Observation</h3>
                <p className="text-slate-400 text-sm">Remote sensing and imaging systems</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Rocket className="h-6 w-6 text-orange-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Launch Systems</h3>
                <p className="text-slate-400 text-sm">Getting satellites into orbit</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Engineering Challenges</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Space Environment Survival</h3>
                <p className="text-slate-300">
                  Satellites must operate in the harsh environment of space, withstanding extreme temperatures, 
                  radiation, and vacuum conditions. Engineers design robust systems with redundancy and 
                  radiation-hardened components.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Communication and Navigation</h3>
                <p className="text-slate-300">
                  Satellite communication systems enable global connectivity, while GPS and other navigation 
                  satellites provide precise positioning services. These systems require precise timing, 
                  signal processing, and orbital mechanics.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Earth Observation and Science</h3>
                <p className="text-slate-300">
                  Scientific satellites monitor weather, climate, and natural disasters. They carry sophisticated 
                  sensors and instruments that provide critical data for weather forecasting, environmental 
                  monitoring, and scientific research.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">Orbital Mechanics and Control</h3>
                <p className="text-slate-300">
                  Maintaining proper satellite orbits requires precise calculations and control systems. 
                  Engineers must account for gravitational forces, atmospheric drag, and other perturbations 
                  to keep satellites in their intended positions.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Future of Satellite Technology</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The satellite industry is experiencing rapid growth with mega-constellations like Starlink, 
              small satellites (CubeSats), and advanced Earth observation systems. New technologies include 
              electric propulsion, software-defined satellites, and on-orbit servicing capabilities.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Future developments include quantum communication satellites, space-based solar power, 
              and satellites for deep space exploration. Satellite engineering continues to push the 
              boundaries of what's possible in space technology and global connectivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatelliteEngineeringPage;