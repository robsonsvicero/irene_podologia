import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    'Mais de 10 anos de experiência em podologia',
    'Atendimento em consultório e salão profissional',
    'Reconhecimento internacional - Califórnia, EUA',
    'Relação de longo prazo com pacientes e famílias',
    'Formação técnica especializada e atualizada',
    'Ambiente higienizado e equipamentos esterilizados'
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="grid-two-column">
          <div className="about-image-grid">
            <img
              src="https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?w=600&q=80"
              alt="Consultório profissional"
              className="about-image about-image-main"
            />
            <img
              src="https://images.unsplash.com/photo-1693821193077-97821851854b?w=600&q=80"
              alt="Cuidado profissional"
              className="about-image about-image-secondary"
            />
          </div>

          <div className="about-content">
            <span className="section-label">Sobre a Profissional</span>
            <h2 className="hero-medium">Podóloga Irene</h2>
            <p className="body-large about-description">
              Com mais de uma década dedicada ao cuidado profissional dos pés, 
              a Podóloga Irene construiu sua carreira baseada em três pilares fundamentais: 
              técnica apurada, atendimento humanizado e compromisso com a saúde de cada paciente.
            </p>
            
            <p className="body-large about-description">
              Reconhecida não apenas no Brasil, mas também internacionalmente, tendo prestado 
              atendimento na Califórnia (EUA), Irene é referência em podologia na Zona Norte 
              de São Paulo, especialmente no bairro Lauzane Paulista.
            </p>

            <div className="about-highlights">
              {highlights.map((highlight, index) => (
                <div key={index} className="about-highlight-item">
                  <CheckCircle size={20} />
                  <span className="body-regular">{highlight}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5511946945695"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agende sua consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
