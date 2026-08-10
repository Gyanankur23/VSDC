import React from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const PastEvents = () => {
  const events = [
    {
      id: 1,
      title: 'Flutter One-Day Workshop',
      date: 'August 2025',
      location: 'Thakur Polytechnic, Mumbai',
      description: 'An introduction to Flutter for absolute beginners with hands-on labs and live coding.',
      attendees: '300+',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'VighnoSpark 2025 Tech Exhibition',
      date: 'September 2025',
      location: 'Thakur Polytechnic, Mumbai',
      description: 'Grand tech exhibition with hands-on experiences, live demos, and startup showcases.',
      attendees: '500+',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'AI/ML Workshop Series',
      date: 'October 2025',
      location: 'Online',
      description: 'Comprehensive workshop series covering AI fundamentals and machine learning basics.',
      attendees: '200+',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Web Development Bootcamp',
      date: 'November 2025',
      location: 'Thakur Polytechnic, Mumbai',
      description: 'Intensive bootcamp on modern web development technologies and best practices.',
      attendees: '150+',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop'
    },
  ];

  return (
    <section id="events" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Past Events</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our <span className="text-orange-500 font-semibold">successful events</span> and workshops
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-300 cursor-pointer"
                onClick={() => window.open(`/event-details.html?id=${event.id}`, '_blank')}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-sm font-semibold">
                      {event.date}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {event.attendees}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2 text-orange-500 text-sm font-semibold group-hover:gap-3 transition-all">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
