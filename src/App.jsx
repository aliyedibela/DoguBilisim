import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react" 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import HomeSections from './components/HomeSections'; 
import Services from './components/Services';
import Projects from './components/Projects';
import Products from './components/Products';
import Footer from './components/Footer';
import './App.css';

const Home = () => (
  <main>
    <Hero />
    <HomeSections />  
  </main>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<div style={{paddingTop: '100px', textAlign:'center'}}>Sayfa Bulunamadı</div>} />
      </Routes>
      <Footer />
      <Analytics /> 
    </Router>
  );
}

export default App;