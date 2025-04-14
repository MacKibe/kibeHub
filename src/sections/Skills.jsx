import SkillCard from "../components/SkillCard";
const Skills = () => {
  return (
    <section>
      <h2>Skills & Expertise</h2>
      <div className="flex space-x-7 py-7">
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
      <div>
        <h4 className="text-center">Additional Skills</h4>
        <ul className="flex flex-wrap py-5 space-x-7">
          <li className="flex px-4 py-1 border-1 gap-3">
            @ <p>Problem Solving</p>
          </li>
          <li className="flex px-4 py-1 border-1 gap-3">
            @ <p>Responsive Design</p>
          </li>
          <li className="flex px-4 py-1 border-1 gap-3">
            @ <p>API Intergration</p>
          </li>
          <li className="flex px-4 py-1 border-1 gap-3">
            @ <p>Team Collaboration</p>
          </li>
          <li className="flex px-4 py-1 border-1 gap-3">
            @ <p>Content Management Systems</p>
          </li>
          <li className="flex px-4 py-1 border-1 gap-3">
            @ <p>Research % Learning</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
