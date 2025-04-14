const SkillCard = () => {
  return (
    <div className="w-[30%] p-5 border-1">
      <h3 className="py-2">Frontend</h3>
      <ul>
        <li className="flex flex-col w-[100%] py-3">
          <div className="flex justify-between">
            <span>React</span>
            <span>90%</span>
          </div>
          <div className="w-[100%]">
            <input type="range" name="react_skill" value={90} width={100}/>
          </div>
        </li>
        <li className="flex flex-col w-[100%] py-3">
          <div className="flex justify-between">
            <span>Tailwind Css</span>
            <span>90%</span>
          </div>
          <div className="w-[100%]">
            <input type="range" name="react_skill" value={90} width={100}/>
          </div>
        </li>
        <li className="flex flex-col w-[100%] py-3">
          <div className="flex justify-between">
            <span>Javascript</span>
            <span>90%</span>
          </div>
          <div className="w-[100%]">
            <input type="range" name="react_skill" value={90} width={100}/>
          </div>
        </li>
        <li className="flex flex-col w-[100%] py-3">
          <div className="flex justify-between">
            <span>Typescript</span>
            <span>90%</span>
          </div>
          <div className="w-[100%]">
            <input type="range" name="react_skill" value={90} width={100}/>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SkillCard;
