import React from 'react';
import { Mail, Github, Linkedin, Instagram, ArrowRight, Heart } from 'lucide-react';

const Footer = () => {
  const socials = [
    { icon: Github,    href: "https://github.com/manas-shukla-101",                   title: "GitHub",    rotate: 'group-hover:rotate-6'  },
    { icon: Linkedin,  href: "https://www.linkedin.com/in/manas-shukla-006774370",    title: "LinkedIn",  rotate: 'group-hover:-rotate-6' },
    { icon: Instagram, href: "https://www.instagram.com/manas_shukla_101",            title: "Instagram", rotate: 'group-hover:rotate-6'  },
    { icon: Mail,      href: "mailto:vsdc@vighnolearn.com",                           title: "Email",     rotate: 'group-hover:-rotate-6' },
  ];

  const quickLinks = [
    { label: 'Home',        href: '#' },
    { label: 'Team Heads',  href: '#team' },
    { label: 'AI Bootcamp', href: '#bootcamp' },
    { label: 'Past Events', href: '#events' },
    { label: 'Join VSDC',   href: '#contact' },
  ];

  const resources = [
    { label: 'Curriculum Roadmap', href: '#bootcamp' },
    { label: 'Tech Workshops',     href: '#events' },
    { label: 'Member Application', href: '#contact' },
    { label: 'Member Showcase',    href: 'profile.html?name=manas', external: true },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-950 via-black to-black text-gray-300 py-16 relative overflow-hidden border-t border-orange-500/15">
      <div className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] bg-orange-500/8 rounded-full blur-3xl pointer-events-none animate-mesh-float"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-black/80 rounded-xl shadow-xl border border-orange-500/30 mr-3">
                <img src="/logo.png" alt="VSDC Logo" className="h-10 w-auto object-contain" />
              </div>
              <h3 className="text-3xl font-black text-white tracking-tight">VSDC</h3>
            </div>
            <p className="text-gray-500 leading-relaxed font-medium">
              VighnoLearn <span className="text-gradient-orange font-bold">Student Development</span> Club
            </p>
            <div className="flex gap-3 pt-2">
              {socials.map(({ icon: Icon, href, title, rotate }) => (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  title={title}
                  className={`w-12 h-12 bg-black/80 rounded-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 cursor-pointer border border-orange-500/20 text-gray-400 shadow-md hover:shadow-xl hover:shadow-orange-500/30 hover:border-orange-500 group`}
                >
                  <Icon className={`w-5 h-5 transition-transform ${rotate}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black text-white mb-5 tracking-tight flex items-center gap-2">
              <span className="w-2 h-5 bg-orange-500 rounded-full inline-block"></span> Quick Links
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-gray-500 hover:text-orange-400 transition-all duration-300 flex items-center gap-2.5 font-bold group text-sm">
                    <ArrowRight className="w-4 h-4 text-orange-500 transition-transform group-hover:translate-x-1" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-black text-white mb-5 tracking-tight flex items-center gap-2">
              <span className="w-2 h-5 bg-orange-500 rounded-full inline-block"></span> Resources
            </h4>
            <ul className="space-y-3.5">
              {resources.map(({ label, href, external }) => (
                <li key={label}>
                  <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
                    className="text-gray-500 hover:text-orange-400 transition-all duration-300 flex items-center gap-2.5 font-bold group text-sm">
                    <ArrowRight className="w-4 h-4 text-orange-500 transition-transform group-hover:translate-x-1" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-black text-white mb-5 tracking-tight flex items-center gap-2">
              <span className="w-2 h-5 bg-orange-500 rounded-full inline-block"></span> Contact Us
            </h4>
            <div className="flex items-center gap-3 mb-4 bg-black/60 p-3.5 rounded-2xl border border-orange-500/20 shadow-sm">
              <div className="w-9 h-9 bg-orange-500/15 rounded-xl flex items-center justify-center text-orange-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-sm text-gray-400 font-bold">vsdc@vighnolearn.com</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              Join our vibrant tech community and build real-world{' '}
              <span className="text-gradient-orange font-bold">projects</span> with top peers.
            </p>
          </div>
        </div>

        <div className="border-t border-orange-500/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm font-semibold">
            © 2026 VSDC — VighnoLearn Student Development Club. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs flex items-center gap-1 font-bold">
            Built with <Heart className="w-3.5 h-3.5 text-orange-500 fill-orange-500 animate-pulse-slow" /> by VSDC Tech Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
