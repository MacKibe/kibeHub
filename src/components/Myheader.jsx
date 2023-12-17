import "./Myheader.css";
const Myheader = () => {
  return (
    <div className="page_header">
      {/* Logo and menu */}
      <div className="logo_name">
        <a href="#">JK.</a>
      </div>
      <ul className="menu_section">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
      </ul>
      <div className="ContactMe">
        <a href="">Contact Me</a>
      </div>
    </div>
  );
};
export default Myheader;
