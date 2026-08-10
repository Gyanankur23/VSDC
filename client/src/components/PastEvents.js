import React from 'react';
import { Calendar, Users, ArrowRight, Sparkles } from 'lucide-react';

const PastEvents = () => {
  const events = [
    { id: "flutter-workshop", title: "Flutter One-Day Workshop", date: "August 2024", attendees: "50+ Participants", description: "Introduction to Flutter for absolute beginners. Hands-on workshop covering cross-platform app development, hot-reload features, and custom UI creation using Google's Flutter framework." },
    { id: "vighnospark-2025", title: "VighnoSpark 2025 Tech Exhibition", date: "August 2025", attendees: "500+ Attendees", description: "Tech exhibition featuring hands-on experiences, live demos, inspiring talks, and startup showcases. A full-sensory dive into the tech-driven world of tomorrow at Thakur Polytechnic." },
    { id: "ai-workshop", title: "AI Workshop Series", date: "March 2024", attendees: "45+ Participants", description: "Hands-on workshop covering neural networks, deep learning fundamentals, and practical implementation using TensorFlow." },
    { id: "web-dev-bootcamp", title: "Web Development Bootcamp", date: "February 2024", attendees: "60+ Participants", description: "Intensive 3-day bootcamp on modern web technologies including React, Node.js, and deployment strategies." },
    { id: "data-science-hackathon", title: "Data Science Hackathon", date: "January 2024", attendees: "30+ Teams", description: "24-hour hackathon challenging students to solve real-world data problems using analytics and machine learning." },
    { id: "industry-expert-talk", title: "Industry Expert Talk", date: "December 2023", attendees: "100+ Attendees", description: "Guest lecture by senior engineers from top tech companies sharing insights on career growth and industry trends." },
    { id: "python-workshop", title: "Python Programming Workshop", date: "November 2023", attendees: "50+ Participants", description: "Beginner to advanced Python programming covering data structures, algorithms, and practical applications." },
    { id: "cloud-seminar", title: "Cloud Computing Seminar", date: "October 2023", attendees: "40+ Participants", description: "Introduction to cloud platforms, AWS services, and best practices for scalable application deployment." },
  ];

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none animate-mesh-float"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-orange-700/10 rounded-full blur-3xl pointer-events-none animate-mesh-float" style={{ animationDelay: '5s' }}></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="text-center mb-16 animate-slideUp">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/40 px-5 py-2.5 rounded-full mb-4 shadow-lg shadow-orange-500/10 backdrop-blur-md animate-pulse-slow">
            <Calendar className="w-5 h-5 text-orange-400 animate-float" />
            <span className="text-orange-400 font-bold text-xs md:text-sm tracking-wider uppercase">Our Footprint</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">Past Events</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our flagship <span className="text-gradient-orange font-bold">workshops</span>,{' '}
            <span className="text-white font-bold">hackathons</span>, and tech talks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-950 to-black rounded-3xl overflow-hidden border border-orange-900/40 hover:border-orange-500 transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.03] cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 animate-slideUp flex flex-col"
              style={{ animationDelay: `${(index % 3) * 0.15}s` }}
              onClick={() => window.open(`/event-details.html?id=${event.id}`, '_blank')}
            >
              <div className="h-2.5 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 group-hover:h-3.5 transition-all duration-300"></div>
              <div className="p-7 flex-1">
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-orange-500/15 text-orange-400 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border border-orange-500/30 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    {event.date}
                  </span>
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs font-bold bg-black/60 px-3 py-1 rounded-full border border-gray-800">
                    <Users className="w-3.5 h-3.5 text-orange-500" />
                    {event.attendees}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-orange-400 transition-colors leading-snug">{event.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm font-medium mb-6">{event.description}</p>
              </div>
              <div className="px-7 pb-7">
                <div className="flex items-center gap-2 text-orange-500 font-extrabold text-sm group-hover:gap-3 transition-all">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#contact" className="shimmer-btn bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white px-10 py-4 rounded-2xl font-black hover:from-orange-600 hover:to-orange-500 transition-all transform hover:scale-105 shadow-xl shadow-orange-500/40 border border-orange-400/50 inline-block text-center cursor-pointer">
            View All Events & Bootcamps
          </a>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
