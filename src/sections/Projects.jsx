import ProjectBox from "../components/ProjectBox";
const Projects = () => {
  return (
    <section>
      <h2>Projects.</h2>
      <ul className="flex justify-center space-x-6 py-10 items-center">
        <li>
          <a className="text-primary border-1 px-4 py-1 rounded-lg hover:bg-primary hover:text-white ">
            All
          </a>
        </li>
        <li>
          <a className="text-primary border-1 px-4 py-1 rounded-lg hover:bg-primary hover:text-white ">
            React
          </a>
        </li>
        <li>
          <a className="text-primary border-1 px-4 py-1 rounded-lg hover:bg-primary hover:text-white ">
            Node
          </a>
        </li>
        <li>
          <a className="text-primary border-1 px-4 py-1 rounded-lg hover:bg-primary hover:text-white ">
            CMS
          </a>
        </li>
        <li>
          <a className="text-primary border-1 px-4 py-1 rounded-lg hover:bg-primary hover:text-white ">
            File Manager
          </a>
        </li>
      </ul>
      <div className="flex flex-wrap gap-7">
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </div>
    </section>
  );
};

export default Projects;
