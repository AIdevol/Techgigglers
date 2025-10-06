import React, { useState } from 'react';
import { Code, Smartphone, Palette, Zap, Rocket, Search, ShoppingCart, Database, ArrowRight, CheckCircle, Sparkles, Target, Clock, Shield } from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      tagline: "Websites that work as hard as you do",
      description: "From sleek landing pages to complex web applications, we build digital experiences that convert visitors into customers.",
      features: [
        "Custom web applications",
        "E-commerce solutions",
        "Progressive web apps (PWAs)",
        "API development & integration"
      ],
      color: "orange"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      tagline: "Native & cross-platform magic",
      description: "Beautiful, fast mobile apps that users love. Whether iOS, Android, or both, we've got you covered.",
      features: [
        "iOS & Android development",
        "React Native apps",
        "Flutter applications",
        "App Store optimization"
      ],
      color: "blue"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      tagline: "Design that delights",
      description: "We create interfaces that are not just pretty, but intuitive and conversion-focused.",
      features: [
        "User research & testing",
        "Wireframing & prototyping",
        "Design systems",
        "Brand identity design"
      ],
      color: "purple"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Product Strategy",
      tagline: "From idea to launch",
      description: "Need help figuring out what to build? We'll help you validate ideas and create a roadmap to success.",
      features: [
        "Product ideation workshops",
        "Market research",
        "MVP development",
        "Go-to-market strategy"
      ],
      color: "green"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO & Marketing",
      tagline: "Get found, get chosen",
      description: "Beautiful websites are useless if nobody sees them. We help you climb the search rankings and reach your audience.",
      features: [
        "Technical SEO audits",
        "Content optimization",
        "Performance marketing",
        "Analytics & reporting"
      ],
      color: "red"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Cloud & DevOps",
      tagline: "Infrastructure that scales",
      description: "We build robust, scalable backend systems that grow with your business.",
      features: [
        "Cloud architecture (AWS, Azure, GCP)",
        "CI/CD pipelines",
        "Database optimization",
        "Security & compliance"
      ],
      color: "indigo"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into your business, goals, and challenges. No cookie-cutter solutions here."
    },
    {
      step: "02",
      title: "Strategy",
      description: "We craft a detailed roadmap with clear milestones, timelines, and deliverables."
    },
    {
      step: "03",
      title: "Design",
      description: "Our designers create beautiful mockups that bring your vision to life."
    },
    {
      step: "04",
      title: "Development",
      description: "Our developers turn designs into functional, performant reality."
    },
    {
      step: "05",
      title: "Testing",
      description: "Rigorous QA ensures everything works perfectly before launch."
    },
    {
      step: "06",
      title: "Launch & Support",
      description: "We launch your product and stick around to ensure smooth sailing."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Focused",
      description: "We measure success by your success. Every decision is driven by your business goals."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "On Time, Every Time",
      description: "We respect deadlines and your budget. No surprises, just reliable delivery."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Future-Proof Tech",
      description: "We build with modern, scalable technologies that won't be outdated next year."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Transparent Process",
      description: "You'll always know what we're working on and why. Weekly updates, open communication."
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F4EF' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We build digital products that actually work
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Whether you need a stunning website, a powerful mobile app, or a complete digital transformation, we've got the skills and the passion to make it happen.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all inline-flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What we're really good at
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Full-stack expertise with a focus on delivering real business value.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredService(idx)}
              onMouseLeave={() => setHoveredService(null)}
              className={`p-8 bg-white border-2 border-gray-200 rounded-2xl transition-all duration-300 cursor-pointer ${
                hoveredService === idx ? 'shadow-xl border-orange-500 -translate-y-2' : 'hover:border-gray-300'
              }`}
            >
              <div className={`inline-flex p-4 bg-orange-100 text-orange-500 rounded-xl mb-6 transition-transform duration-300 ${
                hoveredService === idx ? 'scale-110 rotate-3' : ''
              }`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-orange-500 font-bold mb-4">{service.tagline}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white border-y-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How we work
            </h2>
            <p className="text-lg text-gray-600">
              A proven process that takes you from idea to launch (and beyond).
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((phase, idx) => (
              <div key={idx} className="relative p-6 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl">
                <div className="text-5xl font-bold text-orange-500 opacity-20 mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why work with us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            We're not the only tech agency out there. Here's what makes us different.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((reason, idx) => (
            <div key={idx} className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-orange-500 transition-all duration-200">
              <div className="inline-flex p-3 bg-orange-100 text-orange-500 rounded-lg mb-4">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <Rocket className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to start your project?
            </h2>
            <p className="text-lg sm:text-xl text-orange-50 mb-8">
              Let's talk about your goals and how we can help you achieve them. First consultation is free, no strings attached.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-orange-500 hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all inline-flex items-center gap-2">
                Schedule a Call
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 font-bold px-8 py-4 rounded-full transition-all">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;