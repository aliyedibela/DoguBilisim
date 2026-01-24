import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Parallax } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/parallax';

import './Hero.css';

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop",
      title: "Profesyonel Güvenlik Sistemleri",
      desc: "Hikvision kamera çözümleri ile apartman, site, okul ve iş yerleri için 7/24 kesintisiz güvenlik."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1920&auto=format&fit=crop",
      title: "Kurumsal Network ve Altyapı Çözümleri",
      desc: "PoE switch, router, kablolama ve network altyapıları ile güçlü ve stabil bağlantı."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1920&auto=format&fit=crop",
      title: "Bilişim Donanım ve Sarf Malzemeleri",
      desc: "Yazıcı, bilgisayar, toner, kartuş ve depolama ürünleriyle kurumlara uçtan uca bilişim desteği."
    }
  ];

  return (
    <section className="hero-section">
      <Swiper
        speed={1500}
        parallax={true}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={true} 
        modules={[Autoplay, Navigation, Parallax]} 
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="hero-slide">
            <div 
              className="slide-bg" 
              style={{ backgroundImage: `url(${slide.image})` }}
              data-swiper-parallax="50%"
            ></div>
            
            <div className="slide-overlay"></div>
            
            <div className="slide-content">
              <h1 data-swiper-parallax="-300">{slide.title}</h1>
              <p data-swiper-parallax="-500">{slide.desc}</p>
              
              <div data-swiper-parallax="-700">
                <Link to="/projects" className="btn-hero">
                  Projeleri İncele
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;