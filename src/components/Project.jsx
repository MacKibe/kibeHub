import "./project.css";
import mashamba_screen_shot from "../assets/mashamba.png";
const Project = () => {
  return (
    <>
      <a href="http://" className="project">
        <p>
          <h3>Mashamba</h3>
        </p>
        <figure>
          <figcaption className="project_details">
            <p>Surveyor's digital document assistant.</p>
            <p>Status: <b>Ongoing Project.</b></p>
          </figcaption>
          <img src={mashamba_screen_shot} alt="" />
        </figure>
      </a>
    </>
  );
};

export default Project;
