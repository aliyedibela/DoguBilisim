import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
    id: 1,
    title: "Atatürk Üniversitesi Kampüs Kamera & Network Altyapısı",
    description: "Atatürk Üniversitesi yerleşkelerinde bina içi ve dışı güvenlik kameraları, omurga network altyapısı, kayıt merkezleri ve uzaktan izleme sistemlerinin kurulumu ve devreye alınması.",
    clientName: "Atatürk Üniversitesi",
    completionYear: 2024,
    technologiesUsed: "Hikvision CCTV, IP Kamera Sistemleri, Fiber Optik, Switch & Router Altyapısı",
    imageUrl: "https://res-console.cloudinary.com/dv2mfyajv/thumbnails/v1/image/upload/v1769205373/QUYxUWlwUFQxMXhIZEJITzJ1M3duYnliaVEzMHVmZEpfZnZtdHNu/drilldown"
  },
  {
    id: 4,
    title: "Kurumsal Network Altyapı Projeleri",
    description: "Kurum ve işletmeler için sıfırdan network altyapısı kurulumu, kablolama, rack sistemleri, firewall ve internet erişim çözümleri.",
    clientName: "Kurumsal Firmalar",
    completionYear: 2023,
    technologiesUsed: "Fiber Optik, Switch, Router, Firewall, Network Security",
    imageUrl: "https://res-console.cloudinary.com/dv2mfyajv/thumbnails/v1/image/upload/v1769205373/QUYxUWlwUFQxMXhIZEJITzJ1M3duYnliaVEzMHVmZEpfZnZtdHNu/drilldown"
  },
  {
    id: 3,
    title: "Erzurum İlçeleri Okul & Yurt Network Altyapı Kurulumları",
    description: "İlçe merkezlerinde bulunan kız ve erkek öğrenci yurtları ile liseler için iç ve dış alan güvenlik kamera sistemleri ve network altyapı çalışmaları.",
    clientName: "Milli Eğitim & Yurt Yönetimleri",
    completionYear: 2024,
    technologiesUsed: "Hikvision ColorVu, AcuSense, Network Altyapısı",
    imageUrl: "https://res-console.cloudinary.com/dv2mfyajv/thumbnails/v1/image/upload/v1769205373/QUYxUWlwUFQxMXhIZEJITzJ1M3duYnliaVEzMHVmZEpfZnZtdHNu/drilldown"
  },

    {
    id: 2,
    title: "Erzurum Genelinde Apartman Kamera Sistemleri",
    description: "Merkez ve ilçelerde bulunan apartmanlar için IP kamera, kayıt cihazı ve mobil izleme destekli güvenlik sistemlerinin anahtar teslim kurulumu.",
    clientName: "Site & Apartman Yönetimleri",
    completionYear: 2023,
    technologiesUsed: "Hikvision IP Kameralar, NVR, Mobil İzleme, UPS",
    imageUrl: "https://res-console.cloudinary.com/dv2mfyajv/thumbnails/v1/image/upload/v1769205373/QUYxUWlwUFQxMXhIZEJITzJ1M3duYnliaVEzMHVmZEpfZnZtdHNu/drilldown"
  },
  {
    id: 5,
    title: "Kamera Sistemleri Bakım & Revizyon Projeleri",
    description: "Mevcut kamera sistemlerinin yenilenmesi, kayıt problemlerinin giderilmesi ve uzaktan erişim altyapısının güncellenmesi.",
    clientName: "Kamu & Özel Sektör",
    completionYear: 2025,
    technologiesUsed: "Hikvision DVR/NVR, Disk Yönetimi, Uzaktan İzleme",
    imageUrl: "https://res-console.cloudinary.com/dv2mfyajv/thumbnails/v1/image/upload/v1769205373/QUYxUWlwUFQxMXhIZEJITzJ1M3duYnliaVEzMHVmZEpfZnZtdHNu/drilldown"
  }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

// Modal Aç
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
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                  />
                  <div className="overlay">
                      <button className="view-btn">Detayları Gör</button>
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
               <img src={selectedProject.imageUrl} alt={selectedProject.title} />
            </div>
            
            <div className="modal-body">
              <span className="client-badge-lg">Müşteri: {selectedProject.clientName}</span>
              <h2>{selectedProject.title}</h2>
              <p className="modal-desc">{selectedProject.description}</p>
              
              <div className="modal-techs">
                <h4>Kullanılan Teknolojiler:</h4>
                <div className="tech-tags-lg">
                  {selectedProject.technologiesUsed?.split(',').map((t, i) => (
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