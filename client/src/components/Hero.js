import React from 'react';
import { Rocket, Users, Calendar, Award, Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-900 via-black to-gray-900 overflow-hidden py-12 lg:py-0">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/5 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-20 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between gap-16">

            {/* Left Hero Copy */}
            <div className="lg:w-1/2 animate-slideUp">
              <div className="flex items-center justify-center lg:justify-start mb-8">
                <div className="relative">
                  <img src="/vsdc-logo.jpg" alt="VSDC Logo" className="h-24 w-auto object-contain" />
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-4 py-2 rounded-full mb-8">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className="text-orange-500 font-semibold text-sm tracking-wider uppercase">VighnoLearn Student Development Club</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Empowering Students Through <span className="text-orange-500">Technical Excellence</span>
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl">
                A student club focusing on technical skills and industry experiences. We bridge the gap between academic learning and practical applications.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30 inline-flex items-center gap-2 cursor-pointer"
                >
                  Join Us
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#bootcamp"
                  className="bg-gray-800 text-white border border-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-700 hover:border-gray-600 transition-all transform hover:scale-105 cursor-pointer"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Stats Container */}
            <div className="lg:w-1/2 mt-14 lg:mt-0 animate-slideUp delay-200">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-700/50 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>

                <div className="grid grid-cols-2 gap-6 relative z-10">
                  {[
                    { icon: Users,    count: '50+', label: 'Active Members' },
                    { icon: Calendar, count: '20+', label: 'Events Hosted' },
                    { icon: Award,    count: '15+', label: 'Industry Partners' },
                    { icon: Rocket,   count: '10+', label: 'Live Projects' },
                  ].map(({ icon: Icon, count, label }) => (
                    <div
                      key={label}
                      className="bg-gray-900/50 rounded-xl p-6 text-center border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                        <Icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <p className="text-3xl font-bold text-white mb-1">{count}</p>
                      <p className="text-gray-400 text-sm font-medium">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
