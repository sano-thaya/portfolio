import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-orbs" aria-hidden="true">
        <span className="float-shape shape-1"></span>
        <span className="float-shape shape-2"></span>
        <span className="float-shape shape-3"></span>
        <span className="float-shape shape-4"></span>
      </div>

      <div className="container hero-inner">
        <span className="eyebrow">Software Engineer</span>
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Sanojan Thayaparan</span>.
          I build premium, reliable software with a focus on quality.
        </h1>
        <p className="hero-subtitle">
          Computer Science student crafting scalable backend services and polished interfaces.
          Currently focused on Java Spring Boot, React, and QA-minded delivery.
        </p>

        <div className="hero-image-wrap">
          <div className="hero-image-glow"></div>
          <img
            src={heroImage}
            alt="Abstract layered platform"
            className="hero-image"
          />
        </div>

        <div className="hero-cta">
          <a href="#projects" className="button button-primary">
            View Projects
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="button button-secondary">
            Contact Me
          </a>
        </div>

        <div className="hero-pills">
          <span>QA Focused</span>
          <span>Backend Systems</span>
          <span>React Interfaces</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
