import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import SpecializedServices from './components/SpecializedServices';
import Works from './components/Works';
import About from './components/About';
import OurClients from './components/OurClients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <SpecializedServices />
      <Works />
      <About />
      <OurClients />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;