import React, { useState } from 'react';
import { Users, Target, Lightbulb, Award, ArrowRight, Code, Rocket, Heart, Mail, Sparkles } from 'lucide-react';

const AboutUs = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies to deliver solutions that stand out."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Centric",
      description: "Your success is our mission. We build lasting partnerships through transparency and dedication."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Quality isn't negotiable. We deliver pixel-perfect, performance-optimized solutions every time."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion Driven",
      description: "We love what we do, and it shows in every line of code and every design we create."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF6B35;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23F7931E;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g1)' width='400' height='400'/%3E%3Ctext x='200' y='200' font-family='Arial,sans-serif' font-size='120' fill='white' text-anchor='middle' dy='.3em'%3ESC%3C/text%3E%3C/svg%3E",
      bio: "15+ years turning wild ideas into reality"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cdefs%3E%3ClinearGradient id='g2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF6B35;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23F7931E;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g2)' width='400' height='400'/%3E%3Ctext x='200' y='200' font-family='Arial,sans-serif' font-size='120' fill='white' text-anchor='middle' dy='.3em'%3EMR%3C/text%3E%3C/svg%3E",
      bio: "Building scalable systems that actually work"
    },
    {
      name: "Emily Watson",
      role: "Creative Director",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cdefs%3E%3ClinearGradient id='g3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF6B35;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23F7931E;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g3)' width='400' height='400'/%3E%3Ctext x='200' y='200' font-family='Arial,sans-serif' font-size='120' fill='white' text-anchor='middle' dy='.3em'%3EEW%3C/text%3E%3C/svg%3E",
      bio: "Crafting experiences people remember"
    },
    {
      name: "James Kumar",
      role: "Lead Developer",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cdefs%3E%3ClinearGradient id='g4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF6B35;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23F7931E;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g4)' width='400' height='400'/%3E%3Ctext x='200' y='200' font-family='Arial,sans-serif' font-size='120' fill='white' text-anchor='middle' dy='.3em'%3EJK%3C/text%3E%3C/svg%3E",
      bio: "Turning coffee into elegant code since 2015"
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "8+", label: "Years Experience" },
    { number: "25+", label: "Team Members" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F4EF' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">About TechGigglers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We're not your typical tech agency
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              We're a team of creators, problem-solvers, and tech enthusiasts who believe great digital products should be both powerful and delightful. Since 2017, we've been helping businesses transform their ideas into reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all">
                Let's Talk
              </button>
              <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-8 py-4 rounded-full transition-all">
                See Our Work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-white border-y-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                The story behind the giggles
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Back in 2017, we started TechGigglers with a simple mission: make technology less intimidating and more exciting. We noticed that too many agencies were producing sterile, corporate solutions that nobody actually enjoyed using.
                </p>
                <p>
                  So we built something different. A place where technical excellence meets genuine creativity. Where your project manager actually responds to emails. Where we celebrate wins together and tackle challenges as a team.
                </p>
                <p>
                  Today, we've grown to a team of 25+ talented individuals, but we've kept that same spirit. We're still the team that gets genuinely excited about solving your problems, no matter how complex.
                </p>
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl border-2 border-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <Code className="w-20 h-20 text-orange-500 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Building amazing things since 2017</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What we stand for
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            These aren't just words on a wall. They're the principles we live by every single day.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`p-6 bg-white border-2 border-gray-200 rounded-xl transition-all duration-200 cursor-pointer ${
                hoveredCard === idx ? 'shadow-lg border-orange-500 -translate-y-1' : 'hover:border-gray-300'
              }`}
            >
              <div className={`inline-flex p-3 bg-orange-100 text-orange-500 rounded-lg mb-4 transition-transform duration-200 ${
                hoveredCard === idx ? 'scale-110' : ''
              }`}>
                {value.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white border-y-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet the team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              The people who make the magic happen (and answer your late-night Slack messages).
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-xl border-2 border-gray-200 mb-4 aspect-square">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm">{member.bio}</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-orange-500 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="bg-gray-900 rounded-2xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-orange-500 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-400 rounded-full blur-2xl"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's build something amazing together
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Whether you have a clear vision or just a spark of an idea, we'd love to hear from you. Let's chat about what we can create together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all inline-flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get in Touch
              </button>
              <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;