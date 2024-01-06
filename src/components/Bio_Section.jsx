import "./Bio_Section.css";
import m3 from "../assets/m331.png";
import github_logo from "../assets/git_b.png";
import whatsApp_logo from "../assets/whatsApp.png";
import linkedIn from "../assets/linkedIn.png";
import instagram from "../assets/instagram.png";
const Bio_Section = () => {
  return (
    <div className="bio_section">
      <div className="image_box">
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
      <div className="socials_section">
        <a href="https://github.com/MacKibe" target="blank">
          <img src={github_logo} alt="Ndichu's Github Account" />
        </a>
        <a href="https://github.com/MacKibe" target="blank">
          <img src={whatsApp_logo} alt="Ndichu's Github Account" />
        </a>
        <a href="https://github.com/MacKibe" target="blank">
          <img src={linkedIn} alt="Ndichu's Github Account" />
        </a>
        <a href="https://github.com/MacKibe" target="blank">
          <img src={instagram} alt="Ndichu's Github Account" />
        </a>
      </div>
    </div>
  );
};
export default Bio_Section;
