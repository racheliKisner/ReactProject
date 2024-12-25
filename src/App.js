
import { Link, Route, Routes } from 'react-router-dom';
import Gallery from './lesson2/components/Gallery.js';
import Weather from './lesson3/components/page.js';
function App() {
  return(
  <BrowserRouter>
  <nav>
    <Link to="/">HomePage</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Aontact</Link>
    <Link to="/services">Services</Link>
  </nav>
  <Routes>
     <Route path="/" element={<homePageComponent/>}/>
     <Route path="/about" element={<aboutComponent/>}/>
     <Route path="/Contact" element={<ContactComponent/>}/>
     <Route path="/services" element={<ServicesComponent/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
