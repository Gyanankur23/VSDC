import React from 'react';
import { Mail, Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  const socials = [
    { icon: Github,    href: "https://github.com/manas-shukla-101",                   title: "GitHub" },
    { icon: Linkedin,  href: "https://www.linkedin.com/in/manas-shukla-006774370",    title: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/manas_shukla_101",            title: "Instagram" },
    { icon: Mail,      href: "mailto:vsdc@vighnolearn.com",                           title: "Email" },
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
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="VSDC Logo" className="h-10 w-auto mr-3" />
              <h3 className="text-2xl font-bold text-white">VSDC</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              VighnoLearn <span className="text-orange-500 font-semibold">Student Development</span> Club
            </p>
            <div className="flex gap-3 pt-2">
              {socials.map(({ icon: Icon, href, title }) => (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  title={title}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 text-gray-400 border border-gray-700"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-orange-500" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Resources</h4>
            <ul className="space-y-3">
              {resources.map(({ label, href, external }) => (
                <li key={label}>
                  <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-orange-500" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Contact Us</h4>
            <div className="flex items-center gap-3 mb-4 bg-gray-800 p-3 rounded-lg border border-gray-700">
              <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm text-gray-400">vsdc@vighnolearn.com</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Join our vibrant tech community and build real-world{' '}
              <span className="text-orange-500 font-semibold">projects</span> with top peers.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 VSDC — VighnoLearn Student Development Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
