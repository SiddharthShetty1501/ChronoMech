import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Waves, Wind, Recycle, Leaf } from 'lucide-react';

const EnvironmentalEngineeringPage = () => {
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
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-3 rounded-xl mr-4">
              <Waves className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Environmental Engineering</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Environmental engineering protects human health and the environment by developing sustainable 
              solutions to pollution and environmental challenges. This field combines engineering principles 
              with environmental science to create a cleaner, healthier world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Waves className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Water Treatment</h3>
                <p className="text-slate-400 text-sm">Clean water and wastewater systems</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Wind className="h-6 w-6 text-gray-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Air Quality</h3>
                <p className="text-slate-400 text-sm">Pollution control and monitoring</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Recycle className="h-6 w-6 text-green-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Waste Management</h3>
                <p className="text-slate-400 text-sm">Recycling and disposal systems</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Leaf className="h-6 w-6 text-emerald-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Sustainability</h3>
                <p className="text-slate-400 text-sm">Green technologies and practices</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Core Focus Areas</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Water and Wastewater Treatment</h3>
                <p className="text-slate-300">
                  Design of systems to provide clean drinking water and treat wastewater before returning 
                  it to the environment. This includes physical, chemical, and biological treatment processes 
                  to remove contaminants and pathogens.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Air Pollution Control</h3>
                <p className="text-slate-300">
                  Development of technologies to reduce air pollution from industrial sources, vehicles, 
                  and power plants. This includes scrubbers, filters, catalytic converters, and monitoring 
                  systems to ensure air quality standards.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Solid Waste Management</h3>
                <p className="text-slate-300">
                  Creating sustainable systems for waste collection, recycling, and disposal. This includes 
                  landfill design, waste-to-energy systems, composting facilities, and strategies to reduce 
                  waste generation.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">Environmental Remediation</h3>
                <p className="text-slate-300">
                  Cleaning up contaminated sites and restoring damaged ecosystems. This involves soil and 
                  groundwater treatment, habitat restoration, and long-term monitoring to ensure environmental 
                  recovery.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Sustainable Solutions</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Modern environmental engineering emphasizes sustainable design, renewable energy integration, 
              and circular economy principles. Engineers develop green infrastructure, carbon capture 
              technologies, and systems that work with natural processes rather than against them.
            </p>

            <p className="text-slate-300 leading-relaxed">
              The field continues to evolve with climate change mitigation, smart environmental monitoring 
              systems, and biotechnology applications. Environmental engineers play a crucial role in 
              creating a sustainable future for generations to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalEngineeringPage;