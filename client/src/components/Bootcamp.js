import React from 'react';
import { Calendar, Clock, Users, Award, CheckCircle, TrendingUp, ArrowRight } from 'lucide-react';

const Bootcamp = () => {
  return (
    <section id="bootcamp" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/40 px-5 py-2.5 rounded-full mb-4 shadow-lg shadow-orange-500/10 backdrop-blur-md">
            <TrendingUp className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-bold text-xs md:text-sm tracking-wider uppercase">AI Bootcamp</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">AI Bootcamp</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Master Artificial Intelligence with our comprehensive <span className="text-orange-500 font-bold">9-day program</span>
          </p>
        </div>

        {/* Single Impact Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-2xl text-center">
            <h3 className="text-2xl font-black text-gray-900 mb-6">Program Overview</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
                <p className="text-5xl font-black text-orange-500 mb-2">9</p>
                <p className="text-gray-700 font-bold">Days of Learning</p>
              </div>
              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
                <p className="text-5xl font-black text-orange-500 mb-2">1</p>
                <p className="text-gray-700 font-bold">Day of Impact</p>
              </div>
            </div>
            <a
              href="/bootcamp.html"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-500 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              Join the Bootcamp
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Curriculum */}
        <div className="mb-12">
          <h3 className="text-2xl font-black text-white mb-8 text-center">Curriculum Roadmap</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { week: 'Week 1', title: 'Introduction to AI', topics: ['AI Fundamentals', 'Machine Learning Basics', 'Python for AI'] },
              { week: 'Week 2', title: 'Deep Learning', topics: ['Neural Networks', 'TensorFlow Basics', 'Model Training'] },
              { week: 'Week 3', title: 'Computer Vision', topics: ['Image Processing', 'Object Detection', 'CNNs'] },
              { week: 'Week 4', title: 'NLP', topics: ['Text Processing', 'Sentiment Analysis', 'Transformers'] },
              { week: 'Week 5', title: 'Project Phase 1', topics: ['Project Planning', 'Data Collection', 'Model Selection'] },
              { week: 'Week 6', title: 'Project Phase 2', topics: ['Model Training', 'Optimization', 'Testing'] },
              { week: 'Week 7', title: 'Project Phase 3', topics: ['Deployment', 'Documentation', 'Presentation'] },
              { week: 'Week 8', title: 'Final Showcase', topics: ['Demo Day', 'Feedback Session', 'Certification'] },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300"
              >
                <div className="text-orange-500 text-sm font-bold mb-2">{item.week}</div>
                <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                <ul className="space-y-2">
                  {item.topics.map((topic, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gray-800 rounded-3xl p-8 lg:p-12 border border-gray-700">
          <h3 className="text-2xl font-black text-white mb-8 text-center">Why Choose This Bootcamp?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Hands-on experience with real-world projects',
              'Industry-expert mentorship',
              'Job placement assistance',
              'Lifetime access to course materials',
              'Networking with industry professionals',
              'Certificate of completion',
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bootcamp;
