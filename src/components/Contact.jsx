import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // Form verilerini tutuyoruz
  const [formData, setFormData] = useState({
    senderName: '',
    email: '',
    subject: 'Genel Bilgi',
    message: ''
  });

  // Inputlara yazınca state güncelleniyor
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Butona basınca çalışacak fonksiyon
  const handleWhatsApp = (e) => {
    e.preventDefault();

    // 1. Senin Numaran (Başında 90 olacak, + yok)
    const phoneNumber = "905425407913"; 

    // 2. WhatsApp Mesaj Taslağı
    // İlk cümle senin istediğin hazır mesaj. Altına da formdan gelenleri ekliyoruz ki kim yazmış bilelim.
    // %0A kodu alt satıra geçmek içindir.
    const text = `Merhaba, ürün hakkında bilgi almak istiyorum.%0A%0A` +
                 `👤 *İsim:* ${formData.senderName}%0A` +
                 `📧 *Email:* ${formData.email}%0A` +
                 `📝 *Konu:* ${formData.subject}%0A` +
                 `💬 *Mesaj:* ${formData.message}`;

    // 3. Linki Oluştur ve Aç
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <span className="subtitle">BİZE ULAŞIN</span>
        <h1 className="title">Projelerinizi Hayata Geçirelim</h1>
        <p className="description">
          Aklınızdaki proje için aşağıdaki formu doldurun, sizi direkt WhatsApp üzerinden yanıtlayalım.
        </p>
      </div>

      <div className="contact-container">
        {/* SOL TARA: BİLGİLER & HARİTA */}
        <div className="contact-info-wrapper">
          <div className="info-cards">
            <div className="info-box">
              <div className="icon">📍</div>
              <div>
                <h3>Adresimiz</h3>
                <p>Lalapaşa, Erkuş Sk. Ertaş Apt Altı, No: 4, 25100 Yakutiye / Erzurum</p>
              </div>
            </div>
            <div className="info-box">
              <div className="icon">📞</div>
              <div>
                <h3>Telefon / WhatsApp</h3>
                <p>+90 (542) 540 79 13</p>
              </div>
            </div>
            <div className="info-box">
              <div className="icon">✉️</div>
              <div>
                <h3>E-Posta</h3>
                <p>info@dogubilisim.com</p>
              </div>
            </div>
          </div>
          {/* Harita */}
<div className="map-container">
<iframe
  src="https://maps.google.com/maps?q=Do%C4%9Fu%20Bili%C5%9Fim%20Erzurum&z=17&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  loading="lazy"
  title="Doğu Bilişim Harita"
/>

</div>
        </div>

        {/* SAĞ TARAF: FORM (WHATSAPP ENTEGRASYONLU) */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleWhatsApp}>
            <h3>Hızlı İletişim</h3>

            <div className="form-group">
              <label>Adınız Soyadınız</label>
              <input 
                type="text" 
                name="senderName" 
                value={formData.senderName} 
                onChange={handleChange} 
                placeholder="İsminiz..." 
                required 
              />
            </div>

            <div className="form-group">
              <label>E-Posta Adresiniz</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="mail@ornek.com" 
              />
            </div>

            <div className="form-group">
              <label>Konu</label>
              <select name="subject" value={formData.subject} onChange={handleChange}>
                <option>Genel Bilgi</option>
                <option>Proje Teklifi Almak İstiyorum</option>
                <option>Teknik Destek</option>
                <option>Kariyer / İK</option>
              </select>
            </div>

            <div className="form-group">
              <label>Mesajınız</label>
              <textarea 
                rows="5" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Mesajınız..." 
                required
              ></textarea>
            </div>

            {/* BUTON: WhatsApp İkonlu ve Renkli */}
            <button type="submit" className="btn-neon full-width" style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'10px', backgroundColor: '#25D366', color: '#fff', borderColor: '#25D366'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
              </svg>
              WHATSAPP İLE GÖNDER
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;