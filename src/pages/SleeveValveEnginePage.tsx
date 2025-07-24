import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Settings, Wrench, Zap, Gauge } from 'lucide-react';

const SleeveValveEnginePage = () => {
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
            <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-xl mr-4">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">The Silent Stroke</h1>
            <div className="ml-4 text-slate-400 text-lg">How the Sleeve Valve Engine Redefined Mechanical Elegance</div>
          </div>

          {/* Space for engine image */}
          <div className="bg-slate-700/30 border-2 border-dashed border-slate-600 rounded-xl p-8 mb-8 text-center">
            <Cog className="h-16 w-16 text-slate-500 mx-auto mb-4" />
            <p className="text-slate-400">Sleeve valve engine cutaway diagram will be placed here</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Settings className="h-6 w-6 text-orange-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Sleeve Mechanism</h3>
                <p className="text-slate-400 text-sm">Revolutionary valve design eliminating poppet valves</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Wrench className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Precision Engineering</h3>
                <p className="text-slate-400 text-sm">Tight tolerances and advanced manufacturing</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Zap className="h-6 w-6 text-green-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Performance</h3>
                <p className="text-slate-400 text-sm">Superior power and smooth operation</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Cog className="h-6 w-6 text-purple-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Innovation</h3>
                <p className="text-slate-400 text-sm">Challenging conventional engine design</p>
              </div>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              In the early 20th century, as internal combustion engines were rapidly evolving, most engineers focused on refining the conventional poppet valve system. But Charles Yale Knight had a different vision—one that would challenge the very foundations of engine design and create some of the most sophisticated powerplants ever built.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">The Revolutionary Concept</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The sleeve valve engine represented a radical departure from conventional thinking. Instead of using poppet valves that opened and closed like doors, Knight's design employed cylindrical sleeves that slid up and down within the cylinder, with precisely positioned ports that aligned to control the flow of fuel mixture and exhaust gases.
            </p>

            {/* Space for technical diagram */}
            <div className="bg-slate-700/30 border-2 border-dashed border-slate-600 rounded-xl p-6 mb-8 text-center">
              <Settings className="h-12 w-12 text-slate-500 mx-auto mb-3" />
              <p className="text-slate-400">Technical diagram showing sleeve valve operation cycle</p>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              This seemingly simple concept masked extraordinary engineering complexity. The sleeves had to maintain perfect sealing while sliding continuously, requiring manufacturing tolerances that pushed the limits of early 20th-century precision machining. Yet when executed properly, the results were remarkable: engines that ran with an almost supernatural smoothness and delivered power outputs that conventional engines of the time simply couldn't match.
            </p>

            {/* Historian Quote Space */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 mb-8">
              <blockquote className="text-lg italic text-slate-300 text-center leading-relaxed">
                [Space for historian quote about the sleeve valve's significance]
              </blockquote>
              <cite className="block text-cyan-400 text-center mt-3 font-medium">
                — [Historian name and credentials]
              </cite>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Charles Yale Knight: The Visionary Behind the Innovation</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Charles Yale Knight wasn't a trained engineer—he was a newspaper publisher from Chicago who became fascinated with automobiles in the early 1900s. His lack of formal engineering training might have been his greatest asset, as it allowed him to approach engine design without the preconceptions that limited more conventional thinkers.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Knight's journey began with frustration. Early poppet valve engines were notoriously noisy and unreliable, with valves that frequently stuck or broke. Rather than accepting this as an inevitable limitation, Knight began experimenting with alternative valve systems in his garage, driven by the belief that there had to be a better way.
            </p>

            {/* Space for Knight portrait */}
            <div className="bg-slate-700/30 border-2 border-dashed border-slate-600 rounded-xl p-6 mb-8 text-center">
              <Wrench className="h-12 w-12 text-slate-500 mx-auto mb-3" />
              <p className="text-slate-400">Portrait of Charles Yale Knight in his workshop</p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">The Engineering Challenge</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The sleeve valve concept was elegant in theory but fiendishly difficult to execute. The sliding sleeves had to maintain gas-tight seals while moving continuously at high speeds, all while operating in the extreme heat and pressure environment of an internal combustion engine.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The manufacturing tolerances required were extraordinary for the era. The sleeves had to be machined to within thousandths of an inch, and the cylinder bores had to be perfectly round and smooth. Any deviation would result in poor sealing, excessive wear, or catastrophic failure. This level of precision manufacturing was expensive and technically challenging, requiring specialized equipment and highly skilled machinists.
            </p>

            {/* Historian Quote Space */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 mb-8">
              <blockquote className="text-lg italic text-slate-300 text-center leading-relaxed">
                [Space for historian quote about the manufacturing challenges]
              </blockquote>
              <cite className="block text-cyan-400 text-center mt-3 font-medium">
                — [Historian name and credentials]
              </cite>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Bristol and the Pinnacle of Sleeve Valve Technology</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              While Knight pioneered the sleeve valve concept in automotive applications, it was the British aircraft engine manufacturer Bristol that would push the technology to its absolute limits. During World War II, Bristol's sleeve valve engines powered some of the most important Allied aircraft, including the Bristol Beaufighter and the Hawker Tempest.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Bristol's engineers, led by Roy Fedden, refined Knight's basic concept into engines of extraordinary sophistication. The Bristol Centaurus, with its 18 cylinders arranged in two rows, produced over 2,500 horsepower while running with a smoothness that amazed pilots and ground crews alike. These engines represented the absolute pinnacle of piston engine technology.
            </p>

            {/* Space for Bristol engine image */}
            <div className="bg-slate-700/30 border-2 border-dashed border-slate-600 rounded-xl p-6 mb-8 text-center">
              <Zap className="h-12 w-12 text-slate-500 mx-auto mb-3" />
              <p className="text-slate-400">Bristol Centaurus engine cutaway showing sleeve valve arrangement</p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">The Paradox of Perfection</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The sleeve valve engine's greatest strength—its mechanical sophistication—was also its ultimate weakness. These engines required a level of manufacturing precision and maintenance expertise that made them expensive to produce and difficult to service. While they delivered superior performance, they demanded resources that few manufacturers could justify.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The advent of the jet engine in the late 1940s effectively ended the development of high-performance piston engines for aircraft applications. For automotive use, the sleeve valve's complexity and cost made it uncompetitive with simpler, more reliable poppet valve designs that were "good enough" for most applications.
            </p>

            {/* Historian Quote Space */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 mb-8">
              <blockquote className="text-lg italic text-slate-300 text-center leading-relaxed">
                [Space for historian quote about the technology's decline]
              </blockquote>
              <cite className="block text-cyan-400 text-center mt-3 font-medium">
                — [Historian name and credentials]
              </cite>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Legacy of Innovation</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Though sleeve valve engines disappeared from mainstream use by the 1950s, their influence on engineering thinking persists. They demonstrated that conventional solutions aren't always the best solutions, and that breakthrough performance often requires breakthrough thinking.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              The sleeve valve engine also highlighted the complex relationship between technical excellence and commercial success. Sometimes the "best" solution isn't the one that wins in the marketplace—a lesson that resonates throughout the history of technology.
            </p>

            {/* Space for modern comparison image */}
            <div className="bg-slate-700/30 border-2 border-dashed border-slate-600 rounded-xl p-6 mb-8 text-center">
              <Cog className="h-12 w-12 text-slate-500 mx-auto mb-3" />
              <p className="text-slate-400">Comparison of sleeve valve vs. poppet valve mechanisms</p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Lessons for Modern Engineers</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              The story of the sleeve valve engine offers valuable insights for today's engineers. It reminds us that innovation often comes from questioning fundamental assumptions and that the most elegant solutions aren't always the most practical ones.
            </p>

            <p className="text-slate-300 leading-relaxed">
              In our current era of rapid technological change, the sleeve valve engine serves as both inspiration and cautionary tale. It shows us the importance of pushing technical boundaries while also understanding the practical constraints that determine which innovations succeed and which remain fascinating footnotes in engineering history.
            </p>

            {/* Final Historian Quote Space */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 mb-8">
              <blockquote className="text-lg italic text-slate-300 text-center leading-relaxed">
                [Space for final historian quote about lessons for modern engineering]
              </blockquote>
              <cite className="block text-cyan-400 text-center mt-3 font-medium">
                — [Historian name and credentials]
              </cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SleeveValveEnginePage;