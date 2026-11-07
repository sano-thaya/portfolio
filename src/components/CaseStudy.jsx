import { useRef, useState } from 'react'
import { featuredProjects } from '../data/projects'
import './CaseStudy.motion.css'

function ArrowIcon({ direction = 'right' }) {
  const paths = {
    left: <path d="m12.5 4.5-7 7 7 7M5.5 11.5h13" />,
    right: <path d="m11.5 4.5 7 7-7 7m7-7h-13" />,
    external: <path d="M8 5.5H18.5V16m0-10.5-13 13" />,
  }

  return (
    <svg
      className="icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[direction]}
    </svg>
  )
}

export default function CaseStudy({ project }) {
  const currentIndex = featuredProjects.findIndex((item) => item.slug === project.slug)
  const nextProject = featuredProjects[(currentIndex + 1) % featuredProjects.length]
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef([])

  function openStep(index) {
    const target = stepRefs.current[index]
    if (!target) return

    stepRefs.current.forEach((step) => {
      if (step) step.open = step === target
    })
    setActiveStep(index)
    target.querySelector('summary')?.focus({ preventScroll: true })
    target.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'center',
    })
  }

  return (
    <main id="main" className="case-page" data-project={project.theme}>
      <div className="wrap case-path">
        <a className="back-link" href="/#projects">
          <ArrowIcon direction="left" /> All projects
        </a>
      </div>

      <section className="wrap case-hero" aria-labelledby="case-title">
        <div className="case-intro">
          <p className="eyebrow">{project.type}</p>
          <h1 id="case-title">{project.title}</h1>
          <p className="case-lead">{project.lead}</p>
        </div>
        <figure className="case-cover">
          <img src={project.image} alt="" width="640" height="330" />
          <figcaption>{project.imageCaption}</figcaption>
        </figure>
      </section>

      <div className="case-content">
        <div className="wrap section-space case-grid">
          <div className="case-main">
            <section aria-labelledby="contribution-title">
              <h2 id="contribution-title">My contribution</h2>
              <p>{project.contribution}</p>
            </section>

            <section aria-labelledby="walkthrough-title">
              <h2 id="walkthrough-title">{project.walkthroughTitle}</h2>
              <p>{project.walkthroughIntro}</p>
              <div className="case-story" role="group" aria-label="Walkthrough progress">
                <div className="case-story-status" aria-live="polite">
                  <span>Explore the process</span>
                  <strong>
                    {activeStep < 0 ? 'Choose a step' : `Step ${activeStep + 1} of ${project.steps.length}`}
                  </strong>
                </div>
                <div className="case-story-track" aria-hidden="true">
                  <span style={{ width: `${((activeStep + 1) / project.steps.length) * 100}%` }} />
                </div>
                <nav className="case-story-stages" aria-label="Walkthrough steps">
                  {project.steps.map((step, index) => (
                    <button
                      key={step.title}
                      className="case-story-stage"
                      type="button"
                      aria-controls={`trace-${project.slug}-${index}`}
                      aria-pressed={activeStep === index}
                      onClick={() => openStep(index)}
                    >
                      <span className="case-story-stage-number">{String(index + 1).padStart(2, '0')}</span>
                      <span>{step.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
              <ol className="trace-list">
                {project.steps.map((step, index) => (
                  <li key={step.title}>
                    <details
                      id={`trace-${project.slug}-${index}`}
                      ref={(element) => { stepRefs.current[index] = element }}
                      className="trace-step"
                      name={`case-trace-${project.slug}`}
                      open={index === 0}
                      onToggle={(event) => {
                        if (event.currentTarget.open) {
                          setActiveStep(index)
                        } else {
                          setActiveStep((current) => current === index ? -1 : current)
                        }
                      }}
                    >
                      <summary>
                        <span className="step-number" aria-hidden="true">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span>{step.title}</span>
                      </summary>
                      <p>{step.description}</p>
                      {index < project.steps.length - 1 && (
                        <button className="case-story-next" type="button" onClick={() => openStep(index + 1)}>
                          Continue to step {index + 2} <ArrowIcon />
                        </button>
                      )}
                    </details>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="decision-title">
              <h2 id="decision-title">{project.decisionTitle}</h2>
              <p>{project.decision}</p>
            </section>
          </div>

          <aside className="case-aside" aria-labelledby="details-title">
            <h2 id="details-title">Project details</h2>
            <dl className="case-facts">
              {project.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label.toUpperCase()}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
            {project.source && (
              <a className="button button-secondary" href={project.source} target="_blank" rel="noopener noreferrer">
                View GitHub repo <ArrowIcon direction="external" />
              </a>
            )}
          </aside>
        </div>
      </div>

      <nav className="wrap next-case" aria-label="Project navigation">
        <a className="back-link" href="/#projects">
          <ArrowIcon direction="left" /> All projects
        </a>
        <a href={nextProject.href}>
          Next project <strong>{nextProject.title}</strong> <ArrowIcon />
        </a>
      </nav>
    </main>
  )
}
