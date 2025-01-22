import { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("/data/work.json")
      .then((response) => response.json())
      .then((data) => {
        setProjectData(data.projects);
      })
      .catch((error) =>
        console.error("Error fetching the project data:", error)
      );
  }, []);

  return (
    <section className="projects-section min-width" id="projects">
      <h2>Some Things I’ve Built.</h2>
      {projectData.length > 0 ? (
        projectData.map((project, index) => (
          <div key={index} className="projects">
            <a href={project.project_links.project_url} target="blank" rel="noopener noreferrer">
              <img
                src={project.project_image}
                alt={`${project.project_name} screenshot`}
              />
            </a>
            <div className="projects-description">
              <h4>CMS Website.</h4>
              <h3>{project.project_name}</h3>
              <p>{project.project_description}</p>
              <div className="projects-skills">
                <span>{project.project_technologies_used.join(", ")}</span>
              </div>
              <div className="projects-links">
                <a
                  href={project.project_links.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub size={25} />
                </a>
                <a
                  href={project.project_links.project_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GoLinkExternal size={25} />
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No projects available</p>
      )}
    </section>
  );
};

export default Projects;
