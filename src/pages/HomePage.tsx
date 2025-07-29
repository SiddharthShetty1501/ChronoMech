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
        <div className="absolute top-20 left-10 w-3 h-3 bg-brass-400 rounded-full animate-steam opacity-30"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-copper-400 rounded-full animate-steam opacity-40 delay-500"></div>
        <div className="absolute top-60 left-1/4 w-2.5 h-2.5 bg-brass-300 rounded-full animate-steam opacity-35 delay-1000"></div>
        <div className="absolute top-80 right-1/3 w-2 h-2 bg-copper-300 rounded-full animate-steam opacity-25 delay-1500"></div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Zap className="h-28 w-28 text-brass-300 animate-pulse" />
              <div className="absolute inset-0 h-28 w-28 text-brass-400 animate-steam opacity-30">
                <Zap className="h-28 w-28" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            <span className="text-white">Engineering </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brass-300 to-copper-400 font-serif">Through Time</span>
          </h1>
          
          {/* Stats/Quick facts */}
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="bg-amber-900/30 backdrop-blur-sm border border-brass-500/30 rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-brass-300 font-serif">300+</div>
                <div className="text-sm text-amber-300 font-mono tracking-wide">YEARS COVERED</div>
              </div>
              <div className="bg-amber-900/30 backdrop-blur-sm border border-brass-500/30 rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-copper-300 font-serif">5</div>
                <div className="text-sm text-amber-300 font-mono tracking-wide">ARTICLES</div>
              </div>
              <div className="bg-amber-900/30 backdrop-blur-sm border border-brass-500/30 rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-brass-400 font-serif">∞</div>
                <div className="text-sm text-amber-300 font-mono tracking-wide">INGENUITY</div>
              </div>
            </div>
          </div>

          <div className="bg-amber-900/40 backdrop-blur-sm border border-brass-400/30 rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-2xl">
            <blockquote className="text-xl italic text-amber-100 text-center leading-relaxed font-serif">
              "The engineer has been, and is, a maker of history."
            </blockquote>
            <cite className="block text-brass-300 text-center mt-4 font-medium font-mono tracking-wide">
              — James Kip Finch, Engineering Historian
            </cite>
          </div>
          
          <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Explore the fascinating history of mechanical engineering innovations that shaped our world. 
            From steam-powered machines to modern robotics, discover the stories behind humanity's greatest technical achievements.
          </p>
          
          <div className="flex justify-center">
            <Link 
              to="/articles"
              className="group bg-gradient-to-r from-brass-500 to-copper-600 p-1 rounded-full hover:shadow-lg hover:shadow-brass-500/50 transition-all duration-300"
            >
              <div className="bg-amber-900 rounded-full px-8 py-4 group-hover:bg-amber-800 transition-colors">
                <span className="text-brass-200 font-medium group-hover:text-white flex items-center font-mono tracking-wide">
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
          <div className="bg-amber-900/50 backdrop-blur-sm border border-brass-500/40 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-brass-500 to-copper-600 p-3 rounded-xl mr-4 shadow-lg">
                <User className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white font-serif">About Me</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
              <div className="lg:col-span-3 space-y-6 pr-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-xl text-amber-100 leading-relaxed mb-6">
                    Hi, I'm Siddharth Shetty — someone who's always trying to figure out why people built things the way they did. ChronoMech is my space to explore how engineering evolved through moments of intuition, experimentation, and sometimes chaos.
                  </p>
                  
                  <p className="text-lg text-amber-100 leading-relaxed mb-4">
                    I study Physics, Math, and History at the higher level, and somewhere along the way I got hooked on connecting the logic of machines with the mindset of the people behind them. I've always found it more interesting to look at how ideas developed over time, not just what worked in the end.
                  </p>

                  <p className="text-lg text-amber-100 leading-relaxed mb-4">
                    This site isn't just about cool inventions. It's about understanding how design choices were made, how failures taught more than success ever could, and how the past is full of unfinished ideas worth revisiting.
                  </p>

                  <p className="text-lg text-amber-100 leading-relaxed">
                    If you've ever stared at a weird old mechanism and thought, <em>wait... that's kind of genius</em> — welcome. You're in the right place!
                  </p>
                </div>
              </div>
              <div className="lg:col-span-1 flex items-start justify-center">
                <div className="bg-amber-800/30 p-6 rounded-2xl border border-brass-500/30 shadow-lg">
                  <img 
                    src="/a3f12681-ce95-435f-9a9a-5ab652395061 copy.JPG" 
                    alt="Siddharth Shetty" 
                    className="w-40 h-40 object-cover rounded-xl border-2 border-brass-400/50 shadow-lg"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-amber-800/30 p-4 rounded-lg border border-brass-500/20 shadow-lg">
                    <BookOpen className="h-6 w-6 text-brass-300 mb-2" />
                    <h3 className="text-white font-semibold mb-2 font-serif">Current Focus</h3>
                    <p className="text-amber-200 text-sm">Studying Physics, Math, and History at the higher level</p>
                  </div>
                  <div className="bg-amber-800/30 p-4 rounded-lg border border-brass-500/20 shadow-lg">
                    <Target className="h-6 w-6 text-copper-300 mb-2" />
                    <h3 className="text-white font-semibold mb-2 font-serif">Passion</h3>
                    <p className="text-amber-200 text-sm">Connecting machine logic with human mindset</p>
                  </div>
                  <div className="bg-amber-800/30 p-4 rounded-lg border border-brass-500/20 shadow-lg">
                    <Cog className="h-6 w-6 text-brass-400 mb-2" />
                    <h3 className="text-white font-semibold mb-2 font-serif">Focus</h3>
                    <p className="text-amber-200 text-sm">How ideas developed over time, not just what worked</p>
                  </div>
                  <div className="bg-amber-800/30 p-4 rounded-lg border border-brass-500/20 shadow-lg">
                    <Zap className="h-6 w-6 text-brass-300 mb-2" />
                    <h3 className="text-white font-semibold mb-2 font-serif">Mission</h3>
                    <p className="text-amber-200 text-sm">Creating engineers who think deeper, not just build faster</p>
                  </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;