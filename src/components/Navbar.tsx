import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Grid, Settings, Wrench, Cog } from 'lucide-react';

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
  ];

  return (
    <nav className={`relative z-50 backdrop-blur-md border-b transition-all duration-300 shadow-lg ${
      isScrolled 
        ? 'bg-amber-900/95 border-brass-400/50 shadow-lg shadow-brass-500/20' 
        : 'bg-amber-900/80 border-brass-400/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 text-brass-300 hover:text-brass-200 transition-colors">
            <div className="relative">
              <Settings className="h-12 w-12 animate-gear-rotate text-brass-400" />
              <div className="absolute inset-0 h-12 w-12 animate-pulse opacity-40">
                <Settings className="h-12 w-12" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold leading-tight font-serif tracking-wide">ChronoMech</span>
              <span className="text-xs text-brass-400 leading-tight font-mono tracking-widest">ENGINEERING THROUGH TIME</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 border ${
                    isActive
                      ? 'bg-brass-500/30 text-brass-200 border-brass-400/50 shadow-inner'
                      : 'text-amber-200 hover:text-brass-200 hover:bg-amber-800/50 border-transparent hover:border-brass-500/30'
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
            <button className="text-amber-200 hover:text-brass-200">
              <Cog className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-brass-500/10 rounded-full animate-steam"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-copper-500/10 rounded-full animate-steam delay-1000"></div>
      </div>
    </nav>
  );
};

export default Navbar;