import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Car, Zap, Settings, Shield } from 'lucide-react';

const AutomotiveEngineeringPage = () => {
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
            <div className="bg-gradient-to-r from-green-500 to-teal-600 p-3 rounded-xl mr-4">
              <Car className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Automotive Engineering</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Automotive engineering is a specialized branch of mechanical engineering focused on the design, 
              development, manufacturing, and operation of vehicles. This field has revolutionized personal 
              transportation and continues to evolve with electric vehicles, autonomous driving, and sustainable mobility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Car className="h-6 w-6 text-green-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Vehicle Design</h3>
                <p className="text-slate-400 text-sm">Aerodynamics, styling, and performance optimization</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Settings className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Powertrain</h3>
                <p className="text-slate-400 text-sm">Engines, transmissions, and drive systems</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Shield className="h-6 w-6 text-red-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Safety Systems</h3>
                <p className="text-slate-400 text-sm">Crash protection and active safety features</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Zap className="h-6 w-6 text-yellow-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Electric Vehicles</h3>
                <p className="text-slate-400 text-sm">Battery technology and sustainable transportation</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Engineering Challenges</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Powertrain Development</h3>
                <p className="text-slate-300">
                  From internal combustion engines to electric motors and hydrogen fuel cells, automotive engineers 
                  continuously improve efficiency, performance, and environmental impact of vehicle propulsion systems.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Vehicle Dynamics and Control</h3>
                <p className="text-slate-300">
                  Suspension systems, steering, braking, and electronic stability control work together to provide 
                  safe, comfortable, and responsive vehicle handling across diverse driving conditions.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Safety and Crashworthiness</h3>
                <p className="text-slate-300">
                  Advanced materials, crumple zones, airbags, and active safety systems like automatic emergency 
                  braking protect occupants and pedestrians while meeting stringent safety regulations.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">Autonomous Driving Technology</h3>
                <p className="text-slate-300">
                  Integration of sensors, artificial intelligence, and control systems to enable self-driving 
                  capabilities, requiring expertise in software, hardware, and systems engineering.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Future of Automotive Engineering</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The automotive industry is undergoing its most significant transformation since the invention of 
              the automobile. Electric vehicles, autonomous driving, connected cars, and shared mobility are 
              reshaping how vehicles are designed, manufactured, and used.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Modern automotive engineers must understand not only traditional mechanical systems but also 
              electronics, software, battery technology, and artificial intelligence. The field continues to 
              evolve as we work toward safer, cleaner, and more efficient transportation solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomotiveEngineeringPage;