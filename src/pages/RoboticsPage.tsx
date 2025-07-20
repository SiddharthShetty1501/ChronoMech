import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, Cpu, Wrench, Brain } from 'lucide-react';

const RoboticsPage = () => {
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
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-xl mr-4">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Robotics History</h1>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              From ancient automatons to modern AI-powered machines, robotics represents humanity's 
              quest to create mechanical beings that can work alongside us. This field combines 
              mechanical engineering, computer science, and artificial intelligence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Wrench className="h-6 w-6 text-purple-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Mechanical Systems</h3>
                <p className="text-slate-400 text-sm">Actuators, sensors, and precision mechanics</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Cpu className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Control Systems</h3>
                <p className="text-slate-400 text-sm">Programming and automated decision-making</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Brain className="h-6 w-6 text-pink-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Artificial Intelligence</h3>
                <p className="text-slate-400 text-sm">Machine learning and autonomous behavior</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Evolution of Robotics</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">Ancient Automatons</h3>
                <p className="text-slate-300">
                  Greek and Islamic engineers created mechanical devices that performed automated tasks. 
                  Hero of Alexandria's steam-powered toys and Al-Jazari's programmable musical automata 
                  demonstrated early principles of mechanical automation.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">1954 - First Industrial Robot</h3>
                <p className="text-slate-300">
                  George Devol invented the first programmable industrial robot, Unimate. 
                  This hydraulic arm could be programmed to perform repetitive tasks, revolutionizing 
                  manufacturing and introducing the concept of flexible automation.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">1970s - Computer Control</h3>
                <p className="text-slate-300">
                  The integration of computer control systems enabled robots to perform more complex tasks. 
                  Stanford's robot arm and mobile robots demonstrated how computers could provide 
                  sophisticated control and decision-making capabilities.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-green-300 mb-2">2000s - AI Integration</h3>
                <p className="text-slate-300">
                  Modern robots integrate artificial intelligence, enabling them to learn, adapt, and 
                  work safely alongside humans. From autonomous vehicles to collaborative industrial robots, 
                  AI has transformed robotics from programmed automation to intelligent assistance.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Modern Applications</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Today's robots work in factories, hospitals, homes, and even on other planets. 
              They perform surgery with superhuman precision, explore dangerous environments, 
              and assist elderly people with daily tasks. Each application requires unique 
              engineering solutions for specific challenges.
            </p>

            <p className="text-slate-300 leading-relaxed">
              The future of robotics promises even greater integration with human society. 
              Advances in materials science, AI, and human-robot interaction are creating 
              machines that are more capable, safer, and more intuitive to work with than ever before.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboticsPage;