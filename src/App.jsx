import React from "react";
import { createRoot } from "react";
import ContactForm from "./ContactForm.jsx"; 
import './index.css';

function App() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">PORTFOLIO</div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home">
          <div className="container hero">
            <div className="hero-content fade-up">
              <div className="greeting">Hello, I'm</div>
              <h1>
                Precious Janna D. <br /> Subong
              </h1>
              <span className="highlight">
                Frontend Developer and UX Designer
              </span>
              <p>
                I build clean and responsive interfaces that are easy to explore,
                visually polished, and focused on real user needs.
              </p>
              <div className="btn-group">
                <a href="#projects" className="btn">View my work</a>
                <a href="#contact" className="btn btn-outline">Let's talk</a>
              </div>
            </div>
            <div className="avatar">
              <img
                src="assets/profile.jpg"
                alt="Precious Janna D. Subong"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content fade-up">
              <div className="about-text">
                <div className="about-illustration">
                  <div className="about-icon">
                    <img
                      src="assets/aboutme.jpg"
                      alt="Precious Janna"
                      style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                    />
                  </div>
                  <p>
                    I am an aspiring Frontend Developer and UX Designer currently a 2nd year BSIT student. 
                    I am passionate about designing and developing modern, user-friendly websites. 
                    I continuously learn and improve my skills to create clean, responsive, and meaningful digital experiences.
                  </p>
                  <br />
                  <p>🎓 <strong>Education:</strong> Bachelor of Science in Information Technology</p>
                  <p>💡 <strong>Focus:</strong> UI/UX, Frontend, Prototyping</p>
                  <p>📍 <strong>Location:</strong> Zarraga, Iloilo</p>
                  <p>📆 <strong>Age:</strong> 20 years old</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
              {["HTML & CSS","JavaScript","React","Node.js","UI/UX Design","Responsive Dev","Figma","GitHub"].map(skill => (
                <span key={skill} className="skill-card">{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="container">
            <h2 className="section-title">Featured projects</h2>
            <div className="projects-grid">
              {/* Example project card */}
              <div className="project-card fade-up">
                <div className="project-img">
                  <img src="assets/proj1.png" alt="BAKANTE" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="project-info">
                  <h3>BAKANTE</h3>
                  <p>BAKANTE is a web-based platform designed to bridge the gap between job seekers and employers offering part-time and flexible work opportunities...</p>
                  <span className="project-tag">Web App</span>
                  <span className="project-tag">Project</span>
                </div>
              </div>
              {/* Repeat for other projects */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <div className="container">
            <h2 className="section-title">Let's connect</h2>
            <div className="contact-card fade-up">
              <p style={{ marginBottom: "0.6rem" }}>📩 Contact Me!</p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Precious Janna D. Subong — All Rights Reserved.</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
