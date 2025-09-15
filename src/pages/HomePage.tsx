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
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-30 delay-500"></div>
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-25 delay-1000"></div>
        <div className="absolute top-80 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-20 delay-1500"></div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Zap className="h-24 w-24 text-cyan-400 animate-pulse" />
              <div className="absolute inset-0 h-24 w-24 text-cyan-400 animate-ping opacity-20">
                <Zap className="h-24 w-24" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            <span className="text-white">Engineering </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Through Time</span>
          </h1>
          
          {/* Stats/Quick facts */}
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-cyan-400">300+</div>
                <div className="text-sm text-slate-400">Years Covered</div>
              </div>
              <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">5</div>
                <div className="text-sm text-slate-400">Articles</div>
              </div>
              <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400">∞</div>
                <div className="text-sm text-slate-400">Ingenuity</div>
              </div>
            </div>
          </div>

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

      {/* Featured Articles Preview */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Articles</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Dive deep into the engineering marvels that shaped our world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article, index) => {
              const Icon = article.icon;
              return (
                <Link
                  key={article.path}
                  to={article.path}
                  className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/40 rounded-xl p-6 hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${article.color} mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {article.description}
                  </p>
                  
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors text-sm">
                    <span className="font-medium">Read More</span>
                    <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Engineering Timeline */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Engineering Through the Ages</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Key moments that defined mechanical engineering
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/40 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">1712</div>
              <div className="text-white font-semibold mb-2">Steam Engine</div>
              <div className="text-slate-400 text-sm">Newcomen's atmospheric engine</div>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/40 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">1885</div>
              <div className="text-white font-semibold mb-2">Automobile</div>
              <div className="text-slate-400 text-sm">Benz Patent-Motorwagen</div>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/40 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">1903</div>
              <div className="text-white font-semibold mb-2">Powered Flight</div>
              <div className="text-slate-400 text-sm">Wright Brothers' first flight</div>
            </div>
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/40 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1954</div>
              <div className="text-white font-semibold mb-2">Industrial Robot</div>
              <div className="text-slate-400 text-sm">First programmable robot</div>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/40 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl mr-4">
                <User className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">About Me</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
              <div className="lg:col-span-2">
                <p className="text-lg text-slate-300 leading-relaxed mb-4">
                  Hi, I'm Siddharth Shetty — someone who's always trying to figure out why people built things the way they did. ChronoMech is my space to explore how engineering evolved through moments of intuition, experimentation, and sometimes chaos.
                </p>
                
                <p className="text-slate-300 leading-relaxed mb-4">
                  I study Physics, Math, and History at the higher level, and got hooked on connecting the logic of machines with the mindset of the people behind them. This site explores how design choices were made and how failures taught more than success ever could.
                </p>

                <p className="text-slate-300 leading-relaxed">
                  If you've ever stared at a weird old mechanism and thought, <em>wait... that's kind of genius</em> — welcome. You're in the right place!
                </p>
              </div>
              <div className="lg:col-span-1 flex items-start justify-center">
                <div className="bg-slate-700/30 p-4 rounded-xl border border-slate-600/30">
                  <img 
                    src="/a3f12681-ce95-435f-9a9a-5ab652395061 copy.JPG" 
                    alt="Siddharth Shetty" 
                    className="w-32 h-32 object-cover rounded-lg border-2 border-cyan-500/30"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-700/30 p-3 rounded-lg text-center">
                <BookOpen className="h-5 w-5 text-cyan-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold text-sm mb-1">Studies</h3>
                <p className="text-slate-400 text-xs">Physics, Math, History</p>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg text-center">
                <Target className="h-5 w-5 text-blue-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold text-sm mb-1">Passion</h3>
                <p className="text-slate-400 text-xs">Machine logic & mindset</p>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg text-center">
                <Cog className="h-5 w-5 text-green-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold text-sm mb-1">Focus</h3>
                <p className="text-slate-400 text-xs">How ideas developed</p>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg text-center">
                <Zap className="h-5 w-5 text-purple-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold text-sm mb-1">Mission</h3>
                <p className="text-slate-400 text-xs">Think deeper, build better</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;