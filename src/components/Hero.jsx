import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="mb-4 inline-block">
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium tracking-wide">
            Computer Science Student
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-blue-950 dark:text-white">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">Sanojan Thayaparan</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium text-blue-800 dark:text-blue-200 mb-6">
          Aspiring Software Engineer[QA/Backend]
        </h2>

        <p className="text-lg md:text-xl text-blue-800 dark:text-blue-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          I'm a passionate student building modern web applications and solving the problem.
          Currently focused on the Java Spring Boot to craft scalable, elegant solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1"
          >
            View My Work
            <ArrowRight size={18} />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-blue-900 text-blue-800 dark:text-blue-100 hover:text-blue-600 dark:hover:text-blue-400 border border-blue-100 dark:border-blue-800 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
