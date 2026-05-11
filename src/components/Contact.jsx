import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-blue-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-blue-800 dark:text-blue-300 max-w-2xl mx-auto text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="bg-blue-100/50 dark:bg-blue-900/60 p-8 md:p-12 rounded-3xl shadow-sm border border-blue-200/50 dark:border-blue-800/50 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">

          <a
            href="sanojan.thayaparan@gmail.com"
            className="flex flex-col items-center gap-4 text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
          >
            <div className="w-16 h-16 bg-white dark:bg-blue-800 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all">
              <Mail className="w-7 h-7" />
            </div>
            <span className="font-semibold text-lg">Email Me</span>
          </a>

          <a
            href="https://github.com/sano-thaya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
          >
            <div className="w-16 h-16 bg-white dark:bg-blue-800 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all">
              <FaGithub className="w-8 h-8" />
            </div>
            <span className="font-semibold text-lg">GitHub</span>
          </a>

          <a
            href="ttps://www.linkedin.com/in/sanojan-thayaparn/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
          >
            <div className="w-16 h-16 bg-white dark:bg-blue-800 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all">
              <FaLinkedin className="w-8 h-8" />
            </div>
            <span className="font-semibold text-lg">LinkedIn</span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;
