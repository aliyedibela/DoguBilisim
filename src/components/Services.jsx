import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
const services = [
  {
    id: 1,
    title: "Güvenlik Kamera Sistemleri",
    shortDescription: "Anahtar teslim profesyonel kamera çözümleri.",
    longDescription: "Hikvision başta olmak üzere IP ve analog kamera sistemlerinin keşif, satış, montaj ve devreye alma süreçlerini uçtan uca gerçekleştiriyoruz. Ev, iş yeri, site, fabrika ve kamu alanları için 7/24 güvenlik sağlıyoruz."
  },
  {
    id: 2,
    title: "Network & Altyapı Çözümleri",
    shortDescription: "Sağlam, hızlı ve kesintisiz altyapı.",
    longDescription: "Switch, router, firewall, kablolama ve rack sistemleri dahil olmak üzere tüm network altyapısını kuruyor, düzenliyor ve optimize ediyoruz. Zayıf sinyal, kopma ve hız problemlerine kalıcı çözümler üretiyoruz."
  },
  {
    id: 3,
    title: "Hikvision Ürün Satışı",
    shortDescription: "Orijinal Hikvision ürünleri ve teknik destek.",
    longDescription: "Hikvision IP kameralar, DVR / NVR kayıt cihazları, ColorVu, AcuSense ve UPS ürünlerinin satışını yapıyor; doğru ürünü doğru senaryoya göre belirleyerek maksimum verim sağlıyoruz."
  },
  {
    id: 4,
    title: "Kamera & Donanım Teknik Servisi",
    shortDescription: "Arıza, bakım ve onarım hizmetleri.",
    longDescription: "Mevcut kamera sistemleri, kayıt cihazları, disk problemleri ve bağlantı hataları için hızlı teknik servis sunuyoruz. Görüntü gelmeme, kayıt silinmesi ve uzaktan erişim sorunlarını çözüyoruz."
  },
  {
    id: 5,
    title: "Uzaktan İzleme & Mobil Erişim",
    shortDescription: "Kameralarınız her an cebinizde.",
    longDescription: "Telefon, tablet ve bilgisayar üzerinden canlı izleme ve kayıt erişimi sağlayan uzaktan bağlantı sistemlerini kuruyor, güvenli ve sorunsuz kullanım sunuyoruz."
  },
  {
    id: 6,
    title: "UPS & Güç Çözümleri",
    shortDescription: "Kesintisiz güvenlik için enerji çözümleri.",
    longDescription: "Elektrik kesintilerinde kamera ve kayıt sistemlerinin çalışmaya devam etmesi için UPS ve enerji altyapı çözümleri kuruyoruz. Sistemlerinizi veri kaybına karşı koruyoruz."
  },
  {
    id: 7,
    title: "Keşif & Projelendirme",
    shortDescription: "Doğru planlama, doğru çözüm.",
    longDescription: "Ücretsiz keşif hizmetiyle alanınızı analiz ediyor, kör noktaları tespit ediyor ve ihtiyacınıza en uygun kamera ve altyapı projelendirmesini yapıyoruz."
  }
];

  return (
    <div className="services-page">

      <div className="services-header">
        <span className="subtitle">UZMANLIK ALANLARIMIZ</span>
        <h1 className="title">Dijital Dünyadaki Gücünüz</h1>
        <p className="description">
          Sektörün en güncel teknolojilerini kullanarak, işletmenizi büyütecek
          uçtan uca çözümler üretiyoruz.
        </p>
      </div>

      <div className="services-container">
        {services.length > 0 ? (
          services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-box">

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.shortDescription}</p>
              
              <div className="service-detail">
                <small>{service.longDescription}</small>
              </div>

              <div className="card-footer">
                <Link to="/contact" className="service-btn">Teklif Al &rarr;</Link>
              </div>
            </div>
          ))
        ) : (
          <div className="no-data">
            <h3>Henüz Hizmet Eklenmemiş</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;