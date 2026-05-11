import { Code2, Server, Laptop } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Laptop className="w-6 h-6 text-blue-500" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using React and modern CSS."
    },
    {
      icon: <Server className="w-6 h-6 text-purple-500" />,
      title: "Backend Development",
      description: "Creating robust APIs and services with Java Spring Boot and Node.js."
    },
    {
      icon: <Code2 className="w-6 h-6 text-indigo-500" />,
      title: "Problem Solving",
      description: "Applying data structures and algorithms to solve complex technical challenges."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-blue-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-blue-800 dark:text-blue-200">
            <p>
              Hello! I'm a Computer Science student with a strong passion for software engineering. 
              My journey in tech started with a curiosity about how websites work, which quickly 
              evolved into a deep interest in building full-stack applications.
            </p>
            <p>
              My primary career goal is to become a versatile Software Engineer who can bridge the gap 
              between user experience and backend architecture. I enjoy the creative aspect of frontend 
              development with React, as well as the logical challenges of backend systems using Java Spring Boot.
            </p>
            <p>
              When I'm not coding or studying, you can find me participating in hackathons, exploring 
              new technologies, or contributing to open-source projects. I'm always eager to learn 
              and collaborate on exciting ideas.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-blue-900 p-6 rounded-2xl border border-blue-50 dark:border-blue-800 hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white dark:bg-blue-950 rounded-xl shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-950 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-blue-800 dark:text-blue-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
