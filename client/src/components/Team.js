import React from 'react';
import { Crown, ExternalLink } from 'lucide-react';

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
    { name: "Ayushi",    role: "Vice President",               year: "Second Year", dept: "BCA",         image: "https://ui-avatars.com/api/?name=Ayushi&background=f97316&color=fff&size=200", initial: "A",   social: {} },
    { name: "Divyanshu", role: "Secretary",                   year: "Final Year",  dept: "DS",          image: "https://ui-avatars.com/api/?name=Divyanshu&background=f97316&color=fff&size=200", initial: "D",   social: {} },
    { name: "Amiti",     role: "Marketing Head",               year: "Second Year", dept: "BCA",         image: "https://ui-avatars.com/api/?name=Amiti&background=f97316&color=fff&size=200", initial: "Am",  social: {} },
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
      image: "https://ui-avatars.com/api/?name=Mahima&background=f97316&color=fff&size=200", initial: "Mah",
      social: {
        instagram: "https://www.instagram.com/maahhhiiii__?igsh=bjBxd25vMDdpaTZr&utm_source=qr",
        github: "https://github.com/mahimasingh20",
        linkedin: "https://linkedin.com/in/mahima-singh-dashboard",
        email: "mahisingh0620@gmail.com",
        website: "https://github.com/mahimasingh20"
      }
    },
    { name: "Aayush", role: "PR Head", year: "Final Year", dept: "Data Science", image: "https://ui-avatars.com/api/?name=Aayush&background=f97316&color=fff&size=200", initial: "Aa", social: {} }
  ];

  return (
    <section id="team" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Team Heads</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Meet the visionary student leaders driving <span className="text-orange-500 font-semibold">VSDC's</span> mission
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <div
                key={index}
                className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-300 cursor-pointer"
                onClick={() => window.open(`/profile.html?name=${member.name.toLowerCase()}`, '_blank')}
              >
                <div className="relative pt-8 pb-2 flex items-center justify-center">
                  {member.image ? (
                    <div className="w-full h-44 flex items-center justify-center relative overflow-hidden">
                      <div className="relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-36 h-36 rounded-full object-cover object-top border-4 border-gray-700 shadow-lg transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-44 flex items-center justify-center overflow-hidden">
                      <div className="w-28 h-28 rounded-full bg-gray-700 flex items-center justify-center border-4 border-gray-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <span className="text-4xl font-bold text-gray-300">{member.initial}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 text-center">
                  <h4 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                    {member.name}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-orange-500" />
                  </h4>
                  <p className="text-orange-500 font-semibold mb-4 text-sm uppercase tracking-wider">{member.role}</p>
                  <div className="inline-flex items-center gap-2 bg-gray-900 px-4 py-1.5 rounded-full text-gray-400 text-xs font-medium">
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
