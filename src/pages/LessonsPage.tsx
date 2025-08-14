import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Play, FileText, Video } from 'lucide-react';

const LessonsPage = () => {
  return (
    <div className="relative min-h-screen pt-8 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 p-4 rounded-2xl">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Engineering</span> Lessons
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Learn engineering concepts through detailed explanations, interactive content, and video demonstrations. 
            From basic principles to advanced applications.
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-12 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-slate-700/30 p-6 rounded-xl">
                <Video className="h-8 w-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Video Lessons</h3>
                <p className="text-slate-400 text-sm">Interactive video content explaining complex engineering concepts</p>
              </div>
              <div className="bg-slate-700/30 p-6 rounded-xl">
                <FileText className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Detailed Guides</h3>
                <p className="text-slate-400 text-sm">Step-by-step explanations with diagrams and examples</p>
              </div>
              <div className="bg-slate-700/30 p-6 rounded-xl">
                <Play className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Interactive Content</h3>
                <p className="text-slate-400 text-sm">Hands-on learning experiences and simulations</p>
              </div>
            </div>

            <div className="bg-slate-700/20 border border-slate-600/30 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                This section will feature comprehensive engineering lessons covering fundamental concepts, 
                practical applications, and real-world case studies. Each lesson will include detailed 
                explanations, visual aids, and embedded video content to enhance your learning experience.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                  Thermodynamics
                </span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                  Fluid Mechanics
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                  Materials Science
                </span>
                <span className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm border border-orange-500/30">
                  Machine Design
                </span>
                <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                  Control Systems
                </span>
              </div>
            </div>

            <p className="text-slate-400">
              Check back soon for new educational content and interactive lessons!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonsPage;