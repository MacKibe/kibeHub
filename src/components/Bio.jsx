import me from "../../public/me.jpg";
const Bio = () => {
  return (
    <div className="bio-section">
      <img src={me} alt="ndichu james standingn" />
      <div className="profile-bio">
        <h1>Ndichu James</h1>
        <h2>FrontEnd Engineer</h2>
        <p>
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
      </div>
      <nav>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Work Experience</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
        </ul>
      </nav>
      <div className="socials-section">
        <ul>
        <li><a href="">LinkedIn</a></li>
        <li><a href="">Github</a></li>
        <li><a href="">Instagram</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Bio;
