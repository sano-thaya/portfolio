const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          &copy; {new Date().getFullYear()} Sanojan Thayaparan. All rights reserved.
        </div>
        <div>Built with React and Tailwind CSS</div>
      </div>
    </footer>
  );
};

export default Footer;
