import React from 'react';
import { Link } from 'react-router-dom';

const VSDCHero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-orange-900 via-black to-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Join 10,000+ Student Builders</h1>
          <p className="text-2xl md:text-3xl text-orange-500 font-bold mb-4">India's Largest Student Builder Community</p>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join 10,000+ students. Get free access to events, mentorship, and course discounts up to 50%.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-orange-500">✓</span> Free community access
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-orange-500">✓</span> Paid courses from ₹1,000
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-orange-500">✓</span> EMI available
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/vighnolearn/contact" className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors">
              Get Free Membership
            </Link>
            <Link to="/vighnolearn/courses" className="bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-700 transition-colors border border-gray-700">
              Explore Courses
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <p className="text-4xl font-black text-orange-500 mb-2">10K+</p>
            <p className="text-gray-400">Active Students</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-orange-500 mb-2">500+</p>
            <p className="text-gray-400">Students Placed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-orange-500 mb-2">120+</p>
            <p className="text-gray-400">Projects Built</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-orange-500 mb-2">50+</p>
            <p className="text-gray-400">Expert Mentors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VSDCHero;
