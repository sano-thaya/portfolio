import { useState } from 'react';
import { earlierProjects, featuredProjects } from '../data/projects';
import Icon from './Icon';
import './Projects.motion.css';

const symbols = {
  compnet: 'research',
  'sparkling-bakery': 'commerce',
  'amc-travel': 'travel',
  clearledger: 'mobile',
};

const filters = ['All', 'Testing', 'Backend', 'Web', 'Systems'];

const projectCategory = (project) => {
  if (/testing|qa/i.test(project.category)) return 'Testing';
  if (/backend/i.test(project.category)) return 'Backend';
  if (/distributed|systems/i.test(project.category)) return 'Systems';
  return 'Web';
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = earlierProjects.filter((project) =>
    activeFilter === 'All' || projectCategory(project) === activeFilter
  );

  return (
  <section className="work" id="work" aria-labelledby="work-title">
    <div className="wrap section-space" id="projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h2 id="work-title">Selected projects</h2>
        </div>
        <p>Case studies, personal projects, freelance work, and team projects.</p>
      </div>
      <div className="project-grid">
        {featuredProjects.map((project, index) => (
          <article className="project-card" key={project.slug} style={{ '--card-index': index }}>
            <a className="project-link" href={project.href} aria-labelledby={`${project.slug}-title ${project.slug}-link`}>
              <div className="project-top">
                <p className="project-type">{project.type}</p>
                <span className={`project-symbol symbol-${symbols[project.slug]}`} aria-hidden="true">
                  <Icon name={symbols[project.slug]} />
                </span>
              </div>
              <h3 id={`${project.slug}-title`}>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <ul className="tags" aria-label="Technologies">
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <span className="project-action" id={`${project.slug}-link`}>Read case study <Icon name="right" /></span>
            </a>
          </article>
        ))}
      </div>
      <section className="earlier-work" aria-labelledby="earlier-title">
        <div className="section-heading">
          <div><h2 id="earlier-title">Earlier projects</h2></div>
          <p>More of my work in API development, testing, and distributed systems.</p>
        </div>
        <div className="project-filters" role="group" aria-label="Filter earlier projects">
          {filters.map((filter) => (
            <button
              className="project-filter"
              type="button"
              key={filter}
              aria-pressed={activeFilter === filter}
              aria-controls="earlier-project-grid"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
              <span className="project-filter-count" aria-hidden="true">
                {filter === 'All' ? earlierProjects.length : earlierProjects.filter((project) => projectCategory(project) === filter).length}
              </span>
            </button>
          ))}
        </div>
        <p className="project-filter-status" role="status" aria-live="polite">
          Showing {visibleProjects.length} {activeFilter === 'All' ? 'earlier' : activeFilter.toLowerCase()} {visibleProjects.length === 1 ? 'project' : 'projects'}.
        </p>
        <div className="earlier-grid" id="earlier-project-grid">
          {visibleProjects.map((project, index) => (
            <article className="earlier-card" key={project.title} style={{ '--card-index': index }}>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul className="tags" aria-label="Technologies">
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <div className="earlier-links">
                {project.links.map(({ label, href }) => (
                  <a className="text-link" key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} ${label.toLowerCase()}`}>
                    {label} <Icon name="external" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  </section>
  );
};

export default Projects;
