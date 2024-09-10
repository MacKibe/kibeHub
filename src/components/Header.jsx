import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>JK.</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Experience</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="http://" className="resume">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
