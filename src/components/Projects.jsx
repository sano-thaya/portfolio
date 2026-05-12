import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Chloride Diffusion Analyzer (Web Application)",
      description: "Extended a Python based GUI tool into a modern web application for engineering workflows.",
      tech: ["React", "JavaScript"],
      links: [
        { label: "Code", href: "https://github.com/sano-thaya/Chloride-Calculator-web-app.git", icon: "github" },
        { label: "Live Demo", href: "https://chloride-calculator-web-app.vercel.app/", icon: "external" }
      ]
    },
    {
      title: "TestLang++(Domain-Specific Language for API Testing)",
      description: "Designed a custom domain-specific language (DSL) to simplify backend API testing.",
      tech: ["Java", "Jflex", "Cup"],
      links: [
        { label: "Code", href: "https://github.com/sano-thaya/testlang_plus.git", icon: "github" }
      ]
    },
    {
      title: "Employee Management System - Backend API",
      description: "Designed and developed an API to manage employee records, roles, and organizational data.",
      tech: ["Java", "REST API"],
      links: [
        { label: "Code", href: "https://github.com/sano-thaya/employee-management-system-api.git", icon: "github" }
      ]
    },
    {
      title: "Hotel Management System - Web Application",
      description: "Collaborated in a team of four to build a full stack hotel and room system for a university course.",
      tech: ["Java", "React", "MySQL", "REST API"],
      links: [
        { label: "Frontend", href: "https://github.com/Jenitha23/Hotel-Management-System-Frontend.git", icon: "github" },
        { label: "Backend", href: "https://github.com/Jenitha23/Hotel-Management-System-Backend.git", icon: "github" },
        { label: "Live Demo", href: "https://frontend-palmbeachresort.vercel.app/", icon: "external" }
      ]

    },
    {
      title: "Fault-Tolerant-Distributed-Messaging-System",
      description: "Implemented features to ensure reliability during component failures in distributed systems.",
      tech: ["Java"],
      links: [
        { label: "Code", href: "https://github.com/Jenitha23/Fault-Tolerant-Distributed-Messaging-System-GRP-17.git", icon: "github" }
      ]

    }
  ];

  const renderLinkIcon = (icon) => {
    if (icon === "external") {
      return <ExternalLink size={16} />;
    }

    return <FaGithub size={16} />;
  };

  return (
    <section id="projects" className="section">
      <div className="container section-inner">
        <div className="section-header">
          <span className="section-kicker">Projects</span>
          <h2 className="section-title">Selected work with measurable impact.</h2>
          <p className="section-subtitle">
            Recent builds that highlight my focus on clean architecture, testing, and reliable delivery.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <article key={idx} className="glass-card project-card">
              <div className="project-cover">
                <div className="project-cover-inner">
                  <span>Featured Build</span>
                </div>
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tech.map((tech, techIdx) => (
                    <span key={techIdx}>{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.links.map((link, linkIdx) => (
                    <a
                      key={linkIdx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      {renderLinkIcon(link.icon)}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
