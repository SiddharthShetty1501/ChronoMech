import React from 'react';
import { Link } from 'react-router-dom';
import { Cog, Wrench, Zap, Car, Plane, Bot, ArrowRight, User, BookOpen, Target, Train } from 'lucide-react';

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
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 break-words">
              Through Time
            </span>
          </h1>
          
          <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
            <blockquote className="text-lg italic text-slate-300 text-center leading-relaxed">
              "The engineer has been, and is, a maker of history."
            </blockquote>
            <cite className="block text-cyan-400 text-center mt-3 font-medium">
              — James Kip Finch, Engineering Historian
            </cite>
          </div>
          
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

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
              <div className="lg:col-span-3 space-y-6 pr-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-xl text-slate-300 leading-relaxed mb-6">
                    Welcome to ChronoMech! I'm Siddharth Shetty, passionate about mechanical engineering 
                    and the incredible innovations that have shaped our world.
                  </p>
                  
                  <p className="text-lg text-slate-300 leading-relaxed mb-4">
                    Currently in school pursuing high-level physics, mathematics, and history, 
                    I created ChronoMech to explore the fascinating stories behind humanity's 
                    greatest technical achievements.
                  </p>

                  <p className="text-lg text-slate-300 leading-relaxed">
                    My mission is to make the world filled with engineers of different types 
                    who recognize it is important to look in the past to build a better future.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-1 flex items-start justify-center">
                <div className="bg-slate-700/30 p-6 rounded-2xl border border-slate-600/30">
                  <img 
                    src="/a3f12681-ce95-435f-9a9a-5ab652395061 copy.JPG" 
                    alt="Siddharth Shetty" 
                    className="w-40 h-40 object-cover rounded-xl border-2 border-cyan-500/30"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-slate-700/30 p-4 rounded-lg">
                    <BookOpen className="h-6 w-6 text-cyan-400 mb-2" />
                    <h3 className="text-white font-semibold mb-2">Current Focus</h3>
                    <p className="text-slate-400 text-sm">In school pursuing high-level physics, math, and history</p>
                  </div>
                  <div className="bg-slate-700/30 p-4 rounded-lg">
                    <Target className="h-6 w-6 text-blue-400 mb-2" />
                    <h3 className="text-white font-semibold mb-2">Future Goals</h3>
                    <p className="text-slate-400 text-sm">To pursue mech eng</p>
                  </div>

                  <div className="bg-slate-700/30 p-4 rounded-lg">
                    <Cog className="h-6 w-6 text-green-400 mb-2" />
                    <h3 className="text-white font-semibold mb-2">Interests</h3>
                    <p className="text-slate-400 text-sm">Remedial teaching and understanding mechanical innovation</p>
                  </div>
                  <div className="bg-slate-700/30 p-4 rounded-lg">
                    <Zap className="h-6 w-6 text-purple-400 mb-2" />
                    <h3 className="text-white font-semibold mb-2">Mission</h3>
                    <p className="text-slate-400 text-sm">Making the world filled with engineers of different types who recognize it is important to look in the past to build a better future</p>
                  </div>
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
                    <p className="text-slate-400 text-sm">The first practical steam engine used atmospheric pressure to pump water from mines. This breakthrough solved the flooding problem that limited deep mining operations and laid the foundation for the Industrial Revolution.</p>
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
                    <p className="text-slate-300 mb-2">James Watt's separate condenser innovation</p>
                    <p className="text-slate-400 text-sm">Watt's separate condenser reduced fuel consumption by 75%, making steam engines economically viable for powering factories. This innovation sparked the Industrial Revolution and transformed manufacturing forever.</p>
                  </div>
                </div>
              </div>

              {/* 1804 - Steam Locomotive */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">1804 - Steam Locomotive</h3>
                    <p className="text-slate-300 mb-2">Richard Trevithick's railway engine</p>
                    <p className="text-slate-400 text-sm">The first steam locomotive to run on rails, carrying 10 tons of iron and 70 passengers at 5 mph. This proved that steam power could move heavy loads over land, revolutionizing transportation and commerce.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center border-4 border-slate-900">
                  <Train className="h-8 w-8 text-white" />
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
                    <p className="text-slate-400 text-sm">The first true automobile with an internal combustion engine designed specifically for automotive use. This three-wheeled vehicle could reach 10 mph and established the foundation for the modern automotive industry.</p>
                  </div>
                </div>
              </div>

              {/* 1903 - Airplane */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">1903 - First Flight</h3>
                    <p className="text-slate-300 mb-2">Wright Brothers' powered flight</p>
                    <p className="text-slate-400 text-sm">The first powered, sustained, and controlled heavier-than-air human flight lasted 12 seconds and covered 120 feet. This breakthrough solved the problems of lift, propulsion, and control, launching the age of aviation.</p>
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
                    <p className="text-slate-400 text-sm">The first programmable industrial robot could be taught to perform repetitive tasks with precision. Installed at General Motors in 1961, it revolutionized manufacturing and introduced the concept of flexible automation.</p>
                  </div>
                </div>
              </div>

              {/* 2008 - Electric Vehicles */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">2008 - Tesla Roadster</h3>
                    <p className="text-slate-300 mb-2">Modern electric vehicle revolution</p>
                    <p className="text-slate-400 text-sm">The first highway-capable electric vehicle with lithium-ion batteries achieved 245-mile range and 0-60 mph in 3.7 seconds. This proved electric vehicles could match gasoline performance, sparking the modern EV revolution and sustainable transportation movement.</p>
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

  )
}