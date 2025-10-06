import { useState } from 'react';
import { BookOpen, Code, Lightbulb, ArrowRight, Search, Video, Headphones, Sparkles, ExternalLink } from 'lucide-react';

const Resources = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Resources', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'guides', label: 'Guides', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'tutorials', label: 'Tutorials', icon: <Code className="w-4 h-4" /> },
    { id: 'videos', label: 'Videos', icon: <Video className="w-4 h-4" /> },
    { id: 'podcasts', label: 'Podcasts', icon: <Headphones className="w-4 h-4" /> }
  ];

  const resources = [
    {
      title: "Complete Guide to Modern Web Development",
      category: "guides",
      type: "Guide",
      description: "Everything you need to know about building scalable, performant web applications in 2025.",
      readTime: "15 min read",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='r1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF6B35;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23F7931E;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23r1)' width='400' height='300'/%3E%3Ctext x='200' y='150' font-family='Arial,sans-serif' font-size='80' fill='white' text-anchor='middle' dy='.3em'%3E📚%3C/text%3E%3C/svg%3E",
      featured: true
    },
    {
      title: "Building RESTful APIs with Node.js",
      category: "tutorials",
      type: "Tutorial",
      description: "Step-by-step tutorial on creating production-ready REST APIs with authentication and best practices.",
      readTime: "25 min read",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='r2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF6B35;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23F7931E;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23r2)' width='400' height='300'/%3E%3Ctext x='200' y='150' font-family='Arial,sans-serif' font-size='80' fill='white' text-anchor='middle' dy='.3em'%3E⚙️%3C/text%3E%3C/svg%3E",
      featured: false
    },
    {
      title: "React Performance Optimization",
      category: "videos",
      type: "Video",
      description: "Learn proven techniques to make your React applications lightning fast.",
      readTime: "45 min watch",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='r3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF6B35;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23F7931E;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23r3)' width='400' height='300'/%3E%3Ctext x='200' y='150' font-family='Arial,sans-serif' font-size='80' fill='white' text-anchor='middle' dy='.3em'%3E▶️%3C/text%3E%3C/svg%3E",
      featured: true
    },
    {
      title: "The Future of Web Development",
      category: "podcasts",
      type: "Podcast",
      description: "Join our CTO as he discusses emerging trends and what's next for the web.",
      readTime: "1 hr listen",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='r4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF6B35;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23F7931E;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23r4)' width='400' height='300'/%3E%3Ctext x='200' y='150' font-family='Arial,sans-serif' font-size='80' fill='white' text-anchor='middle' dy='.3em'%3E🎙️%3C/text%3E%3C/svg%3E",
      featured: false
    },
    {
      title: "UI/UX Design Principles That Matter",
      category: "guides",
      type: "Guide",
      description: "Master the fundamentals of creating user interfaces that people love.",
      readTime: "12 min read",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='r5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF6B35;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23F7931E;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23r5)' width='400' height='300'/%3E%3Ctext x='200' y='150' font-family='Arial,sans-serif' font-size='80' fill='white' text-anchor='middle' dy='.3em'%3E🎨%3C/text%3E%3C/svg%3E",
      featured: false
    },
    {
      title: "Building a Scalable Architecture",
      category: "tutorials",
      type: "Tutorial",
      description: "Learn how to design systems that grow with your business.",
      readTime: "30 min read",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='r6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF6B35;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23F7931E;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23r6)' width='400' height='300'/%3E%3Ctext x='200' y='150' font-family='Arial,sans-serif' font-size='80' fill='white' text-anchor='middle' dy='.3em'%3E🏗️%3C/text%3E%3C/svg%3E",
      featured: false
    },
    {
      title: "TypeScript Deep Dive",
      category: "videos",
      type: "Video",
      description: "From basics to advanced patterns in TypeScript development.",
      readTime: "2 hr watch",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='r7' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF6B35;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23F7931E;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23r7)' width='400' height='300'/%3E%3Ctext x='200' y='150' font-family='Arial,sans-serif' font-size='80' fill='white' text-anchor='middle' dy='.3em'%3E📘%3C/text%3E%3C/svg%3E",
      featured: false
    },
    {
      title: "DevOps Best Practices",
      category: "podcasts",
      type: "Podcast",
      description: "Expert insights on CI/CD, deployment strategies, and infrastructure management.",
      readTime: "50 min listen",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='r8' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF6B35;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23F7931E;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23r8)' width='400' height='300'/%3E%3Ctext x='200' y='150' font-family='Arial,sans-serif' font-size='80' fill='white' text-anchor='middle' dy='.3em'%3E🚀%3C/text%3E%3C/svg%3E",
      featured: false
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(r => r.featured);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F4EF' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Learning Hub</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Knowledge that empowers
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Dive into our collection of guides, tutorials, and insights. Whether you're just starting out or leveling up your skills, we've got something for you.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-full focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b-2 border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Resources */}
      {activeCategory === 'all' && searchQuery === '' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-lg text-gray-600">
              Our most popular and impactful content
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredResources.map((resource, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-white border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer ${
                  hoveredCard === idx ? 'shadow-xl border-orange-500 -translate-y-1' : ''
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className={`w-full h-full object-cover transition-transform duration-300 ${
                      hoveredCard === idx ? 'scale-105' : ''
                    }`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-gray-900 font-bold px-3 py-1 rounded-full text-sm">
                      {resource.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">
                      {resource.readTime}
                    </span>
                    <button className="text-orange-500 font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {activeCategory === 'all' && searchQuery === '' ? 'All Resources' : 'Results'}
          </h2>
          <p className="text-lg text-gray-600">
            {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'} found
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx + 100)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-white border-2 border-gray-200 rounded-xl overflow-hidden transition-all duration-200 cursor-pointer ${
                hoveredCard === idx + 100 ? 'shadow-lg border-orange-500 -translate-y-1' : ''
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    hoveredCard === idx + 100 ? 'scale-105' : ''
                  }`}
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white text-gray-900 font-bold px-3 py-1 rounded-full text-xs">
                    {resource.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">
                    {resource.readTime}
                  </span>
                  <button className="text-orange-500 font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                    View
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredResources.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600">Try adjusting your search or filter</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="bg-gray-900 rounded-2xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-orange-500 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-400 rounded-full blur-2xl"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <Lightbulb className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Want to contribute?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              We're always looking for fresh perspectives and expert insights. Share your knowledge with our community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all inline-flex items-center gap-2">
                Submit Content
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;