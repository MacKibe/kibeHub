import "./project.css";
import mashamba_screen_shot from "../assets/mashamba.png";
const Project = () => {
  return (
    <div className="project">
      <img src={mashamba_screen_shot} alt="" />
      <div className="project_details">
        <div>
          <h3>Mashamba</h3>
        </div>
        <hr />
        <div>Description:</div>
        <div>
          <a href="" target="blank">
            Visit Mashamba
          </a>
        </div>
      </div>
    </div>
  );
};
export default Project;
