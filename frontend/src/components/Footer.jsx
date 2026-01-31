import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Podóloga Irene</h3>
            <p className="footer-description">
              Cuidado profissional com seus pés, feito com atenção, experiência e confiança.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contato</h4>
            <div className="footer-info">
              <div className="footer-info-item">
                <Phone size={16} />
                <a href="tel:+5511946945695">(11) 94694-5695</a>
              </div>
              <div className="footer-info-item">
                <MapPin size={16} />
                <span>Av. Basiléia, 79 – Lauzane Paulista</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Horário</h4>
            <div className="footer-info">
              <div className="footer-info-item">
                <Clock size={16} />
                <span>Segunda a Sábado</span>
              </div>
              <div className="footer-info-item">
                <span className="footer-hours">Aberto até 18h30</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Podóloga Irene. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
