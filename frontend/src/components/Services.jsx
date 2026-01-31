import React from 'react';
import { Stethoscope, Scissors, AlertCircle, Heart, Shield, Calendar } from 'lucide-react';
import { servicesData } from '../mock/reviewsData';

const iconMap = {
  Stethoscope,
  Scissors,
  AlertCircle,
  Heart,
  Shield,
  Calendar
};

const Services = () => {
  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Serviços Especializados</span>
          <h2 className="hero-medium">Cuidados Profissionais para seus Pés</h2>
          <p className="body-large section-description">
            Oferecemos uma gama completa de serviços podológicos com técnica 
            especializada, equipamentos modernos e atendimento personalizado.
          </p>
        </div>

        <div className="grid-product-showcase">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className="product-card service-card">
                <div className="service-icon">
                  <IconComponent size={32} />
                </div>
                <h3 className="product-card-title">{service.title}</h3>
                <p className="product-card-description">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="services-cta">
          <p className="body-large">
            Cada tratamento é personalizado de acordo com suas necessidades específicas.
          </p>
          <a
            href="https://wa.me/5511946945695"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Solicitar informações
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
