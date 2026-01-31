import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../mock/blogData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Blog = () => {
  return (
    <>
      <Header />
      <main className="blog-page">
        <section className="blog-hero">
          <div className="container">
            <h1 className="hero-large">Blog da Podóloga Irene</h1>
            <p className="body-large">
              Informações, dicas e cuidados para manter a saúde dos seus pés em dia
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="blog-grid-full">
              {blogPosts.map((post) => (
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
                      <h2 className="blog-card-title">{post.title}</h2>
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
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Blog;
