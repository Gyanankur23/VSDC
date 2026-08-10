import React from 'react';
import Hero from './components/Hero';
import Team from './components/Team';
import Bootcamp from './components/Bootcamp';
import PastEvents from './components/PastEvents';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
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
