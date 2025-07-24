import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building, Grid as Bridge, Loader as Road, Droplets } from 'lucide-react';

const CivilEngineeringPage = () => {
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
            <div className="bg-gradient-to-r from-gray-500 to-slate-600 p-3 rounded-xl mr-4">
              <Building className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Civil Engineering</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Civil engineering is the oldest engineering discipline, focused on designing, building, and maintaining 
              the infrastructure that supports civilization. From ancient Roman aqueducts to modern smart cities, 
              civil engineers shape the physical world we live in.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Building className="h-6 w-6 text-gray-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Structures</h3>
                <p className="text-slate-400 text-sm">Buildings, bridges, and architectural marvels</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Road className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Transportation</h3>
                <p className="text-slate-400 text-sm">Roads, railways, and traffic systems</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Droplets className="h-6 w-6 text-cyan-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Water Systems</h3>
                <p className="text-slate-400 text-sm">Dams, aqueducts, and water treatment</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Bridge className="h-6 w-6 text-green-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Infrastructure</h3>
                <p className="text-slate-400 text-sm">Public works and urban planning</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Historical Achievements</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Ancient Engineering Marvels</h3>
                <p className="text-slate-300">
                  Roman engineers built roads, aqueducts, and structures that lasted millennia. The Pantheon's 
                  concrete dome and extensive road network demonstrate the enduring principles of civil engineering.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Industrial Revolution Infrastructure</h3>
                <p className="text-slate-300">
                  The 19th century brought canals, railways, and steel-frame buildings. Engineers like Isambard 
                  Kingdom Brunel revolutionized transportation with innovative bridges and railway systems.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Modern Skyscrapers and Megaprojects</h3>
                <p className="text-slate-300">
                  The development of steel and reinforced concrete enabled skyscrapers and massive infrastructure 
                  projects like the Panama Canal, transforming cities and global commerce.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">Sustainable and Smart Infrastructure</h3>
                <p className="text-slate-300">
                  Modern civil engineering focuses on sustainability, resilience, and smart systems. Green buildings, 
                  renewable energy infrastructure, and IoT-enabled cities represent the future of the field.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Core Specializations</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Civil engineering encompasses structural engineering (buildings and bridges), transportation engineering 
              (roads and transit systems), water resources engineering (dams and treatment plants), geotechnical 
              engineering (foundations and earthworks), and environmental engineering (pollution control and remediation).
            </p>

            <p className="text-slate-300 leading-relaxed">
              Today's civil engineers use advanced computer modeling, sustainable materials, and smart technologies 
              to create infrastructure that is more efficient, resilient, and environmentally responsible. The field 
              continues to evolve as we face challenges like climate change, urbanization, and aging infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CivilEngineeringPage;