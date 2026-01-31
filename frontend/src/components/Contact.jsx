import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construir mensagem para WhatsApp
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.%0A%0ATelefone: ${formData.phone}%0A%0AMensagem: ${formData.message}`;
    
    // Redirecionar para WhatsApp
    window.open(`https://wa.me/5511946945695?text=${whatsappMessage}`, '_blank');
    
    // Mostrar mensagem de sucesso
    setIsSubmitted(true);
    
    // Reset form após 3 segundos
    setTimeout(() => {
      setFormData({ name: '', phone: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="contact-container">
          <div className="contact-content">
            <span className="section-label">Entre em Contato</span>
            <h2 className="hero-medium">Agende seu atendimento</h2>
            <p className="body-large contact-description">
              Preencha o formulário abaixo e entraremos em contato via WhatsApp para 
              agendar sua consulta com facilidade e segurança.
            </p>

            <div className="contact-benefits">
              <div className="contact-benefit">
                <CheckCircle size={20} />
                <span className="body-regular">Resposta rápida</span>
              </div>
              <div className="contact-benefit">
                <CheckCircle size={20} />
                <span className="body-regular">Agendamento flexível</span>
              </div>
              <div className="contact-benefit">
                <CheckCircle size={20} />
                <span className="body-regular">Atendimento personalizado</span>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {isSubmitted ? (
              <div className="contact-success">
                <CheckCircle size={48} />
                <h3 className="heading-2">Mensagem enviada!</h3>
                <p className="body-regular">
                  Você será redirecionado para o WhatsApp para finalizar o contato.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="body-regular">Nome completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="body-regular">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="body-regular">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="form-textarea"
                    placeholder="Conte-nos sobre suas necessidades..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit">
                  <Send size={18} />
                  Enviar via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
