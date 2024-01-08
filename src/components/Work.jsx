import "./work.css";
const Work = () => {
  return (
    <div className="work">
      <div className="work-title">
        <h3>Mutall Data</h3>
        <h4>Apprenticeship</h4>
        <h5>(February 2022 - Present)</h5>
      </div>
      <div>
        <div>
          <h4>Description</h4>
          <p>
            A proactive member of the Mutall Data developers group, contributing
            significantly to web development, database management, and software
            documentation.
          </p>
          <p>
            Notable achievements include developing a CMS website for Kiama Kia
            Ma and a File Management System for a Surveyor, showcasing
            proficiency in handling complex data and image management tasks.
          </p>
        </div>
        <ul className="skills_gained">
          <h4>Skills Gained</h4>
          <li><b>HTML</b> and <b>Css</b> fundamentals</li>
          <li><b>Javascript/Typescript</b></li>
          <li>Database Management using <b>Mysql</b></li>
          <li>Server side programming with <b>Php</b></li>
          <li>Version control with <b>Git</b></li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
