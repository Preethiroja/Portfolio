import React from "react";
import { FaCode, FaLaptopCode, FaPenNib, FaCertificate } from "react-icons/fa";

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications & Courses</h2>
      <p className="cert-intro">
        Here are some of my completed certifications that reflect my learning and technical growth in programming, web development, and design.
      </p>

      <div className="cert-grid">
        <div className="cert-card">
          <div className="cert-icon"><FaCertificate /></div>
          <h3>Java Programming</h3>
          <h4>GeekforGeeks</h4>
          <p>Enhanced Java coding skills with object-oriented programming and hands-on problem solving.</p>
          <a 
            href="https://media.geeksforgeeks.org/courses/certificates/1a230a3427900c5bf115fdf16dbc15d9.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="view-btn"
          >
            View Certificate
          </a>
        </div>


        <div className="cert-card">
          <div className="cert-icon"><FaCode /></div>
          <h3>C Programming</h3>
          <h4>Great Learning</h4>
          <p>Developed a strong foundation in programming concepts and logic building using C language.</p>
          <a 
            href="https://www.mygreatlearning.com/certificate/PVSBNVHE?referrer_code=GLBZZ4HH2YNWU" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="view-btn"
          >
            View Certificate
          </a>
        </div>

        <div className="cert-card">
          <div className="cert-icon"><FaLaptopCode /></div>
          <h3>HTML</h3>
          <h4>Great Learning</h4>
          <p>Mastered the fundamentals of web structure and design to build responsive and elegant websites.</p>
          <a 
            href="https://www.mygreatlearning.com/certificate/WAFZTKNF?referrer_code=GLBZZ4HH2YNWU" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="view-btn"
          >
            View Certificate
          </a>
        </div>

        <div className="cert-card">
          <div className="cert-icon"><FaLaptopCode /></div>
          <h3>CSS</h3>
          <h4>Great Learning</h4>
          <p>Mastered the fundamentals of web structure and design to build responsive and elegant websites.</p>
          <a 
            href="https://www.mygreatlearning.com/certificate/AMCJQMUJ?referrer_code=GLBZZ4HH2YNWU" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="view-btn"
          >
            View Certificate
          </a>
        </div>

        <div className="cert-card">
          <div className="cert-icon"><FaCertificate /></div>
          <h3>Java Programming</h3>
          <h4>Infosys Springboard</h4>
          <p>Enhanced Java coding skills with object-oriented programming and hands-on problem solving.</p>
          <a 
            href="https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01384793912231526456522_shared/1-f2b7c91a-45af-44d6-93e7-1b34ef97dfcd.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="view-btn"
          >
            View Certificate
          </a>
        </div>

        <div className="cert-card">
          <div className="cert-icon"><FaPenNib /></div>
          <h3>Prompt Engineering</h3>
          <h4>Simplilearn</h4>
          <p>Explored AI-driven prompt design and improved interaction accuracy with AI-based tools.</p>
          <a 
            href="https://simpli-web.app.link/e/XLhn2meoFXb" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="view-btn"
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
