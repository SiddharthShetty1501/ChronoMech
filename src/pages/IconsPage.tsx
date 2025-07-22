import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Grid, Cog, Wrench, Zap, Car, Plane, Bot, ArrowRight, User, BookOpen, Target, Train, Thermometer, Gauge, Factory, Mountain, Waves, Fuel, Settings, Cpu, Brain, Rocket, Satellite, Wind, Heart, Star, Sun, Moon, Cloud, Umbrella, Coffee, Camera, Music, Phone, Mail, Lock, Key, Shield, Search, Filter, Download, Upload, Edit, Delete, Save, Copy, Share, Printer as Print, Calendar, Clock, Map, Navigation, Compass, Globe, Flag, Award, Trophy, Medal, Gift, ShoppingBag as Shopping, Wallet, CreditCard, Activity, Battery, Wifi, Bluetooth, Volume, Mic, Video, Image, File, Folder, Archive, Database, Server, Monitor, Smartphone, Tablet, Laptop, Keyboard, Mouse, Headphones, Speaker, Gamepad, Brush, Palette, Scissors, Ruler, Hammer, HardDrive as Screwdriver, Drill, Save as Saw, Flashlight, Lightbulb, Siren as Fire, Flame, Snowflake, Droplet, Leaf, Trees as Tree, Flower, Bed as Seed, Apple, Cherry, Grape, Carrot, Pizza, Cake, IceCream, Coffee as CoffeeIcon, Wine, Beer, Utensils, ChefHat, Scale, Timer, Loader, RefreshCw, RotateCw, RotateCcw, Radio, Radar, Orbit, Atom, Microscope, FlaskConical, Beaker, TestTube, Dna, Magnet, Waves as WaveIcon, Bolt, Power, Plug, CircuitBoard, Microchip, HardHat, Construction, Crane, Building, Building2, Warehouse, Anchor, Ship, Sailboat, Truck, Bus, Tractor, Pickaxe, Shovel, Axe, Wrench as WrenchIcon, Screwdriver as ScrewdriverIcon, Nut, Bolt as BoltIcon, Gear } from 'lucide-react';

const IconsPage = () => {
  // Animated icons with their animation types
  const animatedIcons = [
    { name: 'Cog (Spinning)', icon: Cog, animation: 'animate-spin' },
    { name: 'Settings (Spinning)', icon: Settings, animation: 'animate-spin' },
    { name: 'Loader (Spinning)', icon: Loader, animation: 'animate-spin' },
    { name: 'RefreshCw (Spinning)', icon: RefreshCw, animation: 'animate-spin' },
    { name: 'RotateCw (Spinning)', icon: RotateCw, animation: 'animate-spin' },
    { name: 'RotateCcw (Spinning)', icon: RotateCcw, animation: 'animate-spin' },
    { name: 'Gear (Spinning)', icon: Gear, animation: 'animate-spin' },
    { name: 'Zap (Pulsing)', icon: Zap, animation: 'animate-pulse' },
    { name: 'Heart (Pulsing)', icon: Heart, animation: 'animate-pulse' },
    { name: 'Star (Pulsing)', icon: Star, animation: 'animate-pulse' },
    { name: 'Sun (Pulsing)', icon: Sun, animation: 'animate-pulse' },
    { name: 'Activity (Pulsing)', icon: Activity, animation: 'animate-pulse' },
    { name: 'Radio (Pulsing)', icon: Radio, animation: 'animate-pulse' },
    { name: 'Radar (Pulsing)', icon: Radar, animation: 'animate-pulse' },
    { name: 'Power (Pulsing)', icon: Power, animation: 'animate-pulse' },
    { name: 'Bolt (Pulsing)', icon: BoltIcon, animation: 'animate-pulse' },
    { name: 'ArrowRight (Bouncing)', icon: ArrowRight, animation: 'animate-bounce' },
    { name: 'Rocket (Bouncing)', icon: Rocket, animation: 'animate-bounce' },
    { name: 'Plane (Bouncing)', icon: Plane, animation: 'animate-bounce' },
    { name: 'Orbit (Spinning)', icon: Orbit, animation: 'animate-spin' },
    { name: 'Atom (Spinning)', icon: Atom, animation: 'animate-spin' },
    { name: 'Cpu (Pulsing)', icon: Cpu, animation: 'animate-pulse' },
    { name: 'CircuitBoard (Pulsing)', icon: CircuitBoard, animation: 'animate-pulse' },
    { name: 'Microchip (Pulsing)', icon: Microchip, animation: 'animate-pulse' },
    { name: 'Brain (Pulsing)', icon: Brain, animation: 'animate-pulse' },
    { name: 'Microscope (Bouncing)', icon: Microscope, animation: 'animate-bounce' },
    { name: 'FlaskConical (Bouncing)', icon: FlaskConical, animation: 'animate-bounce' },
    { name: 'Beaker (Bouncing)', icon: Beaker, animation: 'animate-bounce' },
    { name: 'TestTube (Bouncing)', icon: TestTube, animation: 'animate-bounce' },
    { name: 'Dna (Spinning)', icon: Dna, animation: 'animate-spin' },
    { name: 'Magnet (Pulsing)', icon: Magnet, animation: 'animate-pulse' },
    { name: 'WaveIcon (Pulsing)', icon: WaveIcon, animation: 'animate-pulse' },
    { name: 'Factory (Pulsing)', icon: Factory, animation: 'animate-pulse' },
    { name: 'Construction (Bouncing)', icon: Construction, animation: 'animate-bounce' },
    { name: 'Crane (Bouncing)', icon: Crane, animation: 'animate-bounce' },
    { name: 'Building (Bouncing)', icon: Building, animation: 'animate-bounce' },
    { name: 'Building2 (Bouncing)', icon: Building2, animation: 'animate-bounce' },
    { name: 'Warehouse (Pulsing)', icon: Warehouse, animation: 'animate-pulse' },
    { name: 'HardHat (Bouncing)', icon: HardHat, animation: 'animate-bounce' },
    { name: 'Train (Bouncing)', icon: Train, animation: 'animate-bounce' },
    { name: 'Car (Bouncing)', icon: Car, animation: 'animate-bounce' },
    { name: 'Truck (Bouncing)', icon: Truck, animation: 'animate-bounce' },
    { name: 'Bus (Bouncing)', icon: Bus, animation: 'animate-bounce' },
    { name: 'Tractor (Bouncing)', icon: Tractor, animation: 'animate-bounce' },
    { name: 'Ship (Bouncing)', icon: Ship, animation: 'animate-bounce' },
    { name: 'Sailboat (Bouncing)', icon: Sailboat, animation: 'animate-bounce' },
    { name: 'Anchor (Pulsing)', icon: Anchor, animation: 'animate-pulse' },
    { name: 'Compass (Spinning)', icon: Compass, animation: 'animate-spin' },
    { name: 'Globe (Spinning)', icon: Globe, animation: 'animate-spin' },
    { name: 'Satellite (Spinning)', icon: Satellite, animation: 'animate-spin' },
    { name: 'Clock (Spinning)', icon: Clock, animation: 'animate-spin' },
    { name: 'Timer (Spinning)', icon: Timer, animation: 'animate-spin' },
    { name: 'Gauge (Pulsing)', icon: Gauge, animation: 'animate-pulse' },
    { name: 'Thermometer (Pulsing)', icon: Thermometer, animation: 'animate-pulse' },
    { name: 'Battery (Pulsing)', icon: Battery, animation: 'animate-pulse' },
    { name: 'Plug (Pulsing)', icon: Plug, animation: 'animate-pulse' },
    { name: 'Lightbulb (Pulsing)', icon: Lightbulb, animation: 'animate-pulse' },
    { name: 'Flame (Pulsing)', icon: Flame, animation: 'animate-pulse' },
    { name: 'Wind (Pulsing)', icon: Wind, animation: 'animate-pulse' },
    { name: 'Mountain (Bouncing)', icon: Mountain, animation: 'animate-bounce' },
    { name: 'Waves (Pulsing)', icon: Waves, animation: 'animate-pulse' },
    { name: 'Pickaxe (Bouncing)', icon: Pickaxe, animation: 'animate-bounce' },
    { name: 'Shovel (Bouncing)', icon: Shovel, animation: 'animate-bounce' },
    { name: 'Axe (Bouncing)', icon: Axe, animation: 'animate-bounce' },
    { name: 'Hammer (Bouncing)', icon: Hammer, animation: 'animate-bounce' },
    { name: 'WrenchIcon (Spinning)', icon: WrenchIcon, animation: 'animate-spin' },
    { name: 'ScrewdriverIcon (Spinning)', icon: ScrewdriverIcon, animation: 'animate-spin' },
    { name: 'Drill (Spinning)', icon: Drill, animation: 'animate-spin' },
    { name: 'Nut (Spinning)', icon: Nut, animation: 'animate-spin' },
    { name: 'Bot (Pulsing)', icon: Bot, animation: 'animate-pulse' },
    { name: 'Target (Pulsing)', icon: Target, animation: 'animate-pulse' },
    { name: 'Award (Pulsing)', icon: Award, animation: 'animate-pulse' },
    { name: 'Trophy (Bouncing)', icon: Trophy, animation: 'animate-bounce' },
    { name: 'Medal (Bouncing)', icon: Medal, animation: 'animate-bounce' }
  ];

  const iconList = [
    { name: 'ArrowLeft', icon: ArrowLeft },
    { name: 'Home', icon: Home },
    { name: 'Grid', icon: Grid },
    { name: 'Cog', icon: Cog },
    { name: 'Wrench', icon: Wrench },
    { name: 'Zap', icon: Zap },
    { name: 'Car', icon: Car },
    { name: 'Plane', icon: Plane },
    { name: 'Bot', icon: Bot },
    { name: 'ArrowRight', icon: ArrowRight },
    { name: 'User', icon: User },
    { name: 'BookOpen', icon: BookOpen },
    { name: 'Target', icon: Target },
    { name: 'Train', icon: Train },
    { name: 'Thermometer', icon: Thermometer },
    { name: 'Gauge', icon: Gauge },
    { name: 'Factory', icon: Factory },
    { name: 'Mountain', icon: Mountain },
    { name: 'Waves', icon: Waves },
    { name: 'Fuel', icon: Fuel },
    { name: 'Settings', icon: Settings },
    { name: 'Cpu', icon: Cpu },
    { name: 'Brain', icon: Brain },
    { name: 'Rocket', icon: Rocket },
    { name: 'Satellite', icon: Satellite },
    { name: 'Wind', icon: Wind },
    { name: 'Heart', icon: Heart },
    { name: 'Star', icon: Star },
    { name: 'Sun', icon: Sun },
    { name: 'Moon', icon: Moon },
    { name: 'Cloud', icon: Cloud },
    { name: 'Umbrella', icon: Umbrella },
    { name: 'Coffee', icon: Coffee },
    { name: 'Camera', icon: Camera },
    { name: 'Music', icon: Music },
    { name: 'Phone', icon: Phone },
    { name: 'Mail', icon: Mail },
    { name: 'Lock', icon: Lock },
    { name: 'Key', icon: Key },
    { name: 'Shield', icon: Shield },
    { name: 'Search', icon: Search },
    { name: 'Filter', icon: Filter },
    { name: 'Download', icon: Download },
    { name: 'Upload', icon: Upload },
    { name: 'Edit', icon: Edit },
    { name: 'Delete', icon: Delete },
    { name: 'Save', icon: Save },
    { name: 'Copy', icon: Copy },
    { name: 'Share', icon: Share },
    { name: 'Print', icon: Print },
    { name: 'Calendar', icon: Calendar },
    { name: 'Clock', icon: Clock },
    { name: 'Map', icon: Map },
    { name: 'Navigation', icon: Navigation },
    { name: 'Compass', icon: Compass },
    { name: 'Globe', icon: Globe },
    { name: 'Flag', icon: Flag },
    { name: 'Award', icon: Award },
    { name: 'Trophy', icon: Trophy },
    { name: 'Medal', icon: Medal },
    { name: 'Gift', icon: Gift },
    { name: 'Shopping', icon: Shopping },
    { name: 'Wallet', icon: Wallet },
    { name: 'CreditCard', icon: CreditCard },
    { name: 'Activity', icon: Activity },
    { name: 'Battery', icon: Battery },
    { name: 'Wifi', icon: Wifi },
    { name: 'Bluetooth', icon: Bluetooth },
    { name: 'Volume', icon: Volume },
    { name: 'Mic', icon: Mic },
    { name: 'Video', icon: Video },
    { name: 'Image', icon: Image },
    { name: 'File', icon: File },
    { name: 'Folder', icon: Folder },
    { name: 'Archive', icon: Archive },
    { name: 'Database', icon: Database },
    { name: 'Server', icon: Server },
    { name: 'Monitor', icon: Monitor },
    { name: 'Smartphone', icon: Smartphone },
    { name: 'Tablet', icon: Tablet },
    { name: 'Laptop', icon: Laptop },
    { name: 'Keyboard', icon: Keyboard },
    { name: 'Mouse', icon: Mouse },
    { name: 'Headphones', icon: Headphones },
    { name: 'Speaker', icon: Speaker },
    { name: 'Gamepad', icon: Gamepad },
    { name: 'Brush', icon: Brush },
    { name: 'Palette', icon: Palette },
    { name: 'Scissors', icon: Scissors },
    { name: 'Ruler', icon: Ruler },
    { name: 'Hammer', icon: Hammer },
    { name: 'Screwdriver', icon: Screwdriver },
    { name: 'Drill', icon: Drill },
    { name: 'Saw', icon: Saw },
    { name: 'Flashlight', icon: Flashlight },
    { name: 'Lightbulb', icon: Lightbulb },
    { name: 'Fire', icon: Fire },
    { name: 'Flame', icon: Flame },
    { name: 'Snowflake', icon: Snowflake },
    { name: 'Droplet', icon: Droplet },
    { name: 'Leaf', icon: Leaf },
    { name: 'Tree', icon: Tree },
    { name: 'Flower', icon: Flower },
    { name: 'Seed', icon: Seed },
    { name: 'Apple', icon: Apple },
    { name: 'Cherry', icon: Cherry },
    { name: 'Grape', icon: Grape },
    { name: 'Carrot', icon: Carrot },
    { name: 'Pizza', icon: Pizza },
    { name: 'Cake', icon: Cake },
    { name: 'IceCream', icon: IceCream },
    { name: 'CoffeeIcon', icon: CoffeeIcon },
    { name: 'Wine', icon: Wine },
    { name: 'Beer', icon: Beer },
    { name: 'Utensils', icon: Utensils },
    { name: 'ChefHat', icon: ChefHat },
    { name: 'Scale', icon: Scale },
    { name: 'Timer', icon: Timer }
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
            Available
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Icons
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            All available Lucide React icons with special focus on animated engineering and history icons
          </p>
        </div>

        {/* Animated Icons Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Animated Icons
            </span>
            <span className="block text-lg text-slate-400 font-normal mt-2">
              Perfect for Engineering & History Themes
            </span>
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {animatedIcons.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600">
                      <Icon className={`h-6 w-6 text-white ${item.animation}`} />
                    </div>
                    <span className="text-xs text-slate-300 text-center font-medium break-words leading-tight">
                      {item.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Icons Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              All Available Icons
            </span>
          </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {iconList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs text-slate-300 text-center font-medium break-words">
                    {item.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
};

export default IconsPage;