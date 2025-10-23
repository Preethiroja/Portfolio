import React from "react";
import profileImg from "../assets/profile1.png"; // make sure image exists

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hi, I'm Preethi Roja 👋</h1>
        <p>
          Motivated and detail-oriented <b>B.Tech IT</b> student passionate about front-end
          development and UI/UX design. I love crafting beautiful, functional web experiences.
        </p>
        <button onClick={() => window.location.href = "#projects"}>
          Explore My Work 🚀
        </button>
      </div>
      <img src={profileImg} alt="Preethi Roja" className="profile-pic" />
    </section>
  );
};

export default Home;