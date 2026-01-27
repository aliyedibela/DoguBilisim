import React, { useState } from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {

  const [swiperRef, setSwiperRef] = useState(null);
const projects = [
    {
      id: 1,
      title: "Atatürk Üniversitesi Gıda ve Hayvancılık Birimi Kamera & Network Altyapısı",
      description: "Atatürk Üniversitesi yerleşkelerinde bina içi ve dışı güvenlik kameraları, omurga network altyapısı, kayıt merkezleri ve uzaktan izleme sistemlerinin kurulumu ve devreye alınması.",
      clientName: "Atatürk Üniversitesi",
      completionYear: 2024,
      technologiesUsed: "Hikvision CCTV, IP Kamera Sistemleri, Fiber Optik, Switch & Router Altyapısı",
      imageUrl: "/assets/icons/atauni.png",

    },
    {
      id: 5,
      title: "Erzurum Hizmetiçi Eğitim Enstitüsü",
      description: "Mevcut kamera sistemlerinin yenilenmesi, kayıt problemlerinin giderilmesi ve uzaktan erişim altyapısının güncellenmesi.",
      clientName: "Kamu & Özel Sektör",
      completionYear: 2025,
      technologiesUsed: "Hikvision DVR/NVR, Disk Yönetimi, Uzaktan İzleme",
      imageUrl: "/assets/icons/ehee.png",
      videoUrl:"/assets/videos/eheevideo.mp4", 
      

      gallery: [
         "/assets/icons/ehee.png", 
         { type: 'video', src: "/assets/videos/eheevideo1.mp4" }
      ]
    },
    {
      id: 4,
      title: "Aşkale Nenehatun Mesleki ve Teknik Anadolu Lisesi",
      description: "İlçe merkezlerinde bulunan kız ve erkek öğrenci yurtları ile liseler için iç ve dış alan güvenlik kamera sistemleri ve network altyapı çalışmaları.",
      clientName: "Kurumsal Firmalar",
      completionYear: 2023,
      technologiesUsed: "Fiber Optik, Switch, Router, Firewall, Network Security",
      imageUrl: "/assets/icons/anmtal.png",
      gallery: [
         "/assets/icons/anmtal.png",
         "/assets/icons/anmtal1.png",
         "/assets/icons/anmtal2.png"
      ]
    },
    {
      id: 2,
      title: "Erzurum Genelinde Apartman Kamera Sistemleri",
      description: "Merkez ve ilçelerde bulunan apartmanlar için IP kamera, kayıt cihazı ve mobil izleme destekli güvenlik sistemlerinin anahtar teslim kurulumu.",
      clientName: "Site & Apartman Yönetimleri",
      completionYear: 2023,
      technologiesUsed: "Hikvision IP Kameralar, NVR, Mobil İzleme, UPS",
      imageUrl: "/assets/icons/apartman.png",
      gallery: [
         "/assets/icons/apartman.png",
         "/assets/icons/apartman1.png",
         "/assets/icons/apartman2.png"
      ]
    },
    {
      id: 6,
      title: "Erzurum Goodyear Bölge Bayii",
      description: "Mevcut kamera sistemlerinin yenilenmesi, kayıt problemlerinin giderilmesi ve uzaktan erişim altyapısının güncellenmesi.",
      clientName: "Kamu & Özel Sektör",
      completionYear: 2025,
      technologiesUsed: "Hikvision DVR/NVR, Disk Yönetimi, Uzaktan İzleme",
      imageUrl: "/assets/icons/gy1.png",
       gallery: [
         "/assets/icons/gy1.png",
         "/assets/icons/gy2.png",
         "/assets/icons/gy3.png"
      ]
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.paddingRight = '0px';
    document.body.style.overflow = 'auto'; 
  };

  return (
    <div className="projects-page">
      <div className="projects-header">
        <span className="subtitle">REFERANSLARIMIZ</span>
        <h1 className="title">Başarı Hikayelerimiz</h1>
        <p className="description">
          Doğu Bilişim imzası taşıyan seçkin projelerimiz.
        </p>
      </div>

      <div className="projects-grid">
        {projects.length > 0 ? (
          projects.map((project) => {
            const techList = project.technologiesUsed 
              ? project.technologiesUsed.split(',').map(t => t.trim()) 
              : [];

            return (
              <div key={project.id} className="project-card" onClick={() => openModal(project)}>
                <div className="project-image">
                  {project.videoUrl ? (
                    <video 
                      src={project.videoUrl} 
                      poster={project.imageUrl} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="card-media"
                    />
                  ) : (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="card-media"
                    />
                  )}

                  <div className="overlay">
                    <button className="view-btn">İncele</button>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-meta">
                    <span className="client-badge">🏢 {project.clientName}</span>
                    <span className="year-badge">📅 {project.completionYear}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <div className="tech-tags">
                    {techList.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                    {techList.length > 3 && <span className="tech-badge">+{techList.length - 3}</span>}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-data"><p>Henüz proje eklenmemiş.</p></div>
        )}
      </div>

    {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
         <button className="close-modal-btn" onClick={closeModal}>&times;</button>
            
            <div className="modal-image">
              {(selectedProject.videoUrl || (selectedProject.gallery && selectedProject.gallery.length > 0)) ? (
                
              <Swiper
  onSwiper={setSwiperRef} 
  key={selectedProject.id}
  modules={[Navigation, Pagination]}
  navigation={true}
  pagination={{ clickable: true }}
  loop={false}
  observer={true}
  observeParents={true}
  autoHeight={true}
  className="modal-swiper"
>
  {selectedProject.videoUrl && (
    <SwiperSlide>
      <video 
        src={selectedProject.videoUrl} 
        controls 
        className="modal-slide-media"
        preload="metadata"
        onLoadedMetadata={() => {
           if (swiperRef) { swiperRef.updateAutoHeight(); swiperRef.update(); }
        }}
      />
    </SwiperSlide>
  )}


  {selectedProject.gallery && selectedProject.gallery.map((item, index) => {

    const isVideoObj = typeof item === 'object' && item.type === 'video';
    const src = typeof item === 'object' ? item.src : item;

    return (
      <SwiperSlide key={index}>
        {isVideoObj ? (

          <video 
            src={src} 
            controls 
            className="modal-slide-media"
            preload="metadata"
          />
        ) : (

          <img 
            src={src} 
            alt={`Gallery ${index}`} 
            className="modal-slide-media" 
          />
        )}
      </SwiperSlide>
    );
  })}
</Swiper>
              ) : (

                <img src={selectedProject.imageUrl} alt={selectedProject.title} className="modal-single-media" />
              )}
            </div>

            <div className="modal-body">
               <span className="client-badge-lg">{selectedProject.clientName}</span>
               <h2>{selectedProject.title}</h2>
               <p className="modal-desc">{selectedProject.description}</p>
               
               <div className="modal-techs">
                 <h4>Kullanılan Teknolojiler:</h4>
                 <div className="tech-tags-lg">
                   {selectedProject.technologiesUsed.split(',').map((t, i) => (
                     <span key={i} className="tech-badge-lg">{t.trim()}</span>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Projects;