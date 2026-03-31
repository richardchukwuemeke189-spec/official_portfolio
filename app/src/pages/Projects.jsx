import React from "react";
import "../styles/projects.css";
import Footer from "../components/Footer";
import { projects_data } from "../data/projectsData";
import { projVideoData } from "../data/projectsData";

function Projects() {
  return (
    <div>
    <div className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-subtitle">
        A journey through my development, from foundational to full-stack projects.
      </p>

      <div className="projects-container">
        {projects_data.map((project) => (
          <div className="project-card" key={project.id}>
            
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.name}</h3>
              <span className="project-type">{project.type}</span>
              <p>{project.description}</p>
              <p>{project.disclaimer}</p>

              <div className="tech-stack">
                <p className="tech-title">TECH STACK</p>
                <div className="tech-list">
                  {project.techStack.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>

              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="live-btn"
              >
                Live Website
              </a>
            </div>

          </div>
        ))}
      </div>

        <h3 style={{marginTop:"100px"}}>Admin and Student Panel</h3>
        <video className="project-video" controls>
            <source src={projVideoData[0].video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>

    </div>
    <Footer />
    </div>
  );
}

export default Projects;