import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cog, Wrench, Plane, Car, Bot, ArrowRight, Rocket } from 'lucide-react';

const ArticlesPage = () => {
  const articles = [
    {
      title: 'The Silent Stroke',
      description: 'How the sleeve valve engine redefined mechanical elegance through innovative engineering that challenged conventional wisdom',
      icon: Cog,
      path: '/sleeve-valve-engine',
      color: 'from-orange-500 to-red-600',
      topics: ['Sleeve Valve Technology', 'Knight Engine', 'Bristol Aircraft', 'Mechanical Innovation'],
      featured: true
    },
    {
      title: 'Your New Article Title',
      description: 'Brief description of what your article covers and why it\'s interesting',
      icon: Cog,
      path: '/your-new-article',
      color: 'from-blue-500 to-purple-600',
      topics: ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'],
      featured: false
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Featured</span> Articles
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover how centuries of invention and ingenuity laid the foundation for modern engineering. Each article traces the breakthroughs, ideas, and mechanical marvels that changed history!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {articles.map((article, index) => {
            const Icon = article.icon;
            return (
              <Link
                key={article.path}
                to={article.path}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-10 hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="text-center">
                  <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${article.color} mb-6`}>
                    <Icon className="h-12 w-12 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 leading-relaxed text-lg">
                    {article.description}
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {article.topics.map((topic) => (
                      <span 
                        key={topic}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/30"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="font-medium">Read Featured Article</span>
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
            <h2 className="text-2xl font-bold text-white mb-4">Looking for More Engineering Topics?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Explore our comprehensive collection of engineering disciplines covering mechanical, electrical, 
              civil, aerospace, and many other fields of engineering.
            </p>
            <Link to="/engineering-disciplines" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium">
              Browse All Engineering Disciplines <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;