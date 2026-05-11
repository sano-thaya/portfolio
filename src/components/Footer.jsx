const Footer = () => {
  return (
    <footer className="py-8 border-t border-blue-100 dark:border-blue-900 bg-white dark:bg-blue-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-blue-800 dark:text-blue-300 font-medium">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </div>
        
        <div className="text-sm text-blue-700 dark:text-blue-700">
          Built with React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
