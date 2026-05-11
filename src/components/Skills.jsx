import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiJavascript, SiSpringboot, SiMysql, SiGit, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Java", icon: <FaJava className="text-[#007396]" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      ]
    },

    {
      title: "Tools & Databases",
      skills: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-blue-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-blue-800 dark:text-blue-300 max-w-2xl mx-auto text-lg">
            A comprehensive list of the technologies and tools I work with.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-blue-900 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all border border-blue-50 dark:border-blue-800 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-6 border-b border-blue-50 dark:border-blue-800 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-blue-950 rounded-full border border-blue-100 dark:border-blue-800 transition-colors hover:border-blue-300 dark:hover:border-blue-600 group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </span>
                    <span className="font-medium text-blue-800 dark:text-blue-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
