import Icon from './Icon';

const Footer = ({ isCaseStudy = false }) => (
  <footer className="wrap footer">
    <span>© {new Date().getFullYear()} Sanojan Thayaparan</span>
    <a href={isCaseStudy ? '/#contact' : '#top'}>
      {isCaseStudy ? 'Get in touch' : 'Back to top'} <Icon name={isCaseStudy ? 'external' : 'up'} />
    </a>
  </footer>
);

export default Footer;
