import React from 'react';
import { Instagram, Linkedin, Github, Mail, Globe, ArrowLeft, Crown } from 'lucide-react';

const Profile = ({ member, onBack }) => {
  if (!member) return null;

  return (
    <section className="min-h-screen bg-black relative py-20">
      <div className="absolute inset-0 bg-orange-500/5 opacity-0 animate-glow"></div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors mb-8 font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Team
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
            {/* Header with profile image */}
            <div className="relative h-54 md:h-80">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-gray-900 flex items-center justify-center">
                  <span className="text-9xl font-black text-orange-500">{member.initial}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Crown className="w-6 h-6 text-orange-500" />
                  <span className="text-orange-500 font-semibold text-sm">TEAM MEMBER</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-2">{member.name}</h1>
                <p className="text-xl text-orange-500 font-bold">{member.role}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-gray-400 text-sm font-semibold mb-2">Department</h3>
                  <p className="text-white text-lg font-bold">{member.dept}</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-gray-400 text-sm font-semibold mb-2">Year</h3>
                  <p className="text-white text-lg font-bold">{member.year}</p>
                </div>
              </div>

              {/* Social Links */}
              {Object.keys(member.social).length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-white mb-6">Connect</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {member.social.instagram && (
                      <a 
                        href={member.social.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-orange-500 hover:bg-orange-500/10 transition-all group"
                      >
                        <Instagram className="w-6 h-6 text-orange-500 group-hover:text-orange-400" />
                        <span className="text-white font-semibold">Instagram</span>
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-orange-500 hover:bg-orange-500/10 transition-all group"
                      >
                        <Linkedin className="w-6 h-6 text-orange-500 group-hover:text-orange-400" />
                        <span className="text-white font-semibold">LinkedIn</span>
                      </a>
                    )}
                    {member.social.github && (
                      <a 
                        href={member.social.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-orange-500 hover:bg-orange-500/10 transition-all group"
                      >
                        <Github className="w-6 h-6 text-orange-500 group-hover:text-orange-400" />
                        <span className="text-white font-semibold">GitHub</span>
                      </a>
                    )}
                    {member.social.email && (
                      <a 
                        href={`mailto:${member.social.email}`}
                        className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-orange-500 hover:bg-orange-500/10 transition-all group"
                      >
                        <Mail className="w-6 h-6 text-orange-500 group-hover:text-orange-400" />
                        <span className="text-white font-semibold">Email</span>
                      </a>
                    )}
                    {member.social.website && (
                      <a 
                        href={member.social.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-orange-500 hover:bg-orange-500/10 transition-all group"
                      >
                        <Globe className="w-6 h-6 text-orange-500 group-hover:text-orange-400" />
                        <span className="text-white font-semibold">Website</span>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Additional Info Section - Placeholder for future content */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-2xl font-black text-white mb-4">About</h3>
                <p className="text-gray-400 leading-relaxed">
                  More information about {member.name} will be added here soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
