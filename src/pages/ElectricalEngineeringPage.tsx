import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Battery, Cpu, Lightbulb } from 'lucide-react';

const ElectricalEngineeringPage = () => {
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
            <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-3 rounded-xl mr-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Electrical Engineering</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Electrical engineering harnesses the power of electricity and electromagnetism to create systems 
              that power our modern world. From Edison's light bulb to today's smart grids and quantum computers, 
              this field has revolutionized how we live, work, and communicate.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Zap className="h-6 w-6 text-yellow-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Power Systems</h3>
                <p className="text-slate-400 text-sm">Generation, transmission, and distribution of electricity</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Cpu className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Electronics</h3>
                <p className="text-slate-400 text-sm">Circuits, semiconductors, and digital systems</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Battery className="h-6 w-6 text-green-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Energy Storage</h3>
                <p className="text-slate-400 text-sm">Batteries, capacitors, and renewable energy</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Lightbulb className="h-6 w-6 text-orange-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Innovation</h3>
                <p className="text-slate-400 text-sm">From Edison's lab to modern tech giants</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Historical Foundations</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Edison vs Tesla - The War of Currents</h3>
                <p className="text-slate-300">
                  The famous rivalry between Thomas Edison (DC) and Nikola Tesla (AC) shaped the electrical 
                  infrastructure we use today. Tesla's alternating current ultimately won due to its efficiency 
                  in long-distance transmission, forming the basis of modern power grids.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">The Birth of Electronics</h3>
                <p className="text-slate-300">
                  The invention of the vacuum tube, transistor, and integrated circuit revolutionized electronics. 
                  These breakthroughs enabled everything from radio and television to modern computers and smartphones.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Power Generation and Distribution</h3>
                <p className="text-slate-300">
                  From steam-powered generators to nuclear plants and renewable energy, electrical engineers 
                  have continuously improved how we generate and distribute electricity to power civilization.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">Digital Revolution</h3>
                <p className="text-slate-300">
                  The development of digital systems, microprocessors, and computer networks has transformed 
                  every aspect of modern life, from communication and entertainment to transportation and healthcare.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Modern Applications</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Today's electrical engineers work on cutting-edge technologies: smart grids that optimize energy 
              distribution, electric vehicle charging infrastructure, renewable energy systems, and the Internet 
              of Things (IoT) that connects billions of devices worldwide.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Emerging fields include quantum computing, artificial intelligence hardware, and sustainable 
              energy technologies. Electrical engineering continues to be at the forefront of technological 
              innovation, shaping the future of human civilization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricalEngineeringPage;