import { Server, ShieldCheck, Cloud, Cpu } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Server className="w-6 h-6 text-blue-500" />,
      title: "Backend Development",
      description: "Building dependable APIs and services with a focus on clarity, maintainability, and clean architecture."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
      title: "Software Testing & API Testing",
      description: "Approaching features with validation in mind and building confidence through test-oriented workflows."
    },
    {
      icon: <Cloud className="w-6 h-6 text-cyan-500" />,
      title: "AWS Cloud Services",
      description: "Interested in deploying and supporting software in cloud environments with production thinking."
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-500" />,
      title: "Parallel Computing",
      description: "Comfortable working with performance-aware and distributed problem solving concepts."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container section-inner">
        <div className="section-header">
          <span className="section-kicker">About</span>
          <h2 className="section-title">Focused on backend quality, testing confidence, and cloud-ready delivery.</h2>
          <p className="section-subtitle">
            I care about architecture, polish, and predictable delivery. My goal is to contribute as a Software Engineer or QA Engineer intern in teams that value reliability.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a Computer Science undergraduate at SLIIT with hands-on experience in academic and personal software development projects.
            </p>
            <p>
              My work centers on backend development, software testing, API testing, AWS cloud services, and parallel computing, with a focus on building maintainable software.
            </p>
            <p>
              I am especially interested in internships where I can strengthen engineering practices across the development lifecycle and learn from real-world delivery.
            </p>
          </div>

          <div className="about-cards">
            {highlights.map((item, index) => (
              <div key={index} className="glass-card highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
