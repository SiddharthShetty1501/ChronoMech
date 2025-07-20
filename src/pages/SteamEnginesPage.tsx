import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cog, Thermometer, Gauge, Factory } from 'lucide-react';

const SteamEnginesPage = () => {
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
            <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-xl mr-4">
              <Cog className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Steam Engines</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              The steam engine stands as one of humanity's most transformative inventions, 
              serving as the driving force behind the Industrial Revolution and fundamentally 
              changing how we work, travel, and live.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Thermometer className="h-6 w-6 text-orange-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Heat Engine</h3>
                <p className="text-slate-400 text-sm">Converts thermal energy into mechanical work</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Gauge className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Pressure System</h3>
                <p className="text-slate-400 text-sm">Uses steam pressure to drive pistons</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Factory className="h-6 w-6 text-green-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Industrial Power</h3>
                <p className="text-slate-400 text-sm">Powered mills, factories, and transportation</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Historical Timeline</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">1712 - Thomas Newcomen</h3>
                <p className="text-slate-300">
                  Developed the first practical steam engine for pumping water from mines. 
                  This atmospheric engine used steam to create a vacuum, allowing atmospheric pressure to drive the piston.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">1769 - James Watt's Innovation</h3>
                <p className="text-slate-300">
                  Improved the steam engine with a separate condenser, dramatically increasing efficiency. 
                  This breakthrough made steam engines practical for powering machinery beyond mining operations.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">1804 - First Steam Locomotive</h3>
                <p className="text-slate-300">
                  Richard Trevithick built the first steam-powered railway locomotive, 
                  revolutionizing transportation and making possible the railway age that would connect nations.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">1807 - Robert Fulton's Steamboat</h3>
                <p className="text-slate-300">
                  The first commercially successful steamboat service began operation, 
                  transforming river and maritime transportation by providing reliable, schedule-based travel.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Impact on Society</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Steam engines didn't just change technology—they transformed society itself. 
              Factories could now be built anywhere, not just near rivers for water power. 
              This led to the growth of industrial cities and new patterns of work and life.
            </p>

            <p className="text-slate-300 leading-relaxed">
              The reliability and power of steam engines made possible the modern world of 
              mass production, rapid transportation, and global trade networks that continue 
              to shape our lives today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SteamEnginesPage;