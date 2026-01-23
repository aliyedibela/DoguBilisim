import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Hikvision ColorVu Bullet Kamera",
      description: "ColorVu teknolojisi sayesinde gece ve düşük ışık koşullarında dahi renkli görüntü sunan profesyonel IP güvenlik kamerası. Apartman, site ve kampüs güvenliği için ideal çözüm.",
      price: 3200,
      imageUrl: "https://res-console.cloudinary.com/dg49av90b/thumbnails/v1/image/upload/v1769200489/TmV3X1Byb2plY3RfZjNtMnZp/drilldown",
      demoUrl: ""
    },
    {
      id: 2,
      name: "Hikvision Smart Hybrid Light Bullet Kamera",
      description: "Akıllı Hybrid Light teknolojisi ile ortama göre beyaz ışık ve IR arasında otomatik geçiş yapabilen dış mekan IP kamera. Okul, yurt ve bina çevre güvenliği için yüksek performans.",
      price: 2800,
      imageUrl: "https://res-console.cloudinary.com/dg49av90b/thumbnails/v1/image/upload/v1769201161/TmV3X1Byb2plY3RfN19kY2Fpem4=/drilldown",
      demoUrl: ""
    },
    {
      id: 3,
      name: "Hikvision Smart Hybrid Light Dome Kamera",
      description: "Vandal dayanımlı dome tasarımı ve Smart Hybrid Light özelliği ile iç mekanlar için güvenli ve estetik kamera çözümü.",
      price: 2600,
      imageUrl: "https://res-console.cloudinary.com/dg49av90b/thumbnails/v1/image/upload/v1769201627/TmV3X1Byb2plY3RfMTFfaTdneXRp/drilldown",
      demoUrl: ""
    },
    {
      id: 4,
      name: "AI PoE Switch – Smart PoE Yönetimi",
      description: "IP kamera ve network cihazları için özel olarak tasarlanmış AI destekli PoE switch.",
      price: 4200,
      imageUrl: "https://res-console.cloudinary.com/dg49av90b/thumbnails/v1/image/upload/v1769201303/TmV3X1Byb2plY3RfOF9tbnZtYWw=/drilldown",
      demoUrl: ""
    },
    {
      id: 5,
      name: "Hikvision UPS Güç Kaynağı",
      description: "Elektrik kesintilerinde kamera ve kayıt cihazlarının çalışmasını sürdüren yüksek kapasiteli UPS çözümleri.",
      price: 3500,
      imageUrl: "https://res-console.cloudinary.com/dg49av90b/thumbnails/v1/image/upload/v1769201943/TmV3X1Byb2plY3RfMTNfYzVibmZy/drilldown",
      demoUrl: ""
    },
    {
      id: 11,
      name: "Everest Kablosuz Klavye & Mouse Seti",
      description: "Kablosuz, TR Q klavye ve mouse seti.",
      price: 650,
      imageUrl: "https://res-console.cloudinary.com/dg49av90b/thumbnails/v1/image/upload/v1769200920/TmV3X1Byb2plY3RfNV9oa3VneGo=/drilldown",
      demoUrl: ""
    },
    {
      id: 12,
      name: "Everest Kablosuz Mouse",
      description: "Ergonomik, kablosuz mouse.",
      price: 350,
      imageUrl: "https://res-console.cloudinary.com/dg49av90b/thumbnails/v1/image/upload/v1769201051/TmV3X1Byb2plY3RfNl9vYXMxa2Y=/drilldown",
      demoUrl: ""
    },
    {
      id: 13,
      name: "Hikvision Embedded NVR DS-7600 Serisi",
      description: "IP kamera sistemleri için profesyonel kayıt cihazı.",
      price: 7200,
      imageUrl: "https://res-console.cloudinary.com/dg49av90b/thumbnails/v1/image/upload/v1769201557/TmV3X1Byb2plY3RfMTBfc3M4NDk4/drilldown",
      demoUrl: ""
    },
    {
      id: 14,
      name: "HDMI 4K Kablo",
      description: "4K Ultra HD destekli HDMI kablo.",
      price: 180,
      imageUrl: "https://res-console.cloudinary.com/dg49av90b/thumbnails/v1/image/upload/v1769200736/TmV3X1Byb2plY3RfM191YWxidTg=/drilldown",
      demoUrl: ""
    },
    {
      id: 15,
      name: "TP-Link 300 Mbps Kablosuz Router",
      description: "Ev ve küçük ofisler için router.",
      price: 1100,
      imageUrl: "https://res-console.cloudinary.com/dg49av90b/thumbnails/v1/image/upload/v1769201739/TmV3X1Byb2plY3RfMTJfdGR6Y2ds/drilldown",
      demoUrl: ""
    },
    {
      id: 17,
      name: "Canon Pixma 490 Mürekkep Kartuş",
      description: "Canon Pixma yazıcılar ile uyumlu kartuş.",
      price: 750,
      imageUrl: "https://res-console.cloudinary.com/dg49av90b/thumbnails/v1/image/upload/v1769200809/TmV3X1Byb2plY3RfNF9zdGtrbjA=/drilldown",
      demoUrl: ""
    },
    {
      id: 18,
      name: "Epson Refill Ink 103",
      description: "Epson EcoTank uyumlu orijinal mürekkep.",
      price: 480,
      imageUrl: "https://res-console.cloudinary.com/dg49av90b/thumbnails/v1/image/upload/v1769200809/TmV3X1Byb2plY3RfNF9zdGtrbjA=/drilldown",
      demoUrl: ""
    },
    {
      id: 19,
      name: "TN-1040 Muadil Toner",
      description: "Brother uyumlu muadil toner.",
      price: 620,
      imageUrl: "https://res-console.cloudinary.com/dg49av90b/thumbnails/v1/image/upload/v1769200585/TmV3X1Byb2plY3RfMV9hbDF4bGc=/drilldown",
      demoUrl: ""
    }
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

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
      <div className="products-header">
        <span className="subtitle">MAĞAZA & ÇÖZÜMLER</span>
        <h1 className="title">Hazır Donanım Ürünlerimiz</h1>
        <p className="description">
          İşletmenizin ihtiyaçlarına özel, kurulumu kolay ve yüksek performanslı
          paket donanım çözümlerimiz.
        </p>
      </div>

      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card" onClick={() => openModal(product)}>
              <div className="product-image-box">
                <img src={product.imageUrl} alt={product.name} />
                {product.demoUrl && <span className="demo-badge">DEMO MEVCUT</span>}
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
          <div className="no-data"><p>Henüz ürün eklenmemiş.</p></div>
        )}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>&times;</button>
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
                {/* GÜNCELLENEN KISIM BURASI: 
                   Link'e tıklandığında scroll kilidini açıp en tepeye gönderiyoruz.
                */}
                <Link 
                  to="/contact" 
                  className="btn-buy-modal"
                  onClick={() => {
                    document.body.style.overflow = 'auto'; // KİLİDİ AÇ
                    window.scrollTo(0, 0); // Sayfanın en tepesine git
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