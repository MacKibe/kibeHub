import "./Myheader.css";
const Myheader = () => {
  return (
    <div className="page_header">
      {/* Logo and menu */}
      <div className="logo_section">
        <span className="logo_name">
          <a href="#">JK.</a>
        </span>
      </div>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
        <li className="ContactMe">
          <a href="">Contact Me</a>
        </li>
      </ul>
    </div>
  );
};
export default Myheader;
