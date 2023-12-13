import "./Skill_Section.css";
const Skill_Section = () => {
  return (
    <div className="skills_section">
      <h2>Skills</h2>
      <div className="skills_list_section">
        <details open className="languages_skills_section">
          <summary>
            <h4>Languages</h4>
          </summary>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>MySQL</li>
          </ul>
        </details>
        <details open>
          <summary>
            <h4>Library</h4>
          </summary>
          <ul>
            <li>ReactJS</li>
          </ul>
        </details>
        <details open>
          <summary>
            <h4>Tools</h4>
          </summary>
          <ul>
            <li>Figma</li>
            <li>Git</li>
          </ul>
        </details>
      </div>
    </div>
  );
};
export default Skill_Section;
