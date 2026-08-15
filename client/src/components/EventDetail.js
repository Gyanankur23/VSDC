import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowRight, Clock, Award } from 'lucide-react';

const EventDetail = () => {
  const { id } = useParams();
  
  const events = {
    1: {
      title: 'Buildathon 2026',
      type: 'Hackathon',
      location: 'Bengaluru',
      date: 'Feb 15, 2026',
      attendees: '500+',
      description: 'Build a full-stack application in two days. Compete with top teams and get hired.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop',
      details: [
        '48-hour coding marathon',
        'Team size: 2-4 members',
        'Prizes worth ₹5,00,000',
        'Mentorship from industry experts',
        'Job opportunities for winners',
        'Free food and accommodation'
      ],
      schedule: [
        'Day 1: Kickoff & Team Formation',
        'Day 1: Problem Statement Release',
        'Day 1: Development Phase',
        'Day 2: Final Submission',
        'Day 2: Presentations & Judging',
        'Day 2: Awards Ceremony'
      ]
    },
    2: {
      title: 'Startup Incubator',
      type: 'Accelerator',
      location: 'Mumbai',
      date: 'Mar 08, 2026',
      attendees: '200+',
      description: 'Turn your idea into a funded startup with mentorship and investor access.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop',
      details: [
        '12-week intensive program',
        'Seed funding up to ₹50,00,000',
        'One-on-one mentorship',
        'Co-working space access',
        'Legal and financial support',
        'Demo Day with investors'
      ],
      schedule: [
        'Week 1-2: Idea Validation',
        'Week 3-4: Market Research',
        'Week 5-6: Product Development',
        'Week 7-8: Go-to-market Strategy',
        'Week 9-10: Pitch Preparation',
        'Week 11-12: Investor Meetings'
      ]
    },
    3: {
      title: 'Open Source Con',
      type: 'Conference',
      location: 'Delhi',
      date: 'Apr 22, 2026',
      attendees: '1000+',
      description: 'Meet maintainers, contribute to real projects, and level up your open-source game.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop',
      details: [
        'Keynote from top maintainers',
        'Hands-on contribution workshops',
        'Networking with open source community',
        'Swag and merchandise',
        'Certificate of participation',
        'Job opportunities in open source'
      ],
      schedule: [
        '9 AM: Registration & Breakfast',
        '10 AM: Opening Keynote',
        '11 AM: Workshop Session 1',
        '1 PM: Lunch & Networking',
        '2 PM: Workshop Session 2',
        '4 PM: Panel Discussion'
      ]
    },
    4: {
      title: 'Career Fair 2026',
      type: 'Hiring',
      location: 'Hyderabad',
      date: 'May 10, 2026',
      attendees: '2000+',
      description: 'Connect with 50+ companies actively hiring developers and designers.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop',
      details: [
        '50+ hiring companies',
        'On-spot interviews',
        'Resume review sessions',
        'Career counseling',
        'Job offers on the spot',
        'Free career resources'
      ],
      schedule: [
        '9 AM: Company Booths Open',
        '10 AM: Resume Workshop',
        '12 PM: Networking Lunch',
        '1 PM: Interview Sessions',
        '3 PM: Panel Discussion',
        '5 PM: Closing Ceremony'
      ]
    },
    5: {
      title: 'AI Summit',
      type: 'Summit',
      location: 'Pune',
      date: 'Jun 05, 2026',
      attendees: '800+',
      description: 'Learn from AI pioneers and discover the latest in artificial intelligence.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
      details: [
        'Keynote from AI researchers',
        'Hands-on AI workshops',
        'Networking with AI professionals',
        'AI product showcases',
        'Certificate of attendance',
        'Exclusive AI resources'
      ],
      schedule: [
        '9 AM: Registration',
        '10 AM: Opening Keynote',
        '11 AM: AI Trends Talk',
        '1 PM: Lunch',
        '2 PM: Workshop Session',
        '4 PM: Networking'
      ]
    },
    6: {
      title: 'Design Workshop',
      type: 'Workshop',
      location: 'Chennai',
      date: 'Jul 18, 2026',
      attendees: '300+',
      description: 'Master design thinking and build beautiful user interfaces.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
      details: [
        'Design thinking principles',
        'UI/UX best practices',
        'Hands-on design exercises',
        'Figma training',
        'Portfolio review',
        'Design resources'
      ],
      schedule: [
        '9 AM: Introduction',
        '10 AM: Design Thinking',
        '12 PM: Lunch Break',
        '1 PM: UI Workshop',
        '3 PM: UX Session',
        '5 PM: Q&A'
      ]
    }
  };

  const event = events[id];

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-900 via-black to-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Event Not Found</h1>
          <Link to="/vighnolearn/events" className="text-orange-500 hover:text-orange-400">Back to Events</Link>
        </div>
      </div>
    );
  }

  const isEventPast = new Date(event.date) < new Date();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-black to-gray-900">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="container mx-auto">
            <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {event.type}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{event.title}</h1>
            <p className="text-xl text-gray-300 mb-6">{event.description}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="w-5 h-5 text-orange-500" />
                {event.date}
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-orange-500" />
                {event.location}
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-5 h-5 text-orange-500" />
                {event.attendees}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What You'll Get */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-orange-500" />
                What You'll Get
              </h2>
              <div className="space-y-4">
                {event.details.map((detail, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-500 font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-300">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-orange-500" />
                Event Schedule
              </h2>
              <div className="space-y-4">
                {event.schedule.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6">Event Status</h3>
              <div className="mb-6">
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                  isEventPast 
                    ? 'bg-gray-600 text-white' 
                    : 'bg-green-500 text-white'
                }`}>
                  {isEventPast ? 'Past Event' : 'Upcoming'}
                </span>
              </div>
              {!isEventPast && (
                <button className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors mb-4 flex items-center justify-center gap-2">
                  Register Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
              <Link to="/vighnolearn/events" className="block text-center text-gray-400 hover:text-orange-500 transition-colors">
                ← Back to Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
