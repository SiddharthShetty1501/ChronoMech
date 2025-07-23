import React from 'react';
import { 
  Settings, Cog, Gear, Loader, RefreshCw, RotateCw, RotateCcw, Orbit, Atom, Dna, Compass, Globe, Satellite, Clock, Timer,
  Wrench, Screwdriver, Drill, Nut, Zap, Power, Bolt, Activity, Radio, Radar, Cpu, CircuitBoard, Microchip, Brain,
  Factory, Warehouse, Magnet, Waves, Gauge, Thermometer, Battery, Plug, Lightbulb, Flame, Wind, Bot, Target, Award,
  Rocket, Plane, Train, Car, Truck, Bus, Tractor, Ship, Sailboat, Construction, Crane, Building, HardHat,
  Microscope, FlaskConical, Beaker, TestTube, Pickaxe, Shovel, Axe, Hammer, Trophy, Medal,
  Home, User, Mail, Phone, Calendar, Search, Filter, Download, Upload, Edit, Trash, Save, Copy, Share,
  Heart, Star, Bookmark, Flag, Tag, Lock, Unlock, Eye, EyeOff, Volume2, VolumeX, Play, Pause, Stop,
  ArrowUp, ArrowDown, ArrowLeft, ArrowRight, ChevronUp, ChevronDown, ChevronLeft, ChevronRight,
  Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, Menu, MoreHorizontal, MoreVertical
} from 'lucide-react';

const IconsPage = () => {
  const animatedIcons = [
    // Spinning Icons (Engineering/Mechanical)
    { icon: Settings, name: 'Settings', animation: 'spin' },
    { icon: Cog, name: 'Cog', animation: 'spin' },
    { icon: Gear, name: 'Gear', animation: 'spin' },
    { icon: Loader, name: 'Loader', animation: 'spin' },
    { icon: RefreshCw, name: 'RefreshCw', animation: 'spin' },
    { icon: RotateCw, name: 'RotateCw', animation: 'spin' },
    { icon: RotateCcw, name: 'RotateCcw', animation: 'spin' },
    { icon: Orbit, name: 'Orbit', animation: 'spin' },
    { icon: Atom, name: 'Atom', animation: 'spin' },
    { icon: Dna, name: 'Dna', animation: 'spin' },
    { icon: Compass, name: 'Compass', animation: 'spin' },
    { icon: Globe, name: 'Globe', animation: 'spin' },
    { icon: Satellite, name: 'Satellite', animation: 'spin' },
    { icon: Clock, name: 'Clock', animation: 'spin' },
    { icon: Timer, name: 'Timer', animation: 'spin' },
    { icon: Wrench, name: 'Wrench', animation: 'spin' },
    { icon: Screwdriver, name: 'Screwdriver', animation: 'spin' },
    { icon: Drill, name: 'Drill', animation: 'spin' },
    { icon: Nut, name: 'Nut', animation: 'spin' },

    // Pulsing Icons (Energy/Power/Innovation)
    { icon: Zap, name: 'Zap', animation: 'pulse' },
    { icon: Power, name: 'Power', animation: 'pulse' },
    { icon: Bolt, name: 'Bolt', animation: 'pulse' },
    { icon: Activity, name: 'Activity', animation: 'pulse' },
    { icon: Radio, name: 'Radio', animation: 'pulse' },
    { icon: Radar, name: 'Radar', animation: 'pulse' },
    { icon: Cpu, name: 'Cpu', animation: 'pulse' },
    { icon: CircuitBoard, name: 'CircuitBoard', animation: 'pulse' },
    { icon: Microchip, name: 'Microchip', animation: 'pulse' },
    { icon: Brain, name: 'Brain', animation: 'pulse' },
    { icon: Factory, name: 'Factory', animation: 'pulse' },
    { icon: Warehouse, name: 'Warehouse', animation: 'pulse' },
    { icon: Magnet, name: 'Magnet', animation: 'pulse' },
    { icon: Waves, name: 'Waves', animation: 'pulse' },
    { icon: Gauge, name: 'Gauge', animation: 'pulse' },
    { icon: Thermometer, name: 'Thermometer', animation: 'pulse' },
    { icon: Battery, name: 'Battery', animation: 'pulse' },
    { icon: Plug, name: 'Plug', animation: 'pulse' },
    { icon: Lightbulb, name: 'Lightbulb', animation: 'pulse' },
    { icon: Flame, name: 'Flame', animation: 'pulse' },
    { icon: Wind, name: 'Wind', animation: 'pulse' },
    { icon: Bot, name: 'Bot', animation: 'pulse' },
    { icon: Target, name: 'Target', animation: 'pulse' },
    { icon: Award, name: 'Award', animation: 'pulse' },

    // Bouncing Icons (Transportation/Construction)
    { icon: Rocket, name: 'Rocket', animation: 'bounce' },
    { icon: Plane, name: 'Plane', animation: 'bounce' },
    { icon: Train, name: 'Train', animation: 'bounce' },
    { icon: Car, name: 'Car', animation: 'bounce' },
    { icon: Truck, name: 'Truck', animation: 'bounce' },
    { icon: Bus, name: 'Bus', animation: 'bounce' },
    { icon: Tractor, name: 'Tractor', animation: 'bounce' },
    { icon: Ship, name: 'Ship', animation: 'bounce' },
    { icon: Sailboat, name: 'Sailboat', animation: 'bounce' },
    { icon: Construction, name: 'Construction', animation: 'bounce' },
    { icon: Crane, name: 'Crane', animation: 'bounce' },
    { icon: Building, name: 'Building', animation: 'bounce' },
    { icon: HardHat, name: 'HardHat', animation: 'bounce' },
    { icon: Microscope, name: 'Microscope', animation: 'bounce' },
    { icon: FlaskConical, name: 'FlaskConical', animation: 'bounce' },
    { icon: Beaker, name: 'Beaker', animation: 'bounce' },
    { icon: TestTube, name: 'TestTube', animation: 'bounce' },
    { icon: Pickaxe, name: 'Pickaxe', animation: 'bounce' },
    { icon: Shovel, name: 'Shovel', animation: 'bounce' },
    { icon: Axe, name: 'Axe', animation: 'bounce' },
    { icon: Hammer, name: 'Hammer', animation: 'bounce' },
    { icon: Trophy, name: 'Trophy', animation: 'bounce' },
    { icon: Medal, name: 'Medal', animation: 'bounce' },
  ];

  const staticIcons = [
    { icon: Home, name: 'Home' },
    { icon: User, name: 'User' },
    { icon: Mail, name: 'Mail' },
    { icon: Phone, name: 'Phone' },
    { icon: Calendar, name: 'Calendar' },
    { icon: Search, name: 'Search' },
    { icon: Filter, name: 'Filter' },
    { icon: Download, name: 'Download' },
    { icon: Upload, name: 'Upload' },
    { icon: Edit, name: 'Edit' },
    { icon: Trash, name: 'Trash' },
    { icon: Save, name: 'Save' },
    { icon: Copy, name: 'Copy' },
    { icon: Share, name: 'Share' },
    { icon: Heart, name: 'Heart' },
    { icon: Star, name: 'Star' },
    { icon: Bookmark, name: 'Bookmark' },
    { icon: Flag, name: 'Flag' },
    { icon: Tag, name: 'Tag' },
    { icon: Lock, name: 'Lock' },
    { icon: Unlock, name: 'Unlock' },
    { icon: Eye, name: 'Eye' },
    { icon: EyeOff, name: 'EyeOff' },
    { icon: Volume2, name: 'Volume2' },
    { icon: VolumeX, name: 'VolumeX' },
    { icon: Play, name: 'Play' },
    { icon: Pause, name: 'Pause' },
    { icon: Stop, name: 'Stop' },
    { icon: ArrowUp, name: 'ArrowUp' },
    { icon: ArrowDown, name: 'ArrowDown' },
    { icon: ArrowLeft, name: 'ArrowLeft' },
    { icon: ArrowRight, name: 'ArrowRight' },
    { icon: ChevronUp, name: 'ChevronUp' },
    { icon: ChevronDown, name: 'ChevronDown' },
    { icon: ChevronLeft, name: 'ChevronLeft' },
    { icon: ChevronRight, name: 'ChevronRight' },
    { icon: Plus, name: 'Plus' },
    { icon: Minus, name: 'Minus' },
    { icon: X, name: 'X' },
    { icon: Check, name: 'Check' },
    { icon: AlertCircle, name: 'AlertCircle' },
    { icon: Info, name: 'Info' },
    { icon: HelpCircle, name: 'HelpCircle' },
    { icon: Menu, name: 'Menu' },
    { icon: MoreHorizontal, name: 'MoreHorizontal' },
    { icon: MoreVertical, name: 'MoreVertical' },
  ];

  const getAnimationClass = (animation: string) => {
    switch (animation) {
      case 'spin':
        return 'animate-spin';
      case 'pulse':
        return 'animate-pulse';
      case 'bounce':
        return 'animate-bounce';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Icon Library
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Browse through all available Lucide React icons. The animated section shows icons perfect for engineering and history themes.
          </p>
        </div>

        {/* Animated Icons Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            🔥 Animated Icons - Engineering & History
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            {animatedIcons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 text-center group"
                >
                  <div className="flex justify-center mb-3">
                    <IconComponent 
                      className={`w-8 h-8 text-orange-400 group-hover:text-orange-300 ${getAnimationClass(item.animation)}`}
                    />
                  </div>
                  <p className="text-sm text-slate-300 font-medium">{item.name}</p>
                  <p className="text-xs text-orange-500 mt-1 capitalize">{item.animation}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Static Icons Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            All Available Icons
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            {staticIcons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 text-center group"
                >
                  <div className="flex justify-center mb-3">
                    <IconComponent className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300" />
                  </div>
                  <p className="text-sm text-slate-300 font-medium">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400">
            Total Icons: {animatedIcons.length + staticIcons.length} | 
            Animated: {animatedIcons.length} | 
            Static: {staticIcons.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IconsPage;