import React from 'react';
import { Star, Award, Users, Shield } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<Star key={i} size={16} fill="#333333" stroke="#333333" />);
    }
    return stars;
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="grid-two-column">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="rating-stars">
                {renderStars()}
              </div>
              <span className="rating-text">5,0 com 50 avaliações no Google</span>
            </div>
            
            <h1 className="hero-large">
              Podologia profissional com mais de 10 anos de confiança e excelência
            </h1>
            
            <p className="hero-description body-large">
              Atendimento humanizado, seguro e especializado no Lauzane Paulista, 
              com reconhecimento internacional.
            </p>

            <div className="hero-actions">
              <a
                href="https://wa.me/5511946945695"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Agendar pelo WhatsApp
              </a>
              <button onClick={scrollToContact} className="btn-secondary">
                Ver localização
              </button>
            </div>

            <div className="hero-features">
              <div className="hero-feature">
                <Award size={24} />
                <span>Experiência Comprovada</span>
              </div>
              <div className="hero-feature">
                <Shield size={24} />
                <span>Higiene e Segurança</span>
              </div>
              <div className="hero-feature">
                <Users size={24} />
                <span>Atendimento Humanizado</span>
              </div>
            </div>
          </div>

          <div className="hero-image-container">
            <img
              src="https://images.unsplash.com/photo-1758654859934-2a03792260a0?w=800&q=80"
              alt="Atendimento profissional de podologia"
              className="hero-image"
            />
            <div className="hero-image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
