import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="nav-logo">
          <span className="logo-text">DOĞU</span>
          <span className="logo-highlight">BİLİŞİM</span>
          <div className="logo-dot"></div>
        </Link>

        {/* Hamburger Menü İkonu (Mobilde Lazım Olursa) */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item"><Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Anasayfa</Link></li>
          <li className="nav-item"><Link to="/products" className="nav-link" onClick={() => setIsOpen(false)}>Ürünler</Link></li>
          <li className="nav-item"><Link to="/services" className="nav-link" onClick={() => setIsOpen(false)}>Hizmetler</Link></li>
          <li className="nav-item"><Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>Projeler</Link></li>
          <li className="nav-item-btn">
            <Link to="/contact" className="nav-btn" onClick={() => setIsOpen(false)}>İletişim</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;