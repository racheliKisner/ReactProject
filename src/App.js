import React from 'react';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import About from './TechFlow/components/about/aboutComponent.js';
import Services from './TechFlow/components/services/ServicesComponent.js';
import Contact from './TechFlow/components/contact/ContactComponent.js';
import HomePage from './TechFlow/components/HomePage/HomePageComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactThank from './TechFlow/components/contact/ContactThank.js';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from './TechFlow/ChangeLanguage.js';
function App() {
  
  return (
    <BrowserRouter>
      <h1>welcome!</h1>
      
      <nav className="navbar bg-light border-bottom border-body"> 
      <ChangeLanguage />
       
        <Link className="navbar-brand" to="/">HomePage</Link>
        <Link className="navbar-brand" to="/about">About</Link>
        <Link className="navbar-brand" to="/contact">Contact</Link>
        <Link className="navbar-brand" to="/services">Services</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ContactThank" element={<ContactThank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;