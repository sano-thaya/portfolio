import { Code2, Server, Laptop } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Laptop className="w-6 h-6 text-blue-500" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using React and modern CSS."
    },
    {
      icon: <Server className="w-6 h-6 text-purple-500" />,
      title: "Backend Development",
      description: "Creating robust APIs and services with Java Spring Boot and Node.js."
    },
    {
      icon: <Code2 className="w-6 h-6 text-indigo-500" />,
      title: "Problem Solving",
      description: "Applying data structures and algorithms to solve complex technical challenges."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container section-inner">
        <div className="section-header">
          <span className="section-kicker">About</span>
          <h2 className="section-title">Focused on clean, dependable software.</h2>
          <p className="section-subtitle">
            I care about architecture, polish, and predictable delivery. Every detail is built with clarity and intent.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Hello! I am a Computer Science student with a strong passion for software engineering.
              My journey started with curiosity about how websites work and evolved into building full stack systems.
            </p>
            <p>
              My goal is to become a versatile Software Engineer who can bridge experience design and backend architecture.
              I enjoy crafting React interfaces as much as building dependable Java Spring Boot services.
            </p>
            <p>
              Outside of coursework, I join hackathons, explore new technologies, and contribute to open source.
              I am always eager to learn and collaborate on ambitious ideas.
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
