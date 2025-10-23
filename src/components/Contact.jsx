import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // success or error message

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_k23i4qe",
      "template_s54z5wc",
      form.current,
      "fds462uGtMpDTqMH2"
    ).then(
      () => setStatus("Message sent successfully! ✅"),
      (error) => setStatus("Error sending message: " + error.text)
    );
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact <span>Me</span></h2>
        <p className="contact-desc">
          I’d love to hear from you — internships, projects, or just to say hi 👋
        </p>

        <div className="contact-content">
          {/* LEFT: contact info */}
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <div className="info-row">
              <FaEnvelope className="info-icon" />
              <div>
                <div className="info-label">Email</div>
                <a href="mailto:preethiroja57@gmail.com" className="info-link">
                  preethiroja57@gmail.com
                </a>
              </div>
            </div>

            <div className="social-row">
              <a href="https://github.com/Preethiroja" target="_blank" rel="noreferrer" className="social-btn">
                <FaGithub /> <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/preethi-roja-962392294" target="_blank" rel="noreferrer" className="social-btn">
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* RIGHT: contact form */}
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">Send Message</button>

            {/* Popup status message */}
            {status && (
              <div className={`status-popup ${status.includes("Error") ? "error" : "success"}`}>
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
