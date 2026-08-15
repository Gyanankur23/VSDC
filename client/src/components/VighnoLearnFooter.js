import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const VighnoLearnFooter = () => {
  const socials = [
    { icon: Github,    href: "https://github.com/vighnolearn",                   title: "GitHub" },
    { icon: Linkedin,  href: "https://www.linkedin.com/company/vighnolearn",    title: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/vighnolearn",            title: "Instagram" },
    { icon: Mail,      href: "mailto:info@vighnolearn.com",                           title: "Email" },
  ];

  const quickLinks = [
    { label: 'Home',        href: '/vighnolearn' },
    { label: 'About',       href: '/vighnolearn/about' },
    { label: 'Courses',     href: '/vighnolearn/courses' },
    { label: 'Events',      href: '/vighnolearn/events' },
    { label: 'Contact',     href: '/vighnolearn/contact' },
  ];

  const resources = [
    { label: 'Course Catalog', href: '/vighnolearn/courses' },
    { label: 'Upcoming Events', href: '/vighnolearn/events' },
    { label: 'Join Community',  href: '/vighnolearn/contact' },
    { label: 'Student Success', href: '/vighnolearn' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="VighnoLearn Logo" className="h-10 w-auto mr-3" />
              <h3 className="text-2xl font-bold text-white">VighnoLearn</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              India's Largest <span className="text-orange-500 font-semibold">Student Builder</span> Community
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
                  <Link to={href} className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-orange-500" /> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Resources</h4>
            <ul className="space-y-3">
              {resources.map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 text-sm">
                    <ArrowRight className="w-4 h-4 text-orange-500" /> {label}
                  </Link>
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
              <span className="text-sm text-gray-400">info@vighnolearn.com</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Join 10,000+ students building the future with{' '}
              <span className="text-orange-500 font-semibold">hands-on learning</span> and mentorship.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 VighnoLearn — India's Largest Student Builder Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default VighnoLearnFooter;
