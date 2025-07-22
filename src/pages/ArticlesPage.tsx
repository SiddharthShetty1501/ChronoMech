import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cog, Wrench, Plane, Car, Bot, ArrowRight, Rocket } from 'lucide-react';

const ArticlesPage = () => {
  const articles = [
    {
      title: 'Steam Engines',
      description: 'The revolutionary machines that powered the Industrial Revolution and transformed manufacturing forever',
      icon: Cog,
      path: '/steam-engines',
      color: 'from-orange-500 to-red-600',
      topics: ['Industrial Revolution', 'James Watt', 'Steam Power', 'Manufacturing']
    },
    {
      title: 'Engineering Bridges',
      description: 'Architectural marvels that connect civilizations and showcase structural engineering mastery',
      icon: Wrench,
      path: '/bridges',
      color: 'from-blue-500 to-purple-600',
      topics: ['Structural Engineering', 'Architecture', 'Civil Engineering', 'Materials']
    },
    {
      title: 'Aerospace Engineering',
      description: 'From Wright brothers\' first flight to space exploration and modern aviation',
      icon: Plane,
      path: '/aerospace',
      color: 'from-cyan-500 to-blue-600',
      topics: ['Aviation History', 'Space Exploration', 'Aerodynamics', 'Propulsion']
    },
    {
      title: 'Automobile Evolution',
      description: 'The transformation of personal transportation from horse carriages to electric vehicles',
      icon: Car,
      path: '/automobiles',
      color: 'from-green-500 to-teal-600',
      topics: ['Automotive History', 'Mass Production', 'Electric Vehicles', 'Transportation']
    },
    {
      title: 'Robotics History',
      description: 'The fascinating journey from ancient automatons to modern AI-powered machines',
      icon: Bot,
      path: '/robotics',
      color: 'from-purple-500 to-pink-600',
      topics: ['Automation', 'Artificial Intelligence', 'Industrial Robots', 'Future Tech']
    },
    {
      title: 'Future of Flying',
      description: 'Exploring the next generation of aviation technology and space travel',
      icon: Rocket,
      path: '/future-of-flying',
      color: 'from-orange-500 to-red-600',
      topics: ['Electric Aviation', 'Urban Air Mobility', 'Supersonic Flight', 'Space Tourism']
    }
  ];

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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Engineering
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Articles
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Dive deep into the fascinating world of engineering history. Each article explores 
            the innovations, pioneers, and breakthroughs that shaped our modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.map((article, index) => {
            const Icon = article.icon;
            return (
              <Link
                key={article.path}
                to={article.path}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-r ${article.color}`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-slate-400 mb-4 leading-relaxed">
                      {article.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.topics.map((topic) => (
                        <span 
                          key={topic}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/30"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="font-medium">Read Article</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;