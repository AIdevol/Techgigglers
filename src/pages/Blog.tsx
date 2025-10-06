import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag, Search, TrendingUp, Sparkles, BookOpen, Code, Lightbulb, Rocket } from 'lucide-react';

const Blog = () => {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Development', icon: <Code className="w-4 h-4" /> },
    { name: 'Design', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'Business', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Innovation', icon: <Lightbulb className="w-4 h-4" /> }
  ];

  const featuredPost = {
    title: "The Future of Web Development: What's Coming in 2025",
    excerpt: "From AI-powered coding assistants to revolutionary frameworks, we explore the trends that are reshaping how we build for the web.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='600'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF6B35;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23F7931E;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad1)' width='1200' height='600'/%3E%3Ctext x='600' y='280' font-family='Arial,sans-serif' font-size='80' font-weight='bold' fill='white' text-anchor='middle'%3EFuture of Web%3C/text%3E%3Ctext x='600' y='360' font-family='Arial,sans-serif' font-size='60' font-weight='bold' fill='white' text-anchor='middle'%3EDevelopment 2025%3C/text%3E%3C/svg%3E",
    category: "Development",
    date: "October 5, 2025",
    readTime: "8 min read",
    author: "Marcus Rodriguez"
  };

  const posts = [
    {
      title: "Building Scalable React Applications: Lessons from the Trenches",
      excerpt: "After shipping 50+ React apps, here are the architecture patterns that actually work in production.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2361DAFB;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%230088CC;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g1)' width='800' height='500'/%3E%3Ctext x='400' y='250' font-family='Arial,sans-serif' font-size='60' font-weight='bold' fill='white' text-anchor='middle'%3EReact Scale%3C/text%3E%3C/svg%3E",
      category: "Development",
      date: "October 3, 2025",
      readTime: "6 min read",
      author: "James Kumar"
    },
    {
      title: "Design Systems That Actually Get Used",
      excerpt: "Why most design systems fail and how to create one your team will love working with.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Cdefs%3E%3ClinearGradient id='g2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23A259FF;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23FF6B9D;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g2)' width='800' height='500'/%3E%3Ctext x='400' y='250' font-family='Arial,sans-serif' font-size='60' font-weight='bold' fill='white' text-anchor='middle'%3EDesign Systems%3C/text%3E%3C/svg%3E",
      category: "Design",
      date: "October 1, 2025",
      readTime: "5 min read",
      author: "Emily Watson"
    },
    {
      title: "From Idea to MVP in 30 Days: A Founder's Guide",
      excerpt: "The exact framework we use to help startups validate and launch products fast without breaking the bank.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Cdefs%3E%3ClinearGradient id='g3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310B981;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%2306B6D4;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g3)' width='800' height='500'/%3E%3Ctext x='400' y='250' font-family='Arial,sans-serif' font-size='60' font-weight='bold' fill='white' text-anchor='middle'%3EMVP in 30 Days%3C/text%3E%3C/svg%3E",
      category: "Business",
      date: "September 28, 2025",
      readTime: "7 min read",
      author: "Sarah Chen"
    },
    {
      title: "The AI Tools We Actually Use Every Day",
      excerpt: "No hype, no BS. Here are the AI tools that genuinely make us faster and better at our jobs.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Cdefs%3E%3ClinearGradient id='g4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF6B35;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23F7931E;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g4)' width='800' height='500'/%3E%3Ctext x='400' y='250' font-family='Arial,sans-serif' font-size='60' font-weight='bold' fill='white' text-anchor='middle'%3EAI Tools%3C/text%3E%3C/svg%3E",
      category: "Innovation",
      date: "September 25, 2025",
      readTime: "4 min read",
      author: "Marcus Rodriguez"
    },
    {
      title: "Why Your Website Needs a Performance Budget",
      excerpt: "Slow websites lose customers. Here's how to set performance goals that your team actually follows.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Cdefs%3E%3ClinearGradient id='g5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23EF4444;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23F59E0B;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g5)' width='800' height='500'/%3E%3Ctext x='400' y='250' font-family='Arial,sans-serif' font-size='60' font-weight='bold' fill='white' text-anchor='middle'%3EPerformance%3C/text%3E%3C/svg%3E",
      category: "Development",
      date: "September 22, 2025",
      readTime: "6 min read",
      author: "James Kumar"
    },
    {
      title: "The Psychology Behind Addictive User Interfaces",
      excerpt: "What makes some apps impossible to put down? We break down the UX patterns that keep users engaged.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Cdefs%3E%3ClinearGradient id='g6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%238B5CF6;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23EC4899;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g6)' width='800' height='500'/%3E%3Ctext x='400' y='250' font-family='Arial,sans-serif' font-size='60' font-weight='bold' fill='white' text-anchor='middle'%3EUX Psychology%3C/text%3E%3C/svg%3E",
      category: "Design",
      date: "September 20, 2025",
      readTime: "5 min read",
      author: "Emily Watson"
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F4EF' }}>
      {/* Hero Section */}
      <div className="bg-white border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">TechGigglers Blog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stories, insights, and lessons from the tech trenches
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Real talk about building digital products, growing teams, and staying sane in the fast-paced world of technology.
            </p>
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-full focus:border-orange-500 focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 cursor-pointer group">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img 
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">
                  <Tag className="w-3 h-3" />
                  {featuredPost.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {featuredPost.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By {featuredPost.author}</span>
                <button className="inline-flex items-center gap-2 text-orange-500 font-bold hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(category.name)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                selectedCategory === category.name
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-500'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredPost(idx)}
              onMouseLeave={() => setHoveredPost(null)}
              className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredPost === idx ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">By {post.author}</span>
                  <ArrowRight className={`w-4 h-4 text-orange-500 transition-transform ${
                    hoveredPost === idx ? 'translate-x-1' : ''
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="bg-gray-900 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-orange-500 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-400 rounded-full blur-2xl"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <Rocket className="w-12 h-12 text-orange-500 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Never miss a post
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get our latest articles, tutorials, and insights delivered straight to your inbox. No spam, just quality content.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full focus:outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Join 2,500+ developers and designers who read our newsletter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;