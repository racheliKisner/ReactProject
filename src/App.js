import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
//import Gallery from './lesson2/components/Gallery.js'; // This component is imported but not used
//import Weather from './lesson3/components/page.js'; // This component is imported but not used
//import HomePage from  
import About from './TechFlow/components/about/aboutComponent.js';
import Services from './TechFlow/components/services/ServicesComponent.js';
import Contact from './TechFlow/components/contact/ContactComponent.js';
import HomePage from './TechFlow/components/HomePage/HomePageComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">  
        <Link className="navbar-brand" to="/">HomePage</Link>
        <Link className="navbar-brand" to="/about">About</Link>
        <Link className="navbar-brand" to="/contact">Contact</Link>
        <Link className="navbar-brand" to="/services">Services</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

