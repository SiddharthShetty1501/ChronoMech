import React from 'react';
import { Link } from 'react-router-dom';
import { Cog, Wrench, Zap, Car, Plane, Bot, ArrowRight, User, BookOpen, Target } from 'lucide-react';

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

      {/* About Me Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl mr-4">
                <User className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white">About Me</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-xl text-slate-300 leading-relaxed mb-6">
                    Welcome to ChronoMech! I'm Siddharth Shetty, passionate about engineering and the incredible 
                    innovations that have shaped our world throughout history.
                  </p>
                  
                  <p className="text-lg text-slate-300 leading-relaxed mb-4">
                    As a student with dreams of pursuing mechanical engineering in the future, 
                    I created this website to explore and share the fascinating stories behind 
                    humanity's greatest technical achievements.
                  </p>

                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    From the steam engines that powered the Industrial Revolution to the 
                    cutting-edge robotics of today, engineering has always been about solving 
                    problems and pushing the boundaries of what's possible.
                  </p>
                  
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Through ChronoMech, I aim to inspire others to appreciate the ingenuity 
                    and creativity that drives engineering innovation. Each article represents 
                    hours of research into the fascinating stories behind the machines and 
                    structures that define our modern world.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="bg-slate-700/30 p-6 rounded-2xl border border-slate-600/30">
                  <img 
                    src="/a3f12681-ce95-435f-9a9a-5ab652395061 copy.JPG" 
                    alt="Siddharth Shetty" 
                    className="w-64 h-64 object-cover rounded-xl border-2 border-cyan-500/30"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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

                  <div className="bg-slate-700/30 p-4 rounded-lg">
                    <Cog className="h-6 w-6 text-green-400 mb-2" />
                    <h3 className="text-white font-semibold mb-2">Interests</h3>
                    <p className="text-slate-400 text-sm">Mechanical systems & innovation</p>
                  </div>
                  <div className="bg-slate-700/30 p-4 rounded-lg">
                    <Zap className="h-6 w-6 text-purple-400 mb-2" />
                    <h3 className="text-white font-semibold mb-2">Mission</h3>
                    <p className="text-slate-400 text-sm">Sharing engineering history</p>
                  </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">Why ChronoMech?</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                The name "ChronoMech" combines "Chronos" (time) and "Mechanical" - representing 
                the journey through time to explore mechanical engineering innovations. This website 
                is my way of documenting and sharing the incredible evolution of engineering that 
                continues to inspire my academic and career aspirations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;