import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, HardDrive, Wifi, Brain } from 'lucide-react';

const ComputerEngineeringPage = () => {
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
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-xl mr-4">
              <Cpu className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Computer Engineering</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Computer engineering bridges electrical engineering and computer science, focusing on the design 
              and development of computer systems and their components. From mechanical calculators to quantum 
              computers, this field has driven the digital revolution that defines our modern era.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Cpu className="h-6 w-6 text-indigo-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Microprocessors</h3>
                <p className="text-slate-400 text-sm">The brains of modern computing devices</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <HardDrive className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Computer Architecture</h3>
                <p className="text-slate-400 text-sm">System design and hardware organization</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Wifi className="h-6 w-6 text-green-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Networks</h3>
                <p className="text-slate-400 text-sm">Connecting computers and enabling communication</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Brain className="h-6 w-6 text-purple-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">AI Hardware</h3>
                <p className="text-slate-400 text-sm">Specialized processors for machine learning</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Evolution of Computing</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Mechanical Calculators to Electronic Computers</h3>
                <p className="text-slate-300">
                  From Charles Babbage's Analytical Engine to ENIAC, the first general-purpose electronic computer, 
                  the evolution from mechanical to electronic computation laid the foundation for the digital age.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">The Transistor Revolution</h3>
                <p className="text-slate-300">
                  The invention of the transistor in 1947 replaced vacuum tubes, enabling smaller, faster, and 
                  more reliable computers. This breakthrough made personal computers and mobile devices possible.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Integrated Circuits and Microprocessors</h3>
                <p className="text-slate-300">
                  The development of integrated circuits and the first microprocessor (Intel 4004) in 1971 
                  revolutionized computing, enabling the personal computer revolution and modern embedded systems.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">Internet and Networking</h3>
                <p className="text-slate-300">
                  The development of networking protocols, the Internet, and wireless communication transformed 
                  isolated computers into a globally connected network, enabling the information age.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Modern Frontiers</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Today's computer engineers work on cutting-edge technologies: quantum computers that could solve 
              previously impossible problems, neuromorphic chips that mimic brain function, and specialized 
              processors for artificial intelligence and machine learning applications.
            </p>

            <p className="text-slate-300 leading-relaxed">
              The field continues to push the boundaries of what's possible, from developing more efficient 
              processors to creating new computing paradigms. As we approach the limits of traditional silicon 
              technology, computer engineers are exploring new materials and architectures for the next 
              generation of computing systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerEngineeringPage;