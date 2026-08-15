import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ArrowRight, CheckCircle } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'AI & Machine Learning',
      description: 'Master AI and ML with hands-on projects',
      duration: '12 weeks',
      students: '2,500+',
      price: '₹4,999 - ₹9,999',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=400&fit=crop',
      features: ['Neural Networks', 'Deep Learning', 'TensorFlow', 'Model Deployment']
    },
    {
      id: 2,
      title: 'Generative AI & Agentic AI',
      description: 'Build AI agents and leverage generative AI',
      duration: '8 weeks',
      students: '3,000+',
      price: '₹3,999 - ₹7,999',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      features: ['GPT Integration', 'AI Agents', 'Prompt Engineering', 'LLM Fine-tuning']
    },
    {
      id: 3,
      title: 'Data Science',
      description: 'Turn data into insights with ML',
      duration: '14 weeks',
      students: '4,500+',
      price: '₹5,999 - ₹11,999',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      features: ['Python', 'Pandas', 'Data Visualization', 'ML Algorithms']
    },
    {
      id: 4,
      title: 'Cybersecurity',
      description: 'Protect systems from cyber threats',
      duration: '12 weeks',
      students: '1,800+',
      price: '₹4,499 - ₹8,999',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop',
      features: ['Network Security', 'Ethical Hacking', 'Penetration Testing', 'Security Audits']
    },
    {
      id: 5,
      title: 'AR & VR Development',
      description: 'Build immersive AR & VR experiences',
      duration: '10 weeks',
      students: '1,200+',
      price: '₹3,499 - ₹6,999',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop',
      features: ['Unity 3D', 'ARCore', 'VR Development', '3D Modeling']
    },
    {
      id: 6,
      title: 'Game Development',
      description: 'Create stunning games from scratch',
      duration: '16 weeks',
      students: '2,000+',
      price: '₹5,499 - ₹10,999',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop',
      features: ['Unity', 'Unreal Engine', 'Game Physics', 'Multiplayer']
    },
    {
      id: 7,
      title: 'Prompt Engineering',
      description: 'Master the art of prompting AI models',
      duration: '4 weeks',
      students: '5,000+',
      price: '₹1,999 - ₹3,999',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop',
      features: ['Advanced Prompting', 'Chain of Thought', 'AI Optimization', 'Custom Prompts']
    }
  ];

  return (
    <section id="courses" className="py-24 bg-gradient-to-br from-orange-900 via-black to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Learn Future-Ready Skills</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Industry-leading courses designed to accelerate your career in technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-gray-400 mb-4">{course.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-300">
                    <Clock className="w-4 h-4 text-orange-500" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1 text-gray-300">
                    <Users className="w-4 h-4 text-orange-500" />
                    {course.students}
                  </div>
                </div>

                <div className="text-lg font-bold text-orange-500 mb-4">{course.price}</div>

                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, index) => (
                    <li key={index} className="text-gray-400 text-sm flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to={`/course/${course.id}`} className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                  Enroll Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Not sure which course to choose?</h3>
            <p className="text-gray-400 mb-6">Book a free counseling session with our experts.</p>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-500 transition-all">
              Get Free Counseling
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
