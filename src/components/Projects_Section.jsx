import Project from "./Project";
import "./projects_section.css";
const Projects_Section = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="projects_section">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};
export default Projects_Section;
