import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
//import Gallery from './lesson2/components/Gallery.js'; // This component is imported but not used
//import Weather from './lesson3/components/page.js'; // This component is imported but not used
//import HomePage from  
import About from './TechFlow/components/about/aboutComponent.js';
import Services from './TechFlow/components/services/ServicesComponent.js';
import Contact from './TechFlow/components/contact/ContactComponent.js';
import HomePage from './TechFlow/components/HomePage/HomePageComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactThank from './TechFlow/components/contact/ContactThank.js';
import i18next from 'i18next';
import {useTranslation} from 'react-i18next';
import Header from './TechFlow/components/Header.js';
function App() {
  const { t } = useTranslation("global");

  const changeLanguage = code => {
    i18next.changeLanguage(code);
  };
  return (
    <BrowserRouter>
    <Header/>
     <h1>{t("mainSection.title")}</h1>
      <nav class="navbar bg-light border-bottom border-body">  
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
        <Route path="/ContactThank" element={<ContactThank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

