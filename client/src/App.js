import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import VighnoLearnEvents from './components/VighnoLearnEvents';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VighnoLearnNavbar from './components/VSDCNavbar';
import VighnoLearnHero from './components/VSDCHero';
import Team from './components/Team';
import Bootcamp from './components/Bootcamp';
import PastEvents from './components/PastEvents';
import VSDCContact from './components/VSDCContact';
import VighnoLearnFooter from './components/VighnoLearnFooter';
import CourseDetail from './components/CourseDetail';
import EventDetail from './components/EventDetail';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* VSDC Route - Root */}
        <Route path="/" element={
          <div className="min-h-screen">
            <Navbar />
            <Hero />
            <Team />
            <Bootcamp />
            <PastEvents />
            <VSDCContact />
            <Footer />
          </div>
        } />

        {/* VighnoLearn Home */}
        <Route path="/vighnolearn" element={
          <div className="min-h-screen">
            <VighnoLearnNavbar />
            <VighnoLearnHero />
            <VighnoLearnFooter />
          </div>
        } />

        {/* VighnoLearn About */}
        <Route path="/vighnolearn/about" element={
          <div className="min-h-screen">
            <VighnoLearnNavbar />
            <About />
            <VighnoLearnFooter />
          </div>
        } />

        {/* VighnoLearn Courses */}
        <Route path="/vighnolearn/courses" element={
          <div className="min-h-screen">
            <VighnoLearnNavbar />
            <Courses />
            <VighnoLearnFooter />
          </div>
        } />

        {/* VighnoLearn Events */}
        <Route path="/vighnolearn/events" element={
          <div className="min-h-screen">
            <VighnoLearnNavbar />
            <VighnoLearnEvents />
            <VighnoLearnFooter />
          </div>
        } />

        {/* Event Detail Route */}
        <Route path="/vighnolearn/events/:id" element={
          <div className="min-h-screen">
            <VighnoLearnNavbar />
            <EventDetail />
            <VighnoLearnFooter />
          </div>
        } />

        {/* VighnoLearn Contact */}
        <Route path="/vighnolearn/contact" element={
          <div className="min-h-screen">
            <VighnoLearnNavbar />
            <Contact />
            <VighnoLearnFooter />
          </div>
        } />

        {/* Course Detail Route */}
        <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
