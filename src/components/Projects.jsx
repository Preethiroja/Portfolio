import React, { useState } from "react";

const Projects = () => {
  const [open, setOpen] = useState(null);

  const projects = [
    {
      name: "MediMonitor",
      desc: "A platform that provides real-time information on medication usage, dosage, and side effects. Includes a pill identifier tool.",
      img: "https://img.freepik.com/free-vector/medical-app-concept-illustration_114360-5818.jpg"
    },
    {
      name: "Plagiarism Detection System",
      desc: "Detects content similarities with existing sources to ensure academic integrity and originality.",
      img: "https://img.freepik.com/free-vector/seo-content-creation-abstract-concept_335657-3001.jpg"
    },
    {
      name: "Laundry Hub",
      desc: "A smart laundry management system for hostel students, featuring request tracking, status updates, and user-friendly dashboards.",
      img: "https://img.freepik.com/free-vector/laundry-room-concept-illustration_114360-2581.jpg"
    },
    {
      name: "Generalized Path Generator",
      desc: "Web-based application for conducting exams, monitoring student responses, and generating results automatically.",
      img: "https://img.freepik.com/free-vector/exam-monitoring-system-concept-illustration_114360-7564.jpg" // ✅ Updated image
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((proj, i) => (
          <div className="project-card" key={i}>
            <img src={proj.img} alt={proj.name} />
            <h3>{proj.name}</h3>
            <button onClick={() => setOpen(open === i ? null : i)}>
              {open === i ? "Hide Details" : "View Details"}
            </button>
            {open === i && <p>{proj.desc}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
