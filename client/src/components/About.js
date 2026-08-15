import React from 'react';
import { Target, Rocket, Users, Award, Crown, Linkedin, Twitter, Mail } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '10K+', label: 'Students', icon: Users },
    { value: '500+', label: 'Students Placed', icon: Award },
    { value: '120+', label: 'Projects', icon: Rocket },
    { value: '50+', label: 'Mentors', icon: Target },
  ];

  const founders = [
    {
      name: 'Vishal',
      role: 'Founder & CEO',
      image: 'https://ui-avatars.com/api/?name=Vishal&background=f97316&color=fff&size=400',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'vishal@vighnolearn.com'
      }
    },
    {
      name: 'Tarun',
      role: 'Co-founder',
      image: 'https://ui-avatars.com/api/?name=Tarun&background=f97316&color=fff&size=400',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'tarun@vighnolearn.com'
      }
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-orange-900 via-black to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">A Community for the Next Generation of Builders</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We believe true learning happens at the intersection of curiosity and execution. Our mission is to bridge the gap between academic curricula and industry demands.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 text-center border border-gray-700 hover:border-orange-500 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <p className="text-4xl font-black text-white mb-2">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Target className="w-6 h-6 text-orange-500" />
              The Vision
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To become the world's most effective ecosystem for student-led innovation, where every project has the potential to change the world.
            </p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Rocket className="w-6 h-6 text-orange-500" />
              The Impact
            </h3>
            <p className="text-gray-300 leading-relaxed">
              From open-source contributions to startup incubations, we turn ideas into reality through hands-on projects and industry mentorship.
            </p>
          </div>
        </div>

        {/* What You Get */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">What You Get</h3>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Everything inside the membership to accelerate your career
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Learn from Top Experts</h4>
              <p className="text-gray-400">AI & growth leaders from Lovable, ElevenLabs, Google, Microsoft</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Attend In-Person Events</h4>
              <p className="text-gray-400">Ship the hottest AI products whether you're a developer or not</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Network with Leaders</h4>
              <p className="text-gray-400">Access to 5000+ member exclusive community</p>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Methodology</h3>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Everything You Need to Succeed - Three pillars that form the foundation of your journey from learner to industry leader.
          </p>
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 flex items-start gap-6 hover:border-orange-500 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-black text-white">01</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Hands-On Projects</h4>
                <p className="text-gray-400">Build real products from day one. No theoretical exercises—only industry-grade solutions that matter.</p>
                <p className="text-orange-500 font-semibold mt-2">120+ Projects</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 flex items-start gap-6 hover:border-orange-500 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-black text-white">02</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Industry Mentorship</h4>
                <p className="text-gray-400">Learn directly from senior engineers and founders who have built successful products at scale.</p>
                <p className="text-orange-500 font-semibold mt-2">50+ Mentors</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 flex items-start gap-6 hover:border-orange-500 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-black text-white">03</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Open Innovation</h4>
                <p className="text-gray-400">Contribute to open-source, launch startups, and collaborate with a global network of builders.</p>
                <p className="text-orange-500 font-semibold mt-2">2.5K+ Builders</p>
              </div>
            </div>
          </div>
        </div>

        {/* Founders */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Leadership Team</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300 text-center"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-orange-500">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{founder.name}</h4>
                <p className="text-orange-500 font-semibold mb-4">{founder.role}</p>
                <div className="flex justify-center gap-4">
                  {founder.social.linkedin && (
                    <a
                      href={founder.social.linkedin}
                      className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {founder.social.twitter && (
                    <a
                      href={founder.social.twitter}
                      className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {founder.social.email && (
                    <a
                      href={`mailto:${founder.social.email}`}
                      className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
