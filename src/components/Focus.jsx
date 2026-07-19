const Focus = () => {
  const focusAreas = [
    {
      title: 'Backend Engineering',
      description: 'Designing APIs and services with a maintainable structure, pragmatic data flow, and reliability in mind.',
      points: ['RESTful APIs', 'Clean architecture', 'Maintainable service design'],
    },
    {
      title: 'Testing & QA',
      description: 'Treating validation as part of development, not a separate phase, and keeping testability visible in the design.',
      points: ['API testing', 'Test-aware workflows', 'Reliability-focused delivery'],
    },
    {
      title: 'AWS & Cloud Readiness',
      description: 'Thinking about deployment, scalability, and cloud operations early so projects are easier to ship and support.',
      points: ['AWS exposure', 'Deployment mindset', 'Production readiness'],
    },
    {
      title: 'Parallel & Distributed Computing',
      description: 'Working with performance-sensitive and concurrent ideas that matter in real systems.',
      points: ['Concurrency concepts', 'Distributed behavior', 'Performance awareness'],
    },
  ];

  return (
    <section id="focus" className="section section-alt">
      <div className="container section-inner">
        <div className="section-header">
          <span className="section-kicker">Internship Focus</span>
          <h2 className="section-title">What I want recruiters to notice first.</h2>
          <p className="section-subtitle">
            This section is intentionally direct: it highlights the strengths I want to bring into a Software Engineer or QA Engineer internship.
          </p>
        </div>

        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article key={area.title} className="glass-card focus-card">
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <ul>
                {area.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Focus;