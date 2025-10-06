import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Users, Heart, Zap, Coffee, Rocket, ArrowRight, Sparkles, TrendingUp, Award, Laptop } from 'lucide-react';

const Career = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', label: 'All Positions' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'design', label: 'Design' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'sales', label: 'Sales' }
  ];

  const perks = [
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Remote Friendly",
      description: "Work from anywhere. We trust you to do great work wherever you're most productive."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth & Learning",
      description: "Annual learning budget, conference tickets, and mentorship programs to level up your skills."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and fitness stipends."
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Unlimited PTO",
      description: "Take the time you need to recharge. We believe in work-life balance, not burnout."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Amazing Team",
      description: "Work with talented, passionate people who genuinely enjoy what they do."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Competitive Pay",
      description: "Market-leading salaries, equity options, and performance bonuses."
    }
  ];

  const jobOpenings = [
    {
      title: "Senior Full Stack Developer",
      department: "engineering",
      location: "Remote / New York",
      type: "Full-time",
      salary: "$120k - $180k",
      description: "Build scalable web applications using modern technologies. Lead technical decisions and mentor junior developers.",
      skills: ["React", "Node.js", "TypeScript", "AWS"]
    },
    {
      title: "Product Designer",
      department: "design",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$100k - $150k",
      description: "Create beautiful, intuitive interfaces that users love. Work closely with product and engineering teams.",
      skills: ["Figma", "UI/UX", "Prototyping", "Design Systems"]
    },
    {
      title: "DevOps Engineer",
      department: "engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$130k - $170k",
      description: "Build and maintain our infrastructure. Ensure reliability, scalability, and security across all systems.",
      skills: ["Kubernetes", "Docker", "CI/CD", "Terraform"]
    },
    {
      title: "Content Marketing Manager",
      department: "marketing",
      location: "Remote / Austin",
      type: "Full-time",
      salary: "$80k - $120k",
      description: "Drive our content strategy and create compelling stories that resonate with our audience.",
      skills: ["SEO", "Content Strategy", "Analytics", "Writing"]
    },
    {
      title: "Sales Development Representative",
      department: "sales",
      location: "Remote / Boston",
      type: "Full-time",
      salary: "$60k - $90k + Commission",
      description: "Connect with potential clients and help them understand how we can solve their problems.",
      skills: ["Communication", "CRM", "Lead Generation", "Negotiation"]
    },
    {
      title: "Frontend Developer",
      department: "engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $140k",
      description: "Craft pixel-perfect user interfaces with modern frameworks. Collaborate with designers to bring visions to life.",
      skills: ["React", "CSS", "JavaScript", "Responsive Design"]
    },
    {
      title: "Brand Designer",
      department: "design",
      location: "Remote / Los Angeles",
      type: "Contract",
      salary: "$80k - $110k",
      description: "Shape our visual identity and create stunning brand assets that tell our story.",
      skills: ["Illustration", "Branding", "Adobe Suite", "Motion Design"]
    },
    {
      title: "Customer Success Manager",
      department: "sales",
      location: "Remote",
      type: "Full-time",
      salary: "$70k - $100k",
      description: "Ensure our clients are thriving. Be their advocate and help them achieve their goals.",
      skills: ["Relationship Building", "Problem Solving", "Communication", "Empathy"]
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const values = [
    {
      emoji: "🚀",
      title: "Move Fast",
      description: "We ship quickly, iterate constantly, and aren't afraid to experiment."
    },
    {
      emoji: "🤝",
      title: "Collaborate",
      description: "Great ideas come from diverse perspectives. We work together, not in silos."
    },
    {
      emoji: "💡",
      title: "Stay Curious",
      description: "We're always learning, questioning, and pushing boundaries."
    },
    {
      emoji: "🎯",
      title: "Own It",
      description: "Take responsibility, make decisions, and see things through."
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
              <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Join Our Team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build your career with people who care
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              We're looking for talented, passionate people who want to make an impact. If you love solving hard problems and working with a team that genuinely supports each other, you'll fit right in.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all">
                View Open Positions
              </button>
              <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-8 py-4 rounded-full transition-all">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
              25+
            </div>
            <div className="text-sm sm:text-base text-gray-600 font-medium">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
              8
            </div>
            <div className="text-sm sm:text-base text-gray-600 font-medium">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
              4.9★
            </div>
            <div className="text-sm sm:text-base text-gray-600 font-medium">Glassdoor Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
              95%
            </div>
            <div className="text-sm sm:text-base text-gray-600 font-medium">Employee Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white border-y-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How we work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Our values aren't just posters on a wall. They're the principles that guide every decision we make.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="p-6 bg-orange-50 border-2 border-orange-100 rounded-xl hover:border-orange-500 transition-all duration-200"
              >
                <div className="text-4xl mb-4">{value.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Perks Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Perks that actually matter
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            We invest in your growth, wellbeing, and happiness because when you thrive, we all do.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk, idx) => (
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
                {perk.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{perk.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions Section */}
      <div className="bg-white border-y-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Open positions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Find the role that's right for you. Can't find what you're looking for? Send us your resume anyway.
            </p>
            
            {/* Department Filter */}
            <div className="flex flex-wrap gap-3">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedDepartment === dept.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {dept.label}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.map((job, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx + 100)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-6 bg-white border-2 border-gray-200 rounded-xl transition-all duration-200 cursor-pointer ${
                  hoveredCard === idx + 100 ? 'shadow-lg border-orange-500' : 'hover:border-gray-300'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Briefcase className="w-5 h-5 text-orange-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3 leading-relaxed">{job.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, skillIdx) => (
                            <span
                              key={skillIdx}
                              className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full transition-all inline-flex items-center gap-2 whitespace-nowrap">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No positions found</h3>
              <p className="text-gray-600">Try selecting a different department</p>
            </div>
          )}
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
            <Rocket className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Don't see the perfect role?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              We're always looking for talented people to join our team. Send us your resume and tell us what you're passionate about.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all inline-flex items-center gap-2">
                Send Your Resume
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all">
                Contact Recruiting Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;