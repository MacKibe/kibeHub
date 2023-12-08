import "./Bio_Section.css";
import m3 from "../assets/m3.jpeg";
import github_logo from "../assets/git_b.png";
import whatsApp_logo from "../assets/whatsApp.png";
import linkedIn from "../assets/linkedIn.png";
import instagram from "../assets/instagram.png";
const Bio_Section = () => {
  return (
    <div className="bio_section">
      <div className="image_box">
        <img src={m3} alt="" />
        <div>
          <h2>Ndichu James Kiberenge</h2>
          <h3>Data Manager || Web Developer || Photographer</h3>
        </div>
      </div>
      <div>
        <div>
          <h4>
            I am passionate about creating visually pleasing and data-driven web
            applications.
          </h4>
        </div>
        <div className="socials_section">
          <div>
            Lets Connect:
          </div>
          <div>
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
      </div>
    </div>
  );
};
export default Bio_Section;
