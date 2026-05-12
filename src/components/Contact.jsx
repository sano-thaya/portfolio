import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section section-alt">
      <div className="container section-inner">
        <div className="section-header">
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">Let's build something dependable together.</h2>
          <p className="section-subtitle">
            I am open to internships, software engineering roles, and collaborative projects.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-actions">
            <a href="mailto:sanojan.thayaparan@gmail.com" className="contact-action">
              <span className="contact-icon">
                <Mail className="w-6 h-6" />
              </span>
              <div>
                <p>Email</p>
                <span>sanojan.thayaparan@gmail.com</span>
              </div>
            </a>

            <a
              href="https://github.com/sano-thaya"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action"
            >
              <span className="contact-icon">
                <FaGithub className="w-6 h-6" />
              </span>
              <div>
                <p>GitHub</p>
                <span>github.com/sano-thaya</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/sanojan-thayaparn/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action"
            >
              <span className="contact-icon">
                <FaLinkedin className="w-6 h-6" />
              </span>
              <div>
                <p>LinkedIn</p>
                <span>linkedin.com/in/sanojan-thayaparn</span>
              </div>
            </a>
          </div>

          <div className="contact-cta">
            <a href="mailto:sanojan.thayaparan@gmail.com" className="button button-primary">
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
