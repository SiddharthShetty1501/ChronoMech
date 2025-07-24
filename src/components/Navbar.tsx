import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cog, Home, Grid, Settings, Wrench } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/articles', label: 'Articles', icon: Grid },
    { path: '/engineering-disciplines', label: 'Disciplines', icon: Wrench },
    { path: '/icons', label: 'Icons', icon: Cog },
  ];

  return (
    <nav className={`relative z-50 backdrop-blur-md border-b transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 border-cyan-500/30 shadow-lg shadow-cyan-500/10' 
        : 'bg-slate-900/80 border-cyan-500/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
            <div className="relative">
              <Settings className="h-10 w-10 animate-spin-slow" />
              <div className="absolute inset-0 h-10 w-10 animate-pulse opacity-30">
                <Settings className="h-10 w-10" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold leading-tight">ChronoMech</span>
              <span className="text-xs text-cyan-500 leading-tight">Engineering Through Time</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
            </div>
          </div>

          <div className="md:hidden">
            <button className="text-slate-300 hover:text-cyan-300">
              <Cog className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/5 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/5 rounded-full animate-pulse delay-1000"></div>
      </div>
    </nav>
  );
};

export default Navbar;