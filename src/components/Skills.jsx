const groups = [
  ['Backend & data', 'Python, FastAPI, Java, Spring Boot, PostgreSQL, MySQL'],
  ['Web & mobile', 'React, Next.js, TypeScript, Kotlin, Jetpack Compose, Firebase'],
  ['Testing', 'Playwright, Postman, k6'],
  ['Deployment', 'Git, Docker, Vercel, AWS fundamentals'],
];

const Skills = () => (
  <dl className="skills" id="skills" aria-label="Technical skills">
    {groups.map(([title, items]) => (
      <div key={title}><dt>{title}</dt><dd>{items}</dd></div>
    ))}
  </dl>
);

export default Skills;
