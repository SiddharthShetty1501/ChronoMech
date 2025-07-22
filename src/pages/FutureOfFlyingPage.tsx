import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plane, Zap, Wind, Rocket } from 'lucide-react';

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
            <p className="text-slate-400">Airplane image will be placed here</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Zap className="h-6 w-6 text-yellow-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Electric Aviation</h3>
                <p className="text-slate-400 text-sm">Battery-powered aircraft for sustainable flight</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Wind className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Advanced Aerodynamics</h3>
                <p className="text-slate-400 text-sm">Next-generation wing designs and airflow control</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Rocket className="h-6 w-6 text-orange-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Hypersonic Travel</h3>
                <p className="text-slate-400 text-sm">Ultra-fast transportation beyond sound barriers</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">The Evolution of Flight</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Aviation stands at the threshold of revolutionary change. As we look toward the future of flying, 
              we see emerging technologies that promise to transform how we travel, transport goods, and explore 
              our world and beyond.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Electric and Hybrid Propulsion</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The aviation industry is experiencing a paradigm shift toward sustainable propulsion systems. 
              Electric aircraft, powered by advanced battery technologies, are becoming viable for short-haul 
              flights and urban air mobility. Companies like Eviation and Wright Electric are developing 
              all-electric aircraft that could revolutionize regional aviation.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Hybrid-electric systems offer a bridge to fully electric flight, combining traditional jet engines 
              with electric motors to reduce fuel consumption and emissions. These systems can optimize power 
              delivery during different phases of flight, using electric power for takeoff and landing while 
              relying on conventional engines for cruise flight.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Urban Air Mobility</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The concept of flying cars is transitioning from science fiction to reality. Electric Vertical 
              Takeoff and Landing (eVTOL) aircraft are being developed for urban transportation, promising 
              to alleviate traffic congestion and provide rapid point-to-point travel within cities.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              These aircraft feature distributed electric propulsion systems, advanced flight control software, 
              and autonomous capabilities. Companies like Joby Aviation, Lilium, and Archer are leading the 
              development of these revolutionary vehicles, with commercial operations expected within the decade.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Supersonic and Hypersonic Flight</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The return of supersonic passenger travel is on the horizon, with companies like Boom Supersonic 
              developing aircraft that can fly faster than the speed of sound while addressing the noise and 
              efficiency issues that plagued earlier supersonic aircraft like the Concorde.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Beyond supersonic flight, hypersonic technology promises to enable travel at speeds exceeding 
              Mach 5. These aircraft could reduce intercontinental flight times to mere hours, fundamentally 
              changing global connectivity and commerce.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Autonomous Flight Systems</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Artificial intelligence and machine learning are enabling increasingly sophisticated autonomous 
              flight systems. These technologies promise to enhance safety, reduce pilot workload, and enable 
              new types of aircraft operations that would be impossible with human pilots alone.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              From fully autonomous cargo aircraft to AI-assisted passenger flights, these systems are being 
              developed with multiple layers of redundancy and safety protocols to ensure reliable operation 
              in complex airspace environments.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Space Tourism and Beyond</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The boundary between aviation and spaceflight is blurring as companies develop vehicles capable 
              of suborbital and orbital flight. Space tourism is becoming a reality, with companies like 
              SpaceX, Blue Origin, and Virgin Galactic offering civilian access to space.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              These developments are driving innovations in propulsion, materials science, and life support 
              systems that will benefit both space exploration and atmospheric flight. The technologies 
              developed for space tourism are laying the groundwork for point-to-point suborbital travel, 
              which could enable travel between any two points on Earth in under an hour.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Challenges and Opportunities</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The future of flying faces significant challenges, including regulatory frameworks, air traffic 
              management, infrastructure development, and public acceptance. However, these challenges also 
              represent opportunities for innovation and collaboration across industries.
            </p>

            <p className="text-slate-300 leading-relaxed">
              As we stand on the brink of this aviation revolution, the future of flying promises to be more 
              sustainable, accessible, and transformative than ever before. The next decades will see the 
              realization of dreams that have captivated humanity since we first looked to the skies and 
              imagined soaring among the clouds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureOfFlyingPage;