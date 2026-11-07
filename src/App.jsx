import { useEffect } from 'react';
import './App.css';
import './Enhancements.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudy from './components/CaseStudy';
import { featuredProjects } from './data/projects';

const path = window.location.pathname.replace(/\/+$/, '') || '/';
const slug = /^\/projects\/([a-z0-9-]+)$/.exec(path)?.[1];
const project = featuredProjects.find((item) => item.slug === slug);
const isCaseStudy = path !== '/';

function App() {
  useEffect(() => {
    document.title = project
      ? `${project.title} · Sanojan Thayaparan`
      : 'Sanojan Thayaparan | Software Engineering Portfolio';
  }, []);

  useEffect(() => {
    if (isCaseStudy || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const elements = document.querySelectorAll('.section-heading, .project-card, .earlier-card, .experience-grid, .about-copy, .skills, .contact-panel');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

    elements.forEach((element) => {
      element.classList.add('reveal');
      observer.observe(element);
    });
    document.documentElement.classList.add('motion-ready');

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('motion-ready');
    };
  }, []);

  return (
    <div className="app">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar isCaseStudy={isCaseStudy} />
      {project ? (
        <CaseStudy project={project} />
      ) : isCaseStudy ? (
        <main id="main" className="wrap not-found section-space">
          <p className="eyebrow">Page not found</p>
          <h1>There’s nothing at this address.</h1>
          <a className="button button-primary" href="/">Go to homepage</a>
        </main>
      ) : (
        <main id="main">
          <Hero />
          <Projects />
          <Experience />
          <About />
          <Contact />
        </main>
      )}
      <Footer isCaseStudy={isCaseStudy} />
    </div>
  );
}

export default App;
