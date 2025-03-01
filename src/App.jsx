import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Mission from './pages/Mission';
import Testimonials from './pages/Testimonials';
import Team from './pages/Team';
import Events from './pages/Events';
import Inll from './pages/Inll'; // Add this import statement
import Contacts from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path ="/inll" element={<Inll />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

