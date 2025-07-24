import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Waves, Ship, Anchor, Wind } from 'lucide-react';

const MarineEngineeringPage = () => {
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
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-xl mr-4">
              <Waves className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Marine Engineering</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Marine engineering encompasses the design, construction, and operation of ships, boats, 
              and offshore structures. This field combines naval architecture with mechanical engineering 
              to create vessels that can safely navigate the world's oceans and waterways.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Ship className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Naval Architecture</h3>
                <p className="text-slate-400 text-sm">Ship design and hull optimization</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Waves className="h-6 w-6 text-cyan-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Hydrodynamics</h3>
                <p className="text-slate-400 text-sm">Water flow and resistance analysis</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Anchor className="h-6 w-6 text-gray-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Offshore Systems</h3>
                <p className="text-slate-400 text-sm">Oil rigs and marine structures</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Wind className="h-6 w-6 text-green-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Propulsion</h3>
                <p className="text-slate-400 text-sm">Marine engines and propeller systems</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Engineering Challenges</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Ship Design and Stability</h3>
                <p className="text-slate-300">
                  Creating vessels that are stable, seaworthy, and efficient. This involves complex calculations 
                  of buoyancy, stability, and structural integrity to ensure ships can safely carry cargo and 
                  passengers in all weather conditions.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Marine Propulsion Systems</h3>
                <p className="text-slate-300">
                  Development of efficient propulsion systems, from traditional diesel engines to modern 
                  gas turbines and emerging technologies like fuel cells and wind-assisted propulsion 
                  for sustainable shipping.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Offshore Engineering</h3>
                <p className="text-slate-300">
                  Design of offshore platforms for oil and gas extraction, wind farms, and other marine 
                  installations. These structures must withstand extreme weather, waves, and corrosive 
                  marine environments.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">Environmental Protection</h3>
                <p className="text-slate-300">
                  Developing technologies to reduce marine pollution, including ballast water treatment, 
                  emission control systems, and designs that minimize environmental impact while maintaining 
                  operational efficiency.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Modern Applications</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Today's marine engineers work on diverse projects: autonomous ships that can navigate without 
              crews, offshore wind farms that generate renewable energy, and advanced materials that resist 
              corrosion in harsh marine environments.
            </p>

            <p className="text-slate-300 leading-relaxed">
              The field continues to evolve with digitalization, including smart ship systems, predictive 
              maintenance, and advanced simulation tools. Marine engineering plays a crucial role in global 
              trade, renewable energy, and ocean exploration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarineEngineeringPage;