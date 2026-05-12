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
    <section id="skills" className="section section-alt">
      <div className="container section-inner">
        <div className="section-header">
          <span className="section-kicker">Skills</span>
          <h2 className="section-title">Modern tools, production ready mindset.</h2>
          <p className="section-subtitle">
            A focused stack for building scalable software, clean interfaces, and reliable systems.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-card skill-card">
              <h3>{category.title}</h3>
              <div className="skill-chips">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-chip">
                    <span className="skill-icon">{skill.icon}</span>
                    <span>{skill.name}</span>
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
