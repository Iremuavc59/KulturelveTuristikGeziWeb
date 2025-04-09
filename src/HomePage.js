import React from 'react';
import { MapPin, Building, Landmark } from 'lucide-react';
import './HomePage.css'; // CSS dosyasını import et

const HomePage = () => {
  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="navbar-brand">
          <img 
            src="/api/placeholder/50/50" 
            alt="Logo" 
            className="logo"
          />
        </div>
        <div className="navbar-menu">
          <a href="#" className="nav-link">Ana Sayfa</a>
          <a href="#" className="nav-link">Rotalar</a>
          <a href="#" className="nav-link">Keşfet</a>
          <a href="#" className="nav-link">İletişim</a>
        </div>
      </nav>

      <main className="main-content">
        <h1 className="site-title">Kültürel Gezi</h1>
        <h2 className="journey-title">Doğa ve Kültürle Dolu Bir Yolculuk!</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <MapPin className="feature-icon" />
            <h2 className="feature-title">Konuma Göre Keşif</h2>
            <p className="feature-description">Bulunduğunuz konumdaki kültürel noktaları keşfedin.</p>
          </div>
          <div className="feature-card">
            <Building className="feature-icon" />
            <h2 className="feature-title">Müzeler</h2>
            <p className="feature-description">Tarihi ve sanat müzelerini gezin, kültürel mirasımızı keşfedin.</p>
          </div>
          <div className="feature-card">
            <Landmark className="feature-icon" />
            <h2 className="feature-title">Tarihi Yerler</h2>
            <p className="feature-description">Benzersiz tarihi mekânları ve anıtları ziyaret edin.</p>
          </div>
        </div>

        <div className="discovery-section">
          <h2 className="discovery-title">Keşfedilmeyi Bekleyen Yerler</h2>
          <div className="discovery-grid">
            {['Ayasofya', 'Topkapı Sarayı', 'Sultanahmet Camii', 'Yerebatan Sarnıcı'].map((place) => (
              <div 
                key={place} 
                className="discovery-item"
              >
                {place}
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <p>&copy; 2025 Kültürel Gezi. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

export default HomePage;
  