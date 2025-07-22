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

      {/* About Me Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-12">
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

      {/* Engineering Timeline */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Timeline of Mechanical Engineering
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Innovations
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Journey through the greatest mechanical engineering breakthroughs that shaped our world
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
            
            <div className="space-y-12">
              {/* 1712 - Steam Engine */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">1712 - Steam Engine</h3>
                    <p className="text-slate-300 mb-2">Thomas Newcomen's atmospheric engine</p>
                    <p className="text-slate-400 text-sm">Revolutionized mining and manufacturing</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center border-4 border-slate-900">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 1769 - Improved Steam Engine */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center border-4 border-slate-900">
                  <Cog className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 pl-8">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">1769 - Watt Steam Engine</h3>
                    <p className="text-slate-300 mb-2">James Watt's separate condenser</p>
                    <p className="text-slate-400 text-sm">Dramatically improved efficiency</p>
                  </div>
                </div>
              </div>

              {/* 1804 - Steam Locomotive */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">1804 - Steam Locomotive</h3>
                    <p className="text-slate-300 mb-2">Richard Trevithick's railway engine</p>
                    <p className="text-slate-400 text-sm">Birth of railway transportation</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center border-4 border-slate-900">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 1885 - Automobile */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center border-4 border-slate-900">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 pl-8">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">1885 - First Automobile</h3>
                    <p className="text-slate-300 mb-2">Karl Benz's Patent-Motorwagen</p>
                    <p className="text-slate-400 text-sm">First true gasoline-powered car</p>
                  </div>
                </div>
              </div>

              {/* 1903 - Airplane */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">1903 - First Flight</h3>
                    <p className="text-slate-300 mb-2">Wright Brothers' powered flight</p>
                    <p className="text-slate-400 text-sm">Conquered the skies</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center border-4 border-slate-900">
                  <Plane className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 1954 - Industrial Robot */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center border-4 border-slate-900">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 pl-8">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">1954 - First Industrial Robot</h3>
                    <p className="text-slate-300 mb-2">George Devol's Unimate</p>
                    <p className="text-slate-400 text-sm">Automated manufacturing begins</p>
                  </div>
                </div>
              </div>

              {/* 2008 - Electric Vehicles */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">2008 - Tesla Roadster</h3>
                    <p className="text-slate-300 mb-2">Modern electric vehicle revolution</p>
                    <p className="text-slate-400 text-sm">Sustainable transportation future</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full flex items-center justify-center border-4 border-slate-900">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;