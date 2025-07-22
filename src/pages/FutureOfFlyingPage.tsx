import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plane, Zap, Wind, Rocket, Users, Globe, Battery, Cpu } from 'lucide-react';

const FutureOfFlyingPage = () => {
  return (
    <div className="relative min-h-screen pt-8 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/articles" 
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Articles
        </Link>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl mr-4">
              <Plane className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Future of Flying</h1>
          </div>

          {/* Space for airplane image */}
          <div className="bg-slate-700/30 border-2 border-dashed border-slate-600 rounded-xl p-8 mb-8 text-center">
            <Plane className="h-16 w-16 text-slate-500 mx-auto mb-4" />
            <p className="text-slate-400">Aetherion X9 aircraft image will be placed here</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Battery className="h-6 w-6 text-green-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Electric Propulsion</h3>
                <p className="text-slate-400 text-sm">Zero-emission flight technology</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Wind className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Advanced Aerodynamics</h3>
                <p className="text-slate-400 text-sm">Next-generation wing designs</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Cpu className="h-6 w-6 text-purple-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">AI Flight Systems</h3>
                <p className="text-slate-400 text-sm">Autonomous navigation and control</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Users className="h-6 w-6 text-orange-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Urban Mobility</h3>
                <p className="text-slate-400 text-sm">Personal flying vehicles</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">The Aetherion X9: Redefining Aviation</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              The Aetherion X9 represents the pinnacle of next-generation aviation technology, combining revolutionary 
              propulsion systems with advanced materials science to create an aircraft that transcends traditional 
              flight limitations. This groundbreaking vehicle embodies the future of sustainable, efficient, and 
              intelligent air transportation.
            </p>

            {/* Space for technical diagram */}
            <div className="bg-slate-700/30 border-2 border-dashed border-slate-600 rounded-xl p-6 mb-8 text-center">
              <Wind className="h-12 w-12 text-slate-500 mx-auto mb-3" />
              <p className="text-slate-400">Technical diagram of Aetherion X9 propulsion system</p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Revolutionary Propulsion Technology</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              At the heart of the Aetherion X9 lies its revolutionary hybrid-electric propulsion system. Unlike 
              conventional aircraft that rely solely on fossil fuels, the X9 integrates advanced battery technology 
              with high-efficiency turbofan engines, creating a propulsion system that can adapt to different flight 
              phases for optimal performance and minimal environmental impact.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The aircraft's distributed electric propulsion (DEP) system features multiple smaller electric motors 
              positioned along the wing's leading edge, providing unprecedented control over airflow and lift 
              generation. This configuration not only improves fuel efficiency by up to 40% compared to traditional 
              aircraft but also enables quieter operation and enhanced safety through redundancy.
            </p>

            {/* Space for cockpit image */}
            <div className="bg-slate-700/30 border-2 border-dashed border-slate-600 rounded-xl p-6 mb-8 text-center">
              <Cpu className="h-12 w-12 text-slate-500 mx-auto mb-3" />
              <p className="text-slate-400">Advanced cockpit with AI-assisted flight controls</p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Intelligent Flight Systems</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The Aetherion X9 incorporates cutting-edge artificial intelligence to create an unprecedented level 
              of flight automation and safety. The aircraft's neural network-based flight management system 
              continuously analyzes weather patterns, air traffic, and aircraft performance to optimize flight 
              paths in real-time, reducing fuel consumption and flight times while maintaining the highest safety standards.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Advanced sensor fusion technology combines data from radar, lidar, and optical systems to create 
              a comprehensive 360-degree awareness of the aircraft's environment. This system can detect and 
              avoid potential hazards, including other aircraft, weather phenomena, and terrain obstacles, 
              with reaction times far exceeding human capabilities.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Sustainable Aviation Materials</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The X9's airframe utilizes next-generation composite materials that are both lighter and stronger 
              than traditional aluminum construction. These bio-inspired materials, developed through advanced 
              nanotechnology, reduce the aircraft's weight by 25% while improving structural integrity and 
              resistance to fatigue and environmental factors.
            </p>

            {/* Space for materials diagram */}
            <div className="bg-slate-700/30 border-2 border-dashed border-slate-600 rounded-xl p-6 mb-8 text-center">
              <Zap className="h-12 w-12 text-slate-500 mx-auto mb-3" />
              <p className="text-slate-400">Cross-section showing advanced composite materials</p>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              The aircraft's smart materials can adapt to changing flight conditions, with wings that subtly 
              adjust their shape to optimize aerodynamic efficiency throughout different phases of flight. 
              This morphing wing technology, inspired by bird flight mechanics, provides significant improvements 
              in fuel efficiency and flight performance across a wide range of operating conditions.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Urban Air Mobility Integration</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Beyond traditional aviation routes, the Aetherion X9 is designed to integrate seamlessly with 
              emerging urban air mobility networks. Its advanced vertical takeoff and landing (VTOL) capabilities 
              enable operation from smaller airports and urban landing pads, bringing aviation closer to city centers 
              and reducing the need for extensive ground transportation.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The aircraft's quiet operation, achieved through its electric propulsion system and advanced 
              noise-reduction technologies, makes it suitable for urban environments where noise pollution 
              is a critical concern. This capability opens new possibilities for regional transportation and 
              emergency services in densely populated areas.
            </p>

            {/* Space for urban mobility image */}
            <div className="bg-slate-700/30 border-2 border-dashed border-slate-600 rounded-xl p-6 mb-8 text-center">
              <Globe className="h-12 w-12 text-slate-500 mx-auto mb-3" />
              <p className="text-slate-400">Aetherion X9 operating in urban air mobility network</p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Environmental Impact and Sustainability</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The Aetherion X9 represents a significant step toward sustainable aviation, with its hybrid-electric 
              propulsion system reducing carbon emissions by up to 60% compared to conventional aircraft of similar 
              size and capability. The aircraft's advanced energy management system optimizes the use of electric 
              power during takeoff and landing phases, when noise and emissions have the greatest environmental impact.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Looking toward the future, the X9's modular design allows for easy integration of emerging technologies 
              such as hydrogen fuel cells and advanced battery systems as they become available. This forward-thinking 
              approach ensures that the aircraft can evolve with advancing technology to achieve even greater 
              environmental benefits over its operational lifetime.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">The Future of Flight</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The Aetherion X9 is more than just an aircraft; it's a glimpse into the future of human mobility. 
              As we face growing challenges related to climate change, urbanization, and the need for efficient 
              transportation, innovations like the X9 point the way toward solutions that are both technologically 
              advanced and environmentally responsible.
            </p>

            <p className="text-slate-300 leading-relaxed">
              The technologies pioneered in the Aetherion X9 will undoubtedly influence the next generation of 
              aircraft, from personal flying vehicles to large commercial airliners. As we stand on the threshold 
              of a new era in aviation, the X9 represents humanity's continued quest to push the boundaries of 
              what's possible while building a more sustainable future for air transportation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureOfFlyingPage;