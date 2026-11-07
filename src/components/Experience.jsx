import Icon from './Icon';

const clients = [
  { title: 'Sparkling Bakery', detail: 'Custom cake ordering and payments', slug: 'sparkling-bakery' },
  { title: 'AMC Travel Service', detail: 'Travel services and customer enquiries', slug: 'amc-travel' },
];

const Experience = () => (
  <section className="experience wrap section-space" id="experience" aria-labelledby="experience-title">
    <div className="section-heading">
      <div>
        <p className="eyebrow">Experience</p>
        <h2 id="experience-title">Freelance web development</h2>
      </div>
    </div>
    <div className="experience-grid">
      <div className="experience-copy">
        <p>I start with a call to understand the business, its customers, and what the owner wants to improve. We talk through the budget and what the site will cost to run and maintain.</p>
        <p>Once there’s a working site, I ask for feedback and make revisions before handoff.</p>
      </div>
      <ul className="client-list">
        {clients.map(({ title, detail, slug }) => (
          <li key={slug}>
            <a href={`/projects/${slug}`}>
              <span><strong>{title}</strong><small>{detail}</small></span>
              <Icon name="right" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Experience;
