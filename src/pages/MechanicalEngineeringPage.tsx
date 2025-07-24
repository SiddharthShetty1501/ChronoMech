import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cog, Wrench, Settings, Thermometer } from 'lucide-react';

const MechanicalEngineeringPage = () => {
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
            <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-xl mr-4">
              <Cog className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Mechanical Engineering</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Mechanical engineering is one of the oldest and broadest engineering disciplines, dealing with the design, 
              analysis, manufacturing, and maintenance of mechanical systems. It combines principles of physics, 
              mathematics, and materials science to create machines and systems that power our modern world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Cog className="h-6 w-6 text-orange-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Machine Design</h3>
                <p className="text-slate-400 text-sm">Creating efficient and reliable mechanical systems</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Thermometer className="h-6 w-6 text-red-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Thermodynamics</h3>
                <p className="text-slate-400 text-sm">Heat transfer and energy conversion principles</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Settings className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Manufacturing</h3>
                <p className="text-slate-400 text-sm">Production processes and quality control</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Wrench className="h-6 w-6 text-green-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Materials Science</h3>
                <p className="text-slate-400 text-sm">Understanding material properties and behavior</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Core Principles</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Mechanics and Dynamics</h3>
                <p className="text-slate-300">
                  Understanding forces, motion, and energy in mechanical systems. This includes statics for 
                  structures at rest, dynamics for moving systems, and vibration analysis for oscillating components.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Thermodynamics and Heat Transfer</h3>
                <p className="text-slate-300">
                  The study of energy conversion, heat engines, refrigeration systems, and thermal management. 
                  Critical for power generation, HVAC systems, and automotive engines.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Fluid Mechanics</h3>
                <p className="text-slate-300">
                  Analysis of fluid flow in pipes, pumps, turbines, and aerodynamic systems. Essential for 
                  hydraulic systems, aircraft design, and industrial processes.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">Materials and Manufacturing</h3>
                <p className="text-slate-300">
                  Selection of appropriate materials and manufacturing processes to create reliable, cost-effective 
                  products. Includes machining, casting, welding, and modern additive manufacturing techniques.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Applications and Industries</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Mechanical engineers work across virtually every industry: automotive, aerospace, energy, 
              manufacturing, robotics, and biomedical devices. They design everything from tiny micro-mechanisms 
              to massive power plants and industrial machinery.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Modern mechanical engineering increasingly incorporates computer-aided design (CAD), simulation 
              software, and advanced materials. The field continues to evolve with emerging technologies like 
              3D printing, smart materials, and sustainable energy systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MechanicalEngineeringPage;