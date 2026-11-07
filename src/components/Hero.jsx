import { useState } from 'react';
import Icon from './Icon';

const approaches = [
  
    {
    label: 'Research',
    number: '01',
    title: 'Analyze the problem and Requirement gathering.',
    description: 'Shape APIs and data around the way people actually use a product.',
  },
  {
    label: 'Build',
    number: '02',
    title: 'Give the idea a solid foundation.',
    description: 'Shape APIs and data around the way people actually use a product.',
  },
  {
    label: 'Verify',
    number: '03',
    title: 'Check the paths that matter.',
    description: 'Use tests and evidence to find edge cases before they reach users.',
  },
  {
    label: 'Deliver',
    number: '04',
    title: 'Make the work useful.',
    description: 'Iterate with feedback and leave a clear, maintainable handoff.',
  },
];

const Hero = () => {
  const [selected, setSelected] = useState(0);
  const approach = approaches[selected];

  return (
    <section className="hero hero-redesign wrap" id="home" aria-labelledby="intro-title">
      <div className="intro">
        <p className="intro-hello">Hi, I’m</p>
        <h1 id="intro-title">Sanojan <span>Thayaparan</span></h1>
        <p className="intro-role">Computer Science undergraduate at SLIIT</p>
        <p className="intro-copy">
          I build web applications with a focus on backend development and testing. My recent work includes
          websites for small businesses and research on AI-assisted legal claim verification.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">View projects <Icon name="right" /></a>
          <a className="button button-secondary" href="#contact">Get in touch</a>
        </div>
        <div className="hero-meta">
          <p className="availability"><span aria-hidden="true" />Open to a six-month software engineering internship</p>
          <p className="hero-location"><Icon name="location" />Malabe, Sri Lanka</p>
        </div>
      </div>

      <aside className="hero-showcase" aria-label="Explore my approach">
        <div className="showcase-header">
          <span>MY APPROACH</span>
          <span>{approach.number} / 03</span>
        </div>
        <div className="showcase-art" aria-hidden="true">
          <span className="showcase-orbit showcase-orbit-one" />
          <span className="showcase-orbit showcase-orbit-two" />
          <span className="showcase-node showcase-node-one" />
          <span className="showcase-node showcase-node-two" />
          <span className="showcase-core">{approach.number}</span>
        </div>
        <div className="showcase-story" key={approach.number} aria-live="polite">
          <p>{approach.label} / {approach.number}</p>
          <h2>{approach.title}</h2>
          <span>{approach.description}</span>
        </div>
        <div className="showcase-controls" aria-label="Choose an approach">
          {approaches.map((item, index) => (
            <button
              type="button"
              key={item.number}
              className={selected === index ? 'is-active' : ''}
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
            >
              <span>{item.number}</span>{item.label}
            </button>
          ))}
        </div>
      </aside>
    </section>
  );
};

export default Hero;
