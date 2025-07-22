import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Grid, Cog, Wrench, Zap, Car, Plane, Bot, ArrowRight, User, BookOpen, Target, Train, Thermometer, Gauge, Factory, Mountain, Waves, Fuel, Settings, Cpu, Brain, Rocket, Satellite, Wind, Heart, Star, Sun, Moon, Cloud, Umbrella, Coffee, Camera, Music, Phone, Mail, Lock, Key, Shield, Search, Filter, Download, Upload, Edit, Delete, Save, Copy, Share, Printer as Print, Calendar, Clock, Map, Navigation, Compass, Globe, Flag, Award, Trophy, Medal, Gift, ShoppingBag as Shopping, Wallet, CreditCard, Activity, Battery, Wifi, Bluetooth, Volume, Mic, Video, Image, File, Folder, Archive, Database, Server, Monitor, Smartphone, Tablet, Laptop, Keyboard, Mouse, Headphones, Speaker, Gamepad, Brush, Palette, Scissors, Ruler, Hammer, HardDrive as Screwdriver, Drill, Save as Saw, Flashlight, Lightbulb, Siren as Fire, Flame, Snowflake, Droplet, Leaf, Trees as Tree, Flower, Bed as Seed, Apple, Cherry, Grape, Carrot, Pizza, Cake, IceCream, Coffee as CoffeeIcon, Wine, Beer, Utensils, ChefHat, Scale, Timer } from 'lucide-react';

const IconsPage = () => {
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
            All available Lucide React icons that can be used in the application
          </p>
        </div>

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
  );
};

export default IconsPage;