import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Atom, Layers, Zap, Microscope } from 'lucide-react';

const MaterialsEngineeringPage = () => {
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
            <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-3 rounded-xl mr-4">
              <Atom className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Materials Engineering</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Materials engineering focuses on developing and optimizing materials with specific properties 
              for various applications. This field combines physics, chemistry, and engineering to create 
              materials that enable technological advancement across all industries.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Layers className="h-6 w-6 text-violet-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Composites</h3>
                <p className="text-slate-400 text-sm">Advanced multi-material systems</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Atom className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Metallurgy</h3>
                <p className="text-slate-400 text-sm">Metal alloys and processing</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Zap className="h-6 w-6 text-yellow-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Electronic Materials</h3>
                <p className="text-slate-400 text-sm">Semiconductors and conductors</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Microscope className="h-6 w-6 text-green-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Nanomaterials</h3>
                <p className="text-slate-400 text-sm">Atomic-scale engineering</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Evolution of Materials Engineering</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Stone, Bronze, and Iron Ages (Prehistory-500 AD)</h3>
                <p className="text-slate-300">
                  Human civilization progressed through materials: stone tools, bronze alloys (copper + tin), 
                  and iron smelting. Each material revolution enabled new technologies and shaped society. 
                  Damascus steel and Roman concrete showed early materials engineering principles.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Industrial Materials Revolution (1800s-1900s)</h3>
                <p className="text-slate-300">
                  Steel production methods (Bessemer process), aluminum extraction, and the first synthetic 
                  plastics (Bakelite, 1907) emerged. Portland cement enabled modern construction. The periodic 
                  table helped scientists understand material properties systematically.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Polymer and Aerospace Era (1930s-1970s)</h3>
                <p className="text-slate-300">
                  World War II drove development of synthetic rubber, nylon, and fiberglass. The space race 
                  created superalloys for jet engines and heat shields. Semiconductors like silicon enabled 
                  the electronics revolution. Composite materials combined strength with light weight.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">Nanotechnology Era (1980s-Present)</h3>
                <p className="text-slate-300">
                  Scanning tunneling microscopy enabled atomic-scale manipulation. Carbon nanotubes, graphene, 
                  and quantum dots showed unique properties. Smart materials, biomaterials, and sustainable 
                  materials address modern challenges. AI now accelerates materials discovery.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Material Categories</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Metals and Alloys</h3>
                <p className="text-slate-300">
                  Development of metal alloys with specific properties like strength, corrosion resistance, 
                  and temperature tolerance. This includes steel, aluminum, titanium, and superalloys used 
                  in aerospace and high-temperature applications.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Polymers and Plastics</h3>
                <p className="text-slate-300">
                  Creating synthetic materials with tailored properties for specific applications. This includes 
                  biodegradable plastics, high-performance polymers for aerospace, and smart materials that 
                  respond to environmental changes.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Ceramics and Composites</h3>
                <p className="text-slate-300">
                  Advanced ceramics for high-temperature applications and composite materials that combine 
                  different materials to achieve superior properties. Used in everything from spacecraft 
                  heat shields to lightweight automotive components.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">Nanomaterials and Smart Materials</h3>
                <p className="text-slate-300">
                  Materials engineered at the nanoscale with unique properties, and smart materials that 
                  can change their properties in response to stimuli. Applications include drug delivery, 
                  self-healing materials, and shape-memory alloys.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Future Directions</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Materials engineering is advancing rapidly with computational materials science, machine learning 
              for materials discovery, and sustainable materials development. New frontiers include 2D materials 
              like graphene, biomaterials, and materials for quantum computing.
            </p>

            <p className="text-slate-300 leading-relaxed">
              The field continues to drive innovation across industries, from developing lighter and stronger 
              materials for transportation to creating new materials for renewable energy systems and 
              next-generation electronics. Materials engineering is fundamental to technological progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialsEngineeringPage;