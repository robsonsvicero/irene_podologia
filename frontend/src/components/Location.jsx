import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="section-padding location-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Localização e Horário</span>
          <h2 className="hero-medium">Fácil de encontrar</h2>
          <p className="body-large section-description">
            Venha nos visitar no coração do Lauzane Paulista, em frente ao Supermercado Trimais.
          </p>
        </div>

        <div className="grid-two-column location-grid">
          <div className="location-info">
            <div className="location-info-card">
              <div className="location-icon-wrapper">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="heading-3">Endereço</h3>
                <p className="body-regular">Av. Basiléia, 79</p>
                <p className="body-regular">Lauzane Paulista – São Paulo, SP</p>
                <p className="body-small location-reference">
                  Em frente ao Supermercado Trimais
                </p>
                <p className="body-small location-code">Código: G9F3+37</p>
              </div>
            </div>

            <div className="location-info-card">
              <div className="location-icon-wrapper">
                <Clock size={28} />
              </div>
              <div>
                <h3 className="heading-3">Horário de Funcionamento</h3>
                <p className="body-regular">Segunda a Sábado</p>
                <p className="body-large location-hours">Aberto até 18h30</p>
              </div>
            </div>

            <div className="location-info-card">
              <div className="location-icon-wrapper">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="heading-3">Contato</h3>
                <a href="tel:+5511946945695" className="body-large location-phone">
                  (11) 94694-5695
                </a>
                <p className="body-small">WhatsApp disponível</p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+Basiléia,+79+Lauzane+Paulista+São+Paulo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary location-button"
            >
              <Navigation size={18} />
              Abrir no Google Maps
            </a>
          </div>

          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.8!2d-46.65!3d-23.475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI4JzMwLjAiUyA0NsKwMzknMDAuMCJX!5e0!3m2!1sen!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Podóloga Irene"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
