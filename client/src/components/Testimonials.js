import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'AI Engineer at TechCorp',
      salary: '₹12 LPA',
      course: 'AI & Machine Learning',
      quote: 'The mentorship helped me get 3 job offers before graduating.',
      initial: 'P'
    },
    {
      name: 'Rahul Verma',
      role: 'Freelance Developer',
      salary: '₹50K/month',
      course: 'Full Stack Development',
      quote: 'Built 4 projects that got me my first client in 2 months.',
      initial: 'R'
    },
    {
      name: 'Ananya Patel',
      role: 'Data Analyst at Flipkart',
      salary: '₹8 LPA',
      course: 'Data Science',
      quote: 'Zero coding background to data job in 6 months.',
      initial: 'A'
    }
  ];

  const companies = [
    'Google', 'Microsoft', 'Apple', 'Amazon', 'Meta', 'Netflix', 'Stripe', 'Adobe', 'Salesforce', 'Oracle', 'IBM', 'Intel'
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-orange-900 via-black to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">From Learning to Earning</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real outcomes from real students who started exactly where you are
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-black text-white">{testimonial.initial}</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="mb-6">
                <Quote className="w-8 h-8 text-orange-500 mb-4" />
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>

              <div className="border-t border-gray-700 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">{testimonial.course}</span>
                  <span className="text-orange-500 font-bold">{testimonial.salary}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placement Stats */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/40 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 text-orange-500" />
            <span className="text-orange-400 font-bold">500+ students placed at top companies</span>
          </div>
        </div>

        {/* Company Logos */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <p className="text-gray-400 text-center mb-8">Our students are placed at</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companies.map((company, index) => (
              <div
                key={index}
                className="text-gray-500 hover:text-orange-500 transition-colors font-semibold text-lg"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
