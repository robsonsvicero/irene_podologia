import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta com a Podóloga Irene.');
    window.open(`https://wa.me/5511946945695?text=${message}`, '_blank');
  };

  return (
    <button
      className={`whatsapp-float ${isVisible ? 'whatsapp-visible' : ''}`}
      onClick={handleClick}
      aria-label="Contato WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppButton;
