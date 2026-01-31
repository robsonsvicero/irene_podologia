import React from 'react';
import { Star, Quote } from 'lucide-react';
import { reviewsData } from '../mock/reviewsData';

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding reviews-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Avaliações de Pacientes</span>
          <h2 className="hero-medium">O que dizem nossos pacientes</h2>
          
          <div className="reviews-summary">
            <div className="reviews-rating">
              <div className="rating-number">{reviewsData.rating.toFixed(1)}</div>
              <div className="rating-stars-large">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} fill="#333333" stroke="#333333" />
                ))}
              </div>
              <div className="rating-count body-small">
                Baseado em {reviewsData.totalReviews} avaliações do Google
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviewsData.reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="review-avatar">{review.avatar}</div>
                <div className="review-author-info">
                  <h4 className="review-author body-regular">{review.author}</h4>
                  <div className="review-rating">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#333333" stroke="#333333" />
                    ))}
                  </div>
                </div>
              </div>
              <Quote className="review-quote-icon" size={24} />
              <p className="review-text body-regular">{review.text}</p>
              <span className="review-date body-small">
                {new Date(review.date).toLocaleDateString('pt-BR', {
                  year: 'numeric',
                  month: 'long'
                })}
              </span>
            </div>
          ))}
        </div>

        <div className="reviews-footer">
          <p className="body-large">
            Mais de 50 avaliações 5 estrelas no Google
          </p>
          <a
            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x94ce5f8e8e8e8e8e:0x8e8e8e8e8e8e8e8e"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Ver todas avaliações
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
