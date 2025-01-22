
const Header = () => {

  const openFile = () => {
    window.open("https://docs.google.com/document/d/1h0-R4lZTal6WtbblV8e0b1cfdKRre4fO/edit?usp=sharing&ouid=112021712609350992303&rtpof=true&sd=true", "_blank")
  }
  return (
    <div className="header">
      <div className="logo">
        <h1>JK.</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#aboutMe">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="http://" className="resume" onClick={openFile}>Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
