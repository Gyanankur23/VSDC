import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, ArrowRight, CheckCircle, BookOpen, Target, Award } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  
  const courses = {
    1: {
      title: 'AI & Machine Learning',
      description: 'Master AI and ML with hands-on projects',
      duration: '12 weeks',
      students: '2,500+',
      price: '₹4,999 - ₹9,999',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=400&fit=crop',
      features: ['Neural Networks', 'Deep Learning', 'TensorFlow', 'Model Deployment'],
      curriculum: [
        'Week 1-2: Python for AI & ML Fundamentals',
        'Week 3-4: Neural Networks & Deep Learning',
        'Week 5-6: TensorFlow & PyTorch Frameworks',
        'Week 7-8: Computer Vision Applications',
        'Week 9-10: Natural Language Processing',
        'Week 11-12: Model Deployment & Production'
      ],
      outcomes: ['Build 5+ AI/ML projects', 'Master TensorFlow & PyTorch', 'Deploy ML models to production', 'Get industry-ready portfolio']
    },
    2: {
      title: 'Generative AI & Agentic AI',
      description: 'Build AI agents and leverage generative AI',
      duration: '8 weeks',
      students: '3,000+',
      price: '₹3,999 - ₹7,999',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      features: ['GPT Integration', 'AI Agents', 'Prompt Engineering', 'LLM Fine-tuning'],
      curriculum: [
        'Week 1-2: Introduction to Generative AI',
        'Week 3-4: GPT & LLM Integration',
        'Week 5-6: Building AI Agents',
        'Week 7-8: LLM Fine-tuning & Optimization'
      ],
      outcomes: ['Build custom AI agents', 'Master prompt engineering', 'Fine-tune LLMs for specific tasks', 'Deploy generative AI applications']
    },
    3: {
      title: 'Data Science',
      description: 'Turn data into insights with ML',
      duration: '14 weeks',
      students: '4,500+',
      price: '₹5,999 - ₹11,999',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      features: ['Python', 'Pandas', 'Data Visualization', 'ML Algorithms'],
      curriculum: [
        'Week 1-3: Python for Data Science',
        'Week 4-6: Data Analysis with Pandas',
        'Week 7-9: Data Visualization',
        'Week 10-12: Machine Learning Algorithms',
        'Week 13-14: Real-world Projects'
      ],
      outcomes: ['Master data analysis', 'Build ML models', 'Create stunning visualizations', 'Solve real business problems']
    },
    4: {
      title: 'Cybersecurity',
      description: 'Protect systems from cyber threats',
      duration: '12 weeks',
      students: '1,800+',
      price: '₹4,499 - ₹8,999',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop',
      features: ['Network Security', 'Ethical Hacking', 'Penetration Testing', 'Security Audits'],
      curriculum: [
        'Week 1-3: Network Security Fundamentals',
        'Week 4-6: Ethical Hacking Techniques',
        'Week 7-9: Penetration Testing',
        'Week 10-12: Security Audits & Compliance'
      ],
      outcomes: ['Become certified ethical hacker', 'Master penetration testing', 'Secure enterprise networks', 'Get cybersecurity certifications']
    },
    5: {
      title: 'AR & VR Development',
      description: 'Build immersive AR & VR experiences',
      duration: '10 weeks',
      students: '1,200+',
      price: '₹3,499 - ₹6,999',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop',
      features: ['Unity 3D', 'ARCore', 'VR Development', '3D Modeling'],
      curriculum: [
        'Week 1-2: Unity 3D Fundamentals',
        'Week 3-4: AR Development with ARCore',
        'Week 5-6: VR Development',
        'Week 7-8: 3D Modeling & Animation',
        'Week 9-10: Final AR/VR Project'
      ],
      outcomes: ['Build AR applications', 'Create VR experiences', 'Master Unity 3D', 'Develop immersive games']
    },
    6: {
      title: 'Game Development',
      description: 'Create stunning games from scratch',
      duration: '16 weeks',
      students: '2,000+',
      price: '₹5,499 - ₹10,999',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop',
      features: ['Unity', 'Unreal Engine', 'Game Physics', 'Multiplayer'],
      curriculum: [
        'Week 1-4: Game Development Fundamentals',
        'Week 5-8: Unity Game Engine',
        'Week 9-12: Unreal Engine',
        'Week 13-16: Multiplayer & Publishing'
      ],
      outcomes: ['Build complete games', 'Master Unity & Unreal', 'Implement multiplayer features', 'Publish games to stores']
    },
    7: {
      title: 'Prompt Engineering',
      description: 'Master the art of prompting AI models',
      duration: '4 weeks',
      students: '5,000+',
      price: '₹1,999 - ₹3,999',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop',
      features: ['Advanced Prompting', 'Chain of Thought', 'AI Optimization', 'Custom Prompts'],
      curriculum: [
        'Week 1: Prompt Engineering Fundamentals',
        'Week 2: Advanced Prompting Techniques',
        'Week 3: Chain of Thought & AI Optimization',
        'Week 4: Custom Prompts & Applications'
      ],
      outcomes: ['Master prompt engineering', 'Optimize AI responses', 'Build custom prompt systems', 'Become AI prompt expert']
    }
  };

  const course = courses[id];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-900 via-black to-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Course Not Found</h1>
          <Link to="/vighnolearn" className="text-orange-500 hover:text-orange-400">Back to Courses</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-black to-gray-900">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{course.title}</h1>
            <p className="text-xl text-gray-300 mb-6">{course.description}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-5 h-5 text-orange-500" />
                {course.duration}
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-5 h-5 text-orange-500" />
                {course.students}
              </div>
              <div className="text-2xl font-bold text-orange-500">{course.price}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Features */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-orange-500" />
                What You'll Learn
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-orange-500" />
                Curriculum
              </h2>
              <div className="space-y-4">
                {course.curriculum.map((week, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-300">{week}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-orange-500" />
                Learning Outcomes
              </h2>
              <div className="space-y-4">
                {course.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-300">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 sticky top-24">
              <div className="text-3xl font-bold text-orange-500 mb-6">{course.price}</div>
              <button className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors mb-4 flex items-center justify-center gap-2">
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link to="/vighnolearn/courses" className="block text-center text-gray-400 hover:text-orange-500 transition-colors">
                ← Back to Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
