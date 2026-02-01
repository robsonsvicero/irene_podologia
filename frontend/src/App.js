import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Contact from './components/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import BlogSection from './components/BlogSection';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <About />
                <Services />
                <Reviews />
                <BlogSection />
                <Location />
                <Contact />
              </>
            } 
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
