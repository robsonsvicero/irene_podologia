import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import { blogPosts } from '../mock/blogData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <>
        <Header />
        <main className="section-padding">
          <div className="container">
            <h1 className="hero-medium">Artigo não encontrado</h1>
            <Link to="/blog" className="btn-primary">
              <ArrowLeft size={18} />
              Voltar ao blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="blog-post-page">
        <article className="blog-post-container">
          <div className="container blog-post-wrapper">
            <Link to="/blog" className="blog-back-link">
              <ArrowLeft size={18} />
              Voltar ao blog
            </Link>

            <header className="blog-post-header">
              <span className="blog-category">{post.category}</span>
              <h1 className="blog-post-title">{post.title}</h1>
              
              <div className="blog-post-meta">
                <div className="blog-meta-item">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="blog-meta-item">
                  <Calendar size={16} />
                  <span>{new Date(post.date).toLocaleDateString('pt-BR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}</span>
                </div>
                <div className="blog-meta-item">
                  <Clock size={16} />
                  <span>{post.readTime} de leitura</span>
                </div>
              </div>
            </header>

            <div className="blog-post-image-wrapper">
              <img
                src={post.image}
                alt={post.title}
                className="blog-post-image"
              />
            </div>

            <div 
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <footer className="blog-post-footer">
              <div className="blog-post-cta">
                <h3 className="heading-2">Precisa de atendimento profissional?</h3>
                <p className="body-large">
                  Agende uma consulta e cuide da saúde dos seus pés com quem entende do assunto.
                </p>
                <a
                  href="https://wa.me/5511946945695"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Agendar pelo WhatsApp
                </a>
              </div>

              <Link to="/blog" className="blog-back-link">
                <ArrowLeft size={18} />
                Ver mais artigos
              </Link>
            </footer>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default BlogPost;
