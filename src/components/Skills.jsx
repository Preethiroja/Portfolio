import React from "react";

const Skills = () => {
  const skillList = [
    "HTML", "CSS", "JavaScript", "React.js", "Node.js",
    "C", "Java", "MySQL", "MongoDB", "Bootstrap", "Figma", "Canva"
  ];

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills">
        {skillList.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;