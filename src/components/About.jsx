import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I am a passionate learner pursuing <b>B.Tech Information Technology</b> at Sri Shakthi
        Institute of Engineering and Technology (2023–2027). I’m eager to create meaningful digital
        experiences that combine design and functionality.
      </p>
      <p>
        My goal is to secure an internship in front-end development where I can apply creativity and
        technical skills to real-world projects.
      </p>

      <a 
        href="/public/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="resume-btn"
      >
        View Resume
      </a>
    </section>
  );
};

export default About;
