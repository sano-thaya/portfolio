import Skills from './Skills';

const About = () => (
  <section className="about" id="about" aria-labelledby="about-title">
    <div className="wrap section-space about-grid">
      <div className="about-copy">
        <p className="eyebrow">About</p>
        <h2 id="about-title">How I work</h2>
        <p>I’m studying for a BSc in Computer Science at SLIIT. I’m especially interested in how APIs, databases, and tests fit together.</p>
        <p>On COMPNet, I check whether the passages we retrieve actually support a result. On team projects like NextTurn, I test what happens when users reschedule bookings or join a queue at the same time.</p>
      </div>
      <Skills />
    </div>
  </section>
);

export default About;
