import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cog, Wrench, Plane, Car, Bot, ArrowRight, Zap, Cpu, Building, Waves, Atom, Lightbulb, Hammer, Factory, Satellite, Microscope } from 'lucide-react';

const EngineeringDisciplinesPage = () => {
  const articles = [
    {
      title: 'Mechanical Engineering',
      description: 'The foundation of engineering, dealing with design, manufacturing, and maintenance of mechanical systems',
      icon: Cog,
      path: '/mechanical-engineering',
      color: 'from-orange-500 to-red-600',
      topics: ['Machine Design', 'Thermodynamics', 'Manufacturing', 'Materials Science']
    },
    {
      title: 'Aerospace Engineering',
      description: 'Designing aircraft, spacecraft, and propulsion systems for flight and space exploration',
      icon: Plane,
      path: '/aerospace-engineering',
      color: 'from-cyan-500 to-blue-600',
      topics: ['Aerodynamics', 'Propulsion', 'Flight Dynamics', 'Space Systems']
    },
    {
      title: 'Automotive Engineering',
      description: 'Specialized field focused on design, development, and manufacturing of vehicles',
      icon: Car,
      path: '/automotive-engineering',
      color: 'from-green-500 to-teal-600',
      topics: ['Vehicle Design', 'Powertrain', 'Safety Systems', 'Electric Vehicles']
    },
    {
      title: 'Electrical Engineering',
      description: 'From Edison\'s light bulb to modern power grids and electronic devices',
      icon: Zap,
      path: '/electrical-engineering',
      color: 'from-yellow-500 to-orange-600',
      topics: ['Power Systems', 'Electronics', 'Edison vs Tesla', 'Modern Computing']
    },
    {
      title: 'Computer Engineering',
      description: 'The evolution from mechanical calculators to modern processors and AI systems',
      icon: Cpu,
      path: '/computer-engineering',
      color: 'from-indigo-500 to-purple-600',
      topics: ['Computing History', 'Microprocessors', 'Software Engineering', 'Digital Revolution']
    },
    {
      title: 'Civil Engineering',
      description: 'Building the infrastructure that supports civilization - roads, buildings, and cities',
      icon: Building,
      path: '/civil-engineering',
      color: 'from-gray-500 to-slate-600',
      topics: ['Infrastructure', 'Urban Planning', 'Construction', 'Public Works']
    },
    {
      title: 'Marine Engineering',
      description: 'Conquering the seas with ships, submarines, and offshore structures',
      icon: Waves,
      path: '/marine-engineering',
      color: 'from-blue-600 to-cyan-600',
      topics: ['Naval Architecture', 'Ship Propulsion', 'Offshore Engineering', 'Maritime History']
    },
    {
      title: 'Nuclear Engineering',
      description: 'Harnessing atomic power for energy, medicine, and space exploration',
      icon: Atom,
      path: '/nuclear-engineering',
      color: 'from-green-400 to-blue-500',
      topics: ['Nuclear Power', 'Atomic Theory', 'Reactor Design', 'Nuclear Medicine']
    },
    {
      title: 'Chemical Engineering',
      description: 'Transforming raw materials into useful products through chemical processes',
      icon: Lightbulb,
      path: '/chemical-engineering',
      color: 'from-pink-500 to-rose-600',
      topics: ['Process Engineering', 'Petrochemicals', 'Pharmaceuticals', 'Materials Science']
    },
    {
      title: 'Mining Engineering',
      description: 'Extracting Earth\'s resources while advancing safety and environmental practices',
      icon: Hammer,
      path: '/mining-engineering',
      color: 'from-amber-600 to-orange-700',
      topics: ['Resource Extraction', 'Safety Systems', 'Environmental Impact', 'Mineral Processing']
    },
    {
      title: 'Industrial Engineering',
      description: 'Optimizing complex systems and processes for maximum efficiency and productivity',
      icon: Factory,
      path: '/industrial-engineering',
      color: 'from-teal-500 to-green-600',
      topics: ['Process Optimization', 'Quality Control', 'Supply Chain', 'Lean Manufacturing']
    },
    {
      title: 'Satellite Engineering',
      description: 'Designing and deploying spacecraft that revolutionized communication and navigation',
      icon: Satellite,
      path: '/satellite-engineering',
      color: 'from-purple-600 to-indigo-700',
      topics: ['Space Technology', 'Communication Systems', 'GPS Navigation', 'Earth Observation']
    },
    {
      title: 'Biomedical Engineering',
      description: 'Merging engineering principles with biological systems to improve healthcare',
      icon: Microscope,
      path: '/biomedical-engineering',
      color: 'from-red-500 to-pink-600',
      topics: ['Medical Devices', 'Prosthetics', 'Imaging Systems', 'Biotechnology']
    },
    {
      title: 'Environmental Engineering',
      description: 'Protecting human health and the environment through sustainable engineering solutions',
      icon: Waves,
      path: '/environmental-engineering',
      color: 'from-emerald-500 to-green-600',
      topics: ['Water Treatment', 'Air Quality', 'Waste Management', 'Sustainability']
    },
    {
      title: 'Materials Engineering',
      description: 'Developing and optimizing materials with specific properties for various applications',
      icon: Atom,
      path: '/materials-engineering',
      color: 'from-violet-500 to-purple-600',
      topics: ['Composites', 'Metallurgy', 'Polymers', 'Nanomaterials']
    }
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
            Engineering
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Disciplines
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore the diverse world of engineering disciplines. Each field represents unique innovations, 
            methodologies, and breakthroughs that have shaped our modern technological landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {articles.map((article, index) => {
            const Icon = article.icon;
            return (
              <Link
                key={article.path}
                to={article.path}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${article.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex-1">
                      {article.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-400 mb-4 leading-relaxed flex-1">
                    {article.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.topics.slice(0, 3).map((topic) => (
                      <span 
                        key={topic}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/30"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors mt-auto">
                    <span className="font-medium text-sm">Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">More Disciplines Coming Soon</h2>
            <p className="text-slate-300 leading-relaxed">
              Engineering is a vast field with many specialized disciplines. We're continuously adding more 
              articles covering areas like environmental engineering, materials science, petroleum engineering, 
              and emerging fields like quantum engineering and nanotechnology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringDisciplinesPage;