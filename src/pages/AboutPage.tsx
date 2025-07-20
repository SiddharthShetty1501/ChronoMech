import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Wrench, BookOpen, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen pt-8 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl mr-4">
              <User className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">About Me</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-slate-300 leading-relaxed">
                  Welcome to ChronoMech! I'm passionate about engineering and the incredible 
                  innovations that have shaped our world throughout history.
                </p>
                
                <p className="text-slate-300 leading-relaxed">
                  As a student with dreams of pursuing mechanical engineering in the future, 
                  I created this website to explore and share the fascinating stories behind 
                  humanity's greatest technical achievements.
                </p>

                <p className="text-slate-300 leading-relaxed">
                  From the steam engines that powered the Industrial Revolution to the 
                  cutting-edge robotics of today, engineering has always been about solving 
                  problems and pushing the boundaries of what's possible.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-700/30 p-4 rounded-lg">
                  <BookOpen className="h-6 w-6 text-cyan-400 mb-2" />
                  <h3 className="text-white font-semibold mb-2">Current Focus</h3>
                  <p className="text-slate-400 text-sm">Student exploring engineering disciplines</p>
                </div>
                <div className="bg-slate-700/30 p-4 rounded-lg">
                  <Target className="h-6 w-6 text-blue-400 mb-2" />
                  <h3 className="text-white font-semibold mb-2">Future Goals</h3>
                  <p className="text-slate-400 text-sm">Pursuing mechanical engineering</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-slate-700/30 p-6 rounded-2xl border border-slate-600/30">
                <img 
                  src="/a3f12681-ce95-435f-9a9a-5ab652395061.JPG" 
                  alt="Profile" 
                  className="w-64 h-64 object-cover rounded-xl border-2 border-cyan-500/30"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Why ChronoMech?</h2>
            <p className="text-slate-300 leading-relaxed">
              The name "ChronoMech" combines "Chronos" (time) and "Mechanical" - representing 
              the journey through time to explore mechanical engineering innovations. This website 
              is my way of documenting and sharing the incredible evolution of engineering that 
              continues to inspire my academic and career aspirations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;