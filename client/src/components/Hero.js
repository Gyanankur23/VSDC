import React from 'react';
import { Rocket, Users, Calendar, Award, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-gray-950 to-black overflow-hidden py-12 lg:py-0">
      {/* Ambient Orange Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none animate-mesh-float"></div>
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-orange-600/15 rounded-full blur-3xl pointer-events-none animate-mesh-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-0 right-1/3 w-72 h-72 bg-orange-800/20 rounded-full blur-3xl pointer-events-none animate-mesh-float" style={{ animationDelay: '6s' }}></div>
      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04]"></div>

      <div className="container mx-auto px-6 lg:px-20 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between gap-12">

            {/* Left Hero Copy */}
            <div className="lg:w-1/2 animate-slideUp">
              <div className="flex items-center justify-center lg:justify-start mb-8">
                <div className="relative p-2 bg-black/60 rounded-2xl shadow-xl border border-orange-500/30 backdrop-blur-md transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:border-orange-500/70">
                  <img src="/logo.png" alt="VSDC Logo" className="h-16 w-auto object-contain" />
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/15 via-orange-500/25 to-orange-500/15 border border-orange-500/50 px-5 py-2.5 rounded-full mb-8 shadow-lg shadow-orange-500/10 backdrop-blur-md animate-pulse-slow">
                <Sparkles className="w-4 h-4 text-orange-400 animate-float" />
                <span className="text-orange-400 font-bold text-xs md:text-sm tracking-wider uppercase">VIGHNOLEARN STUDENT DEVELOPMENT CLUB</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none tracking-tight">
                <span className="text-white transition-colors hover:text-orange-400 duration-300">V</span>
                <span className="text-gradient-orange text-shimmer inline-block transform hover:scale-110 transition-transform duration-300">S</span>
                <span className="text-white transition-colors hover:text-orange-400 duration-300">D</span>
                <span className="text-gradient-orange text-shimmer inline-block transform hover:scale-110 transition-transform duration-300">C</span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-100 mb-8 leading-snug">
                Empowering <span className="text-gradient-orange">Students</span> Through{' '}
                <span className="text-white underline decoration-orange-500/50 decoration-4">Technical</span>{' '}
                <span className="text-gradient-orange">Excellence</span>
              </h2>

              <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl">
                A student club focusing on <span className="text-white font-bold">technical skills</span> and{' '}
                <span className="text-orange-400 font-bold">industry experiences</span>. We bridge the gap between{' '}
                <span className="text-white font-bold">academic learning</span> and{' '}
                <span className="text-orange-400 font-bold">practical applications</span>.
              </p>

              <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="shimmer-btn bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white px-10 py-4 rounded-2xl font-black hover:from-orange-600 hover:to-orange-500 transition-all transform hover:scale-105 shadow-xl shadow-orange-500/40 border border-orange-400/50 inline-flex items-center gap-3 cursor-pointer group"
                >
                  Join Us
                  <Rocket className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a
                  href="#bootcamp"
                  className="bg-black/50 text-orange-400 border-2 border-orange-500/60 px-10 py-4 rounded-2xl font-bold hover:bg-orange-500/15 hover:border-orange-400 transition-all transform hover:scale-105 backdrop-blur-md shadow-md hover:shadow-xl hover:shadow-orange-500/20 inline-block text-center cursor-pointer"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Stats Container */}
            <div className="lg:w-1/2 mt-14 lg:mt-0 animate-slideUp delay-200">
              <div className="glass-card rounded-3xl p-8 lg:p-12 border border-orange-500/25 shadow-2xl shadow-orange-500/10 backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute -right-20 -top-20 w-56 h-56 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all duration-700"></div>

                <div className="grid grid-cols-2 gap-6 relative z-10">
                  {[
                    { icon: Users,    count: '50+', label: 'Active Members',   delay: '0s' },
                    { icon: Calendar, count: '20+', label: 'Events Hosted',    delay: '0.6s' },
                    { icon: Award,    count: '15+', label: 'Industry Partners',delay: '1.2s' },
                    { icon: Rocket,   count: '10+', label: 'Live Projects',    delay: '1.8s' },
                  ].map(({ icon: Icon, count, label, delay }) => (
                    <div
                      key={label}
                      className="glass-card-hover bg-gradient-to-br from-orange-950/60 to-black/80 rounded-2xl p-7 text-center border border-orange-500/20 hover:border-orange-500/80 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.03] cursor-pointer group/stat shadow-md hover:shadow-2xl hover:shadow-orange-500/20"
                    >
                      <div className="w-14 h-14 bg-orange-500/15 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/stat:bg-orange-500 transition-colors duration-500 shadow-inner">
                        <Icon className="w-7 h-7 text-orange-400 group-hover/stat:text-white transition-colors animate-float" style={{ animationDelay: delay }} />
                      </div>
                      <p className="text-4xl lg:text-5xl font-black text-white mb-1 group-hover/stat:text-orange-400 transition-colors">{count}</p>
                      <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-wider">{label}</p>
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
