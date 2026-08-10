import React from 'react';
import { Rocket, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

const Bootcamp = () => {
  return (
    <section id="bootcamp" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-[32rem] h-[32rem] bg-orange-500/10 rounded-full blur-3xl pointer-events-none animate-mesh-float"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-700/10 rounded-full blur-3xl pointer-events-none animate-mesh-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col items-center">
        <div className="text-center mb-12 animate-slideUp">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/40 px-5 py-2.5 rounded-full mb-4 shadow-lg shadow-orange-500/10 backdrop-blur-md animate-pulse-slow">
            <Zap className="w-5 h-5 text-orange-400 animate-float" />
            <span className="text-orange-400 font-bold text-xs md:text-sm tracking-wider uppercase">Live Intensive Bootcamp</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">AI & Software Bootcamp</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to prove your skills? Join our flagship 9-day intensive program.
          </p>
        </div>

        <a 
          href="/bootcamp.html" 
          className="group relative w-full max-w-4xl block animate-slideUp delay-200"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative glass-card bg-black/80 rounded-3xl p-8 md:p-12 border border-orange-500/40 overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all transform hover:-translate-y-2 hover:scale-[1.02]">
            
            {/* Visual element / abstract graphic */}
            <div className="relative w-48 h-48 shrink-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-4 bg-gradient-to-br from-orange-600 to-red-800 rounded-2xl rotate-12 group-hover:rotate-45 transition-transform duration-700 shadow-2xl"></div>
              <div className="absolute inset-4 bg-black/60 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-orange-500/50 -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                <ShieldCheck className="w-20 h-20 text-orange-400 group-hover:text-white transition-colors" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left z-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-3 group-hover:text-orange-400 transition-colors">
                The Ultimate Tech Challenge
              </h3>
              <p className="text-lg text-gray-400 mb-6 font-medium">
                <span className="text-orange-500 font-bold">9 DAYS</span> OF KNOWLEDGE.<br/>
                <span className="text-orange-500 font-bold">1 DAY</span> OF IMPACT.
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
                <span className="bg-orange-500/15 border border-orange-500/30 text-orange-400 px-4 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider">
                  Prize Pool: ₹40,000
                </span>
                <span className="bg-white/5 border border-white/10 text-gray-300 px-4 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider">
                  Event: 29th Aug 2026
                </span>
              </div>

              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-700 text-white px-8 py-4 rounded-xl font-black text-lg group-hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all">
                Enter the Bootcamp
                <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
            
            {/* Background glowing accents */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors duration-700"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Bootcamp;
