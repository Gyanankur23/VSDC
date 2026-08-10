import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import Bootcamp from './components/Bootcamp';
import PastEvents from './components/PastEvents';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Team />
      <Bootcamp />
      <PastEvents />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
