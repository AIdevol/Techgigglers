import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Shield, Rocket, Code, Sparkles, Star, ChevronRight, Play, CheckCircle } from 'lucide-react';

const HomeView = () => {
  const [activeService, setActiveService] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      description: "Blazing-fast, responsive websites that convert visitors into customers.",
      features: ["React & Next.js", "Performance Optimized", "SEO Ready"]
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Mobile Apps",
      description: "Native and cross-platform apps that users love to use daily.",
      features: ["iOS & Android", "React Native", "Cloud Integration"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that make your brand unforgettable.",
      features: ["User Research", "Prototyping", "Design Systems"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Consulting",
      description: "Strategic guidance to help your tech stack scale with your business.",
      features: ["Architecture Review", "Tech Strategy", "Team Training"]
    }
  ];

  const projects = [
    {
      title: "FinanceFlow",
      category: "FinTech Platform",
      description: "Revolutionary mobile banking experience",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Cdefs%3E%3ClinearGradient id='p1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310B981;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23059669;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23p1)' width='600' height='400'/%3E%3Ctext x='300' y='200' font-family='Arial,sans-serif' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3E💰%3C/text%3E%3C/svg%3E",
      stats: "2M+ Users"
    },
    {
      title: "HealthHub",
      category: "Healthcare App",
      description: "Connecting patients with doctors instantly",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Cdefs%3E%3ClinearGradient id='p2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233B82F6;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%232563EB;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23p2)' width='600' height='400'/%3E%3Ctext x='300' y='200' font-family='Arial,sans-serif' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3E🏥%3C/text%3E%3C/svg%3E",
      stats: "500K+ Downloads"
    },
    {
      title: "ShopSmart",
      category: "E-Commerce",
      description: "Next-gen shopping with AI recommendations",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Cdefs%3E%3ClinearGradient id='p3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23F59E0B;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23D97706;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23p3)' width='600' height='400'/%3E%3Ctext x='300' y='200' font-family='Arial,sans-serif' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3E🛍️%3C/text%3E%3C/svg%3E",
      stats: "1M+ Orders"
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "CEO, StartupXYZ",
      content: "TechGigglers transformed our vision into reality. The team's expertise and dedication exceeded all expectations.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "Product Lead, InnovateCo",
      content: "Working with TechGigglers was a game-changer. They delivered on time, on budget, and beyond quality standards.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Founder, TechVenture",
      content: "The best development partner we've ever worked with. Responsive, creative, and technically brilliant.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F4EF' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white border-b-2 border-gray-200">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 bg-orange-50 border border-orange-200 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-bold text-orange-600">Building the Future, One Pixel at a Time</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              We turn your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                wild ideas
              </span>
              into reality
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl">
              Award-winning digital products that don't just work—they wow. From startups to enterprises, we build experiences people actually want to use.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-8 py-4 rounded-full transition-all inline-flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
            
            <div className="flex flex-wrap items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-600 font-medium">150+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-600 font-medium">98% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-600 font-medium">8+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">What We Do</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Services that scale with you
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to launch and beyond, we've got you covered with end-to-end solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveService(idx)}
              className={`p-8 bg-white border-2 rounded-2xl transition-all duration-300 cursor-pointer ${
                activeService === idx 
                  ? 'border-orange-500 shadow-xl -translate-y-2' 
                  : 'border-gray-200 hover:border-gray-300 hover:-translate-y-1'
              }`}
            >
              <div className={`inline-flex p-4 bg-orange-100 text-orange-500 rounded-xl mb-6 transition-transform duration-300 ${
                activeService === idx ? 'scale-110' : ''
              }`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <ChevronRight className="w-4 h-4 text-orange-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      <div className="bg-white border-y-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Our Work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Projects we're proud of
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results for real businesses. Here's a glimpse of what we've been cooking up.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 mb-6 aspect-[3/2]">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-white text-lg font-bold mb-2">{project.description}</p>
                      <div className="inline-flex items-center gap-2 text-white text-sm font-medium">
                        View Case Study
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-gray-900">
                    {project.stats}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                    <p className="text-sm text-orange-500 font-medium">{project.category}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-orange-500 transition-colors" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-8 py-4 rounded-full transition-all inline-flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Don't just take our word for it
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-300 transition-all">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white border-t-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-orange-300 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Ready to make magic happen?
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Let's chat about your project. Whether you need a website, an app, or just some solid advice, we're here to help you succeed.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-5 rounded-full transition-all inline-flex items-center gap-2 shadow-2xl text-lg">
                  Let's Talk
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-bold px-10 py-5 rounded-full transition-all text-lg">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;