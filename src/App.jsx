import React, { useState } from "react";
import profile from "./assets/profile.jpg";
import proj1 from "./assets/proj1.png";
import proj2 from "./assets/proj2.png";
import proj3 from "./assets/proj3.jpg";
import proj4 from "./assets/proj4.jpg";
import proj5 from "./assets/proj5.png";
import './index.css';

// --- SUB-COMPONENT SA MAY CONTACT FORM ---
function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [feedback, setFeedback] = useState("");
  const [feedbackColor, setFeedbackColor] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback("Sending...");
    setFeedbackColor("#1f7a8c");

    setTimeout(() => {
      setFeedback(`Thanks ${formData.name}! Your message was sent.`);
      setFeedbackColor("#2b6e47");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input 
        type="text" name="name" placeholder="Your name" required 
        value={formData.name} onChange={handleChange} 
      />
      <input 
        type="email" name="email" placeholder="Email address" required 
        value={formData.email} onChange={handleChange} 
      />
      <textarea 
        rows="3" name="message" placeholder="Tell me about your idea..." 
        value={formData.message} onChange={handleChange} 
      />
      <button type="submit" className="btn" style={{ alignSelf: "center", width: "fit-content" }}>
        Send message
      </button>
      {feedback && <div id="form-feedback" style={{ color: feedbackColor, marginTop: "10px", textAlign: "center" }}>{feedback}</div>}
    </form>
  );
}

// --- MAIN COMPONENT ---
export default function App() {
  const skills = ["HTML & CSS", "JavaScript", "React", "Node.js", "<br>UI/UX Design", "Responsive Dev", "Figma", "GitHub" ];

  const projects = [
    { title: "BAKANTE", tags: ["Web App", "Project"], img: "assets/proj1.png", desc: "A web-based platform designed to bridge the gap between job seekers and employers offering part-time work." },
    { title: "Sportinerary", tags: ["Mobile App", "Project"], img: "assets/proj2.png", desc: "Your ultimate sports companion! Real-time schedules, scores, and event details all in one place." },
    { title: "Awesome Todos", tags: ["Web App", "Project"], img: "assets/proj3.jpg", desc: "A clean todo list app with create, complete, and delete actions focusing on simple usability." },
    { title: "Food Menu", tags: ["Web App", "Project"], img: "assets/proj4.jpg", desc: "A responsive web design showcasing a restaurant’s food offerings in an organized way." },
    { title: "Portfolio", tags: ["Web-based", "Project"], img: "assets/proj5.png", desc: "A digital showcase of my skills and achievements as a developer, serving as an online resume." }
  ];

  return (
    <div id="root">
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
        {/* HERO */}
        <section id="home">
          <div className="container hero">
            <div className="hero-content">
              <div className="greeting">Hello, I'm</div>
              <h1>Precious Janna D. <br /> Subong</h1>
              <span className="highlight">Frontend Developer and UX Designer</span>
              <p>I build clean and responsive interfaces that are easy to explore, visually polished, and focused on real user needs.</p>
              <div className="btn-group">
                <a href="#projects" className="btn">View my work</a>
                <a href="#contact" className="btn btn-outline">Let's talk</a>
              </div>
            </div>
            <div className="avatar">
              <img src={profile} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
  <div className="container">
    <h2 className="section-title">About Me</h2>
    
    <div className="about-content-centered">
      {/* Circle k nga pic*/}
      <div className="avatar" style={{ marginBottom: '2rem' }}>
        <img 
          src={profile} 
          alt="Precious Janna" 
          style={{ width: "100%", height: "100%", objectFit: "cover" }} 
        />
      </div>

      {/* E ang Centered Paragraph */}
      <p style={{ maxWidth: '700px' }}>
        I am an aspiring Frontend Developer and UX Designer currently a 2nd year BSIT student. 
        I am passionate about designing and developing modern, user-friendly websites. 
        I continuously learn and improve my skills to create clean, responsive, and meaningful digital experiences.
      </p>

      {/* Literally Centered Details */}
      <div className="about-details-list">
        <p><strong>Education:</strong> Bachelor of Science in Information Technology</p>
        <p><strong>Focus:</strong> UI/UX, Frontend, Prototyping</p>
        <p><strong>Location:</strong> Zarraga, Iloilo</p>
        <p><strong>Age:</strong> 20 years old</p>
      </div>
    </div>
  </div>
</section>

        {/* SKILLS */}
        <section id="skills">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, i) => <span key={i} className="skill-card">{skill}</span>)}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="container">
            <h2 className="section-title">Featured projects</h2>
            <div className="projects-grid">
              
              {/* Project 1 */}
              <div className="project-card">
                <div className="project-img">
                  <img src={proj1} alt="BAKANTE" />
                </div>
                <div className="project-info">
                  <h3>BAKANTE</h3>
                  <p>A web-based platform designed to bridge the gap between job seekers and employers offering part-time and flexible work opportunities.</p>
                  <div className="project-tag-container">
                    <span className="project-tag">Web App</span>
                    <span className="project-tag">Project</span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="project-card">
                <div className="project-img">
                  <img src={proj2} alt="Sportinerary" />
                </div>
                <div className="project-info">
                  <h3>Sportinerary</h3>
                  <p>Your ultimate sports companion! Real-time schedules, scores, and event details all in one place. Plan your sports viewing experience easily.</p>
                  <div className="project-tag-container">
                    <span className="project-tag">Mobile App</span>
                    <span className="project-tag">Project</span>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="project-card">
                <div className="project-img">
                  <img src={proj3} alt="Awesome Todos" />
                </div>
                <div className="project-info">
                  <h3>Awesome Todos</h3>
                  <p>A clean todo list app with create, complete, and delete actions. Focuses on simple task management and polished UI styling.</p>
                  <div className="project-tag-container">
                    <span className="project-tag">Web App</span>
                    <span className="project-tag">Project</span>
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div className="project-card">
                <div className="project-img">
                  <img src={proj4} alt="Food Menu" />
                </div>
                <div className="project-info">
                  <h3>Food Menu</h3>
                  <p>A responsive web design project developed to showcase a restaurant’s food offerings in an organized and visually appealing way.</p>
                  <div className="project-tag-container">
                    <span className="project-tag">Web App</span>
                    <span className="project-tag">Project</span>
                  </div>
                </div>
              </div>

              {/* Project 5 */}
              <div className="project-card">
                <div className="project-img">
                  <img src={proj5} alt="Portfolio" />
                </div>
                <div className="project-info">
                  <h3>Portfolio</h3>
                  <p>My Personal Portfolio is a digital showcase of my skills, projects, and achievements. It serves as an online resume for my journey.</p>
                  <div className="project-tag-container">
                    <span className="project-tag">Web-based</span>
                    <span className="project-tag">Project</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ borderBottom: "none" }}>
          <div className="container">
            <h2 className="section-title">Let's connect</h2>
            <div className="contact-card">
              <p style={{ marginBottom: "1rem", textAlign: "center" }}>Contact Me!</p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>© 2026 Precious Janna D. Subong — All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}