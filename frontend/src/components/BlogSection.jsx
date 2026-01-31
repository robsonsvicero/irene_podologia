import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../mock/blogData';

const BlogSection = () => {
  // Pegar os 3 artigos mais recentes
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="section-padding blog-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Nosso Blog</span>
          <h2 className="hero-medium">Dicas e Informações sobre Saúde dos Pés</h2>
          <p className="body-large section-description">
            Fique por dentro das melhores práticas e cuidados para manter seus pés sempre saudáveis
          </p>
        </div>

        <div className="blog-grid">
          {recentPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <Link to={`/blog/${post.slug}`} className="blog-card-image-link">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-card-image"
                />
              </Link>
              
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className="blog-category">{post.category}</span>
                  <div className="blog-meta-info">
                    <div className="blog-meta-item">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="blog-meta-item">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <Link to={`/blog/${post.slug}`} className="blog-card-title-link">
                  <h3 className="blog-card-title">{post.title}</h3>
                </Link>

                <p className="blog-card-excerpt">{post.excerpt}</p>

                <Link to={`/blog/${post.slug}`} className="blog-read-more">
                  Ler artigo completo
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <Link to="/blog" className="btn-primary">
            Ver todos os artigos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
