import React from 'react';
import { Crown, Sparkles, ExternalLink } from 'lucide-react';

const Team = () => {
  const members = [
    {
      name: "Manas", role: "President", year: "Third Year", dept: "Data Science",
      image: "/profiles/Manas.png",
      social: {
        instagram: "https://www.instagram.com/manas_shukla_101",
        github: "https://github.com/manas-shukla-101",
        linkedin: "https://www.linkedin.com/in/manas-shukla-006774370",
        email: "shuklamanas8928@gmail.com",
        website: "https://manas-shukla-portfolio.framer.website/"
      }
    },
    { name: "Ayushi",    role: "Vice President",               year: "Second Year", dept: "BCA",         image: null, initial: "A",   social: {} },
    { name: "Divyanshu", role: "Secretary",                   year: "Final Year",  dept: "DS",          image: null, initial: "D",   social: {} },
    { name: "Amiti",     role: "Marketing Head",               year: "Second Year", dept: "BCA",         image: null, initial: "Am",  social: {} },
    {
      name: "Gyanankur", role: "Technical Head", year: "Third Year", dept: "Data Science",
      image: "/profiles/Gyanankur.png",
      social: {
        instagram: "https://www.instagram.com/gyanankur_b08206",
        email: "gyanankur9@gmail.com",
        linkedin: "https://www.linkedin.com/in/gyanankur-baruah-797205338",
        github: "https://www.github.com/Gyanankur23",
        website: "https://portfolio-one-alpha-30.vercel.app/"
      }
    },
    {
      name: "Mahima", role: "Event Coordinator", year: "Third Year", dept: "Data Science",
      image: null, initial: "Mah",
      social: {
        instagram: "https://www.instagram.com/maahhhiiii__?igsh=bjBxd25vMDdpaTZr&utm_source=qr",
        github: "https://github.com/mahimasingh20",
        linkedin: "https://linkedin.com/in/mahima-singh-datascience",
        email: "mahisingh0620@gmail.com",
        website: "https://github.com/mahimasingh20"
      }
    },
    { name: "Aayush", role: "PR Head", year: "Final Year", dept: "Data Science", image: null, initial: "Aa", social: {} }
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-orange-500/12 rounded-full blur-3xl pointer-events-none animate-mesh-float"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-orange-700/10 rounded-full blur-3xl pointer-events-none animate-mesh-float" style={{ animationDelay: '5s' }}></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="text-center mb-16 animate-slideUp">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/40 px-5 py-2.5 rounded-full mb-4 shadow-lg shadow-orange-500/10 backdrop-blur-md animate-pulse-slow">
            <Crown className="w-5 h-5 text-orange-400 animate-float" />
            <span className="text-orange-400 font-bold text-xs md:text-sm tracking-wider uppercase">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">Team Heads</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Meet the visionary student leaders driving <span className="text-gradient-orange font-bold">VSDC's</span> mission
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-red-950 via-gray-950 to-black rounded-3xl overflow-hidden border border-red-800/60 hover:border-orange-500 transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.03] cursor-pointer shadow-2xl hover:shadow-[0_20px_55px_rgba(249,115,22,0.3)] animate-slideUp"
                style={{ animationDelay: `${(index % 3) * 0.15}s` }}
                onClick={() => window.open(`/profile.html?name=${member.name.toLowerCase()}`, '_blank')}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/8 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all duration-700"></div>

                <div className="relative pt-8 pb-2 flex items-center justify-center">
                  {member.image ? (
                    <div className="w-full h-44 flex items-center justify-center relative overflow-hidden">
                      <div className="relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-36 h-36 rounded-full object-cover object-top border-4 border-orange-700/60 shadow-2xl transition-transform duration-500 group-hover:scale-110 ring-4 ring-orange-500/15 group-hover:ring-orange-500/60"
                        />
                        <div className="absolute bottom-1 right-1 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white border-2 border-black shadow-lg group-hover:scale-110 transition-transform">
                          <Sparkles className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-44 flex items-center justify-center overflow-hidden">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-orange-900 via-red-900 to-black flex items-center justify-center border-4 border-orange-700/50 shadow-2xl transition-transform duration-500 group-hover:scale-110 ring-4 ring-orange-500/15 group-hover:ring-orange-500/60">
                        <span className="text-4xl font-black text-orange-300 group-hover:text-white transition-colors">{member.initial}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 text-center relative z-10">
                  <h4 className="text-2xl font-black text-white mb-2 group-hover:text-orange-400 transition-colors flex items-center justify-center gap-2">
                    {member.name}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
                  </h4>
                  <p className="text-orange-400 font-extrabold mb-4 group-hover:text-orange-300 transition-colors text-sm uppercase tracking-wider">{member.role}</p>
                  <div className="inline-flex items-center gap-2 bg-black/60 border border-orange-900/60 px-4 py-1.5 rounded-full text-gray-400 text-xs font-bold group-hover:border-orange-500/50 transition-colors">
                    <span>{member.year}</span>
                    <span className="text-orange-500">•</span>
                    <span>{member.dept}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
