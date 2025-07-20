import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Car, Fuel, Zap, Settings } from 'lucide-react';

const AutomobilesPage = () => {
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
            <div className="bg-gradient-to-r from-green-500 to-teal-600 p-3 rounded-xl mr-4">
              <Car className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Automobile Evolution</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              The automobile transformed from a luxury curiosity into the backbone of modern society. 
              This evolution encompasses revolutionary advances in engines, manufacturing, safety, 
              and now, autonomous driving and electric powertrains.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Fuel className="h-6 w-6 text-orange-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Internal Combustion</h3>
                <p className="text-slate-400 text-sm">The engine that powered the automotive age</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Settings className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Mass Production</h3>
                <p className="text-slate-400 text-sm">Assembly lines and manufacturing innovation</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Zap className="h-6 w-6 text-green-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Electric Future</h3>
                <p className="text-slate-400 text-sm">Battery technology and sustainable transport</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Automotive Revolution</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">1885 - Birth of the Automobile</h3>
                <p className="text-slate-300">
                  Karl Benz created the first true automobile with his Patent-Motorwagen. This three-wheeled 
                  vehicle featured the first internal combustion engine designed specifically for automotive use, 
                  establishing the foundation for all future cars.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">1908 - Model T Revolution</h3>
                <p className="text-slate-300">
                  Henry Ford's Model T, combined with assembly line production, made automobiles affordable 
                  for ordinary people. This democratization of transportation fundamentally changed how people 
                  lived, worked, and organized their communities.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">1950s - Safety Engineering</h3>
                <p className="text-slate-300">
                  The introduction of systematic crash testing and safety features like seat belts marked 
                  a new focus on protecting occupants. Engineers began designing cars not just for performance 
                  and economy, but for survival in accidents.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">1997 - Hybrid Technology</h3>
                <p className="text-slate-300">
                  The Toyota Prius introduced hybrid technology to mainstream markets, combining electric 
                  motors with gasoline engines for improved efficiency. This innovation paved the way for 
                  today's electric vehicle revolution.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Engineering Innovations</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Automotive engineering encompasses far more than engines and wheels. Modern vehicles integrate 
              computer systems, advanced materials, sophisticated transmissions, and safety systems that 
              work together to create efficient, safe, and comfortable transportation.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Today's automotive engineers are developing autonomous driving systems, advanced battery 
              technologies, and manufacturing processes for electric vehicles. The industry is experiencing 
              its most significant transformation since the invention of the automobile itself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomobilesPage;