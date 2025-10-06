import React, { useState } from 'react';
import { Lightbulb, MessageSquare, Palette, Code, Rocket, CheckCircle, ArrowRight, Sparkles, Zap, Target, Users, Clock, TrendingUp } from 'lucide-react';

const OurProcess = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const processSteps = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      number: "01",
      title: "Discovery & Strategy",
      subtitle: "Getting to know you (and your big ideas)",
      description: "We kick things off with deep-dive conversations to understand your goals, challenges, and vision. No corporate jargon, just real talk about what you need and how we can help.",
      deliverables: ["Project roadmap", "Technical specifications", "Timeline & milestones"],
      duration: "1-2 weeks"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      number: "02",
      title: "Design & Prototyping",
      subtitle: "Where ideas become visual magic",
      description: "Our design team creates beautiful, intuitive interfaces that your users will love. We prototype, iterate, and refine until every pixel is perfect.",
      deliverables: ["Wireframes", "High-fidelity mockups", "Interactive prototypes"],
      duration: "2-3 weeks"
    },
    {
      icon: <Code className="w-8 h-8" />,
      number: "03",
      title: "Development",
      subtitle: "Building your dream, one line at a time",
      description: "This is where the magic happens. Our developers transform designs into clean, efficient, and scalable code. You'll see progress every step of the way with regular demos.",
      deliverables: ["Working application", "Code documentation", "Progress updates"],
      duration: "4-8 weeks"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      number: "04",
      title: "Testing & QA",
      subtitle: "Breaking things so you don't have to",
      description: "We rigorously test every feature, on every device, in every scenario. Our QA team makes sure your product is bulletproof before it sees the light of day.",
      deliverables: ["Test reports", "Bug fixes", "Performance optimization"],
      duration: "1-2 weeks"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      number: "05",
      title: "Launch & Support",
      subtitle: "Ready for liftoff (and beyond)",
      description: "We handle the deployment, monitor everything closely, and stick around to make sure your launch is smooth. Plus, we're here for ongoing support whenever you need us.",
      deliverables: ["Live deployment", "Training materials", "Ongoing maintenance"],
      duration: "Ongoing"
    }
  ];

  const principles = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration First",
      description: "You're not just a client, you're part of the team. We work together, share ideas, and celebrate wins."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Speed + Quality",
      description: "Fast delivery doesn't mean cutting corners. We move quickly without sacrificing excellence."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Focused on Results",
      description: "Pretty designs are nice, but we care about what matters: your business goals and user success."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Continuous Improvement",
      description: "Launch is just the beginning. We iterate, optimize, and help your product grow over time."
    }
  ];

  const highlights = [
    { label: "Average Project Timeline", value: "8-12 weeks" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "On-Time Delivery", value: "95%" },
    { label: "Post-Launch Support", value: "Always" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F4EF' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Our Process</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              From "what if?" to "wow!"
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Here's how we turn your ideas into digital products that people actually love. No smoke and mirrors, just a proven process that works.
            </p>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, idx) => (
            <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">
                {highlight.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{highlight.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The journey from idea to impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Every project is unique, but our process is consistent. Here's how we work our magic.
          </p>
        </div>

        <div className="space-y-6">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveStep(idx)}
              onMouseLeave={() => setActiveStep(null)}
              className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                activeStep === idx 
                  ? 'border-orange-500 shadow-xl' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="grid lg:grid-cols-12 gap-6 p-6 sm:p-8">
                <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4">
                  <div className={`inline-flex p-4 rounded-xl transition-all duration-300 ${
                    activeStep === idx 
                      ? 'bg-orange-500 text-white scale-110' 
                      : 'bg-orange-100 text-orange-500'
                  }`}>
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-300">{step.number}</div>
                </div>

                <div className="lg:col-span-11 space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-orange-500 font-medium mb-3">{step.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 pt-4">
                    <div>
                      <div className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                        Key Deliverables
                      </div>
                      <ul className="space-y-2">
                        {step.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                        Typical Duration
                      </div>
                      <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 font-bold px-4 py-2 rounded-full">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Principles Section */}
      <div className="bg-white border-y-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How we work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              These principles guide everything we do, from first call to final launch.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, idx) => (
              <div
                key={idx}
                className="p-6 bg-orange-50 border-2 border-orange-100 rounded-xl hover:border-orange-300 transition-all"
              >
                <div className="inline-flex p-3 bg-white text-orange-500 rounded-lg mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{principle.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transparency Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl border-2 border-gray-200 flex items-center justify-center order-2 lg:order-1">
            <div className="text-center p-8">
              <Lightbulb className="w-20 h-20 text-orange-500 mx-auto mb-4" />
              <p className="text-gray-600 font-medium text-lg">Transparent. Collaborative. Effective.</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              No surprises, just results
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We believe in radical transparency. You'll know exactly what we're working on, when it'll be done, and what it'll cost. No hidden fees, no scope creep, no BS.
              </p>
              <p>
                Regular check-ins, progress demos, and open communication channels mean you're never in the dark. We're building this together, and that means keeping you in the loop every step of the way.
              </p>
              <p>
                Got questions? Want to change direction? See something you love (or don't)? Speak up! We're here to listen and adapt. Your feedback makes the final product better.
              </p>
            </div>
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
              Ready to start your project?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Let's hop on a call and talk about your vision. No pressure, no sales pitch, just a genuine conversation about what we can build together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all inline-flex items-center gap-2">
                Schedule a Call
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all">
                See Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;