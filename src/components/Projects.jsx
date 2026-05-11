import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Chloride Diffusion Analyzer (Web Application) ",
      description: " Extended a Python-based GUI application originally developed for engineering usage into",
      tech: ["React", "Javascript"],
      github: "https://github.com/sano-thaya/Chloride-Calculator-web-app.git",
      demo: "https://chloride-calculator-web-app.vercel.app/"
    },
    {
      title: "TestLang++(Domain-Specific Language for API Testing)",
      description: "Designed a custom domain-specific language (DSL) to simplify backend API testing.",
      tech: ["Java", "Jflex", "Cup"],
      github: "https://github.com/sano-thaya/testlang_plus.git",
    },
    {
      title: "Employee Management System – Backend API ",
      description: "Designed and developed a web-based system to manage employee records, roles, and or-ganizational data",
      tech: ["Java", "REST API"],
      github: "https://github.com/sano-thaya/employee-management-system-api.git"
    },
    {
      title: " Hotel Management System – Web Application",
      description: "Collaborated in a team of four to build a full-stack hotel and room system for a university course",
      tech: ["Java", "React", "MySQL", "REST API"],
      github_Frontend: "https://github.com/Jenitha23/Hotel-Management-System-Frontend.git",
      github_Backend: "https://github.com/Jenitha23/Hotel-Management-System-Backend.git",
      demo: "https://frontend-palmbeachresort.vercel.app/"

    },
    {
      title: " Fault-Tolerant-Distributed-Messaging-System",
      description: " Implemented features to ensure system reliability during component failures. ",
      tech: ["Java"],
      github: "https://github.com/Jenitha23/Fault-Tolerant-Distributed-Messaging-System-GRP-17.git",

    }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-blue-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-blue-800 dark:text-blue-300 max-w-2xl mx-auto text-lg">
            Some of my recent work that showcases my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-blue-900 rounded-3xl overflow-hidden border border-blue-50 dark:border-blue-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-sky-100 dark:from-blue-900/40 dark:to-sky-900/40 flex items-center justify-center p-6 relative group">
                <div className="w-full h-full bg-white/50 dark:bg-blue-950/50 rounded-xl backdrop-blur-sm border border-white/20 dark:border-blue-800/50 flex items-center justify-center">
                  <span className="text-blue-300 font-medium tracking-wider uppercase text-sm">Project Preview</span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-blue-950 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-blue-800 dark:text-blue-300 mb-6 flex-1 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm"
                  >
                    <FaGithub size={18} />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
