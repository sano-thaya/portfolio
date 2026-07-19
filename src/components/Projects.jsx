import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import testLangImage from '../assets/DSL.png';
import chlorideImage from '../assets/chloride diffusion.png';

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const projects = [
    {
      title: "NextTurn",
      focus: "Testing, QA & Backend",
      description: "Worked on a queue and appointment system with a focus on testing, validation, and backend workflows.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
      tech: ["Playwright", "K6", "Postman", "REST API"],
      highlights: [
        "Wrote Playwright regression suites covering booking, rescheduling, and cancellation flows.",
        "Designed K6 load test scenarios to stress-test queue state transitions under concurrent users.",
        "Authored unit and integration tests for command handlers and slot-conflict edge cases.",
        "Validated REST API endpoints across booking and queue domains using Postman and automated assertions.",
        "Contributed to the design and implementation of the queue and appointment management system.",
      ],
      links: [
        { label: "Code", href: "https://github.com/K-M-Shehan/next-turn", icon: "github" },
        { label: "Live Demo", href: "https://web-mauve-nine-46.vercel.app/", icon: "external" }
      ]
    },
    {
      title: "TestLang++ (Domain-Specific Language for API Testing)",
      focus: "Testing & QA",
      description: "Designed a DSL to simplify backend API testing and make repeated validation tasks easier to express.",
      image: testLangImage,
      tech: ["Java", "Jflex", "Cup"],
      links: [
        { label: "Code", href: "https://github.com/sano-thaya/testlang_plus.git", icon: "github" }
      ]
    },
    {
      title: "Employee Management System - Backend API",
      focus: "Backend API",
      description: "Designed and developed a backend API for employee records, roles, and organizational data.",
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
      tech: ["Java", "REST API"],
      links: [
        { label: "Code", href: "https://github.com/sano-thaya/employee-management-system-api.git", icon: "github" }
      ]
    },
    {
      title: "Chloride Diffusion Analyzer (Web Application)",
      focus: "Engineering Workflow",
      description: "Extended a Python-based GUI tool into a modern web application for engineering workflows.",
      image: chlorideImage,
      tech: ["React", "JavaScript"],
      links: [
        { label: "Code", href: "https://github.com/sano-thaya/Chloride-Calculator-web-app.git", icon: "github" },
        { label: "Live Demo", href: "https://chloride-calculator-web-app.vercel.app/", icon: "external" }
      ]
    },
    {
      title: "Hotel Management System - Web Application",
      focus: "Full-Stack Team Project",
      description: "Collaborated in a team of four to build a full stack hotel and room system for a university course.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
      tech: ["Java", "React", "MySQL", "REST API"],
      links: [
        { label: "Frontend", href: "https://github.com/Jenitha23/Hotel-Management-System-Frontend.git", icon: "github" },
        { label: "Backend", href: "https://github.com/Jenitha23/Hotel-Management-System-Backend.git", icon: "github" },
        { label: "Live Demo", href: "https://frontend-palmbeachresort.vercel.app/", icon: "external" }
      ]

    },
    {
      title: "Fault-Tolerant Distributed Messaging System",
      focus: "Parallel / Distributed Computing",
      description: "Implemented features to improve reliability during component failures in distributed systems.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
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

  const toggleProjectDetails = (projectTitle) => {
    setExpandedProjects((current) => ({
      ...current,
      [projectTitle]: !current[projectTitle],
    }));
  };

  return (
    <section id="projects" className="section">
      <div className="container section-inner">
        <div className="section-header">
          <span className="section-kicker">Projects</span>
          <h2 className="section-title">Selected work that maps to backend, testing, and systems roles.</h2>
          <p className="section-subtitle">
            Recent builds that highlight clean architecture, testing depth, and reliable delivery.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <article key={idx} className="glass-card project-card">
              <div className="project-cover">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-cover-badge">Featured Build</div>
              </div>

              <div className="project-body">
                <span className="project-focus">{project.focus}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tech.map((tech, techIdx) => (
                    <span key={techIdx}>{tech}</span>
                  ))}
                </div>

                {project.highlights && project.title === "NextTurn" ? (
                  <button
                    type="button"
                    className="project-toggle"
                    onClick={() => toggleProjectDetails(project.title)}
                    aria-expanded={Boolean(expandedProjects[project.title])}
                  >
                    {expandedProjects[project.title] ? 'Show less' : 'Read more'}
                  </button>
                ) : null}

                {project.highlights ? (
                  <ul className="project-highlights">
                    {(project.title === "NextTurn" && !expandedProjects[project.title]
                      ? []
                      : project.highlights
                    ).map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}

                {project.links.length > 0 ? (
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
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
