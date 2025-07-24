import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Factory, BarChart3, Users, Cog } from 'lucide-react';

const IndustrialEngineeringPage = () => {
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
            <div className="bg-gradient-to-r from-teal-500 to-green-600 p-3 rounded-xl mr-4">
              <Factory className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Industrial Engineering</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Industrial engineering optimizes complex systems involving people, materials, information, 
              equipment, and energy. This field focuses on improving efficiency, quality, and productivity 
              across manufacturing, service, and healthcare industries.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Factory className="h-6 w-6 text-teal-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Process Optimization</h3>
                <p className="text-slate-400 text-sm">Improving efficiency and reducing waste</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <BarChart3 className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Quality Control</h3>
                <p className="text-slate-400 text-sm">Statistical analysis and quality systems</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Users className="h-6 w-6 text-purple-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Human Factors</h3>
                <p className="text-slate-400 text-sm">Ergonomics and workplace design</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Cog className="h-6 w-6 text-orange-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Systems Integration</h3>
                <p className="text-slate-400 text-sm">Coordinating complex operations</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Evolution of Industrial Engineering</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Scientific Management Era (1880-1920)</h3>
                <p className="text-slate-300">
                  Frederick Taylor pioneered scientific management, studying work methods to improve efficiency. 
                  Frank and Lillian Gilbreth developed time and motion studies. Henry Ford's assembly line 
                  revolutionized mass production and established industrial engineering principles.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Operations Research Era (1940-1970)</h3>
                <p className="text-slate-300">
                  World War II drove development of operations research, using mathematical models to optimize 
                  military logistics. Post-war, these techniques were applied to manufacturing, leading to 
                  linear programming, queuing theory, and statistical quality control.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Quality Revolution (1970-1990)</h3>
                <p className="text-slate-300">
                  Japanese manufacturers like Toyota developed lean manufacturing and total quality management. 
                  W. Edwards Deming's quality principles and Six Sigma methodology transformed manufacturing 
                  by focusing on continuous improvement and defect reduction.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">Digital Era (1990-Present)</h3>
                <p className="text-slate-300">
                  Computer simulation, ERP systems, and data analytics revolutionized industrial engineering. 
                  Industry 4.0 brings IoT, AI, and digital twins to manufacturing. Modern focus includes 
                  sustainable operations, global supply chains, and human-robot collaboration.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Core Methodologies</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Lean Manufacturing</h3>
                <p className="text-slate-300">
                  Systematic approach to eliminating waste and improving flow in manufacturing processes. 
                  Lean principles focus on value creation, continuous improvement, and respect for people 
                  to achieve operational excellence.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Six Sigma Quality</h3>
                <p className="text-slate-300">
                  Data-driven methodology for reducing defects and improving quality. Uses statistical 
                  tools and structured problem-solving approaches to achieve near-perfect quality levels 
                  and customer satisfaction.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Operations Research</h3>
                <p className="text-slate-300">
                  Mathematical and analytical methods for decision-making in complex systems. Includes 
                  optimization, simulation, queuing theory, and other quantitative techniques to solve 
                  operational problems.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">Supply Chain Management</h3>
                <p className="text-slate-300">
                  Coordination of materials, information, and financial flows across the entire supply 
                  network. Focuses on reducing costs, improving service levels, and building resilient 
                  supply chains.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Modern Applications</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Industrial engineers work across diverse sectors: manufacturing automation, healthcare 
              process improvement, logistics optimization, and service industry efficiency. They use 
              data analytics, simulation, and digital tools to solve complex operational challenges.
            </p>

            <p className="text-slate-300 leading-relaxed">
              The field continues to evolve with Industry 4.0 technologies, including IoT sensors, 
              artificial intelligence, and digital twins. Industrial engineers are at the forefront 
              of creating smart factories and optimizing human-machine collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialEngineeringPage;