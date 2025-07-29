import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Settings, Wrench, Zap, Gauge } from 'lucide-react';

const YourNewArticlePage = () => {
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
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl mr-4">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Your Article Title</h1>
            <div className="ml-4 text-slate-400 text-lg">Your subtitle here</div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Settings className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Key Concept 1</h3>
                <p className="text-slate-400 text-sm">Brief description</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Wrench className="h-6 w-6 text-green-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Key Concept 2</h3>
                <p className="text-slate-400 text-sm">Brief description</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Zap className="h-6 w-6 text-yellow-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Key Concept 3</h3>
                <p className="text-slate-400 text-sm">Brief description</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <Gauge className="h-6 w-6 text-red-400 mb-2" />
                <h3 className="text-white font-semibold mb-2">Key Concept 4</h3>
                <p className="text-slate-400 text-sm">Brief description</p>
              </div>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Your opening paragraph goes here. This should hook the reader and introduce 
              the main topic of your article.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Your First Section</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Your content here. You can add multiple paragraphs, technical details, 
              and historical context.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6">
              Continue with more detailed explanations, examples, and insights.
            </p>

            {/* Optional: Add a quote section */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 mb-8">
              <blockquote className="text-lg italic text-slate-300 text-center leading-relaxed">
                "Your inspiring quote here"
              </blockquote>
              <cite className="block text-cyan-400 text-center mt-3 font-medium">
                — Attribution
              </cite>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Another Section</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              More content sections as needed.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
            <p className="text-slate-300 leading-relaxed">
              Wrap up your article with key takeaways and final thoughts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourNewArticlePage;