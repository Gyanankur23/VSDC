import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const VighnoLearnEvents = () => {
  const events = [
    {
      id: 1,
      title: 'Buildathon 2026',
      type: 'Hackathon',
      location: 'Bengaluru',
      date: 'Feb 15, 2026',
      attendees: '500+',
      description: 'Build a full-stack application in two days. Compete with top teams and get hired.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Startup Incubator',
      type: 'Accelerator',
      location: 'Mumbai',
      date: 'Mar 08, 2026',
      attendees: '200+',
      description: 'Turn your idea into a funded startup with mentorship and investor access.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Open Source Con',
      type: 'Conference',
      location: 'Delhi',
      date: 'Apr 22, 2026',
      attendees: '1000+',
      description: 'Meet maintainers, contribute to real projects, and level up your open-source game.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Career Fair 2026',
      type: 'Hiring',
      location: 'Hyderabad',
      date: 'May 10, 2026',
      attendees: '2000+',
      description: 'Connect with 50+ companies actively hiring developers and designers.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'AI Summit',
      type: 'Summit',
      location: 'Pune',
      date: 'Jun 05, 2026',
      attendees: '800+',
      description: 'Learn from AI pioneers and discover the latest in artificial intelligence.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Design Workshop',
      type: 'Workshop',
      location: 'Chennai',
      date: 'Jul 18, 2026',
      attendees: '300+',
      description: 'Master design thinking and build beautiful user interfaces.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop'
    }
  ];

  const isEventPast = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    return eventDate < today;
  };

  return (
    <section id="vighnolearn-events" className="py-24 bg-gradient-to-br from-orange-900 via-black to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Upcoming Experiences</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join our events to learn, build, and connect with industry leaders and fellow builders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {event.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="w-4 h-4 text-orange-500" />
                    {event.attendees}
                  </div>
                </div>

                <Link 
                  to={`/vighnolearn/events/${event.id}`}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                >
                  {isEventPast(event.date) ? 'View Event' : 'Register Now'}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Want to host an event?</h3>
            <p className="text-gray-400 mb-6">Partner with us to bring your hackathon, workshop, or meetup to our community.</p>
            <Link 
              to="/vighnolearn/contact"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-500 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VighnoLearnEvents;
