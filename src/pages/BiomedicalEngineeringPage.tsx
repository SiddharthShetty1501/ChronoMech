import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Microscope, Heart, Brain, Zap } from 'lucide-react';

const BiomedicalEngineeringPage = () => {
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
            <div className="bg-gradient-to-r from-red-500 to-pink-600 p-3 rounded-xl mr-4">
              <Microscope className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Biomedical Engineering</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Biomedical engineering applies engineering principles to healthcare and medicine, creating 
              technologies that improve human health and quality of life. This interdisciplinary field 
              combines engineering, biology, and medicine to solve medical challenges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Microscope className="h-6 w-6 text-red-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Medical Devices</h3>
                <p className="text-slate-400 text-sm">Diagnostic and therapeutic equipment</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Heart className="h-6 w-6 text-pink-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Prosthetics</h3>
                <p className="text-slate-400 text-sm">Artificial limbs and implants</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Brain className="h-6 w-6 text-purple-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Neural Engineering</h3>
                <p className="text-slate-400 text-sm">Brain-computer interfaces</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Zap className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Medical Imaging</h3>
                <p className="text-slate-400 text-sm">MRI, CT, and ultrasound systems</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Core Applications</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Medical Device Development</h3>
                <p className="text-slate-300">
                  Design and development of medical devices from pacemakers to surgical robots. This involves 
                  understanding human physiology, materials biocompatibility, and regulatory requirements 
                  for medical products.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Tissue Engineering and Regenerative Medicine</h3>
                <p className="text-slate-300">
                  Creating artificial tissues and organs using engineering principles and biological materials. 
                  This includes developing scaffolds, bioreactors, and cell culture systems to grow replacement 
                  tissues for transplantation.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Medical Imaging and Diagnostics</h3>
                <p className="text-slate-300">
                  Development of imaging technologies like MRI, CT scanners, and ultrasound systems. 
                  Also includes biosensors and diagnostic devices that can detect diseases at early stages 
                  through blood tests or other biological samples.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">Rehabilitation Engineering</h3>
                <p className="text-slate-300">
                  Creating assistive technologies and prosthetics to help people with disabilities. 
                  This includes advanced prosthetic limbs controlled by neural signals, mobility aids, 
                  and adaptive technologies for daily living.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Emerging Technologies</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Modern biomedical engineering incorporates artificial intelligence for medical diagnosis, 
              nanotechnology for targeted drug delivery, and 3D printing for custom prosthetics and 
              surgical planning. Gene therapy and personalized medicine are opening new frontiers.
            </p>

            <p className="text-slate-300 leading-relaxed">
              The field continues to evolve with brain-computer interfaces, robotic surgery systems, 
              and wearable health monitors. Biomedical engineers are at the forefront of developing 
              technologies that will transform healthcare and extend human capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiomedicalEngineeringPage;