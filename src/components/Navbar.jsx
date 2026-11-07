import { useEffect, useState } from 'react';

const links = [
  { label: 'Projects', hash: '#work' },
  { label: 'Experience', hash: '#experience' },
  { label: 'About', hash: '#about' },
  { label: 'Contact', hash: '#contact' },
];

const Navbar = ({ isCaseStudy = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeHash, setActiveHash] = useState('');
  const prefix = isCaseStudy ? '/' : '';

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 16);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);

      if (!isCaseStudy) {
        const current = links
          .filter(({ hash }) => document.querySelector(hash)?.getBoundingClientRect().top <= window.innerHeight * 0.4)
          .at(-1);
        setActiveHash(current?.hash || '');
      }
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, [isCaseStudy]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`} id="top">
      <div className="wrap header-inner">
        <a className="brand" href={isCaseStudy ? '/' : '#top'} aria-label="Sanojan Thayaparan, home">
          <span className="brand-avatar">
            <img className="brand-mark" src="/assets/sanojan-thayaparan.webp" alt="" width="48" height="48" />
          </span>
          <span className="brand-name">Sanojan Thayaparan</span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          {links.map(({ label, hash }) => (
            <a
              key={label}
              href={`${prefix}${hash}`}
              className={label === 'Contact' ? 'nav-contact' : undefined}
              aria-current={activeHash === hash ? 'location' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
      <span className="reading-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </header>
  );
};

export default Navbar;
