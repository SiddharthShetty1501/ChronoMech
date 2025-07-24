import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Atom, Zap, Shield, Thermometer } from 'lucide-react';

const NuclearEngineeringPage = () => {
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
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-xl mr-4">
              <Atom className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Nuclear Engineering</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Nuclear engineering harnesses the power of atomic nuclei for peaceful purposes, from generating 
              clean electricity to medical treatments and space exploration. This field combines physics, 
              materials science, and engineering to safely utilize nuclear reactions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Atom className="h-6 w-6 text-green-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Nuclear Physics</h3>
                <p className="text-slate-400 text-sm">Understanding atomic structure and reactions</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Zap className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Power Generation</h3>
                <p className="text-slate-400 text-sm">Nuclear reactors and clean energy</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Shield className="h-6 w-6 text-red-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Radiation Safety</h3>
                <p className="text-slate-400 text-sm">Protection and containment systems</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Thermometer className="h-6 w-6 text-orange-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Thermal Systems</h3>
                <p className="text-slate-400 text-sm">Heat transfer and cooling systems</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Core Applications</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Nuclear Power Plants</h3>
                <p className="text-slate-300">
                  Design and operation of nuclear reactors for electricity generation. Modern reactors use 
                  controlled nuclear fission to produce heat, which generates steam to drive turbines and 
                  produce clean, carbon-free electricity.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Medical Applications</h3>
                <p className="text-slate-300">
                  Nuclear medicine uses radioactive isotopes for diagnosis and treatment. This includes 
                  medical imaging techniques like PET scans and targeted radiation therapy for cancer treatment.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Space Nuclear Systems</h3>
                <p className="text-slate-300">
                  Nuclear power enables deep space missions where solar panels are ineffective. Radioisotope 
                  thermoelectric generators (RTGs) have powered missions to Mars, Jupiter, and beyond.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">Nuclear Security and Nonproliferation</h3>
                <p className="text-slate-300">
                  Ensuring nuclear materials are used safely and peacefully. This includes safeguards, 
                  detection systems, and international cooperation to prevent nuclear weapons proliferation.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Future Technologies</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Next-generation nuclear technologies include small modular reactors (SMRs) that are safer and 
              more flexible, fusion power that could provide unlimited clean energy, and advanced materials 
              that can withstand extreme radiation environments.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Nuclear engineering continues to evolve with applications in quantum computing, advanced 
              manufacturing, and space exploration. The field plays a crucial role in addressing climate 
              change through clean energy generation and advancing medical treatments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuclearEngineeringPage;