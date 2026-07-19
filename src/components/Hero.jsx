import { ArrowRight } from 'lucide-react';

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
        <span className="eyebrow">Aspiring Software Engineer</span>
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Sanojan Thayaparan</span>.
          <span className="hero-title-secondary">
            A Computer Science undergraduate focused on backend development, software testing, API testing, AWS cloud services, and parallel computing.
          </span>
        </h1>
        <p className="hero-subtitle">
          I build reliable software with clean APIs, maintainable architecture, and a test-aware mindset across the development lifecycle.

        </p>

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
          <span>Backend Development</span>
          <span>Software Testing</span>
          <span>API Testing</span>
          <span>AWS Cloud Services</span>
          <span>Parallel Computing</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
