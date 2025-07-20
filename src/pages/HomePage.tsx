import React from 'react';
import { Link } from 'react-router-dom';
import { Cog, Wrench, Zap, Car, Plane, Bot, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const articles = [
    {
      title: 'Steam Engines',
      description: 'The revolutionary machines that powered the Industrial Revolution',
      icon: Cog,
      path: '/steam-engines',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Engineering Bridges',
      description: 'Architectural marvels that connect civilizations',
      icon: Wrench,
      path: '/bridges',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Aerospace Engineering',
      description: 'From Wright brothers to space exploration',
      icon: Plane,
      path: '/aerospace',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Automobile Evolution',
      description: 'The transformation of personal transportation',
      icon: Car,
      path: '/automobiles',
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Robotics History',
      description: 'The journey from automatons to AI',
      icon: Bot,
      path: '/robotics',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Zap className="h-20 w-20 text-cyan-400 animate-pulse" />
              <div className="absolute inset-0 h-20 w-20 text-cyan-400 animate-ping opacity-20">
                <Zap className="h-20 w-20" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Engineering
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Through Time
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Explore the fascinating history of mechanical engineering innovations that shaped our world. 
            From steam-powered machines to modern robotics, discover the stories behind humanity's greatest technical achievements.
          </p>
          
          <div className="flex justify-center">
            <Link 
              to="/articles"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 p-1 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <div className="bg-slate-900 rounded-full px-8 py-3 group-hover:bg-slate-800 transition-colors">
                <span className="text-cyan-300 font-medium group-hover:text-white flex items-center">
                  Explore Engineering Articles
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Explore Engineering Disciplines
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => {
              const Icon = article.icon;
              return (
                <Link
                  key={article.path}
                  to={article.path}
                  className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${article.color} mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {article.description}
                  </p>
                  
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 text-cyan-400/20 animate-bounce">
        <Cog className="h-8 w-8" />
      </div>
      <div className="absolute top-1/3 right-10 text-blue-400/20 animate-pulse">
        <Wrench className="h-6 w-6" />
      </div>
    </div>
  );
};

export default HomePage;