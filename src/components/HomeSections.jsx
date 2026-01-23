import React from 'react';
import './HomeSections.css';
import { Link } from 'react-router-dom';

const HomeSections = () => {
  return (
    <div className="home-content">
      <section className="stats-section">
        <div className="stat-item">
          <h2 className="stat-number">15+</h2>
          <p className="stat-label">Yıllık Saha Tecrübesi</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h2 className="stat-number">1000+</h2>
          <p className="stat-label">Kurulan Kamera Sistemi</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h2 className="stat-number">7/24</h2>
          <p className="stat-label">Teknik Destek</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h2 className="stat-number">%99</h2>
          <p className="stat-label">Referans Memnuniyeti</p>
        </div>
      </section>

      <section className="services-preview-section">
        <div className="section-header">
          <span className="subtitle">NELER YAPIYORUZ?</span>
          <h2 className="title">Güvenlik & Network Çözümleri</h2>
          <p className="description">
            Erzurum merkez ve ilçelerinde; kamera sistemleri, network altyapıları ve donanım çözümlerini
            anahtar teslim olarak sunuyoruz.
          </p>
        </div>

        <div className="cards-grid">
          {/* Kart 1 */}
          <div className="feature-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
            </div>
            <h3>Network Altyapı Hizmetleri</h3>
            <p>Fiber, switch, rack ve yapısal kablolama çözümleri ile sağlam ve kesintisiz altyapı.</p>
            <a href="/services" className="card-link">İncele &rarr;</a>
          </div>

          {/* Kart 2 */}
          <div className="feature-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3>Güvenlik Kamera Sistemleri</h3>
            <p>Apartman, site, okul, yurt ve kurumlar için profesyonel kamera çözümleri.</p>
            <a href="/services" className="card-link">İncele &rarr;</a>
          </div>

          <div className="feature-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>
            <h3>Hikvision Ürün Satışı</h3>
            <p>ColorVu, AcuSense, DVR/NVR ve UPS dahil orijinal Hikvision ürünleri.</p>
            <a href="/services" className="card-link">İncele &rarr;</a>
          </div>
        </div>
      </section>

      <section className="why-us-section">
        <div className="why-us-container">
          <div className="why-us-image">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" alt="Teknoloji Ofisi" />
            <div className="image-badge">
              <span>ERZURUM</span>
              <small>Güvenlikte Lider</small>
            </div>
          </div>
          <div className="why-us-content">
            <span className="subtitle">NEDEN DOĞU BİLİŞİM?</span>
            <h2 className="title">Erzurum’da Network Denince İlk Akla Gelen</h2>
            <p>
              Atatürk Üniversitesi’nden apartmanlara, liselerden öğrenci yurtlarına kadar
              yüzlerce projede edindiğimiz tecrübeyle güvenliği şansa bırakmıyoruz.
            </p>
            <ul className="check-list">
              <li>
                <span className="check-icon">✓</span>
                Güçlü Referanslar & Saha Tecrübesi
              </li>
              <li>
                <span className="check-icon">✓</span>
                Hızlı Müdahale & Yerinde Servis
              </li>
              <li>
                <span className="check-icon">✓</span>
                Orijinal Ürün & Profesyonel Kurulum
              </li>
            </ul>
            <Link to="/contact" className="btn-neon" style={{ marginTop: '20px', display: 'inline-block' }}>
              Ücretsiz Keşif Talep Et
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSections;
