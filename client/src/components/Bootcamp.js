import React from 'react';
import { Calendar, Clock, Users, Award, CheckCircle } from 'lucide-react';

const Bootcamp = () => {
  const features = [
    { icon: Calendar, title: '8 Weeks', desc: 'Duration' },
    { icon: Clock, title: '40+ Hours', desc: 'Live Sessions' },
    { icon: Users, title: '1:1 Mentorship', desc: 'Personal Guidance' },
    { icon: Award, title: 'Certificate', desc: 'On Completion' },
  ];

  const curriculum = [
    { week: 'Week 1', title: 'Introduction to AI', topics: ['AI Fundamentals', 'Machine Learning Basics', 'Python for AI'] },
    { week: 'Week 2', title: 'Deep Learning', topics: ['Neural Networks', 'TensorFlow Basics', 'Model Training'] },
    { week: 'Week 3', title: 'Computer Vision', topics: ['Image Processing', 'Object Detection', 'CNNs'] },
    { week: 'Week 4', title: 'NLP', topics: ['Text Processing', 'Sentiment Analysis', 'Transformers'] },
    { week: 'Week 5', title: 'Project Phase 1', topics: ['Project Planning', 'Data Collection', 'Model Selection'] },
    { week: 'Week 6', title: 'Project Phase 2', topics: ['Model Training', 'Optimization', 'Testing'] },
    { week: 'Week 7', title: 'Project Phase 3', topics: ['Deployment', 'Documentation', 'Presentation'] },
    { week: 'Week 8', title: 'Final Showcase', topics: ['Demo Day', 'Feedback Session', 'Certification'] },
  ];

  const benefits = [
    'Hands-on experience with real-world projects',
    'Industry-expert mentorship',
    'Job placement assistance',
    'Lifetime access to course materials',
    'Networking with industry professionals',
    'Certificate of completion',
  ];

  return (
    <section id="bootcamp" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">AI Bootcamp</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Master Artificial Intelligence with our comprehensive <span className="text-orange-500 font-semibold">8-week program</span>
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-orange-500 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-orange-500" />
              </div>
              <p className="text-2xl font-bold text-white mb-1">{feature.title}</p>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Curriculum */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Curriculum Roadmap</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300"
              >
                <div className="text-orange-500 text-sm font-semibold mb-2">{item.week}</div>
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
        <div className="bg-gray-800 rounded-2xl p-8 lg:p-12 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Why Choose This Bootcamp?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
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
