import React from "react";
import { FaLaptopCode, FaGlobe } from "react-icons/fa";

const Internships = () => {
  return (
    <section id="internships" className="internships">
      <h2>Internships & Certifications</h2>
      <p className="intern-intro">
        A glimpse into my learning journey through internships, workshops, and certifications that enhanced my technical and creative skills.
      </p>

      <div className="internships-grid">
        <div className="intern-card">
          <div className="intern-icon"><FaLaptopCode /></div>
          <h3>Codtech Internship</h3>
          <h4>Java Development (Aug 2025)</h4>
          <p>Worked on developing Java-based applications, gaining hands-on experience with object-oriented design and debugging techniques.</p>
          <a
            href="/public/codtech.pdf"
            className="view-btn"
          >
            View Certificate
          </a>
        </div>

        <div className="intern-card">
          <div className="intern-icon"><FaGlobe /></div>
          <h3>Octanet Internship</h3>
          <h4>Web Development (Nov 2024)</h4>
          <p>Developed responsive front-end websites using React.js and Bootstrap, focusing on modern UI/UX practices and API integration.</p>
          <a
            href="/public/octanet.pdf"
            className="view-btn"
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Internships;
