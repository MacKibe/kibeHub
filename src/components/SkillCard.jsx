import ProgressBar from "./ProgressBar";
const SkillCard = () => {
  return (
    <div className="w-[30%] p-5 border-1">
      <h3 className="py-2">Frontend</h3>
      <ul>
        <li className="flex flex-col w-[100%] py-3 gap-2">
          <div className="flex justify-between">
            <span>React</span>
            <span>90%</span>
          </div>
          <ProgressBar value={90} />
        </li>
        <li className="flex flex-col w-[100%] py-3 gap-2">
          <div className="flex justify-between">
            <span>Tailwind Css</span>
            <span>90%</span>
          </div>
          <ProgressBar value={90} />
        </li>
        <li className="flex flex-col w-[100%] py-3 gap-2">
          <div className="flex justify-between">
            <span>Javascript</span>
            <span>90%</span>
          </div>
          <ProgressBar value={90} />
        </li>
        <li className="flex flex-col w-[100%] py-3 gap-2">
          <div className="flex justify-between">
            <span>Typescript</span>
            <span>90%</span>
          </div>
          <ProgressBar value={90} />
        </li>
      </ul>
    </div>
  );
};

export default SkillCard;
