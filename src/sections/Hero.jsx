import { LiaDownloadSolid } from "react-icons/lia";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { TbBracketsAngle } from "react-icons/tb";
const Hero = () => {
  return (
    <section className="flex flex-col text-center justify-center text-xl space-y-8 w-[55%] mx-auto">
      <p className="flex gap-4 items-center mx-auto"><TbBracketsAngle />Software Developer</p>
      <h1 className="text-6xl font-bold">
        Hi, I'm <b className="text-primary">Ndichu James Kiberenge👋</b>
      </h1>
      <p>Crafting clean and scalable web solutions</p>
      <p className="w-[80%] mx-auto">
        I'm a passionate software developer with a knack for building functional
        and user-friendly web applications.
      </p>
      <div className="flex justify-evenly space-x-4">
        <a href="#projects" className="flex gap-4 items-center bg-primary hover:bg-tertiary text-white px-6 py-3 rounded-2xl"><FaWandMagicSparkles /> View projects </a>
        <a href="#contactMe" className="flex gap-4 items-center text-primary hover:bg-tertiary px-6 py-3 border-2 primary  rounded-2xl"><LiaDownloadSolid /> Contact Me </a>
      </div>
    </section>
  );
};

export default Hero;
