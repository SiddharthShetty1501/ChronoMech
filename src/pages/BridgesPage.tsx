import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wrench, Grid as Bridge, Mountain, Waves } from 'lucide-react';

const BridgesPage = () => {
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
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl mr-4">
              <Bridge className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Engineering Bridges</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Bridges represent humanity's eternal desire to connect and overcome natural barriers. 
              From ancient stone arches to modern cable-stayed marvels, bridge engineering showcases 
              our mastery over materials, forces, and the environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Mountain className="h-6 w-6 text-purple-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Structural Engineering</h3>
                <p className="text-slate-400 text-sm">Managing loads, tension, and compression</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Waves className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Environmental Forces</h3>
                <p className="text-slate-400 text-sm">Wind, water, and seismic considerations</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Wrench className="h-6 w-6 text-green-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Material Innovation</h3>
                <p className="text-slate-400 text-sm">From stone to steel to composite materials</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Bridge Types & Evolution</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Arch Bridges - Ancient Mastery</h3>
                <p className="text-slate-300">
                  Roman engineers perfected the arch bridge, with structures like the Pont du Gard 
                  still standing after 2,000 years. The arch transfers weight through compression, 
                  making it incredibly strong and durable.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Suspension Bridges - Spanning Great Distances</h3>
                <p className="text-slate-300">
                  The Brooklyn Bridge (1883) and Golden Gate Bridge (1937) demonstrated how cables 
                  and towers could span vast distances. These structures use tension in the main cables 
                  to support the bridge deck.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Cable-Stayed Bridges - Modern Engineering</h3>
                <p className="text-slate-300">
                  Modern cable-stayed bridges like the Millau Viaduct combine efficiency with elegance. 
                  Cables connect directly from towers to the deck, creating distinctive geometric patterns 
                  while distributing loads effectively.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">Cantilever Bridges - Engineering Balance</h3>
                <p className="text-slate-300">
                  The Forth Bridge in Scotland pioneered the cantilever design, where sections project 
                  from piers and are balanced by counterweights. This approach enables construction 
                  without temporary supports in deep water.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Engineering Challenges</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Bridge engineers must consider countless factors: live loads from traffic, dead loads 
              from the structure itself, wind forces, temperature expansion, and even seismic activity. 
              Each bridge is a unique solution to a specific set of challenges.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Modern bridge engineering incorporates computer modeling, advanced materials like 
              high-strength steel and carbon fiber, and innovative construction techniques. 
              Today's bridges are not just functional—they're architectural statements that 
              define skylines and inspire communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BridgesPage;