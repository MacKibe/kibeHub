import "./Bio_Section.css";
import m3 from "../assets/m331.png";
const Bio_Section = () => {
  return (
    <div className="bio_section">
      <img src={m3} alt="Ndichu James"/>
      <div className="bio_details">
        <h2>HI, I'M</h2>
        <h2>NDICHU JAMES</h2>
        <h3> FrontEnd Developer || Photographer || Data Manager</h3>
        <hr />
        <h4>
          I am passionate about creating visually pleasing and data-driven web
          applications.
        </h4>
        <button className="resume_btn">View Resume</button>
      </div>
    </div>
  );
};
export default Bio_Section;
