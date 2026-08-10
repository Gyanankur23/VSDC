import React, { useState } from 'react';
import { Send, User, Mail, GraduationCap, MessageSquare, Sparkles, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch('https://submit-form.com/9HEU5iM2F', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      console.error('Submission error', err);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-orange-950/20 via-black to-gray-950 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-orange-500/10 rounded-full blur-3xl pointer-events-none animate-mesh-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-700/8 rounded-full blur-3xl pointer-events-none animate-mesh-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="text-center mb-16 animate-slideUp">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/40 px-5 py-2.5 rounded-full mb-4 shadow-lg shadow-orange-500/10 backdrop-blur-md animate-pulse-slow">
            <Sparkles className="w-5 h-5 text-orange-400 animate-float" />
            <span className="text-orange-400 font-bold text-xs md:text-sm tracking-wider uppercase">Join Our Community</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">Join VSDC Today</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Fill out the form below to get involved with <span className="text-gradient-orange font-bold">VSDC</span>,
            participate in bootcamps, and build your technical future.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-orange-500/20 shadow-2xl shadow-orange-500/5 backdrop-blur-xl animate-slideUp relative overflow-hidden">
            {submitted ? (
              <div className="text-center py-12 animate-fadeIn">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-2xl shadow-orange-500/40 animate-bounce-subtle">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black text-white mb-3">Application Received!</h3>
                <p className="text-gray-400 text-lg max-w-md mx-auto font-medium">
                  Thank you! We've received your message and will get back to you via email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="flex items-center gap-2 text-gray-300 font-extrabold text-sm mb-2.5">
                      <User className="w-4 h-4 text-orange-400" /> Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Manas Shukla"
                      className="w-full px-5 py-3.5 rounded-2xl border border-orange-500/20 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 outline-none transition-all duration-300 text-white bg-black/70 font-medium placeholder-gray-600 hover:border-orange-500/40"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="flex items-center gap-2 text-gray-300 font-extrabold text-sm mb-2.5">
                      <Mail className="w-4 h-4 text-orange-400" /> Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-5 py-3.5 rounded-2xl border border-orange-500/20 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 outline-none transition-all duration-300 text-white bg-black/70 font-medium placeholder-gray-600 hover:border-orange-500/40"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="department" className="flex items-center gap-2 text-gray-300 font-extrabold text-sm mb-2.5">
                    <GraduationCap className="w-4 h-4 text-orange-400" /> Department & Academic Year
                  </label>
                  <input
                    id="department"
                    type="text"
                    name="department"
                    required
                    placeholder="e.g. Data Science - Third Year"
                    className="w-full px-5 py-3.5 rounded-2xl border border-orange-500/20 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 outline-none transition-all duration-300 text-white bg-black/70 font-medium placeholder-gray-600 hover:border-orange-500/40"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="flex items-center gap-2 text-gray-300 font-extrabold text-sm mb-2.5">
                    <MessageSquare className="w-4 h-4 text-orange-400" /> Why do you want to join VSDC?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell us about your technical interests, skills, or projects..."
                    className="w-full px-5 py-3.5 rounded-2xl border border-orange-500/20 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 outline-none transition-all duration-300 text-white bg-black/70 font-medium placeholder-gray-600 hover:border-orange-500/40"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="shimmer-btn w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white font-black py-4 rounded-2xl hover:from-orange-600 hover:to-orange-500 transition-all transform hover:scale-[1.02] shadow-2xl shadow-orange-500/30 flex items-center justify-center gap-3 text-lg border border-orange-400/50 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
