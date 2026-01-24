import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import { Helmet } from 'react-helmet-async';
import ups from '../assets/icons/dbups.png';
import poe from '../assets/icons/dbpoe.png';
import bullet from '../assets/icons/dbbullet.png';
import tplink from '../assets/icons/dbtplink.png';
import light from '../assets/icons/dblight.png';
import nvr from '../assets/icons/dbnvrembedded.png';
import mouse from '../assets/icons/everestmouse.png';
import klavye from '../assets/icons/everestklavye.png';
import kartustoner from '../assets/icons/kartustoner.png';
import hdmi from '../assets/icons/hdmi.png';
import refill from '../assets/icons/refillink.png';
import tn1040 from '../assets/icons/tn1040.png';
import fdn432 from '../assets/icons/fdn432.png';
import kyocera from '../assets/icons/kyocera.png';
import toner85 from '../assets/icons/toner85.png';
import hpAio from '../assets/icons/allinone.png';
import ssd from '../assets/icons/ssd.png';
import colorvu from '../assets/icons/colorvu.png';

const Products = () => {
  const categories = [
    { id: 'all', name: 'TÜM ÜRÜNLER' },
    { id: 'security', name: 'GÜVENLİK & KAMERA' },
    { id: 'network', name: 'NETWORK & ALTYAPI' },
    { id: 'printer', name: 'YAZICI & SARF' },
    { id: 'pc', name: 'BİLGİSAYAR & DONANIM' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    // --- GÜVENLİK ---
    {
      id: 1,
      category: 'security',
      name: "Hikvision ColorVu Bullet Kamera",
      description: "ColorVu teknolojisi sayesinde gece ve düşük ışık koşullarında dahi renkli görüntü sunan profesyonel IP güvenlik kamerası.",
      price: 3200,
      imageUrl: colorvu,
    },
    {
      id: 2,
      category: 'security',
      name: "Hikvision Smart Hybrid Light Bullet",
      description: "Akıllı Hybrid Light teknolojisi ile ortama göre beyaz ışık ve IR arasında otomatik geçiş yapabilen dış mekan IP kamera.",
      price: 2800,
      imageUrl: bullet,
    },
    {
      id: 3,
      category: 'security',
      name: "Hikvision Smart Hybrid Light Dome",
      description: "Vandal dayanımlı dome tasarımı ve Smart Hybrid Light özelliği ile iç mekanlar için güvenli ve estetik kamera çözümü.",
      price: 2600,
      imageUrl: light,
    },
    {
      id: 13,
      category: 'security',
      name: "Hikvision Embedded NVR Kayıt Cihazı",
      description: "IP kamera sistemleri için profesyonel, yüksek bant genişliğine sahip ağ kayıt cihazı.",
      price: 7200,
      imageUrl: nvr,
    },

    // --- NETWORK & ALTYAPI ---
    {
      id: 4,
      category: 'network',
      name: "AI PoE Switch – Smart Yönetim",
      description: "IP kamera ve network cihazları için özel olarak tasarlanmış AI destekli PoE switch.",
      price: 4200,
      imageUrl: poe,
    },
    {
      id: 5,
      category: 'network',
      name: "Hikvision UPS Güç Kaynağı",
      description: "Elektrik kesintilerinde kamera ve kayıt cihazlarının çalışmasını sürdüren yüksek kapasiteli UPS çözümleri.",
      price: 3500,
      imageUrl: ups,
    },
    {
      id: 14,
      category: 'network',
      name: "HDMI 4K Ultra HD Kablo",
      description: "Görüntü aktarımında kayıpsız performans sunan 4K destekli altın uçlu HDMI kablo.",
      price: 180,
      imageUrl: hdmi,
    },
    {
      id: 15,
      category: 'network',
      name: "TP-Link 300 Mbps Router",
      description: "Ev ve küçük ofisler için geniş kapsama alanı sunan kablosuz router.",
      price: 1100,
      imageUrl: tplink,
    },

    // --- BİLGİSAYAR & DONANIM ---
    {
      id: 11,
      category: 'pc',
      name: "Everest Kablosuz Klavye & Mouse",
      description: "Ofis kullanımı için ergonomik, uzun pil ömürlü kablosuz set.",
      price: 650,
      imageUrl: klavye,
    },
    {
      id: 12,
      category: 'pc',
      name: "Everest Optik Mouse",
      description: "Ele oturan tasarım, hassas optik sensörlü kablosuz mouse.",
      price: 350,
      imageUrl: mouse,
    },
    {
      id: 25, 
      category: 'pc',
      name: "HP All-in-One Kurumsal PC",
      description: "Kasa kalabalığını ortadan kaldıran şık tasarım. Yüksek işlemci performansı ile ofisler için mükemmel çözüm.",
      price: 24500,
      imageUrl: hpAio,
    },
    {
      id: 27, 
      category: 'pc',
      name: "TwinMOS Yüksek Hızlı SSD",
      description: "Bilgisayarınızı hızlandıran, darbelere dayanıklı 550MB/s okuma hızlı SSD disk.",
      price: 950,
      imageUrl: ssd,
    },

    // --- YAZICI & SARF ---
    {
      id: 20, 
      category: 'printer',
      name: "Canon Pixma 490 Kartuş",
      description: "Canon Pixma yazıcılar ile tam uyumlu orijinal mürekkep kartuşu.",
      price: 750,
      imageUrl: kartustoner,
    },
    {
      id: 21,
      category: 'printer',
      name: "Epson Refill Ink 103",
      description: "Epson EcoTank serisi için orijinal dolum mürekkebi.",
      price: 480,
      imageUrl: refill,
    },
    {
      id: 22, 
      category: 'printer',
      name: "TN-1040 Muadil Toner",
      description: "Brother yazıcılarla uyumlu, yüksek baskı kapasiteli muadil toner.",
      price: 620,
      imageUrl: tn1040,
    },
    {
      id: 23, 
      category: 'printer',
      name: "FDN432 HP Lazer Yazıcı",
      description: "Ofis içi yoğun kullanıma uygun, hızlı ve çift taraflı baskı özellikli lazer yazıcı.",
      price: 18500, 
      imageUrl: fdn432,
    },
    {
      id: 24, 
      category: 'printer',
      name: "Kyocera 4500ix Fotokopi",
      description: "A3/A4 baskı, tarama ve fotokopi özellikli dev kurumsal çözüm.",
      price: 65000,
      imageUrl: kyocera,
    },
    {
      id: 26, 
      category: 'printer',
      name: "HP 85A Lazer Toner",
      description: "HP LaserJet serisi ile tam uyumlu, lekesiz baskı sağlayan toner.",
      price: 450,
      imageUrl: toner85,
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const openModal = (product) => {
    setSelectedProduct(product);
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.paddingRight = '0px';
    document.body.style.overflow = 'auto'; 
  };
  

  return (
    <div className="products-page">
      <Helmet>
        <title>Kalite İçin - Doğu Bilişim</title>
        <meta name="description" content="Hikvision kameralar, network ürünleri ve bilgisayar donanımları..." />
      </Helmet>
      <div className="products-header">
        
        <span className="subtitle">MAĞAZA & ÇÖZÜMLER</span>
        <h1 className="title">Hazır Donanım Ürünlerimiz</h1>
        <p className="description">
          İşletmenizin ihtiyaçlarına özel, kurulumu kolay ve yüksek performanslı
          paket donanım çözümlerimiz.
        </p>

        {/* --- KATEGORİ TABLARI --- */}
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card" onClick={() => openModal(product)}>
              <div className="product-image-box">
                <img src={product.imageUrl} alt={product.name} />
                <div className="overlay">
                   <button className="view-btn">İncele</button>
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.name}</h3>
                <div className="product-price-row">
                  {product.price ? (
                    <div className="price-tag">
                      <span className="currency">₺</span>
                      <span className="amount">{product.price.toLocaleString('tr-TR')}</span>
                    </div>
                  ) : (
                    <div className="price-tag-ask">
                      <span className="ask-text">Teklif Alınız</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-data"><p>Bu kategoride henüz ürün bulunmuyor.</p></div>
        )}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
         <button className="close-modal-btn" onClick={closeModal} aria-label="Pencereyi Kapat" >&times;</button>
            <div className="modal-image">
               <img src={selectedProduct.imageUrl} alt={selectedProduct.name} />
            </div>
            <div className="modal-body">
              <div className="modal-header-row">
                 <h2>{selectedProduct.name}</h2>
                 {selectedProduct.price ? (
                    <div className="price-tag-lg">
                      ₺{selectedProduct.price.toLocaleString('tr-TR')}
                    </div>
                  ) : (
                    <div className="price-tag-ask-lg">Fiyat Sorunuz</div>
                  )}
              </div>
              <p className="modal-desc">{selectedProduct.description}</p>
              
              <div className="modal-actions">
                <Link 
                  to="/contact" 
                  className="btn-buy-modal"
                  onClick={() => {
                    document.body.style.overflow = 'auto';
                    window.scrollTo(0, 0);
                  }}
                >
                  {selectedProduct.price ? 'Hemen Satın Al' : 'Teklif İste'}
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;