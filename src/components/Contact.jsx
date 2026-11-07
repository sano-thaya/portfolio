import cvPdf from '../assets/Sanojan_Thayapran.pdf';
import Icon from './Icon';

const Contact = () => (
  <section className="contact wrap section-space" id="contact" aria-labelledby="contact-title">
    <div className="contact-panel">
      <div>
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Let’s get in touch</h2>
        <p>I’m looking for a six-month software engineering internship where I can contribute to backend development and learn from an engineering team.</p>
      </div>
      <div className="contact-actions">
        <a className="button button-primary" href="mailto:nsanojan.thayaparan@gmail.com">Email me <Icon name="mail" /></a>
        <a className="button button-secondary" href="https://www.linkedin.com/in/sanojan-thayaparn/" target="_blank" rel="noopener noreferrer">LinkedIn <Icon name="external" /></a>
        <a className="button button-secondary" href="https://github.com/sano-thaya" target="_blank" rel="noopener noreferrer">GitHub <Icon name="external" /></a>
        <a className="button button-secondary" href={cvPdf} download>Download CV</a>
      </div>
    </div>
  </section>
);

export default Contact;
