import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lightbulb, FlaskConical, Factory, Droplets } from 'lucide-react';

const ChemicalEngineeringPage = () => {
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
            <div className="bg-gradient-to-r from-pink-500 to-rose-600 p-3 rounded-xl mr-4">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Chemical Engineering</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Chemical engineering transforms raw materials into useful products through chemical processes. 
              This field combines chemistry, physics, mathematics, and engineering to design and operate 
              processes that create everything from fuels and pharmaceuticals to food and materials.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <FlaskConical className="h-6 w-6 text-pink-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Process Design</h3>
                <p className="text-slate-400 text-sm">Chemical reactions and separation processes</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Factory className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Industrial Scale</h3>
                <p className="text-slate-400 text-sm">Large-scale manufacturing and production</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Droplets className="h-6 w-6 text-cyan-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Fluid Systems</h3>
                <p className="text-slate-400 text-sm">Heat and mass transfer operations</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Lightbulb className="h-6 w-6 text-orange-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Innovation</h3>
                <p className="text-slate-400 text-sm">New materials and sustainable processes</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Core Principles</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Chemical Reaction Engineering</h3>
                <p className="text-slate-300">
                  Design of reactors where chemical transformations occur. This involves understanding 
                  reaction kinetics, thermodynamics, and how to optimize conditions for maximum yield 
                  and selectivity while ensuring safety.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Separation Processes</h3>
                <p className="text-slate-300">
                  Techniques to purify and separate chemical mixtures, including distillation, extraction, 
                  crystallization, and membrane processes. These operations are essential for producing 
                  high-purity products.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Process Control and Optimization</h3>
                <p className="text-slate-300">
                  Using advanced control systems and mathematical modeling to optimize plant operations, 
                  improve efficiency, reduce waste, and ensure consistent product quality while maintaining safety.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">Materials and Nanotechnology</h3>
                <p className="text-slate-300">
                  Development of new materials with specific properties, including polymers, composites, 
                  and nanomaterials. This involves understanding structure-property relationships at the molecular level.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Industry Applications</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Chemical engineers work across diverse industries: petroleum refining, pharmaceuticals, 
              food processing, environmental remediation, and renewable energy. They design processes 
              that convert crude oil into gasoline, develop life-saving drugs, and create sustainable materials.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Modern chemical engineering increasingly focuses on sustainability, green chemistry, and 
              biotechnology. Engineers are developing processes that use renewable feedstocks, minimize 
              waste, and create biodegradable materials to address environmental challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChemicalEngineeringPage;