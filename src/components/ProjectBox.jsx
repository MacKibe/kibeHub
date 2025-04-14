import ppa from "../assests/ppa.jpg";
const ProjectBox = () => {
  return (
    <div className="border-1 border-primary w-[30%]">
      <div>
        <img src={ppa} alt="" />
      </div>
      <div className="p-5">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          laborum quidem quasi, aperiam obcaecati minus similique blanditiis
          omnis consequuntur beatae laudantium dignissimos quae illum, molestias
          libero hic nobis, rem eius!
        </p>
        <ul className="flex flex-wrap items-center space-x-7 text-nowrap space-y-3 py-5">
          <li className="px-4 py-1 border-1 text-primary border-primary rounded-2xl">React</li>
          <li className="px-4 py-1 border-1 text-primary border-primary rounded-2xl">Node</li>
          <li className="px-4 py-1 border-1 text-primary border-primary rounded-2xl">Mongo DB</li>
          <li className="px-4 py-1 border-1 text-primary border-primary rounded-2xl">Tailwind Css</li>
        </ul>
        <span className="flex justify-between text-primary">
          <a href="">Code</a>
          <a href="">Live Demo</a>
        </span>
      </div>
    </div>
  );
};

export default ProjectBox;
