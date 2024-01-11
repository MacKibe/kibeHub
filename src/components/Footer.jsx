import github_logo from "../assets/git_b.png";
import whatsApp_logo from "../assets/whatsApp.png";
import linkedIn from "../assets/linkedIn.png";
import instagram from "../assets/instagram.png";
import "./footer.css"
const Footer = () => {
  return (
    <div className="footer">
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

export default Footer;
